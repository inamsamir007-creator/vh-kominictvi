const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/galerie-D6ZSvLfV.js",
      "assets/proxy-BiqPpxvC.js",
      "assets/chevron-right-C_LbQ-xV.js",
      "assets/index-tNVL_pPX.js",
      "assets/zavady-a-posouzeni-TNPTfEo-.js",
      "assets/ServiceLayout-Bbmk9Xa6.js",
      "assets/vlozkovani-CxVyqQJa.js",
      "assets/revize-kominu-CuoBy1vJ.js",
      "assets/frezovani-DcI8y1Yt.js",
      "assets/cisteni-a-kontrola-DGyekxUd.js",
    ]),
) => i.map((i) => d[i]);
function $0(n, i) {
  for (var s = 0; s < i.length; s++) {
    const r = i[s];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const c in r)
        if (c !== "default" && !(c in n)) {
          const f = Object.getOwnPropertyDescriptor(r, c);
          f && Object.defineProperty(n, c, f.get ? f : { enumerable: !0, get: () => r[c] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function W0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var uc = { exports: {} },
  Li = {};
var Wm;
function tb() {
  if (Wm) return Li;
  Wm = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function s(r, c, f) {
    var h = null;
    if ((f !== void 0 && (h = "" + f), c.key !== void 0 && (h = "" + c.key), "key" in c)) {
      f = {};
      for (var y in c) y !== "key" && (f[y] = c[y]);
    } else f = c;
    return ((c = f.ref), { $$typeof: n, type: r, key: h, ref: c !== void 0 ? c : null, props: f });
  }
  return ((Li.Fragment = i), (Li.jsx = s), (Li.jsxs = s), Li);
}
var tp;
function eb() {
  return (tp || ((tp = 1), (uc.exports = tb())), uc.exports);
}
var O = eb(),
  oc = { exports: {} },
  ot = {};
var ep;
function nb() {
  if (ep) return ot;
  ep = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    v = Symbol.for("react.activity"),
    _ = Symbol.iterator;
  function x(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (_ && w[_]) || w["@@iterator"]), typeof w == "function" ? w : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    E = {};
  function z(w, V, F) {
    ((this.props = w), (this.context = V), (this.refs = E), (this.updater = F || A));
  }
  ((z.prototype.isReactComponent = {}),
    (z.prototype.setState = function (w, V) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, w, V, "setState");
    }),
    (z.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    }));
  function B() {}
  B.prototype = z.prototype;
  function X(w, V, F) {
    ((this.props = w), (this.context = V), (this.refs = E), (this.updater = F || A));
  }
  var G = (X.prototype = new B());
  ((G.constructor = X), j(G, z.prototype), (G.isPureReactComponent = !0));
  var K = Array.isArray;
  function J() {}
  var Y = { H: null, A: null, T: null, S: null },
    Z = Object.prototype.hasOwnProperty;
  function I(w, V, F) {
    var $ = F.ref;
    return { $$typeof: n, type: w, key: V, ref: $ !== void 0 ? $ : null, props: F };
  }
  function ut(w, V) {
    return I(w.type, V, w.props);
  }
  function st(w) {
    return typeof w == "object" && w !== null && w.$$typeof === n;
  }
  function it(w) {
    var V = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (F) {
        return V[F];
      })
    );
  }
  var Wt = /\/+/g;
  function Ut(w, V) {
    return typeof w == "object" && w !== null && w.key != null ? it("" + w.key) : V.toString(36);
  }
  function Gt(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (
          (typeof w.status == "string"
            ? w.then(J, J)
            : ((w.status = "pending"),
              w.then(
                function (V) {
                  w.status === "pending" && ((w.status = "fulfilled"), (w.value = V));
                },
                function (V) {
                  w.status === "pending" && ((w.status = "rejected"), (w.reason = V));
                },
              )),
          w.status)
        ) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function H(w, V, F, $, nt) {
    var dt = typeof w;
    (dt === "undefined" || dt === "boolean") && (w = null);
    var gt = !1;
    if (w === null) gt = !0;
    else
      switch (dt) {
        case "bigint":
        case "string":
        case "number":
          gt = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case n:
            case i:
              gt = !0;
              break;
            case b:
              return ((gt = w._init), H(gt(w._payload), V, F, $, nt));
          }
      }
    if (gt)
      return (
        (nt = nt(w)),
        (gt = $ === "" ? "." + Ut(w, 0) : $),
        K(nt)
          ? ((F = ""),
            gt != null && (F = gt.replace(Wt, "$&/") + "/"),
            H(nt, V, F, "", function (an) {
              return an;
            }))
          : nt != null &&
            (st(nt) &&
              (nt = ut(
                nt,
                F +
                  (nt.key == null || (w && w.key === nt.key)
                    ? ""
                    : ("" + nt.key).replace(Wt, "$&/") + "/") +
                  gt,
              )),
            V.push(nt)),
        1
      );
    gt = 0;
    var Qt = $ === "" ? "." : $ + ":";
    if (K(w))
      for (var Ot = 0; Ot < w.length; Ot++)
        (($ = w[Ot]), (dt = Qt + Ut($, Ot)), (gt += H($, V, F, dt, nt)));
    else if (((Ot = x(w)), typeof Ot == "function"))
      for (w = Ot.call(w), Ot = 0; !($ = w.next()).done; )
        (($ = $.value), (dt = Qt + Ut($, Ot++)), (gt += H($, V, F, dt, nt)));
    else if (dt === "object") {
      if (typeof w.then == "function") return H(Gt(w), V, F, $, nt);
      throw (
        (V = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (V === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : V) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return gt;
  }
  function P(w, V, F) {
    if (w == null) return w;
    var $ = [],
      nt = 0;
    return (
      H(w, $, "", "", function (dt) {
        return V.call(F, dt, nt++);
      }),
      $
    );
  }
  function lt(w) {
    if (w._status === -1) {
      var V = w._result;
      ((V = V()),
        V.then(
          function (F) {
            (w._status === 0 || w._status === -1) && ((w._status = 1), (w._result = F));
          },
          function (F) {
            (w._status === 0 || w._status === -1) && ((w._status = 2), (w._result = F));
          },
        ),
        w._status === -1 && ((w._status = 0), (w._result = V)));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var xt =
      typeof reportError == "function"
        ? reportError
        : function (w) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var V = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof w == "object" && w !== null && typeof w.message == "string"
                    ? String(w.message)
                    : String(w),
                error: w,
              });
              if (!window.dispatchEvent(V)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", w);
              return;
            }
            console.error(w);
          },
    Rt = {
      map: P,
      forEach: function (w, V, F) {
        P(
          w,
          function () {
            V.apply(this, arguments);
          },
          F,
        );
      },
      count: function (w) {
        var V = 0;
        return (
          P(w, function () {
            V++;
          }),
          V
        );
      },
      toArray: function (w) {
        return (
          P(w, function (V) {
            return V;
          }) || []
        );
      },
      only: function (w) {
        if (!st(w))
          throw Error("React.Children.only expected to receive a single React element child.");
        return w;
      },
    };
  return (
    (ot.Activity = v),
    (ot.Children = Rt),
    (ot.Component = z),
    (ot.Fragment = s),
    (ot.Profiler = c),
    (ot.PureComponent = X),
    (ot.StrictMode = r),
    (ot.Suspense = m),
    (ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y),
    (ot.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (w) {
        return Y.H.useMemoCache(w);
      },
    }),
    (ot.cache = function (w) {
      return function () {
        return w.apply(null, arguments);
      };
    }),
    (ot.cacheSignal = function () {
      return null;
    }),
    (ot.cloneElement = function (w, V, F) {
      if (w == null) throw Error("The argument must be a React element, but you passed " + w + ".");
      var $ = j({}, w.props),
        nt = w.key;
      if (V != null)
        for (dt in (V.key !== void 0 && (nt = "" + V.key), V))
          !Z.call(V, dt) ||
            dt === "key" ||
            dt === "__self" ||
            dt === "__source" ||
            (dt === "ref" && V.ref === void 0) ||
            ($[dt] = V[dt]);
      var dt = arguments.length - 2;
      if (dt === 1) $.children = F;
      else if (1 < dt) {
        for (var gt = Array(dt), Qt = 0; Qt < dt; Qt++) gt[Qt] = arguments[Qt + 2];
        $.children = gt;
      }
      return I(w.type, nt, $);
    }),
    (ot.createContext = function (w) {
      return (
        (w = {
          $$typeof: h,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (w.Provider = w),
        (w.Consumer = { $$typeof: f, _context: w }),
        w
      );
    }),
    (ot.createElement = function (w, V, F) {
      var $,
        nt = {},
        dt = null;
      if (V != null)
        for ($ in (V.key !== void 0 && (dt = "" + V.key), V))
          Z.call(V, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (nt[$] = V[$]);
      var gt = arguments.length - 2;
      if (gt === 1) nt.children = F;
      else if (1 < gt) {
        for (var Qt = Array(gt), Ot = 0; Ot < gt; Ot++) Qt[Ot] = arguments[Ot + 2];
        nt.children = Qt;
      }
      if (w && w.defaultProps)
        for ($ in ((gt = w.defaultProps), gt)) nt[$] === void 0 && (nt[$] = gt[$]);
      return I(w, dt, nt);
    }),
    (ot.createRef = function () {
      return { current: null };
    }),
    (ot.forwardRef = function (w) {
      return { $$typeof: y, render: w };
    }),
    (ot.isValidElement = st),
    (ot.lazy = function (w) {
      return { $$typeof: b, _payload: { _status: -1, _result: w }, _init: lt };
    }),
    (ot.memo = function (w, V) {
      return { $$typeof: p, type: w, compare: V === void 0 ? null : V };
    }),
    (ot.startTransition = function (w) {
      var V = Y.T,
        F = {};
      Y.T = F;
      try {
        var $ = w(),
          nt = Y.S;
        (nt !== null && nt(F, $),
          typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(J, xt));
      } catch (dt) {
        xt(dt);
      } finally {
        (V !== null && F.types !== null && (V.types = F.types), (Y.T = V));
      }
    }),
    (ot.unstable_useCacheRefresh = function () {
      return Y.H.useCacheRefresh();
    }),
    (ot.use = function (w) {
      return Y.H.use(w);
    }),
    (ot.useActionState = function (w, V, F) {
      return Y.H.useActionState(w, V, F);
    }),
    (ot.useCallback = function (w, V) {
      return Y.H.useCallback(w, V);
    }),
    (ot.useContext = function (w) {
      return Y.H.useContext(w);
    }),
    (ot.useDebugValue = function () {}),
    (ot.useDeferredValue = function (w, V) {
      return Y.H.useDeferredValue(w, V);
    }),
    (ot.useEffect = function (w, V) {
      return Y.H.useEffect(w, V);
    }),
    (ot.useEffectEvent = function (w) {
      return Y.H.useEffectEvent(w);
    }),
    (ot.useId = function () {
      return Y.H.useId();
    }),
    (ot.useImperativeHandle = function (w, V, F) {
      return Y.H.useImperativeHandle(w, V, F);
    }),
    (ot.useInsertionEffect = function (w, V) {
      return Y.H.useInsertionEffect(w, V);
    }),
    (ot.useLayoutEffect = function (w, V) {
      return Y.H.useLayoutEffect(w, V);
    }),
    (ot.useMemo = function (w, V) {
      return Y.H.useMemo(w, V);
    }),
    (ot.useOptimistic = function (w, V) {
      return Y.H.useOptimistic(w, V);
    }),
    (ot.useReducer = function (w, V, F) {
      return Y.H.useReducer(w, V, F);
    }),
    (ot.useRef = function (w) {
      return Y.H.useRef(w);
    }),
    (ot.useState = function (w) {
      return Y.H.useState(w);
    }),
    (ot.useSyncExternalStore = function (w, V, F) {
      return Y.H.useSyncExternalStore(w, V, F);
    }),
    (ot.useTransition = function () {
      return Y.H.useTransition();
    }),
    (ot.version = "19.2.7"),
    ot
  );
}
var np;
function Fi() {
  return (np || ((np = 1), (oc.exports = nb())), oc.exports);
}
var W = Fi();
const ql = W0(W),
  nR = $0({ __proto__: null, default: ql }, [W]);
var cc = { exports: {} },
  Ui = {},
  fc = { exports: {} },
  dc = {};
var ap;
function ab() {
  return (
    ap ||
      ((ap = 1),
      (function (n) {
        function i(H, P) {
          var lt = H.length;
          H.push(P);
          t: for (; 0 < lt; ) {
            var xt = (lt - 1) >>> 1,
              Rt = H[xt];
            if (0 < c(Rt, P)) ((H[xt] = P), (H[lt] = Rt), (lt = xt));
            else break t;
          }
        }
        function s(H) {
          return H.length === 0 ? null : H[0];
        }
        function r(H) {
          if (H.length === 0) return null;
          var P = H[0],
            lt = H.pop();
          if (lt !== P) {
            H[0] = lt;
            t: for (var xt = 0, Rt = H.length, w = Rt >>> 1; xt < w; ) {
              var V = 2 * (xt + 1) - 1,
                F = H[V],
                $ = V + 1,
                nt = H[$];
              if (0 > c(F, lt))
                $ < Rt && 0 > c(nt, F)
                  ? ((H[xt] = nt), (H[$] = lt), (xt = $))
                  : ((H[xt] = F), (H[V] = lt), (xt = V));
              else if ($ < Rt && 0 > c(nt, lt)) ((H[xt] = nt), (H[$] = lt), (xt = $));
              else break t;
            }
          }
          return P;
        }
        function c(H, P) {
          var lt = H.sortIndex - P.sortIndex;
          return lt !== 0 ? lt : H.id - P.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            y = h.now();
          n.unstable_now = function () {
            return h.now() - y;
          };
        }
        var m = [],
          p = [],
          b = 1,
          v = null,
          _ = 3,
          x = !1,
          A = !1,
          j = !1,
          E = !1,
          z = typeof setTimeout == "function" ? setTimeout : null,
          B = typeof clearTimeout == "function" ? clearTimeout : null,
          X = typeof setImmediate < "u" ? setImmediate : null;
        function G(H) {
          for (var P = s(p); P !== null; ) {
            if (P.callback === null) r(p);
            else if (P.startTime <= H) (r(p), (P.sortIndex = P.expirationTime), i(m, P));
            else break;
            P = s(p);
          }
        }
        function K(H) {
          if (((j = !1), G(H), !A))
            if (s(m) !== null) ((A = !0), J || ((J = !0), it()));
            else {
              var P = s(p);
              P !== null && Gt(K, P.startTime - H);
            }
        }
        var J = !1,
          Y = -1,
          Z = 5,
          I = -1;
        function ut() {
          return E ? !0 : !(n.unstable_now() - I < Z);
        }
        function st() {
          if (((E = !1), J)) {
            var H = n.unstable_now();
            I = H;
            var P = !0;
            try {
              t: {
                ((A = !1), j && ((j = !1), B(Y), (Y = -1)), (x = !0));
                var lt = _;
                try {
                  e: {
                    for (G(H), v = s(m); v !== null && !(v.expirationTime > H && ut()); ) {
                      var xt = v.callback;
                      if (typeof xt == "function") {
                        ((v.callback = null), (_ = v.priorityLevel));
                        var Rt = xt(v.expirationTime <= H);
                        if (((H = n.unstable_now()), typeof Rt == "function")) {
                          ((v.callback = Rt), G(H), (P = !0));
                          break e;
                        }
                        (v === s(m) && r(m), G(H));
                      } else r(m);
                      v = s(m);
                    }
                    if (v !== null) P = !0;
                    else {
                      var w = s(p);
                      (w !== null && Gt(K, w.startTime - H), (P = !1));
                    }
                  }
                  break t;
                } finally {
                  ((v = null), (_ = lt), (x = !1));
                }
                P = void 0;
              }
            } finally {
              P ? it() : (J = !1);
            }
          }
        }
        var it;
        if (typeof X == "function")
          it = function () {
            X(st);
          };
        else if (typeof MessageChannel < "u") {
          var Wt = new MessageChannel(),
            Ut = Wt.port2;
          ((Wt.port1.onmessage = st),
            (it = function () {
              Ut.postMessage(null);
            }));
        } else
          it = function () {
            z(st, 0);
          };
        function Gt(H, P) {
          Y = z(function () {
            H(n.unstable_now());
          }, P);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (n.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Z = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return _;
          }),
          (n.unstable_next = function (H) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var P = 3;
                break;
              default:
                P = _;
            }
            var lt = _;
            _ = P;
            try {
              return H();
            } finally {
              _ = lt;
            }
          }),
          (n.unstable_requestPaint = function () {
            E = !0;
          }),
          (n.unstable_runWithPriority = function (H, P) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var lt = _;
            _ = H;
            try {
              return P();
            } finally {
              _ = lt;
            }
          }),
          (n.unstable_scheduleCallback = function (H, P, lt) {
            var xt = n.unstable_now();
            switch (
              (typeof lt == "object" && lt !== null
                ? ((lt = lt.delay), (lt = typeof lt == "number" && 0 < lt ? xt + lt : xt))
                : (lt = xt),
              H)
            ) {
              case 1:
                var Rt = -1;
                break;
              case 2:
                Rt = 250;
                break;
              case 5:
                Rt = 1073741823;
                break;
              case 4:
                Rt = 1e4;
                break;
              default:
                Rt = 5e3;
            }
            return (
              (Rt = lt + Rt),
              (H = {
                id: b++,
                callback: P,
                priorityLevel: H,
                startTime: lt,
                expirationTime: Rt,
                sortIndex: -1,
              }),
              lt > xt
                ? ((H.sortIndex = lt),
                  i(p, H),
                  s(m) === null && H === s(p) && (j ? (B(Y), (Y = -1)) : (j = !0), Gt(K, lt - xt)))
                : ((H.sortIndex = Rt), i(m, H), A || x || ((A = !0), J || ((J = !0), it()))),
              H
            );
          }),
          (n.unstable_shouldYield = ut),
          (n.unstable_wrapCallback = function (H) {
            var P = _;
            return function () {
              var lt = _;
              _ = P;
              try {
                return H.apply(this, arguments);
              } finally {
                _ = lt;
              }
            };
          }));
      })(dc)),
    dc
  );
}
var lp;
function lb() {
  return (lp || ((lp = 1), (fc.exports = ab())), fc.exports);
}
var hc = { exports: {} },
  fe = {};
var ip;
function ib() {
  if (ip) return fe;
  ip = 1;
  var n = Fi();
  function i(m) {
    var p = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++) p += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(i(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function f(m, p, b) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: v == null ? null : "" + v,
      children: m,
      containerInfo: p,
      implementation: b,
    };
  }
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(m, p) {
    if (m === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (fe.createPortal = function (m, p) {
      var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)) throw Error(i(299));
      return f(m, p, null, b);
    }),
    (fe.flushSync = function (m) {
      var p = h.T,
        b = r.p;
      try {
        if (((h.T = null), (r.p = 2), m)) return m();
      } finally {
        ((h.T = p), (r.p = b), r.d.f());
      }
    }),
    (fe.preconnect = function (m, p) {
      typeof m == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p = typeof p == "string" ? (p === "use-credentials" ? p : "") : void 0))
          : (p = null),
        r.d.C(m, p));
    }),
    (fe.prefetchDNS = function (m) {
      typeof m == "string" && r.d.D(m);
    }),
    (fe.preinit = function (m, p) {
      if (typeof m == "string" && p && typeof p.as == "string") {
        var b = p.as,
          v = y(b, p.crossOrigin),
          _ = typeof p.integrity == "string" ? p.integrity : void 0,
          x = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        b === "style"
          ? r.d.S(m, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: v,
              integrity: _,
              fetchPriority: x,
            })
          : b === "script" &&
            r.d.X(m, {
              crossOrigin: v,
              integrity: _,
              fetchPriority: x,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (fe.preinitModule = function (m, p) {
      if (typeof m == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var b = y(p.as, p.crossOrigin);
            r.d.M(m, {
              crossOrigin: b,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && r.d.M(m);
    }),
    (fe.preload = function (m, p) {
      if (typeof m == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
        var b = p.as,
          v = y(b, p.crossOrigin);
        r.d.L(m, b, {
          crossOrigin: v,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (fe.preloadModule = function (m, p) {
      if (typeof m == "string")
        if (p) {
          var b = y(p.as, p.crossOrigin);
          r.d.m(m, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: b,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else r.d.m(m);
    }),
    (fe.requestFormReset = function (m) {
      r.d.r(m);
    }),
    (fe.unstable_batchedUpdates = function (m, p) {
      return m(p);
    }),
    (fe.useFormState = function (m, p, b) {
      return h.H.useFormState(m, p, b);
    }),
    (fe.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (fe.version = "19.2.7"),
    fe
  );
}
var sp;
function ry() {
  if (sp) return hc.exports;
  sp = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (hc.exports = ib()), hc.exports);
}
var rp;
function sb() {
  if (rp) return Ui;
  rp = 1;
  var n = lb(),
    i = Fi(),
    s = ry();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (f(t) !== t) throw Error(r(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var a = t, l = e; ; ) {
      var u = a.return;
      if (u === null) break;
      var o = u.alternate;
      if (o === null) {
        if (((l = u.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (u.child === o.child) {
        for (o = u.child; o; ) {
          if (o === a) return (m(u), t);
          if (o === l) return (m(u), e);
          o = o.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== l.return) ((a = u), (l = o));
      else {
        for (var d = !1, g = u.child; g; ) {
          if (g === a) {
            ((d = !0), (a = u), (l = o));
            break;
          }
          if (g === l) {
            ((d = !0), (l = u), (a = o));
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = o.child; g; ) {
            if (g === a) {
              ((d = !0), (a = o), (l = u));
              break;
            }
            if (g === l) {
              ((d = !0), (l = o), (a = u));
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(r(189));
        }
      }
      if (a.alternate !== l) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? t : e;
  }
  function b(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = b(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var v = Object.assign,
    _ = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.portal"),
    j = Symbol.for("react.fragment"),
    E = Symbol.for("react.strict_mode"),
    z = Symbol.for("react.profiler"),
    B = Symbol.for("react.consumer"),
    X = Symbol.for("react.context"),
    G = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    J = Symbol.for("react.suspense_list"),
    Y = Symbol.for("react.memo"),
    Z = Symbol.for("react.lazy"),
    I = Symbol.for("react.activity"),
    ut = Symbol.for("react.memo_cache_sentinel"),
    st = Symbol.iterator;
  function it(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (st && t[st]) || t["@@iterator"]), typeof t == "function" ? t : null);
  }
  var Wt = Symbol.for("react.client.reference");
  function Ut(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === Wt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case j:
        return "Fragment";
      case z:
        return "Profiler";
      case E:
        return "StrictMode";
      case K:
        return "Suspense";
      case J:
        return "SuspenseList";
      case I:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case A:
          return "Portal";
        case X:
          return t.displayName || "Context";
        case B:
          return (t._context.displayName || "Context") + ".Consumer";
        case G:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Y:
          return ((e = t.displayName || null), e !== null ? e : Ut(t.type) || "Memo");
        case Z:
          ((e = t._payload), (t = t._init));
          try {
            return Ut(t(e));
          } catch {}
      }
    return null;
  }
  var Gt = Array.isArray,
    H = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    lt = { pending: !1, data: null, method: null, action: null },
    xt = [],
    Rt = -1;
  function w(t) {
    return { current: t };
  }
  function V(t) {
    0 > Rt || ((t.current = xt[Rt]), (xt[Rt] = null), Rt--);
  }
  function F(t, e) {
    (Rt++, (xt[Rt] = t.current), (t.current = e));
  }
  var $ = w(null),
    nt = w(null),
    dt = w(null),
    gt = w(null);
  function Qt(t, e) {
    switch ((F(dt, e), F(nt, t), F($, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? xm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = xm(e)), (t = Em(e, t)));
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
    (V($), F($, t));
  }
  function Ot() {
    (V($), V(nt), V(dt));
  }
  function an(t) {
    t.memoizedState !== null && F(gt, t);
    var e = $.current,
      a = Em(e, t.type);
    e !== a && (F(nt, t), F($, a));
  }
  function ln(t) {
    (nt.current === t && (V($), V(nt)), gt.current === t && (V(gt), (Ci._currentValue = lt)));
  }
  var jn, Yl;
  function Pe(t) {
    if (jn === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        ((jn = (e && e[1]) || ""),
          (Yl =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      jn +
      t +
      Yl
    );
  }
  var Gl = !1;
  function ka(t, e) {
    if (!t || Gl) return "";
    Gl = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var k = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(k.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(k, []);
                } catch (U) {
                  var L = U;
                }
                Reflect.construct(t, [], k);
              } else {
                try {
                  k.call();
                } catch (U) {
                  L = U;
                }
                t.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                L = U;
              }
              (k = t()) && typeof k.catch == "function" && k.catch(function () {});
            }
          } catch (U) {
            if (U && L && typeof U.stack == "string") return [U.stack, L.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      u &&
        u.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = l.DetermineComponentFrameRoot(),
        d = o[0],
        g = o[1];
      if (d && g) {
        var R = d.split(`
`),
          N = g.split(`
`);
        for (u = l = 0; l < R.length && !R[l].includes("DetermineComponentFrameRoot"); ) l++;
        for (; u < N.length && !N[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (l === R.length || u === N.length)
          for (l = R.length - 1, u = N.length - 1; 1 <= l && 0 <= u && R[l] !== N[u]; ) u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (R[l] !== N[u]) {
            if (l !== 1 || u !== 1)
              do
                if ((l--, u--, 0 > u || R[l] !== N[u])) {
                  var q =
                    `
` + R[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      q.includes("<anonymous>") &&
                      (q = q.replace("<anonymous>", t.displayName)),
                    q
                  );
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      ((Gl = !1), (Error.prepareStackTrace = a));
    }
    return (a = t ? t.displayName || t.name : "") ? Pe(a) : "";
  }
  function ts(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Pe(t.type);
      case 16:
        return Pe("Lazy");
      case 13:
        return t.child !== e && e !== null ? Pe("Suspense Fallback") : Pe("Suspense");
      case 19:
        return Pe("SuspenseList");
      case 0:
      case 15:
        return ka(t.type, !1);
      case 11:
        return ka(t.type.render, !1);
      case 1:
        return ka(t.type, !0);
      case 31:
        return Pe("Activity");
      default:
        return "";
    }
  }
  function sn(t) {
    try {
      var e = "",
        a = null;
      do ((e += ts(t, a)), (a = t), (t = t.return));
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var da = Object.prototype.hasOwnProperty,
    Ve = n.unstable_scheduleCallback,
    Ql = n.unstable_cancelCallback,
    es = n.unstable_shouldYield,
    Pr = n.unstable_requestPaint,
    ce = n.unstable_now,
    Dt = n.unstable_getCurrentPriorityLevel,
    ae = n.unstable_ImmediatePriority,
    Je = n.unstable_UserBlockingPriority,
    Xa = n.unstable_NormalPriority,
    Dv = n.unstable_LowPriority,
    ef = n.unstable_IdlePriority,
    Nv = n.log,
    Lv = n.unstable_setDisableYieldValue,
    Vl = null,
    Re = null;
  function Dn(t) {
    if ((typeof Nv == "function" && Lv(t), Re && typeof Re.setStrictMode == "function"))
      try {
        Re.setStrictMode(Vl, t);
      } catch {}
  }
  var Te = Math.clz32 ? Math.clz32 : Hv,
    Uv = Math.log,
    Bv = Math.LN2;
  function Hv(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Uv(t) / Bv) | 0)) | 0);
  }
  var ns = 256,
    as = 262144,
    ls = 4194304;
  function ha(t) {
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
  function is(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var u = 0,
      o = t.suspendedLanes,
      d = t.pingedLanes;
    t = t.warmLanes;
    var g = l & 134217727;
    return (
      g !== 0
        ? ((l = g & ~o),
          l !== 0
            ? (u = ha(l))
            : ((d &= g), d !== 0 ? (u = ha(d)) : a || ((a = g & ~t), a !== 0 && (u = ha(a)))))
        : ((g = l & ~o),
          g !== 0
            ? (u = ha(g))
            : d !== 0
              ? (u = ha(d))
              : a || ((a = l & ~t), a !== 0 && (u = ha(a)))),
      u === 0
        ? 0
        : e !== 0 &&
            e !== u &&
            (e & o) === 0 &&
            ((o = u & -u), (a = e & -e), o >= a || (o === 32 && (a & 4194048) !== 0))
          ? e
          : u
    );
  }
  function kl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function qv(t, e) {
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
  function nf() {
    var t = ls;
    return ((ls <<= 1), (ls & 62914560) === 0 && (ls = 4194304), t);
  }
  function Jr(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function Xl(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Yv(t, e, a, l, u, o) {
    var d = t.pendingLanes;
    ((t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0));
    var g = t.entanglements,
      R = t.expirationTimes,
      N = t.hiddenUpdates;
    for (a = d & ~a; 0 < a; ) {
      var q = 31 - Te(a),
        k = 1 << q;
      ((g[q] = 0), (R[q] = -1));
      var L = N[q];
      if (L !== null)
        for (N[q] = null, q = 0; q < L.length; q++) {
          var U = L[q];
          U !== null && (U.lane &= -536870913);
        }
      a &= ~k;
    }
    (l !== 0 && af(t, l, 0),
      o !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(d & ~e)));
  }
  function af(t, e, a) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var l = 31 - Te(e);
    ((t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (a & 261930)));
  }
  function lf(t, e) {
    var a = (t.entangledLanes |= e);
    for (t = t.entanglements; a; ) {
      var l = 31 - Te(a),
        u = 1 << l;
      ((u & e) | (t[l] & e) && (t[l] |= e), (a &= ~u));
    }
  }
  function sf(t, e) {
    var a = e & -e;
    return ((a = (a & 42) !== 0 ? 1 : Fr(a)), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a);
  }
  function Fr(t) {
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
  function Ir(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function rf() {
    var t = P.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Km(t.type));
  }
  function uf(t, e) {
    var a = P.p;
    try {
      return ((P.p = t), e());
    } finally {
      P.p = a;
    }
  }
  var Nn = Math.random().toString(36).slice(2),
    le = "__reactFiber$" + Nn,
    pe = "__reactProps$" + Nn,
    Ka = "__reactContainer$" + Nn,
    $r = "__reactEvents$" + Nn,
    Gv = "__reactListeners$" + Nn,
    Qv = "__reactHandles$" + Nn,
    of = "__reactResources$" + Nn,
    Kl = "__reactMarker$" + Nn;
  function Wr(t) {
    (delete t[le], delete t[pe], delete t[$r], delete t[Gv], delete t[Qv]);
  }
  function Za(t) {
    var e = t[le];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if ((e = a[Ka] || a[le])) {
        if (((a = e.alternate), e.child !== null || (a !== null && a.child !== null)))
          for (t = Om(t); t !== null; ) {
            if ((a = t[le])) return a;
            t = Om(t);
          }
        return e;
      }
      ((t = a), (a = t.parentNode));
    }
    return null;
  }
  function Pa(t) {
    if ((t = t[le] || t[Ka])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Zl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Ja(t) {
    var e = t[of];
    return (e || (e = t[of] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function te(t) {
    t[Kl] = !0;
  }
  var cf = new Set(),
    ff = {};
  function ma(t, e) {
    (Fa(t, e), Fa(t + "Capture", e));
  }
  function Fa(t, e) {
    for (ff[t] = e, t = 0; t < e.length; t++) cf.add(e[t]);
  }
  var Vv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    df = {},
    hf = {};
  function kv(t) {
    return da.call(hf, t)
      ? !0
      : da.call(df, t)
        ? !1
        : Vv.test(t)
          ? (hf[t] = !0)
          : ((df[t] = !0), !1);
  }
  function ss(t, e, a) {
    if (kv(e))
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
  function rs(t, e, a) {
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
  function rn(t, e, a, l) {
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
  function De(t) {
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
  function mf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Xv(t, e, a) {
    var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        o = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (d) {
            ((a = "" + d), o.call(this, d));
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (d) {
            a = "" + d;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function tu(t) {
    if (!t._valueTracker) {
      var e = mf(t) ? "checked" : "value";
      t._valueTracker = Xv(t, e, "" + t[e]);
    }
  }
  function pf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(),
      l = "";
    return (
      t && (l = mf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== a ? (e.setValue(t), !0) : !1
    );
  }
  function us(t) {
    if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Kv = /[\n"\\]/g;
  function Ne(t) {
    return t.replace(Kv, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function eu(t, e, a, l, u, o, d, g) {
    ((t.name = ""),
      d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean"
        ? (t.type = d)
        : t.removeAttribute("type"),
      e != null
        ? d === "number"
          ? ((e === 0 && t.value === "") || t.value != e) && (t.value = "" + De(e))
          : t.value !== "" + De(e) && (t.value = "" + De(e))
        : (d !== "submit" && d !== "reset") || t.removeAttribute("value"),
      e != null
        ? nu(t, d, De(e))
        : a != null
          ? nu(t, d, De(a))
          : l != null && t.removeAttribute("value"),
      u == null && o != null && (t.defaultChecked = !!o),
      u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean"
        ? (t.name = "" + De(g))
        : t.removeAttribute("name"));
  }
  function yf(t, e, a, l, u, o, d, g) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || a != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) {
        tu(t);
        return;
      }
      ((a = a != null ? "" + De(a) : ""),
        (e = e != null ? "" + De(e) : a),
        g || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((l = l ?? u),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = g ? t.checked : !!l),
      (t.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.name = d),
      tu(t));
  }
  function nu(t, e, a) {
    (e === "number" && us(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function Ia(t, e, a, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < a.length; u++) e["$" + a[u]] = !0;
      for (a = 0; a < t.length; a++)
        ((u = e.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== u && (t[a].selected = u),
          u && l && (t[a].defaultSelected = !0));
    } else {
      for (a = "" + De(a), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === a) {
          ((t[u].selected = !0), l && (t[u].defaultSelected = !0));
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function vf(t, e, a) {
    if (e != null && ((e = "" + De(e)), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + De(a) : "";
  }
  function gf(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(r(92));
        if (Gt(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ""), (e = a));
    }
    ((a = De(e)),
      (t.defaultValue = a),
      (l = t.textContent),
      l === a && l !== "" && l !== null && (t.value = l),
      tu(t));
  }
  function $a(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Zv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function bf(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : l
        ? t.setProperty(e, a)
        : typeof a != "number" || a === 0 || Zv.has(e)
          ? e === "float"
            ? (t.cssFloat = a)
            : (t[e] = ("" + a).trim())
          : (t[e] = a + "px");
  }
  function Sf(t, e, a) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
              ? (t.cssFloat = "")
              : (t[l] = ""));
      for (var u in e) ((l = e[u]), e.hasOwnProperty(u) && a[u] !== l && bf(t, u, l));
    } else for (var o in e) e.hasOwnProperty(o) && bf(t, o, e[o]);
  }
  function au(t) {
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
  var Pv = new Map([
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
      ["xHeight", "x-height"],
    ]),
    Jv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function os(t) {
    return Jv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function un() {}
  var lu = null;
  function iu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Wa = null,
    tl = null;
  function _f(t) {
    var e = Pa(t);
    if (e && (t = e.stateNode)) {
      var a = t[pe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (eu(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (e = a.name),
            a.type === "radio" && e != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll('input[name="' + Ne("" + e) + '"][type="radio"]'), e = 0;
              e < a.length;
              e++
            ) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var u = l[pe] || null;
                if (!u) throw Error(r(90));
                eu(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (e = 0; e < a.length; e++) ((l = a[e]), l.form === t.form && pf(l));
          }
          break t;
        case "textarea":
          vf(t, a.value, a.defaultValue);
          break t;
        case "select":
          ((e = a.value), e != null && Ia(t, !!a.multiple, e, !1));
      }
    }
  }
  var su = !1;
  function xf(t, e, a) {
    if (su) return t(e, a);
    su = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((su = !1),
        (Wa !== null || tl !== null) &&
          (Fs(), Wa && ((e = Wa), (t = tl), (tl = Wa = null), _f(e), t)))
      )
        for (e = 0; e < t.length; e++) _f(t[e]);
    }
  }
  function Pl(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[pe] || null;
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
        ((l = !l.disabled) ||
          ((t = t.type),
          (l = !(t === "button" || t === "input" || t === "select" || t === "textarea"))),
          (t = !l));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(r(231, e, typeof a));
    return a;
  }
  var on = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ru = !1;
  if (on)
    try {
      var Jl = {};
      (Object.defineProperty(Jl, "passive", {
        get: function () {
          ru = !0;
        },
      }),
        window.addEventListener("test", Jl, Jl),
        window.removeEventListener("test", Jl, Jl));
    } catch {
      ru = !1;
    }
  var Ln = null,
    uu = null,
    cs = null;
  function Ef() {
    if (cs) return cs;
    var t,
      e = uu,
      a = e.length,
      l,
      u = "value" in Ln ? Ln.value : Ln.textContent,
      o = u.length;
    for (t = 0; t < a && e[t] === u[t]; t++);
    var d = a - t;
    for (l = 1; l <= d && e[a - l] === u[o - l]; l++);
    return (cs = u.slice(t, 1 < l ? 1 - l : void 0));
  }
  function fs(t) {
    var e = t.keyCode;
    return (
      "charCode" in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function ds() {
    return !0;
  }
  function Rf() {
    return !1;
  }
  function ye(t) {
    function e(a, l, u, o, d) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = o),
        (this.target = d),
        (this.currentTarget = null));
      for (var g in t) t.hasOwnProperty(g) && ((a = t[g]), (this[g] = a ? a(o) : o[g]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? ds
          : Rf),
        (this.isPropagationStopped = Rf),
        this
      );
    }
    return (
      v(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = ds));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = ds));
        },
        persist: function () {},
        isPersistent: ds,
      }),
      e
    );
  }
  var pa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    hs = ye(pa),
    Fl = v({}, pa, { view: 0, detail: 0 }),
    Fv = ye(Fl),
    ou,
    cu,
    Il,
    ms = v({}, Fl, {
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
      getModifierState: du,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Il &&
              (Il && t.type === "mousemove"
                ? ((ou = t.screenX - Il.screenX), (cu = t.screenY - Il.screenY))
                : (cu = ou = 0),
              (Il = t)),
            ou);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : cu;
      },
    }),
    Tf = ye(ms),
    Iv = v({}, ms, { dataTransfer: 0 }),
    $v = ye(Iv),
    Wv = v({}, Fl, { relatedTarget: 0 }),
    fu = ye(Wv),
    tg = v({}, pa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    eg = ye(tg),
    ng = v({}, pa, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ag = ye(ng),
    lg = v({}, pa, { data: 0 }),
    Af = ye(lg),
    ig = {
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
      MozPrintableKey: "Unidentified",
    },
    sg = {
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
      224: "Meta",
    },
    rg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ug(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = rg[t]) ? !!e[t] : !1;
  }
  function du() {
    return ug;
  }
  var og = v({}, Fl, {
      key: function (t) {
        if (t.key) {
          var e = ig[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = fs(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? sg[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: du,
      charCode: function (t) {
        return t.type === "keypress" ? fs(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? fs(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    cg = ye(og),
    fg = v({}, ms, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Mf = ye(fg),
    dg = v({}, Fl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: du,
    }),
    hg = ye(dg),
    mg = v({}, pa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pg = ye(mg),
    yg = v({}, ms, {
      deltaX: function (t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    vg = ye(yg),
    gg = v({}, pa, { newState: 0, oldState: 0 }),
    bg = ye(gg),
    Sg = [9, 13, 27, 32],
    hu = on && "CompositionEvent" in window,
    $l = null;
  on && "documentMode" in document && ($l = document.documentMode);
  var _g = on && "TextEvent" in window && !$l,
    wf = on && (!hu || ($l && 8 < $l && 11 >= $l)),
    zf = " ",
    Of = !1;
  function Cf(t, e) {
    switch (t) {
      case "keyup":
        return Sg.indexOf(e.keyCode) !== -1;
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
  function jf(t) {
    return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
  }
  var el = !1;
  function xg(t, e) {
    switch (t) {
      case "compositionend":
        return jf(e);
      case "keypress":
        return e.which !== 32 ? null : ((Of = !0), zf);
      case "textInput":
        return ((t = e.data), t === zf && Of ? null : t);
      default:
        return null;
    }
  }
  function Eg(t, e) {
    if (el)
      return t === "compositionend" || (!hu && Cf(t, e))
        ? ((t = Ef()), (cs = uu = Ln = null), (el = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return wf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Rg = {
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
    week: !0,
  };
  function Df(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Rg[t.type] : e === "textarea";
  }
  function Nf(t, e, a, l) {
    (Wa ? (tl ? tl.push(l) : (tl = [l])) : (Wa = l),
      (e = ar(e, "onChange")),
      0 < e.length &&
        ((a = new hs("onChange", "change", null, a, l)), t.push({ event: a, listeners: e })));
  }
  var Wl = null,
    ti = null;
  function Tg(t) {
    ym(t, 0);
  }
  function ps(t) {
    var e = Zl(t);
    if (pf(e)) return t;
  }
  function Lf(t, e) {
    if (t === "change") return e;
  }
  var Uf = !1;
  if (on) {
    var mu;
    if (on) {
      var pu = "oninput" in document;
      if (!pu) {
        var Bf = document.createElement("div");
        (Bf.setAttribute("oninput", "return;"), (pu = typeof Bf.oninput == "function"));
      }
      mu = pu;
    } else mu = !1;
    Uf = mu && (!document.documentMode || 9 < document.documentMode);
  }
  function Hf() {
    Wl && (Wl.detachEvent("onpropertychange", qf), (ti = Wl = null));
  }
  function qf(t) {
    if (t.propertyName === "value" && ps(ti)) {
      var e = [];
      (Nf(e, ti, t, iu(t)), xf(Tg, e));
    }
  }
  function Ag(t, e, a) {
    t === "focusin"
      ? (Hf(), (Wl = e), (ti = a), Wl.attachEvent("onpropertychange", qf))
      : t === "focusout" && Hf();
  }
  function Mg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return ps(ti);
  }
  function wg(t, e) {
    if (t === "click") return ps(e);
  }
  function zg(t, e) {
    if (t === "input" || t === "change") return ps(e);
  }
  function Og(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ae = typeof Object.is == "function" ? Object.is : Og;
  function ei(t, e) {
    if (Ae(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var a = Object.keys(t),
      l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var u = a[l];
      if (!da.call(e, u) || !Ae(t[u], e[u])) return !1;
    }
    return !0;
  }
  function Yf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Gf(t, e) {
    var a = Yf(t);
    t = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = t + a.textContent.length), t <= e && l >= e)) return { node: a, offset: e - t };
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
      a = Yf(a);
    }
  }
  function Qf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Qf(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Vf(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = us(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = us(t.document);
    }
    return e;
  }
  function yu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Cg = on && "documentMode" in document && 11 >= document.documentMode,
    nl = null,
    vu = null,
    ni = null,
    gu = !1;
  function kf(t, e, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    gu ||
      nl == null ||
      nl !== us(l) ||
      ((l = nl),
      "selectionStart" in l && yu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (ni && ei(ni, l)) ||
        ((ni = l),
        (l = ar(vu, "onSelect")),
        0 < l.length &&
          ((e = new hs("onSelect", "select", null, e, a)),
          t.push({ event: e, listeners: l }),
          (e.target = nl))));
  }
  function ya(t, e) {
    var a = {};
    return (
      (a[t.toLowerCase()] = e.toLowerCase()),
      (a["Webkit" + t] = "webkit" + e),
      (a["Moz" + t] = "moz" + e),
      a
    );
  }
  var al = {
      animationend: ya("Animation", "AnimationEnd"),
      animationiteration: ya("Animation", "AnimationIteration"),
      animationstart: ya("Animation", "AnimationStart"),
      transitionrun: ya("Transition", "TransitionRun"),
      transitionstart: ya("Transition", "TransitionStart"),
      transitioncancel: ya("Transition", "TransitionCancel"),
      transitionend: ya("Transition", "TransitionEnd"),
    },
    bu = {},
    Xf = {};
  on &&
    ((Xf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete al.animationend.animation,
      delete al.animationiteration.animation,
      delete al.animationstart.animation),
    "TransitionEvent" in window || delete al.transitionend.transition);
  function va(t) {
    if (bu[t]) return bu[t];
    if (!al[t]) return t;
    var e = al[t],
      a;
    for (a in e) if (e.hasOwnProperty(a) && a in Xf) return (bu[t] = e[a]);
    return t;
  }
  var Kf = va("animationend"),
    Zf = va("animationiteration"),
    Pf = va("animationstart"),
    jg = va("transitionrun"),
    Dg = va("transitionstart"),
    Ng = va("transitioncancel"),
    Jf = va("transitionend"),
    Ff = new Map(),
    Su =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Su.push("scrollEnd");
  function ke(t, e) {
    (Ff.set(t, e), ma(e, [t]));
  }
  var ys =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" && t !== null && typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Le = [],
    ll = 0,
    _u = 0;
  function vs() {
    for (var t = ll, e = (_u = ll = 0); e < t; ) {
      var a = Le[e];
      Le[e++] = null;
      var l = Le[e];
      Le[e++] = null;
      var u = Le[e];
      Le[e++] = null;
      var o = Le[e];
      if (((Le[e++] = null), l !== null && u !== null)) {
        var d = l.pending;
        (d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)), (l.pending = u));
      }
      o !== 0 && If(a, u, o);
    }
  }
  function gs(t, e, a, l) {
    ((Le[ll++] = t),
      (Le[ll++] = e),
      (Le[ll++] = a),
      (Le[ll++] = l),
      (_u |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l));
  }
  function xu(t, e, a, l) {
    return (gs(t, e, a, l), bs(t));
  }
  function ga(t, e) {
    return (gs(t, null, null, e), bs(t));
  }
  function If(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var u = !1, o = t.return; o !== null; )
      ((o.childLanes |= a),
        (l = o.alternate),
        l !== null && (l.childLanes |= a),
        o.tag === 22 && ((t = o.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = o),
        (o = o.return));
    return t.tag === 3
      ? ((o = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - Te(a)),
          (t = o.hiddenUpdates),
          (l = t[u]),
          l === null ? (t[u] = [e]) : l.push(e),
          (e.lane = a | 536870912)),
        o)
      : null;
  }
  function bs(t) {
    if (50 < Ri) throw ((Ri = 0), (jo = null), Error(r(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var il = {};
  function Lg(t, e, a, l) {
    ((this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Me(t, e, a, l) {
    return new Lg(t, e, a, l);
  }
  function Eu(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function cn(t, e) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = Me(t.tag, e, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = e),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function $f(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (e = a.dependencies),
          (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Ss(t, e, a, l, u, o) {
    var d = 0;
    if (((l = t), typeof t == "function")) Eu(t) && (d = 1);
    else if (typeof t == "string")
      d = Y0(t, a, $.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case I:
          return ((t = Me(31, a, e, u)), (t.elementType = I), (t.lanes = o), t);
        case j:
          return ba(a.children, u, o, e);
        case E:
          ((d = 8), (u |= 24));
          break;
        case z:
          return ((t = Me(12, a, e, u | 2)), (t.elementType = z), (t.lanes = o), t);
        case K:
          return ((t = Me(13, a, e, u)), (t.elementType = K), (t.lanes = o), t);
        case J:
          return ((t = Me(19, a, e, u)), (t.elementType = J), (t.lanes = o), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case X:
                d = 10;
                break t;
              case B:
                d = 9;
                break t;
              case G:
                d = 11;
                break t;
              case Y:
                d = 14;
                break t;
              case Z:
                ((d = 16), (l = null));
                break t;
            }
          ((d = 29), (a = Error(r(130, t === null ? "null" : typeof t, ""))), (l = null));
      }
    return ((e = Me(d, a, e, u)), (e.elementType = t), (e.type = l), (e.lanes = o), e);
  }
  function ba(t, e, a, l) {
    return ((t = Me(7, t, l, e)), (t.lanes = a), t);
  }
  function Ru(t, e, a) {
    return ((t = Me(6, t, null, e)), (t.lanes = a), t);
  }
  function Wf(t) {
    var e = Me(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Tu(t, e, a) {
    return (
      (e = Me(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = a),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var td = new WeakMap();
  function Ue(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = td.get(t);
      return a !== void 0 ? a : ((e = { value: t, source: e, stack: sn(e) }), td.set(t, e), e);
    }
    return { value: t, source: e, stack: sn(e) };
  }
  var sl = [],
    rl = 0,
    _s = null,
    ai = 0,
    Be = [],
    He = 0,
    Un = null,
    Fe = 1,
    Ie = "";
  function fn(t, e) {
    ((sl[rl++] = ai), (sl[rl++] = _s), (_s = t), (ai = e));
  }
  function ed(t, e, a) {
    ((Be[He++] = Fe), (Be[He++] = Ie), (Be[He++] = Un), (Un = t));
    var l = Fe;
    t = Ie;
    var u = 32 - Te(l) - 1;
    ((l &= ~(1 << u)), (a += 1));
    var o = 32 - Te(e) + u;
    if (30 < o) {
      var d = u - (u % 5);
      ((o = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (u -= d),
        (Fe = (1 << (32 - Te(e) + u)) | (a << u) | l),
        (Ie = o + t));
    } else ((Fe = (1 << o) | (a << u) | l), (Ie = t));
  }
  function Au(t) {
    t.return !== null && (fn(t, 1), ed(t, 1, 0));
  }
  function Mu(t) {
    for (; t === _s; ) ((_s = sl[--rl]), (sl[rl] = null), (ai = sl[--rl]), (sl[rl] = null));
    for (; t === Un; )
      ((Un = Be[--He]),
        (Be[He] = null),
        (Ie = Be[--He]),
        (Be[He] = null),
        (Fe = Be[--He]),
        (Be[He] = null));
  }
  function nd(t, e) {
    ((Be[He++] = Fe), (Be[He++] = Ie), (Be[He++] = Un), (Fe = e.id), (Ie = e.overflow), (Un = t));
  }
  var ie = null,
    Nt = null,
    vt = !1,
    Bn = null,
    qe = !1,
    wu = Error(r(519));
  function Hn(t) {
    var e = Error(
      r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""),
    );
    throw (li(Ue(e, t)), wu);
  }
  function ad(t) {
    var e = t.stateNode,
      a = t.type,
      l = t.memoizedProps;
    switch (((e[le] = t), (e[pe] = l), a)) {
      case "dialog":
        (mt("cancel", e), mt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        mt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ai.length; a++) mt(Ai[a], e);
        break;
      case "source":
        mt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (mt("error", e), mt("load", e));
        break;
      case "details":
        mt("toggle", e);
        break;
      case "input":
        (mt("invalid", e),
          yf(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0));
        break;
      case "select":
        mt("invalid", e);
        break;
      case "textarea":
        (mt("invalid", e), gf(e, l.value, l.defaultValue, l.children));
    }
    ((a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      e.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      Sm(e.textContent, a)
        ? (l.popover != null && (mt("beforetoggle", e), mt("toggle", e)),
          l.onScroll != null && mt("scroll", e),
          l.onScrollEnd != null && mt("scrollend", e),
          l.onClick != null && (e.onclick = un),
          (e = !0))
        : (e = !1),
      e || Hn(t, !0));
  }
  function ld(t) {
    for (ie = t.return; ie; )
      switch (ie.tag) {
        case 5:
        case 31:
        case 13:
          qe = !1;
          return;
        case 27:
        case 3:
          qe = !0;
          return;
        default:
          ie = ie.return;
      }
  }
  function ul(t) {
    if (t !== ie) return !1;
    if (!vt) return (ld(t), (vt = !0), !1);
    var e = t.tag,
      a;
    if (
      ((a = e !== 3 && e !== 27) &&
        ((a = e === 5) &&
          ((a = t.type), (a = !(a !== "form" && a !== "button") || Zo(t.type, t.memoizedProps))),
        (a = !a)),
      a && Nt && Hn(t),
      ld(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(r(317));
      Nt = zm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(r(317));
      Nt = zm(t);
    } else
      e === 27
        ? ((e = Nt), $n(t.type) ? ((t = $o), ($o = null), (Nt = t)) : (Nt = e))
        : (Nt = ie ? Ge(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Sa() {
    ((Nt = ie = null), (vt = !1));
  }
  function zu() {
    var t = Bn;
    return (t !== null && (Se === null ? (Se = t) : Se.push.apply(Se, t), (Bn = null)), t);
  }
  function li(t) {
    Bn === null ? (Bn = [t]) : Bn.push(t);
  }
  var Ou = w(null),
    _a = null,
    dn = null;
  function qn(t, e, a) {
    (F(Ou, e._currentValue), (e._currentValue = a));
  }
  function hn(t) {
    ((t._currentValue = Ou.current), V(Ou));
  }
  function Cu(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function ju(t, e, a, l) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var o = u.dependencies;
      if (o !== null) {
        var d = u.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var g = o;
          o = u;
          for (var R = 0; R < e.length; R++)
            if (g.context === e[R]) {
              ((o.lanes |= a),
                (g = o.alternate),
                g !== null && (g.lanes |= a),
                Cu(o.return, a, t),
                l || (d = null));
              break t;
            }
          o = g.next;
        }
      } else if (u.tag === 18) {
        if (((d = u.return), d === null)) throw Error(r(341));
        ((d.lanes |= a), (o = d.alternate), o !== null && (o.lanes |= a), Cu(d, a, t), (d = null));
      } else d = u.child;
      if (d !== null) d.return = u;
      else
        for (d = u; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (((u = d.sibling), u !== null)) {
            ((u.return = d.return), (d = u));
            break;
          }
          d = d.return;
        }
      u = d;
    }
  }
  function ol(t, e, a, l) {
    t = null;
    for (var u = e, o = !1; u !== null; ) {
      if (!o) {
        if ((u.flags & 524288) !== 0) o = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var d = u.alternate;
        if (d === null) throw Error(r(387));
        if (((d = d.memoizedProps), d !== null)) {
          var g = u.type;
          Ae(u.pendingProps.value, d.value) || (t !== null ? t.push(g) : (t = [g]));
        }
      } else if (u === gt.current) {
        if (((d = u.alternate), d === null)) throw Error(r(387));
        d.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Ci) : (t = [Ci]));
      }
      u = u.return;
    }
    (t !== null && ju(e, t, a, l), (e.flags |= 262144));
  }
  function xs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ae(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function xa(t) {
    ((_a = t), (dn = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function se(t) {
    return id(_a, t);
  }
  function Es(t, e) {
    return (_a === null && xa(t), id(t, e));
  }
  function id(t, e) {
    var a = e._currentValue;
    if (((e = { context: e, memoizedValue: a, next: null }), dn === null)) {
      if (t === null) throw Error(r(308));
      ((dn = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else dn = dn.next = e;
    return a;
  }
  var Ug =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (a) {
                  return a();
                }));
            };
          },
    Bg = n.unstable_scheduleCallback,
    Hg = n.unstable_NormalPriority,
    Kt = {
      $$typeof: X,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Du() {
    return { controller: new Ug(), data: new Map(), refCount: 0 };
  }
  function ii(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Bg(Hg, function () {
          t.controller.abort();
        }));
  }
  var si = null,
    Nu = 0,
    cl = 0,
    fl = null;
  function qg(t, e) {
    if (si === null) {
      var a = (si = []);
      ((Nu = 0),
        (cl = Ho()),
        (fl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (Nu++, e.then(sd, sd), e);
  }
  function sd() {
    if (--Nu === 0 && si !== null) {
      fl !== null && (fl.status = "fulfilled");
      var t = si;
      ((si = null), (cl = 0), (fl = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Yg(t, e) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      t.then(
        function () {
          ((l.status = "fulfilled"), (l.value = e));
          for (var u = 0; u < a.length; u++) (0, a[u])(e);
        },
        function (u) {
          for (l.status = "rejected", l.reason = u, u = 0; u < a.length; u++) (0, a[u])(void 0);
        },
      ),
      l
    );
  }
  var rd = H.S;
  H.S = function (t, e) {
    ((kh = ce()),
      typeof e == "object" && e !== null && typeof e.then == "function" && qg(t, e),
      rd !== null && rd(t, e));
  };
  var Ea = w(null);
  function Lu() {
    var t = Ea.current;
    return t !== null ? t : Ct.pooledCache;
  }
  function Rs(t, e) {
    e === null ? F(Ea, Ea.current) : F(Ea, e.pool);
  }
  function ud() {
    var t = Lu();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var dl = Error(r(460)),
    Uu = Error(r(474)),
    Ts = Error(r(542)),
    As = { then: function () {} };
  function od(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function cd(t, e, a) {
    switch (
      ((a = t[a]), a === void 0 ? t.push(e) : a !== e && (e.then(un, un), (e = a)), e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), dd(t), t);
      default:
        if (typeof e.status == "string") e.then(un, un);
        else {
          if (((t = Ct), t !== null && 100 < t.shellSuspendCounter)) throw Error(r(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var u = e;
                  ((u.status = "fulfilled"), (u.value = l));
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var u = e;
                  ((u.status = "rejected"), (u.reason = l));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), dd(t), t);
        }
        throw ((Ta = e), dl);
    }
  }
  function Ra(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? ((Ta = a), dl) : a;
    }
  }
  var Ta = null;
  function fd() {
    if (Ta === null) throw Error(r(459));
    var t = Ta;
    return ((Ta = null), t);
  }
  function dd(t) {
    if (t === dl || t === Ts) throw Error(r(483));
  }
  var hl = null,
    ri = 0;
  function Ms(t) {
    var e = ri;
    return ((ri += 1), hl === null && (hl = []), cd(hl, t, e));
  }
  function ui(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function ws(t, e) {
    throw e.$$typeof === _
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t,
          ),
        ));
  }
  function hd(t) {
    function e(C, M) {
      if (t) {
        var D = C.deletions;
        D === null ? ((C.deletions = [M]), (C.flags |= 16)) : D.push(M);
      }
    }
    function a(C, M) {
      if (!t) return null;
      for (; M !== null; ) (e(C, M), (M = M.sibling));
      return null;
    }
    function l(C) {
      for (var M = new Map(); C !== null; )
        (C.key !== null ? M.set(C.key, C) : M.set(C.index, C), (C = C.sibling));
      return M;
    }
    function u(C, M) {
      return ((C = cn(C, M)), (C.index = 0), (C.sibling = null), C);
    }
    function o(C, M, D) {
      return (
        (C.index = D),
        t
          ? ((D = C.alternate),
            D !== null
              ? ((D = D.index), D < M ? ((C.flags |= 67108866), M) : D)
              : ((C.flags |= 67108866), M))
          : ((C.flags |= 1048576), M)
      );
    }
    function d(C) {
      return (t && C.alternate === null && (C.flags |= 67108866), C);
    }
    function g(C, M, D, Q) {
      return M === null || M.tag !== 6
        ? ((M = Ru(D, C.mode, Q)), (M.return = C), M)
        : ((M = u(M, D)), (M.return = C), M);
    }
    function R(C, M, D, Q) {
      var at = D.type;
      return at === j
        ? q(C, M, D.props.children, Q, D.key)
        : M !== null &&
            (M.elementType === at ||
              (typeof at == "object" && at !== null && at.$$typeof === Z && Ra(at) === M.type))
          ? ((M = u(M, D.props)), ui(M, D), (M.return = C), M)
          : ((M = Ss(D.type, D.key, D.props, null, C.mode, Q)), ui(M, D), (M.return = C), M);
    }
    function N(C, M, D, Q) {
      return M === null ||
        M.tag !== 4 ||
        M.stateNode.containerInfo !== D.containerInfo ||
        M.stateNode.implementation !== D.implementation
        ? ((M = Tu(D, C.mode, Q)), (M.return = C), M)
        : ((M = u(M, D.children || [])), (M.return = C), M);
    }
    function q(C, M, D, Q, at) {
      return M === null || M.tag !== 7
        ? ((M = ba(D, C.mode, Q, at)), (M.return = C), M)
        : ((M = u(M, D)), (M.return = C), M);
    }
    function k(C, M, D) {
      if ((typeof M == "string" && M !== "") || typeof M == "number" || typeof M == "bigint")
        return ((M = Ru("" + M, C.mode, D)), (M.return = C), M);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case x:
            return ((D = Ss(M.type, M.key, M.props, null, C.mode, D)), ui(D, M), (D.return = C), D);
          case A:
            return ((M = Tu(M, C.mode, D)), (M.return = C), M);
          case Z:
            return ((M = Ra(M)), k(C, M, D));
        }
        if (Gt(M) || it(M)) return ((M = ba(M, C.mode, D, null)), (M.return = C), M);
        if (typeof M.then == "function") return k(C, Ms(M), D);
        if (M.$$typeof === X) return k(C, Es(C, M), D);
        ws(C, M);
      }
      return null;
    }
    function L(C, M, D, Q) {
      var at = M !== null ? M.key : null;
      if ((typeof D == "string" && D !== "") || typeof D == "number" || typeof D == "bigint")
        return at !== null ? null : g(C, M, "" + D, Q);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case x:
            return D.key === at ? R(C, M, D, Q) : null;
          case A:
            return D.key === at ? N(C, M, D, Q) : null;
          case Z:
            return ((D = Ra(D)), L(C, M, D, Q));
        }
        if (Gt(D) || it(D)) return at !== null ? null : q(C, M, D, Q, null);
        if (typeof D.then == "function") return L(C, M, Ms(D), Q);
        if (D.$$typeof === X) return L(C, M, Es(C, D), Q);
        ws(C, D);
      }
      return null;
    }
    function U(C, M, D, Q, at) {
      if ((typeof Q == "string" && Q !== "") || typeof Q == "number" || typeof Q == "bigint")
        return ((C = C.get(D) || null), g(M, C, "" + Q, at));
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case x:
            return ((C = C.get(Q.key === null ? D : Q.key) || null), R(M, C, Q, at));
          case A:
            return ((C = C.get(Q.key === null ? D : Q.key) || null), N(M, C, Q, at));
          case Z:
            return ((Q = Ra(Q)), U(C, M, D, Q, at));
        }
        if (Gt(Q) || it(Q)) return ((C = C.get(D) || null), q(M, C, Q, at, null));
        if (typeof Q.then == "function") return U(C, M, D, Ms(Q), at);
        if (Q.$$typeof === X) return U(C, M, D, Es(M, Q), at);
        ws(M, Q);
      }
      return null;
    }
    function tt(C, M, D, Q) {
      for (
        var at = null, bt = null, et = M, ft = (M = 0), yt = null;
        et !== null && ft < D.length;
        ft++
      ) {
        et.index > ft ? ((yt = et), (et = null)) : (yt = et.sibling);
        var St = L(C, et, D[ft], Q);
        if (St === null) {
          et === null && (et = yt);
          break;
        }
        (t && et && St.alternate === null && e(C, et),
          (M = o(St, M, ft)),
          bt === null ? (at = St) : (bt.sibling = St),
          (bt = St),
          (et = yt));
      }
      if (ft === D.length) return (a(C, et), vt && fn(C, ft), at);
      if (et === null) {
        for (; ft < D.length; ft++)
          ((et = k(C, D[ft], Q)),
            et !== null &&
              ((M = o(et, M, ft)), bt === null ? (at = et) : (bt.sibling = et), (bt = et)));
        return (vt && fn(C, ft), at);
      }
      for (et = l(et); ft < D.length; ft++)
        ((yt = U(et, C, ft, D[ft], Q)),
          yt !== null &&
            (t && yt.alternate !== null && et.delete(yt.key === null ? ft : yt.key),
            (M = o(yt, M, ft)),
            bt === null ? (at = yt) : (bt.sibling = yt),
            (bt = yt)));
      return (
        t &&
          et.forEach(function (aa) {
            return e(C, aa);
          }),
        vt && fn(C, ft),
        at
      );
    }
    function rt(C, M, D, Q) {
      if (D == null) throw Error(r(151));
      for (
        var at = null, bt = null, et = M, ft = (M = 0), yt = null, St = D.next();
        et !== null && !St.done;
        ft++, St = D.next()
      ) {
        et.index > ft ? ((yt = et), (et = null)) : (yt = et.sibling);
        var aa = L(C, et, St.value, Q);
        if (aa === null) {
          et === null && (et = yt);
          break;
        }
        (t && et && aa.alternate === null && e(C, et),
          (M = o(aa, M, ft)),
          bt === null ? (at = aa) : (bt.sibling = aa),
          (bt = aa),
          (et = yt));
      }
      if (St.done) return (a(C, et), vt && fn(C, ft), at);
      if (et === null) {
        for (; !St.done; ft++, St = D.next())
          ((St = k(C, St.value, Q)),
            St !== null &&
              ((M = o(St, M, ft)), bt === null ? (at = St) : (bt.sibling = St), (bt = St)));
        return (vt && fn(C, ft), at);
      }
      for (et = l(et); !St.done; ft++, St = D.next())
        ((St = U(et, C, ft, St.value, Q)),
          St !== null &&
            (t && St.alternate !== null && et.delete(St.key === null ? ft : St.key),
            (M = o(St, M, ft)),
            bt === null ? (at = St) : (bt.sibling = St),
            (bt = St)));
      return (
        t &&
          et.forEach(function (I0) {
            return e(C, I0);
          }),
        vt && fn(C, ft),
        at
      );
    }
    function zt(C, M, D, Q) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === j &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case x:
            t: {
              for (var at = D.key; M !== null; ) {
                if (M.key === at) {
                  if (((at = D.type), at === j)) {
                    if (M.tag === 7) {
                      (a(C, M.sibling), (Q = u(M, D.props.children)), (Q.return = C), (C = Q));
                      break t;
                    }
                  } else if (
                    M.elementType === at ||
                    (typeof at == "object" && at !== null && at.$$typeof === Z && Ra(at) === M.type)
                  ) {
                    (a(C, M.sibling), (Q = u(M, D.props)), ui(Q, D), (Q.return = C), (C = Q));
                    break t;
                  }
                  a(C, M);
                  break;
                } else e(C, M);
                M = M.sibling;
              }
              D.type === j
                ? ((Q = ba(D.props.children, C.mode, Q, D.key)), (Q.return = C), (C = Q))
                : ((Q = Ss(D.type, D.key, D.props, null, C.mode, Q)),
                  ui(Q, D),
                  (Q.return = C),
                  (C = Q));
            }
            return d(C);
          case A:
            t: {
              for (at = D.key; M !== null; ) {
                if (M.key === at)
                  if (
                    M.tag === 4 &&
                    M.stateNode.containerInfo === D.containerInfo &&
                    M.stateNode.implementation === D.implementation
                  ) {
                    (a(C, M.sibling), (Q = u(M, D.children || [])), (Q.return = C), (C = Q));
                    break t;
                  } else {
                    a(C, M);
                    break;
                  }
                else e(C, M);
                M = M.sibling;
              }
              ((Q = Tu(D, C.mode, Q)), (Q.return = C), (C = Q));
            }
            return d(C);
          case Z:
            return ((D = Ra(D)), zt(C, M, D, Q));
        }
        if (Gt(D)) return tt(C, M, D, Q);
        if (it(D)) {
          if (((at = it(D)), typeof at != "function")) throw Error(r(150));
          return ((D = at.call(D)), rt(C, M, D, Q));
        }
        if (typeof D.then == "function") return zt(C, M, Ms(D), Q);
        if (D.$$typeof === X) return zt(C, M, Es(C, D), Q);
        ws(C, D);
      }
      return (typeof D == "string" && D !== "") || typeof D == "number" || typeof D == "bigint"
        ? ((D = "" + D),
          M !== null && M.tag === 6
            ? (a(C, M.sibling), (Q = u(M, D)), (Q.return = C), (C = Q))
            : (a(C, M), (Q = Ru(D, C.mode, Q)), (Q.return = C), (C = Q)),
          d(C))
        : a(C, M);
    }
    return function (C, M, D, Q) {
      try {
        ri = 0;
        var at = zt(C, M, D, Q);
        return ((hl = null), at);
      } catch (et) {
        if (et === dl || et === Ts) throw et;
        var bt = Me(29, et, null, C.mode);
        return ((bt.lanes = Q), (bt.return = C), bt);
      }
    };
  }
  var Aa = hd(!0),
    md = hd(!1),
    Yn = !1;
  function Bu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Hu(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Gn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Qn(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Et & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (l.pending = e),
        (e = bs(t)),
        If(t, null, a),
        e
      );
    }
    return (gs(t, l, e, a), bs(t));
  }
  function oi(t, e, a) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (a |= l), (e.lanes = a), lf(t, a));
    }
  }
  function qu(t, e) {
    var a = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var u = null,
        o = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var d = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          (o === null ? (u = o = d) : (o = o.next = d), (a = a.next));
        } while (a !== null);
        o === null ? (u = o = e) : (o = o.next = e);
      } else u = o = e;
      ((a = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: o,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = a));
      return;
    }
    ((t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = e) : (t.next = e),
      (a.lastBaseUpdate = e));
  }
  var Yu = !1;
  function ci() {
    if (Yu) {
      var t = fl;
      if (t !== null) throw t;
    }
  }
  function fi(t, e, a, l) {
    Yu = !1;
    var u = t.updateQueue;
    Yn = !1;
    var o = u.firstBaseUpdate,
      d = u.lastBaseUpdate,
      g = u.shared.pending;
    if (g !== null) {
      u.shared.pending = null;
      var R = g,
        N = R.next;
      ((R.next = null), d === null ? (o = N) : (d.next = N), (d = R));
      var q = t.alternate;
      q !== null &&
        ((q = q.updateQueue),
        (g = q.lastBaseUpdate),
        g !== d && (g === null ? (q.firstBaseUpdate = N) : (g.next = N), (q.lastBaseUpdate = R)));
    }
    if (o !== null) {
      var k = u.baseState;
      ((d = 0), (q = N = R = null), (g = o));
      do {
        var L = g.lane & -536870913,
          U = L !== g.lane;
        if (U ? (pt & L) === L : (l & L) === L) {
          (L !== 0 && L === cl && (Yu = !0),
            q !== null &&
              (q = q.next =
                { lane: 0, tag: g.tag, payload: g.payload, callback: null, next: null }));
          t: {
            var tt = t,
              rt = g;
            L = e;
            var zt = a;
            switch (rt.tag) {
              case 1:
                if (((tt = rt.payload), typeof tt == "function")) {
                  k = tt.call(zt, k, L);
                  break t;
                }
                k = tt;
                break t;
              case 3:
                tt.flags = (tt.flags & -65537) | 128;
              case 0:
                if (
                  ((tt = rt.payload),
                  (L = typeof tt == "function" ? tt.call(zt, k, L) : tt),
                  L == null)
                )
                  break t;
                k = v({}, k, L);
                break t;
              case 2:
                Yn = !0;
            }
          }
          ((L = g.callback),
            L !== null &&
              ((t.flags |= 64),
              U && (t.flags |= 8192),
              (U = u.callbacks),
              U === null ? (u.callbacks = [L]) : U.push(L)));
        } else
          ((U = { lane: L, tag: g.tag, payload: g.payload, callback: g.callback, next: null }),
            q === null ? ((N = q = U), (R = k)) : (q = q.next = U),
            (d |= L));
        if (((g = g.next), g === null)) {
          if (((g = u.shared.pending), g === null)) break;
          ((U = g),
            (g = U.next),
            (U.next = null),
            (u.lastBaseUpdate = U),
            (u.shared.pending = null));
        }
      } while (!0);
      (q === null && (R = k),
        (u.baseState = R),
        (u.firstBaseUpdate = N),
        (u.lastBaseUpdate = q),
        o === null && (u.shared.lanes = 0),
        (Zn |= d),
        (t.lanes = d),
        (t.memoizedState = k));
    }
  }
  function pd(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function yd(t, e) {
    var a = t.callbacks;
    if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) pd(a[t], e);
  }
  var ml = w(null),
    zs = w(0);
  function vd(t, e) {
    ((t = xn), F(zs, t), F(ml, e), (xn = t | e.baseLanes));
  }
  function Gu() {
    (F(zs, xn), F(ml, ml.current));
  }
  function Qu() {
    ((xn = zs.current), V(ml), V(zs));
  }
  var we = w(null),
    Ye = null;
  function Vn(t) {
    var e = t.alternate;
    (F(Vt, Vt.current & 1),
      F(we, t),
      Ye === null && (e === null || ml.current !== null || e.memoizedState !== null) && (Ye = t));
  }
  function Vu(t) {
    (F(Vt, Vt.current), F(we, t), Ye === null && (Ye = t));
  }
  function gd(t) {
    t.tag === 22 ? (F(Vt, Vt.current), F(we, t), Ye === null && (Ye = t)) : kn();
  }
  function kn() {
    (F(Vt, Vt.current), F(we, we.current));
  }
  function ze(t) {
    (V(we), Ye === t && (Ye = null), V(Vt));
  }
  var Vt = w(0);
  function Os(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Fo(a) || Io(a))) return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var mn = 0,
    ct = null,
    Mt = null,
    Zt = null,
    Cs = !1,
    pl = !1,
    Ma = !1,
    js = 0,
    di = 0,
    yl = null,
    Gg = 0;
  function qt() {
    throw Error(r(321));
  }
  function ku(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++) if (!Ae(t[a], e[a])) return !1;
    return !0;
  }
  function Xu(t, e, a, l, u, o) {
    return (
      (mn = o),
      (ct = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (H.H = t === null || t.memoizedState === null ? eh : so),
      (Ma = !1),
      (o = a(l, u)),
      (Ma = !1),
      pl && (o = Sd(e, a, l, u)),
      bd(t),
      o
    );
  }
  function bd(t) {
    H.H = pi;
    var e = Mt !== null && Mt.next !== null;
    if (((mn = 0), (Zt = Mt = ct = null), (Cs = !1), (di = 0), (yl = null), e)) throw Error(r(300));
    t === null || Pt || ((t = t.dependencies), t !== null && xs(t) && (Pt = !0));
  }
  function Sd(t, e, a, l) {
    ct = t;
    var u = 0;
    do {
      if ((pl && (yl = null), (di = 0), (pl = !1), 25 <= u)) throw Error(r(301));
      if (((u += 1), (Zt = Mt = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((H.H = nh), (o = e(a, l)));
    } while (pl);
    return o;
  }
  function Qg() {
    var t = H.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? hi(e) : e),
      (t = t.useState()[0]),
      (Mt !== null ? Mt.memoizedState : null) !== t && (ct.flags |= 1024),
      e
    );
  }
  function Ku() {
    var t = js !== 0;
    return ((js = 0), t);
  }
  function Zu(t, e, a) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a));
  }
  function Pu(t) {
    if (Cs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Cs = !1;
    }
    ((mn = 0), (Zt = Mt = ct = null), (pl = !1), (di = js = 0), (yl = null));
  }
  function de() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Zt === null ? (ct.memoizedState = Zt = t) : (Zt = Zt.next = t), Zt);
  }
  function kt() {
    if (Mt === null) {
      var t = ct.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Mt.next;
    var e = Zt === null ? ct.memoizedState : Zt.next;
    if (e !== null) ((Zt = e), (Mt = t));
    else {
      if (t === null) throw ct.alternate === null ? Error(r(467)) : Error(r(310));
      ((Mt = t),
        (t = {
          memoizedState: Mt.memoizedState,
          baseState: Mt.baseState,
          baseQueue: Mt.baseQueue,
          queue: Mt.queue,
          next: null,
        }),
        Zt === null ? (ct.memoizedState = Zt = t) : (Zt = Zt.next = t));
    }
    return Zt;
  }
  function Ds() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function hi(t) {
    var e = di;
    return (
      (di += 1),
      yl === null && (yl = []),
      (t = cd(yl, t, e)),
      (e = ct),
      (Zt === null ? e.memoizedState : Zt.next) === null &&
        ((e = e.alternate), (H.H = e === null || e.memoizedState === null ? eh : so)),
      t
    );
  }
  function Ns(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return hi(t);
      if (t.$$typeof === X) return se(t);
    }
    throw Error(r(438, String(t)));
  }
  function Ju(t) {
    var e = null,
      a = ct.updateQueue;
    if ((a !== null && (e = a.memoCache), e == null)) {
      var l = ct.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      a === null && ((a = Ds()), (ct.updateQueue = a)),
      (a.memoCache = e),
      (a = e.data[e.index]),
      a === void 0)
    )
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++) a[l] = ut;
    return (e.index++, a);
  }
  function pn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ls(t) {
    var e = kt();
    return Fu(e, Mt, t);
  }
  function Fu(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = a;
    var u = t.baseQueue,
      o = l.pending;
    if (o !== null) {
      if (u !== null) {
        var d = u.next;
        ((u.next = o.next), (o.next = d));
      }
      ((e.baseQueue = u = o), (l.pending = null));
    }
    if (((o = t.baseState), u === null)) t.memoizedState = o;
    else {
      e = u.next;
      var g = (d = null),
        R = null,
        N = e,
        q = !1;
      do {
        var k = N.lane & -536870913;
        if (k !== N.lane ? (pt & k) === k : (mn & k) === k) {
          var L = N.revertLane;
          if (L === 0)
            (R !== null &&
              (R = R.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null,
                }),
              k === cl && (q = !0));
          else if ((mn & L) === L) {
            ((N = N.next), L === cl && (q = !0));
            continue;
          } else
            ((k = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              R === null ? ((g = R = k), (d = o)) : (R = R.next = k),
              (ct.lanes |= L),
              (Zn |= L));
          ((k = N.action), Ma && a(o, k), (o = N.hasEagerState ? N.eagerState : a(o, k)));
        } else
          ((L = {
            lane: k,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            R === null ? ((g = R = L), (d = o)) : (R = R.next = L),
            (ct.lanes |= k),
            (Zn |= k));
        N = N.next;
      } while (N !== null && N !== e);
      if (
        (R === null ? (d = o) : (R.next = g),
        !Ae(o, t.memoizedState) && ((Pt = !0), q && ((a = fl), a !== null)))
      )
        throw a;
      ((t.memoizedState = o), (t.baseState = d), (t.baseQueue = R), (l.lastRenderedState = o));
    }
    return (u === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function Iu(t) {
    var e = kt(),
      a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch,
      u = a.pending,
      o = e.memoizedState;
    if (u !== null) {
      a.pending = null;
      var d = (u = u.next);
      do ((o = t(o, d.action)), (d = d.next));
      while (d !== u);
      (Ae(o, e.memoizedState) || (Pt = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (a.lastRenderedState = o));
    }
    return [o, l];
  }
  function _d(t, e, a) {
    var l = ct,
      u = kt(),
      o = vt;
    if (o) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = e();
    var d = !Ae((Mt || u).memoizedState, a);
    if (
      (d && ((u.memoizedState = a), (Pt = !0)),
      (u = u.queue),
      to(Rd.bind(null, l, u, t), [t]),
      u.getSnapshot !== e || d || (Zt !== null && Zt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        vl(9, { destroy: void 0 }, Ed.bind(null, l, u, a, e), null),
        Ct === null)
      )
        throw Error(r(349));
      o || (mn & 127) !== 0 || xd(l, e, a);
    }
    return a;
  }
  function xd(t, e, a) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: a }),
      (e = ct.updateQueue),
      e === null
        ? ((e = Ds()), (ct.updateQueue = e), (e.stores = [t]))
        : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t)));
  }
  function Ed(t, e, a, l) {
    ((e.value = a), (e.getSnapshot = l), Td(e) && Ad(t));
  }
  function Rd(t, e, a) {
    return a(function () {
      Td(e) && Ad(t);
    });
  }
  function Td(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !Ae(t, a);
    } catch {
      return !0;
    }
  }
  function Ad(t) {
    var e = ga(t, 2);
    e !== null && _e(e, t, 2);
  }
  function $u(t) {
    var e = de();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), Ma)) {
        Dn(!0);
        try {
          a();
        } finally {
          Dn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Md(t, e, a, l) {
    return ((t.baseState = a), Fu(t, Mt, typeof l == "function" ? l : pn));
  }
  function Vg(t, e, a, l, u) {
    if (Hs(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          o.listeners.push(d);
        },
      };
      (H.T !== null ? a(!0) : (o.isTransition = !1),
        l(o),
        (a = e.pending),
        a === null
          ? ((o.next = e.pending = o), wd(e, o))
          : ((o.next = a.next), (e.pending = a.next = o)));
    }
  }
  function wd(t, e) {
    var a = e.action,
      l = e.payload,
      u = t.state;
    if (e.isTransition) {
      var o = H.T,
        d = {};
      H.T = d;
      try {
        var g = a(u, l),
          R = H.S;
        (R !== null && R(d, g), zd(t, e, g));
      } catch (N) {
        Wu(t, e, N);
      } finally {
        (o !== null && d.types !== null && (o.types = d.types), (H.T = o));
      }
    } else
      try {
        ((o = a(u, l)), zd(t, e, o));
      } catch (N) {
        Wu(t, e, N);
      }
  }
  function zd(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            Od(t, e, l);
          },
          function (l) {
            return Wu(t, e, l);
          },
        )
      : Od(t, e, a);
  }
  function Od(t, e, a) {
    ((e.status = "fulfilled"),
      (e.value = a),
      Cd(e),
      (t.state = a),
      (e = t.pending),
      e !== null &&
        ((a = e.next), a === e ? (t.pending = null) : ((a = a.next), (e.next = a), wd(t, a))));
  }
  function Wu(t, e, a) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = "rejected"), (e.reason = a), Cd(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function Cd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function jd(t, e) {
    return e;
  }
  function Dd(t, e) {
    if (vt) {
      var a = Ct.formState;
      if (a !== null) {
        t: {
          var l = ct;
          if (vt) {
            if (Nt) {
              e: {
                for (var u = Nt, o = qe; u.nodeType !== 8; ) {
                  if (!o) {
                    u = null;
                    break e;
                  }
                  if (((u = Ge(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                ((o = u.data), (u = o === "F!" || o === "F" ? u : null));
              }
              if (u) {
                ((Nt = Ge(u.nextSibling)), (l = u.data === "F!"));
                break t;
              }
            }
            Hn(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return (
      (a = de()),
      (a.memoizedState = a.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jd,
        lastRenderedState: e,
      }),
      (a.queue = l),
      (a = $d.bind(null, ct, l)),
      (l.dispatch = a),
      (l = $u(!1)),
      (o = io.bind(null, ct, !1, l.queue)),
      (l = de()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = u),
      (a = Vg.bind(null, ct, u, o, a)),
      (u.dispatch = a),
      (l.memoizedState = t),
      [e, a, !1]
    );
  }
  function Nd(t) {
    var e = kt();
    return Ld(e, Mt, t);
  }
  function Ld(t, e, a) {
    if (
      ((e = Fu(t, e, jd)[0]),
      (t = Ls(pn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = hi(e);
      } catch (d) {
        throw d === dl ? Ts : d;
      }
    else l = e;
    e = kt();
    var u = e.queue,
      o = u.dispatch;
    return (
      a !== e.memoizedState &&
        ((ct.flags |= 2048), vl(9, { destroy: void 0 }, kg.bind(null, u, a), null)),
      [l, o, t]
    );
  }
  function kg(t, e) {
    t.action = e;
  }
  function Ud(t) {
    var e = kt(),
      a = Mt;
    if (a !== null) return Ld(e, a, t);
    (kt(), (e = e.memoizedState), (a = kt()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = t), [e, l, !1]);
  }
  function vl(t, e, a, l) {
    return (
      (t = { tag: t, create: a, deps: l, inst: e, next: null }),
      (e = ct.updateQueue),
      e === null && ((e = Ds()), (ct.updateQueue = e)),
      (a = e.lastEffect),
      a === null
        ? (e.lastEffect = t.next = t)
        : ((l = a.next), (a.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function Bd() {
    return kt().memoizedState;
  }
  function Us(t, e, a, l) {
    var u = de();
    ((ct.flags |= t),
      (u.memoizedState = vl(1 | e, { destroy: void 0 }, a, l === void 0 ? null : l)));
  }
  function Bs(t, e, a, l) {
    var u = kt();
    l = l === void 0 ? null : l;
    var o = u.memoizedState.inst;
    Mt !== null && l !== null && ku(l, Mt.memoizedState.deps)
      ? (u.memoizedState = vl(e, o, a, l))
      : ((ct.flags |= t), (u.memoizedState = vl(1 | e, o, a, l)));
  }
  function Hd(t, e) {
    Us(8390656, 8, t, e);
  }
  function to(t, e) {
    Bs(2048, 8, t, e);
  }
  function Xg(t) {
    ct.flags |= 4;
    var e = ct.updateQueue;
    if (e === null) ((e = Ds()), (ct.updateQueue = e), (e.events = [t]));
    else {
      var a = e.events;
      a === null ? (e.events = [t]) : a.push(t);
    }
  }
  function qd(t) {
    var e = kt().memoizedState;
    return (
      Xg({ ref: e, nextImpl: t }),
      function () {
        if ((Et & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Yd(t, e) {
    return Bs(4, 2, t, e);
  }
  function Gd(t, e) {
    return Bs(4, 4, t, e);
  }
  function Qd(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function () {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Vd(t, e, a) {
    ((a = a != null ? a.concat([t]) : null), Bs(4, 4, Qd.bind(null, e, t), a));
  }
  function eo() {}
  function kd(t, e) {
    var a = kt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && ku(e, l[1]) ? l[0] : ((a.memoizedState = [t, e]), t);
  }
  function Xd(t, e) {
    var a = kt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && ku(e, l[1])) return l[0];
    if (((l = t()), Ma)) {
      Dn(!0);
      try {
        t();
      } finally {
        Dn(!1);
      }
    }
    return ((a.memoizedState = [l, e]), l);
  }
  function no(t, e, a) {
    return a === void 0 || ((mn & 1073741824) !== 0 && (pt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = a), (t = Kh()), (ct.lanes |= t), (Zn |= t), a);
  }
  function Kd(t, e, a, l) {
    return Ae(a, e)
      ? a
      : ml.current !== null
        ? ((t = no(t, a, l)), Ae(t, e) || (Pt = !0), t)
        : (mn & 42) === 0 || ((mn & 1073741824) !== 0 && (pt & 261930) === 0)
          ? ((Pt = !0), (t.memoizedState = a))
          : ((t = Kh()), (ct.lanes |= t), (Zn |= t), e);
  }
  function Zd(t, e, a, l, u) {
    var o = P.p;
    P.p = o !== 0 && 8 > o ? o : 8;
    var d = H.T,
      g = {};
    ((H.T = g), io(t, !1, e, a));
    try {
      var R = u(),
        N = H.S;
      if (
        (N !== null && N(g, R), R !== null && typeof R == "object" && typeof R.then == "function")
      ) {
        var q = Yg(R, l);
        mi(t, e, q, je(t));
      } else mi(t, e, l, je(t));
    } catch (k) {
      mi(t, e, { then: function () {}, status: "rejected", reason: k }, je());
    } finally {
      ((P.p = o), d !== null && g.types !== null && (d.types = g.types), (H.T = d));
    }
  }
  function Kg() {}
  function ao(t, e, a, l) {
    if (t.tag !== 5) throw Error(r(476));
    var u = Pd(t).queue;
    Zd(
      t,
      u,
      e,
      lt,
      a === null
        ? Kg
        : function () {
            return (Jd(t), a(l));
          },
    );
  }
  function Pd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: lt,
      baseState: lt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pn,
        lastRenderedState: lt,
      },
      next: null,
    };
    var a = {};
    return (
      (e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: pn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Jd(t) {
    var e = Pd(t);
    (e.next === null && (e = t.alternate.memoizedState), mi(t, e.next.queue, {}, je()));
  }
  function lo() {
    return se(Ci);
  }
  function Fd() {
    return kt().memoizedState;
  }
  function Id() {
    return kt().memoizedState;
  }
  function Zg(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = je();
          t = Gn(a);
          var l = Qn(e, t, a);
          (l !== null && (_e(l, e, a), oi(l, e, a)), (e = { cache: Du() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Pg(t, e, a) {
    var l = je();
    ((a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Hs(t) ? Wd(e, a) : ((a = xu(t, e, a, l)), a !== null && (_e(a, t, l), th(a, e, l))));
  }
  function $d(t, e, a) {
    var l = je();
    mi(t, e, a, l);
  }
  function mi(t, e, a, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Hs(t)) Wd(e, u);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var d = e.lastRenderedState,
            g = o(d, a);
          if (((u.hasEagerState = !0), (u.eagerState = g), Ae(g, d)))
            return (gs(t, e, u, 0), Ct === null && vs(), !1);
        } catch {}
      if (((a = xu(t, e, u, l)), a !== null)) return (_e(a, t, l), th(a, e, l), !0);
    }
    return !1;
  }
  function io(t, e, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Ho(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Hs(t))
    ) {
      if (e) throw Error(r(479));
    } else ((e = xu(t, a, l, 2)), e !== null && _e(e, t, 2));
  }
  function Hs(t) {
    var e = t.alternate;
    return t === ct || (e !== null && e === ct);
  }
  function Wd(t, e) {
    pl = Cs = !0;
    var a = t.pending;
    (a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)), (t.pending = e));
  }
  function th(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (a |= l), (e.lanes = a), lf(t, a));
    }
  }
  var pi = {
    readContext: se,
    use: Ns,
    useCallback: qt,
    useContext: qt,
    useEffect: qt,
    useImperativeHandle: qt,
    useLayoutEffect: qt,
    useInsertionEffect: qt,
    useMemo: qt,
    useReducer: qt,
    useRef: qt,
    useState: qt,
    useDebugValue: qt,
    useDeferredValue: qt,
    useTransition: qt,
    useSyncExternalStore: qt,
    useId: qt,
    useHostTransitionStatus: qt,
    useFormState: qt,
    useActionState: qt,
    useOptimistic: qt,
    useMemoCache: qt,
    useCacheRefresh: qt,
  };
  pi.useEffectEvent = qt;
  var eh = {
      readContext: se,
      use: Ns,
      useCallback: function (t, e) {
        return ((de().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: se,
      useEffect: Hd,
      useImperativeHandle: function (t, e, a) {
        ((a = a != null ? a.concat([t]) : null), Us(4194308, 4, Qd.bind(null, e, t), a));
      },
      useLayoutEffect: function (t, e) {
        return Us(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Us(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var a = de();
        e = e === void 0 ? null : e;
        var l = t();
        if (Ma) {
          Dn(!0);
          try {
            t();
          } finally {
            Dn(!1);
          }
        }
        return ((a.memoizedState = [l, e]), l);
      },
      useReducer: function (t, e, a) {
        var l = de();
        if (a !== void 0) {
          var u = a(e);
          if (Ma) {
            Dn(!0);
            try {
              a(e);
            } finally {
              Dn(!1);
            }
          }
        } else u = e;
        return (
          (l.memoizedState = l.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (l.queue = t),
          (t = t.dispatch = Pg.bind(null, ct, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = de();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = $u(t);
        var e = t.queue,
          a = $d.bind(null, ct, e);
        return ((e.dispatch = a), [t.memoizedState, a]);
      },
      useDebugValue: eo,
      useDeferredValue: function (t, e) {
        var a = de();
        return no(a, t, e);
      },
      useTransition: function () {
        var t = $u(!1);
        return ((t = Zd.bind(null, ct, t.queue, !0, !1)), (de().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, a) {
        var l = ct,
          u = de();
        if (vt) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = e()), Ct === null)) throw Error(r(349));
          (pt & 127) !== 0 || xd(l, e, a);
        }
        u.memoizedState = a;
        var o = { value: a, getSnapshot: e };
        return (
          (u.queue = o),
          Hd(Rd.bind(null, l, o, t), [t]),
          (l.flags |= 2048),
          vl(9, { destroy: void 0 }, Ed.bind(null, l, o, a, e), null),
          a
        );
      },
      useId: function () {
        var t = de(),
          e = Ct.identifierPrefix;
        if (vt) {
          var a = Ie,
            l = Fe;
          ((a = (l & ~(1 << (32 - Te(l) - 1))).toString(32) + a),
            (e = "_" + e + "R_" + a),
            (a = js++),
            0 < a && (e += "H" + a.toString(32)),
            (e += "_"));
        } else ((a = Gg++), (e = "_" + e + "r_" + a.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: lo,
      useFormState: Dd,
      useActionState: Dd,
      useOptimistic: function (t) {
        var e = de();
        e.memoizedState = e.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((e.queue = a), (e = io.bind(null, ct, !0, a)), (a.dispatch = e), [t, e]);
      },
      useMemoCache: Ju,
      useCacheRefresh: function () {
        return (de().memoizedState = Zg.bind(null, ct));
      },
      useEffectEvent: function (t) {
        var e = de(),
          a = { impl: t };
        return (
          (e.memoizedState = a),
          function () {
            if ((Et & 2) !== 0) throw Error(r(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    so = {
      readContext: se,
      use: Ns,
      useCallback: kd,
      useContext: se,
      useEffect: to,
      useImperativeHandle: Vd,
      useInsertionEffect: Yd,
      useLayoutEffect: Gd,
      useMemo: Xd,
      useReducer: Ls,
      useRef: Bd,
      useState: function () {
        return Ls(pn);
      },
      useDebugValue: eo,
      useDeferredValue: function (t, e) {
        var a = kt();
        return Kd(a, Mt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ls(pn)[0],
          e = kt().memoizedState;
        return [typeof t == "boolean" ? t : hi(t), e];
      },
      useSyncExternalStore: _d,
      useId: Fd,
      useHostTransitionStatus: lo,
      useFormState: Nd,
      useActionState: Nd,
      useOptimistic: function (t, e) {
        var a = kt();
        return Md(a, Mt, t, e);
      },
      useMemoCache: Ju,
      useCacheRefresh: Id,
    };
  so.useEffectEvent = qd;
  var nh = {
    readContext: se,
    use: Ns,
    useCallback: kd,
    useContext: se,
    useEffect: to,
    useImperativeHandle: Vd,
    useInsertionEffect: Yd,
    useLayoutEffect: Gd,
    useMemo: Xd,
    useReducer: Iu,
    useRef: Bd,
    useState: function () {
      return Iu(pn);
    },
    useDebugValue: eo,
    useDeferredValue: function (t, e) {
      var a = kt();
      return Mt === null ? no(a, t, e) : Kd(a, Mt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Iu(pn)[0],
        e = kt().memoizedState;
      return [typeof t == "boolean" ? t : hi(t), e];
    },
    useSyncExternalStore: _d,
    useId: Fd,
    useHostTransitionStatus: lo,
    useFormState: Ud,
    useActionState: Ud,
    useOptimistic: function (t, e) {
      var a = kt();
      return Mt !== null ? Md(a, Mt, t, e) : ((a.baseState = t), [t, a.queue.dispatch]);
    },
    useMemoCache: Ju,
    useCacheRefresh: Id,
  };
  nh.useEffectEvent = qd;
  function ro(t, e, a, l) {
    ((e = t.memoizedState),
      (a = a(l, e)),
      (a = a == null ? e : v({}, e, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a));
  }
  var uo = {
    enqueueSetState: function (t, e, a) {
      t = t._reactInternals;
      var l = je(),
        u = Gn(l);
      ((u.payload = e),
        a != null && (u.callback = a),
        (e = Qn(t, u, l)),
        e !== null && (_e(e, t, l), oi(e, t, l)));
    },
    enqueueReplaceState: function (t, e, a) {
      t = t._reactInternals;
      var l = je(),
        u = Gn(l);
      ((u.tag = 1),
        (u.payload = e),
        a != null && (u.callback = a),
        (e = Qn(t, u, l)),
        e !== null && (_e(e, t, l), oi(e, t, l)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var a = je(),
        l = Gn(a);
      ((l.tag = 2),
        e != null && (l.callback = e),
        (e = Qn(t, l, a)),
        e !== null && (_e(e, t, a), oi(e, t, a)));
    },
  };
  function ah(t, e, a, l, u, o, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, o, d)
        : e.prototype && e.prototype.isPureReactComponent
          ? !ei(a, l) || !ei(u, o)
          : !0
    );
  }
  function lh(t, e, a, l) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(a, l),
      e.state !== t && uo.enqueueReplaceState(e, e.state, null));
  }
  function wa(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e) l !== "ref" && (a[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      a === e && (a = v({}, a));
      for (var u in t) a[u] === void 0 && (a[u] = t[u]);
    }
    return a;
  }
  function ih(t) {
    ys(t);
  }
  function sh(t) {
    console.error(t);
  }
  function rh(t) {
    ys(t);
  }
  function qs(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function uh(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, { componentStack: a.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function oo(t, e, a) {
    return (
      (a = Gn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        qs(t, e);
      }),
      a
    );
  }
  function oh(t) {
    return ((t = Gn(t)), (t.tag = 3), t);
  }
  function ch(t, e, a, l) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var o = l.value;
      ((t.payload = function () {
        return u(o);
      }),
        (t.callback = function () {
          uh(e, a, l);
        }));
    }
    var d = a.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (t.callback = function () {
        (uh(e, a, l),
          typeof u != "function" && (Pn === null ? (Pn = new Set([this])) : Pn.add(this)));
        var g = l.stack;
        this.componentDidCatch(l.value, { componentStack: g !== null ? g : "" });
      });
  }
  function Jg(t, e, a, l, u) {
    if (((a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
      if (((e = a.alternate), e !== null && ol(e, a, u, !0), (a = we.current), a !== null)) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              Ye === null ? Is() : a.alternate === null && Yt === 0 && (Yt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              l === As
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null ? (a.updateQueue = new Set([l])) : e.add(l),
                  Lo(t, l, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === As
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (a.updateQueue = e))
                    : ((a = e.retryQueue), a === null ? (e.retryQueue = new Set([l])) : a.add(l)),
                  Lo(t, l, u)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return (Lo(t, l, u), Is(), !1);
    }
    if (vt)
      return (
        (e = we.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            l !== wu && ((t = Error(r(422), { cause: l })), li(Ue(t, a))))
          : (l !== wu && ((e = Error(r(423), { cause: l })), li(Ue(e, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (l = Ue(l, a)),
            (u = oo(t.stateNode, l, u)),
            qu(t, u),
            Yt !== 4 && (Yt = 2)),
        !1
      );
    var o = Error(r(520), { cause: l });
    if (((o = Ue(o, a)), Ei === null ? (Ei = [o]) : Ei.push(o), Yt !== 4 && (Yt = 2), e === null))
      return !0;
    ((l = Ue(l, a)), (a = e));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = u & -u),
            (a.lanes |= t),
            (t = oo(a.stateNode, l, t)),
            qu(a, t),
            !1
          );
        case 1:
          if (
            ((e = a.type),
            (o = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Pn === null || !Pn.has(o)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = oh(u)),
              ch(u, t, a, l),
              qu(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var co = Error(r(461)),
    Pt = !1;
  function re(t, e, a, l) {
    e.child = t === null ? md(e, null, a, l) : Aa(e, t.child, a, l);
  }
  function fh(t, e, a, l, u) {
    a = a.render;
    var o = e.ref;
    if ("ref" in l) {
      var d = {};
      for (var g in l) g !== "ref" && (d[g] = l[g]);
    } else d = l;
    return (
      xa(e),
      (l = Xu(t, e, a, d, o, u)),
      (g = Ku()),
      t !== null && !Pt
        ? (Zu(t, e, u), yn(t, e, u))
        : (vt && g && Au(e), (e.flags |= 1), re(t, e, l, u), e.child)
    );
  }
  function dh(t, e, a, l, u) {
    if (t === null) {
      var o = a.type;
      return typeof o == "function" && !Eu(o) && o.defaultProps === void 0 && a.compare === null
        ? ((e.tag = 15), (e.type = o), hh(t, e, o, l, u))
        : ((t = Ss(a.type, null, l, e, e.mode, u)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((o = t.child), !bo(t, u))) {
      var d = o.memoizedProps;
      if (((a = a.compare), (a = a !== null ? a : ei), a(d, l) && t.ref === e.ref))
        return yn(t, e, u);
    }
    return ((e.flags |= 1), (t = cn(o, l)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function hh(t, e, a, l, u) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (ei(o, l) && t.ref === e.ref)
        if (((Pt = !1), (e.pendingProps = l = o), bo(t, u))) (t.flags & 131072) !== 0 && (Pt = !0);
        else return ((e.lanes = t.lanes), yn(t, e, u));
    }
    return fo(t, e, a, l, u);
  }
  function mh(t, e, a, l) {
    var u = l.children,
      o = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | a : a), t !== null)) {
          for (l = e.child = t.child, u = 0; l !== null; )
            ((u = u | l.lanes | l.childLanes), (l = l.sibling));
          l = u & ~o;
        } else ((l = 0), (e.child = null));
        return ph(t, e, o, a, l);
      }
      if ((a & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Rs(e, o !== null ? o.cachePool : null),
          o !== null ? vd(e, o) : Gu(),
          gd(e));
      else return ((l = e.lanes = 536870912), ph(t, e, o !== null ? o.baseLanes | a : a, a, l));
    } else
      o !== null
        ? (Rs(e, o.cachePool), vd(e, o), kn(), (e.memoizedState = null))
        : (t !== null && Rs(e, null), Gu(), kn());
    return (re(t, e, u, a), e.child);
  }
  function yi(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function ph(t, e, a, l, u) {
    var o = Lu();
    return (
      (o = o === null ? null : { parent: Kt._currentValue, pool: o }),
      (e.memoizedState = { baseLanes: a, cachePool: o }),
      t !== null && Rs(e, null),
      Gu(),
      gd(e),
      t !== null && ol(t, e, l, !0),
      (e.childLanes = u),
      null
    );
  }
  function Ys(t, e) {
    return (
      (e = Qs({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function yh(t, e, a) {
    return (
      Aa(e, t.child, null, a),
      (t = Ys(e, e.pendingProps)),
      (t.flags |= 2),
      ze(e),
      (e.memoizedState = null),
      t
    );
  }
  function Fg(t, e, a) {
    var l = e.pendingProps,
      u = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (vt) {
        if (l.mode === "hidden") return ((t = Ys(e, l)), (e.lanes = 536870912), yi(null, t));
        if (
          (Vu(e),
          (t = Nt)
            ? ((t = wm(t, qe)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Un !== null ? { id: Fe, overflow: Ie } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Wf(t)),
                (a.return = e),
                (e.child = a),
                (ie = e),
                (Nt = null)))
            : (t = null),
          t === null)
        )
          throw Hn(e);
        return ((e.lanes = 536870912), null);
      }
      return Ys(e, l);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var d = o.dehydrated;
      if ((Vu(e), u))
        if (e.flags & 256) ((e.flags &= -257), (e = yh(t, e, a)));
        else if (e.memoizedState !== null) ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(r(558));
      else if ((Pt || ol(t, e, a, !1), (u = (a & t.childLanes) !== 0), Pt || u)) {
        if (((l = Ct), l !== null && ((d = sf(l, a)), d !== 0 && d !== o.retryLane)))
          throw ((o.retryLane = d), ga(t, d), _e(l, t, d), co);
        (Is(), (e = yh(t, e, a)));
      } else
        ((t = o.treeContext),
          (Nt = Ge(d.nextSibling)),
          (ie = e),
          (vt = !0),
          (Bn = null),
          (qe = !1),
          t !== null && nd(e, t),
          (e = Ys(e, l)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = cn(t.child, { mode: l.mode, children: l.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Gs(t, e) {
    var a = e.ref;
    if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function fo(t, e, a, l, u) {
    return (
      xa(e),
      (a = Xu(t, e, a, l, void 0, u)),
      (l = Ku()),
      t !== null && !Pt
        ? (Zu(t, e, u), yn(t, e, u))
        : (vt && l && Au(e), (e.flags |= 1), re(t, e, a, u), e.child)
    );
  }
  function vh(t, e, a, l, u, o) {
    return (
      xa(e),
      (e.updateQueue = null),
      (a = Sd(e, l, a, u)),
      bd(t),
      (l = Ku()),
      t !== null && !Pt
        ? (Zu(t, e, o), yn(t, e, o))
        : (vt && l && Au(e), (e.flags |= 1), re(t, e, a, o), e.child)
    );
  }
  function gh(t, e, a, l, u) {
    if ((xa(e), e.stateNode === null)) {
      var o = il,
        d = a.contextType;
      (typeof d == "object" && d !== null && (o = se(d)),
        (o = new a(l, o)),
        (e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = uo),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = l),
        (o.state = e.memoizedState),
        (o.refs = {}),
        Bu(e),
        (d = a.contextType),
        (o.context = typeof d == "object" && d !== null ? se(d) : il),
        (o.state = e.memoizedState),
        (d = a.getDerivedStateFromProps),
        typeof d == "function" && (ro(e, a, d, l), (o.state = e.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((d = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
          d !== o.state && uo.enqueueReplaceState(o, o.state, null),
          fi(e, l, o, u),
          ci(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0));
    } else if (t === null) {
      o = e.stateNode;
      var g = e.memoizedProps,
        R = wa(a, g);
      o.props = R;
      var N = o.context,
        q = a.contextType;
      ((d = il), typeof q == "object" && q !== null && (d = se(q)));
      var k = a.getDerivedStateFromProps;
      ((q = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function"),
        (g = e.pendingProps !== g),
        q ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((g || N !== d) && lh(e, o, l, d)),
        (Yn = !1));
      var L = e.memoizedState;
      ((o.state = L),
        fi(e, l, o, u),
        ci(),
        (N = e.memoizedState),
        g || L !== N || Yn
          ? (typeof k == "function" && (ro(e, a, k, l), (N = e.memoizedState)),
            (R = Yn || ah(e, a, R, l, L, N, d))
              ? (q ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" && o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" && (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = N)),
            (o.props = l),
            (o.state = N),
            (o.context = d),
            (l = R))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), (l = !1)));
    } else {
      ((o = e.stateNode),
        Hu(t, e),
        (d = e.memoizedProps),
        (q = wa(a, d)),
        (o.props = q),
        (k = e.pendingProps),
        (L = o.context),
        (N = a.contextType),
        (R = il),
        typeof N == "object" && N !== null && (R = se(N)),
        (g = a.getDerivedStateFromProps),
        (N = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((d !== k || L !== R) && lh(e, o, l, R)),
        (Yn = !1),
        (L = e.memoizedState),
        (o.state = L),
        fi(e, l, o, u),
        ci());
      var U = e.memoizedState;
      d !== k || L !== U || Yn || (t !== null && t.dependencies !== null && xs(t.dependencies))
        ? (typeof g == "function" && (ro(e, a, g, l), (U = e.memoizedState)),
          (q =
            Yn ||
            ah(e, a, q, l, L, U, R) ||
            (t !== null && t.dependencies !== null && xs(t.dependencies)))
            ? (N ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(l, U, R),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(l, U, R)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (d === t.memoizedProps && L === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (d === t.memoizedProps && L === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = U)),
          (o.props = l),
          (o.state = U),
          (o.context = R),
          (l = q))
        : (typeof o.componentDidUpdate != "function" ||
            (d === t.memoizedProps && L === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (d === t.memoizedProps && L === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (o = l),
      Gs(t, e),
      (l = (e.flags & 128) !== 0),
      o || l
        ? ((o = e.stateNode),
          (a = l && typeof a.getDerivedStateFromError != "function" ? null : o.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = Aa(e, t.child, null, u)), (e.child = Aa(e, null, a, u)))
            : re(t, e, a, u),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = yn(t, e, u)),
      t
    );
  }
  function bh(t, e, a, l) {
    return (Sa(), (e.flags |= 256), re(t, e, a, l), e.child);
  }
  var ho = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function mo(t) {
    return { baseLanes: t, cachePool: ud() };
  }
  function po(t, e, a) {
    return ((t = t !== null ? t.childLanes & ~a : 0), e && (t |= Ce), t);
  }
  function Sh(t, e, a) {
    var l = e.pendingProps,
      u = !1,
      o = (e.flags & 128) !== 0,
      d;
    if (
      ((d = o) || (d = t !== null && t.memoizedState === null ? !1 : (Vt.current & 2) !== 0),
      d && ((u = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (vt) {
        if (
          (u ? Vn(e) : kn(),
          (t = Nt)
            ? ((t = wm(t, qe)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Un !== null ? { id: Fe, overflow: Ie } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Wf(t)),
                (a.return = e),
                (e.child = a),
                (ie = e),
                (Nt = null)))
            : (t = null),
          t === null)
        )
          throw Hn(e);
        return (Io(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var g = l.children;
      return (
        (l = l.fallback),
        u
          ? (kn(),
            (u = e.mode),
            (g = Qs({ mode: "hidden", children: g }, u)),
            (l = ba(l, u, a, null)),
            (g.return = e),
            (l.return = e),
            (g.sibling = l),
            (e.child = g),
            (l = e.child),
            (l.memoizedState = mo(a)),
            (l.childLanes = po(t, d, a)),
            (e.memoizedState = ho),
            yi(null, l))
          : (Vn(e), yo(e, g))
      );
    }
    var R = t.memoizedState;
    if (R !== null && ((g = R.dehydrated), g !== null)) {
      if (o)
        e.flags & 256
          ? (Vn(e), (e.flags &= -257), (e = vo(t, e, a)))
          : e.memoizedState !== null
            ? (kn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (kn(),
              (g = l.fallback),
              (u = e.mode),
              (l = Qs({ mode: "visible", children: l.children }, u)),
              (g = ba(g, u, a, null)),
              (g.flags |= 2),
              (l.return = e),
              (g.return = e),
              (l.sibling = g),
              (e.child = l),
              Aa(e, t.child, null, a),
              (l = e.child),
              (l.memoizedState = mo(a)),
              (l.childLanes = po(t, d, a)),
              (e.memoizedState = ho),
              (e = yi(null, l)));
      else if ((Vn(e), Io(g))) {
        if (((d = g.nextSibling && g.nextSibling.dataset), d)) var N = d.dgst;
        ((d = N),
          (l = Error(r(419))),
          (l.stack = ""),
          (l.digest = d),
          li({ value: l, source: null, stack: null }),
          (e = vo(t, e, a)));
      } else if ((Pt || ol(t, e, a, !1), (d = (a & t.childLanes) !== 0), Pt || d)) {
        if (((d = Ct), d !== null && ((l = sf(d, a)), l !== 0 && l !== R.retryLane)))
          throw ((R.retryLane = l), ga(t, l), _e(d, t, l), co);
        (Fo(g) || Is(), (e = vo(t, e, a)));
      } else
        Fo(g)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = R.treeContext),
            (Nt = Ge(g.nextSibling)),
            (ie = e),
            (vt = !0),
            (Bn = null),
            (qe = !1),
            t !== null && nd(e, t),
            (e = yo(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (kn(),
        (g = l.fallback),
        (u = e.mode),
        (R = t.child),
        (N = R.sibling),
        (l = cn(R, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = R.subtreeFlags & 65011712),
        N !== null ? (g = cn(N, g)) : ((g = ba(g, u, a, null)), (g.flags |= 2)),
        (g.return = e),
        (l.return = e),
        (l.sibling = g),
        (e.child = l),
        yi(null, l),
        (l = e.child),
        (g = t.child.memoizedState),
        g === null
          ? (g = mo(a))
          : ((u = g.cachePool),
            u !== null
              ? ((R = Kt._currentValue), (u = u.parent !== R ? { parent: R, pool: R } : u))
              : (u = ud()),
            (g = { baseLanes: g.baseLanes | a, cachePool: u })),
        (l.memoizedState = g),
        (l.childLanes = po(t, d, a)),
        (e.memoizedState = ho),
        yi(t.child, l))
      : (Vn(e),
        (a = t.child),
        (t = a.sibling),
        (a = cn(a, { mode: "visible", children: l.children })),
        (a.return = e),
        (a.sibling = null),
        t !== null &&
          ((d = e.deletions), d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = a),
        (e.memoizedState = null),
        a);
  }
  function yo(t, e) {
    return ((e = Qs({ mode: "visible", children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function Qs(t, e) {
    return ((t = Me(22, t, null, e)), (t.lanes = 0), t);
  }
  function vo(t, e, a) {
    return (
      Aa(e, t.child, null, a),
      (t = yo(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function _h(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    (l !== null && (l.lanes |= e), Cu(t.return, e, a));
  }
  function go(t, e, a, l, u, o) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: u,
          treeForkCount: o,
        })
      : ((d.isBackwards = e),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = a),
        (d.tailMode = u),
        (d.treeForkCount = o));
  }
  function xh(t, e, a) {
    var l = e.pendingProps,
      u = l.revealOrder,
      o = l.tail;
    l = l.children;
    var d = Vt.current,
      g = (d & 2) !== 0;
    if (
      (g ? ((d = (d & 1) | 2), (e.flags |= 128)) : (d &= 1),
      F(Vt, d),
      re(t, e, l, a),
      (l = vt ? ai : 0),
      !g && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && _h(t, a, e);
        else if (t.tag === 19) _h(t, a, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (u) {
      case "forwards":
        for (a = e.child, u = null; a !== null; )
          ((t = a.alternate), t !== null && Os(t) === null && (u = a), (a = a.sibling));
        ((a = u),
          a === null ? ((u = e.child), (e.child = null)) : ((u = a.sibling), (a.sibling = null)),
          go(e, !1, u, a, o, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && Os(t) === null)) {
            e.child = u;
            break;
          }
          ((t = u.sibling), (u.sibling = a), (a = u), (u = t));
        }
        go(e, !0, a, null, o, l);
        break;
      case "together":
        go(e, !1, null, null, void 0, l);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function yn(t, e, a) {
    if (
      (t !== null && (e.dependencies = t.dependencies), (Zn |= e.lanes), (a & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ol(t, e, a, !1), (a & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, a = cn(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        ((t = t.sibling), (a = a.sibling = cn(t, t.pendingProps)), (a.return = e));
      a.sibling = null;
    }
    return e.child;
  }
  function bo(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && xs(t)));
  }
  function Ig(t, e, a) {
    switch (e.tag) {
      case 3:
        (Qt(e, e.stateNode.containerInfo), qn(e, Kt, t.memoizedState.cache), Sa());
        break;
      case 27:
      case 5:
        an(e);
        break;
      case 4:
        Qt(e, e.stateNode.containerInfo);
        break;
      case 10:
        qn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Vu(e), null);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Vn(e), (e.flags |= 128), null)
            : (a & e.child.childLanes) !== 0
              ? Sh(t, e, a)
              : (Vn(e), (t = yn(t, e, a)), t !== null ? t.sibling : null);
        Vn(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((l = (a & e.childLanes) !== 0),
          l || (ol(t, e, a, !1), (l = (a & e.childLanes) !== 0)),
          u)
        ) {
          if (l) return xh(t, e, a);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          F(Vt, Vt.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), mh(t, e, a, e.pendingProps));
      case 24:
        qn(e, Kt, t.memoizedState.cache);
    }
    return yn(t, e, a);
  }
  function Eh(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Pt = !0;
      else {
        if (!bo(t, a) && (e.flags & 128) === 0) return ((Pt = !1), Ig(t, e, a));
        Pt = (t.flags & 131072) !== 0;
      }
    else ((Pt = !1), vt && (e.flags & 1048576) !== 0 && ed(e, ai, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (((t = Ra(e.elementType)), (e.type = t), typeof t == "function"))
            Eu(t)
              ? ((l = wa(t, l)), (e.tag = 1), (e = gh(null, e, t, l, a)))
              : ((e.tag = 0), (e = fo(null, e, t, l, a)));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === G) {
                ((e.tag = 11), (e = fh(null, e, t, l, a)));
                break t;
              } else if (u === Y) {
                ((e.tag = 14), (e = dh(null, e, t, l, a)));
                break t;
              }
            }
            throw ((e = Ut(t) || t), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return fo(t, e, e.type, e.pendingProps, a);
      case 1:
        return ((l = e.type), (u = wa(l, e.pendingProps)), gh(t, e, l, u, a));
      case 3:
        t: {
          if ((Qt(e, e.stateNode.containerInfo), t === null)) throw Error(r(387));
          l = e.pendingProps;
          var o = e.memoizedState;
          ((u = o.element), Hu(t, e), fi(e, l, null, a));
          var d = e.memoizedState;
          if (
            ((l = d.cache),
            qn(e, Kt, l),
            l !== o.cache && ju(e, [Kt], a, !0),
            ci(),
            (l = d.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: l, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
            ) {
              e = bh(t, e, l, a);
              break t;
            } else if (l !== u) {
              ((u = Ue(Error(r(424)), e)), li(u), (e = bh(t, e, l, a)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Nt = Ge(t.firstChild),
                  ie = e,
                  vt = !0,
                  Bn = null,
                  qe = !0,
                  a = md(e, null, l, a),
                  e.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((Sa(), l === u)) {
              e = yn(t, e, a);
              break t;
            }
            re(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Gs(t, e),
          t === null
            ? (a = Nm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = a)
              : vt ||
                ((a = e.type),
                (t = e.pendingProps),
                (l = lr(dt.current).createElement(a)),
                (l[le] = e),
                (l[pe] = t),
                ue(l, a, t),
                te(l),
                (e.stateNode = l))
            : (e.memoizedState = Nm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          an(e),
          t === null &&
            vt &&
            ((l = e.stateNode = Cm(e.type, e.pendingProps, dt.current)),
            (ie = e),
            (qe = !0),
            (u = Nt),
            $n(e.type) ? (($o = u), (Nt = Ge(l.firstChild))) : (Nt = u)),
          re(t, e, e.pendingProps.children, a),
          Gs(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            vt &&
            ((u = l = Nt) &&
              ((l = M0(l, e.type, e.pendingProps, qe)),
              l !== null
                ? ((e.stateNode = l), (ie = e), (Nt = Ge(l.firstChild)), (qe = !1), (u = !0))
                : (u = !1)),
            u || Hn(e)),
          an(e),
          (u = e.type),
          (o = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (l = o.children),
          Zo(u, o) ? (l = null) : d !== null && Zo(u, d) && (e.flags |= 32),
          e.memoizedState !== null && ((u = Xu(t, e, Qg, null, null, a)), (Ci._currentValue = u)),
          Gs(t, e),
          re(t, e, l, a),
          e.child
        );
      case 6:
        return (
          t === null &&
            vt &&
            ((t = a = Nt) &&
              ((a = w0(a, e.pendingProps, qe)),
              a !== null ? ((e.stateNode = a), (ie = e), (Nt = null), (t = !0)) : (t = !1)),
            t || Hn(e)),
          null
        );
      case 13:
        return Sh(t, e, a);
      case 4:
        return (
          Qt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = Aa(e, null, l, a)) : re(t, e, l, a),
          e.child
        );
      case 11:
        return fh(t, e, e.type, e.pendingProps, a);
      case 7:
        return (re(t, e, e.pendingProps, a), e.child);
      case 8:
        return (re(t, e, e.pendingProps.children, a), e.child);
      case 12:
        return (re(t, e, e.pendingProps.children, a), e.child);
      case 10:
        return ((l = e.pendingProps), qn(e, e.type, l.value), re(t, e, l.children, a), e.child);
      case 9:
        return (
          (u = e.type._context),
          (l = e.pendingProps.children),
          xa(e),
          (u = se(u)),
          (l = l(u)),
          (e.flags |= 1),
          re(t, e, l, a),
          e.child
        );
      case 14:
        return dh(t, e, e.type, e.pendingProps, a);
      case 15:
        return hh(t, e, e.type, e.pendingProps, a);
      case 19:
        return xh(t, e, a);
      case 31:
        return Fg(t, e, a);
      case 22:
        return mh(t, e, a, e.pendingProps);
      case 24:
        return (
          xa(e),
          (l = se(Kt)),
          t === null
            ? ((u = Lu()),
              u === null &&
                ((u = Ct),
                (o = Du()),
                (u.pooledCache = o),
                o.refCount++,
                o !== null && (u.pooledCacheLanes |= a),
                (u = o)),
              (e.memoizedState = { parent: l, cache: u }),
              Bu(e),
              qn(e, Kt, u))
            : ((t.lanes & a) !== 0 && (Hu(t, e), fi(e, null, null, a), ci()),
              (u = t.memoizedState),
              (o = e.memoizedState),
              u.parent !== l
                ? ((u = { parent: l, cache: l }),
                  (e.memoizedState = u),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u),
                  qn(e, Kt, l))
                : ((l = o.cache), qn(e, Kt, l), l !== u.cache && ju(e, [Kt], a, !0))),
          re(t, e, e.pendingProps.children, a),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function vn(t) {
    t.flags |= 4;
  }
  function So(t, e, a, l, u) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (u & 335544128) === u))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Fh()) t.flags |= 8192;
        else throw ((Ta = As), Uu);
    } else t.flags &= -16777217;
  }
  function Rh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !qm(e)))
      if (Fh()) t.flags |= 8192;
      else throw ((Ta = As), Uu);
  }
  function Vs(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? nf() : 536870912), (t.lanes |= e), (_l |= e)));
  }
  function vi(t, e) {
    if (!vt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; ) (e.alternate !== null && (a = e), (e = e.sibling));
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var l = null; a !== null; ) (a.alternate !== null && (l = a), (a = a.sibling));
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Lt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      l = 0;
    if (e)
      for (var u = t.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 65011712),
          (l |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling));
    else
      for (u = t.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = t),
          (u = u.sibling));
    return ((t.subtreeFlags |= l), (t.childLanes = a), e);
  }
  function $g(t, e, a) {
    var l = e.pendingProps;
    switch ((Mu(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Lt(e), null);
      case 1:
        return (Lt(e), null);
      case 3:
        return (
          (a = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          hn(Kt),
          Ot(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (ul(e)
              ? vn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), zu())),
          Lt(e),
          null
        );
      case 26:
        var u = e.type,
          o = e.memoizedState;
        return (
          t === null
            ? (vn(e), o !== null ? (Lt(e), Rh(e, o)) : (Lt(e), So(e, u, null, l, a)))
            : o
              ? o !== t.memoizedState
                ? (vn(e), Lt(e), Rh(e, o))
                : (Lt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps), t !== l && vn(e), Lt(e), So(e, u, t, l, a)),
          null
        );
      case 27:
        if ((ln(e), (a = dt.current), (u = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && vn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(r(166));
            return (Lt(e), null);
          }
          ((t = $.current), ul(e) ? ad(e) : ((t = Cm(u, l, a)), (e.stateNode = t), vn(e)));
        }
        return (Lt(e), null);
      case 5:
        if ((ln(e), (u = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && vn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(r(166));
            return (Lt(e), null);
          }
          if (((o = $.current), ul(e))) ad(e);
          else {
            var d = lr(dt.current);
            switch (o) {
              case 1:
                o = d.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                o = d.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    o = d.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    o = d.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                    break;
                  case "script":
                    ((o = d.createElement("div")),
                      (o.innerHTML = "<script><\/script>"),
                      (o = o.removeChild(o.firstChild)));
                    break;
                  case "select":
                    ((o =
                      typeof l.is == "string"
                        ? d.createElement("select", { is: l.is })
                        : d.createElement("select")),
                      l.multiple ? (o.multiple = !0) : l.size && (o.size = l.size));
                    break;
                  default:
                    o =
                      typeof l.is == "string"
                        ? d.createElement(u, { is: l.is })
                        : d.createElement(u);
                }
            }
            ((o[le] = e), (o[pe] = l));
            t: for (d = e.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) o.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === e) break t;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === e) break t;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            e.stateNode = o;
            t: switch ((ue(o, u, l), u)) {
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
            l && vn(e);
          }
        }
        return (Lt(e), So(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && vn(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = dt.current), ul(e))) {
            if (((t = e.stateNode), (a = e.memoizedProps), (l = null), (u = ie), u !== null))
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            ((t[le] = e),
              (t = !!(
                t.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Sm(t.nodeValue, a)
              )),
              t || Hn(e, !0));
          } else ((t = lr(t).createTextNode(l)), (t[le] = e), (e.stateNode = t));
        }
        return (Lt(e), null);
      case 31:
        if (((a = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((l = ul(e)), a !== null)) {
            if (t === null) {
              if (!l) throw Error(r(318));
              if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
                throw Error(r(557));
              t[le] = e;
            } else (Sa(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (Lt(e), (t = !1));
          } else
            ((a = zu()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a),
              (t = !0));
          if (!t) return e.flags & 256 ? (ze(e), e) : (ze(e), null);
          if ((e.flags & 128) !== 0) throw Error(r(558));
        }
        return (Lt(e), null);
      case 13:
        if (
          ((l = e.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = ul(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (((u = e.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(r(317));
              u[le] = e;
            } else (Sa(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (Lt(e), (u = !1));
          } else
            ((u = zu()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return e.flags & 256 ? (ze(e), e) : (ze(e), null);
        }
        return (
          ze(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = a), e)
            : ((a = l !== null),
              (t = t !== null && t.memoizedState !== null),
              a &&
                ((l = e.child),
                (u = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (u = l.alternate.memoizedState.cachePool.pool),
                (o = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (o = l.memoizedState.cachePool.pool),
                o !== u && (l.flags |= 2048)),
              a !== t && a && (e.child.flags |= 8192),
              Vs(e, e.updateQueue),
              Lt(e),
              null)
        );
      case 4:
        return (Ot(), t === null && Qo(e.stateNode.containerInfo), Lt(e), null);
      case 10:
        return (hn(e.type), Lt(e), null);
      case 19:
        if ((V(Vt), (l = e.memoizedState), l === null)) return (Lt(e), null);
        if (((u = (e.flags & 128) !== 0), (o = l.rendering), o === null))
          if (u) vi(l, !1);
          else {
            if (Yt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = Os(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      vi(l, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      Vs(e, t),
                      e.subtreeFlags = 0,
                      t = a,
                      a = e.child;
                    a !== null;
                  )
                    ($f(a, t), (a = a.sibling));
                  return (F(Vt, (Vt.current & 1) | 2), vt && fn(e, l.treeForkCount), e.child);
                }
                t = t.sibling;
              }
            l.tail !== null &&
              ce() > Ps &&
              ((e.flags |= 128), (u = !0), vi(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = Os(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Vs(e, t),
                vi(l, !0),
                l.tail === null && l.tailMode === "hidden" && !o.alternate && !vt)
              )
                return (Lt(e), null);
            } else
              2 * ce() - l.renderingStartTime > Ps &&
                a !== 536870912 &&
                ((e.flags |= 128), (u = !0), vi(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = l.last), t !== null ? (t.sibling = o) : (e.child = o), (l.last = o));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = ce()),
            (t.sibling = null),
            (a = Vt.current),
            F(Vt, u ? (a & 1) | 2 : a & 1),
            vt && fn(e, l.treeForkCount),
            t)
          : (Lt(e), null);
      case 22:
      case 23:
        return (
          ze(e),
          Qu(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Lt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Lt(e),
          (a = e.updateQueue),
          a !== null && Vs(e, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== a && (e.flags |= 2048),
          t !== null && V(Ea),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          hn(Kt),
          Lt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Wg(t, e) {
    switch ((Mu(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          hn(Kt),
          Ot(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return (ln(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((ze(e), e.alternate === null)) throw Error(r(340));
          Sa();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 13:
        if ((ze(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(r(340));
          Sa();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (V(Vt), null);
      case 4:
        return (Ot(), null);
      case 10:
        return (hn(e.type), null);
      case 22:
      case 23:
        return (
          ze(e),
          Qu(),
          t !== null && V(Ea),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (hn(Kt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Th(t, e) {
    switch ((Mu(e), e.tag)) {
      case 3:
        (hn(Kt), Ot());
        break;
      case 26:
      case 27:
      case 5:
        ln(e);
        break;
      case 4:
        Ot();
        break;
      case 31:
        e.memoizedState !== null && ze(e);
        break;
      case 13:
        ze(e);
        break;
      case 19:
        V(Vt);
        break;
      case 10:
        hn(e.type);
        break;
      case 22:
      case 23:
        (ze(e), Qu(), t !== null && V(Ea));
        break;
      case 24:
        hn(Kt);
    }
  }
  function gi(t, e) {
    try {
      var a = e.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            l = void 0;
            var o = a.create,
              d = a.inst;
            ((l = o()), (d.destroy = l));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (g) {
      At(e, e.return, g);
    }
  }
  function Xn(t, e, a) {
    try {
      var l = e.updateQueue,
        u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var o = u.next;
        l = o;
        do {
          if ((l.tag & t) === t) {
            var d = l.inst,
              g = d.destroy;
            if (g !== void 0) {
              ((d.destroy = void 0), (u = e));
              var R = a,
                N = g;
              try {
                N();
              } catch (q) {
                At(u, R, q);
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (q) {
      At(e, e.return, q);
    }
  }
  function Ah(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        yd(e, a);
      } catch (l) {
        At(t, t.return, l);
      }
    }
  }
  function Mh(t, e, a) {
    ((a.props = wa(t.type, t.memoizedProps)), (a.state = t.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      At(t, e, l);
    }
  }
  function bi(t, e) {
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
        typeof a == "function" ? (t.refCleanup = a(l)) : (a.current = l);
      }
    } catch (u) {
      At(t, e, u);
    }
  }
  function $e(t, e) {
    var a = t.ref,
      l = t.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          At(t, e, u);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          At(t, e, u);
        }
      else a.current = null;
  }
  function wh(t) {
    var e = t.type,
      a = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break t;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (u) {
      At(t, t.return, u);
    }
  }
  function _o(t, e, a) {
    try {
      var l = t.stateNode;
      (_0(l, t.type, a, e), (l[pe] = e));
    } catch (u) {
      At(t, t.return, u);
    }
  }
  function zh(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && $n(t.type)) || t.tag === 4
    );
  }
  function xo(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || zh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if ((t.tag === 27 && $n(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Eo(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode),
        e
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(t, e)
          : ((e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a),
            e.appendChild(t),
            (a = a._reactRootContainer),
            a != null || e.onclick !== null || (e.onclick = un)));
    else if (
      l !== 4 &&
      (l === 27 && $n(t.type) && ((a = t.stateNode), (e = null)), (t = t.child), t !== null)
    )
      for (Eo(t, e, a), t = t.sibling; t !== null; ) (Eo(t, e, a), (t = t.sibling));
  }
  function ks(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6) ((t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t));
    else if (l !== 4 && (l === 27 && $n(t.type) && (a = t.stateNode), (t = t.child), t !== null))
      for (ks(t, e, a), t = t.sibling; t !== null; ) (ks(t, e, a), (t = t.sibling));
  }
  function Oh(t) {
    var e = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var l = t.type, u = e.attributes; u.length; ) e.removeAttributeNode(u[0]);
      (ue(e, l, a), (e[le] = t), (e[pe] = a));
    } catch (o) {
      At(t, t.return, o);
    }
  }
  var gn = !1,
    Jt = !1,
    Ro = !1,
    Ch = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function t0(t, e) {
    if (((t = t.containerInfo), (Xo = fr), (t = Vf(t)), yu(t))) {
      if ("selectionStart" in t) var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var u = l.anchorOffset,
              o = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, o.nodeType);
            } catch {
              a = null;
              break t;
            }
            var d = 0,
              g = -1,
              R = -1,
              N = 0,
              q = 0,
              k = t,
              L = null;
            e: for (;;) {
              for (
                var U;
                k !== a || (u !== 0 && k.nodeType !== 3) || (g = d + u),
                  k !== o || (l !== 0 && k.nodeType !== 3) || (R = d + l),
                  k.nodeType === 3 && (d += k.nodeValue.length),
                  (U = k.firstChild) !== null;
              )
                ((L = k), (k = U));
              for (;;) {
                if (k === t) break e;
                if (
                  (L === a && ++N === u && (g = d),
                  L === o && ++q === l && (R = d),
                  (U = k.nextSibling) !== null)
                )
                  break;
                ((k = L), (L = k.parentNode));
              }
              k = U;
            }
            a = g === -1 || R === -1 ? null : { start: g, end: R };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Ko = { focusedElem: t, selectionRange: a }, fr = !1, ee = e; ee !== null; )
      if (((e = ee), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
        ((t.return = e), (ee = t));
      else
        for (; ee !== null; ) {
          switch (((e = ee), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue), (t = t !== null ? t.events : null), t !== null)
              )
                for (a = 0; a < t.length; a++) ((u = t[a]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                ((t = void 0),
                  (a = e),
                  (u = o.memoizedProps),
                  (o = o.memoizedState),
                  (l = a.stateNode));
                try {
                  var tt = wa(a.type, u);
                  ((t = l.getSnapshotBeforeUpdate(tt, o)),
                    (l.__reactInternalSnapshotBeforeUpdate = t));
                } catch (rt) {
                  At(a, a.return, rt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)) Jo(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jo(t);
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (ee = t));
            break;
          }
          ee = e.return;
        }
  }
  function jh(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Sn(t, a), l & 4 && gi(5, a));
        break;
      case 1:
        if ((Sn(t, a), l & 4))
          if (((t = a.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (d) {
              At(a, a.return, d);
            }
          else {
            var u = wa(a.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              At(a, a.return, d);
            }
          }
        (l & 64 && Ah(a), l & 512 && bi(a, a.return));
        break;
      case 3:
        if ((Sn(t, a), l & 64 && ((t = a.updateQueue), t !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            yd(t, e);
          } catch (d) {
            At(a, a.return, d);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Oh(a);
      case 26:
      case 5:
        (Sn(t, a), e === null && l & 4 && wh(a), l & 512 && bi(a, a.return));
        break;
      case 12:
        Sn(t, a);
        break;
      case 31:
        (Sn(t, a), l & 4 && Lh(t, a));
        break;
      case 13:
        (Sn(t, a),
          l & 4 && Uh(t, a),
          l & 64 &&
            ((t = a.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((a = o0.bind(null, a)), z0(t, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || gn), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || Jt), (u = gn));
          var o = Jt;
          ((gn = l),
            (Jt = e) && !o ? _n(t, a, (a.subtreeFlags & 8772) !== 0) : Sn(t, a),
            (gn = u),
            (Jt = o));
        }
        break;
      case 30:
        break;
      default:
        Sn(t, a);
    }
  }
  function Dh(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Dh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Wr(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Bt = null,
    ve = !1;
  function bn(t, e, a) {
    for (a = a.child; a !== null; ) (Nh(t, e, a), (a = a.sibling));
  }
  function Nh(t, e, a) {
    if (Re && typeof Re.onCommitFiberUnmount == "function")
      try {
        Re.onCommitFiberUnmount(Vl, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Jt || $e(a, e),
          bn(t, e, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Jt || $e(a, e);
        var l = Bt,
          u = ve;
        ($n(a.type) && ((Bt = a.stateNode), (ve = !1)),
          bn(t, e, a),
          wi(a.stateNode),
          (Bt = l),
          (ve = u));
        break;
      case 5:
        Jt || $e(a, e);
      case 6:
        if (((l = Bt), (u = ve), (Bt = null), bn(t, e, a), (Bt = l), (ve = u), Bt !== null))
          if (ve)
            try {
              (Bt.nodeType === 9
                ? Bt.body
                : Bt.nodeName === "HTML"
                  ? Bt.ownerDocument.body
                  : Bt
              ).removeChild(a.stateNode);
            } catch (o) {
              At(a, e, o);
            }
          else
            try {
              Bt.removeChild(a.stateNode);
            } catch (o) {
              At(a, e, o);
            }
        break;
      case 18:
        Bt !== null &&
          (ve
            ? ((t = Bt),
              Am(
                t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
                a.stateNode,
              ),
              zl(t))
            : Am(Bt, a.stateNode));
        break;
      case 4:
        ((l = Bt),
          (u = ve),
          (Bt = a.stateNode.containerInfo),
          (ve = !0),
          bn(t, e, a),
          (Bt = l),
          (ve = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Xn(2, a, e), Jt || Xn(4, a, e), bn(t, e, a));
        break;
      case 1:
        (Jt ||
          ($e(a, e), (l = a.stateNode), typeof l.componentWillUnmount == "function" && Mh(a, e, l)),
          bn(t, e, a));
        break;
      case 21:
        bn(t, e, a);
        break;
      case 22:
        ((Jt = (l = Jt) || a.memoizedState !== null), bn(t, e, a), (Jt = l));
        break;
      default:
        bn(t, e, a);
    }
  }
  function Lh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        zl(t);
      } catch (a) {
        At(e, e.return, a);
      }
    }
  }
  function Uh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        zl(t);
      } catch (a) {
        At(e, e.return, a);
      }
  }
  function e0(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Ch()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Ch()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Xs(t, e) {
    var a = e0(t);
    e.forEach(function (l) {
      if (!a.has(l)) {
        a.add(l);
        var u = c0.bind(null, t, l);
        l.then(u, u);
      }
    });
  }
  function ge(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l],
          o = t,
          d = e,
          g = d;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if ($n(g.type)) {
                ((Bt = g.stateNode), (ve = !1));
                break t;
              }
              break;
            case 5:
              ((Bt = g.stateNode), (ve = !1));
              break t;
            case 3:
            case 4:
              ((Bt = g.stateNode.containerInfo), (ve = !0));
              break t;
          }
          g = g.return;
        }
        if (Bt === null) throw Error(r(160));
        (Nh(o, d, u),
          (Bt = null),
          (ve = !1),
          (o = u.alternate),
          o !== null && (o.return = null),
          (u.return = null));
      }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) (Bh(e, t), (e = e.sibling));
  }
  var Xe = null;
  function Bh(t, e) {
    var a = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ge(e, t), be(t), l & 4 && (Xn(3, t, t.return), gi(3, t), Xn(5, t, t.return)));
        break;
      case 1:
        (ge(e, t),
          be(t),
          l & 512 && (Jt || a === null || $e(a, a.return)),
          l & 64 &&
            gn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
        break;
      case 26:
        var u = Xe;
        if ((ge(e, t), be(t), l & 512 && (Jt || a === null || $e(a, a.return)), l & 4)) {
          var o = a !== null ? a.memoizedState : null;
          if (((l = t.memoizedState), a === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  ((l = t.type), (a = t.memoizedProps), (u = u.ownerDocument || u));
                  e: switch (l) {
                    case "title":
                      ((o = u.getElementsByTagName("title")[0]),
                        (!o ||
                          o[Kl] ||
                          o[le] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = u.createElement(l)),
                          u.head.insertBefore(o, u.querySelector("head > title"))),
                        ue(o, l, a),
                        (o[le] = t),
                        te(o),
                        (l = o));
                      break t;
                    case "link":
                      var d = Bm("link", "href", u).get(l + (a.href || ""));
                      if (d) {
                        for (var g = 0; g < d.length; g++)
                          if (
                            ((o = d[g]),
                            o.getAttribute("href") ===
                              (a.href == null || a.href === "" ? null : a.href) &&
                              o.getAttribute("rel") === (a.rel == null ? null : a.rel) &&
                              o.getAttribute("title") === (a.title == null ? null : a.title) &&
                              o.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            d.splice(g, 1);
                            break e;
                          }
                      }
                      ((o = u.createElement(l)), ue(o, l, a), u.head.appendChild(o));
                      break;
                    case "meta":
                      if ((d = Bm("meta", "content", u).get(l + (a.content || "")))) {
                        for (g = 0; g < d.length; g++)
                          if (
                            ((o = d[g]),
                            o.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              o.getAttribute("name") === (a.name == null ? null : a.name) &&
                              o.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              o.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              o.getAttribute("charset") === (a.charSet == null ? null : a.charSet))
                          ) {
                            d.splice(g, 1);
                            break e;
                          }
                      }
                      ((o = u.createElement(l)), ue(o, l, a), u.head.appendChild(o));
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  ((o[le] = t), te(o), (l = o));
                }
                t.stateNode = l;
              } else Hm(u, t.type, t.stateNode);
            else t.stateNode = Um(u, l, t.memoizedProps);
          else
            o !== l
              ? (o === null
                  ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a))
                  : o.count--,
                l === null ? Hm(u, t.type, t.stateNode) : Um(u, l, t.memoizedProps))
              : l === null && t.stateNode !== null && _o(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (ge(e, t),
          be(t),
          l & 512 && (Jt || a === null || $e(a, a.return)),
          a !== null && l & 4 && _o(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if ((ge(e, t), be(t), l & 512 && (Jt || a === null || $e(a, a.return)), t.flags & 32)) {
          u = t.stateNode;
          try {
            $a(u, "");
          } catch (tt) {
            At(t, t.return, tt);
          }
        }
        (l & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), _o(t, u, a !== null ? a.memoizedProps : u)),
          l & 1024 && (Ro = !0));
        break;
      case 6:
        if ((ge(e, t), be(t), l & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          ((l = t.memoizedProps), (a = t.stateNode));
          try {
            a.nodeValue = l;
          } catch (tt) {
            At(t, t.return, tt);
          }
        }
        break;
      case 3:
        if (
          ((rr = null),
          (u = Xe),
          (Xe = ir(e.containerInfo)),
          ge(e, t),
          (Xe = u),
          be(t),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            zl(e.containerInfo);
          } catch (tt) {
            At(t, t.return, tt);
          }
        Ro && ((Ro = !1), Hh(t));
        break;
      case 4:
        ((l = Xe), (Xe = ir(t.stateNode.containerInfo)), ge(e, t), be(t), (Xe = l));
        break;
      case 12:
        (ge(e, t), be(t));
        break;
      case 31:
        (ge(e, t),
          be(t),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), Xs(t, l))));
        break;
      case 13:
        (ge(e, t),
          be(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
            (Zs = ce()),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), Xs(t, l))));
        break;
      case 22:
        u = t.memoizedState !== null;
        var R = a !== null && a.memoizedState !== null,
          N = gn,
          q = Jt;
        if (((gn = N || u), (Jt = q || R), ge(e, t), (Jt = q), (gn = N), be(t), l & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (a === null || R || gn || Jt || za(t)),
              a = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                R = a = e;
                try {
                  if (((o = R.stateNode), u))
                    ((d = o.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    g = R.stateNode;
                    var k = R.memoizedProps.style,
                      L = k != null && k.hasOwnProperty("display") ? k.display : null;
                    g.style.display = L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (tt) {
                  At(R, R.return, tt);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                R = e;
                try {
                  R.stateNode.nodeValue = u ? "" : R.memoizedProps;
                } catch (tt) {
                  At(R, R.return, tt);
                }
              }
            } else if (e.tag === 18) {
              if (a === null) {
                R = e;
                try {
                  var U = R.stateNode;
                  u ? Mm(U, !0) : Mm(R.stateNode, !1);
                } catch (tt) {
                  At(R, R.return, tt);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (a === e && (a = null), (e = e.return));
            }
            (a === e && (a = null), (e.sibling.return = e.return), (e = e.sibling));
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null && ((a = l.retryQueue), a !== null && ((l.retryQueue = null), Xs(t, a))));
        break;
      case 19:
        (ge(e, t),
          be(t),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), Xs(t, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ge(e, t), be(t));
    }
  }
  function be(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (zh(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              o = xo(t);
            ks(t, o, u);
            break;
          case 5:
            var d = a.stateNode;
            a.flags & 32 && ($a(d, ""), (a.flags &= -33));
            var g = xo(t);
            ks(t, g, d);
            break;
          case 3:
          case 4:
            var R = a.stateNode.containerInfo,
              N = xo(t);
            Eo(t, N, R);
            break;
          default:
            throw Error(r(161));
        }
      } catch (q) {
        At(t, t.return, q);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Hh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Hh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function Sn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (jh(t, e.alternate, e), (e = e.sibling));
  }
  function za(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Xn(4, e, e.return), za(e));
          break;
        case 1:
          $e(e, e.return);
          var a = e.stateNode;
          (typeof a.componentWillUnmount == "function" && Mh(e, e.return, a), za(e));
          break;
        case 27:
          wi(e.stateNode);
        case 26:
        case 5:
          ($e(e, e.return), za(e));
          break;
        case 22:
          e.memoizedState === null && za(e);
          break;
        case 30:
          za(e);
          break;
        default:
          za(e);
      }
      t = t.sibling;
    }
  }
  function _n(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        u = t,
        o = e,
        d = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (_n(u, o, a), gi(4, o));
          break;
        case 1:
          if ((_n(u, o, a), (l = o), (u = l.stateNode), typeof u.componentDidMount == "function"))
            try {
              u.componentDidMount();
            } catch (N) {
              At(l, l.return, N);
            }
          if (((l = o), (u = l.updateQueue), u !== null)) {
            var g = l.stateNode;
            try {
              var R = u.shared.hiddenCallbacks;
              if (R !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < R.length; u++) pd(R[u], g);
            } catch (N) {
              At(l, l.return, N);
            }
          }
          (a && d & 64 && Ah(o), bi(o, o.return));
          break;
        case 27:
          Oh(o);
        case 26:
        case 5:
          (_n(u, o, a), a && l === null && d & 4 && wh(o), bi(o, o.return));
          break;
        case 12:
          _n(u, o, a);
          break;
        case 31:
          (_n(u, o, a), a && d & 4 && Lh(u, o));
          break;
        case 13:
          (_n(u, o, a), a && d & 4 && Uh(u, o));
          break;
        case 22:
          (o.memoizedState === null && _n(u, o, a), bi(o, o.return));
          break;
        case 30:
          break;
        default:
          _n(u, o, a);
      }
      e = e.sibling;
    }
  }
  function To(t, e) {
    var a = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && ii(a)));
  }
  function Ao(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && ii(t)));
  }
  function Ke(t, e, a, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (qh(t, e, a, l), (e = e.sibling));
  }
  function qh(t, e, a, l) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ke(t, e, a, l), u & 2048 && gi(9, e));
        break;
      case 1:
        Ke(t, e, a, l);
        break;
      case 3:
        (Ke(t, e, a, l),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && ii(t))));
        break;
      case 12:
        if (u & 2048) {
          (Ke(t, e, a, l), (t = e.stateNode));
          try {
            var o = e.memoizedProps,
              d = o.id,
              g = o.onPostCommit;
            typeof g == "function" &&
              g(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (R) {
            At(e, e.return, R);
          }
        } else Ke(t, e, a, l);
        break;
      case 31:
        Ke(t, e, a, l);
        break;
      case 13:
        Ke(t, e, a, l);
        break;
      case 23:
        break;
      case 22:
        ((o = e.stateNode),
          (d = e.alternate),
          e.memoizedState !== null
            ? o._visibility & 2
              ? Ke(t, e, a, l)
              : Si(t, e)
            : o._visibility & 2
              ? Ke(t, e, a, l)
              : ((o._visibility |= 2), gl(t, e, a, l, (e.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && To(d, e));
        break;
      case 24:
        (Ke(t, e, a, l), u & 2048 && Ao(e.alternate, e));
        break;
      default:
        Ke(t, e, a, l);
    }
  }
  function gl(t, e, a, l, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var o = t,
        d = e,
        g = a,
        R = l,
        N = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (gl(o, d, g, R, u), gi(8, d));
          break;
        case 23:
          break;
        case 22:
          var q = d.stateNode;
          (d.memoizedState !== null
            ? q._visibility & 2
              ? gl(o, d, g, R, u)
              : Si(o, d)
            : ((q._visibility |= 2), gl(o, d, g, R, u)),
            u && N & 2048 && To(d.alternate, d));
          break;
        case 24:
          (gl(o, d, g, R, u), u && N & 2048 && Ao(d.alternate, d));
          break;
        default:
          gl(o, d, g, R, u);
      }
      e = e.sibling;
    }
  }
  function Si(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t,
          l = e,
          u = l.flags;
        switch (l.tag) {
          case 22:
            (Si(a, l), u & 2048 && To(l.alternate, l));
            break;
          case 24:
            (Si(a, l), u & 2048 && Ao(l.alternate, l));
            break;
          default:
            Si(a, l);
        }
        e = e.sibling;
      }
  }
  var _i = 8192;
  function bl(t, e, a) {
    if (t.subtreeFlags & _i) for (t = t.child; t !== null; ) (Yh(t, e, a), (t = t.sibling));
  }
  function Yh(t, e, a) {
    switch (t.tag) {
      case 26:
        (bl(t, e, a),
          t.flags & _i && t.memoizedState !== null && G0(a, Xe, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        bl(t, e, a);
        break;
      case 3:
      case 4:
        var l = Xe;
        ((Xe = ir(t.stateNode.containerInfo)), bl(t, e, a), (Xe = l));
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = _i), (_i = 16777216), bl(t, e, a), (_i = l))
            : bl(t, e, a));
        break;
      default:
        bl(t, e, a);
    }
  }
  function Gh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function xi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ((ee = l), Vh(l, t));
        }
      Gh(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Qh(t), (t = t.sibling));
  }
  function Qh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (xi(t), t.flags & 2048 && Xn(9, t, t.return));
        break;
      case 3:
        xi(t);
        break;
      case 12:
        xi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Ks(t))
          : xi(t);
        break;
      default:
        xi(t);
    }
  }
  function Ks(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ((ee = l), Vh(l, t));
        }
      Gh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Xn(8, e, e.return), Ks(e));
          break;
        case 22:
          ((a = e.stateNode), a._visibility & 2 && ((a._visibility &= -3), Ks(e)));
          break;
        default:
          Ks(e);
      }
      t = t.sibling;
    }
  }
  function Vh(t, e) {
    for (; ee !== null; ) {
      var a = ee;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Xn(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ii(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), (ee = l));
      else
        t: for (a = t; ee !== null; ) {
          l = ee;
          var u = l.sibling,
            o = l.return;
          if ((Dh(l), l === a)) {
            ee = null;
            break t;
          }
          if (u !== null) {
            ((u.return = o), (ee = u));
            break t;
          }
          ee = o;
        }
    }
  }
  var n0 = {
      getCacheForType: function (t) {
        var e = se(Kt),
          a = e.data.get(t);
        return (a === void 0 && ((a = t()), e.data.set(t, a)), a);
      },
      cacheSignal: function () {
        return se(Kt).controller.signal;
      },
    },
    a0 = typeof WeakMap == "function" ? WeakMap : Map,
    Et = 0,
    Ct = null,
    ht = null,
    pt = 0,
    Tt = 0,
    Oe = null,
    Kn = !1,
    Sl = !1,
    Mo = !1,
    xn = 0,
    Yt = 0,
    Zn = 0,
    Oa = 0,
    wo = 0,
    Ce = 0,
    _l = 0,
    Ei = null,
    Se = null,
    zo = !1,
    Zs = 0,
    kh = 0,
    Ps = 1 / 0,
    Js = null,
    Pn = null,
    Ft = 0,
    Jn = null,
    xl = null,
    En = 0,
    Oo = 0,
    Co = null,
    Xh = null,
    Ri = 0,
    jo = null;
  function je() {
    return (Et & 2) !== 0 && pt !== 0 ? pt & -pt : H.T !== null ? Ho() : rf();
  }
  function Kh() {
    if (Ce === 0)
      if ((pt & 536870912) === 0 || vt) {
        var t = as;
        ((as <<= 1), (as & 3932160) === 0 && (as = 262144), (Ce = t));
      } else Ce = 536870912;
    return ((t = we.current), t !== null && (t.flags |= 32), Ce);
  }
  function _e(t, e, a) {
    (((t === Ct && (Tt === 2 || Tt === 9)) || t.cancelPendingCommit !== null) &&
      (El(t, 0), Fn(t, pt, Ce, !1)),
      Xl(t, a),
      ((Et & 2) === 0 || t !== Ct) &&
        (t === Ct && ((Et & 2) === 0 && (Oa |= a), Yt === 4 && Fn(t, pt, Ce, !1)), We(t)));
  }
  function Zh(t, e, a) {
    if ((Et & 6) !== 0) throw Error(r(327));
    var l = (!a && (e & 127) === 0 && (e & t.expiredLanes) === 0) || kl(t, e),
      u = l ? s0(t, e) : No(t, e, !0),
      o = l;
    do {
      if (u === 0) {
        Sl && !l && Fn(t, e, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), o && !l0(a))) {
          ((u = No(t, e, !1)), (o = !1));
          continue;
        }
        if (u === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var d = 0;
          else
            ((d = t.pendingLanes & -536870913), (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            e = d;
            t: {
              var g = t;
              u = Ei;
              var R = g.current.memoizedState.isDehydrated;
              if ((R && (El(g, d).flags |= 256), (d = No(g, d, !1)), d !== 2)) {
                if (Mo && !R) {
                  ((g.errorRecoveryDisabledLanes |= o), (Oa |= o), (u = 4));
                  break t;
                }
                ((o = Se), (Se = u), o !== null && (Se === null ? (Se = o) : Se.push.apply(Se, o)));
              }
              u = d;
            }
            if (((o = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (El(t, 0), Fn(t, e, 0, !0));
          break;
        }
        t: {
          switch (((l = t), (o = u), o)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Fn(l, e, Ce, !Kn);
              break t;
            case 2:
              Se = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((u = Zs + 300 - ce()), 10 < u)) {
            if ((Fn(l, e, Ce, !Kn), is(l, 0, !0) !== 0)) break t;
            ((En = e),
              (l.timeoutHandle = Rm(
                Ph.bind(null, l, a, Se, Js, zo, e, Ce, Oa, _l, Kn, o, "Throttled", -0, 0),
                u,
              )));
            break t;
          }
          Ph(l, a, Se, Js, zo, e, Ce, Oa, _l, Kn, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    We(t);
  }
  function Ph(t, e, a, l, u, o, d, g, R, N, q, k, L, U) {
    if (((t.timeoutHandle = -1), (k = e.subtreeFlags), k & 8192 || (k & 16785408) === 16785408)) {
      ((k = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: un,
      }),
        Yh(e, o, k));
      var tt = (o & 62914560) === o ? Zs - ce() : (o & 4194048) === o ? kh - ce() : 0;
      if (((tt = Q0(k, tt)), tt !== null)) {
        ((En = o),
          (t.cancelPendingCommit = tt(nm.bind(null, t, e, o, a, l, u, d, g, R, q, k, null, L, U))),
          Fn(t, o, d, !N));
        return;
      }
    }
    nm(t, e, o, a, l, u, d, g, R);
  }
  function l0(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        e.flags & 16384 &&
        ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var u = a[l],
            o = u.getSnapshot;
          u = u.value;
          try {
            if (!Ae(o(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = e.child), e.subtreeFlags & 16384 && a !== null)) ((a.return = e), (e = a));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Fn(t, e, a, l) {
    ((e &= ~wo),
      (e &= ~Oa),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes));
    for (var u = e; 0 < u; ) {
      var o = 31 - Te(u),
        d = 1 << o;
      ((l[o] = -1), (u &= ~d));
    }
    a !== 0 && af(t, a, e);
  }
  function Fs() {
    return (Et & 6) === 0 ? (Ti(0), !1) : !0;
  }
  function Do() {
    if (ht !== null) {
      if (Tt === 0) var t = ht.return;
      else ((t = ht), (dn = _a = null), Pu(t), (hl = null), (ri = 0), (t = ht));
      for (; t !== null; ) (Th(t.alternate, t), (t = t.return));
      ht = null;
    }
  }
  function El(t, e) {
    var a = t.timeoutHandle;
    (a !== -1 && ((t.timeoutHandle = -1), R0(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      (En = 0),
      Do(),
      (Ct = t),
      (ht = a = cn(t.current, null)),
      (pt = e),
      (Tt = 0),
      (Oe = null),
      (Kn = !1),
      (Sl = kl(t, e)),
      (Mo = !1),
      (_l = Ce = wo = Oa = Zn = Yt = 0),
      (Se = Ei = null),
      (zo = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var u = 31 - Te(l),
          o = 1 << u;
        ((e |= t[u]), (l &= ~o));
      }
    return ((xn = e), vs(), a);
  }
  function Jh(t, e) {
    ((ct = null),
      (H.H = pi),
      e === dl || e === Ts
        ? ((e = fd()), (Tt = 3))
        : e === Uu
          ? ((e = fd()), (Tt = 4))
          : (Tt =
              e === co
                ? 8
                : e !== null && typeof e == "object" && typeof e.then == "function"
                  ? 6
                  : 1),
      (Oe = e),
      ht === null && ((Yt = 1), qs(t, Ue(e, t.current))));
  }
  function Fh() {
    var t = we.current;
    return t === null
      ? !0
      : (pt & 4194048) === pt
        ? Ye === null
        : (pt & 62914560) === pt || (pt & 536870912) !== 0
          ? t === Ye
          : !1;
  }
  function Ih() {
    var t = H.H;
    return ((H.H = pi), t === null ? pi : t);
  }
  function $h() {
    var t = H.A;
    return ((H.A = n0), t);
  }
  function Is() {
    ((Yt = 4),
      Kn || ((pt & 4194048) !== pt && we.current !== null) || (Sl = !0),
      ((Zn & 134217727) === 0 && (Oa & 134217727) === 0) || Ct === null || Fn(Ct, pt, Ce, !1));
  }
  function No(t, e, a) {
    var l = Et;
    Et |= 2;
    var u = Ih(),
      o = $h();
    ((Ct !== t || pt !== e) && ((Js = null), El(t, e)), (e = !1));
    var d = Yt;
    t: do
      try {
        if (Tt !== 0 && ht !== null) {
          var g = ht,
            R = Oe;
          switch (Tt) {
            case 8:
              (Do(), (d = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              we.current === null && (e = !0);
              var N = Tt;
              if (((Tt = 0), (Oe = null), Rl(t, g, R, N), a && Sl)) {
                d = 0;
                break t;
              }
              break;
            default:
              ((N = Tt), (Tt = 0), (Oe = null), Rl(t, g, R, N));
          }
        }
        (i0(), (d = Yt));
        break;
      } catch (q) {
        Jh(t, q);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (dn = _a = null),
      (Et = l),
      (H.H = u),
      (H.A = o),
      ht === null && ((Ct = null), (pt = 0), vs()),
      d
    );
  }
  function i0() {
    for (; ht !== null; ) Wh(ht);
  }
  function s0(t, e) {
    var a = Et;
    Et |= 2;
    var l = Ih(),
      u = $h();
    Ct !== t || pt !== e ? ((Js = null), (Ps = ce() + 500), El(t, e)) : (Sl = kl(t, e));
    t: do
      try {
        if (Tt !== 0 && ht !== null) {
          e = ht;
          var o = Oe;
          e: switch (Tt) {
            case 1:
              ((Tt = 0), (Oe = null), Rl(t, e, o, 1));
              break;
            case 2:
            case 9:
              if (od(o)) {
                ((Tt = 0), (Oe = null), tm(e));
                break;
              }
              ((e = function () {
                ((Tt !== 2 && Tt !== 9) || Ct !== t || (Tt = 7), We(t));
              }),
                o.then(e, e));
              break t;
            case 3:
              Tt = 7;
              break t;
            case 4:
              Tt = 5;
              break t;
            case 7:
              od(o) ? ((Tt = 0), (Oe = null), tm(e)) : ((Tt = 0), (Oe = null), Rl(t, e, o, 7));
              break;
            case 5:
              var d = null;
              switch (ht.tag) {
                case 26:
                  d = ht.memoizedState;
                case 5:
                case 27:
                  var g = ht;
                  if (d ? qm(d) : g.stateNode.complete) {
                    ((Tt = 0), (Oe = null));
                    var R = g.sibling;
                    if (R !== null) ht = R;
                    else {
                      var N = g.return;
                      N !== null ? ((ht = N), $s(N)) : (ht = null);
                    }
                    break e;
                  }
              }
              ((Tt = 0), (Oe = null), Rl(t, e, o, 5));
              break;
            case 6:
              ((Tt = 0), (Oe = null), Rl(t, e, o, 6));
              break;
            case 8:
              (Do(), (Yt = 6));
              break t;
            default:
              throw Error(r(462));
          }
        }
        r0();
        break;
      } catch (q) {
        Jh(t, q);
      }
    while (!0);
    return (
      (dn = _a = null),
      (H.H = l),
      (H.A = u),
      (Et = a),
      ht !== null ? 0 : ((Ct = null), (pt = 0), vs(), Yt)
    );
  }
  function r0() {
    for (; ht !== null && !es(); ) Wh(ht);
  }
  function Wh(t) {
    var e = Eh(t.alternate, t, xn);
    ((t.memoizedProps = t.pendingProps), e === null ? $s(t) : (ht = e));
  }
  function tm(t) {
    var e = t,
      a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = vh(a, e, e.pendingProps, e.type, void 0, pt);
        break;
      case 11:
        e = vh(a, e, e.pendingProps, e.type.render, e.ref, pt);
        break;
      case 5:
        Pu(e);
      default:
        (Th(a, e), (e = ht = $f(e, xn)), (e = Eh(a, e, xn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? $s(t) : (ht = e));
  }
  function Rl(t, e, a, l) {
    ((dn = _a = null), Pu(e), (hl = null), (ri = 0));
    var u = e.return;
    try {
      if (Jg(t, u, e, a, pt)) {
        ((Yt = 1), qs(t, Ue(a, t.current)), (ht = null));
        return;
      }
    } catch (o) {
      if (u !== null) throw ((ht = u), o);
      ((Yt = 1), qs(t, Ue(a, t.current)), (ht = null));
      return;
    }
    e.flags & 32768
      ? (vt || l === 1
          ? (t = !0)
          : Sl || (pt & 536870912) !== 0
            ? (t = !1)
            : ((Kn = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = we.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        em(e, t))
      : $s(e);
  }
  function $s(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        em(e, Kn);
        return;
      }
      t = e.return;
      var a = $g(e.alternate, e, xn);
      if (a !== null) {
        ht = a;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ht = e;
        return;
      }
      ht = e = t;
    } while (e !== null);
    Yt === 0 && (Yt = 5);
  }
  function em(t, e) {
    do {
      var a = Wg(t.alternate, t);
      if (a !== null) {
        ((a.flags &= 32767), (ht = a));
        return;
      }
      if (
        ((a = t.return),
        a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ht = t;
        return;
      }
      ht = t = a;
    } while (t !== null);
    ((Yt = 6), (ht = null));
  }
  function nm(t, e, a, l, u, o, d, g, R) {
    t.cancelPendingCommit = null;
    do Ws();
    while (Ft !== 0);
    if ((Et & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((o = e.lanes | e.childLanes),
        (o |= _u),
        Yv(t, a, o, d, g, R),
        t === Ct && ((ht = Ct = null), (pt = 0)),
        (xl = e),
        (Jn = t),
        (En = a),
        (Oo = o),
        (Co = u),
        (Xh = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            f0(Xa, function () {
              return (rm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = H.T), (H.T = null), (u = P.p), (P.p = 2), (d = Et), (Et |= 4));
        try {
          t0(t, e, a);
        } finally {
          ((Et = d), (P.p = u), (H.T = l));
        }
      }
      ((Ft = 1), am(), lm(), im());
    }
  }
  function am() {
    if (Ft === 1) {
      Ft = 0;
      var t = Jn,
        e = xl,
        a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        ((a = H.T), (H.T = null));
        var l = P.p;
        P.p = 2;
        var u = Et;
        Et |= 4;
        try {
          Bh(e, t);
          var o = Ko,
            d = Vf(t.containerInfo),
            g = o.focusedElem,
            R = o.selectionRange;
          if (d !== g && g && g.ownerDocument && Qf(g.ownerDocument.documentElement, g)) {
            if (R !== null && yu(g)) {
              var N = R.start,
                q = R.end;
              if ((q === void 0 && (q = N), "selectionStart" in g))
                ((g.selectionStart = N), (g.selectionEnd = Math.min(q, g.value.length)));
              else {
                var k = g.ownerDocument || document,
                  L = (k && k.defaultView) || window;
                if (L.getSelection) {
                  var U = L.getSelection(),
                    tt = g.textContent.length,
                    rt = Math.min(R.start, tt),
                    zt = R.end === void 0 ? rt : Math.min(R.end, tt);
                  !U.extend && rt > zt && ((d = zt), (zt = rt), (rt = d));
                  var C = Gf(g, rt),
                    M = Gf(g, zt);
                  if (
                    C &&
                    M &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== C.node ||
                      U.anchorOffset !== C.offset ||
                      U.focusNode !== M.node ||
                      U.focusOffset !== M.offset)
                  ) {
                    var D = k.createRange();
                    (D.setStart(C.node, C.offset),
                      U.removeAllRanges(),
                      rt > zt
                        ? (U.addRange(D), U.extend(M.node, M.offset))
                        : (D.setEnd(M.node, M.offset), U.addRange(D)));
                  }
                }
              }
            }
            for (k = [], U = g; (U = U.parentNode); )
              U.nodeType === 1 && k.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < k.length; g++) {
              var Q = k[g];
              ((Q.element.scrollLeft = Q.left), (Q.element.scrollTop = Q.top));
            }
          }
          ((fr = !!Xo), (Ko = Xo = null));
        } finally {
          ((Et = u), (P.p = l), (H.T = a));
        }
      }
      ((t.current = e), (Ft = 2));
    }
  }
  function lm() {
    if (Ft === 2) {
      Ft = 0;
      var t = Jn,
        e = xl,
        a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        ((a = H.T), (H.T = null));
        var l = P.p;
        P.p = 2;
        var u = Et;
        Et |= 4;
        try {
          jh(t, e.alternate, e);
        } finally {
          ((Et = u), (P.p = l), (H.T = a));
        }
      }
      Ft = 3;
    }
  }
  function im() {
    if (Ft === 4 || Ft === 3) {
      ((Ft = 0), Pr());
      var t = Jn,
        e = xl,
        a = En,
        l = Xh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Ft = 5)
        : ((Ft = 0), (xl = Jn = null), sm(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (Pn = null),
        Ir(a),
        (e = e.stateNode),
        Re && typeof Re.onCommitFiberRoot == "function")
      )
        try {
          Re.onCommitFiberRoot(Vl, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = H.T), (u = P.p), (P.p = 2), (H.T = null));
        try {
          for (var o = t.onRecoverableError, d = 0; d < l.length; d++) {
            var g = l[d];
            o(g.value, { componentStack: g.stack });
          }
        } finally {
          ((H.T = e), (P.p = u));
        }
      }
      ((En & 3) !== 0 && Ws(),
        We(t),
        (u = t.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0 ? (t === jo ? Ri++ : ((Ri = 0), (jo = t))) : (Ri = 0),
        Ti(0));
    }
  }
  function sm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), ii(e)));
  }
  function Ws() {
    return (am(), lm(), im(), rm());
  }
  function rm() {
    if (Ft !== 5) return !1;
    var t = Jn,
      e = Oo;
    Oo = 0;
    var a = Ir(En),
      l = H.T,
      u = P.p;
    try {
      ((P.p = 32 > a ? 32 : a), (H.T = null), (a = Co), (Co = null));
      var o = Jn,
        d = En;
      if (((Ft = 0), (xl = Jn = null), (En = 0), (Et & 6) !== 0)) throw Error(r(331));
      var g = Et;
      if (
        ((Et |= 4),
        Qh(o.current),
        qh(o, o.current, d, a),
        (Et = g),
        Ti(0, !1),
        Re && typeof Re.onPostCommitFiberRoot == "function")
      )
        try {
          Re.onPostCommitFiberRoot(Vl, o);
        } catch {}
      return !0;
    } finally {
      ((P.p = u), (H.T = l), sm(t, e));
    }
  }
  function um(t, e, a) {
    ((e = Ue(a, e)),
      (e = oo(t.stateNode, e, 2)),
      (t = Qn(t, e, 2)),
      t !== null && (Xl(t, 2), We(t)));
  }
  function At(t, e, a) {
    if (t.tag === 3) um(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          um(e, t, a);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" && (Pn === null || !Pn.has(l)))
          ) {
            ((t = Ue(a, t)),
              (a = oh(2)),
              (l = Qn(e, a, 2)),
              l !== null && (ch(a, l, e, t), Xl(l, 2), We(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Lo(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new a0();
      var u = new Set();
      l.set(e, u);
    } else ((u = l.get(e)), u === void 0 && ((u = new Set()), l.set(e, u)));
    u.has(a) || ((Mo = !0), u.add(a), (t = u0.bind(null, t, e, a)), e.then(t, t));
  }
  function u0(t, e, a) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      Ct === t &&
        (pt & a) === a &&
        (Yt === 4 || (Yt === 3 && (pt & 62914560) === pt && 300 > ce() - Zs)
          ? (Et & 2) === 0 && El(t, 0)
          : (wo |= a),
        _l === pt && (_l = 0)),
      We(t));
  }
  function om(t, e) {
    (e === 0 && (e = nf()), (t = ga(t, e)), t !== null && (Xl(t, e), We(t)));
  }
  function o0(t) {
    var e = t.memoizedState,
      a = 0;
    (e !== null && (a = e.retryLane), om(t, a));
  }
  function c0(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode,
          u = t.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (l !== null && l.delete(e), om(t, a));
  }
  function f0(t, e) {
    return Ve(t, e);
  }
  var tr = null,
    Tl = null,
    Uo = !1,
    er = !1,
    Bo = !1,
    In = 0;
  function We(t) {
    (t !== Tl && t.next === null && (Tl === null ? (tr = Tl = t) : (Tl = Tl.next = t)),
      (er = !0),
      Uo || ((Uo = !0), h0()));
  }
  function Ti(t, e) {
    if (!Bo && er) {
      Bo = !0;
      do
        for (var a = !1, l = tr; l !== null; ) {
          if (t !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var o = 0;
            else {
              var d = l.suspendedLanes,
                g = l.pingedLanes;
              ((o = (1 << (31 - Te(42 | t) + 1)) - 1),
                (o &= u & ~(d & ~g)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((a = !0), hm(l, o));
          } else
            ((o = pt),
              (o = is(
                l,
                l === Ct ? o : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || kl(l, o) || ((a = !0), hm(l, o)));
          l = l.next;
        }
      while (a);
      Bo = !1;
    }
  }
  function d0() {
    cm();
  }
  function cm() {
    er = Uo = !1;
    var t = 0;
    In !== 0 && E0() && (t = In);
    for (var e = ce(), a = null, l = tr; l !== null; ) {
      var u = l.next,
        o = fm(l, e);
      (o === 0
        ? ((l.next = null), a === null ? (tr = u) : (a.next = u), u === null && (Tl = a))
        : ((a = l), (t !== 0 || (o & 3) !== 0) && (er = !0)),
        (l = u));
    }
    ((Ft !== 0 && Ft !== 5) || Ti(t), In !== 0 && (In = 0));
  }
  function fm(t, e) {
    for (
      var a = t.suspendedLanes,
        l = t.pingedLanes,
        u = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;
    ) {
      var d = 31 - Te(o),
        g = 1 << d,
        R = u[d];
      (R === -1
        ? ((g & a) === 0 || (g & l) !== 0) && (u[d] = qv(g, e))
        : R <= e && (t.expiredLanes |= g),
        (o &= ~g));
    }
    if (
      ((e = Ct),
      (a = pt),
      (a = is(t, t === e ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (l = t.callbackNode),
      a === 0 || (t === e && (Tt === 2 || Tt === 9)) || t.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && Ql(l), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((a & 3) === 0 || kl(t, a)) {
      if (((e = a & -a), e === t.callbackPriority)) return e;
      switch ((l !== null && Ql(l), Ir(a))) {
        case 2:
        case 8:
          a = Je;
          break;
        case 32:
          a = Xa;
          break;
        case 268435456:
          a = ef;
          break;
        default:
          a = Xa;
      }
      return (
        (l = dm.bind(null, t)),
        (a = Ve(a, l)),
        (t.callbackPriority = e),
        (t.callbackNode = a),
        e
      );
    }
    return (
      l !== null && l !== null && Ql(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function dm(t, e) {
    if (Ft !== 0 && Ft !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var a = t.callbackNode;
    if (Ws() && t.callbackNode !== a) return null;
    var l = pt;
    return (
      (l = is(t, t === Ct ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      l === 0
        ? null
        : (Zh(t, l, e),
          fm(t, ce()),
          t.callbackNode != null && t.callbackNode === a ? dm.bind(null, t) : null)
    );
  }
  function hm(t, e) {
    if (Ws()) return null;
    Zh(t, e, !0);
  }
  function h0() {
    T0(function () {
      (Et & 6) !== 0 ? Ve(ae, d0) : cm();
    });
  }
  function Ho() {
    if (In === 0) {
      var t = cl;
      (t === 0 && ((t = ns), (ns <<= 1), (ns & 261888) === 0 && (ns = 256)), (In = t));
    }
    return In;
  }
  function mm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : os("" + t);
  }
  function pm(t, e) {
    var a = e.ownerDocument.createElement("input");
    return (
      (a.name = e.name),
      (a.value = e.value),
      t.id && a.setAttribute("form", t.id),
      e.parentNode.insertBefore(a, e),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function m0(t, e, a, l, u) {
    if (e === "submit" && a && a.stateNode === u) {
      var o = mm((u[pe] || null).action),
        d = l.submitter;
      d &&
        ((e = (e = d[pe] || null) ? mm(e.formAction) : d.getAttribute("formAction")),
        e !== null && ((o = e), (d = null)));
      var g = new hs("action", "action", null, l, u);
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (In !== 0) {
                  var R = d ? pm(u, d) : new FormData(u);
                  ao(a, { pending: !0, data: R, method: u.method, action: o }, null, R);
                }
              } else
                typeof o == "function" &&
                  (g.preventDefault(),
                  (R = d ? pm(u, d) : new FormData(u)),
                  ao(a, { pending: !0, data: R, method: u.method, action: o }, o, R));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var qo = 0; qo < Su.length; qo++) {
    var Yo = Su[qo],
      p0 = Yo.toLowerCase(),
      y0 = Yo[0].toUpperCase() + Yo.slice(1);
    ke(p0, "on" + y0);
  }
  (ke(Kf, "onAnimationEnd"),
    ke(Zf, "onAnimationIteration"),
    ke(Pf, "onAnimationStart"),
    ke("dblclick", "onDoubleClick"),
    ke("focusin", "onFocus"),
    ke("focusout", "onBlur"),
    ke(jg, "onTransitionRun"),
    ke(Dg, "onTransitionStart"),
    ke(Ng, "onTransitionCancel"),
    ke(Jf, "onTransitionEnd"),
    Fa("onMouseEnter", ["mouseout", "mouseover"]),
    Fa("onMouseLeave", ["mouseout", "mouseover"]),
    Fa("onPointerEnter", ["pointerout", "pointerover"]),
    Fa("onPointerLeave", ["pointerout", "pointerover"]),
    ma("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    ma(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ma("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ma("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    ma(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ma(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ai =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    v0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ai),
    );
  function ym(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a],
        u = l.event;
      l = l.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var d = l.length - 1; 0 <= d; d--) {
            var g = l[d],
              R = g.instance,
              N = g.currentTarget;
            if (((g = g.listener), R !== o && u.isPropagationStopped())) break t;
            ((o = g), (u.currentTarget = N));
            try {
              o(u);
            } catch (q) {
              ys(q);
            }
            ((u.currentTarget = null), (o = R));
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((g = l[d]),
              (R = g.instance),
              (N = g.currentTarget),
              (g = g.listener),
              R !== o && u.isPropagationStopped())
            )
              break t;
            ((o = g), (u.currentTarget = N));
            try {
              o(u);
            } catch (q) {
              ys(q);
            }
            ((u.currentTarget = null), (o = R));
          }
      }
    }
  }
  function mt(t, e) {
    var a = e[$r];
    a === void 0 && (a = e[$r] = new Set());
    var l = t + "__bubble";
    a.has(l) || (vm(e, t, 2, !1), a.add(l));
  }
  function Go(t, e, a) {
    var l = 0;
    (e && (l |= 4), vm(a, t, l, e));
  }
  var nr = "_reactListening" + Math.random().toString(36).slice(2);
  function Qo(t) {
    if (!t[nr]) {
      ((t[nr] = !0),
        cf.forEach(function (a) {
          a !== "selectionchange" && (v0.has(a) || Go(a, !1, t), Go(a, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[nr] || ((e[nr] = !0), Go("selectionchange", !1, e));
    }
  }
  function vm(t, e, a, l) {
    switch (Km(e)) {
      case 2:
        var u = X0;
        break;
      case 8:
        u = K0;
        break;
      default:
        u = ac;
    }
    ((a = u.bind(null, e, a, t)),
      (u = void 0),
      !ru || (e !== "touchstart" && e !== "touchmove" && e !== "wheel") || (u = !0),
      l
        ? u !== void 0
          ? t.addEventListener(e, a, { capture: !0, passive: u })
          : t.addEventListener(e, a, !0)
        : u !== void 0
          ? t.addEventListener(e, a, { passive: u })
          : t.addEventListener(e, a, !1));
  }
  function Vo(t, e, a, l, u) {
    var o = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var g = l.stateNode.containerInfo;
          if (g === u) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var R = d.tag;
              if ((R === 3 || R === 4) && d.stateNode.containerInfo === u) return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (((d = Za(g)), d === null)) return;
            if (((R = d.tag), R === 5 || R === 6 || R === 26 || R === 27)) {
              l = o = d;
              continue t;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
    xf(function () {
      var N = o,
        q = iu(a),
        k = [];
      t: {
        var L = Ff.get(t);
        if (L !== void 0) {
          var U = hs,
            tt = t;
          switch (t) {
            case "keypress":
              if (fs(a) === 0) break t;
            case "keydown":
            case "keyup":
              U = cg;
              break;
            case "focusin":
              ((tt = "focus"), (U = fu));
              break;
            case "focusout":
              ((tt = "blur"), (U = fu));
              break;
            case "beforeblur":
            case "afterblur":
              U = fu;
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
              U = Tf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = $v;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = hg;
              break;
            case Kf:
            case Zf:
            case Pf:
              U = eg;
              break;
            case Jf:
              U = pg;
              break;
            case "scroll":
            case "scrollend":
              U = Fv;
              break;
            case "wheel":
              U = vg;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = ag;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Mf;
              break;
            case "toggle":
            case "beforetoggle":
              U = bg;
          }
          var rt = (e & 4) !== 0,
            zt = !rt && (t === "scroll" || t === "scrollend"),
            C = rt ? (L !== null ? L + "Capture" : null) : L;
          rt = [];
          for (var M = N, D; M !== null; ) {
            var Q = M;
            if (
              ((D = Q.stateNode),
              (Q = Q.tag),
              (Q !== 5 && Q !== 26 && Q !== 27) ||
                D === null ||
                C === null ||
                ((Q = Pl(M, C)), Q != null && rt.push(Mi(M, Q, D))),
              zt)
            )
              break;
            M = M.return;
          }
          0 < rt.length && ((L = new U(L, tt, null, a, q)), k.push({ event: L, listeners: rt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((L = t === "mouseover" || t === "pointerover"),
            (U = t === "mouseout" || t === "pointerout"),
            L && a !== lu && (tt = a.relatedTarget || a.fromElement) && (Za(tt) || tt[Ka]))
          )
            break t;
          if (
            (U || L) &&
            ((L =
              q.window === q
                ? q
                : (L = q.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            U
              ? ((tt = a.relatedTarget || a.toElement),
                (U = N),
                (tt = tt ? Za(tt) : null),
                tt !== null &&
                  ((zt = f(tt)), (rt = tt.tag), tt !== zt || (rt !== 5 && rt !== 27 && rt !== 6)) &&
                  (tt = null))
              : ((U = null), (tt = N)),
            U !== tt)
          ) {
            if (
              ((rt = Tf),
              (Q = "onMouseLeave"),
              (C = "onMouseEnter"),
              (M = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((rt = Mf), (Q = "onPointerLeave"), (C = "onPointerEnter"), (M = "pointer")),
              (zt = U == null ? L : Zl(U)),
              (D = tt == null ? L : Zl(tt)),
              (L = new rt(Q, M + "leave", U, a, q)),
              (L.target = zt),
              (L.relatedTarget = D),
              (Q = null),
              Za(q) === N &&
                ((rt = new rt(C, M + "enter", tt, a, q)),
                (rt.target = D),
                (rt.relatedTarget = zt),
                (Q = rt)),
              (zt = Q),
              U && tt)
            )
              e: {
                for (rt = g0, C = U, M = tt, D = 0, Q = C; Q; Q = rt(Q)) D++;
                Q = 0;
                for (var at = M; at; at = rt(at)) Q++;
                for (; 0 < D - Q; ) ((C = rt(C)), D--);
                for (; 0 < Q - D; ) ((M = rt(M)), Q--);
                for (; D--; ) {
                  if (C === M || (M !== null && C === M.alternate)) {
                    rt = C;
                    break e;
                  }
                  ((C = rt(C)), (M = rt(M)));
                }
                rt = null;
              }
            else rt = null;
            (U !== null && gm(k, L, U, rt, !1),
              tt !== null && zt !== null && gm(k, zt, tt, rt, !0));
          }
        }
        t: {
          if (
            ((L = N ? Zl(N) : window),
            (U = L.nodeName && L.nodeName.toLowerCase()),
            U === "select" || (U === "input" && L.type === "file"))
          )
            var bt = Lf;
          else if (Df(L))
            if (Uf) bt = zg;
            else {
              bt = Mg;
              var et = Ag;
            }
          else
            ((U = L.nodeName),
              !U || U.toLowerCase() !== "input" || (L.type !== "checkbox" && L.type !== "radio")
                ? N && au(N.elementType) && (bt = Lf)
                : (bt = wg));
          if (bt && (bt = bt(t, N))) {
            Nf(k, bt, a, q);
            break t;
          }
          (et && et(t, L, N),
            t === "focusout" &&
              N &&
              L.type === "number" &&
              N.memoizedProps.value != null &&
              nu(L, "number", L.value));
        }
        switch (((et = N ? Zl(N) : window), t)) {
          case "focusin":
            (Df(et) || et.contentEditable === "true") && ((nl = et), (vu = N), (ni = null));
            break;
          case "focusout":
            ni = vu = nl = null;
            break;
          case "mousedown":
            gu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((gu = !1), kf(k, a, q));
            break;
          case "selectionchange":
            if (Cg) break;
          case "keydown":
          case "keyup":
            kf(k, a, q);
        }
        var ft;
        if (hu)
          t: {
            switch (t) {
              case "compositionstart":
                var yt = "onCompositionStart";
                break t;
              case "compositionend":
                yt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                yt = "onCompositionUpdate";
                break t;
            }
            yt = void 0;
          }
        else
          el
            ? Cf(t, a) && (yt = "onCompositionEnd")
            : t === "keydown" && a.keyCode === 229 && (yt = "onCompositionStart");
        (yt &&
          (wf &&
            a.locale !== "ko" &&
            (el || yt !== "onCompositionStart"
              ? yt === "onCompositionEnd" && el && (ft = Ef())
              : ((Ln = q), (uu = "value" in Ln ? Ln.value : Ln.textContent), (el = !0))),
          (et = ar(N, yt)),
          0 < et.length &&
            ((yt = new Af(yt, t, null, a, q)),
            k.push({ event: yt, listeners: et }),
            ft ? (yt.data = ft) : ((ft = jf(a)), ft !== null && (yt.data = ft)))),
          (ft = _g ? xg(t, a) : Eg(t, a)) &&
            ((yt = ar(N, "onBeforeInput")),
            0 < yt.length &&
              ((et = new Af("onBeforeInput", "beforeinput", null, a, q)),
              k.push({ event: et, listeners: yt }),
              (et.data = ft))),
          m0(k, t, N, a, q));
      }
      ym(k, e);
    });
  }
  function Mi(t, e, a) {
    return { instance: t, listener: e, currentTarget: a };
  }
  function ar(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var u = t,
        o = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          o === null ||
          ((u = Pl(t, a)),
          u != null && l.unshift(Mi(t, u, o)),
          (u = Pl(t, e)),
          u != null && l.push(Mi(t, u, o))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function g0(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function gm(t, e, a, l, u) {
    for (var o = e._reactName, d = []; a !== null && a !== l; ) {
      var g = a,
        R = g.alternate,
        N = g.stateNode;
      if (((g = g.tag), R !== null && R === l)) break;
      ((g !== 5 && g !== 26 && g !== 27) ||
        N === null ||
        ((R = N),
        u
          ? ((N = Pl(a, o)), N != null && d.unshift(Mi(a, N, R)))
          : u || ((N = Pl(a, o)), N != null && d.push(Mi(a, N, R)))),
        (a = a.return));
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var b0 = /\r\n?/g,
    S0 = /\u0000|\uFFFD/g;
  function bm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        b0,
        `
`,
      )
      .replace(S0, "");
  }
  function Sm(t, e) {
    return ((e = bm(e)), bm(t) === e);
  }
  function wt(t, e, a, l, u, o) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || $a(t, l)
          : (typeof l == "number" || typeof l == "bigint") && e !== "body" && $a(t, "" + l);
        break;
      case "className":
        rs(t, "class", l);
        break;
      case "tabIndex":
        rs(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        rs(t, a, l);
        break;
      case "style":
        Sf(t, l, o);
        break;
      case "data":
        if (e !== "object") {
          rs(t, "data", l);
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
        ((l = os("" + l)), t.setAttribute(a, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == "function" &&
            (a === "formAction"
              ? (e !== "input" && wt(t, e, "name", u.name, u, null),
                wt(t, e, "formEncType", u.formEncType, u, null),
                wt(t, e, "formMethod", u.formMethod, u, null),
                wt(t, e, "formTarget", u.formTarget, u, null))
              : (wt(t, e, "encType", u.encType, u, null),
                wt(t, e, "method", u.method, u, null),
                wt(t, e, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        ((l = os("" + l)), t.setAttribute(a, l));
        break;
      case "onClick":
        l != null && (t.onclick = un);
        break;
      case "onScroll":
        l != null && mt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && mt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((a = l.__html), a != null)) {
            if (u.children != null) throw Error(r(60));
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
        ((a = os("" + l)), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(a, "" + l)
          : t.removeAttribute(a);
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
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(a, "")
          : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol"
            ? t.setAttribute(a, l)
            : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l
          ? t.setAttribute(a, l)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(a)
          : t.setAttribute(a, l);
        break;
      case "popover":
        (mt("beforetoggle", t), mt("toggle", t), ss(t, "popover", l));
        break;
      case "xlinkActuate":
        rn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        rn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        rn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        rn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        rn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        rn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        rn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        rn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        rn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        ss(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || (a[0] !== "o" && a[0] !== "O") || (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Pv.get(a) || a), ss(t, a, l));
    }
  }
  function ko(t, e, a, l, u, o) {
    switch (a) {
      case "style":
        Sf(t, l, o);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((a = l.__html), a != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? $a(t, l)
          : (typeof l == "number" || typeof l == "bigint") && $a(t, "" + l);
        break;
      case "onScroll":
        l != null && mt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && mt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = un);
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
        if (!ff.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (e = a.slice(2, u ? a.length - 7 : void 0)),
              (o = t[pe] || null),
              (o = o != null ? o[a] : null),
              typeof o == "function" && t.removeEventListener(e, o, u),
              typeof l == "function")
            ) {
              (typeof o != "function" &&
                o !== null &&
                (a in t ? (t[a] = null) : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(e, l, u));
              break t;
            }
            a in t ? (t[a] = l) : l === !0 ? t.setAttribute(a, "") : ss(t, a, l);
          }
    }
  }
  function ue(t, e, a) {
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
        (mt("error", t), mt("load", t));
        var l = !1,
          u = !1,
          o;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var d = a[o];
            if (d != null)
              switch (o) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  wt(t, e, o, d, a, null);
              }
          }
        (u && wt(t, e, "srcSet", a.srcSet, a, null), l && wt(t, e, "src", a.src, a, null));
        return;
      case "input":
        mt("invalid", t);
        var g = (o = d = u = null),
          R = null,
          N = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var q = a[l];
            if (q != null)
              switch (l) {
                case "name":
                  u = q;
                  break;
                case "type":
                  d = q;
                  break;
                case "checked":
                  R = q;
                  break;
                case "defaultChecked":
                  N = q;
                  break;
                case "value":
                  o = q;
                  break;
                case "defaultValue":
                  g = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null) throw Error(r(137, e));
                  break;
                default:
                  wt(t, e, l, q, a, null);
              }
          }
        yf(t, o, g, R, N, d, u, !1);
        return;
      case "select":
        (mt("invalid", t), (l = d = o = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((g = a[u]), g != null))
            switch (u) {
              case "value":
                o = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                l = g;
              default:
                wt(t, e, u, g, a, null);
            }
        ((e = o),
          (a = d),
          (t.multiple = !!l),
          e != null ? Ia(t, !!l, e, !1) : a != null && Ia(t, !!l, a, !0));
        return;
      case "textarea":
        (mt("invalid", t), (o = u = l = null));
        for (d in a)
          if (a.hasOwnProperty(d) && ((g = a[d]), g != null))
            switch (d) {
              case "value":
                l = g;
                break;
              case "defaultValue":
                u = g;
                break;
              case "children":
                o = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(91));
                break;
              default:
                wt(t, e, d, g, a, null);
            }
        gf(t, l, u, o);
        return;
      case "option":
        for (R in a)
          a.hasOwnProperty(R) &&
            ((l = a[R]), l != null) &&
            (R === "selected"
              ? (t.selected = l && typeof l != "function" && typeof l != "symbol")
              : wt(t, e, R, l, a, null));
        return;
      case "dialog":
        (mt("beforetoggle", t), mt("toggle", t), mt("cancel", t), mt("close", t));
        break;
      case "iframe":
      case "object":
        mt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ai.length; l++) mt(Ai[l], t);
        break;
      case "image":
        (mt("error", t), mt("load", t));
        break;
      case "details":
        mt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (mt("error", t), mt("load", t));
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
        for (N in a)
          if (a.hasOwnProperty(N) && ((l = a[N]), l != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                wt(t, e, N, l, a, null);
            }
        return;
      default:
        if (au(e)) {
          for (q in a)
            a.hasOwnProperty(q) && ((l = a[q]), l !== void 0 && ko(t, e, q, l, a, void 0));
          return;
        }
    }
    for (g in a) a.hasOwnProperty(g) && ((l = a[g]), l != null && wt(t, e, g, l, a, null));
  }
  function _0(t, e, a, l) {
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
        var u = null,
          o = null,
          d = null,
          g = null,
          R = null,
          N = null,
          q = null;
        for (U in a) {
          var k = a[U];
          if (a.hasOwnProperty(U) && k != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = k;
              default:
                l.hasOwnProperty(U) || wt(t, e, U, null, l, k);
            }
        }
        for (var L in l) {
          var U = l[L];
          if (((k = a[L]), l.hasOwnProperty(L) && (U != null || k != null)))
            switch (L) {
              case "type":
                o = U;
                break;
              case "name":
                u = U;
                break;
              case "checked":
                N = U;
                break;
              case "defaultChecked":
                q = U;
                break;
              case "value":
                d = U;
                break;
              case "defaultValue":
                g = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(r(137, e));
                break;
              default:
                U !== k && wt(t, e, L, U, l, k);
            }
        }
        eu(t, d, g, R, N, q, o, u);
        return;
      case "select":
        U = d = g = L = null;
        for (o in a)
          if (((R = a[o]), a.hasOwnProperty(o) && R != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                U = R;
              default:
                l.hasOwnProperty(o) || wt(t, e, o, null, l, R);
            }
        for (u in l)
          if (((o = l[u]), (R = a[u]), l.hasOwnProperty(u) && (o != null || R != null)))
            switch (u) {
              case "value":
                L = o;
                break;
              case "defaultValue":
                g = o;
                break;
              case "multiple":
                d = o;
              default:
                o !== R && wt(t, e, u, o, l, R);
            }
        ((e = g),
          (a = d),
          (l = U),
          L != null
            ? Ia(t, !!a, L, !1)
            : !!l != !!a && (e != null ? Ia(t, !!a, e, !0) : Ia(t, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        U = L = null;
        for (g in a)
          if (((u = a[g]), a.hasOwnProperty(g) && u != null && !l.hasOwnProperty(g)))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                wt(t, e, g, null, l, u);
            }
        for (d in l)
          if (((u = l[d]), (o = a[d]), l.hasOwnProperty(d) && (u != null || o != null)))
            switch (d) {
              case "value":
                L = u;
                break;
              case "defaultValue":
                U = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== o && wt(t, e, d, u, l, o);
            }
        vf(t, L, U);
        return;
      case "option":
        for (var tt in a)
          ((L = a[tt]),
            a.hasOwnProperty(tt) &&
              L != null &&
              !l.hasOwnProperty(tt) &&
              (tt === "selected" ? (t.selected = !1) : wt(t, e, tt, null, l, L)));
        for (R in l)
          ((L = l[R]),
            (U = a[R]),
            l.hasOwnProperty(R) &&
              L !== U &&
              (L != null || U != null) &&
              (R === "selected"
                ? (t.selected = L && typeof L != "function" && typeof L != "symbol")
                : wt(t, e, R, L, l, U)));
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
        for (var rt in a)
          ((L = a[rt]),
            a.hasOwnProperty(rt) && L != null && !l.hasOwnProperty(rt) && wt(t, e, rt, null, l, L));
        for (N in l)
          if (((L = l[N]), (U = a[N]), l.hasOwnProperty(N) && L !== U && (L != null || U != null)))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(r(137, e));
                break;
              default:
                wt(t, e, N, L, l, U);
            }
        return;
      default:
        if (au(e)) {
          for (var zt in a)
            ((L = a[zt]),
              a.hasOwnProperty(zt) &&
                L !== void 0 &&
                !l.hasOwnProperty(zt) &&
                ko(t, e, zt, void 0, l, L));
          for (q in l)
            ((L = l[q]),
              (U = a[q]),
              !l.hasOwnProperty(q) ||
                L === U ||
                (L === void 0 && U === void 0) ||
                ko(t, e, q, L, l, U));
          return;
        }
    }
    for (var C in a)
      ((L = a[C]),
        a.hasOwnProperty(C) && L != null && !l.hasOwnProperty(C) && wt(t, e, C, null, l, L));
    for (k in l)
      ((L = l[k]),
        (U = a[k]),
        !l.hasOwnProperty(k) || L === U || (L == null && U == null) || wt(t, e, k, L, l, U));
  }
  function _m(t) {
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
  function x0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0;
        l < a.length;
        l++
      ) {
        var u = a[l],
          o = u.transferSize,
          d = u.initiatorType,
          g = u.duration;
        if (o && g && _m(d)) {
          for (d = 0, g = u.responseEnd, l += 1; l < a.length; l++) {
            var R = a[l],
              N = R.startTime;
            if (N > g) break;
            var q = R.transferSize,
              k = R.initiatorType;
            q && _m(k) && ((R = R.responseEnd), (d += q * (R < g ? 1 : (g - N) / (R - N))));
          }
          if ((--l, (e += (8 * (o + d)) / (u.duration / 1e3)), t++, 10 < t)) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Xo = null,
    Ko = null;
  function lr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function xm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Em(t, e) {
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
  function Zo(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Po = null;
  function E0() {
    var t = window.event;
    return t && t.type === "popstate" ? (t === Po ? !1 : ((Po = t), !0)) : ((Po = null), !1);
  }
  var Rm = typeof setTimeout == "function" ? setTimeout : void 0,
    R0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Tm = typeof Promise == "function" ? Promise : void 0,
    T0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Tm < "u"
          ? function (t) {
              return Tm.resolve(null).then(t).catch(A0);
            }
          : Rm;
  function A0(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function $n(t) {
    return t === "head";
  }
  function Am(t, e) {
    var a = e,
      l = 0;
    do {
      var u = a.nextSibling;
      if ((t.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (l === 0) {
            (t.removeChild(u), zl(e));
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") l++;
        else if (a === "html") wi(t.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = t.ownerDocument.head), wi(a));
          for (var o = a.firstChild; o; ) {
            var d = o.nextSibling,
              g = o.nodeName;
            (o[Kl] ||
              g === "SCRIPT" ||
              g === "STYLE" ||
              (g === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(o),
              (o = d));
          }
        } else a === "body" && wi(t.ownerDocument.body);
      a = u;
    } while (a);
    zl(e);
  }
  function Mm(t, e) {
    var a = t;
    t = 0;
    do {
      var l = a.nextSibling;
      if (
        (a.nodeType === 1
          ? e
            ? ((a._stashedDisplay = a.style.display), (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (e
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((a = l.data), a === "/$")) {
          if (t === 0) break;
          t--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || t++;
      a = l;
    } while (a);
  }
  function Jo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (((e = e.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Jo(a), Wr(a));
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
  function M0(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var u = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[Kl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== u.rel ||
                t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = Ge(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function w0(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a) ||
        ((t = Ge(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function wm(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e) ||
        ((t = Ge(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Fo(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Io(t) {
    return t.data === "$!" || (t.data === "$?" && t.ownerDocument.readyState !== "loading");
  }
  function z0(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading") e();
    else {
      var l = function () {
        (e(), a.removeEventListener("DOMContentLoaded", l));
      };
      (a.addEventListener("DOMContentLoaded", l), (t._reactRetry = l));
    }
  }
  function Ge(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var $o = null;
  function zm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0) return Ge(t.nextSibling);
          e--;
        } else (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Om(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else (a !== "/$" && a !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Cm(t, e, a) {
    switch (((e = lr(a)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function wi(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Wr(t);
  }
  var Qe = new Map(),
    jm = new Set();
  function ir(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Rn = P.d;
  P.d = { f: O0, r: C0, D: j0, C: D0, L: N0, m: L0, X: B0, S: U0, M: H0 };
  function O0() {
    var t = Rn.f(),
      e = Fs();
    return t || e;
  }
  function C0(t) {
    var e = Pa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Jd(e) : Rn.r(t);
  }
  var Al = typeof document > "u" ? null : document;
  function Dm(t, e, a) {
    var l = Al;
    if (l && typeof e == "string" && e) {
      var u = Ne(e);
      ((u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        jm.has(u) ||
          (jm.add(u),
          (t = { rel: t, crossOrigin: a, href: e }),
          l.querySelector(u) === null &&
            ((e = l.createElement("link")), ue(e, "link", t), te(e), l.head.appendChild(e))));
    }
  }
  function j0(t) {
    (Rn.D(t), Dm("dns-prefetch", t, null));
  }
  function D0(t, e) {
    (Rn.C(t, e), Dm("preconnect", t, e));
  }
  function N0(t, e, a) {
    Rn.L(t, e, a);
    var l = Al;
    if (l && t && e) {
      var u = 'link[rel="preload"][as="' + Ne(e) + '"]';
      e === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + Ne(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" && (u += '[imagesizes="' + Ne(a.imageSizes) + '"]'))
        : (u += '[href="' + Ne(t) + '"]');
      var o = u;
      switch (e) {
        case "style":
          o = Ml(t);
          break;
        case "script":
          o = wl(t);
      }
      Qe.has(o) ||
        ((t = v(
          { rel: "preload", href: e === "image" && a && a.imageSrcSet ? void 0 : t, as: e },
          a,
        )),
        Qe.set(o, t),
        l.querySelector(u) !== null ||
          (e === "style" && l.querySelector(zi(o))) ||
          (e === "script" && l.querySelector(Oi(o))) ||
          ((e = l.createElement("link")), ue(e, "link", t), te(e), l.head.appendChild(e)));
    }
  }
  function L0(t, e) {
    Rn.m(t, e);
    var a = Al;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        u = 'link[rel="modulepreload"][as="' + Ne(l) + '"][href="' + Ne(t) + '"]',
        o = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = wl(t);
      }
      if (
        !Qe.has(o) &&
        ((t = v({ rel: "modulepreload", href: t }, e)), Qe.set(o, t), a.querySelector(u) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Oi(o))) return;
        }
        ((l = a.createElement("link")), ue(l, "link", t), te(l), a.head.appendChild(l));
      }
    }
  }
  function U0(t, e, a) {
    Rn.S(t, e, a);
    var l = Al;
    if (l && t) {
      var u = Ja(l).hoistableStyles,
        o = Ml(t);
      e = e || "default";
      var d = u.get(o);
      if (!d) {
        var g = { loading: 0, preload: null };
        if ((d = l.querySelector(zi(o)))) g.loading = 5;
        else {
          ((t = v({ rel: "stylesheet", href: t, "data-precedence": e }, a)),
            (a = Qe.get(o)) && Wo(t, a));
          var R = (d = l.createElement("link"));
          (te(R),
            ue(R, "link", t),
            (R._p = new Promise(function (N, q) {
              ((R.onload = N), (R.onerror = q));
            })),
            R.addEventListener("load", function () {
              g.loading |= 1;
            }),
            R.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            sr(d, e, l));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: g }), u.set(o, d));
      }
    }
  }
  function B0(t, e) {
    Rn.X(t, e);
    var a = Al;
    if (a && t) {
      var l = Ja(a).hoistableScripts,
        u = wl(t),
        o = l.get(u);
      o ||
        ((o = a.querySelector(Oi(u))),
        o ||
          ((t = v({ src: t, async: !0 }, e)),
          (e = Qe.get(u)) && tc(t, e),
          (o = a.createElement("script")),
          te(o),
          ue(o, "link", t),
          a.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(u, o));
    }
  }
  function H0(t, e) {
    Rn.M(t, e);
    var a = Al;
    if (a && t) {
      var l = Ja(a).hoistableScripts,
        u = wl(t),
        o = l.get(u);
      o ||
        ((o = a.querySelector(Oi(u))),
        o ||
          ((t = v({ src: t, async: !0, type: "module" }, e)),
          (e = Qe.get(u)) && tc(t, e),
          (o = a.createElement("script")),
          te(o),
          ue(o, "link", t),
          a.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(u, o));
    }
  }
  function Nm(t, e, a, l) {
    var u = (u = dt.current) ? ir(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((e = Ml(a.href)),
            (a = Ja(u).hoistableStyles),
            (l = a.get(e)),
            l || ((l = { type: "style", instance: null, count: 0, state: null }), a.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = Ml(a.href);
          var o = Ja(u).hoistableStyles,
            d = o.get(t);
          if (
            (d ||
              ((u = u.ownerDocument || u),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, d),
              (o = u.querySelector(zi(t))) && !o._p && ((d.instance = o), (d.state.loading = 5)),
              Qe.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Qe.set(t, a),
                o || q0(u, t, a, d.state))),
            e && l === null)
          )
            throw Error(r(528, ""));
          return d;
        }
        if (e && l !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = a.async),
          (a = a.src),
          typeof a == "string" && e && typeof e != "function" && typeof e != "symbol"
            ? ((e = wl(a)),
              (a = Ja(u).hoistableScripts),
              (l = a.get(e)),
              l || ((l = { type: "script", instance: null, count: 0, state: null }), a.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Ml(t) {
    return 'href="' + Ne(t) + '"';
  }
  function zi(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Lm(t) {
    return v({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function q0(t, e, a, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        ue(e, "link", a),
        te(e),
        t.head.appendChild(e));
  }
  function wl(t) {
    return '[src="' + Ne(t) + '"]';
  }
  function Oi(t) {
    return "script[async]" + t;
  }
  function Um(t, e, a) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Ne(a.href) + '"]');
          if (l) return ((e.instance = l), te(l), l);
          var u = v({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            te(l),
            ue(l, "style", u),
            sr(l, a.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          u = Ml(a.href);
          var o = t.querySelector(zi(u));
          if (o) return ((e.state.loading |= 4), (e.instance = o), te(o), o);
          ((l = Lm(a)),
            (u = Qe.get(u)) && Wo(l, u),
            (o = (t.ownerDocument || t).createElement("link")),
            te(o));
          var d = o;
          return (
            (d._p = new Promise(function (g, R) {
              ((d.onload = g), (d.onerror = R));
            })),
            ue(o, "link", l),
            (e.state.loading |= 4),
            sr(o, a.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = wl(a.src)),
            (u = t.querySelector(Oi(o)))
              ? ((e.instance = u), te(u), u)
              : ((l = a),
                (u = Qe.get(o)) && ((l = v({}, a)), tc(l, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                te(u),
                ue(u, "link", l),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), sr(l, a.precedence, t));
    return e.instance;
  }
  function sr(t, e, a) {
    for (
      var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        u = l.length ? l[l.length - 1] : null,
        o = u,
        d = 0;
      d < l.length;
      d++
    ) {
      var g = l[d];
      if (g.dataset.precedence === e) o = g;
      else if (o !== u) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(t, e.firstChild));
  }
  function Wo(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function tc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var rr = null;
  function Bm(t, e, a) {
    if (rr === null) {
      var l = new Map(),
        u = (rr = new Map());
      u.set(a, l);
    } else ((u = rr), (l = u.get(a)), l || ((l = new Map()), u.set(a, l)));
    if (l.has(t)) return l;
    for (l.set(t, null), a = a.getElementsByTagName(t), u = 0; u < a.length; u++) {
      var o = a[u];
      if (
        !(o[Kl] || o[le] || (t === "link" && o.getAttribute("rel") === "stylesheet")) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = o.getAttribute(e) || "";
        d = t + d;
        var g = l.get(d);
        g ? g.push(o) : l.set(d, [o]);
      }
    }
    return l;
  }
  function Hm(t, e, a) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(a, e === "title" ? t.querySelector("head > title") : null));
  }
  function Y0(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function qm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function G0(t, e, a, l) {
    if (
      a.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = Ml(l.href),
          o = e.querySelector(zi(u));
        if (o) {
          ((e = o._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = ur.bind(t)), e.then(t, t)),
            (a.state.loading |= 4),
            (a.instance = o),
            te(o));
          return;
        }
        ((o = e.ownerDocument || e),
          (l = Lm(l)),
          (u = Qe.get(u)) && Wo(l, u),
          (o = o.createElement("link")),
          te(o));
        var d = o;
        ((d._p = new Promise(function (g, R) {
          ((d.onload = g), (d.onerror = R));
        })),
          ue(o, "link", l),
          (a.instance = o));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(a, e),
        (e = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (t.count++,
          (a = ur.bind(t)),
          e.addEventListener("load", a),
          e.addEventListener("error", a)));
    }
  }
  var ec = 0;
  function Q0(t, e) {
    return (
      t.stylesheets && t.count === 0 && cr(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (a) {
            var l = setTimeout(function () {
              if ((t.stylesheets && cr(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                ((t.unsuspend = null), o());
              }
            }, 6e4 + e);
            0 < t.imgBytes && ec === 0 && (ec = 62500 * x0());
            var u = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 && (t.stylesheets && cr(t, t.stylesheets), t.unsuspend))
                ) {
                  var o = t.unsuspend;
                  ((t.unsuspend = null), o());
                }
              },
              (t.imgBytes > ec ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = a),
              function () {
                ((t.unsuspend = null), clearTimeout(l), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function ur() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) cr(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var or = null;
  function cr(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (or = new Map()), e.forEach(V0, t), (or = null), ur.call(t)));
  }
  function V0(t, e) {
    if (!(e.state.loading & 4)) {
      var a = or.get(t);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), or.set(t, a));
        for (
          var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0;
          o < u.length;
          o++
        ) {
          var d = u[o];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (a.set(d.dataset.precedence, d), (l = d));
        }
        l && a.set(null, l);
      }
      ((u = e.instance),
        (d = u.getAttribute("data-precedence")),
        (o = a.get(d) || l),
        o === l && a.set(null, u),
        a.set(d, u),
        this.count++,
        (l = ur.bind(this)),
        u.addEventListener("load", l),
        u.addEventListener("error", l),
        o
          ? o.parentNode.insertBefore(u, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Ci = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: lt,
    _currentValue2: lt,
    _threadCount: 0,
  };
  function k0(t, e, a, l, u, o, d, g, R) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Jr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Jr(0)),
      (this.hiddenUpdates = Jr(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = u),
      (this.onCaughtError = o),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = R),
      (this.incompleteTransitions = new Map()));
  }
  function Ym(t, e, a, l, u, o, d, g, R, N, q, k) {
    return (
      (t = new k0(t, e, a, d, R, N, q, k, g)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = Me(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = Du()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: l, isDehydrated: a, cache: e }),
      Bu(o),
      t
    );
  }
  function Gm(t) {
    return t ? ((t = il), t) : il;
  }
  function Qm(t, e, a, l, u, o) {
    ((u = Gm(u)),
      l.context === null ? (l.context = u) : (l.pendingContext = u),
      (l = Gn(e)),
      (l.payload = { element: a }),
      (o = o === void 0 ? null : o),
      o !== null && (l.callback = o),
      (a = Qn(t, l, e)),
      a !== null && (_e(a, t, e), oi(a, t, e)));
  }
  function Vm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function nc(t, e) {
    (Vm(t, e), (t = t.alternate) && Vm(t, e));
  }
  function km(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ga(t, 67108864);
      (e !== null && _e(e, t, 67108864), nc(t, 67108864));
    }
  }
  function Xm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = je();
      e = Fr(e);
      var a = ga(t, e);
      (a !== null && _e(a, t, e), nc(t, e));
    }
  }
  var fr = !0;
  function X0(t, e, a, l) {
    var u = H.T;
    H.T = null;
    var o = P.p;
    try {
      ((P.p = 2), ac(t, e, a, l));
    } finally {
      ((P.p = o), (H.T = u));
    }
  }
  function K0(t, e, a, l) {
    var u = H.T;
    H.T = null;
    var o = P.p;
    try {
      ((P.p = 8), ac(t, e, a, l));
    } finally {
      ((P.p = o), (H.T = u));
    }
  }
  function ac(t, e, a, l) {
    if (fr) {
      var u = lc(l);
      if (u === null) (Vo(t, e, l, dr, a), Zm(t, l));
      else if (P0(u, t, e, a, l)) l.stopPropagation();
      else if ((Zm(t, l), e & 4 && -1 < Z0.indexOf(t))) {
        for (; u !== null; ) {
          var o = Pa(u);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var d = ha(o.pendingLanes);
                  if (d !== 0) {
                    var g = o;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var R = 1 << (31 - Te(d));
                      ((g.entanglements[1] |= R), (d &= ~R));
                    }
                    (We(o), (Et & 6) === 0 && ((Ps = ce() + 500), Ti(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((g = ga(o, 2)), g !== null && _e(g, o, 2), Fs(), nc(o, 2));
            }
          if (((o = lc(l)), o === null && Vo(t, e, l, dr, a), o === u)) break;
          u = o;
        }
        u !== null && l.stopPropagation();
      } else Vo(t, e, l, null, a);
    }
  }
  function lc(t) {
    return ((t = iu(t)), ic(t));
  }
  var dr = null;
  function ic(t) {
    if (((dr = null), (t = Za(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (a === 31) {
          if (((t = y(e)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((dr = t), null);
  }
  function Km(t) {
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
        switch (Dt()) {
          case ae:
            return 2;
          case Je:
            return 8;
          case Xa:
          case Dv:
            return 32;
          case ef:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var sc = !1,
    Wn = null,
    ta = null,
    ea = null,
    ji = new Map(),
    Di = new Map(),
    na = [],
    Z0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Zm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Wn = null;
        break;
      case "dragenter":
      case "dragleave":
        ta = null;
        break;
      case "mouseover":
      case "mouseout":
        ea = null;
        break;
      case "pointerover":
      case "pointerout":
        ji.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Di.delete(e.pointerId);
    }
  }
  function Ni(t, e, a, l, u, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: o,
          targetContainers: [u],
        }),
        e !== null && ((e = Pa(e)), e !== null && km(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function P0(t, e, a, l, u) {
    switch (e) {
      case "focusin":
        return ((Wn = Ni(Wn, t, e, a, l, u)), !0);
      case "dragenter":
        return ((ta = Ni(ta, t, e, a, l, u)), !0);
      case "mouseover":
        return ((ea = Ni(ea, t, e, a, l, u)), !0);
      case "pointerover":
        var o = u.pointerId;
        return (ji.set(o, Ni(ji.get(o) || null, t, e, a, l, u)), !0);
      case "gotpointercapture":
        return ((o = u.pointerId), Di.set(o, Ni(Di.get(o) || null, t, e, a, l, u)), !0);
    }
    return !1;
  }
  function Pm(t) {
    var e = Za(t.target);
    if (e !== null) {
      var a = f(e);
      if (a !== null) {
        if (((e = a.tag), e === 13)) {
          if (((e = h(a)), e !== null)) {
            ((t.blockedOn = e),
              uf(t.priority, function () {
                Xm(a);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = y(a)), e !== null)) {
            ((t.blockedOn = e),
              uf(t.priority, function () {
                Xm(a);
              }));
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
  function hr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = lc(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((lu = l), a.target.dispatchEvent(l), (lu = null));
      } else return ((e = Pa(a)), e !== null && km(e), (t.blockedOn = a), !1);
      e.shift();
    }
    return !0;
  }
  function Jm(t, e, a) {
    hr(t) && a.delete(e);
  }
  function J0() {
    ((sc = !1),
      Wn !== null && hr(Wn) && (Wn = null),
      ta !== null && hr(ta) && (ta = null),
      ea !== null && hr(ea) && (ea = null),
      ji.forEach(Jm),
      Di.forEach(Jm));
  }
  function mr(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      sc || ((sc = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, J0)));
  }
  var pr = null;
  function Fm(t) {
    pr !== t &&
      ((pr = t),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        pr === t && (pr = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e],
            l = t[e + 1],
            u = t[e + 2];
          if (typeof l != "function") {
            if (ic(l || a) === null) continue;
            break;
          }
          var o = Pa(a);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            ao(o, { pending: !0, data: u, method: a.method, action: l }, l, u));
        }
      }));
  }
  function zl(t) {
    function e(R) {
      return mr(R, t);
    }
    (Wn !== null && mr(Wn, t),
      ta !== null && mr(ta, t),
      ea !== null && mr(ea, t),
      ji.forEach(e),
      Di.forEach(e));
    for (var a = 0; a < na.length; a++) {
      var l = na[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < na.length && ((a = na[0]), a.blockedOn === null); )
      (Pm(a), a.blockedOn === null && na.shift());
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var u = a[l],
          o = a[l + 1],
          d = u[pe] || null;
        if (typeof o == "function") d || Fm(a);
        else if (d) {
          var g = null;
          if (o && o.hasAttribute("formAction")) {
            if (((u = o), (d = o[pe] || null))) g = d.formAction;
            else if (ic(u) !== null) continue;
          } else g = d.action;
          (typeof g == "function" ? (a[l + 1] = g) : (a.splice(l, 3), (l -= 3)), Fm(a));
        }
      }
  }
  function Im() {
    function t(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (u = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (u !== null && (u(), (u = null)), l || setTimeout(a, 20));
    }
    function a() {
      if (!l && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(a, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function rc(t) {
    this._internalRoot = t;
  }
  ((yr.prototype.render = rc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var a = e.current,
        l = je();
      Qm(a, l, t, e, null, null);
    }),
    (yr.prototype.unmount = rc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Qm(t.current, 2, null, t, null, null), Fs(), (e[Ka] = null));
        }
      }));
  function yr(t) {
    this._internalRoot = t;
  }
  yr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = rf();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < na.length && e !== 0 && e < na[a].priority; a++);
      (na.splice(a, 0, t), a === 0 && Pm(t));
    }
  };
  var $m = i.version;
  if ($m !== "19.2.7") throw Error(r(527, $m, "19.2.7"));
  P.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return ((t = p(e)), (t = t !== null ? b(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var F0 = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.7",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vr.isDisabled && vr.supportsFiber)
      try {
        ((Vl = vr.inject(F0)), (Re = vr));
      } catch {}
  }
  return (
    (Ui.createRoot = function (t, e) {
      if (!c(t)) throw Error(r(299));
      var a = !1,
        l = "",
        u = ih,
        o = sh,
        d = rh;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError)),
        (e = Ym(t, 1, !1, null, null, a, l, null, u, o, d, Im)),
        (t[Ka] = e.current),
        Qo(t),
        new rc(e)
      );
    }),
    (Ui.hydrateRoot = function (t, e, a) {
      if (!c(t)) throw Error(r(299));
      var l = !1,
        u = "",
        o = ih,
        d = sh,
        g = rh,
        R = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (o = a.onUncaughtError),
          a.onCaughtError !== void 0 && (d = a.onCaughtError),
          a.onRecoverableError !== void 0 && (g = a.onRecoverableError),
          a.formState !== void 0 && (R = a.formState)),
        (e = Ym(t, 1, !0, e, a ?? null, l, u, R, o, d, g, Im)),
        (e.context = Gm(null)),
        (a = e.current),
        (l = je()),
        (l = Fr(l)),
        (u = Gn(l)),
        (u.callback = null),
        Qn(a, u, l),
        (a = l),
        (e.current.lanes = a),
        Xl(e, a),
        We(e),
        (t[Ka] = e.current),
        Qo(t),
        new yr(e)
      );
    }),
    (Ui.version = "19.2.7"),
    Ui
  );
}
var up;
function rb() {
  if (up) return cc.exports;
  up = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (cc.exports = sb()), cc.exports);
}
var ub = rb(),
  ob = "__TSS_CONTEXT",
  wc = Symbol.for("TSS_SERVER_FUNCTION"),
  cb = "application/x-tss-framed",
  Tn = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 },
  fb = /;\s*v=(\d+)/;
function db(n) {
  const i = n.match(fb);
  return i ? parseInt(i[1], 10) : void 0;
}
function hb(n) {
  const i = db(n);
  if (i !== void 0 && i !== 1)
    throw new Error(
      `Incompatible framed protocol version: server=${i}, client=1. Please ensure client and server are using compatible versions.`,
    );
}
var uy = () => window.__TSS_START_OPTIONS__;
const oy = !1;
function Vi(n) {
  return n[n.length - 1];
}
function mb(n) {
  return typeof n == "function";
}
function ja(n, i) {
  return mb(n) ? n(i) : n;
}
const cy = Object.prototype.hasOwnProperty,
  op = Object.prototype.propertyIsEnumerable;
function fy(n) {
  for (const i in n) if (cy.call(n, i)) return !0;
  return !1;
}
const pb = () => Object.create(null),
  Ca = (n, i) => Da(n, i, pb);
function Da(n, i, s = () => ({}), r = 0) {
  if (n === i) return n;
  if (r > 500) return i;
  const c = i,
    f = dp(n) && dp(c);
  if (!f && !(Or(n) && Or(c))) return c;
  const h = f ? n : cp(n);
  if (!h) return c;
  const y = f ? c : cp(c);
  if (!y) return c;
  const m = h.length,
    p = y.length,
    b = f ? new Array(p) : s();
  let v = 0;
  for (let _ = 0; _ < p; _++) {
    const x = f ? _ : y[_],
      A = n[x],
      j = c[x];
    if (A === j) {
      ((b[x] = A), (f ? _ < m : cy.call(n, x)) && v++);
      continue;
    }
    if (A === null || j === null || typeof A != "object" || typeof j != "object") {
      b[x] = j;
      continue;
    }
    const E = Da(A, j, s, r + 1);
    ((b[x] = E), E === A && v++);
  }
  return m === p && v === m ? n : b;
}
function cp(n) {
  const i = Object.getOwnPropertyNames(n);
  for (const c of i) if (!op.call(n, c)) return !1;
  const s = Object.getOwnPropertySymbols(n);
  if (s.length === 0) return i;
  const r = i;
  for (const c of s) {
    if (!op.call(n, c)) return !1;
    r.push(c);
  }
  return r;
}
function Or(n) {
  if (!fp(n)) return !1;
  const i = n.constructor;
  if (typeof i > "u") return !0;
  const s = i.prototype;
  return !(!fp(s) || !s.hasOwnProperty("isPrototypeOf"));
}
function fp(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function dp(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function he(n, i, s) {
  if (n === i) return !0;
  if (typeof n != typeof i) return !1;
  if (Array.isArray(n) && Array.isArray(i)) {
    if (n.length !== i.length) return !1;
    for (let r = 0, c = n.length; r < c; r++) if (!he(n[r], i[r], s)) return !1;
    return !0;
  }
  if (Or(n) && Or(i)) {
    const r = s?.ignoreUndefined ?? !0;
    if (s?.partial) {
      for (const h in i) if ((!r || i[h] !== void 0) && !he(n[h], i[h], s)) return !1;
      return !0;
    }
    let c = 0;
    if (!r) c = Object.keys(n).length;
    else for (const h in n) n[h] !== void 0 && c++;
    let f = 0;
    for (const h in i) if ((!r || i[h] !== void 0) && (f++, f > c || !he(n[h], i[h], s))) return !1;
    return c === f;
  }
  return !1;
}
function Ha(n) {
  let i, s;
  const r = new Promise((c, f) => {
    ((i = c), (s = f));
  });
  return (
    (r.status = "pending"),
    (r.resolve = (c) => {
      ((r.status = "resolved"), (r.value = c), i(c), n?.(c));
    }),
    (r.reject = (c) => {
      ((r.status = "rejected"), s(c));
    }),
    r
  );
}
function yb(n) {
  return typeof n?.message != "string"
    ? !1
    : n.message.startsWith("Failed to fetch dynamically imported module") ||
        n.message.startsWith("error loading dynamically imported module") ||
        n.message.startsWith("Importing a module script failed");
}
function ki(n) {
  return !!(n && typeof n == "object" && typeof n.then == "function");
}
function vb(n) {
  return n.replace(/[\x00-\x1f\x7f]/g, "");
}
function hp(n) {
  let i;
  try {
    i = decodeURI(n);
  } catch {
    i = n.replaceAll(/%[0-9A-F]{2}/gi, (s) => {
      try {
        return decodeURI(s);
      } catch {
        return s;
      }
    });
  }
  return vb(i);
}
const gb = ["http:", "https:", "mailto:", "tel:"];
function Cr(n, i) {
  if (!n) return !1;
  try {
    const s = new URL(n);
    return !i.has(s.protocol);
  } catch {
    return !1;
  }
}
const bb = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  },
  Sb = /[&><\u2028\u2029]/g;
function _b(n) {
  return n.replace(Sb, (i) => bb[i]);
}
function Bi(n) {
  if (!n) return { path: n, handledProtocolRelativeURL: !1 };
  if (!/[%\\\x00-\x1f\x7f]/.test(n) && !n.startsWith("//"))
    return { path: n, handledProtocolRelativeURL: !1 };
  const i = /%25|%5C/gi;
  let s = 0,
    r = "",
    c;
  for (; (c = i.exec(n)) !== null; ) ((r += hp(n.slice(s, c.index)) + c[0]), (s = i.lastIndex));
  r = r + hp(s ? n.slice(s) : n);
  let f = !1;
  return (
    r.startsWith("//") && ((f = !0), (r = "/" + r.replace(/^\/+/, ""))),
    { path: r, handledProtocolRelativeURL: f }
  );
}
function xb(n) {
  return /\s|[^\u0000-\u007F]/.test(n) ? n.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : n;
}
function Eb(n, i) {
  if (n === i) return !0;
  if (n.length !== i.length) return !1;
  for (let s = 0; s < n.length; s++) if (n[s] !== i[s]) return !1;
  return !0;
}
function Ee() {
  throw new Error("Invariant failed");
}
function Xi(n) {
  const i = new Map();
  let s, r;
  const c = (f) => {
    f.next &&
      (f.prev
        ? ((f.prev.next = f.next),
          (f.next.prev = f.prev),
          (f.next = void 0),
          r && ((r.next = f), (f.prev = r)))
        : ((f.next.prev = void 0),
          (s = f.next),
          (f.next = void 0),
          r && ((f.prev = r), (r.next = f))),
      (r = f));
  };
  return {
    get(f) {
      const h = i.get(f);
      if (h) return (c(h), h.value);
    },
    set(f, h) {
      if (i.size >= n && s) {
        const m = s;
        (i.delete(m.key),
          m.next && ((s = m.next), (m.next.prev = void 0)),
          m === r && (r = void 0));
      }
      const y = i.get(f);
      if (y) ((y.value = h), c(y));
      else {
        const m = { key: f, value: h, prev: r };
        (r && (r.next = m), (r = m), s || (s = m), i.set(f, m));
      }
    },
    clear() {
      (i.clear(), (s = void 0), (r = void 0));
    },
  };
}
const sa = 4,
  dy = 5;
function Rb(n) {
  const i = n.indexOf("{");
  if (i === -1) return null;
  const s = n.indexOf("}", i);
  return s === -1 || i + 1 >= n.length ? null : [i, s];
}
function hy(n, i, s = new Uint16Array(6)) {
  const r = n.indexOf("/", i),
    c = r === -1 ? n.length : r,
    f = n.substring(i, c);
  if (!f || !f.includes("$"))
    return ((s[0] = 0), (s[1] = i), (s[2] = i), (s[3] = c), (s[4] = c), (s[5] = c), s);
  if (f === "$") {
    const y = n.length;
    return ((s[0] = 2), (s[1] = i), (s[2] = i), (s[3] = y), (s[4] = y), (s[5] = y), s);
  }
  if (f.charCodeAt(0) === 36)
    return ((s[0] = 1), (s[1] = i), (s[2] = i + 1), (s[3] = c), (s[4] = c), (s[5] = c), s);
  const h = Rb(f);
  if (h) {
    const [y, m] = h,
      p = f.charCodeAt(y + 1);
    if (p === 45) {
      if (y + 2 < f.length && f.charCodeAt(y + 2) === 36) {
        const b = y + 3,
          v = m;
        if (b < v)
          return (
            (s[0] = 3),
            (s[1] = i + y),
            (s[2] = i + b),
            (s[3] = i + v),
            (s[4] = i + m + 1),
            (s[5] = c),
            s
          );
      }
    } else if (p === 36) {
      const b = y + 1,
        v = y + 2;
      return v === m
        ? ((s[0] = 2),
          (s[1] = i + y),
          (s[2] = i + b),
          (s[3] = i + v),
          (s[4] = i + m + 1),
          (s[5] = n.length),
          s)
        : ((s[0] = 1),
          (s[1] = i + y),
          (s[2] = i + v),
          (s[3] = i + m),
          (s[4] = i + m + 1),
          (s[5] = c),
          s);
    }
  }
  return ((s[0] = 0), (s[1] = i), (s[2] = i), (s[3] = c), (s[4] = c), (s[5] = c), s);
}
function Yr(n, i, s, r, c, f, h) {
  h?.(s);
  let y = r;
  {
    const m = s.fullPath ?? s.from,
      p = m.length,
      b = s.options?.caseSensitive ?? n,
      v = s.options?.params?.parse ?? s.options?.parseParams;
    for (; y < p; ) {
      const x = hy(m, y, i);
      let A;
      const j = y,
        E = x[5];
      switch (((y = E + 1), f++, x[0])) {
        case 0: {
          const z = m.substring(x[2], x[3]);
          if (b) {
            const B = c.static?.get(z);
            if (B) A = B;
            else {
              c.static ??= new Map();
              const X = Na(s.fullPath ?? s.from);
              ((X.parent = c), (X.depth = f), (A = X), c.static.set(z, X));
            }
          } else {
            const B = z.toLowerCase(),
              X = c.staticInsensitive?.get(B);
            if (X) A = X;
            else {
              c.staticInsensitive ??= new Map();
              const G = Na(s.fullPath ?? s.from);
              ((G.parent = c), (G.depth = f), (A = G), c.staticInsensitive.set(B, G));
            }
          }
          break;
        }
        case 1: {
          const z = m.substring(j, x[1]),
            B = m.substring(x[4], E),
            X = b && !!(z || B),
            G = z ? (X ? z : z.toLowerCase()) : void 0,
            K = B ? (X ? B : B.toLowerCase()) : void 0,
            J =
              !v &&
              c.dynamic?.find(
                (Y) => !Y.parse && Y.caseSensitive === X && Y.prefix === G && Y.suffix === K,
              );
          if (J) A = J;
          else {
            const Y = pc(1, s.fullPath ?? s.from, X, G, K);
            ((A = Y), (Y.depth = f), (Y.parent = c), (c.dynamic ??= []), c.dynamic.push(Y));
          }
          break;
        }
        case 3: {
          const z = m.substring(j, x[1]),
            B = m.substring(x[4], E),
            X = b && !!(z || B),
            G = z ? (X ? z : z.toLowerCase()) : void 0,
            K = B ? (X ? B : B.toLowerCase()) : void 0,
            J =
              !v &&
              c.optional?.find(
                (Y) => !Y.parse && Y.caseSensitive === X && Y.prefix === G && Y.suffix === K,
              );
          if (J) A = J;
          else {
            const Y = pc(3, s.fullPath ?? s.from, X, G, K);
            ((A = Y), (Y.parent = c), (Y.depth = f), (c.optional ??= []), c.optional.push(Y));
          }
          break;
        }
        case 2: {
          const z = m.substring(j, x[1]),
            B = m.substring(x[4], E),
            X = b && !!(z || B),
            G = z ? (X ? z : z.toLowerCase()) : void 0,
            K = B ? (X ? B : B.toLowerCase()) : void 0,
            J = pc(2, s.fullPath ?? s.from, X, G, K);
          ((A = J), (J.parent = c), (J.depth = f), (c.wildcard ??= []), c.wildcard.push(J));
        }
      }
      c = A;
    }
    if (v && s.children && !s.isRoot && s.id && s.id.charCodeAt(s.id.lastIndexOf("/") + 1) === 95) {
      const x = Na(s.fullPath ?? s.from);
      ((x.kind = dy),
        (x.parent = c),
        f++,
        (x.depth = f),
        (c.pathless ??= []),
        c.pathless.push(x),
        (c = x));
    }
    const _ = (s.path || !s.children) && !s.isRoot;
    if (_ && m.endsWith("/")) {
      const x = Na(s.fullPath ?? s.from);
      ((x.kind = sa), (x.parent = c), f++, (x.depth = f), (c.index = x), (c = x));
    }
    ((c.parse = v ?? null),
      (c.priority = s.options?.params?.priority ?? 0),
      _ && !c.route && ((c.route = s), (c.fullPath = s.fullPath ?? s.from)));
  }
  if (s.children) for (const m of s.children) Yr(n, i, m, y, c, f, h);
}
function mc(n, i) {
  if (n.parse && !i.parse) return -1;
  if (!n.parse && i.parse) return 1;
  if (n.parse && i.parse && (n.priority || i.priority)) return i.priority - n.priority;
  if (n.prefix && i.prefix && n.prefix !== i.prefix) {
    if (n.prefix.startsWith(i.prefix)) return -1;
    if (i.prefix.startsWith(n.prefix)) return 1;
  }
  if (n.suffix && i.suffix && n.suffix !== i.suffix) {
    if (n.suffix.endsWith(i.suffix)) return -1;
    if (i.suffix.endsWith(n.suffix)) return 1;
  }
  return n.prefix && !i.prefix
    ? -1
    : !n.prefix && i.prefix
      ? 1
      : n.suffix && !i.suffix
        ? -1
        : !n.suffix && i.suffix
          ? 1
          : n.caseSensitive && !i.caseSensitive
            ? -1
            : !n.caseSensitive && i.caseSensitive
              ? 1
              : 0;
}
function la(n) {
  if (n.pathless) for (const i of n.pathless) la(i);
  if (n.static) for (const i of n.static.values()) la(i);
  if (n.staticInsensitive) for (const i of n.staticInsensitive.values()) la(i);
  if (n.dynamic?.length) {
    n.dynamic.sort(mc);
    for (const i of n.dynamic) la(i);
  }
  if (n.optional?.length) {
    n.optional.sort(mc);
    for (const i of n.optional) la(i);
  }
  if (n.wildcard?.length) {
    n.wildcard.sort(mc);
    for (const i of n.wildcard) la(i);
  }
}
function Na(n) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: n,
    parent: null,
    parse: null,
    priority: 0,
  };
}
function pc(n, i, s, r, c) {
  return {
    kind: n,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: i,
    parent: null,
    parse: null,
    priority: 0,
    caseSensitive: s,
    prefix: r,
    suffix: c,
  };
}
function Tb(n, i) {
  const s = Na("/"),
    r = new Uint16Array(6);
  for (const c of n) Yr(!1, r, c, 1, s, 0);
  (la(s), (i.masksTree = s), (i.flatCache = Xi(1e3)));
}
function Ab(n, i) {
  n ||= "/";
  const s = i.flatCache.get(n);
  if (s) return s;
  const r = kc(n, i.masksTree);
  return (i.flatCache.set(n, r), r);
}
function Mb(n, i, s, r, c) {
  ((n ||= "/"), (r ||= "/"));
  const f = i ? `case\0${n}` : n;
  let h = c.singleCache.get(f);
  return (
    h || ((h = Na("/")), Yr(i, new Uint16Array(6), { from: n }, 1, h, 0), c.singleCache.set(f, h)),
    kc(r, h, s)
  );
}
function wb(n, i, s = !1) {
  const r = s ? n : `nofuzz\0${n}`,
    c = i.matchCache.get(r);
  if (c !== void 0) return c;
  n ||= "/";
  let f;
  try {
    f = kc(n, i.segmentTree, s);
  } catch (h) {
    if (h instanceof URIError) f = null;
    else throw h;
  }
  return (f && (f.branch = py(f.route)), i.matchCache.set(r, f), f);
}
function zb(n) {
  return n === "/" ? n : n.replace(/\/{1,}$/, "");
}
function Ob(n, i = !1, s) {
  const r = Na(n.fullPath),
    c = new Uint16Array(6),
    f = {},
    h = {};
  let y = 0;
  return (
    Yr(i, c, n, 1, r, 0, (m) => {
      if ((s?.(m, y), m.id in f && Ee(), (f[m.id] = m), y !== 0 && m.path)) {
        const p = zb(m.fullPath);
        (!h[p] || m.fullPath.endsWith("/")) && (h[p] = m);
      }
      y++;
    }),
    la(r),
    {
      processedTree: {
        segmentTree: r,
        singleCache: Xi(1e3),
        matchCache: Xi(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: f,
      routesByPath: h,
    }
  );
}
function kc(n, i, s = !1) {
  const r = n.split("/"),
    c = jb(n, r, i, s);
  if (!c) return null;
  const [f] = my(n, r, c);
  return { route: c.node.route, rawParams: f };
}
function my(n, i, s) {
  const r = Cb(s.node);
  let c = null;
  const f = Object.create(null);
  let h = s.extract?.part ?? 0,
    y = s.extract?.node ?? 0,
    m = s.extract?.path ?? 0,
    p = s.extract?.segment ?? 0;
  for (; y < r.length; h++, y++, m++, p++) {
    const b = r[y];
    if (b.kind === sa) break;
    if (b.kind === dy) {
      (p--, h--, m--);
      continue;
    }
    const v = i[h],
      _ = m;
    if ((v && (m += v.length), b.kind === 1)) {
      c ??= s.node.fullPath.split("/");
      const x = c[p],
        A = b.prefix?.length ?? 0;
      if (x.charCodeAt(A) === 123) {
        const j = b.suffix?.length ?? 0,
          E = x.substring(A + 2, x.length - j - 1),
          z = v.substring(A, v.length - j);
        f[E] = decodeURIComponent(z);
      } else {
        const j = x.substring(1);
        f[j] = decodeURIComponent(v);
      }
    } else if (b.kind === 3) {
      if (s.skipped & (1 << y)) {
        (h--, (m = _ - 1));
        continue;
      }
      c ??= s.node.fullPath.split("/");
      const x = c[p],
        A = b.prefix?.length ?? 0,
        j = b.suffix?.length ?? 0,
        E = x.substring(A + 3, x.length - j - 1),
        z = b.suffix || b.prefix ? v.substring(A, v.length - j) : v;
      z && (f[E] = decodeURIComponent(z));
    } else if (b.kind === 2) {
      const x = b,
        A = n.substring(_ + (x.prefix?.length ?? 0), n.length - (x.suffix?.length ?? 0)),
        j = decodeURIComponent(A);
      ((f["*"] = j), (f._splat = j));
      break;
    }
  }
  return (
    s.rawParams && Object.assign(f, s.rawParams),
    [f, { part: h, node: y, path: m, segment: p }]
  );
}
function py(n) {
  const i = [n];
  for (; n.parentRoute; ) ((n = n.parentRoute), i.push(n));
  return (i.reverse(), i);
}
function Cb(n) {
  const i = Array(n.depth + 1);
  do ((i[n.depth] = n), (n = n.parent));
  while (n);
  return i;
}
function jb(n, i, s, r) {
  if (n === "/" && s.index) return { node: s.index, skipped: 0 };
  const c = !Vi(i),
    f = c && n !== "/",
    h = i.length - (c ? 1 : 0),
    y = [{ node: s, index: 1, skipped: 0, depth: 1, statics: 0, dynamics: 0, optionals: 0 }];
  let m = null,
    p = null;
  for (; y.length; ) {
    const b = y.pop(),
      { node: v, index: _, skipped: x, depth: A, statics: j, dynamics: E, optionals: z } = b;
    let { extract: B, rawParams: X } = b;
    if (v.kind === 2 && v.route && !br(p, b)) continue;
    if (v.parse) {
      if (!mp(n, i, b)) continue;
      ((X = b.rawParams), (B = b.extract));
    }
    r && v.route && v.kind !== sa && br(m, b) && (m = b);
    const G = _ === h;
    if (
      G &&
      (v.route && (!f || v.kind === sa || v.kind === 2) && br(p, b) && (p = b),
      !v.optional && !v.wildcard && !v.index && !v.pathless)
    )
      continue;
    const K = G ? void 0 : i[_];
    let J;
    if (G && v.index) {
      const Y = {
        node: v.index,
        index: _,
        skipped: x,
        depth: A + 1,
        statics: j,
        dynamics: E,
        optionals: z,
        extract: B,
        rawParams: X,
      };
      let Z = !0;
      if ((v.index.parse && (mp(n, i, Y) || (Z = !1)), Z)) {
        if (!E && !z && !x && Db(j, h)) return Y;
        br(p, Y) && (p = Y);
      }
    }
    if (v.wildcard)
      for (let Y = v.wildcard.length - 1; Y >= 0; Y--) {
        const Z = v.wildcard[Y],
          { prefix: I, suffix: ut } = Z;
        if (!(I && (G || !(Z.caseSensitive ? K : (J ??= K.toLowerCase())).startsWith(I)))) {
          if (ut) {
            if (G) continue;
            const st = i.slice(_).join("/").slice(-ut.length);
            if ((Z.caseSensitive ? st : st.toLowerCase()) !== ut) continue;
          }
          y.push({
            node: Z,
            index: h,
            skipped: x,
            depth: A + 1,
            statics: j,
            dynamics: E,
            optionals: z,
            extract: B,
            rawParams: X,
          });
        }
      }
    if (v.optional) {
      const Y = x | (1 << A),
        Z = A + 1;
      for (let I = v.optional.length - 1; I >= 0; I--) {
        const ut = v.optional[I];
        y.push({
          node: ut,
          index: _,
          skipped: Y,
          depth: Z,
          statics: j,
          dynamics: E,
          optionals: z,
          extract: B,
          rawParams: X,
        });
      }
      if (!G)
        for (let I = v.optional.length - 1; I >= 0; I--) {
          const ut = v.optional[I],
            { prefix: st, suffix: it } = ut;
          if (st || it) {
            const Wt = ut.caseSensitive ? K : (J ??= K.toLowerCase());
            if ((st && !Wt.startsWith(st)) || (it && !Wt.endsWith(it))) continue;
          }
          y.push({
            node: ut,
            index: _ + 1,
            skipped: x,
            depth: Z,
            statics: j,
            dynamics: E,
            optionals: z + gr(h, _),
            extract: B,
            rawParams: X,
          });
        }
    }
    if (!G && v.dynamic && K)
      for (let Y = v.dynamic.length - 1; Y >= 0; Y--) {
        const Z = v.dynamic[Y],
          { prefix: I, suffix: ut } = Z;
        if (I || ut) {
          const st = Z.caseSensitive ? K : (J ??= K.toLowerCase());
          if ((I && !st.startsWith(I)) || (ut && !st.endsWith(ut))) continue;
        }
        y.push({
          node: Z,
          index: _ + 1,
          skipped: x,
          depth: A + 1,
          statics: j,
          dynamics: E + gr(h, _),
          optionals: z,
          extract: B,
          rawParams: X,
        });
      }
    if (!G && v.staticInsensitive) {
      const Y = v.staticInsensitive.get((J ??= K.toLowerCase()));
      Y &&
        y.push({
          node: Y,
          index: _ + 1,
          skipped: x,
          depth: A + 1,
          statics: j + gr(h, _),
          dynamics: E,
          optionals: z,
          extract: B,
          rawParams: X,
        });
    }
    if (!G && v.static) {
      const Y = v.static.get(K);
      Y &&
        y.push({
          node: Y,
          index: _ + 1,
          skipped: x,
          depth: A + 1,
          statics: j + gr(h, _),
          dynamics: E,
          optionals: z,
          extract: B,
          rawParams: X,
        });
    }
    if (v.pathless) {
      const Y = A + 1;
      for (let Z = v.pathless.length - 1; Z >= 0; Z--) {
        const I = v.pathless[Z];
        y.push({
          node: I,
          index: _,
          skipped: x,
          depth: Y,
          statics: j,
          dynamics: E,
          optionals: z,
          extract: B,
          rawParams: X,
        });
      }
    }
  }
  if (p) return p;
  if (r && m) {
    let b = m.index;
    for (let _ = 0; _ < m.index; _++) b += i[_].length;
    const v = b === n.length ? "/" : n.slice(b);
    return ((m.rawParams ??= Object.create(null)), (m.rawParams["**"] = decodeURIComponent(v)), m);
  }
  return null;
}
function gr(n, i) {
  return 2 ** (n - i - 1);
}
function Db(n, i) {
  return n === 2 ** (i - 1) - 1;
}
function mp(n, i, s) {
  let r, c;
  try {
    [r, c] = my(n, i, s);
  } catch {
    return null;
  }
  if (((s.rawParams = r), (s.extract = c), !s.node.parse)) return !0;
  try {
    if (s.node.parse(r) === !1) return null;
  } catch {}
  return !0;
}
function br(n, i) {
  return n
    ? i.statics > n.statics ||
        (i.statics === n.statics &&
          (i.dynamics > n.dynamics ||
            (i.dynamics === n.dynamics &&
              (i.optionals > n.optionals ||
                (i.optionals === n.optionals &&
                  ((i.node.kind === sa) > (n.node.kind === sa) ||
                    ((i.node.kind === sa) == (n.node.kind === sa) && i.depth > n.depth)))))))
    : !0;
}
function Tr(n) {
  return Xc(n.filter((i) => i !== void 0).join("/"));
}
function Xc(n) {
  return n.replace(/\/{2,}/g, "/");
}
function yy(n) {
  return n === "/" ? n : n.replace(/^\/{1,}/, "");
}
function An(n) {
  const i = n.length;
  return i > 1 && n[i - 1] === "/" ? n.replace(/\/{1,}$/, "") : n;
}
function vy(n) {
  return An(yy(n));
}
function jr(n, i) {
  return n?.endsWith("/") && n !== "/" && n !== `${i}/` ? n.slice(0, -1) : n;
}
function Nb(n, i, s) {
  return jr(n, s) === jr(i, s);
}
function Lb({ base: n, to: i, trailingSlash: s = "never", cache: r }) {
  const c = i.startsWith("/"),
    f = !c && i === ".";
  let h;
  if (r) {
    h = c ? i : f ? n : n + "\0" + i;
    const p = r.get(h);
    if (p) return p;
  }
  let y;
  if (f) y = n.split("/");
  else if (c) y = i.split("/");
  else {
    for (y = n.split("/"); y.length > 1 && Vi(y) === ""; ) y.pop();
    const p = i.split("/");
    for (let b = 0, v = p.length; b < v; b++) {
      const _ = p[b];
      _ === ""
        ? b
          ? b === v - 1 && y.push(_)
          : (y = [_])
        : _ === ".."
          ? y.pop()
          : _ === "." || y.push(_);
    }
  }
  y.length > 1 && (Vi(y) === "" ? s === "never" && y.pop() : s === "always" && y.push(""));
  const m = Xc(y.join("/")) || "/";
  return (h && r && r.set(h, m), m);
}
function Ub(n) {
  const i = new Map(n.map((c) => [encodeURIComponent(c), c])),
    s = Array.from(i.keys())
      .map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    r = new RegExp(s, "g");
  return (c) => c.replace(r, (f) => i.get(f) ?? f);
}
function yc(n, i, s) {
  const r = i[n];
  return typeof r != "string"
    ? r
    : n === "_splat"
      ? /^[a-zA-Z0-9\-._~!/]*$/.test(r)
        ? r
        : r
            .split("/")
            .map((c) => yp(c, s))
            .join("/")
      : yp(r, s);
}
function pp({ path: n, params: i, decoder: s, ...r }) {
  let c = !1;
  const f = Object.create(null);
  if (!n || n === "/") return { interpolatedPath: "/", usedParams: f, isMissingParams: c };
  if (!n.includes("$")) return { interpolatedPath: n, usedParams: f, isMissingParams: c };
  const h = n.length;
  let y = 0,
    m,
    p = "";
  for (; y < h; ) {
    const b = y;
    m = hy(n, b, m);
    const v = m[5];
    if (((y = v + 1), b === v)) continue;
    const _ = m[0];
    if (_ === 0) {
      p += "/" + n.substring(b, v);
      continue;
    }
    if (_ === 2) {
      const x = i._splat;
      ((f._splat = x), (f["*"] = x));
      const A = n.substring(b, m[1]),
        j = n.substring(m[4], v);
      if (!x) {
        ((c = !0), (A || j) && (p += "/" + A + j));
        continue;
      }
      const E = yc("_splat", i, s);
      p += "/" + A + E + j;
      continue;
    }
    if (_ === 1) {
      const x = n.substring(m[2], m[3]);
      (!c && !(x in i) && (c = !0), (f[x] = i[x]));
      const A = n.substring(b, m[1]),
        j = n.substring(m[4], v),
        E = yc(x, i, s) ?? "undefined";
      p += "/" + A + E + j;
      continue;
    }
    if (_ === 3) {
      const x = n.substring(m[2], m[3]),
        A = i[x];
      if (A == null) continue;
      f[x] = A;
      const j = n.substring(b, m[1]),
        E = n.substring(m[4], v),
        z = yc(x, i, s) ?? "";
      p += "/" + j + z + E;
      continue;
    }
  }
  return (
    n.endsWith("/") && (p += "/"),
    { usedParams: f, interpolatedPath: p || "/", isMissingParams: c }
  );
}
function yp(n, i) {
  const s = encodeURIComponent(n);
  return i?.(s) ?? s;
}
function ne(n) {
  return n?.isNotFound === !0;
}
function gy(n, i = String) {
  const s = new URLSearchParams();
  for (const r in n) {
    const c = n[r];
    c !== void 0 && s.set(r, i(c));
  }
  return s.toString();
}
function vc(n) {
  return n ? (n === "false" ? !1 : n === "true" ? !0 : +n * 0 === 0 && +n + "" === n ? +n : n) : "";
}
function Bb(n) {
  const i = new URLSearchParams(n),
    s = Object.create(null);
  for (const [r, c] of i.entries()) {
    const f = s[r];
    f == null ? (s[r] = vc(c)) : Array.isArray(f) ? f.push(vc(c)) : (s[r] = [f, vc(c)]);
  }
  return s;
}
const Hb = Yb(JSON.parse),
  qb = Gb(JSON.stringify, JSON.parse);
function Yb(n) {
  return (i) => {
    i[0] === "?" && (i = i.substring(1));
    const s = Bb(i);
    for (const r in s) {
      const c = s[r];
      if (typeof c == "string")
        try {
          s[r] = n(c);
        } catch {}
    }
    return s;
  };
}
function Gb(n, i) {
  const s = typeof i == "function";
  function r(c) {
    if (typeof c == "object" && c !== null)
      try {
        return n(c);
      } catch {}
    else if (s && typeof c == "string")
      try {
        return (i(c), n(c));
      } catch {}
    return c;
  }
  return (c) => {
    const f = gy(c, r);
    return f ? `?${f}` : "";
  };
}
const Ua = "__root__";
function by(n) {
  if (
    ((n.statusCode = n.statusCode || n.code || 307),
    !n._builtLocation && !n.reloadDocument && typeof n.href == "string")
  )
    try {
      (new URL(n.href), (n.reloadDocument = !0));
    } catch {}
  const i = new Headers(n.headers);
  n.href && i.get("Location") === null && i.set("Location", n.href);
  const s = new Response(null, { status: n.statusCode, headers: i });
  if (((s.options = n), n.throw)) throw s;
  return s;
}
function xe(n) {
  return n instanceof Response && !!n.options;
}
function Qb(n) {
  if (n !== null && typeof n == "object" && n.isSerializedRedirect) return by(n);
}
const zc = (n) => {
    if (!n.rendered) return ((n.rendered = !0), n.onReady?.());
  },
  Vb = (n) =>
    n.stores.matchesId.get().some((i) => n.stores.matchStores.get(i)?.get()._forcePending),
  Gr = (n, i) => !!(n.preload && !n.router.stores.matchStores.has(i)),
  Ba = (n, i, s = !0) => {
    const r = { ...(n.router.options.context ?? {}) },
      c = s ? i : i - 1;
    for (let f = 0; f <= c; f++) {
      const h = n.matches[f];
      if (!h) continue;
      const y = n.router.getMatch(h.id);
      y && Object.assign(r, y.__routeContext, y.__beforeLoadContext);
    }
    return r;
  },
  vp = (n, i) => {
    if (!n.matches.length) return;
    const s = i.routeId,
      r = n.matches.findIndex((h) => h.routeId === n.router.routeTree.id),
      c = r >= 0 ? r : 0;
    let f = s
      ? n.matches.findIndex((h) => h.routeId === s)
      : (n.firstBadMatchIndex ?? n.matches.length - 1);
    f < 0 && (f = c);
    for (let h = f; h >= 0; h--) {
      const y = n.matches[h];
      if (n.router.looseRoutesById[y.routeId].options.notFoundComponent) return h;
    }
    return s ? f : c;
  },
  ra = (n, i, s) => {
    if (!(!xe(s) && !ne(s)))
      throw (
        (xe(s) && s.redirectHandled && !s.options.reloadDocument) ||
          (i &&
            (i._nonReactive.beforeLoadPromise?.resolve(),
            i._nonReactive.loaderPromise?.resolve(),
            (i._nonReactive.beforeLoadPromise = void 0),
            (i._nonReactive.loaderPromise = void 0),
            (i._nonReactive.error = s),
            n.updateMatch(i.id, (r) => ({
              ...r,
              status: xe(s)
                ? "redirected"
                : ne(s)
                  ? "notFound"
                  : r.status === "pending"
                    ? "success"
                    : r.status,
              context: Ba(n, i.index),
              isFetching: !1,
              error: s,
            })),
            ne(s) && !s.routeId && (s.routeId = i.routeId),
            i._nonReactive.loadPromise?.resolve()),
          xe(s) &&
            ((n.rendered = !0),
            (s.options._fromLocation = n.location),
            (s.redirectHandled = !0),
            (s = n.router.resolveRedirect(s)))),
        s
      );
  },
  Sy = (n, i) => {
    const s = n.router.getMatch(i);
    return !!(!s || s._nonReactive.dehydrated);
  },
  gp = (n, i, s) => {
    const r = Ba(n, s);
    n.updateMatch(i, (c) => ({ ...c, context: r }));
  },
  Hi = (n, i, s) => {
    const { id: r, routeId: c } = n.matches[i],
      f = n.router.looseRoutesById[c];
    if (s instanceof Promise) throw s;
    ((n.firstBadMatchIndex ??= i), ra(n, n.router.getMatch(r), s));
    try {
      f.options.onError?.(s);
    } catch (h) {
      ((s = h), ra(n, n.router.getMatch(r), s));
    }
    (n.updateMatch(
      r,
      (h) => (
        h._nonReactive.beforeLoadPromise?.resolve(),
        (h._nonReactive.beforeLoadPromise = void 0),
        h._nonReactive.loadPromise?.resolve(),
        {
          ...h,
          error: s,
          status: "error",
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      ),
    ),
      !n.preload && !xe(s) && !ne(s) && (n.serialError ??= s));
  },
  _y = (n, i, s, r) => {
    if (r._nonReactive.pendingTimeout !== void 0) return;
    const c = s.options.pendingMs ?? n.router.options.defaultPendingMs;
    if (
      n.onReady &&
      !Gr(n, i) &&
      (s.options.loader || s.options.beforeLoad || Ey(s)) &&
      typeof c == "number" &&
      c !== 1 / 0 &&
      (s.options.pendingComponent ?? n.router.options?.defaultPendingComponent)
    ) {
      const f = setTimeout(() => {
        zc(n);
      }, c);
      r._nonReactive.pendingTimeout = f;
    }
  },
  kb = (n, i, s) => {
    const r = n.router.getMatch(i);
    if (!r._nonReactive.beforeLoadPromise && !r._nonReactive.loaderPromise) return;
    _y(n, i, s, r);
    const c = () => {
      const f = n.router.getMatch(i);
      f.preload && (f.status === "redirected" || f.status === "notFound") && ra(n, f, f.error);
    };
    return r._nonReactive.beforeLoadPromise ? r._nonReactive.beforeLoadPromise.then(c) : c();
  },
  Xb = (n, i, s, r) => {
    const c = n.router.getMatch(i);
    let f = c._nonReactive.loadPromise;
    c._nonReactive.loadPromise = Ha(() => {
      (f?.resolve(), (f = void 0));
    });
    const { paramsError: h, searchError: y } = c;
    (h && Hi(n, s, h), y && Hi(n, s, y), _y(n, i, r, c));
    const m = new AbortController();
    let p = !1;
    const b = () => {
        p ||
          ((p = !0),
          n.updateMatch(i, (G) => ({
            ...G,
            isFetching: "beforeLoad",
            fetchCount: G.fetchCount + 1,
            abortController: m,
          })));
      },
      v = () => {
        (c._nonReactive.beforeLoadPromise?.resolve(),
          (c._nonReactive.beforeLoadPromise = void 0),
          n.updateMatch(i, (G) => ({ ...G, isFetching: !1 })));
      };
    if (!r.options.beforeLoad) {
      n.router.batch(() => {
        (b(), v());
      });
      return;
    }
    c._nonReactive.beforeLoadPromise = Ha();
    const _ = { ...Ba(n, s, !1), ...c.__routeContext },
      { search: x, params: A, cause: j } = c,
      E = Gr(n, i),
      z = {
        search: x,
        abortController: m,
        params: A,
        preload: E,
        context: _,
        location: n.location,
        navigate: (G) => n.router.navigate({ ...G, _fromLocation: n.location }),
        buildLocation: n.router.buildLocation,
        cause: E ? "preload" : j,
        matches: n.matches,
        routeId: r.id,
        ...n.router.options.additionalContext,
      },
      B = (G) => {
        if (G === void 0) {
          n.router.batch(() => {
            (b(), v());
          });
          return;
        }
        ((xe(G) || ne(G)) && (b(), Hi(n, s, G)),
          n.router.batch(() => {
            (b(), n.updateMatch(i, (K) => ({ ...K, __beforeLoadContext: G })), v());
          }));
      };
    let X;
    try {
      if (((X = r.options.beforeLoad(z)), ki(X)))
        return (
          b(),
          X.catch((G) => {
            Hi(n, s, G);
          }).then(B)
        );
    } catch (G) {
      (b(), Hi(n, s, G));
    }
    B(X);
  },
  Kb = (n, i) => {
    const { id: s, routeId: r } = n.matches[i],
      c = n.router.looseRoutesById[r],
      f = () => y(),
      h = () => Xb(n, s, i, c),
      y = () => {
        if (Sy(n, s)) return;
        const m = kb(n, s, c);
        return ki(m) ? m.then(h) : h();
      };
    return f();
  },
  Zb = (n, i, s) => {
    const r = n.router.getMatch(i);
    if (!r || (!s.options.head && !s.options.scripts && !s.options.headers)) return;
    const c = {
      ssr: n.router.options.ssr,
      matches: n.matches,
      match: r,
      params: r.params,
      loaderData: r.loaderData,
    };
    return Promise.all([s.options.head?.(c), s.options.scripts?.(c), s.options.headers?.(c)]).then(
      ([f, h, y]) => ({
        meta: f?.meta,
        links: f?.links,
        headScripts: f?.scripts,
        headers: y,
        scripts: h,
        styles: f?.styles,
      }),
    );
  },
  xy = (n, i, s, r, c) => {
    const f = i[r - 1],
      { params: h, loaderDeps: y, abortController: m, cause: p } = n.router.getMatch(s),
      b = Ba(n, r),
      v = Gr(n, s);
    return {
      params: h,
      deps: y,
      preload: !!v,
      parentMatchPromise: f,
      abortController: m,
      context: b,
      location: n.location,
      navigate: (_) => n.router.navigate({ ..._, _fromLocation: n.location }),
      cause: v ? "preload" : p,
      route: c,
      ...n.router.options.additionalContext,
    };
  },
  bp = async (n, i, s, r, c) => {
    try {
      const f = n.router.getMatch(s);
      try {
        (!(oy ?? n.router.isServer) || f.ssr === !0) && Ki(c);
        const h = c.options.loader,
          y = typeof h == "function" ? h : h?.handler,
          m = y?.(xy(n, i, s, r, c)),
          p = !!y && ki(m);
        if (
          ((p ||
            c._lazyPromise ||
            c._componentsPromise ||
            c.options.head ||
            c.options.scripts ||
            c.options.headers ||
            f._nonReactive.minPendingPromise) &&
            n.updateMatch(s, (v) => ({ ...v, isFetching: "loader" })),
          y)
        ) {
          const v = p ? await m : m;
          (ra(n, n.router.getMatch(s), v),
            v !== void 0 && n.updateMatch(s, (_) => ({ ..._, loaderData: v })));
        }
        c._lazyPromise && (await c._lazyPromise);
        const b = f._nonReactive.minPendingPromise;
        (b && (await b),
          c._componentsPromise && (await c._componentsPromise),
          n.updateMatch(s, (v) => ({
            ...v,
            error: void 0,
            context: Ba(n, r),
            status: "success",
            isFetching: !1,
            updatedAt: Date.now(),
          })));
      } catch (h) {
        let y = h;
        if (y?.name === "AbortError") {
          if (f.abortController.signal.aborted) {
            (f._nonReactive.loaderPromise?.resolve(), (f._nonReactive.loaderPromise = void 0));
            return;
          }
          n.updateMatch(s, (p) => ({
            ...p,
            status: p.status === "pending" ? "success" : p.status,
            isFetching: !1,
            context: Ba(n, r),
          }));
          return;
        }
        const m = f._nonReactive.minPendingPromise;
        (m && (await m),
          ne(h) && (await c.options.notFoundComponent?.preload?.()),
          ra(n, n.router.getMatch(s), h));
        try {
          c.options.onError?.(h);
        } catch (p) {
          ((y = p), ra(n, n.router.getMatch(s), p));
        }
        (!xe(y) && !ne(y) && (await Ki(c, ["errorComponent"])),
          n.updateMatch(s, (p) => ({
            ...p,
            error: y,
            context: Ba(n, r),
            status: "error",
            isFetching: !1,
          })));
      }
    } catch (f) {
      const h = n.router.getMatch(s);
      (h && (h._nonReactive.loaderPromise = void 0), ra(n, h, f));
    }
  },
  Pb = async (n, i, s) => {
    async function r(x, A, j, E, z) {
      const B = Date.now() - A.updatedAt,
        X = x
          ? (z.options.preloadStaleTime ?? n.router.options.defaultPreloadStaleTime ?? 3e4)
          : (z.options.staleTime ?? n.router.options.defaultStaleTime ?? 0),
        G = z.options.shouldReload,
        K = typeof G == "function" ? G(xy(n, i, c, s, z)) : G,
        { status: J, invalid: Y } = E,
        Z = B >= X && (!!n.forceStaleReload || E.cause === "enter" || (j !== void 0 && j !== E.id));
      ((h = J === "success" && (Y || (K ?? Z))),
        (x && z.options.preload === !1) ||
          (h && !n.sync && b
            ? ((y = !0),
              (async () => {
                try {
                  await bp(n, i, c, s, z);
                  const I = n.router.getMatch(c);
                  (I._nonReactive.loaderPromise?.resolve(),
                    I._nonReactive.loadPromise?.resolve(),
                    (I._nonReactive.loaderPromise = void 0),
                    (I._nonReactive.loadPromise = void 0));
                } catch (I) {
                  xe(I) && (await n.router.navigate(I.options));
                }
              })())
            : J !== "success" || h
              ? await bp(n, i, c, s, z)
              : gp(n, c, s)));
    }
    const { id: c, routeId: f } = n.matches[s];
    let h = !1,
      y = !1;
    const m = n.router.looseRoutesById[f],
      p = m.options.loader,
      b =
        ((typeof p == "function" ? void 0 : p?.staleReloadMode) ??
          n.router.options.defaultStaleReloadMode) !== "blocking";
    if (Sy(n, c)) {
      if (!n.router.getMatch(c)) return n.matches[s];
      gp(n, c, s);
    } else {
      const x = n.router.getMatch(c),
        A = n.router.stores.matchesId.get()[s],
        j =
          ((A && n.router.stores.matchStores.get(A)) || null)?.routeId === f
            ? A
            : n.router.stores.matches.get().find((z) => z.routeId === f)?.id,
        E = Gr(n, c);
      if (x._nonReactive.loaderPromise) {
        if (x.status === "success" && !n.sync && !x.preload && b) return x;
        await x._nonReactive.loaderPromise;
        const z = n.router.getMatch(c),
          B = z._nonReactive.error || z.error;
        (B && ra(n, z, B), z.status === "pending" && (await r(E, x, j, z, m)));
      } else {
        const z = E && !n.router.stores.matchStores.has(c),
          B = n.router.getMatch(c);
        ((B._nonReactive.loaderPromise = Ha()),
          z !== B.preload && n.updateMatch(c, (X) => ({ ...X, preload: z })),
          await r(E, x, j, B, m));
      }
    }
    const v = n.router.getMatch(c);
    (y ||
      (v._nonReactive.loaderPromise?.resolve(),
      v._nonReactive.loadPromise?.resolve(),
      (v._nonReactive.loadPromise = void 0)),
      clearTimeout(v._nonReactive.pendingTimeout),
      (v._nonReactive.pendingTimeout = void 0),
      y || (v._nonReactive.loaderPromise = void 0),
      (v._nonReactive.dehydrated = void 0));
    const _ = y ? v.isFetching : !1;
    return _ !== v.isFetching || v.invalid !== !1
      ? (n.updateMatch(c, (x) => ({ ...x, isFetching: _, invalid: !1 })), n.router.getMatch(c))
      : v;
  };
async function Sp(n) {
  const i = n,
    s = [];
  Vb(i.router) && zc(i);
  let r;
  for (let _ = 0; _ < i.matches.length; _++) {
    try {
      const x = Kb(i, _);
      ki(x) && (await x);
    } catch (x) {
      if (xe(x)) throw x;
      if (ne(x)) r = x;
      else if (!i.preload) throw x;
      break;
    }
    if (i.serialError || i.firstBadMatchIndex != null) break;
  }
  const c = i.firstBadMatchIndex ?? i.matches.length,
    f = r && !i.preload ? vp(i, r) : void 0,
    h = r && i.preload ? 0 : f !== void 0 ? Math.min(f + 1, c) : c;
  let y, m;
  for (let _ = 0; _ < h; _++) s.push(Pb(i, s, _));
  try {
    await Promise.all(s);
  } catch {
    const _ = await Promise.allSettled(s);
    for (const x of _) {
      if (x.status !== "rejected") continue;
      const A = x.reason;
      if (xe(A)) throw A;
      ne(A) ? (y ??= A) : (m ??= A);
    }
    if (m !== void 0) throw m;
  }
  const p = y ?? (r && !i.preload ? r : void 0);
  let b = i.firstBadMatchIndex !== void 0 ? i.firstBadMatchIndex : i.matches.length - 1;
  if (!p && r && i.preload) return i.matches;
  if (p) {
    const _ = vp(i, p);
    _ === void 0 && Ee();
    const x = i.matches[_],
      A = i.router.looseRoutesById[x.routeId],
      j = i.router.options?.defaultNotFoundComponent;
    (!A.options.notFoundComponent && j && (A.options.notFoundComponent = j),
      (p.routeId = x.routeId));
    const E = x.routeId === i.router.routeTree.id;
    (i.updateMatch(x.id, (z) => ({
      ...z,
      ...(E
        ? { status: "success", globalNotFound: !0, error: void 0 }
        : { status: "notFound", error: p }),
      isFetching: !1,
    })),
      (b = _),
      await Ki(A, ["notFoundComponent"]));
  } else if (!i.preload) {
    const _ = i.matches[0];
    _.globalNotFound ||
      (i.router.getMatch(_.id)?.globalNotFound &&
        i.updateMatch(_.id, (x) => ({ ...x, globalNotFound: !1, error: void 0 })));
  }
  if (i.serialError && i.firstBadMatchIndex !== void 0) {
    const _ = i.router.looseRoutesById[i.matches[i.firstBadMatchIndex].routeId];
    await Ki(_, ["errorComponent"]);
  }
  for (let _ = 0; _ <= b; _++) {
    const { id: x, routeId: A } = i.matches[_],
      j = i.router.looseRoutesById[A];
    try {
      const E = Zb(i, x, j);
      if (E) {
        const z = await E;
        i.updateMatch(x, (B) => ({ ...B, ...z }));
      }
    } catch (E) {
      console.error(`Error executing head for route ${A}:`, E);
    }
  }
  const v = zc(i);
  if ((ki(v) && (await v), p)) throw p;
  if (i.serialError && !i.preload && !i.onReady) throw i.serialError;
  return i.matches;
}
function _p(n, i) {
  const s = i.map((r) => n.options[r]?.preload?.()).filter(Boolean);
  if (s.length !== 0) return Promise.all(s);
}
function Ki(n, i = Ar) {
  !n._lazyLoaded &&
    n._lazyPromise === void 0 &&
    (n.lazyFn
      ? (n._lazyPromise = n.lazyFn().then((r) => {
          const { id: c, ...f } = r.options;
          (Object.assign(n.options, f), (n._lazyLoaded = !0), (n._lazyPromise = void 0));
        }))
      : (n._lazyLoaded = !0));
  const s = () =>
    n._componentsLoaded
      ? void 0
      : i === Ar
        ? (() => {
            if (n._componentsPromise === void 0) {
              const r = _p(n, Ar);
              r
                ? (n._componentsPromise = r.then(() => {
                    ((n._componentsLoaded = !0), (n._componentsPromise = void 0));
                  }))
                : (n._componentsLoaded = !0);
            }
            return n._componentsPromise;
          })()
        : _p(n, i);
  return n._lazyPromise ? n._lazyPromise.then(s) : s();
}
function Ey(n) {
  for (const i of Ar) if (n.options[i]?.preload) return !0;
  return !1;
}
const Ar = ["component", "errorComponent", "pendingComponent", "notFoundComponent"];
function Jb(n) {
  return {
    input: ({ url: i }) => {
      for (const s of n) i = Oc(s, i);
      return i;
    },
    output: ({ url: i }) => {
      for (let s = n.length - 1; s >= 0; s--) i = Ry(n[s], i);
      return i;
    },
  };
}
function Fb(n) {
  const i = vy(n.basepath),
    s = `/${i}`,
    r = n.caseSensitive ? s : s.toLowerCase(),
    c = `${r}/`;
  return {
    input: ({ url: f }) => {
      const h = n.caseSensitive ? f.pathname : f.pathname.toLowerCase();
      return (
        h === r ? (f.pathname = "/") : h.startsWith(c) && (f.pathname = f.pathname.slice(s.length)),
        f
      );
    },
    output: ({ url: f }) => ((f.pathname = Tr(["/", i, f.pathname])), f),
  };
}
function Oc(n, i) {
  const s = n?.input?.({ url: i });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return i;
}
function Ry(n, i) {
  const s = n?.output?.({ url: i });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return i;
}
function Ib(n, i) {
  const { createMutableStore: s, createReadonlyStore: r, batch: c, init: f } = i,
    h = new Map(),
    y = new Map(),
    m = new Map(),
    p = s(n.status),
    b = s(n.loadedAt),
    v = s(n.isLoading),
    _ = s(n.isTransitioning),
    x = s(n.location),
    A = s(n.resolvedLocation),
    j = s(n.statusCode),
    E = s(n.redirect),
    z = s([]),
    B = s([]),
    X = s([]),
    G = r(() => gc(h, z.get())),
    K = r(() => gc(y, B.get())),
    J = r(() => gc(m, X.get())),
    Y = r(() => z.get()[0]),
    Z = r(() => z.get().some((P) => h.get(P)?.get().status === "pending")),
    I = r(() => ({
      locationHref: x.get().href,
      resolvedLocationHref: A.get()?.href,
      status: p.get(),
    })),
    ut = r(() => ({
      status: p.get(),
      loadedAt: b.get(),
      isLoading: v.get(),
      isTransitioning: _.get(),
      matches: G.get(),
      location: x.get(),
      resolvedLocation: A.get(),
      statusCode: j.get(),
      redirect: E.get(),
    })),
    st = Xi(64);
  function it(P) {
    let lt = st.get(P);
    return (
      lt ||
        ((lt = r(() => {
          const xt = z.get();
          for (const Rt of xt) {
            const w = h.get(Rt);
            if (w && w.routeId === P) return w.get();
          }
        })),
        st.set(P, lt)),
      lt
    );
  }
  const Wt = {
    status: p,
    loadedAt: b,
    isLoading: v,
    isTransitioning: _,
    location: x,
    resolvedLocation: A,
    statusCode: j,
    redirect: E,
    matchesId: z,
    pendingIds: B,
    cachedIds: X,
    matches: G,
    pendingMatches: K,
    cachedMatches: J,
    firstId: Y,
    hasPending: Z,
    matchRouteDeps: I,
    matchStores: h,
    pendingMatchStores: y,
    cachedMatchStores: m,
    __store: ut,
    getRouteMatchStore: it,
    setMatches: Ut,
    setPending: Gt,
    setCached: H,
  };
  (Ut(n.matches), f?.(Wt));
  function Ut(P) {
    bc(P, h, z, s, c);
  }
  function Gt(P) {
    bc(P, y, B, s, c);
  }
  function H(P) {
    bc(P, m, X, s, c);
  }
  return Wt;
}
function gc(n, i) {
  const s = [];
  for (const r of i) {
    const c = n.get(r);
    c && s.push(c.get());
  }
  return s;
}
function bc(n, i, s, r, c) {
  const f = n.map((y) => y.id),
    h = new Set(f);
  c(() => {
    for (const y of i.keys()) h.has(y) || i.delete(y);
    for (const y of n) {
      const m = i.get(y.id);
      if (!m) {
        const p = r(y);
        ((p.routeId = y.routeId), i.set(y.id, p));
        continue;
      }
      ((m.routeId = y.routeId), m.get() !== y && m.set(y));
    }
    Eb(s.get(), f) || s.set(f);
  });
}
var ua = "__TSR_index",
  xp = "popstate",
  Ep = "beforeunload";
function $b(n) {
  let i = n.getLocation();
  const s = new Set(),
    r = (h) => {
      ((i = n.getLocation()), s.forEach((y) => y({ location: i, action: h })));
    },
    c = (h) => {
      (n.notifyOnIndexChange ?? !0) ? r(h) : (i = n.getLocation());
    },
    f = async ({ task: h, navigateOpts: y, ...m }) => {
      if (y?.ignoreBlocker ?? !1) {
        h();
        return;
      }
      const p = n.getBlockers?.() ?? [],
        b = m.type === "PUSH" || m.type === "REPLACE";
      if (typeof document < "u" && p.length && b)
        for (const v of p) {
          const _ = Dr(m.path, m.state);
          if (await v.blockerFn({ currentLocation: i, nextLocation: _, action: m.type })) {
            n.onBlocked?.();
            return;
          }
        }
      h();
    };
  return {
    get location() {
      return i;
    },
    get length() {
      return n.getLength();
    },
    subscribers: s,
    subscribe: (h) => (
      s.add(h),
      () => {
        s.delete(h);
      }
    ),
    push: (h, y, m) => {
      const p = i.state[ua];
      ((y = Rp(p + 1, y)),
        f({
          task: () => {
            (n.pushState(h, y), r({ type: "PUSH" }));
          },
          navigateOpts: m,
          type: "PUSH",
          path: h,
          state: y,
        }));
    },
    replace: (h, y, m) => {
      const p = i.state[ua];
      ((y = Rp(p, y)),
        f({
          task: () => {
            (n.replaceState(h, y), r({ type: "REPLACE" }));
          },
          navigateOpts: m,
          type: "REPLACE",
          path: h,
          state: y,
        }));
    },
    go: (h, y) => {
      f({
        task: () => {
          (n.go(h), c({ type: "GO", index: h }));
        },
        navigateOpts: y,
        type: "GO",
      });
    },
    back: (h) => {
      f({
        task: () => {
          (n.back(h?.ignoreBlocker ?? !1), c({ type: "BACK" }));
        },
        navigateOpts: h,
        type: "BACK",
      });
    },
    forward: (h) => {
      f({
        task: () => {
          (n.forward(h?.ignoreBlocker ?? !1), c({ type: "FORWARD" }));
        },
        navigateOpts: h,
        type: "FORWARD",
      });
    },
    canGoBack: () => i.state[ua] !== 0,
    createHref: (h) => n.createHref(h),
    block: (h) => {
      if (!n.setBlockers) return () => {};
      const y = n.getBlockers?.() ?? [];
      return (
        n.setBlockers([...y, h]),
        () => {
          const m = n.getBlockers?.() ?? [];
          n.setBlockers?.(m.filter((p) => p !== h));
        }
      );
    },
    flush: () => n.flush?.(),
    destroy: () => n.destroy?.(),
    notify: r,
  };
}
function Rp(n, i) {
  i || (i = {});
  const s = Kc();
  return { ...i, key: s, __TSR_key: s, [ua]: n };
}
function Wb(n) {
  const i = typeof document < "u" ? window : void 0,
    s = i.history.pushState,
    r = i.history.replaceState;
  let c = [];
  const f = () => c,
    h = (Z) => (c = Z),
    y = (Z) => Z,
    m = () => Dr(`${i.location.pathname}${i.location.search}${i.location.hash}`, i.history.state);
  if (!i.history.state?.__TSR_key && !i.history.state?.key) {
    const Z = Kc();
    i.history.replaceState({ [ua]: 0, key: Z, __TSR_key: Z }, "");
  }
  let p = m(),
    b,
    v = !1,
    _ = !1,
    x = !1,
    A = !1;
  const j = () => p;
  let E, z;
  const B = () => {
      E &&
        ((Y._ignoreSubscribers = !0),
        (E.isPush ? i.history.pushState : i.history.replaceState)(E.state, "", E.href),
        (Y._ignoreSubscribers = !1),
        (E = void 0),
        (z = void 0),
        (b = void 0));
    },
    X = (Z, I, ut) => {
      const st = y(I);
      (z || (b = p),
        (p = Dr(I, ut)),
        (E = { href: st, state: ut, isPush: E?.isPush || Z === "push" }),
        z || (z = Promise.resolve().then(() => B())));
    },
    G = (Z) => {
      ((p = m()), Y.notify({ type: Z }));
    },
    K = async () => {
      if (_) {
        _ = !1;
        return;
      }
      const Z = m(),
        I = Z.state[ua] - p.state[ua],
        ut = I === 1,
        st = I === -1,
        it = (!ut && !st) || v;
      v = !1;
      const Wt = it ? "GO" : st ? "BACK" : "FORWARD",
        Ut = it ? { type: "GO", index: I } : { type: st ? "BACK" : "FORWARD" };
      if (x) x = !1;
      else {
        const Gt = f();
        if (typeof document < "u" && Gt.length) {
          for (const H of Gt)
            if (await H.blockerFn({ currentLocation: p, nextLocation: Z, action: Wt })) {
              ((_ = !0), i.history.go(1), Y.notify(Ut));
              return;
            }
        }
      }
      ((p = m()), Y.notify(Ut));
    },
    J = (Z) => {
      if (A) {
        A = !1;
        return;
      }
      let I = !1;
      const ut = f();
      if (typeof document < "u" && ut.length)
        for (const st of ut) {
          const it = st.enableBeforeUnload ?? !0;
          if (it === !0) {
            I = !0;
            break;
          }
          if (typeof it == "function" && it() === !0) {
            I = !0;
            break;
          }
        }
      if (I) return (Z.preventDefault(), (Z.returnValue = ""));
    },
    Y = $b({
      getLocation: j,
      getLength: () => i.history.length,
      pushState: (Z, I) => X("push", Z, I),
      replaceState: (Z, I) => X("replace", Z, I),
      back: (Z) => (Z && (x = !0), (A = !0), i.history.back()),
      forward: (Z) => {
        (Z && (x = !0), (A = !0), i.history.forward());
      },
      go: (Z) => {
        ((v = !0), i.history.go(Z));
      },
      createHref: (Z) => y(Z),
      flush: B,
      destroy: () => {
        ((i.history.pushState = s),
          (i.history.replaceState = r),
          i.removeEventListener(Ep, J, { capture: !0 }),
          i.removeEventListener(xp, K));
      },
      onBlocked: () => {
        b && p !== b && (p = b);
      },
      getBlockers: f,
      setBlockers: h,
      notifyOnIndexChange: !1,
    });
  return (
    i.addEventListener(Ep, J, { capture: !0 }),
    i.addEventListener(xp, K),
    (i.history.pushState = function (...Z) {
      const I = s.apply(i.history, Z);
      return (Y._ignoreSubscribers || G("PUSH"), I);
    }),
    (i.history.replaceState = function (...Z) {
      const I = r.apply(i.history, Z);
      return (Y._ignoreSubscribers || G("REPLACE"), I);
    }),
    Y
  );
}
function tS(n) {
  let i = n.replace(/[\x00-\x1f\x7f]/g, "");
  return (i.startsWith("//") && (i = "/" + i.replace(/^\/+/, "")), i);
}
function Dr(n, i) {
  const s = tS(n),
    r = s.indexOf("#"),
    c = s.indexOf("?"),
    f = Kc();
  return {
    href: s,
    pathname: s.substring(0, r > 0 ? (c > 0 ? Math.min(r, c) : r) : c > 0 ? c : s.length),
    hash: r > -1 ? s.substring(r) : "",
    search: c > -1 ? s.slice(c, r === -1 ? void 0 : r) : "",
    state: i || { [ua]: 0, key: f, __TSR_key: f },
  };
}
function Kc() {
  return (Math.random() + 1).toString(36).substring(7);
}
function eS(n) {
  return n instanceof Error ? { name: n.name, message: n.message } : { data: n };
}
function Ul(n, i) {
  const s = i,
    r = n;
  return {
    fromLocation: s,
    toLocation: r,
    pathChanged: s?.pathname !== r.pathname,
    hrefChanged: s?.href !== r.href,
    hashChanged: s?.hash !== r.hash,
  };
}
const Cc = new WeakMap();
var nS = class {
    constructor(n, i) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this.resetNextScroll = !0),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.isScrollRestoring = !1),
        (this.isScrollRestorationSetup = !1),
        (this.routeBranchCache = new WeakMap()),
        (this.startTransition = (s) => s()),
        (this.update = (s) => {
          const r = this.options,
            c = this.basepath ?? r?.basepath ?? "/",
            f = this.basepath === void 0,
            h = r?.rewrite;
          if (
            ((this.options = { ...r, ...s }),
            (this.isServer = this.options.isServer ?? typeof document > "u"),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = Ub(this.options.pathParamsAllowedCharacters)),
            (!this.history || (this.options.history && this.options.history !== this.history)) &&
              (this.options.history
                ? (this.history = this.options.history)
                : (this.history = Wb())),
            (this.origin = this.options.origin),
            this.origin ||
              (window?.origin && window.origin !== "null"
                ? (this.origin = window.origin)
                : (this.origin = "http://localhost")),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let b;
            ((this.resolvePathCache = Xi(1e3)), (b = this.buildRouteTree()), this.setRoutes(b));
          }
          if (!this.stores && this.latestLocation) {
            const b = this.getStoreConfig(this);
            ((this.batch = b.batch), (this.stores = Ib(lS(this.latestLocation), b)), pS(this));
          }
          let y = !1;
          const m = this.options.basepath ?? "/",
            p = this.options.rewrite;
          if (f || c !== m || h !== p) {
            this.basepath = m;
            const b = [],
              v = vy(m);
            (v && v !== "/" && b.push(Fb({ basepath: m })),
              p && b.push(p),
              (this.rewrite = b.length === 0 ? void 0 : b.length === 1 ? b[0] : Jb(b)),
              this.history && this.updateLatestLocation(),
              (y = !0));
          }
          (y && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < "u" &&
              "CSS" in window &&
              typeof window.CSS?.supports == "function" &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                "selector(:active-view-transition-type(a))",
              )));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
        }),
        (this.buildRouteTree = () => {
          const s = Ob(this.routeTree, this.options.caseSensitive, (r, c) => {
            r.init({ originalIndex: c });
          });
          return (this.options.routeMasks && Tb(this.options.routeMasks, s.processedTree), s);
        }),
        (this.subscribe = (s, r) => {
          const c = { eventType: s, fn: r };
          return (
            this.subscribers.add(c),
            () => {
              this.subscribers.delete(c);
            }
          );
        }),
        (this.emit = (s) => {
          this.subscribers.forEach((r) => {
            r.eventType === s.type && r.fn(s);
          });
        }),
        (this.parseLocation = (s, r) => {
          const c = ({ pathname: m, search: p, hash: b, href: v, state: _ }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(m)) {
                const z = this.options.parseSearch(p),
                  B = this.options.stringifySearch(z);
                return {
                  href: m + B + b,
                  publicHref: m + B + b,
                  pathname: Bi(m).path,
                  external: !1,
                  searchStr: B,
                  search: Ca(r?.search, z),
                  hash: Bi(b.slice(1)).path,
                  state: Da(r?.state, _),
                };
              }
              const x = new URL(v, this.origin),
                A = Oc(this.rewrite, x),
                j = this.options.parseSearch(A.search),
                E = this.options.stringifySearch(j);
              return (
                (A.search = E),
                {
                  href: A.href.replace(A.origin, ""),
                  publicHref: v,
                  pathname: Bi(A.pathname).path,
                  external: !!this.rewrite && A.origin !== this.origin,
                  searchStr: E,
                  search: Ca(r?.search, j),
                  hash: Bi(A.hash.slice(1)).path,
                  state: Da(r?.state, _),
                }
              );
            },
            f = c(s),
            { __tempLocation: h, __tempKey: y } = f.state;
          if (h && (!y || y === this.tempLocationKey)) {
            const m = c(h);
            return (
              (m.state.key = f.state.key),
              (m.state.__TSR_key = f.state.__TSR_key),
              delete m.state.__tempLocation,
              { ...m, maskedLocation: f }
            );
          }
          return f;
        }),
        (this.resolvePathWithBase = (s, r) =>
          Lb({
            base: s,
            to: r.includes("//") ? Xc(r) : r,
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (s, r, c) =>
          typeof s == "string"
            ? this.matchRoutesInternal({ pathname: s, search: r }, c)
            : this.matchRoutesInternal(s, r)),
        (this.getMatchedRoutes = (s) =>
          iS({ pathname: s, routesById: this.routesById, processedTree: this.processedTree })),
        (this.cancelMatch = (s) => {
          const r = this.getMatch(s);
          r &&
            (r.abortController.abort(),
            clearTimeout(r._nonReactive.pendingTimeout),
            (r._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          (this.stores.pendingIds.get().forEach((s) => {
            this.cancelMatch(s);
          }),
            this.stores.matchesId.get().forEach((s) => {
              if (this.stores.pendingMatchStores.has(s)) return;
              const r = this.stores.matchStores.get(s)?.get();
              r && (r.status === "pending" || r.isFetching === "loader") && this.cancelMatch(s);
            }));
        }),
        (this.buildLocation = (s) => {
          const r = (f = {}) => {
              const h = f._fromLocation || this.pendingBuiltLocation || this.latestLocation,
                y = this.matchRoutesLightweight(h);
              f.from;
              const m = f.unsafeRelative === "path" ? h.pathname : (f.from ?? y.fullPath),
                p = f.to ? `${f.to}` : void 0,
                b = y.search,
                v = Object.assign(Object.create(null), y.params),
                _ = p?.charCodeAt(0) === 47 ? "/" : this.resolvePathWithBase(m, "."),
                x = p ? this.resolvePathWithBase(_, p) : _,
                A =
                  f.params === !1 || f.params === null
                    ? Object.create(null)
                    : (f.params ?? !0) === !0
                      ? v
                      : Object.assign(v, ja(f.params, v)),
                j = this.routesByPath[An(x)];
              let E;
              if (j) E = this.getRouteBranch(j);
              else if (x.includes("$")) E = [];
              else {
                const st = this.getMatchedRoutes(x);
                ((E = st.matchedRoutes),
                  this.options.notFoundRoute &&
                    (!st.foundRoute || (st.foundRoute.path !== "/" && st.routeParams["**"])) &&
                    (E = [...E, this.options.notFoundRoute]));
              }
              if (E.length && fy(A))
                for (const st of E) {
                  const it = st.options.params?.stringify ?? st.options.stringifyParams;
                  if (it)
                    try {
                      Object.assign(A, it(A));
                    } catch {}
                }
              const z = s.leaveParams
                ? x
                : Bi(
                    pp({
                      path: x,
                      params: A,
                      decoder: this.pathParamsDecoder,
                      server: this.isServer,
                    }).interpolatedPath,
                  ).path;
              let B = b;
              if (s._includeValidateSearch && this.options.search?.strict) {
                const st = {};
                (E.forEach((it) => {
                  if (it.options.validateSearch)
                    try {
                      Object.assign(st, Mr(it.options.validateSearch, { ...st, ...B }));
                    } catch {}
                }),
                  (B = st));
              }
              ((B = sS({
                search: B,
                dest: f,
                destRoutes: E,
                _includeValidateSearch: s._includeValidateSearch,
              })),
                (B = Ca(b, B)));
              const X = this.options.stringifySearch(B),
                G = f.hash === !0 ? h.hash : f.hash ? ja(f.hash, h.hash) : void 0,
                K = G ? `#${G}` : "";
              let J = f.state === !0 ? h.state : f.state ? ja(f.state, h.state) : {};
              J = Da(h.state, J);
              const Y = `${z}${X}${K}`;
              let Z,
                I,
                ut = !1;
              if (this.rewrite) {
                const st = new URL(Y, this.origin),
                  it = Ry(this.rewrite, st);
                ((Z = st.href.replace(st.origin, "")),
                  it.origin !== this.origin
                    ? ((I = it.href), (ut = !0))
                    : (I = it.pathname + it.search + it.hash));
              } else ((Z = xb(Y)), (I = Z));
              return {
                publicHref: I,
                href: Z,
                pathname: z,
                search: B,
                searchStr: X,
                state: J,
                hash: G ?? "",
                external: ut,
                unmaskOnReload: f.unmaskOnReload,
              };
            },
            c = (f = {}, h) => {
              const y = r(f);
              let m = h ? r(h) : void 0;
              if (!m) {
                const p = Object.create(null);
                if (this.options.routeMasks) {
                  const b = Ab(y.pathname, this.processedTree);
                  if (b) {
                    Object.assign(p, b.rawParams);
                    const { from: v, params: _, ...x } = b.route,
                      A =
                        _ === !1 || _ === null
                          ? Object.create(null)
                          : (_ ?? !0) === !0
                            ? p
                            : Object.assign(p, ja(_, p));
                    ((h = { from: s.from, ...x, params: A }), (m = r(h)));
                  }
                }
              }
              return (m && (y.maskedLocation = m), y);
            };
          return s.mask ? c(s, { from: s.from, ...s.mask }) : c(s);
        }),
        (this.commitLocation = async ({ viewTransition: s, ignoreBlocker: r, ...c }) => {
          let f;
          const h = () => {
              const p = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
              p.forEach((v) => {
                c.state[v] = this.latestLocation.state[v];
              });
              const b = he(c.state, this.latestLocation.state);
              return (
                p.forEach((v) => {
                  delete c.state[v];
                }),
                b
              );
            },
            y = An(this.latestLocation.href) === An(c.href);
          let m = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = Ha(() => {
              (m?.resolve(), (m = void 0));
            })),
            y && h())
          )
            this.load();
          else {
            let { maskedLocation: p, hashScrollIntoView: b, ...v } = c;
            (p &&
              ((v = {
                ...p,
                state: {
                  ...p.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...v,
                    search: v.searchStr,
                    state: {
                      ...v.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (v.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (v.state.__tempKey = this.tempLocationKey)),
              (v.state.__hashScrollIntoViewOptions =
                b ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = s),
              (f = c.replace ? "REPLACE" : "PUSH"),
              this.history[f === "REPLACE" ? "replace" : "push"](v.publicHref, v.state, {
                ignoreBlocker: r,
              }));
          }
          return (
            (this.resetNextScroll = c.resetScroll ?? !0),
            this.history.subscribers.size || this.load(f ? { action: { type: f } } : void 0),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: s,
          resetScroll: r,
          hashScrollIntoView: c,
          viewTransition: f,
          ignoreBlocker: h,
          href: y,
          ...m
        } = {}) => {
          if (y) {
            const v = this.history.location.state.__TSR_index,
              _ = Dr(y, { __TSR_index: s ? v : v + 1 }),
              x = new URL(_.pathname, this.origin);
            ((m.to = Oc(this.rewrite, x).pathname),
              (m.search = this.options.parseSearch(_.search)),
              (m.hash = _.hash.slice(1)));
          }
          const p = this.buildLocation({ ...m, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = p;
          const b = this.commitLocation({
            ...p,
            viewTransition: f,
            replace: s,
            resetScroll: r,
            hashScrollIntoView: c,
            ignoreBlocker: h,
          });
          return (
            Promise.resolve().then(() => {
              this.pendingBuiltLocation === p && (this.pendingBuiltLocation = void 0);
            }),
            b
          );
        }),
        (this.navigate = async ({ to: s, reloadDocument: r, href: c, publicHref: f, ...h }) => {
          let y = !1;
          if (c)
            try {
              (new URL(`${c}`), (y = !0));
            } catch {}
          if ((y && !r && (r = !0), r)) {
            if (s !== void 0 || !c) {
              const p = this.buildLocation({ to: s, ...h });
              ((c = c ?? p.publicHref), (f = f ?? p.publicHref));
            }
            const m = !y && f ? f : c;
            if (Cr(m, this.protocolAllowlist)) return Promise.resolve();
            if (!h.ignoreBlocker) {
              const p = this.history.getBlockers?.() ?? [];
              for (const b of p)
                if (
                  b?.blockerFn &&
                  (await b.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: "PUSH",
                  }))
                )
                  return Promise.resolve();
            }
            return (
              h.replace ? window.location.replace(m) : (window.location.href = m),
              Promise.resolve()
            );
          }
          return this.buildAndCommitLocation({ ...h, href: c, to: s, _isNavigate: !0 });
        }),
        (this.beforeLoad = () => {
          (this.cancelMatches(), this.updateLatestLocation());
          const s = this.matchRoutes(this.latestLocation),
            r = this.stores.cachedMatches.get().filter((c) => !s.some((f) => f.id === c.id));
          this.batch(() => {
            (this.stores.status.set("pending"),
              this.stores.statusCode.set(200),
              this.stores.isLoading.set(!0),
              this.stores.location.set(this.latestLocation),
              this.stores.setPending(s),
              this.stores.setCached(r));
          });
        }),
        (this.load = async (s) => {
          const r = s?.action?.type;
          let c, f, h;
          const y = this.stores.resolvedLocation.get() ?? this.stores.location.get();
          for (
            h = new Promise((p) => {
              this.startTransition(async () => {
                try {
                  (this.beforeLoad(),
                    r ? Cc.set(this.latestLocation, r) : Cc.delete(this.latestLocation));
                  const b = this.latestLocation,
                    v = Ul(b, this.stores.resolvedLocation.get());
                  (this.stores.redirect.get() || this.emit({ type: "onBeforeNavigate", ...v }),
                    this.emit({ type: "onBeforeLoad", ...v }),
                    await Sp({
                      router: this,
                      sync: s?.sync,
                      forceStaleReload: y.href === b.href,
                      matches: this.stores.pendingMatches.get(),
                      location: b,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            let _ = null,
                              x = null,
                              A = null,
                              j = null;
                            this.batch(() => {
                              const E = this.stores.pendingMatches.get(),
                                z = E.length,
                                B = this.stores.matches.get();
                              _ = z
                                ? B.filter((K) => !this.stores.pendingMatchStores.has(K.id))
                                : null;
                              const X = new Set();
                              for (const K of this.stores.pendingMatchStores.values())
                                K.routeId && X.add(K.routeId);
                              const G = new Set();
                              for (const K of this.stores.matchStores.values())
                                K.routeId && G.add(K.routeId);
                              ((x = z ? B.filter((K) => !X.has(K.routeId)) : null),
                                (A = z ? E.filter((K) => !G.has(K.routeId)) : null),
                                (j = z ? E.filter((K) => G.has(K.routeId)) : B),
                                this.stores.isLoading.set(!1),
                                this.stores.loadedAt.set(Date.now()),
                                z &&
                                  (this.stores.setMatches(E),
                                  this.stores.setPending([]),
                                  this.stores.setCached([
                                    ...this.stores.cachedMatches.get(),
                                    ..._.filter(
                                      (K) =>
                                        K.status !== "error" &&
                                        K.status !== "notFound" &&
                                        K.status !== "redirected",
                                    ),
                                  ]),
                                  this.clearExpiredCache()));
                            });
                            for (const [E, z] of [
                              [x, "onLeave"],
                              [A, "onEnter"],
                              [j, "onStay"],
                            ])
                              if (E)
                                for (const B of E) this.looseRoutesById[B.routeId].options[z]?.(B);
                          });
                        });
                      },
                    }));
                } catch (b) {
                  xe(b)
                    ? ((c = b), this.navigate({ ...c.options, replace: !0, ignoreBlocker: !0 }))
                    : ne(b) && (f = b);
                  const v = c
                    ? c.status
                    : f
                      ? 404
                      : this.stores.matches.get().some((_) => _.status === "error")
                        ? 500
                        : 200;
                  this.batch(() => {
                    (this.stores.statusCode.set(v), this.stores.redirect.set(c));
                  });
                }
                (this.latestLoadPromise === h &&
                  (this.commitLocationPromise?.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  p());
              });
            }),
              this.latestLoadPromise = h,
              await h;
            this.latestLoadPromise && h !== this.latestLoadPromise;
          )
            await this.latestLoadPromise;
          let m;
          (this.hasNotFoundMatch()
            ? (m = 404)
            : this.stores.matches.get().some((p) => p.status === "error") && (m = 500),
            m !== void 0 && this.stores.statusCode.set(m));
        }),
        (this.startViewTransition = (s) => {
          const r = this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            r &&
              typeof document < "u" &&
              "startViewTransition" in document &&
              typeof document.startViewTransition == "function")
          ) {
            let c;
            if (typeof r == "object" && this.isViewTransitionTypesSupported) {
              const f = this.latestLocation,
                h = this.stores.resolvedLocation.get(),
                y = typeof r.types == "function" ? r.types(Ul(f, h)) : r.types;
              if (y === !1) {
                s();
                return;
              }
              c = { update: s, types: y };
            } else c = s;
            document.startViewTransition(c);
          } else s();
        }),
        (this.updateMatch = (s, r) => {
          this.startTransition(() => {
            const c = this.stores.pendingMatchStores.get(s);
            if (c) {
              c.set(r);
              return;
            }
            const f = this.stores.matchStores.get(s);
            if (f) {
              f.set(r);
              return;
            }
            const h = this.stores.cachedMatchStores.get(s);
            if (h) {
              const y = r(h.get());
              y.status === "redirected"
                ? this.stores.cachedMatchStores.delete(s) &&
                  this.stores.cachedIds.set((m) => m.filter((p) => p !== s))
                : h.set(y);
            }
          });
        }),
        (this.getMatch = (s) =>
          this.stores.cachedMatchStores.get(s)?.get() ??
          this.stores.pendingMatchStores.get(s)?.get() ??
          this.stores.matchStores.get(s)?.get()),
        (this.invalidate = (s) => {
          const r = (c) =>
            (s?.filter?.(c) ?? !0)
              ? {
                  ...c,
                  invalid: !0,
                  ...(s?.forcePending || c.status === "error" || c.status === "notFound"
                    ? { status: "pending", error: void 0 }
                    : void 0),
                }
              : c;
          return (
            this.batch(() => {
              (this.stores.setMatches(this.stores.matches.get().map(r)),
                this.stores.setCached(this.stores.cachedMatches.get().map(r)),
                this.stores.setPending(this.stores.pendingMatches.get().map(r)));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: s?.sync })
          );
        }),
        (this.getParsedLocationHref = (s) => s.publicHref || "/"),
        (this.resolveRedirect = (s) => {
          const r = s.headers.get("Location");
          if (!s.options.href || s.options._builtLocation) {
            const c = s.options._builtLocation ?? this.buildLocation(s.options),
              f = this.getParsedLocationHref(c);
            ((s.options.href = f), s.headers.set("Location", f));
          } else if (r)
            try {
              const c = new URL(r);
              if (this.origin && c.origin === this.origin) {
                const f = c.pathname + c.search + c.hash;
                ((s.options.href = f), s.headers.set("Location", f));
              }
            } catch {}
          if (
            s.options.href &&
            !s.options._builtLocation &&
            Cr(s.options.href, this.protocolAllowlist)
          )
            throw new Error("Redirect blocked: unsafe protocol");
          return (s.headers.get("Location") || s.headers.set("Location", s.options.href), s);
        }),
        (this.clearCache = (s) => {
          const r = s?.filter;
          r !== void 0
            ? this.stores.setCached(this.stores.cachedMatches.get().filter((c) => !r(c)))
            : this.stores.setCached([]);
        }),
        (this.clearExpiredCache = () => {
          const s = Date.now(),
            r = (c) => {
              const f = this.looseRoutesById[c.routeId];
              if (!f.options.loader) return !0;
              const h =
                (c.preload
                  ? (f.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
                  : (f.options.gcTime ?? this.options.defaultGcTime)) ?? 300 * 1e3;
              return c.status === "error" ? !0 : s - c.updatedAt >= h;
            };
          this.clearCache({ filter: r });
        }),
        (this.loadRouteChunk = Ki),
        (this.preloadRoute = async (s) => {
          const r = s._builtLocation ?? this.buildLocation(s);
          let c = this.matchRoutes(r, { throwOnError: !0, preload: !0, dest: s });
          const f = new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()]),
            h = new Set([...f, ...this.stores.cachedIds.get()]),
            y = c.filter((m) => !h.has(m.id));
          if (y.length) {
            const m = this.stores.cachedMatches.get();
            this.stores.setCached([...m, ...y]);
          }
          try {
            return (
              (c = await Sp({
                router: this,
                matches: c,
                location: r,
                preload: !0,
                updateMatch: (m, p) => {
                  f.has(m) ? (c = c.map((b) => (b.id === m ? p(b) : b))) : this.updateMatch(m, p);
                },
              })),
              c
            );
          } catch (m) {
            if (xe(m))
              return m.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...m.options, _fromLocation: r });
            ne(m) || console.error(m);
            return;
          }
        }),
        (this.matchRoute = (s, r) => {
          const c = {
              ...s,
              to: s.to ? this.resolvePathWithBase(s.from || "", s.to) : void 0,
              params: s.params || {},
              leaveParams: !0,
            },
            f = this.buildLocation(c);
          if (r?.pending && this.stores.status.get() !== "pending") return !1;
          const h = (r?.pending === void 0 ? !this.stores.isLoading.get() : r.pending)
              ? this.latestLocation
              : this.stores.resolvedLocation.get() || this.stores.location.get(),
            y = Mb(
              f.pathname,
              r?.caseSensitive ?? !1,
              r?.fuzzy ?? !1,
              h.pathname,
              this.processedTree,
            );
          return !y || (s.params && !he(y.rawParams, s.params, { partial: !0 }))
            ? !1
            : (r?.includeSearch ?? !0)
              ? he(h.search, f.search, { partial: !0 })
                ? y.rawParams
                : !1
              : y.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.matches.get().some((s) => s.status === "notFound" || s.globalNotFound)),
        (this.getStoreConfig = i),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...n,
          caseSensitive: n.caseSensitive ?? !1,
          notFoundMode: n.notFoundMode ?? "fuzzy",
          stringifySearch: n.stringifySearch ?? qb,
          parseSearch: n.parseSearch ?? Hb,
          protocolAllowlist: n.protocolAllowlist ?? gb,
        }),
        typeof document < "u" && (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: n, routesByPath: i, processedTree: s }) {
      ((this.routesById = n), (this.routesByPath = i), (this.processedTree = s));
      const r = this.options.notFoundRoute;
      r && (r.init({ originalIndex: 99999999999 }), (this.routesById[r.id] = r));
    }
    getRouteBranch(n) {
      let i = this.routeBranchCache.get(n);
      return (i || ((i = py(n)), this.routeBranchCache.set(n, i)), i);
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(n) {
      return n?.id
        ? (n.context ?? this.options.context ?? void 0)
        : (this.options.context ?? void 0);
    }
    matchRoutesInternal(n, i) {
      const s = this.getMatchedRoutes(n.pathname),
        { foundRoute: r, routeParams: c } = s;
      let { matchedRoutes: f } = s,
        h = !1;
      (r ? r.path !== "/" && c["**"] : An(n.pathname)) &&
        (this.options.notFoundRoute ? (f = [...f, this.options.notFoundRoute]) : (h = !0));
      const y = h ? uS(this.options.notFoundMode, f) : void 0,
        m = new Array(f.length),
        p = new Map();
      for (const b of this.stores.matchStores.values()) b.routeId && p.set(b.routeId, b.get());
      for (let b = 0; b < f.length; b++) {
        const v = f[b],
          _ = m[b - 1];
        let x, A, j;
        {
          const it = _?.search ?? n.search,
            Wt = _?._strictSearch ?? void 0;
          try {
            const Ut = Mr(v.options.validateSearch, { ...it }) ?? void 0;
            ((x = { ...it, ...Ut }), (A = { ...Wt, ...Ut }), (j = void 0));
          } catch (Ut) {
            let Gt = Ut;
            if ((Ut instanceof Nr || (Gt = new Nr(Ut.message, { cause: Ut })), i?.throwOnError))
              throw Gt;
            ((x = it), (A = {}), (j = Gt));
          }
        }
        const E = v.options.loaderDeps?.({ search: x }) ?? "",
          z = E ? JSON.stringify(E) : "",
          { interpolatedPath: B, usedParams: X } = pp({
            path: v.fullPath,
            params: c,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          G = v.id + B + z,
          K = this.getMatch(G),
          J = p.get(v.id),
          Y = K?._strictParams ?? X;
        let Z;
        if (!K)
          try {
            Tp(v, Y);
          } catch (it) {
            if (
              (ne(it) || xe(it) ? (Z = it) : (Z = new aS(it.message, { cause: it })),
              i?.throwOnError)
            )
              throw Z;
          }
        Object.assign(c, Y);
        const I = J ? "stay" : "enter";
        let ut;
        if (K)
          ut = {
            ...K,
            cause: I,
            params: J?.params ?? c,
            _strictParams: Y,
            search: Ca(J ? J.search : K.search, x),
            _strictSearch: A,
          };
        else {
          const it =
            v.options.loader || v.options.beforeLoad || v.lazyFn || Ey(v) ? "pending" : "success";
          ut = {
            id: G,
            ssr: v.options.ssr,
            index: b,
            routeId: v.id,
            params: J?.params ?? c,
            _strictParams: Y,
            pathname: B,
            updatedAt: Date.now(),
            search: J ? Ca(J.search, x) : x,
            _strictSearch: A,
            searchError: void 0,
            status: it,
            isFetching: !1,
            error: void 0,
            paramsError: Z,
            __routeContext: void 0,
            _nonReactive: { loadPromise: Ha() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: I,
            loaderDeps: J ? Da(J.loaderDeps, E) : E,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: v.options.staticData || {},
            fullPath: v.fullPath,
          };
        }
        (i?.preload || (ut.globalNotFound = y === v.id), (ut.searchError = j));
        const st = this.getParentContext(_);
        ((ut.context = { ...st, ...ut.__routeContext, ...ut.__beforeLoadContext }), (m[b] = ut));
      }
      for (let b = 0; b < m.length; b++) {
        const v = m[b],
          _ = this.looseRoutesById[v.routeId],
          x = this.getMatch(v.id),
          A = p.get(v.routeId);
        if (((v.params = A ? Ca(A.params, c) : c), !x)) {
          const j = m[b - 1],
            E = this.getParentContext(j);
          if (_.options.context) {
            const z = {
              deps: v.loaderDeps,
              params: v.params,
              context: E ?? {},
              location: n,
              navigate: (B) => this.navigate({ ...B, _fromLocation: n }),
              buildLocation: this.buildLocation,
              cause: v.cause,
              abortController: v.abortController,
              preload: !!v.preload,
              matches: m,
              routeId: _.id,
            };
            v.__routeContext = _.options.context(z) ?? void 0;
          }
          v.context = { ...E, ...v.__routeContext, ...v.__beforeLoadContext };
        }
      }
      return m;
    }
    matchRoutesLightweight(n) {
      const { matchedRoutes: i, routeParams: s } = this.getMatchedRoutes(n.pathname),
        r = Vi(i),
        c = { ...n.search };
      for (const p of i)
        try {
          Object.assign(c, Mr(p.options.validateSearch, c));
        } catch {}
      const f = Vi(this.stores.matchesId.get()),
        h = f && this.stores.matchStores.get(f)?.get(),
        y = h && h.routeId === r.id && h.pathname === n.pathname;
      let m;
      if (y) m = h.params;
      else {
        const p = Object.assign(Object.create(null), s);
        for (const b of i)
          try {
            Tp(b, p);
          } catch {}
        m = p;
      }
      return { matchedRoutes: i, fullPath: r.fullPath, search: c, params: m };
    }
  },
  Nr = class extends Error {},
  aS = class extends Error {};
function lS(n) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: void 0,
    location: n,
    matches: [],
    statusCode: 200,
  };
}
function Mr(n, i) {
  if (n == null) return {};
  if ("~standard" in n) {
    const s = n["~standard"].validate(i);
    if (s instanceof Promise) throw new Nr("Async validation not supported");
    if (s.issues) throw new Nr(JSON.stringify(s.issues, void 0, 2), { cause: s });
    return s.value;
  }
  return "parse" in n ? n.parse(i) : typeof n == "function" ? n(i) : {};
}
function iS({ pathname: n, routesById: i, processedTree: s }) {
  const r = Object.create(null),
    c = An(n);
  let f;
  const h = wb(c, s, !0);
  return (
    h && ((f = h.route), Object.assign(r, h.rawParams)),
    { matchedRoutes: h?.branch || [i.__root__], routeParams: r, foundRoute: f }
  );
}
function sS({ search: n, dest: i, destRoutes: s, _includeValidateSearch: r }) {
  return rS(s)(n, i, r ?? !1);
}
function rS(n) {
  const i = { dest: null, _includeValidateSearch: !1, middlewares: [] };
  for (const c of n) {
    if ("search" in c.options)
      c.options.search?.middlewares && i.middlewares.push(...c.options.search.middlewares);
    else if (c.options.preSearchFilters || c.options.postSearchFilters) {
      const f = ({ search: h, next: y }) => {
        let m = h;
        "preSearchFilters" in c.options &&
          c.options.preSearchFilters &&
          (m = c.options.preSearchFilters.reduce((b, v) => v(b), h));
        const p = y(m);
        return "postSearchFilters" in c.options && c.options.postSearchFilters
          ? c.options.postSearchFilters.reduce((b, v) => v(b), p)
          : p;
      };
      i.middlewares.push(f);
    }
    if (c.options.validateSearch) {
      const f = ({ search: h, next: y }) => {
        const m = y(h);
        if (!i._includeValidateSearch) return m;
        try {
          return { ...m, ...(Mr(c.options.validateSearch, m) ?? void 0) };
        } catch {
          return m;
        }
      };
      i.middlewares.push(f);
    }
  }
  const s = ({ search: c }) => {
    const f = i.dest;
    return f.search ? (f.search === !0 ? c : ja(f.search, c)) : {};
  };
  i.middlewares.push(s);
  const r = (c, f, h) => {
    if (c >= h.length) return f;
    const y = h[c];
    return y({ search: f, next: (p) => r(c + 1, p, h) });
  };
  return function (f, h, y) {
    return ((i.dest = h), (i._includeValidateSearch = y), r(0, f, i.middlewares));
  };
}
function uS(n, i) {
  if (n !== "root")
    for (let s = i.length - 1; s >= 0; s--) {
      const r = i[s];
      if (r.children) return r.id;
    }
  return Ua;
}
function Tp(n, i) {
  const s = n.options.params?.parse ?? n.options.parseParams;
  if (s) {
    const r = s(i);
    if (r === !1) throw new Error("Route params.parse returned false for a matched route");
    Object.assign(i, r);
  }
}
function oS() {
  try {
    return sessionStorage;
  } catch {
    return;
  }
}
const cS = "tsr-scroll-restoration-v1_3",
  Ty = oS();
function fS() {
  try {
    return JSON.parse(Ty?.getItem("tsr-scroll-restoration-v1_3") || "{}");
  } catch {
    return {};
  }
}
function dS() {
  try {
    Ty?.setItem(cS, JSON.stringify(Cl));
  } catch {}
}
const Cl = fS(),
  Ap = "data-scroll-restoration-id",
  hS = (n) => n.state.__TSR_key || n.href;
function mS(n) {
  const i = n.getAttribute(Ap);
  if (i) return `[${Ap}="${i}"]`;
  let s = "",
    r = n,
    c;
  for (; (c = r.parentNode); ) {
    let f = 1,
      h = r;
    for (; (h = h.previousElementSibling); ) f++;
    const y = `${r.localName}:nth-child(${f})`;
    ((s = s ? `${y} > ${s}` : y), (r = c));
  }
  return s;
}
let Sr = !1;
const jl = "window";
function jc(n) {
  try {
    return typeof n == "function" ? n() : document.querySelector(n);
  } catch {}
}
function Mp(n) {
  const i = [];
  for (const s of n) {
    if (s === jl) continue;
    const r = jc(s);
    r && i.push(r);
  }
  return i;
}
function pS(n, i) {
  if ((n.options.scrollRestoration && (n.isScrollRestoring = !0), n.isScrollRestorationSetup))
    return;
  ((n.isScrollRestorationSetup = !0), (Sr = !1));
  const s = n.options.getScrollRestorationKey || hS,
    r = new Map(),
    c = (y, m, p) => {
      const b = r.get(y) || {};
      ((b.scrollX = m), (b.scrollY = p), r.set(y, b));
    };
  history.scrollRestoration = "manual";
  const f = (y) => {
      if (!(Sr || !n.isScrollRestoring))
        if (y.target === document) c(jl, scrollX, scrollY);
        else {
          const m = y.target;
          c(m, m.scrollLeft, m.scrollTop);
        }
    },
    h = (y) => {
      if (!n.isScrollRestoring) return;
      const m = (Cl[y] ||= {});
      for (const [p, b] of r) p === jl ? (m[jl] = b) : p.isConnected && (m[mS(p)] = b);
    };
  (document.addEventListener("scroll", f, !0),
    n.subscribe("onBeforeLoad", (y) => {
      (y.fromLocation && h(s(y.fromLocation)), r.clear());
    }),
    addEventListener("pagehide", () => {
      (h(s(n.stores.resolvedLocation.get() ?? n.stores.location.get())), dS());
    }),
    n.subscribe("onRendered", (y) => {
      const m = n.options.scrollRestorationBehavior,
        p = n.options.scrollToTopSelectors,
        b = n.resetNextScroll;
      let v;
      if (
        (r.clear(),
        b || (n.resetNextScroll = !0),
        typeof n.options.scrollRestoration == "function" &&
          !n.options.scrollRestoration({ location: n.latestLocation }))
      )
        return;
      const _ = s(y.toLocation),
        x = y.fromLocation && s(y.fromLocation);
      if (n.isScrollRestoring && x && x !== _) {
        const A = Cl[x];
        if (A) {
          let j = Cl[_];
          for (const E in A) {
            if (E === jl) {
              if (b) continue;
            } else {
              const z = jc(E);
              if (!z || (b && p && ((v ??= Mp(p)), v.includes(z)))) continue;
            }
            (j || (j = Cl[_] = {}), (j[E] ??= A[E]));
          }
        }
      }
      Sr = !0;
      try {
        const A = y.toLocation.hash,
          j = y.toLocation.state.__hashScrollIntoViewOptions ?? !0;
        let E = !1;
        if (b) {
          const z = Cc.get(y.toLocation),
            B = A && j && (z === "PUSH" || z === "REPLACE"),
            X = n.isScrollRestoring ? Cl[_] : void 0;
          if (X)
            for (const G in X) {
              const { scrollX: K, scrollY: J } = X[G];
              if (G === jl) {
                if (B) continue;
                (scrollTo({ top: J, left: K, behavior: m }), (E = !0));
              } else {
                const Y = jc(G);
                Y && ((Y.scrollLeft = K), (Y.scrollTop = J));
              }
            }
          if (!E && !A) {
            const G = { top: 0, left: 0, behavior: m };
            if ((scrollTo(G), p)) {
              v ??= Mp(p);
              for (const K of v) K.scrollTo(G);
            }
          }
        }
        !E && A && j && document.getElementById(A)?.scrollIntoView(j);
      } finally {
        Sr = !1;
      }
    }));
}
const en = Symbol.for("TSR_DEFERRED_PROMISE");
function yS(n, i) {
  const s = n;
  return (
    s[en] ||
      ((s[en] = { status: "pending" }),
      s
        .then((r) => {
          ((s[en].status = "success"), (s[en].data = r));
        })
        .catch((r) => {
          ((s[en].status = "error"), (s[en].error = { data: eS(r), __isServerError: !0 }));
        })),
    s
  );
}
const vS = "Error preloading route! ☝️";
function Ay(n, i) {
  if (n) return typeof n == "string" ? n : n[i];
}
function gS(n) {
  return n?.scriptFormat ?? "module";
}
function bS(n, i, s) {
  const r = SS(i),
    c = Ay(s, "script") ?? r.crossOrigin;
  return {
    ...(gS(n) === "iife" ? { rel: "preload", as: "script" } : { rel: "modulepreload" }),
    href: r.href,
    ...(c ? { crossOrigin: c } : {}),
  };
}
function SS(n) {
  return typeof n == "string" ? { href: n, crossOrigin: void 0 } : n;
}
function _r(n, i) {
  if (i.length === 0) return;
  if (i.length === 1) {
    n.push(i[0]);
    return;
  }
  const s = new Set();
  for (const r of i) {
    const c = JSON.stringify(r);
    s.has(c) || (s.add(c), n.push(r));
  }
}
function _S(n) {
  return typeof n == "string" ? { href: n, crossOrigin: void 0 } : n;
}
var My = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(n) {
      if (
        ((this.init = (i) => {
          this.originalIndex = i.originalIndex;
          const s = this.options,
            r = !s?.path && !s?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            r ? (this._path = Ua) : this.parentRoute || Ee());
          let c = r ? Ua : s?.path;
          c && c !== "/" && (c = yy(c));
          const f = s?.id || c;
          let h = r ? Ua : Tr([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, f]);
          (c === "__root__" && (c = "/"), h !== "__root__" && (h = Tr(["/", h])));
          const y = h === "__root__" ? "/" : Tr([this.parentRoute.fullPath, c]);
          ((this._path = c), (this._id = h), (this._fullPath = y), (this._to = An(y)));
        }),
        (this.addChildren = (i) => this._addFileChildren(i)),
        (this._addFileChildren = (i) => (
          Array.isArray(i) && (this.children = i),
          typeof i == "object" && i !== null && (this.children = Object.values(i)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (i) => (Object.assign(this.options, i), this)),
        (this.update = (i) => (Object.assign(this.options, i), this)),
        (this.lazy = (i) => ((this.lazyFn = i), this)),
        (this.redirect = (i) => by({ from: this.fullPath, ...i })),
        (this.options = n || {}),
        (this.isRoot = !n?.getParentRoute),
        n?.id && n?.path)
      )
        throw new Error("Route cannot have both an 'id' and a 'path' option.");
    }
  },
  xS = class extends My {
    constructor(n) {
      super(n);
    }
  },
  ES = ((n) => (
    (n[(n.AggregateError = 1)] = "AggregateError"),
    (n[(n.ArrowFunction = 2)] = "ArrowFunction"),
    (n[(n.ErrorPrototypeStack = 4)] = "ErrorPrototypeStack"),
    (n[(n.ObjectAssign = 8)] = "ObjectAssign"),
    (n[(n.BigIntTypedArray = 16)] = "BigIntTypedArray"),
    (n[(n.RegExp = 32)] = "RegExp"),
    n
  ))(ES || {}),
  Mn = Symbol.asyncIterator,
  wy = Symbol.hasInstance,
  Bl = Symbol.isConcatSpreadable,
  wn = Symbol.iterator,
  zy = Symbol.match,
  Oy = Symbol.matchAll,
  Cy = Symbol.replace,
  jy = Symbol.search,
  Dy = Symbol.species,
  Ny = Symbol.split,
  Ly = Symbol.toPrimitive,
  Hl = Symbol.toStringTag,
  Uy = Symbol.unscopables,
  By = {
    [Mn]: 0,
    [wy]: 1,
    [Bl]: 2,
    [wn]: 3,
    [zy]: 4,
    [Oy]: 5,
    [Cy]: 6,
    [jy]: 7,
    [Dy]: 8,
    [Ny]: 9,
    [Ly]: 10,
    [Hl]: 11,
    [Uy]: 12,
  },
  RS = {
    0: Mn,
    1: wy,
    2: Bl,
    3: wn,
    4: zy,
    5: Oy,
    6: Cy,
    7: jy,
    8: Dy,
    9: Ny,
    10: Ly,
    11: Hl,
    12: Uy,
  },
  S = void 0,
  TS = {
    2: !0,
    3: !1,
    1: S,
    0: null,
    4: -0,
    5: Number.POSITIVE_INFINITY,
    6: Number.NEGATIVE_INFINITY,
    7: Number.NaN,
  },
  AS = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError",
  },
  MS = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function _t(n, i, s, r, c, f, h, y, m, p, b, v) {
  return { t: n, i, s, c: r, m: c, p: f, e: h, a: y, f: m, b: p, o: b, l: v };
}
function oa(n) {
  return _t(2, S, n, S, S, S, S, S, S, S, S, S);
}
var Hy = oa(2),
  qy = oa(3),
  wS = oa(1),
  zS = oa(0),
  OS = oa(4),
  CS = oa(5),
  jS = oa(6),
  DS = oa(7);
function NS(n) {
  switch (n) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return S;
  }
}
function ca(n) {
  let i = "",
    s = 0,
    r;
  for (let c = 0, f = n.length; c < f; c++)
    ((r = NS(n[c])), r && ((i += n.slice(s, c) + r), (s = c + 1)));
  return (s === 0 ? (i = n) : (i += n.slice(s)), i);
}
function LS(n) {
  switch (n) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return n;
  }
}
function fa(n) {
  return n.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, LS);
}
var xr = "__SEROVAL_REFS__",
  Yy = new Map(),
  Nl = new Map();
function Gy(n) {
  return Yy.has(n);
}
function US(n) {
  return Nl.has(n);
}
function BS(n) {
  if (Gy(n)) return Yy.get(n);
  throw new m1(n);
}
function HS(n) {
  if (US(n)) return Nl.get(n);
  throw new p1(n);
}
typeof globalThis < "u"
  ? Object.defineProperty(globalThis, xr, {
      value: Nl,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < "u"
    ? Object.defineProperty(window, xr, {
        value: Nl,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < "u"
      ? Object.defineProperty(self, xr, {
          value: Nl,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < "u" &&
        Object.defineProperty(global, xr, {
          value: Nl,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function Zc(n) {
  return n instanceof EvalError
    ? 1
    : n instanceof RangeError
      ? 2
      : n instanceof ReferenceError
        ? 3
        : n instanceof SyntaxError
          ? 4
          : n instanceof TypeError
            ? 5
            : n instanceof URIError
              ? 6
              : 0;
}
function qS(n) {
  let i = AS[Zc(n)];
  return n.name !== i
    ? { name: n.name }
    : n.constructor.name !== i
      ? { name: n.constructor.name }
      : {};
}
function Qy(n, i) {
  let s = qS(n),
    r = Object.getOwnPropertyNames(n);
  for (let c = 0, f = r.length, h; c < f; c++)
    ((h = r[c]),
      h !== "name" &&
        h !== "message" &&
        (h === "stack" ? i & 4 && ((s = s || {}), (s[h] = n[h])) : ((s = s || {}), (s[h] = n[h]))));
  return s;
}
function Vy(n) {
  return Object.isFrozen(n) ? 3 : Object.isSealed(n) ? 2 : Object.isExtensible(n) ? 0 : 1;
}
function YS(n) {
  switch (n) {
    case Number.POSITIVE_INFINITY:
      return CS;
    case Number.NEGATIVE_INFINITY:
      return jS;
  }
  return n !== n ? DS : Object.is(n, -0) ? OS : _t(0, S, n, S, S, S, S, S, S, S, S, S);
}
function ky(n) {
  return _t(1, S, ca(n), S, S, S, S, S, S, S, S, S);
}
function GS(n) {
  return _t(3, S, "" + n, S, S, S, S, S, S, S, S, S);
}
function QS(n) {
  return _t(4, n, S, S, S, S, S, S, S, S, S, S);
}
function VS(n, i) {
  let s = i.valueOf();
  return _t(5, n, s !== s ? "" : i.toISOString(), S, S, S, S, S, S, S, S, S);
}
function kS(n, i) {
  return _t(6, n, S, ca(i.source), i.flags, S, S, S, S, S, S, S);
}
function XS(n, i) {
  return _t(17, n, By[i], S, S, S, S, S, S, S, S, S);
}
function KS(n, i) {
  return _t(18, n, ca(BS(i)), S, S, S, S, S, S, S, S, S);
}
function ZS(n, i, s) {
  return _t(25, n, s, ca(i), S, S, S, S, S, S, S, S);
}
function PS(n, i, s) {
  return _t(9, n, S, S, S, S, S, s, S, S, Vy(i), S);
}
function JS(n, i) {
  return _t(21, n, S, S, S, S, S, S, i, S, S, S);
}
function FS(n, i, s) {
  return _t(15, n, S, i.constructor.name, S, S, S, S, s, i.byteOffset, S, i.length);
}
function IS(n, i, s) {
  return _t(16, n, S, i.constructor.name, S, S, S, S, s, i.byteOffset, S, i.byteLength);
}
function $S(n, i, s) {
  return _t(20, n, S, S, S, S, S, S, s, i.byteOffset, S, i.byteLength);
}
function WS(n, i, s) {
  return _t(13, n, Zc(i), S, ca(i.message), s, S, S, S, S, S, S);
}
function t1(n, i, s) {
  return _t(14, n, Zc(i), S, ca(i.message), s, S, S, S, S, S, S);
}
function e1(n, i) {
  return _t(7, n, S, S, S, S, S, i, S, S, S, S);
}
function n1(n, i) {
  return _t(28, S, S, S, S, S, S, [n, i], S, S, S, S);
}
function a1(n, i) {
  return _t(30, S, S, S, S, S, S, [n, i], S, S, S, S);
}
function l1(n, i, s) {
  return _t(31, n, S, S, S, S, S, s, i, S, S, S);
}
function i1(n, i) {
  return _t(32, n, S, S, S, S, S, S, i, S, S, S);
}
function s1(n, i) {
  return _t(33, n, S, S, S, S, S, S, i, S, S, S);
}
function r1(n, i) {
  return _t(34, n, S, S, S, S, S, S, i, S, S, S);
}
function u1(n, i, s, r) {
  return _t(35, n, s, S, S, S, S, i, S, S, S, r);
}
var o1 = { parsing: 1, serialization: 2, deserialization: 3 };
function c1(n) {
  return `Seroval Error (step: ${o1[n]})`;
}
var f1 = (n, i) => c1(n),
  Xy = class extends Error {
    constructor(n, i) {
      (super(f1(n)), (this.cause = i));
    }
  },
  wp = class extends Xy {
    constructor(n) {
      super("parsing", n);
    }
  },
  d1 = class extends Xy {
    constructor(n) {
      super("deserialization", n);
    }
  };
function zn(n) {
  return `Seroval Error (specific: ${n})`;
}
var Qr = class extends Error {
    constructor(i) {
      (super(zn(1)), (this.value = i));
    }
  },
  Ky = class extends Error {
    constructor(n) {
      super(zn(2));
    }
  },
  h1 = class extends Error {
    constructor(n) {
      super(zn(3));
    }
  },
  Ii = class extends Error {
    constructor(n) {
      super(zn(4));
    }
  },
  m1 = class extends Error {
    constructor(n) {
      (super(zn(5)), (this.value = n));
    }
  },
  p1 = class extends Error {
    constructor(n) {
      super(zn(6));
    }
  },
  y1 = class extends Error {
    constructor(n) {
      super(zn(7));
    }
  },
  On = class extends Error {
    constructor(n) {
      super(zn(8));
    }
  },
  v1 = class extends Error {
    constructor(n) {
      super(zn(9));
    }
  },
  g1 = class {
    constructor(n, i) {
      ((this.value = n), (this.replacement = i));
    }
  },
  Vr = () => {
    let n = { p: 0, s: 0, f: 0 };
    return (
      (n.p = new Promise((i, s) => {
        ((n.s = i), (n.f = s));
      })),
      n
    );
  },
  b1 = (n, i) => {
    (n.s(i), (n.p.s = 1), (n.p.v = i));
  },
  S1 = (n, i) => {
    (n.f(i), (n.p.s = 2), (n.p.v = i));
  };
Vr.toString();
b1.toString();
S1.toString();
var _1 = () => {
    let n = [],
      i = [],
      s = !0,
      r = !1,
      c = 0,
      f = (m, p, b) => {
        for (b = 0; b < c; b++) i[b] && i[b][p](m);
      },
      h = (m, p, b, v) => {
        for (p = 0, b = n.length; p < b; p++)
          ((v = n[p]), !s && p === b - 1 ? m[r ? "return" : "throw"](v) : m.next(v));
      },
      y = (m, p) => (
        s && ((p = c++), (i[p] = m)),
        h(m),
        () => {
          s && ((i[p] = i[c]), (i[c--] = void 0));
        }
      );
    return {
      __SEROVAL_STREAM__: !0,
      on: (m) => y(m),
      next: (m) => {
        s && (n.push(m), f(m, "next"));
      },
      throw: (m) => {
        s && (n.push(m), f(m, "throw"), (s = !1), (r = !1), (i.length = 0));
      },
      return: (m) => {
        s && (n.push(m), f(m, "return"), (s = !1), (r = !0), (i.length = 0));
      },
    };
  },
  x1 = (n) => (i) => () => {
    let s = 0,
      r = {
        [n]: () => r,
        next: () => {
          if (s > i.d) return { done: !0, value: void 0 };
          let c = s++,
            f = i.v[c];
          if (c === i.t) throw f;
          return { done: c === i.d, value: f };
        },
      };
    return r;
  },
  E1 = (n, i) => (s) => () => {
    let r = 0,
      c = -1,
      f = !1,
      h = [],
      y = [],
      m = (b = 0, v = y.length) => {
        for (; b < v; b++) y[b].s({ done: !0, value: void 0 });
      };
    s.on({
      next: (b) => {
        let v = y.shift();
        (v && v.s({ done: !1, value: b }), h.push(b));
      },
      throw: (b) => {
        let v = y.shift();
        (v && v.f(b), m(), (c = h.length), (f = !0), h.push(b));
      },
      return: (b) => {
        let v = y.shift();
        (v && v.s({ done: !0, value: b }), m(), (c = h.length), h.push(b));
      },
    });
    let p = {
      [n]: () => p,
      next: () => {
        if (c === -1) {
          let _ = r++;
          if (_ >= h.length) {
            let x = i();
            return (y.push(x), x.p);
          }
          return { done: !1, value: h[_] };
        }
        if (r > c) return { done: !0, value: void 0 };
        let b = r++,
          v = h[b];
        if (b !== c) return { done: !1, value: v };
        if (f) throw v;
        return { done: !0, value: v };
      },
    };
    return p;
  },
  Zy = (n) => {
    let i = atob(n),
      s = i.length,
      r = new Uint8Array(s);
    for (let c = 0; c < s; c++) r[c] = i.charCodeAt(c);
    return r.buffer;
  };
Zy.toString();
function R1(n) {
  return "__SEROVAL_SEQUENCE__" in n;
}
function Py(n, i, s) {
  return { __SEROVAL_SEQUENCE__: !0, v: n, t: i, d: s };
}
function T1(n) {
  let i = [],
    s = -1,
    r = -1,
    c = n[wn]();
  for (;;)
    try {
      let f = c.next();
      if ((i.push(f.value), f.done)) {
        r = i.length - 1;
        break;
      }
    } catch (f) {
      ((s = i.length), i.push(f));
    }
  return Py(i, s, r);
}
var A1 = x1(wn);
function M1(n) {
  return A1(n);
}
var w1 = {},
  z1 = {},
  O1 = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function C1(n) {
  return "__SEROVAL_STREAM__" in n;
}
function qa() {
  return _1();
}
function j1(n) {
  let i = qa(),
    s = n[Mn]();
  async function r() {
    try {
      let c = await s.next();
      c.done ? i.return(c.value) : (i.next(c.value), await r());
    } catch (c) {
      i.throw(c);
    }
  }
  return (r().catch(() => {}), i);
}
var D1 = E1(Mn, Vr);
function N1(n) {
  return D1(n);
}
async function L1(n) {
  try {
    return [1, await n];
  } catch (i) {
    return [0, i];
  }
}
function U1(n, i) {
  return {
    plugins: i.plugins,
    mode: n,
    marked: new Set(),
    features: 63 ^ (i.disabledFeatures || 0),
    refs: i.refs || new Map(),
    depthLimit: i.depthLimit || 1e3,
  };
}
function wr(n, i) {
  n.marked.add(i);
}
function B1(n, i) {
  let s = n.refs.size;
  return (n.refs.set(i, s), s);
}
function kr(n, i) {
  let s = n.refs.get(i);
  return s != null ? (wr(n, s), { type: 1, value: QS(s) }) : { type: 0, value: B1(n, i) };
}
function Pc(n, i) {
  let s = kr(n, i);
  return s.type === 1 ? s : Gy(i) ? { type: 2, value: KS(s.value, i) } : s;
}
function La(n, i) {
  let s = Pc(n, i);
  if (s.type !== 0) return s.value;
  if (i in By) return XS(s.value, i);
  throw new Qr(i);
}
function Xr(n, i) {
  let s = kr(n, O1[i]);
  return s.type === 1 ? s.value : _t(26, s.value, i, S, S, S, S, S, S, S, S, S);
}
function H1(n) {
  let i = kr(n, w1);
  return i.type === 1 ? i.value : _t(27, i.value, S, S, S, S, S, S, La(n, wn), S, S, S);
}
function q1(n) {
  let i = kr(n, z1);
  return i.type === 1 ? i.value : _t(29, i.value, S, S, S, S, S, [Xr(n, 1), La(n, Mn)], S, S, S, S);
}
function Y1(n, i, s, r) {
  return _t(s ? 11 : 10, n, S, S, S, r, S, S, S, S, Vy(i), S);
}
function G1(n, i, s, r) {
  return _t(8, i, S, S, S, S, { k: s, v: r }, S, Xr(n, 0), S, S, S);
}
function Q1(n, i, s) {
  let r = new Uint8Array(s),
    c = "";
  for (let f = 0, h = r.length; f < h; f++) c += String.fromCharCode(r[f]);
  return _t(19, i, ca(btoa(c)), S, S, S, S, S, Xr(n, 5), S, S, S);
}
function V1(n, i) {
  return { base: U1(n, i), child: void 0 };
}
var k1 = class {
  constructor(n, i) {
    ((this._p = n), (this.depth = i));
  }
  parse(n) {
    return It(this._p, this.depth, n);
  }
};
async function X1(n, i, s) {
  let r = [];
  for (let c = 0, f = s.length; c < f; c++) c in s ? (r[c] = await It(n, i, s[c])) : (r[c] = 0);
  return r;
}
async function K1(n, i, s, r) {
  return PS(s, r, await X1(n, i, r));
}
async function Jc(n, i, s) {
  let r = Object.entries(s),
    c = [],
    f = [];
  for (let h = 0, y = r.length; h < y; h++) (c.push(ca(r[h][0])), f.push(await It(n, i, r[h][1])));
  return (
    wn in s && (c.push(La(n.base, wn)), f.push(n1(H1(n.base), await It(n, i, T1(s))))),
    Mn in s && (c.push(La(n.base, Mn)), f.push(a1(q1(n.base), await It(n, i, j1(s))))),
    Hl in s && (c.push(La(n.base, Hl)), f.push(ky(s[Hl]))),
    Bl in s && (c.push(La(n.base, Bl)), f.push(s[Bl] ? Hy : qy)),
    { k: c, v: f }
  );
}
async function Sc(n, i, s, r, c) {
  return Y1(s, r, c, await Jc(n, i, r));
}
async function Z1(n, i, s, r) {
  return JS(s, await It(n, i, r.valueOf()));
}
async function P1(n, i, s, r) {
  return FS(s, r, await It(n, i, r.buffer));
}
async function J1(n, i, s, r) {
  return IS(s, r, await It(n, i, r.buffer));
}
async function F1(n, i, s, r) {
  return $S(s, r, await It(n, i, r.buffer));
}
async function zp(n, i, s, r) {
  let c = Qy(r, n.base.features);
  return WS(s, r, c ? await Jc(n, i, c) : S);
}
async function I1(n, i, s, r) {
  let c = Qy(r, n.base.features);
  return t1(s, r, c ? await Jc(n, i, c) : S);
}
async function $1(n, i, s, r) {
  let c = [],
    f = [];
  for (let [h, y] of r.entries()) (c.push(await It(n, i, h)), f.push(await It(n, i, y)));
  return G1(n.base, s, c, f);
}
async function W1(n, i, s, r) {
  let c = [];
  for (let f of r.keys()) c.push(await It(n, i, f));
  return e1(s, c);
}
async function Jy(n, i, s, r) {
  let c = n.base.plugins;
  if (c)
    for (let f = 0, h = c.length; f < h; f++) {
      let y = c[f];
      if (y.parse.async && y.test(r))
        return ZS(s, y.tag, await y.parse.async(r, new k1(n, i), { id: s }));
    }
  return S;
}
async function t_(n, i, s, r) {
  let [c, f] = await L1(r);
  return _t(12, s, c, S, S, S, S, S, await It(n, i, f), S, S, S);
}
function e_(n, i, s, r, c) {
  let f = [],
    h = s.on({
      next: (y) => {
        (wr(this.base, i),
          It(this, n, y).then(
            (m) => {
              f.push(i1(i, m));
            },
            (m) => {
              (c(m), h());
            },
          ));
      },
      throw: (y) => {
        (wr(this.base, i),
          It(this, n, y).then(
            (m) => {
              (f.push(s1(i, m)), r(f), h());
            },
            (m) => {
              (c(m), h());
            },
          ));
      },
      return: (y) => {
        (wr(this.base, i),
          It(this, n, y).then(
            (m) => {
              (f.push(r1(i, m)), r(f), h());
            },
            (m) => {
              (c(m), h());
            },
          ));
      },
    });
}
async function n_(n, i, s, r) {
  return l1(s, Xr(n.base, 4), await new Promise(e_.bind(n, i, s, r)));
}
async function a_(n, i, s, r) {
  let c = [];
  for (let f = 0, h = r.v.length; f < h; f++) c[f] = await It(n, i, r.v[f]);
  return u1(s, c, r.t, r.d);
}
async function l_(n, i, s, r) {
  if (Array.isArray(r)) return K1(n, i, s, r);
  if (C1(r)) return n_(n, i, s, r);
  if (R1(r)) return a_(n, i, s, r);
  let c = r.constructor;
  if (c === g1) return It(n, i, r.replacement);
  let f = await Jy(n, i, s, r);
  if (f) return f;
  switch (c) {
    case Object:
      return Sc(n, i, s, r, !1);
    case S:
      return Sc(n, i, s, r, !0);
    case Date:
      return VS(s, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return zp(n, i, s, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return Z1(n, i, s, r);
    case ArrayBuffer:
      return Q1(n.base, s, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return P1(n, i, s, r);
    case DataView:
      return F1(n, i, s, r);
    case Map:
      return $1(n, i, s, r);
    case Set:
      return W1(n, i, s, r);
  }
  if (c === Promise || r instanceof Promise) return t_(n, i, s, r);
  let h = n.base.features;
  if (h & 32 && c === RegExp) return kS(s, r);
  if (h & 16)
    switch (c) {
      case BigInt64Array:
      case BigUint64Array:
        return J1(n, i, s, r);
    }
  if (h & 1 && typeof AggregateError < "u" && (c === AggregateError || r instanceof AggregateError))
    return I1(n, i, s, r);
  if (r instanceof Error) return zp(n, i, s, r);
  if (wn in r || Mn in r) return Sc(n, i, s, r, !!c);
  throw new Qr(r);
}
async function i_(n, i, s) {
  let r = Pc(n.base, s);
  if (r.type !== 0) return r.value;
  let c = await Jy(n, i, r.value, s);
  if (c) return c;
  throw new Qr(s);
}
async function It(n, i, s) {
  switch (typeof s) {
    case "boolean":
      return s ? Hy : qy;
    case "undefined":
      return wS;
    case "string":
      return ky(s);
    case "number":
      return YS(s);
    case "bigint":
      return GS(s);
    case "object": {
      if (s) {
        let r = Pc(n.base, s);
        return r.type === 0 ? await l_(n, i + 1, r.value, s) : r.value;
      }
      return zS;
    }
    case "symbol":
      return La(n.base, s);
    case "function":
      return i_(n, i, s);
    default:
      throw new Qr(s);
  }
}
async function s_(n, i) {
  try {
    return await It(n, 0, i);
  } catch (s) {
    throw s instanceof wp ? s : new wp(s);
  }
}
var r_ = ((n) => ((n[(n.Vanilla = 1)] = "Vanilla"), (n[(n.Cross = 2)] = "Cross"), n))(r_ || {});
function Fy(n, i) {
  for (let s = 0, r = i.length; s < r; s++) {
    let c = i[s];
    n.has(c) || (n.add(c), c.extends && Fy(n, c.extends));
  }
}
function Iy(n) {
  if (n) {
    let i = new Set();
    return (Fy(i, n), [...i]);
  }
}
function u_(n) {
  switch (n) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new y1(n);
  }
}
var o_ = 1e6,
  c_ = 1e4,
  f_ = 2e4;
function $y(n, i) {
  switch (i) {
    case 3:
      return Object.freeze(n);
    case 1:
      return Object.preventExtensions(n);
    case 2:
      return Object.seal(n);
    default:
      return n;
  }
}
var d_ = 1e3;
function h_(n, i) {
  var s;
  let r = i.refs || new Map();
  return (
    "types" in r || Object.assign(r, { types: new Map() }),
    {
      mode: n,
      plugins: i.plugins,
      refs: r,
      features: (s = i.features) != null ? s : 63 ^ (i.disabledFeatures || 0),
      depthLimit: i.depthLimit || d_,
    }
  );
}
function m_(n) {
  return { mode: 2, base: h_(2, n), child: S };
}
var p_ = class {
  constructor(n, i) {
    ((this._p = n), (this.depth = i));
  }
  deserialize(n) {
    return jt(this._p, this.depth, n);
  }
};
function Wy(n, i) {
  if (i < 0 || !Number.isFinite(i) || !Number.isInteger(i)) throw new On({ t: 4, i });
  if (n.refs.has(i)) throw new Error("Conflicted ref id: " + i);
}
function y_(n, i, s) {
  return (Wy(n.base, i), n.state.marked.has(i) && n.base.refs.set(i, s), s);
}
function v_(n, i, s) {
  return (Wy(n.base, i), n.base.refs.set(i, s), s);
}
function $t(n, i, s) {
  return n.mode === 1 ? y_(n, i, s) : v_(n, i, s);
}
function Dc(n, i, s) {
  if (Object.hasOwn(i, s)) return i[s];
  throw new On(n);
}
function g_(n, i) {
  return $t(n, i.i, HS(fa(i.s)));
}
function b_(n, i, s) {
  let r = s.a,
    c = r.length,
    f = $t(n, s.i, new Array(c));
  for (let h = 0, y; h < c; h++) ((y = r[h]), y && (f[h] = jt(n, i, y)));
  return ($y(f, s.o), f);
}
function S_(n) {
  switch (n) {
    case "constructor":
    case "__proto__":
    case "prototype":
    case "__defineGetter__":
    case "__defineSetter__":
    case "__lookupGetter__":
    case "__lookupSetter__":
      return !1;
    default:
      return !0;
  }
}
function __(n) {
  switch (n) {
    case Mn:
    case Bl:
    case Hl:
    case wn:
      return !0;
    default:
      return !1;
  }
}
function Op(n, i, s) {
  S_(i)
    ? (n[i] = s)
    : Object.defineProperty(n, i, { value: s, configurable: !0, enumerable: !0, writable: !0 });
}
function x_(n, i, s, r, c) {
  if (typeof r == "string") Op(s, fa(r), jt(n, i, c));
  else {
    let f = jt(n, i, r);
    switch (typeof f) {
      case "string":
        Op(s, f, jt(n, i, c));
        break;
      case "symbol":
        __(f) && (s[f] = jt(n, i, c));
        break;
      default:
        throw new On(r);
    }
  }
}
function tv(n, i, s) {
  n.base.refs.types.set(i, s);
}
function $i(n, i, s, r) {
  if (n.base.refs.types.get(s) !== r) throw new On(i);
}
function ev(n, i, s, r) {
  let c = s.k;
  if (c.length > 0) for (let f = 0, h = s.v, y = c.length; f < y; f++) x_(n, i, r, c[f], h[f]);
  return r;
}
function E_(n, i, s) {
  let r = $t(n, s.i, s.t === 10 ? {} : Object.create(null));
  return (ev(n, i, s.p, r), $y(r, s.o), r);
}
function R_(n, i) {
  return $t(n, i.i, new Date(i.s));
}
function T_(n, i) {
  if (n.base.features & 32) {
    let s = fa(i.c);
    if (s.length > f_) throw new On(i);
    return $t(n, i.i, new RegExp(s, i.m));
  }
  throw new Ky(i);
}
function A_(n, i, s) {
  let r = $t(n, s.i, new Set());
  for (let c = 0, f = s.a, h = f.length; c < h; c++) r.add(jt(n, i, f[c]));
  return r;
}
function M_(n, i, s) {
  let r = $t(n, s.i, new Map());
  for (let c = 0, f = s.e.k, h = s.e.v, y = f.length; c < y; c++)
    r.set(jt(n, i, f[c]), jt(n, i, h[c]));
  return r;
}
function w_(n, i) {
  if (i.s.length > o_) throw new On(i);
  return $t(n, i.i, Zy(fa(i.s)));
}
function z_(n, i, s) {
  var r;
  let c = u_(s.c),
    f = jt(n, i, s.f),
    h = (r = s.b) != null ? r : 0;
  if (h < 0 || h > f.byteLength) throw new On(s);
  return $t(n, s.i, new c(f, h, s.l));
}
function O_(n, i, s) {
  var r;
  let c = jt(n, i, s.f),
    f = (r = s.b) != null ? r : 0;
  if (f < 0 || f > c.byteLength) throw new On(s);
  return $t(n, s.i, new DataView(c, f, s.l));
}
function nv(n, i, s, r) {
  if (s.p) {
    let c = ev(n, i, s.p, {});
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(c));
  }
  return r;
}
function C_(n, i, s) {
  let r = $t(n, s.i, new AggregateError([], fa(s.m)));
  return nv(n, i, s, r);
}
function j_(n, i, s) {
  let r = Dc(s, MS, s.s),
    c = $t(n, s.i, new r(fa(s.m)));
  return nv(n, i, s, c);
}
function D_(n, i, s) {
  let r = Vr(),
    c = $t(n, s.i, r.p),
    f = jt(n, i, s.f);
  return (s.s ? r.s(f) : r.f(f), c);
}
function N_(n, i, s) {
  return $t(n, s.i, Object(jt(n, i, s.f)));
}
function L_(n, i, s) {
  let r = n.base.plugins;
  if (r) {
    let c = fa(s.c);
    for (let f = 0, h = r.length; f < h; f++) {
      let y = r[f];
      if (y.tag === c) return $t(n, s.i, y.deserialize(s.s, new p_(n, i), { id: s.i }));
    }
  }
  throw new h1(s.c);
}
function U_(n, i) {
  let s = $t(n, i.i, $t(n, i.s, Vr()).p);
  return (tv(n, i.s, 22), s);
}
function B_(n, i, s) {
  let r = n.base.refs.get(s.i);
  if (r) return ($i(n, s, s.i, 22), r.s(jt(n, i, s.a[1])), S);
  throw new Ii("Promise");
}
function H_(n, i, s) {
  let r = n.base.refs.get(s.i);
  if (r) return ($i(n, s, s.i, 22), r.f(jt(n, i, s.a[1])), S);
  throw new Ii("Promise");
}
function q_(n, i, s) {
  jt(n, i, s.a[0]);
  let r = jt(n, i, s.a[1]);
  return M1(r);
}
function Y_(n, i, s) {
  jt(n, i, s.a[0]);
  let r = jt(n, i, s.a[1]);
  return N1(r);
}
function G_(n, i, s) {
  let r = $t(n, s.i, qa());
  tv(n, s.i, 31);
  let c = s.a,
    f = c.length;
  if (f) for (let h = 0; h < f; h++) jt(n, i, c[h]);
  return r;
}
function Q_(n, i, s) {
  let r = n.base.refs.get(s.i);
  if (r) return ($i(n, s, s.i, 31), r.next(jt(n, i, s.f)), S);
  throw new Ii("Stream");
}
function V_(n, i, s) {
  let r = n.base.refs.get(s.i);
  if (r) return ($i(n, s, s.i, 31), r.throw(jt(n, i, s.f)), S);
  throw new Ii("Stream");
}
function k_(n, i, s) {
  let r = n.base.refs.get(s.i);
  if (r) return ($i(n, s, s.i, 31), r.return(jt(n, i, s.f)), S);
  throw new Ii("Stream");
}
function X_(n, i, s) {
  return (jt(n, i, s.f), S);
}
function K_(n, i, s) {
  return (jt(n, i, s.a[1]), S);
}
function Z_(n, i, s) {
  let r = $t(n, s.i, Py([], s.s, s.l));
  for (let c = 0, f = s.a.length; c < f; c++) r.v[c] = jt(n, i, s.a[c]);
  return r;
}
function jt(n, i, s) {
  if (i > n.base.depthLimit) throw new v1(n.base.depthLimit);
  switch (((i += 1), s.t)) {
    case 2:
      return Dc(s, TS, s.s);
    case 0:
      return Number(s.s);
    case 1:
      return fa(String(s.s));
    case 3:
      if (String(s.s).length > c_) throw new On(s);
      return BigInt(s.s);
    case 4:
      return n.base.refs.get(s.i);
    case 18:
      return g_(n, s);
    case 9:
      return b_(n, i, s);
    case 10:
    case 11:
      return E_(n, i, s);
    case 5:
      return R_(n, s);
    case 6:
      return T_(n, s);
    case 7:
      return A_(n, i, s);
    case 8:
      return M_(n, i, s);
    case 19:
      return w_(n, s);
    case 16:
    case 15:
      return z_(n, i, s);
    case 20:
      return O_(n, i, s);
    case 14:
      return C_(n, i, s);
    case 13:
      return j_(n, i, s);
    case 12:
      return D_(n, i, s);
    case 17:
      return Dc(s, RS, s.s);
    case 21:
      return N_(n, i, s);
    case 25:
      return L_(n, i, s);
    case 22:
      return U_(n, s);
    case 23:
      return B_(n, i, s);
    case 24:
      return H_(n, i, s);
    case 28:
      return q_(n, i, s);
    case 30:
      return Y_(n, i, s);
    case 31:
      return G_(n, i, s);
    case 32:
      return Q_(n, i, s);
    case 33:
      return V_(n, i, s);
    case 34:
      return k_(n, i, s);
    case 27:
      return X_(n, i, s);
    case 29:
      return K_(n, i, s);
    case 35:
      return Z_(n, i, s);
    default:
      throw new Ky(s);
  }
}
function P_(n, i) {
  try {
    return jt(n, 0, i);
  } catch (s) {
    throw new d1(s);
  }
}
var J_ = () => T;
J_.toString();
function Cp(n, i) {
  let s = Iy(i.plugins),
    r = m_({
      plugins: s,
      refs: i.refs,
      features: i.features,
      disabledFeatures: i.disabledFeatures,
      depthLimit: i.depthLimit,
    });
  return P_(r, n);
}
async function F_(n, i = {}) {
  let s = Iy(i.plugins),
    r = V1(1, { plugins: s, disabledFeatures: i.disabledFeatures });
  return { t: await s_(r, n), f: r.base.features, m: Array.from(r.base.marked) };
}
function I_(n) {
  return {
    tag: "$TSR/t/" + n.key,
    test: n.test,
    parse: {
      sync(i, s, r) {
        return { v: s.parse(n.toSerializable(i)) };
      },
      async async(i, s, r) {
        return { v: await s.parse(n.toSerializable(i)) };
      },
      stream(i, s, r) {
        return { v: s.parse(n.toSerializable(i)) };
      },
    },
    serialize: void 0,
    deserialize(i, s, r) {
      return n.fromSerializable(s.deserialize(i.v));
    },
  };
}
var $_ = class {
  constructor(n, i) {
    ((this.stream = n), (this.hint = i?.hint ?? "binary"));
  }
};
const Lr = globalThis.Buffer,
  av = !!Lr && typeof Lr.from == "function";
function lv(n) {
  if (n.length === 0) return "";
  if (av) return Lr.from(n).toString("base64");
  const i = 32768,
    s = [];
  for (let r = 0; r < n.length; r += i) {
    const c = n.subarray(r, r + i);
    s.push(String.fromCharCode.apply(null, c));
  }
  return btoa(s.join(""));
}
function iv(n) {
  if (n.length === 0) return new Uint8Array(0);
  if (av) {
    const r = Lr.from(n, "base64");
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  }
  const i = atob(n),
    s = new Uint8Array(i.length);
  for (let r = 0; r < i.length; r++) s[r] = i.charCodeAt(r);
  return s;
}
const qi = Object.create(null),
  Yi = Object.create(null),
  W_ = (n) =>
    new ReadableStream({
      start(i) {
        n.on({
          next(s) {
            try {
              i.enqueue(iv(s));
            } catch {}
          },
          throw(s) {
            i.error(s);
          },
          return() {
            try {
              i.close();
            } catch {}
          },
        });
      },
    }),
  tx = new TextEncoder(),
  ex = (n) =>
    new ReadableStream({
      start(i) {
        n.on({
          next(s) {
            try {
              typeof s == "string" ? i.enqueue(tx.encode(s)) : i.enqueue(iv(s.$b64));
            } catch {}
          },
          throw(s) {
            i.error(s);
          },
          return() {
            try {
              i.close();
            } catch {}
          },
        });
      },
    }),
  nx =
    "(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))",
  ax =
    "(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";
function jp(n) {
  const i = qa(),
    s = n.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          const { done: r, value: c } = await s.read();
          if (r) {
            i.return(void 0);
            break;
          }
          i.next(lv(c));
        }
      } catch (r) {
        i.throw(r);
      } finally {
        s.releaseLock();
      }
    })(),
    i
  );
}
function Dp(n) {
  const i = qa(),
    s = n.getReader(),
    r = new TextDecoder("utf-8", { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          const { done: c, value: f } = await s.read();
          if (c) {
            try {
              const h = r.decode();
              h.length > 0 && i.next(h);
            } catch {}
            i.return(void 0);
            break;
          }
          try {
            const h = r.decode(f, { stream: !0 });
            h.length > 0 && i.next(h);
          } catch {
            i.next({ $b64: lv(f) });
          }
        }
      } catch (c) {
        i.throw(c);
      } finally {
        s.releaseLock();
      }
    })(),
    i
  );
}
const lx = {
  tag: "tss/RawStream",
  extends: [
    {
      tag: "tss/RawStreamFactory",
      test(n) {
        return n === qi;
      },
      parse: {
        sync(n, i, s) {
          return {};
        },
        async async(n, i, s) {
          return {};
        },
        stream(n, i, s) {
          return {};
        },
      },
      serialize(n, i, s) {
        return nx;
      },
      deserialize(n, i, s) {
        return qi;
      },
    },
    {
      tag: "tss/RawStreamFactoryText",
      test(n) {
        return n === Yi;
      },
      parse: {
        sync(n, i, s) {
          return {};
        },
        async async(n, i, s) {
          return {};
        },
        stream(n, i, s) {
          return {};
        },
      },
      serialize(n, i, s) {
        return ax;
      },
      deserialize(n, i, s) {
        return Yi;
      },
    },
  ],
  test(n) {
    return n instanceof $_;
  },
  parse: {
    sync(n, i, s) {
      const r = n.hint === "text" ? Yi : qi;
      return { hint: i.parse(n.hint), factory: i.parse(r), stream: i.parse(qa()) };
    },
    async async(n, i, s) {
      const r = n.hint === "text" ? Yi : qi,
        c = n.hint === "text" ? Dp(n.stream) : jp(n.stream);
      return { hint: await i.parse(n.hint), factory: await i.parse(r), stream: await i.parse(c) };
    },
    stream(n, i, s) {
      const r = n.hint === "text" ? Yi : qi,
        c = n.hint === "text" ? Dp(n.stream) : jp(n.stream);
      return { hint: i.parse(n.hint), factory: i.parse(r), stream: i.parse(c) };
    },
  },
  serialize(n, i, s) {
    return "(" + i.serialize(n.factory) + ")(" + i.serialize(n.stream) + ")";
  },
  deserialize(n, i, s) {
    const r = i.deserialize(n.stream);
    return i.deserialize(n.hint) === "text" ? ex(r) : W_(r);
  },
};
function ix(n) {
  return {
    tag: "tss/RawStream",
    test: () => !1,
    parse: {},
    serialize() {
      throw new Error(
        "RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.",
      );
    },
    deserialize(i, s, r) {
      return n(typeof s?.deserialize == "function" ? s.deserialize(i.streamId) : i.streamId);
    },
  };
}
const sx = {
  tag: "$TSR/Error",
  test(n) {
    return n instanceof Error;
  },
  parse: {
    sync(n, i) {
      return { message: i.parse(n.message) };
    },
    async async(n, i) {
      return { message: await i.parse(n.message) };
    },
    stream(n, i) {
      return { message: i.parse(n.message) };
    },
  },
  serialize(n, i) {
    return "new Error(" + i.serialize(n.message) + ")";
  },
  deserialize(n, i) {
    return new Error(i.deserialize(n.message));
  },
};
var ia = {},
  sv = (n) =>
    new ReadableStream({
      start: (i) => {
        n.on({
          next: (s) => {
            try {
              i.enqueue(s);
            } catch {}
          },
          throw: (s) => {
            i.error(s);
          },
          return: () => {
            try {
              i.close();
            } catch {}
          },
        });
      },
    }),
  rx = {
    tag: "seroval-plugins/web/ReadableStreamFactory",
    test(n) {
      return n === ia;
    },
    parse: {
      sync() {
        return ia;
      },
      async async() {
        return await Promise.resolve(ia);
      },
      stream() {
        return ia;
      },
    },
    serialize() {
      return sv.toString();
    },
    deserialize() {
      return ia;
    },
  };
function Np(n) {
  let i = qa(),
    s = n.getReader();
  async function r() {
    try {
      let c = await s.read();
      c.done ? i.return(c.value) : (i.next(c.value), await r());
    } catch (c) {
      i.throw(c);
    }
  }
  return (r().catch(() => {}), i);
}
var ux = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [rx],
    test(n) {
      return typeof ReadableStream > "u" ? !1 : n instanceof ReadableStream;
    },
    parse: {
      sync(n, i) {
        return { factory: i.parse(ia), stream: i.parse(qa()) };
      },
      async async(n, i) {
        return { factory: await i.parse(ia), stream: await i.parse(Np(n)) };
      },
      stream(n, i) {
        return { factory: i.parse(ia), stream: i.parse(Np(n)) };
      },
    },
    serialize(n, i) {
      return "(" + i.serialize(n.factory) + ")(" + i.serialize(n.stream) + ")";
    },
    deserialize(n, i) {
      let s = i.deserialize(n.stream);
      return sv(s);
    },
  },
  ox = ux;
const cx = [sx, lx, ox];
function fx() {
  return [...(uy()?.serializationAdapters?.map(I_) ?? []), ...cx];
}
var Lp = new TextDecoder(),
  dx = new Uint8Array(0),
  Up = 16 * 1024 * 1024,
  Bp = 32 * 1024 * 1024,
  Hp = 1024,
  qp = 1e5;
function hx(n) {
  const i = new Map(),
    s = new Map(),
    r = new Set();
  let c = !1,
    f = null,
    h = 0,
    y;
  const m = new ReadableStream({
    start(v) {
      y = v;
    },
    cancel() {
      c = !0;
      try {
        f?.cancel();
      } catch {}
      (i.forEach((v) => {
        try {
          v.error(new Error("Framed response cancelled"));
        } catch {}
      }),
        i.clear(),
        s.clear(),
        r.clear());
    },
  });
  function p(v) {
    const _ = s.get(v);
    if (_) return _;
    if (r.has(v))
      return new ReadableStream({
        start(A) {
          A.close();
        },
      });
    if (s.size >= Hp) throw new Error(`Too many raw streams in framed response (max ${Hp})`);
    const x = new ReadableStream({
      start(A) {
        i.set(v, A);
      },
      cancel() {
        (r.add(v), i.delete(v), s.delete(v));
      },
    });
    return (s.set(v, x), x);
  }
  function b(v) {
    return (p(v), i.get(v));
  }
  return (
    (async () => {
      const v = n.getReader();
      f = v;
      const _ = [];
      let x = 0;
      function A() {
        if (x < 9) return null;
        const E = _[0];
        if (E.length >= 9)
          return {
            type: E[0],
            streamId: ((E[1] << 24) | (E[2] << 16) | (E[3] << 8) | E[4]) >>> 0,
            length: ((E[5] << 24) | (E[6] << 16) | (E[7] << 8) | E[8]) >>> 0,
          };
        const z = new Uint8Array(9);
        let B = 0,
          X = 9;
        for (let G = 0; G < _.length && X > 0; G++) {
          const K = _[G],
            J = Math.min(K.length, X);
          (z.set(K.subarray(0, J), B), (B += J), (X -= J));
        }
        return {
          type: z[0],
          streamId: ((z[1] << 24) | (z[2] << 16) | (z[3] << 8) | z[4]) >>> 0,
          length: ((z[5] << 24) | (z[6] << 16) | (z[7] << 8) | z[8]) >>> 0,
        };
      }
      function j(E) {
        if (E === 0) return dx;
        const z = new Uint8Array(E);
        let B = 0,
          X = E;
        for (; X > 0 && _.length > 0; ) {
          const G = _[0];
          if (!G) break;
          const K = Math.min(G.length, X);
          (z.set(G.subarray(0, K), B),
            (B += K),
            (X -= K),
            K === G.length ? _.shift() : (_[0] = G.subarray(K)));
        }
        return ((x -= E), z);
      }
      try {
        for (;;) {
          const { done: E, value: z } = await v.read();
          if (c || E) break;
          if (z) {
            if (x + z.length > Bp) throw new Error(`Framed response buffer exceeded ${Bp} bytes`);
            for (_.push(z), x += z.length; ; ) {
              const B = A();
              if (!B) break;
              const { type: X, streamId: G, length: K } = B;
              if (X !== Tn.JSON && X !== Tn.CHUNK && X !== Tn.END && X !== Tn.ERROR)
                throw new Error(`Unknown frame type: ${X}`);
              if (X === Tn.JSON) {
                if (G !== 0) throw new Error("Invalid JSON frame streamId (expected 0)");
              } else if (G === 0) throw new Error("Invalid raw frame streamId (expected non-zero)");
              if (K > Up) throw new Error(`Frame payload too large: ${K} bytes (max ${Up})`);
              const J = 9 + K;
              if (x < J) break;
              if (++h > qp) throw new Error(`Too many frames in framed response (max ${qp})`);
              j(9);
              const Y = j(K);
              switch (X) {
                case Tn.JSON:
                  try {
                    y.enqueue(Lp.decode(Y));
                  } catch {}
                  break;
                case Tn.CHUNK: {
                  const Z = b(G);
                  Z && Z.enqueue(Y);
                  break;
                }
                case Tn.END: {
                  const Z = b(G);
                  if ((r.add(G), Z)) {
                    try {
                      Z.close();
                    } catch {}
                    i.delete(G);
                  }
                  break;
                }
                case Tn.ERROR: {
                  const Z = b(G);
                  if ((r.add(G), Z)) {
                    const I = Lp.decode(Y);
                    (Z.error(new Error(I)), i.delete(G));
                  }
                  break;
                }
              }
            }
          }
        }
        if (x !== 0) throw new Error("Incomplete frame at end of framed response");
        try {
          y.close();
        } catch {}
        (i.forEach((E) => {
          try {
            E.close();
          } catch {}
        }),
          i.clear());
      } catch (E) {
        try {
          y.error(E);
        } catch {}
        (i.forEach((z) => {
          try {
            z.error(E);
          } catch {}
        }),
          i.clear());
      } finally {
        try {
          v.releaseLock();
        } catch {}
        f = null;
      }
    })(),
    { getOrCreateStream: p, jsonChunks: m }
  );
}
var Zi = null;
async function Nc(n) {
  n.length > 0 && (await Promise.allSettled(n));
}
var mx = Object.prototype.hasOwnProperty;
function rv(n) {
  for (const i in n) if (mx.call(n, i)) return !0;
  return !1;
}
async function px(n, i, s) {
  Zi || (Zi = fx());
  const r = i[0],
    c = r.fetch ?? s,
    f = r.data instanceof FormData ? "formData" : "payload",
    h = r.headers ? new Headers(r.headers) : new Headers();
  if (
    (h.set("x-tsr-serverFn", "true"),
    f === "payload" && h.set("accept", `${cb}, application/x-ndjson, application/json`),
    r.method === "GET")
  ) {
    if (f === "formData") throw new Error("FormData is not supported with GET requests");
    const m = await uv(r);
    if (m !== void 0) {
      const p = gy({ payload: m });
      n.includes("?") ? (n += `&${p}`) : (n += `?${p}`);
    }
  }
  let y;
  if (r.method === "POST") {
    const m = await yx(r);
    (m?.contentType && h.set("content-type", m.contentType), (y = m?.body));
  }
  return await vx(async () => c(n, { method: r.method, headers: h, signal: r.signal, body: y }));
}
async function uv(n) {
  let i = !1;
  const s = {};
  if (
    (n.data !== void 0 && ((i = !0), (s.data = n.data)),
    n.context && rv(n.context) && ((i = !0), (s.context = n.context)),
    i)
  )
    return ov(s);
}
async function ov(n) {
  return JSON.stringify(await Promise.resolve(F_(n, { plugins: Zi })));
}
async function yx(n) {
  if (n.data instanceof FormData) {
    let s;
    return (
      n.context && rv(n.context) && (s = await ov(n.context)),
      s !== void 0 && n.data.set(ob, s),
      { body: n.data }
    );
  }
  const i = await uv(n);
  if (i) return { body: i, contentType: "application/json" };
}
async function vx(n) {
  let i;
  try {
    i = await n();
  } catch (r) {
    if (r instanceof Response) i = r;
    else throw (console.log(r), r);
  }
  if (i.headers.get("x-tss-raw") === "true") return i;
  const s = i.headers.get("content-type");
  if ((s || Ee(), i.headers.get("x-tss-serialized"))) {
    let r;
    if (s.includes("application/x-tss-framed")) {
      if ((hb(s), !i.body)) throw new Error("No response body for framed response");
      const { getOrCreateStream: c, jsonChunks: f } = hx(i.body),
        h = [ix(c), ...(Zi || [])],
        y = new Map();
      r = await gx({
        jsonStream: f,
        onMessage: (m) => Cp(m, { refs: y, plugins: h }),
        onError(m, p) {
          console.error(m, p);
        },
      });
    } else if (s.includes("application/json")) {
      const c = await i.json(),
        f = [];
      ((r = Cp(c, { plugins: Zi })), await Nc(f));
    }
    if ((r || Ee(), r instanceof Error)) throw r;
    return r;
  }
  if (s.includes("application/json")) {
    const r = await i.json(),
      c = Qb(r);
    if (c) throw c;
    if (ne(r)) throw r;
    return r;
  }
  if (!i.ok) throw new Error(await i.text());
  return i;
}
async function gx({ jsonStream: n, onMessage: i, onError: s }) {
  const r = n.getReader(),
    { value: c, done: f } = await r.read();
  if (f || !c) throw new Error("Stream ended before first object");
  const h = JSON.parse(c);
  let y = !1;
  const m = (async () => {
    try {
      for (;;) {
        const { value: v, done: _ } = await r.read();
        if (_) break;
        if (v)
          try {
            const x = [];
            try {
              i(JSON.parse(v));
            } finally {
            }
            await Nc(x);
          } catch (x) {
            s?.(`Invalid JSON: ${v}`, x);
          }
      }
    } catch (v) {
      y || s?.("Stream processing error:", v);
    }
  })();
  let p;
  const b = [];
  try {
    p = i(h);
  } catch (v) {
    throw ((y = !0), r.cancel().catch(() => {}), v);
  }
  return (
    await Nc(b),
    Promise.resolve(p).catch(() => {
      ((y = !0), r.cancel().catch(() => {}));
    }),
    m.finally(() => {
      try {
        r.releaseLock();
      } catch {}
    }),
    p
  );
}
function bx(n) {
  const i = "/_serverFn/" + n;
  return Object.assign(
    (...c) => {
      const f = uy()?.serverFns?.fetch;
      return px(i, c, f ?? fetch);
    },
    { url: i, serverFnMeta: { id: n }, [wc]: !0 },
  );
}
var Sx = {
  key: "$TSS/serverfn",
  test: (n) => (typeof n != "function" || !(wc in n) ? !1 : !!n[wc]),
  toSerializable: ({ serverFnMeta: n }) => ({ functionId: n.id }),
  fromSerializable: ({ functionId: n }) => bx(n),
};
function Yp(n) {
  return n.replaceAll("\0", "/").replaceAll("�", "/");
}
function _x(n, i) {
  ((n.id = i.i),
    (n.__beforeLoadContext = i.b),
    (n.loaderData = i.l),
    (n.status = i.s),
    (n.ssr = i.ssr),
    (n.updatedAt = i.u),
    (n.error = i.e),
    i.g !== void 0 && (n.globalNotFound = i.g));
}
async function xx(n) {
  window.$_TSR || Ee();
  const i = n.options.serializationAdapters;
  if (i?.length) {
    const E = new Map();
    (i.forEach((z) => {
      E.set(z.key, z.fromSerializable);
    }),
      (window.$_TSR.t = E),
      window.$_TSR.buffer.forEach((z) => z()));
  }
  ((window.$_TSR.initialized = !0), window.$_TSR.router || Ee());
  const s = window.$_TSR.router;
  (s.matches.forEach((E) => {
    E.i = Yp(E.i);
  }),
    s.lastMatchId && (s.lastMatchId = Yp(s.lastMatchId)));
  const { manifest: r, dehydratedData: c, lastMatchId: f } = s;
  n.ssr = { manifest: r };
  const h = document.querySelector('meta[property="csp-nonce"]')?.content;
  ((n.options.ssr = { nonce: h }), await n.options.hydrate?.(c));
  const y = n.matchRoutes(n.stores.location.get()),
    m = Promise.all(y.map((E) => n.loadRouteChunk(n.looseRoutesById[E.routeId])));
  function p(E) {
    const z = n.looseRoutesById[E.routeId].options.pendingMinMs ?? n.options.defaultPendingMinMs;
    if (z) {
      const B = Ha();
      ((E._nonReactive.minPendingPromise = B),
        (E._forcePending = !0),
        setTimeout(() => {
          (B.resolve(),
            n.updateMatch(
              E.id,
              (X) => ((X._nonReactive.minPendingPromise = void 0), { ...X, _forcePending: void 0 }),
            ));
        }, z));
    }
  }
  function b(E) {
    const z = n.looseRoutesById[E.routeId];
    z && (z.options.ssr = E.ssr);
  }
  let v;
  (y.forEach((E) => {
    const z = s.matches.find((B) => B.i === E.id);
    if (!z) {
      ((E._nonReactive.dehydrated = !1), (E.ssr = !1), b(E));
      return;
    }
    (_x(E, z),
      b(E),
      (E._nonReactive.dehydrated = E.ssr !== !1),
      (E.ssr === "data-only" || E.ssr === !1) && v === void 0 && ((v = E.index), p(E)));
  }),
    n.stores.setMatches(y));
  const _ = n.stores.matches.get(),
    x = n.stores.location.get();
  await Promise.all(
    _.map(async (E) => {
      try {
        const z = n.looseRoutesById[E.routeId],
          B = _[E.index - 1]?.context ?? n.options.context;
        if (z.options.context) {
          const J = {
            deps: E.loaderDeps,
            params: E.params,
            context: B ?? {},
            location: x,
            navigate: (Y) => n.navigate({ ...Y, _fromLocation: x }),
            buildLocation: n.buildLocation,
            cause: E.cause,
            abortController: E.abortController,
            preload: !1,
            matches: y,
            routeId: z.id,
          };
          E.__routeContext = z.options.context(J) ?? void 0;
        }
        E.context = { ...B, ...E.__routeContext, ...E.__beforeLoadContext };
        const X = {
            ssr: n.options.ssr,
            matches: _,
            match: E,
            params: E.params,
            loaderData: E.loaderData,
          },
          G = await z.options.head?.(X),
          K = await z.options.scripts?.(X);
        ((E.meta = G?.meta),
          (E.links = G?.links),
          (E.headScripts = G?.scripts),
          (E.styles = G?.styles),
          (E.scripts = K));
      } catch (z) {
        if (ne(z))
          ((E.error = { isNotFound: !0 }),
            console.error(`NotFound error during hydration for routeId: ${E.routeId}`, z));
        else
          throw (
            (E.error = z),
            console.error(`Error during hydration for route ${E.routeId}:`, z),
            z
          );
      }
    }),
  );
  const A = y[y.length - 1].id !== f;
  if (!y.some((E) => E.ssr === !1) && !A)
    return (
      y.forEach((E) => {
        E._nonReactive.dehydrated = void 0;
      }),
      n.stores.resolvedLocation.set(n.stores.location.get()),
      m
    );
  const j = Promise.resolve()
    .then(() => n.load())
    .catch((E) => {
      console.error("Error during router hydration:", E);
    });
  if (A) {
    const E = y[1];
    (E || Ee(),
      p(E),
      (E._displayPending = !0),
      (E._nonReactive.displayPendingPromise = j),
      j.then(() => {
        n.batch(() => {
          (n.stores.status.get() === "pending" &&
            (n.stores.status.set("idle"), n.stores.resolvedLocation.set(n.stores.location.get())),
            n.updateMatch(E.id, (z) => ({
              ...z,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            })));
        });
      }));
  }
  return m;
}
var Ur = W.use,
  Qi = typeof window < "u" ? W.useLayoutEffect : W.useEffect;
function _c(n) {
  const i = W.useRef({ value: n, prev: null }),
    s = i.current.value;
  return (n !== s && (i.current = { value: n, prev: s }), i.current.prev);
}
function Ex(n, i, s = {}, r = {}) {
  W.useEffect(() => {
    if (!n.current || r.disabled || typeof IntersectionObserver != "function") return;
    const c = new IntersectionObserver(([f]) => {
      i(f);
    }, s);
    return (
      c.observe(n.current),
      () => {
        c.disconnect();
      }
    );
  }, [i, s, r.disabled, n]);
}
function Rx(n) {
  const i = W.useRef(null);
  return (W.useImperativeHandle(n, () => i.current, []), i);
}
function Tx({ promise: n }) {
  if (Ur) return Ur(n);
  const i = yS(n);
  if (i[en].status === "pending") throw i;
  if (i[en].status === "error") throw i[en].error;
  return i[en].data;
}
function Ax(n) {
  const i = O.jsx(Mx, { ...n });
  return n.fallback ? O.jsx(W.Suspense, { fallback: n.fallback, children: i }) : i;
}
function Mx(n) {
  const i = Tx(n);
  return n.children(i);
}
function Fc(n) {
  const i = n.errorComponent ?? Ic;
  return O.jsx(wx, {
    getResetKey: n.getResetKey,
    onCatch: n.onCatch,
    children: ({ error: s, reset: r }) =>
      s ? W.createElement(i, { error: s, reset: r }) : n.children,
  });
}
var wx = class extends W.Component {
  constructor(...n) {
    (super(...n), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(n, i) {
    const s = n.getResetKey();
    return i.error && i.resetKey !== s ? { resetKey: s, error: null } : { resetKey: s };
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidCatch(n, i) {
    this.props.onCatch && this.props.onCatch(n, i);
  }
  render() {
    return this.props.children({
      error: this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function Ic({ error: n }) {
  const [i, s] = W.useState(!1);
  return O.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      O.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          O.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }),
          O.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => s((r) => !r),
            children: i ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      O.jsx("div", { style: { height: ".25rem" } }),
      i
        ? O.jsx("div", {
            children: O.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: n.message ? O.jsx("code", { children: n.message }) : null,
            }),
          })
        : null,
    ],
  });
}
function zx({ children: n, fallback: i = null }) {
  return $c() ? O.jsx(ql.Fragment, { children: n }) : O.jsx(ql.Fragment, { children: i });
}
function $c() {
  return ql.useSyncExternalStore(
    Ox,
    () => !0,
    () => !1,
  );
}
function Ox() {
  return () => {};
}
var cv = W.createContext(null);
function oe(n) {
  return W.useContext(cv);
}
var Kr = W.createContext(void 0),
  Cx = W.createContext(void 0),
  Ht = ((n) => (
    (n[(n.None = 0)] = "None"),
    (n[(n.Mutable = 1)] = "Mutable"),
    (n[(n.Watching = 2)] = "Watching"),
    (n[(n.RecursedCheck = 4)] = "RecursedCheck"),
    (n[(n.Recursed = 8)] = "Recursed"),
    (n[(n.Dirty = 16)] = "Dirty"),
    (n[(n.Pending = 32)] = "Pending"),
    n
  ))(Ht || {});
function jx({ update: n, notify: i, unwatched: s }) {
  return { link: r, unlink: c, propagate: f, checkDirty: h, shallowPropagate: y };
  function r(p, b, v) {
    const _ = b.depsTail;
    if (_ !== void 0 && _.dep === p) return;
    const x = _ !== void 0 ? _.nextDep : b.deps;
    if (x !== void 0 && x.dep === p) {
      ((x.version = v), (b.depsTail = x));
      return;
    }
    const A = p.subsTail;
    if (A !== void 0 && A.version === v && A.sub === b) return;
    const j =
      (b.depsTail =
      p.subsTail =
        { version: v, dep: p, sub: b, prevDep: _, nextDep: x, prevSub: A, nextSub: void 0 });
    (x !== void 0 && (x.prevDep = j),
      _ !== void 0 ? (_.nextDep = j) : (b.deps = j),
      A !== void 0 ? (A.nextSub = j) : (p.subs = j));
  }
  function c(p, b = p.sub) {
    const v = p.dep,
      _ = p.prevDep,
      x = p.nextDep,
      A = p.nextSub,
      j = p.prevSub;
    return (
      x !== void 0 ? (x.prevDep = _) : (b.depsTail = _),
      _ !== void 0 ? (_.nextDep = x) : (b.deps = x),
      A !== void 0 ? (A.prevSub = j) : (v.subsTail = j),
      j !== void 0 ? (j.nextSub = A) : (v.subs = A) === void 0 && s(v),
      x
    );
  }
  function f(p) {
    let b = p.nextSub,
      v;
    t: do {
      const _ = p.sub;
      let x = _.flags;
      if (
        (x & 60
          ? x & 12
            ? x & 4
              ? !(x & 48) && m(p, _)
                ? ((_.flags = x | 40), (x &= 1))
                : (x = 0)
              : (_.flags = (x & -9) | 32)
            : (x = 0)
          : (_.flags = x | 32),
        x & 2 && i(_),
        x & 1)
      ) {
        const A = _.subs;
        if (A !== void 0) {
          const j = (p = A).nextSub;
          j !== void 0 && ((v = { value: b, prev: v }), (b = j));
          continue;
        }
      }
      if ((p = b) !== void 0) {
        b = p.nextSub;
        continue;
      }
      for (; v !== void 0; )
        if (((p = v.value), (v = v.prev), p !== void 0)) {
          b = p.nextSub;
          continue t;
        }
      break;
    } while (!0);
  }
  function h(p, b) {
    let v,
      _ = 0,
      x = !1;
    t: do {
      const A = p.dep,
        j = A.flags;
      if (b.flags & 16) x = !0;
      else if ((j & 17) === 17) {
        if (n(A)) {
          const E = A.subs;
          (E.nextSub !== void 0 && y(E), (x = !0));
        }
      } else if ((j & 33) === 33) {
        ((p.nextSub !== void 0 || p.prevSub !== void 0) && (v = { value: p, prev: v }),
          (p = A.deps),
          (b = A),
          ++_);
        continue;
      }
      if (!x) {
        const E = p.nextDep;
        if (E !== void 0) {
          p = E;
          continue;
        }
      }
      for (; _--; ) {
        const E = b.subs,
          z = E.nextSub !== void 0;
        if ((z ? ((p = v.value), (v = v.prev)) : (p = E), x)) {
          if (n(b)) {
            (z && y(E), (b = p.sub));
            continue;
          }
          x = !1;
        } else b.flags &= -33;
        b = p.sub;
        const B = p.nextDep;
        if (B !== void 0) {
          p = B;
          continue t;
        }
      }
      return x;
    } while (!0);
  }
  function y(p) {
    do {
      const b = p.sub,
        v = b.flags;
      (v & 48) === 32 && ((b.flags = v | 16), (v & 6) === 2 && i(b));
    } while ((p = p.nextSub) !== void 0);
  }
  function m(p, b) {
    let v = b.depsTail;
    for (; v !== void 0; ) {
      if (v === p) return !0;
      v = v.prevDep;
    }
    return !1;
  }
}
function Dx(n, i, s) {
  const r = typeof n == "object",
    c = r ? n : void 0;
  return {
    next: (r ? n.next : n)?.bind(c),
    error: (r ? n.error : i)?.bind(c),
    complete: (r ? n.complete : s)?.bind(c),
  };
}
const Lc = [];
let zr = 0;
const {
  link: Gp,
  unlink: Nx,
  propagate: Lx,
  checkDirty: fv,
  shallowPropagate: Qp,
} = jx({
  update(n) {
    return n._update();
  },
  notify(n) {
    ((Lc[Uc++] = n), (n.flags &= ~Ht.Watching));
  },
  unwatched(n) {
    n.depsTail !== void 0 && ((n.depsTail = void 0), (n.flags = Ht.Mutable | Ht.Dirty), Br(n));
  },
});
let Er = 0,
  Uc = 0,
  tn,
  Bc = 0;
function dv(n) {
  try {
    (++Bc, n());
  } finally {
    --Bc || hv();
  }
}
function Br(n) {
  const i = n.depsTail;
  let s = i !== void 0 ? i.nextDep : n.deps;
  for (; s !== void 0; ) s = Nx(s, n);
}
function hv() {
  if (!(Bc > 0)) {
    for (; Er < Uc; ) {
      const n = Lc[Er];
      ((Lc[Er++] = void 0), n.notify());
    }
    ((Er = 0), (Uc = 0));
  }
}
function Vp(n, i) {
  const s = typeof n == "function",
    r = n,
    c = {
      _snapshot: s ? void 0 : n,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: s ? Ht.None : Ht.Mutable,
      get() {
        return (tn !== void 0 && Gp(c, tn, zr), c._snapshot);
      },
      subscribe(f) {
        const h = Dx(f),
          y = { current: !1 },
          m = Ux(() => {
            (c.get(), y.current ? h.next?.(c._snapshot) : (y.current = !0));
          });
        return {
          unsubscribe: () => {
            m.stop();
          },
        };
      },
      _update(f) {
        const h = tn,
          y = i?.compare ?? Object.is;
        if (s) ((tn = c), ++zr, (c.depsTail = void 0));
        else if (f === void 0) return !1;
        s && (c.flags = Ht.Mutable | Ht.RecursedCheck);
        try {
          const m = c._snapshot,
            p = typeof f == "function" ? f(m) : f === void 0 && s ? r(m) : f;
          return m === void 0 || !y(m, p) ? ((c._snapshot = p), !0) : !1;
        } finally {
          ((tn = h), s && (c.flags &= ~Ht.RecursedCheck), Br(c));
        }
      },
    };
  return (
    s
      ? ((c.flags = Ht.Mutable | Ht.Dirty),
        (c.get = function () {
          const f = c.flags;
          if (f & Ht.Dirty || (f & Ht.Pending && fv(c.deps, c))) {
            if (c._update()) {
              const h = c.subs;
              h !== void 0 && Qp(h);
            }
          } else f & Ht.Pending && (c.flags = f & ~Ht.Pending);
          return (tn !== void 0 && Gp(c, tn, zr), c._snapshot);
        }))
      : (c.set = function (f) {
          if (c._update(f)) {
            const h = c.subs;
            h !== void 0 && (Lx(h), Qp(h), hv());
          }
        }),
    c
  );
}
function Ux(n) {
  const i = () => {
      const r = tn;
      ((tn = s), ++zr, (s.depsTail = void 0), (s.flags = Ht.Watching | Ht.RecursedCheck));
      try {
        return n();
      } finally {
        ((tn = r), (s.flags &= ~Ht.RecursedCheck), Br(s));
      }
    },
    s = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: Ht.Watching | Ht.RecursedCheck,
      notify() {
        const r = this.flags;
        r & Ht.Dirty || (r & Ht.Pending && fv(this.deps, this)) ? i() : (this.flags = Ht.Watching);
      },
      stop() {
        ((this.flags = Ht.None), (this.depsTail = void 0), Br(this));
      },
    };
  return (i(), s);
}
var xc = { exports: {} },
  Ec = {},
  Rc = { exports: {} },
  Tc = {};
var kp;
function Bx() {
  if (kp) return Tc;
  kp = 1;
  var n = Fi();
  function i(v, _) {
    return (v === _ && (v !== 0 || 1 / v === 1 / _)) || (v !== v && _ !== _);
  }
  var s = typeof Object.is == "function" ? Object.is : i,
    r = n.useState,
    c = n.useEffect,
    f = n.useLayoutEffect,
    h = n.useDebugValue;
  function y(v, _) {
    var x = _(),
      A = r({ inst: { value: x, getSnapshot: _ } }),
      j = A[0].inst,
      E = A[1];
    return (
      f(
        function () {
          ((j.value = x), (j.getSnapshot = _), m(j) && E({ inst: j }));
        },
        [v, x, _],
      ),
      c(
        function () {
          return (
            m(j) && E({ inst: j }),
            v(function () {
              m(j) && E({ inst: j });
            })
          );
        },
        [v],
      ),
      h(x),
      x
    );
  }
  function m(v) {
    var _ = v.getSnapshot;
    v = v.value;
    try {
      var x = _();
      return !s(v, x);
    } catch {
      return !0;
    }
  }
  function p(v, _) {
    return _();
  }
  var b =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? p
      : y;
  return (
    (Tc.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : b),
    Tc
  );
}
var Xp;
function Hx() {
  return (Xp || ((Xp = 1), (Rc.exports = Bx())), Rc.exports);
}
var Kp;
function qx() {
  if (Kp) return Ec;
  Kp = 1;
  var n = Fi(),
    i = Hx();
  function s(p, b) {
    return (p === b && (p !== 0 || 1 / p === 1 / b)) || (p !== p && b !== b);
  }
  var r = typeof Object.is == "function" ? Object.is : s,
    c = i.useSyncExternalStore,
    f = n.useRef,
    h = n.useEffect,
    y = n.useMemo,
    m = n.useDebugValue;
  return (
    (Ec.useSyncExternalStoreWithSelector = function (p, b, v, _, x) {
      var A = f(null);
      if (A.current === null) {
        var j = { hasValue: !1, value: null };
        A.current = j;
      } else j = A.current;
      A = y(
        function () {
          function z(J) {
            if (!B) {
              if (((B = !0), (X = J), (J = _(J)), x !== void 0 && j.hasValue)) {
                var Y = j.value;
                if (x(Y, J)) return (G = Y);
              }
              return (G = J);
            }
            if (((Y = G), r(X, J))) return Y;
            var Z = _(J);
            return x !== void 0 && x(Y, Z) ? ((X = J), Y) : ((X = J), (G = Z));
          }
          var B = !1,
            X,
            G,
            K = v === void 0 ? null : v;
          return [
            function () {
              return z(b());
            },
            K === null
              ? void 0
              : function () {
                  return z(K());
                },
          ];
        },
        [b, v, _, x],
      );
      var E = c(p, A[0], A[1]);
      return (
        h(
          function () {
            ((j.hasValue = !0), (j.value = E));
          },
          [E],
        ),
        m(E),
        E
      );
    }),
    Ec
  );
}
var Zp;
function Yx() {
  return (Zp || ((Zp = 1), (xc.exports = qx())), xc.exports);
}
var Gx = Yx();
function Qx(n, i) {
  return n === i;
}
function Xt(n, i, s = Qx) {
  const r = W.useCallback(
      (h) => {
        if (!n) return () => {};
        const { unsubscribe: y } = n.subscribe(h);
        return y;
      },
      [n],
    ),
    c = W.useCallback(() => n?.get(), [n]);
  return Gx.useSyncExternalStoreWithSelector(r, c, c, i, s);
}
var Vx = { get: () => {}, subscribe: () => ({ unsubscribe: () => {} }) };
function Ya(n) {
  const i = oe(),
    s = W.useContext(n.from ? Cx : Kr),
    r = n.from ?? s,
    c = r ? (n.from ? i.stores.getRouteMatchStore(r) : i.stores.matchStores.get(r)) : void 0,
    f = W.useRef(void 0);
  return Xt(c ?? Vx, (h) => {
    if (((n.shouldThrow ?? !0) && !h && Ee(), h === void 0)) return;
    const y = n.select ? n.select(h) : h;
    if (n.structuralSharing ?? i.options.defaultStructuralSharing) {
      const m = Da(f.current, y);
      return ((f.current = m), m);
    }
    return y;
  });
}
function mv(n) {
  return Ya({
    from: n.from,
    strict: n.strict,
    structuralSharing: n.structuralSharing,
    select: (i) => (n.select ? n.select(i.loaderData) : i.loaderData),
  });
}
function pv(n) {
  const { select: i, ...s } = n;
  return Ya({ ...s, select: (r) => (i ? i(r.loaderDeps) : r.loaderDeps) });
}
function yv(n) {
  return Ya({
    from: n.from,
    shouldThrow: n.shouldThrow,
    structuralSharing: n.structuralSharing,
    strict: n.strict,
    select: (i) => {
      const s = n.strict === !1 ? i.params : i._strictParams;
      return n.select ? n.select(s) : s;
    },
  });
}
function vv(n) {
  return Ya({
    from: n.from,
    strict: n.strict,
    shouldThrow: n.shouldThrow,
    structuralSharing: n.structuralSharing,
    select: (i) => (n.select ? n.select(i.search) : i.search),
  });
}
function gv(n) {
  const i = oe();
  return W.useCallback((s) => i.navigate({ ...s, from: s.from ?? n?.from }), [n?.from, i]);
}
function bv(n) {
  return Ya({ ...n, select: (i) => (n.select ? n.select(i.context) : i.context) });
}
var kx = ry();
function Xx(n, i) {
  const s = oe(),
    r = Rx(i),
    {
      activeProps: c,
      inactiveProps: f,
      activeOptions: h,
      to: y,
      preload: m,
      preloadDelay: p,
      preloadIntentProximity: b,
      hashScrollIntoView: v,
      replace: _,
      startTransition: x,
      resetScroll: A,
      viewTransition: j,
      children: E,
      target: z,
      disabled: B,
      style: X,
      className: G,
      onClick: K,
      onBlur: J,
      onFocus: Y,
      onMouseEnter: Z,
      onMouseLeave: I,
      onTouchStart: ut,
      ignoreBlocker: st,
      params: it,
      search: Wt,
      hash: Ut,
      state: Gt,
      mask: H,
      reloadDocument: P,
      unsafeRelative: lt,
      from: xt,
      _fromLocation: Rt,
      ...w
    } = n,
    V = $c(),
    F = W.useMemo(
      () => n,
      [
        s,
        n.from,
        n._fromLocation,
        n.hash,
        n.to,
        n.search,
        n.params,
        n.state,
        n.mask,
        n.unsafeRelative,
      ],
    ),
    $ = Xt(
      s.stores.location,
      (Dt) => Dt,
      (Dt, ae) => Dt.href === ae.href,
    ),
    nt = W.useMemo(() => {
      const Dt = { _fromLocation: $, ...F };
      return s.buildLocation(Dt);
    }, [s, $, F]),
    dt = nt.maskedLocation ? nt.maskedLocation.publicHref : nt.publicHref,
    gt = nt.maskedLocation ? nt.maskedLocation.external : nt.external,
    Qt = W.useMemo(() => Ix(dt, gt, s.history, B), [B, gt, dt, s.history]),
    Ot = W.useMemo(() => {
      if (Qt?.external) return Cr(Qt.href, s.protocolAllowlist) ? void 0 : Qt.href;
      if (!$x(y) && !(typeof y != "string" || y.indexOf(":") === -1))
        try {
          return (new URL(y), Cr(y, s.protocolAllowlist) ? void 0 : y);
        } catch {}
    }, [y, Qt, s.protocolAllowlist]),
    an = W.useMemo(() => {
      if (Ot) return !1;
      if (h?.exact) {
        if (!Nb($.pathname, nt.pathname, s.basepath)) return !1;
      } else {
        const Dt = jr($.pathname, s.basepath),
          ae = jr(nt.pathname, s.basepath);
        if (!(Dt.startsWith(ae) && (Dt.length === ae.length || Dt[ae.length] === "/"))) return !1;
      }
      return (h?.includeSearch ?? !0) &&
        !he($.search, nt.search, { partial: !h?.exact, ignoreUndefined: !h?.explicitUndefined })
        ? !1
        : h?.includeHash
          ? V && $.hash === nt.hash
          : !0;
    }, [
      h?.exact,
      h?.explicitUndefined,
      h?.includeHash,
      h?.includeSearch,
      $,
      Ot,
      V,
      nt.hash,
      nt.pathname,
      nt.search,
      s.basepath,
    ]),
    ln = an ? (ja(c, {}) ?? Kx) : Ac,
    jn = an ? Ac : (ja(f, {}) ?? Ac),
    Yl = [G, ln.className, jn.className].filter(Boolean).join(" "),
    Pe = (X || ln.style || jn.style) && { ...X, ...ln.style, ...jn.style },
    [Gl, ka] = W.useState(!1),
    ts = W.useRef(!1),
    sn = n.reloadDocument || Ot ? !1 : (m ?? s.options.defaultPreload),
    da = p ?? s.options.defaultPreloadDelay ?? 0,
    Ve = W.useCallback(() => {
      s.preloadRoute({ ...F, _builtLocation: nt }).catch((Dt) => {
        (console.warn(Dt), console.warn(vS));
      });
    }, [s, F, nt]);
  (Ex(
    r,
    W.useCallback(
      (Dt) => {
        Dt?.isIntersecting && Ve();
      },
      [Ve],
    ),
    Fx,
    { disabled: !!B || sn !== "viewport" },
  ),
    W.useEffect(() => {
      ts.current || (!B && sn === "render" && (Ve(), (ts.current = !0)));
    }, [B, Ve, sn]));
  const Ql = (Dt) => {
    const ae = Dt.currentTarget.getAttribute("target"),
      Je = z !== void 0 ? z : ae;
    if (!B && !Wx(Dt) && !Dt.defaultPrevented && (!Je || Je === "_self") && Dt.button === 0) {
      (Dt.preventDefault(),
        kx.flushSync(() => {
          ka(!0);
        }));
      const Xa = s.subscribe("onResolved", () => {
        (Xa(), ka(!1));
      });
      s.navigate({
        ...F,
        replace: _,
        resetScroll: A,
        hashScrollIntoView: v,
        startTransition: x,
        viewTransition: j,
        ignoreBlocker: st,
      });
    }
  };
  if (Ot)
    return {
      ...w,
      ref: r,
      href: Ot,
      ...(E && { children: E }),
      ...(z && { target: z }),
      ...(B && { disabled: B }),
      ...(X && { style: X }),
      ...(G && { className: G }),
      ...(K && { onClick: K }),
      ...(J && { onBlur: J }),
      ...(Y && { onFocus: Y }),
      ...(Z && { onMouseEnter: Z }),
      ...(I && { onMouseLeave: I }),
      ...(ut && { onTouchStart: ut }),
    };
  const es = (Dt) => {
      if (B || sn !== "intent") return;
      if (!da) {
        Ve();
        return;
      }
      const ae = Dt.currentTarget;
      if (Gi.has(ae)) return;
      const Je = setTimeout(() => {
        (Gi.delete(ae), Ve());
      }, da);
      Gi.set(ae, Je);
    },
    Pr = (Dt) => {
      B || sn !== "intent" || Ve();
    },
    ce = (Dt) => {
      if (B || !sn || !da) return;
      const ae = Dt.currentTarget,
        Je = Gi.get(ae);
      Je && (clearTimeout(Je), Gi.delete(ae));
    };
  return {
    ...w,
    ...ln,
    ...jn,
    href: Qt?.href,
    ref: r,
    onClick: Ol([K, Ql]),
    onBlur: Ol([J, ce]),
    onFocus: Ol([Y, es]),
    onMouseEnter: Ol([Z, es]),
    onMouseLeave: Ol([I, ce]),
    onTouchStart: Ol([ut, Pr]),
    disabled: !!B,
    target: z,
    ...(Pe && { style: Pe }),
    ...(Yl && { className: Yl }),
    ...(B && Zx),
    ...(an && Px),
    ...(V && Gl && Jx),
  };
}
var Ac = {},
  Kx = { className: "active" },
  Zx = { role: "link", "aria-disabled": !0 },
  Px = { "data-status": "active", "aria-current": "page" },
  Jx = { "data-transitioning": "transitioning" },
  Gi = new WeakMap(),
  Fx = { rootMargin: "100px" },
  Ol = (n) => (i) => {
    for (const s of n)
      if (s) {
        if (i.defaultPrevented) return;
        s(i);
      }
  };
function Ix(n, i, s, r) {
  if (!r) return i ? { href: n, external: !0 } : { href: s.createHref(n) || "/", external: !1 };
}
function $x(n) {
  if (typeof n != "string") return !1;
  const i = n.charCodeAt(0);
  return i === 47 ? n.charCodeAt(1) !== 47 : i === 46;
}
var nn = W.forwardRef((n, i) => {
  const { _asChild: s, ...r } = n,
    { type: c, ...f } = Xx(r, i),
    h =
      typeof r.children == "function"
        ? r.children({ isActive: f["data-status"] === "active" })
        : r.children;
  if (!s) {
    const { disabled: y, ...m } = f;
    return W.createElement("a", m, h);
  }
  return W.createElement(s, f, h);
});
function Wx(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
var t2 = class extends My {
  constructor(i) {
    (super(i),
      (this.useMatch = (s) =>
        Ya({ select: s?.select, from: this.id, structuralSharing: s?.structuralSharing })),
      (this.useRouteContext = (s) => bv({ ...s, from: this.id })),
      (this.useSearch = (s) =>
        vv({ select: s?.select, structuralSharing: s?.structuralSharing, from: this.id })),
      (this.useParams = (s) =>
        yv({ select: s?.select, structuralSharing: s?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (s) => pv({ ...s, from: this.id })),
      (this.useLoaderData = (s) => mv({ ...s, from: this.id })),
      (this.useNavigate = () => gv({ from: this.fullPath })),
      (this.Link = ql.forwardRef((s, r) => O.jsx(nn, { ref: r, from: this.fullPath, ...s }))));
  }
};
function e2(n) {
  return new t2(n);
}
function n2() {
  return (n) => l2(n);
}
var a2 = class extends xS {
  constructor(n) {
    (super(n),
      (this.useMatch = (i) =>
        Ya({ select: i?.select, from: this.id, structuralSharing: i?.structuralSharing })),
      (this.useRouteContext = (i) => bv({ ...i, from: this.id })),
      (this.useSearch = (i) =>
        vv({ select: i?.select, structuralSharing: i?.structuralSharing, from: this.id })),
      (this.useParams = (i) =>
        yv({ select: i?.select, structuralSharing: i?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (i) => pv({ ...i, from: this.id })),
      (this.useLoaderData = (i) => mv({ ...i, from: this.id })),
      (this.useNavigate = () => gv({ from: this.fullPath })),
      (this.Link = ql.forwardRef((i, s) => O.jsx(nn, { ref: s, from: this.fullPath, ...i }))));
  }
};
function l2(n) {
  return new a2(n);
}
function Ga(n) {
  return new i2(n, { silent: !0 }).createRoute;
}
var i2 = class {
  constructor(n, i) {
    ((this.path = n),
      (this.createRoute = (s) => {
        const r = e2(s);
        return ((r.isRoot = !1), r);
      }),
      (this.silent = i?.silent));
  }
};
function Qa(n, i) {
  let s, r, c, f;
  const h = () => (
      s ||
        (s = n()
          .then((m) => {
            ((s = void 0), (r = m[i]));
          })
          .catch((m) => {
            if (
              ((c = m),
              yb(c) && c instanceof Error && typeof window < "u" && typeof sessionStorage < "u")
            ) {
              const p = `tanstack_router_reload:${c.message}`;
              sessionStorage.getItem(p) || (sessionStorage.setItem(p, "1"), (f = !0));
            }
          })),
      s
    ),
    y = function (p) {
      if (f) throw (window.location.reload(), new Promise(() => {}));
      if (c) throw c;
      if (!r)
        if (Ur) Ur(h());
        else throw h();
      return W.createElement(r, p);
    };
  return ((y.preload = h), y);
}
function s2(n) {
  const i = oe(),
    s = `not-found-${Xt(i.stores.location, (r) => r.pathname)}-${Xt(i.stores.status, (r) => r)}`;
  return O.jsx(Fc, {
    getResetKey: () => s,
    onCatch: (r, c) => {
      if (ne(r)) n.onCatch?.(r, c);
      else throw r;
    },
    errorComponent: ({ error: r }) => {
      if (ne(r)) return n.fallback?.(r);
      throw r;
    },
    children: n.children,
  });
}
function r2() {
  return O.jsx("p", { children: "Not Found" });
}
function Dl(n) {
  return O.jsx(O.Fragment, { children: n.children });
}
function Sv(n, i, s) {
  return i.options.notFoundComponent
    ? O.jsx(i.options.notFoundComponent, { ...s })
    : n.options.defaultNotFoundComponent
      ? O.jsx(n.options.defaultNotFoundComponent, { ...s })
      : O.jsx(r2, {});
}
function u2(n) {
  return null;
}
function o2() {
  return (u2(oe()), null);
}
var _v = W.memo(function ({ matchId: i }) {
  const s = oe(),
    r = s.stores.matchStores.get(i);
  r || Ee();
  const c = Xt(s.stores.loadedAt, (h) => h),
    f = Xt(r, (h) => h);
  return O.jsx(c2, {
    router: s,
    matchId: i,
    resetKey: c,
    matchState: W.useMemo(() => {
      const h = f.routeId,
        y = s.routesById[h].parentRoute?.id;
      return { routeId: h, ssr: f.ssr, _displayPending: f._displayPending, parentRouteId: y };
    }, [f._displayPending, f.routeId, f.ssr, s.routesById]),
  });
});
function c2({ router: n, matchId: i, resetKey: s, matchState: r }) {
  const c = n.routesById[r.routeId],
    f = c.options.pendingComponent ?? n.options.defaultPendingComponent,
    h = f ? O.jsx(f, {}) : null,
    y = c.options.errorComponent ?? n.options.defaultErrorComponent,
    m = c.options.onCatch ?? n.options.defaultOnCatch,
    p = c.isRoot
      ? (c.options.notFoundComponent ?? n.options.notFoundRoute?.options.component)
      : c.options.notFoundComponent,
    b = r.ssr === !1 || r.ssr === "data-only",
    v =
      (!c.isRoot || c.options.wrapInSuspense || b) &&
      (c.options.wrapInSuspense ?? f ?? (c.options.errorComponent?.preload || b))
        ? W.Suspense
        : Dl,
    _ = y ? Fc : Dl,
    x = p ? s2 : Dl;
  return O.jsxs(c.isRoot ? (c.options.shellComponent ?? Dl) : Dl, {
    children: [
      O.jsx(Kr.Provider, {
        value: i,
        children: O.jsx(v, {
          fallback: h,
          children: O.jsx(_, {
            getResetKey: () => s,
            errorComponent: y || Ic,
            onCatch: (A, j) => {
              if (ne(A)) throw ((A.routeId ??= r.routeId), A);
              m?.(A, j);
            },
            children: O.jsx(x, {
              fallback: (A) => {
                if (
                  ((A.routeId ??= r.routeId),
                  !p || (A.routeId && A.routeId !== r.routeId) || (!A.routeId && !c.isRoot))
                )
                  throw A;
                return W.createElement(p, A);
              },
              children:
                b || r._displayPending
                  ? O.jsx(zx, { fallback: h, children: O.jsx(Pp, { matchId: i }) })
                  : O.jsx(Pp, { matchId: i }),
            }),
          }),
        }),
      }),
      r.parentRouteId === Ua
        ? O.jsxs(O.Fragment, {
            children: [
              O.jsx(f2, { resetKey: s }),
              n.options.scrollRestoration && oy ? O.jsx(o2, {}) : null,
            ],
          })
        : null,
    ],
  });
}
function f2({ resetKey: n }) {
  const i = oe(),
    s = W.useRef(void 0);
  return (
    Qi(() => {
      const r = i.latestLocation.href;
      (s.current === void 0 || s.current !== r) &&
        (i.emit({
          type: "onRendered",
          ...Ul(i.stores.location.get(), i.stores.resolvedLocation.get()),
        }),
        (s.current = r));
    }, [i.latestLocation.state.__TSR_key, n, i]),
    null
  );
}
var Pp = W.memo(function ({ matchId: i }) {
    const s = oe(),
      r = (b, v) => s.getMatch(b.id)?._nonReactive[v] ?? b._nonReactive[v],
      c = s.stores.matchStores.get(i);
    c || Ee();
    const f = Xt(c, (b) => b),
      h = f.routeId,
      y = s.routesById[h],
      m = W.useMemo(() => {
        const b = (s.routesById[h].options.remountDeps ?? s.options.defaultRemountDeps)?.({
          routeId: h,
          loaderDeps: f.loaderDeps,
          params: f._strictParams,
          search: f._strictSearch,
        });
        return b ? JSON.stringify(b) : void 0;
      }, [
        h,
        f.loaderDeps,
        f._strictParams,
        f._strictSearch,
        s.options.defaultRemountDeps,
        s.routesById,
      ]),
      p = W.useMemo(() => {
        const b = y.options.component ?? s.options.defaultComponent;
        return b ? O.jsx(b, {}, m) : O.jsx(xv, {});
      }, [m, y.options.component, s.options.defaultComponent]);
    if (f._displayPending) throw r(f, "displayPendingPromise");
    if (f._forcePending) throw r(f, "minPendingPromise");
    if (f.status === "pending") {
      const b = y.options.pendingMinMs ?? s.options.defaultPendingMinMs;
      if (b) {
        const v = s.getMatch(f.id);
        if (v && !v._nonReactive.minPendingPromise) {
          const _ = Ha();
          ((v._nonReactive.minPendingPromise = _),
            setTimeout(() => {
              (_.resolve(), (v._nonReactive.minPendingPromise = void 0));
            }, b));
        }
      }
      throw r(f, "loadPromise");
    }
    if (f.status === "notFound") return (ne(f.error) || Ee(), Sv(s, y, f.error));
    if (f.status === "redirected") throw (xe(f.error) || Ee(), r(f, "loadPromise"));
    if (f.status === "error") throw f.error;
    return p;
  }),
  xv = W.memo(function () {
    const i = oe(),
      s = W.useContext(Kr);
    let r,
      c = !1,
      f;
    {
      const p = s ? i.stores.matchStores.get(s) : void 0;
      (([r, c] = Xt(p, (b) => [b?.routeId, b?.globalNotFound ?? !1])),
        (f = Xt(i.stores.matchesId, (b) => b[b.findIndex((v) => v === s) + 1])));
    }
    const h = r ? i.routesById[r] : void 0,
      y = i.options.defaultPendingComponent ? O.jsx(i.options.defaultPendingComponent, {}) : null;
    if (c) return (h || Ee(), Sv(i, h, void 0));
    if (!f) return null;
    const m = O.jsx(_v, { matchId: f });
    return r === Ua ? O.jsx(W.Suspense, { fallback: y, children: m }) : m;
  });
function d2() {
  const n = oe(),
    i = W.useRef({ router: n, mounted: !1 }),
    [s, r] = W.useState(!1),
    c = Xt(n.stores.isLoading, (v) => v),
    f = Xt(n.stores.hasPending, (v) => v),
    h = _c(c),
    y = c || s || f,
    m = _c(y),
    p = c || f,
    b = _c(p);
  return (
    (n.startTransition = (v) => {
      (r(!0),
        W.startTransition(() => {
          (v(), r(!1));
        }));
    }),
    W.useEffect(() => {
      const v = n.history.subscribe(n.load),
        _ = n.buildLocation({
          to: n.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        An(n.latestLocation.publicHref) !== An(_.publicHref) &&
          n.commitLocation({ ..._, replace: !0 }),
        () => {
          v();
        }
      );
    }, [n, n.history]),
    Qi(() => {
      if ((typeof window < "u" && n.ssr) || (i.current.router === n && i.current.mounted)) return;
      ((i.current = { router: n, mounted: !0 }),
        (async () => {
          try {
            await n.load();
          } catch (_) {
            console.error(_);
          }
        })());
    }, [n]),
    Qi(() => {
      h &&
        !c &&
        n.emit({ type: "onLoad", ...Ul(n.stores.location.get(), n.stores.resolvedLocation.get()) });
    }, [h, n, c]),
    Qi(() => {
      b &&
        !p &&
        n.emit({
          type: "onBeforeRouteMount",
          ...Ul(n.stores.location.get(), n.stores.resolvedLocation.get()),
        });
    }, [p, b, n]),
    Qi(() => {
      if (m && !y) {
        const v = Ul(n.stores.location.get(), n.stores.resolvedLocation.get());
        (n.emit({ type: "onResolved", ...v }),
          dv(() => {
            (n.stores.status.set("idle"), n.stores.resolvedLocation.set(n.stores.location.get()));
          }));
      }
    }, [y, m, n]),
    null
  );
}
function h2() {
  const n = oe(),
    i = n.routesById[Ua].options.pendingComponent ?? n.options.defaultPendingComponent,
    s = i ? O.jsx(i, {}) : null,
    r = O.jsxs(typeof document < "u" && n.ssr ? Dl : W.Suspense, {
      fallback: s,
      children: [O.jsx(d2, {}), O.jsx(m2, {})],
    });
  return n.options.InnerWrap ? O.jsx(n.options.InnerWrap, { children: r }) : r;
}
function m2() {
  const n = oe(),
    i = Xt(n.stores.firstId, (c) => c),
    s = Xt(n.stores.loadedAt, (c) => c),
    r = i ? O.jsx(_v, { matchId: i }) : null;
  return O.jsx(Kr.Provider, {
    value: i,
    children: n.options.disableGlobalCatchBoundary
      ? r
      : O.jsx(Fc, { getResetKey: () => s, errorComponent: Ic, onCatch: void 0, children: r }),
  });
}
var p2 = (n) => ({ createMutableStore: Vp, createReadonlyStore: Vp, batch: dv }),
  y2 = (n) => new v2(n),
  v2 = class extends nS {
    constructor(n) {
      super(n, p2);
    }
  };
function g2({ router: n, children: i, ...s }) {
  fy(s) && n.update({ ...n.options, ...s, context: { ...n.options.context, ...s.context } });
  const r = O.jsx(cv.Provider, { value: n, children: i });
  return n.options.Wrap ? O.jsx(n.options.Wrap, { children: r }) : r;
}
function b2({ router: n, ...i }) {
  return O.jsx(g2, { router: n, ...i, children: O.jsx(h2, {}) });
}
function Jp(n, i) {
  if (i)
    for (const [s, r] of Object.entries(i))
      s !== "suppressHydrationWarning" &&
        r !== void 0 &&
        r !== !1 &&
        n.setAttribute(s, typeof r == "boolean" ? "" : String(r));
}
function Ev(n) {
  const { attrs: i, children: s, nonce: r, preventScriptHoist: c } = n;
  switch (n.tag) {
    case "title":
      return O.jsx("title", { ...i, suppressHydrationWarning: !0, children: s });
    case "meta":
      return O.jsx("meta", { ...i, suppressHydrationWarning: !0 });
    case "link":
      return O.jsx("link", {
        ...i,
        precedence: i?.precedence ?? (i?.rel === "stylesheet" ? "default" : void 0),
        nonce: r,
        suppressHydrationWarning: !0,
      });
    case "style":
      return (
        n.inlineCss,
        O.jsx("style", { ...i, dangerouslySetInnerHTML: { __html: s }, nonce: r })
      );
    case "script":
      return O.jsx(S2, { attrs: i, preventScriptHoist: c, children: s });
    default:
      return null;
  }
}
function S2({ attrs: n, children: i, preventScriptHoist: s }) {
  oe();
  const r = $c(),
    c =
      typeof n?.type == "string" &&
      n.type !== "" &&
      n.type !== "text/javascript" &&
      n.type !== "module";
  if (
    (W.useEffect(() => {
      if (!c) {
        if (n?.src) {
          const f = (() => {
            try {
              const y = document.baseURI || window.location.href;
              return new URL(n.src, y).href;
            } catch {
              return n.src;
            }
          })();
          for (const y of document.querySelectorAll("script[src]")) if (y.src === f) return;
          const h = document.createElement("script");
          return (Jp(h, n), document.head.appendChild(h), () => h.remove());
        }
        if (typeof i == "string") {
          const f = typeof n?.type == "string" ? n.type : "text/javascript",
            h = typeof n?.nonce == "string" ? n.nonce : void 0;
          for (const m of document.querySelectorAll("script:not([src])")) {
            if (!(m instanceof HTMLScriptElement)) continue;
            const p = m.getAttribute("type") ?? "text/javascript",
              b = m.getAttribute("nonce") ?? void 0;
            if (m.textContent === i && p === f && b === h) return;
          }
          const y = document.createElement("script");
          return ((y.textContent = i), Jp(y, n), document.head.appendChild(y), () => y.remove());
        }
      }
    }, [n, i, c]),
    c && typeof i == "string")
  )
    return O.jsx("script", {
      ...n,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: i },
    });
  if (!r) {
    if (n?.src) return O.jsx("script", { ...n, suppressHydrationWarning: !0 });
    if (typeof i == "string")
      return O.jsx("script", {
        ...n,
        dangerouslySetInnerHTML: { __html: i },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
var _2 = (n) => {
  const i = oe(),
    s = i.options.ssr?.nonce,
    r = Xt(i.stores.matches, (v) => v.map((_) => _.meta).filter((_) => _ !== void 0), he),
    c = W.useMemo(() => {
      const v = [],
        _ = {};
      let x;
      for (let A = r.length - 1; A >= 0; A--) {
        const j = r[A];
        for (let E = j.length - 1; E >= 0; E--) {
          const z = j[E];
          if (z)
            if (z.title) x || (x = { tag: "title", children: z.title });
            else if ("script:ld+json" in z)
              try {
                const B = JSON.stringify(z["script:ld+json"]);
                v.push({ tag: "script", attrs: { type: "application/ld+json" }, children: _b(B) });
              } catch {}
            else {
              const B = z.name ?? z.property;
              if (B) {
                if (_[B]) continue;
                _[B] = !0;
              }
              v.push({ tag: "meta", attrs: { ...z, nonce: s } });
            }
        }
      }
      return (
        x && v.push(x),
        s && v.push({ tag: "meta", attrs: { property: "csp-nonce", content: s } }),
        v.reverse(),
        v
      );
    }, [r, s]),
    f = Xt(
      i.stores.matches,
      (v) =>
        v
          .flatMap((_) => _.links ?? [])
          .filter((_) => _ !== void 0)
          .map((_) => ({ tag: "link", attrs: { ..._, nonce: s } })),
      he,
    ),
    h = Xt(
      i.stores.matches,
      (v) => {
        const _ = i.ssr?.manifest,
          x = [];
        return (
          _ &&
            (v.forEach((A) => {
              _.routes[A.routeId]?.css?.forEach((j) => {
                const E = _S(j);
                x.push({
                  tag: "link",
                  attrs: {
                    rel: "stylesheet",
                    ...E,
                    crossOrigin: Ay(n, "stylesheet") ?? E.crossOrigin,
                    suppressHydrationWarning: !0,
                    nonce: s,
                  },
                });
              });
            }),
            _.inlineStyle &&
              x.push({
                tag: "style",
                attrs: { ..._.inlineStyle.attrs, nonce: s },
                children: _.inlineStyle.children,
                inlineCss: !0,
              })),
          x
        );
      },
      he,
    ),
    y = Xt(
      i.stores.matches,
      (v) => {
        const _ = [],
          x = i.ssr?.manifest;
        return (
          x &&
            v.forEach((A) => {
              x.routes[A.routeId]?.preloads?.forEach((j) => {
                _.push({ tag: "link", attrs: { ...bS(x, j, n), nonce: s } });
              });
            }),
          _
        );
      },
      he,
    ),
    m = Xt(
      i.stores.matches,
      (v) =>
        v
          .flatMap((_) => _.styles ?? [])
          .filter((_) => _ !== void 0)
          .map(({ children: _, ...x }) => ({
            tag: "style",
            attrs: { ...x, nonce: s },
            children: _,
          })),
      he,
    ),
    p = Xt(
      i.stores.matches,
      (v) =>
        v
          .flatMap((_) => _.headScripts ?? [])
          .filter((_) => _ !== void 0)
          .map(({ children: _, ...x }) => ({
            tag: "script",
            attrs: { ...x, nonce: s },
            children: _,
          })),
      he,
    ),
    b = [];
  return (_r(b, c), b.push(...y), _r(b, f), b.push(...h), _r(b, m), _r(b, p), b);
};
function x2(n) {
  const i = _2(n.assetCrossOrigin),
    s = oe().options.ssr?.nonce;
  return O.jsx(O.Fragment, {
    children: i.map((r) =>
      W.createElement(Ev, { ...r, key: `tsr-meta-${JSON.stringify(r)}`, nonce: s }),
    ),
  });
}
var E2 = () => {
  const n = oe(),
    i = n.options.ssr?.nonce,
    s = (f) => {
      const h = [],
        y = n.ssr?.manifest;
      if (!y) return [];
      for (const m of f) {
        const p = y.routes[m.routeId]?.scripts;
        if (p)
          for (const b of p)
            h.push({
              tag: "script",
              attrs: { ...b.attrs, nonce: i },
              children: b.children,
              ...(typeof b.attrs?.src == "string" ? { preventScriptHoist: !0 } : {}),
            });
      }
      return h;
    },
    r = (f) =>
      f
        .map((h) => h.scripts)
        .flat(1)
        .filter(Boolean)
        .map(({ children: h, ...y }) => ({
          tag: "script",
          attrs: { ...y, suppressHydrationWarning: !0, nonce: i },
          children: h,
        })),
    c = Xt(n.stores.matches, s, he);
  return R2(n, Xt(n.stores.matches, r, he), c);
};
function R2(n, i, s) {
  const r = [...i, ...s];
  return O.jsx(O.Fragment, {
    children: r.map((c, f) => W.createElement(Ev, { ...c, key: `tsr-scripts-${c.tag}-${f}` })),
  });
}
var Ll = (n, i) => {
  const s = { type: "request", ...(i || n) };
  return {
    options: s,
    middleware: (r) => Ll({}, Object.assign(s, { middleware: r })),
    inputValidator: (r) => Ll({}, Object.assign(s, { inputValidator: r })),
    client: (r) => Ll({}, Object.assign(s, { client: r })),
    server: (r) => Ll({}, Object.assign(s, { server: r })),
  };
};
function Rv(n, i) {
  for (let s = 0, r = i.length; s < r; s++) {
    const c = i[s];
    n.has(c) || (n.add(c), c.extends && Rv(n, c.extends));
  }
}
var T2 = (n) => ({
  getOptions: async () => {
    const i = await n();
    if (i.serializationAdapters) {
      const s = new Set();
      (Rv(s, i.serializationAdapters), (i.serializationAdapters = Array.from(s)));
    }
    return i;
  },
  createMiddleware: Ll,
});
const A2 = Ll(),
  Fp = T2(() => ({ requestMiddleware: [A2] }));
var Zr = class {
    constructor() {
      ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(n), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  M2 = class extends Zr {
    #t;
    #e;
    #n;
    constructor() {
      (super(),
        (this.#n = (n) => {
          if (typeof window < "u" && window.addEventListener) {
            const i = () => n();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(n) {
      ((this.#n = n),
        this.#e?.(),
        (this.#e = n((i) => {
          typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
        })));
    }
    setFocused(n) {
      this.#t !== n && ((this.#t = n), this.onFocus());
    }
    onFocus() {
      const n = this.isFocused();
      this.listeners.forEach((i) => {
        i(n);
      });
    }
    isFocused() {
      return typeof this.#t == "boolean"
        ? this.#t
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  Tv = new M2(),
  w2 = {
    setTimeout: (n, i) => setTimeout(n, i),
    clearTimeout: (n) => clearTimeout(n),
    setInterval: (n, i) => setInterval(n, i),
    clearInterval: (n) => clearInterval(n),
  },
  z2 = class {
    #t = w2;
    #e = !1;
    setTimeoutProvider(n) {
      this.#t = n;
    }
    setTimeout(n, i) {
      return this.#t.setTimeout(n, i);
    }
    clearTimeout(n) {
      this.#t.clearTimeout(n);
    }
    setInterval(n, i) {
      return this.#t.setInterval(n, i);
    }
    clearInterval(n) {
      this.#t.clearInterval(n);
    }
  },
  Hc = new z2();
function O2(n) {
  setTimeout(n, 0);
}
var C2 = typeof window > "u" || "Deno" in globalThis;
function Ze() {}
function j2(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function D2(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function N2(n, i) {
  return Math.max(n + (i || 0) - Date.now(), 0);
}
function qc(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function L2(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function Ip(n, i) {
  const { type: s = "all", exact: r, fetchStatus: c, predicate: f, queryKey: h, stale: y } = n;
  if (h) {
    if (r) {
      if (i.queryHash !== Wc(h, i.options)) return !1;
    } else if (!Ji(i.queryKey, h)) return !1;
  }
  if (s !== "all") {
    const m = i.isActive();
    if ((s === "active" && !m) || (s === "inactive" && m)) return !1;
  }
  return !(
    (typeof y == "boolean" && i.isStale() !== y) ||
    (c && c !== i.state.fetchStatus) ||
    (f && !f(i))
  );
}
function $p(n, i) {
  const { exact: s, status: r, predicate: c, mutationKey: f } = n;
  if (f) {
    if (!i.options.mutationKey) return !1;
    if (s) {
      if (Pi(i.options.mutationKey) !== Pi(f)) return !1;
    } else if (!Ji(i.options.mutationKey, f)) return !1;
  }
  return !((r && i.state.status !== r) || (c && !c(i)));
}
function Wc(n, i) {
  return (i?.queryKeyHashFn || Pi)(n);
}
function Pi(n) {
  return JSON.stringify(n, (i, s) =>
    Yc(s)
      ? Object.keys(s)
          .sort()
          .reduce((r, c) => ((r[c] = s[c]), r), {})
      : s,
  );
}
function Ji(n, i) {
  return n === i
    ? !0
    : typeof n != typeof i
      ? !1
      : n && i && typeof n == "object" && typeof i == "object"
        ? Object.keys(i).every((s) => Ji(n[s], i[s]))
        : !1;
}
var U2 = Object.prototype.hasOwnProperty;
function Av(n, i, s = 0) {
  if (n === i) return n;
  if (s > 500) return i;
  const r = Wp(n) && Wp(i);
  if (!r && !(Yc(n) && Yc(i))) return i;
  const f = (r ? n : Object.keys(n)).length,
    h = r ? i : Object.keys(i),
    y = h.length,
    m = r ? new Array(y) : {};
  let p = 0;
  for (let b = 0; b < y; b++) {
    const v = r ? b : h[b],
      _ = n[v],
      x = i[v];
    if (_ === x) {
      ((m[v] = _), (r ? b < f : U2.call(n, v)) && p++);
      continue;
    }
    if (_ === null || x === null || typeof _ != "object" || typeof x != "object") {
      m[v] = x;
      continue;
    }
    const A = Av(_, x, s + 1);
    ((m[v] = A), A === _ && p++);
  }
  return f === y && p === f ? n : m;
}
function Wp(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Yc(n) {
  if (!ty(n)) return !1;
  const i = n.constructor;
  if (i === void 0) return !0;
  const s = i.prototype;
  return !(
    !ty(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function ty(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function B2(n) {
  return new Promise((i) => {
    Hc.setTimeout(i, n);
  });
}
function H2(n, i, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(n, i)
    : s.structuralSharing !== !1
      ? Av(n, i)
      : i;
}
function q2(n, i, s = 0) {
  const r = [...n, i];
  return s && r.length > s ? r.slice(1) : r;
}
function Y2(n, i, s = 0) {
  const r = [i, ...n];
  return s && r.length > s ? r.slice(0, -1) : r;
}
var tf = Symbol();
function Mv(n, i) {
  return !n.queryFn && i?.initialPromise
    ? () => i.initialPromise
    : !n.queryFn || n.queryFn === tf
      ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
      : n.queryFn;
}
function G2(n, i, s) {
  let r = !1,
    c;
  return (
    Object.defineProperty(n, "signal", {
      enumerable: !0,
      get: () => (
        (c ??= i()),
        r || ((r = !0), c.aborted ? s() : c.addEventListener("abort", s, { once: !0 })),
        c
      ),
    }),
    n
  );
}
var wv = (() => {
  let n = () => C2;
  return {
    isServer() {
      return n();
    },
    setIsServer(i) {
      n = i;
    },
  };
})();
function Q2() {
  let n, i;
  const s = new Promise((c, f) => {
    ((n = c), (i = f));
  });
  ((s.status = "pending"), s.catch(() => {}));
  function r(c) {
    (Object.assign(s, c), delete s.resolve, delete s.reject);
  }
  return (
    (s.resolve = (c) => {
      (r({ status: "fulfilled", value: c }), n(c));
    }),
    (s.reject = (c) => {
      (r({ status: "rejected", reason: c }), i(c));
    }),
    s
  );
}
var V2 = O2;
function k2() {
  let n = [],
    i = 0,
    s = (y) => {
      y();
    },
    r = (y) => {
      y();
    },
    c = V2;
  const f = (y) => {
      i
        ? n.push(y)
        : c(() => {
            s(y);
          });
    },
    h = () => {
      const y = n;
      ((n = []),
        y.length &&
          c(() => {
            r(() => {
              y.forEach((m) => {
                s(m);
              });
            });
          }));
    };
  return {
    batch: (y) => {
      let m;
      i++;
      try {
        m = y();
      } finally {
        (i--, i || h());
      }
      return m;
    },
    batchCalls:
      (y) =>
      (...m) => {
        f(() => {
          y(...m);
        });
      },
    schedule: f,
    setNotifyFunction: (y) => {
      s = y;
    },
    setBatchNotifyFunction: (y) => {
      r = y;
    },
    setScheduler: (y) => {
      c = y;
    },
  };
}
var me = k2(),
  X2 = class extends Zr {
    #t = !0;
    #e;
    #n;
    constructor() {
      (super(),
        (this.#n = (n) => {
          if (typeof window < "u" && window.addEventListener) {
            const i = () => n(!0),
              s = () => n(!1);
            return (
              window.addEventListener("online", i, !1),
              window.addEventListener("offline", s, !1),
              () => {
                (window.removeEventListener("online", i), window.removeEventListener("offline", s));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(n) {
      ((this.#n = n), this.#e?.(), (this.#e = n(this.setOnline.bind(this))));
    }
    setOnline(n) {
      this.#t !== n &&
        ((this.#t = n),
        this.listeners.forEach((s) => {
          s(n);
        }));
    }
    isOnline() {
      return this.#t;
    }
  },
  Hr = new X2();
function K2(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function zv(n) {
  return (n ?? "online") === "online" ? Hr.isOnline() : !0;
}
var Gc = class extends Error {
  constructor(n) {
    (super("CancelledError"), (this.revert = n?.revert), (this.silent = n?.silent));
  }
};
function Ov(n) {
  let i = !1,
    s = 0,
    r;
  const c = Q2(),
    f = () => c.status !== "pending",
    h = (j) => {
      if (!f()) {
        const E = new Gc(j);
        (_(E), n.onCancel?.(E));
      }
    },
    y = () => {
      i = !0;
    },
    m = () => {
      i = !1;
    },
    p = () => Tv.isFocused() && (n.networkMode === "always" || Hr.isOnline()) && n.canRun(),
    b = () => zv(n.networkMode) && n.canRun(),
    v = (j) => {
      f() || (r?.(), c.resolve(j));
    },
    _ = (j) => {
      f() || (r?.(), c.reject(j));
    },
    x = () =>
      new Promise((j) => {
        ((r = (E) => {
          (f() || p()) && j(E);
        }),
          n.onPause?.());
      }).then(() => {
        ((r = void 0), f() || n.onContinue?.());
      }),
    A = () => {
      if (f()) return;
      let j;
      const E = s === 0 ? n.initialPromise : void 0;
      try {
        j = E ?? n.fn();
      } catch (z) {
        j = Promise.reject(z);
      }
      Promise.resolve(j)
        .then(v)
        .catch((z) => {
          if (f()) return;
          const B = n.retry ?? (wv.isServer() ? 0 : 3),
            X = n.retryDelay ?? K2,
            G = typeof X == "function" ? X(s, z) : X,
            K = B === !0 || (typeof B == "number" && s < B) || (typeof B == "function" && B(s, z));
          if (i || !K) {
            _(z);
            return;
          }
          (s++,
            n.onFail?.(s, z),
            B2(G)
              .then(() => (p() ? void 0 : x()))
              .then(() => {
                i ? _(z) : A();
              }));
        });
    };
  return {
    promise: c,
    status: () => c.status,
    cancel: h,
    continue: () => (r?.(), c),
    cancelRetry: y,
    continueRetry: m,
    canStart: b,
    start: () => (b() ? A() : x().then(A), c),
  };
}
var Cv = class {
  #t;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      D2(this.gcTime) &&
        (this.#t = Hc.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(n) {
    this.gcTime = Math.max(this.gcTime || 0, n ?? (wv.isServer() ? 1 / 0 : 300 * 1e3));
  }
  clearGcTimeout() {
    this.#t !== void 0 && (Hc.clearTimeout(this.#t), (this.#t = void 0));
  }
};
function Z2(n) {
  return {
    onFetch: (i, s) => {
      const r = i.options,
        c = i.fetchOptions?.meta?.fetchMore?.direction,
        f = i.state.data?.pages || [],
        h = i.state.data?.pageParams || [];
      let y = { pages: [], pageParams: [] },
        m = 0;
      const p = async () => {
        let b = !1;
        const v = (A) => {
            G2(
              A,
              () => i.signal,
              () => (b = !0),
            );
          },
          _ = Mv(i.options, i.fetchOptions),
          x = async (A, j, E) => {
            if (b) return Promise.reject(i.signal.reason);
            if (j == null && A.pages.length) return Promise.resolve(A);
            const B = (() => {
                const J = {
                  client: i.client,
                  queryKey: i.queryKey,
                  pageParam: j,
                  direction: E ? "backward" : "forward",
                  meta: i.options.meta,
                };
                return (v(J), J);
              })(),
              X = await _(B),
              { maxPages: G } = i.options,
              K = E ? Y2 : q2;
            return { pages: K(A.pages, X, G), pageParams: K(A.pageParams, j, G) };
          };
        if (c && f.length) {
          const A = c === "backward",
            j = A ? P2 : ey,
            E = { pages: f, pageParams: h },
            z = j(r, E);
          y = await x(E, z, A);
        } else {
          const A = n ?? f.length;
          do {
            const j = m === 0 ? (h[0] ?? r.initialPageParam) : ey(r, y);
            if (m > 0 && j == null) break;
            ((y = await x(y, j)), m++);
          } while (m < A);
        }
        return y;
      };
      i.options.persister
        ? (i.fetchFn = () =>
            i.options.persister?.(
              p,
              { client: i.client, queryKey: i.queryKey, meta: i.options.meta, signal: i.signal },
              s,
            ))
        : (i.fetchFn = p);
    },
  };
}
function ey(n, { pages: i, pageParams: s }) {
  const r = i.length - 1;
  return i.length > 0 ? n.getNextPageParam(i[r], i, s[r], s) : void 0;
}
function P2(n, { pages: i, pageParams: s }) {
  return i.length > 0 ? n.getPreviousPageParam?.(i[0], i, s[0], s) : void 0;
}
var J2 = class extends Cv {
  #t;
  #e;
  #n;
  #l;
  #i;
  #a;
  #u;
  #s;
  constructor(n) {
    (super(),
      (this.#s = !1),
      (this.#u = n.defaultOptions),
      this.setOptions(n.options),
      (this.observers = []),
      (this.#i = n.client),
      (this.#l = this.#i.getQueryCache()),
      (this.queryKey = n.queryKey),
      (this.queryHash = n.queryHash),
      (this.#e = ay(this.options)),
      (this.state = n.state ?? this.#e),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#t;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(n) {
    if (
      ((this.options = { ...this.#u, ...n }),
      n?._type && (this.#t = n._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      const i = ay(this.options);
      i.data !== void 0 && (this.setState(ny(i.data, i.dataUpdatedAt)), (this.#e = i));
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.#l.remove(this);
  }
  setData(n, i) {
    const s = H2(this.state.data, n, this.options);
    return (
      this.#r({ data: s, type: "success", dataUpdatedAt: i?.updatedAt, manual: i?.manual }),
      s
    );
  }
  setState(n) {
    this.#r({ type: "setState", state: n });
  }
  cancel(n) {
    const i = this.#a?.promise;
    return (this.#a?.cancel(n), i ? i.then(Ze).catch(Ze) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#e;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((n) => L2(n.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === tf || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.getObserversCount() > 0
      ? this.observers.some((n) => qc(n.options.staleTime, this) === "static")
      : !1;
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((n) => n.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(n = 0) {
    return this.state.data === void 0
      ? !0
      : n === "static"
        ? !1
        : this.state.isInvalidated
          ? !0
          : !N2(this.state.dataUpdatedAt, n);
  }
  onFocus() {
    (this.observers.find((i) => i.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers.find((i) => i.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(n) {
    this.observers.includes(n) ||
      (this.observers.push(n),
      this.clearGcTimeout(),
      this.#l.notify({ type: "observerAdded", query: this, observer: n }));
  }
  removeObserver(n) {
    this.observers.includes(n) &&
      ((this.observers = this.observers.filter((i) => i !== n)),
      this.observers.length ||
        (this.#a && (this.#s || this.#o() ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#l.notify({ type: "observerRemoved", query: this, observer: n }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #o() {
    return this.state.fetchStatus === "paused" && this.state.status === "pending";
  }
  invalidate() {
    this.state.isInvalidated || this.#r({ type: "invalidate" });
  }
  async fetch(n, i) {
    if (this.state.fetchStatus !== "idle" && this.#a?.status() !== "rejected") {
      if (this.state.data !== void 0 && i?.cancelRefetch) this.cancel({ silent: !0 });
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
    }
    if ((n && this.setOptions(n), !this.options.queryFn)) {
      const m = this.observers.find((p) => p.options.queryFn);
      m && this.setOptions(m.options);
    }
    const s = new AbortController(),
      r = (m) => {
        Object.defineProperty(m, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), s.signal),
        });
      },
      c = () => {
        const m = Mv(this.options, i),
          b = (() => {
            const v = { client: this.#i, queryKey: this.queryKey, meta: this.meta };
            return (r(v), v);
          })();
        return ((this.#s = !1), this.options.persister ? this.options.persister(m, b, this) : m(b));
      },
      h = (() => {
        const m = {
          fetchOptions: i,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: c,
        };
        return (r(m), m);
      })();
    ((this.#t === "infinite" ? Z2(this.options.pages) : this.options.behavior)?.onFetch(h, this),
      (this.#n = this.state),
      (this.state.fetchStatus === "idle" || this.state.fetchMeta !== h.fetchOptions?.meta) &&
        this.#r({ type: "fetch", meta: h.fetchOptions?.meta }),
      (this.#a = Ov({
        initialPromise: i?.initialPromise,
        fn: h.fetchFn,
        onCancel: (m) => {
          (m instanceof Gc && m.revert && this.setState({ ...this.#n, fetchStatus: "idle" }),
            s.abort());
        },
        onFail: (m, p) => {
          this.#r({ type: "failed", failureCount: m, error: p });
        },
        onPause: () => {
          this.#r({ type: "pause" });
        },
        onContinue: () => {
          this.#r({ type: "continue" });
        },
        retry: h.options.retry,
        retryDelay: h.options.retryDelay,
        networkMode: h.options.networkMode,
        canRun: () => !0,
      })));
    try {
      const m = await this.#a.start();
      if (m === void 0) throw new Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(m),
        this.#l.config.onSuccess?.(m, this),
        this.#l.config.onSettled?.(m, this.state.error, this),
        m
      );
    } catch (m) {
      if (m instanceof Gc) {
        if (m.silent) return this.#a.promise;
        if (m.revert) {
          if (this.state.data === void 0) throw m;
          return this.state.data;
        }
      }
      throw (
        this.#r({ type: "error", error: m }),
        this.#l.config.onError?.(m, this),
        this.#l.config.onSettled?.(this.state.data, m, this),
        m
      );
    } finally {
      this.scheduleGc();
    }
  }
  #r(n) {
    const i = (s) => {
      switch (n.type) {
        case "failed":
          return { ...s, fetchFailureCount: n.failureCount, fetchFailureReason: n.error };
        case "pause":
          return { ...s, fetchStatus: "paused" };
        case "continue":
          return { ...s, fetchStatus: "fetching" };
        case "fetch":
          return { ...s, ...F2(s.data, this.options), fetchMeta: n.meta ?? null };
        case "success":
          const r = {
            ...s,
            ...ny(n.data, n.dataUpdatedAt),
            dataUpdateCount: s.dataUpdateCount + 1,
            ...(!n.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = n.manual ? r : void 0), r);
        case "error":
          const c = n.error;
          return {
            ...s,
            error: c,
            errorUpdateCount: s.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: s.fetchFailureCount + 1,
            fetchFailureReason: c,
            fetchStatus: "idle",
            status: "error",
            isInvalidated: !0,
          };
        case "invalidate":
          return { ...s, isInvalidated: !0 };
        case "setState":
          return { ...s, ...n.state };
      }
    };
    ((this.state = i(this.state)),
      me.batch(() => {
        (this.observers.forEach((s) => {
          s.onQueryUpdate();
        }),
          this.#l.notify({ query: this, type: "updated", action: n }));
      }));
  }
};
function F2(n, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: zv(i.networkMode) ? "fetching" : "paused",
    ...(n === void 0 && { error: null, status: "pending" }),
  };
}
function ny(n, i) {
  return {
    data: n,
    dataUpdatedAt: i ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function ay(n) {
  const i = typeof n.initialData == "function" ? n.initialData() : n.initialData,
    s = i !== void 0,
    r = s
      ? typeof n.initialDataUpdatedAt == "function"
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var I2 = class extends Cv {
  #t;
  #e;
  #n;
  #l;
  constructor(n) {
    (super(),
      (this.#t = n.client),
      (this.mutationId = n.mutationId),
      (this.#n = n.mutationCache),
      (this.#e = []),
      (this.state = n.state || $2()),
      this.setOptions(n.options),
      this.scheduleGc());
  }
  setOptions(n) {
    ((this.options = n), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(n) {
    this.#e.includes(n) ||
      (this.#e.push(n),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: n }));
  }
  removeObserver(n) {
    ((this.#e = this.#e.filter((i) => i !== n)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: n }));
  }
  optionalRemove() {
    this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this));
  }
  continue() {
    return this.#l?.continue() ?? this.execute(this.state.variables);
  }
  async execute(n) {
    const i = () => {
        this.#i({ type: "continue" });
      },
      s = { client: this.#t, meta: this.options.meta, mutationKey: this.options.mutationKey };
    this.#l = Ov({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(n, s)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (f, h) => {
        this.#i({ type: "failed", failureCount: f, error: h });
      },
      onPause: () => {
        this.#i({ type: "pause" });
      },
      onContinue: i,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const r = this.state.status === "pending",
      c = !this.#l.canStart();
    try {
      if (r) i();
      else {
        (this.#i({ type: "pending", variables: n, isPaused: c }),
          this.#n.config.onMutate && (await this.#n.config.onMutate(n, this, s)));
        const h = await this.options.onMutate?.(n, s);
        h !== this.state.context &&
          this.#i({ type: "pending", context: h, variables: n, isPaused: c });
      }
      const f = await this.#l.start();
      return (
        await this.#n.config.onSuccess?.(f, n, this.state.context, this, s),
        await this.options.onSuccess?.(f, n, this.state.context, s),
        await this.#n.config.onSettled?.(
          f,
          null,
          this.state.variables,
          this.state.context,
          this,
          s,
        ),
        await this.options.onSettled?.(f, null, n, this.state.context, s),
        this.#i({ type: "success", data: f }),
        f
      );
    } catch (f) {
      try {
        await this.#n.config.onError?.(f, n, this.state.context, this, s);
      } catch (h) {
        Promise.reject(h);
      }
      try {
        await this.options.onError?.(f, n, this.state.context, s);
      } catch (h) {
        Promise.reject(h);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          f,
          this.state.variables,
          this.state.context,
          this,
          s,
        );
      } catch (h) {
        Promise.reject(h);
      }
      try {
        await this.options.onSettled?.(void 0, f, n, this.state.context, s);
      } catch (h) {
        Promise.reject(h);
      }
      throw (this.#i({ type: "error", error: f }), f);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(n) {
    const i = (s) => {
      switch (n.type) {
        case "failed":
          return { ...s, failureCount: n.failureCount, failureReason: n.error };
        case "pause":
          return { ...s, isPaused: !0 };
        case "continue":
          return { ...s, isPaused: !1 };
        case "pending":
          return {
            ...s,
            context: n.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: n.isPaused,
            status: "pending",
            variables: n.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...s,
            data: n.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...s,
            data: void 0,
            error: n.error,
            failureCount: s.failureCount + 1,
            failureReason: n.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = i(this.state)),
      me.batch(() => {
        (this.#e.forEach((s) => {
          s.onMutationUpdate(n);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: n }));
      }));
  }
};
function $2() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var W2 = class extends Zr {
  constructor(n = {}) {
    (super(), (this.config = n), (this.#t = new Set()), (this.#e = new Map()), (this.#n = 0));
  }
  #t;
  #e;
  #n;
  build(n, i, s) {
    const r = new I2({
      client: n,
      mutationCache: this,
      mutationId: ++this.#n,
      options: n.defaultMutationOptions(i),
      state: s,
    });
    return (this.add(r), r);
  }
  add(n) {
    this.#t.add(n);
    const i = Rr(n);
    if (typeof i == "string") {
      const s = this.#e.get(i);
      s ? s.push(n) : this.#e.set(i, [n]);
    }
    this.notify({ type: "added", mutation: n });
  }
  remove(n) {
    if (this.#t.delete(n)) {
      const i = Rr(n);
      if (typeof i == "string") {
        const s = this.#e.get(i);
        if (s)
          if (s.length > 1) {
            const r = s.indexOf(n);
            r !== -1 && s.splice(r, 1);
          } else s[0] === n && this.#e.delete(i);
      }
    }
    this.notify({ type: "removed", mutation: n });
  }
  canRun(n) {
    const i = Rr(n);
    if (typeof i == "string") {
      const r = this.#e.get(i)?.find((c) => c.state.status === "pending");
      return !r || r === n;
    } else return !0;
  }
  runNext(n) {
    const i = Rr(n);
    return typeof i == "string"
      ? (this.#e
          .get(i)
          ?.find((r) => r !== n && r.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    me.batch(() => {
      (this.#t.forEach((n) => {
        this.notify({ type: "removed", mutation: n });
      }),
        this.#t.clear(),
        this.#e.clear());
    });
  }
  getAll() {
    return Array.from(this.#t);
  }
  find(n) {
    const i = { exact: !0, ...n };
    return this.getAll().find((s) => $p(i, s));
  }
  findAll(n = {}) {
    return this.getAll().filter((i) => $p(n, i));
  }
  notify(n) {
    me.batch(() => {
      this.listeners.forEach((i) => {
        i(n);
      });
    });
  }
  resumePausedMutations() {
    const n = this.getAll().filter((i) => i.state.isPaused);
    return me.batch(() => Promise.all(n.map((i) => i.continue().catch(Ze))));
  }
};
function Rr(n) {
  return n.options.scope?.id;
}
var tE = class extends Zr {
    constructor(n = {}) {
      (super(), (this.config = n), (this.#t = new Map()));
    }
    #t;
    build(n, i, s) {
      const r = i.queryKey,
        c = i.queryHash ?? Wc(r, i);
      let f = this.get(c);
      return (
        f ||
          ((f = new J2({
            client: n,
            queryKey: r,
            queryHash: c,
            options: n.defaultQueryOptions(i),
            state: s,
            defaultOptions: n.getQueryDefaults(r),
          })),
          this.add(f)),
        f
      );
    }
    add(n) {
      this.#t.has(n.queryHash) ||
        (this.#t.set(n.queryHash, n), this.notify({ type: "added", query: n }));
    }
    remove(n) {
      const i = this.#t.get(n.queryHash);
      i &&
        (n.destroy(),
        i === n && this.#t.delete(n.queryHash),
        this.notify({ type: "removed", query: n }));
    }
    clear() {
      me.batch(() => {
        this.getAll().forEach((n) => {
          this.remove(n);
        });
      });
    }
    get(n) {
      return this.#t.get(n);
    }
    getAll() {
      return [...this.#t.values()];
    }
    find(n) {
      const i = { exact: !0, ...n };
      return this.getAll().find((s) => Ip(i, s));
    }
    findAll(n = {}) {
      const i = this.getAll();
      return Object.keys(n).length > 0 ? i.filter((s) => Ip(n, s)) : i;
    }
    notify(n) {
      me.batch(() => {
        this.listeners.forEach((i) => {
          i(n);
        });
      });
    }
    onFocus() {
      me.batch(() => {
        this.getAll().forEach((n) => {
          n.onFocus();
        });
      });
    }
    onOnline() {
      me.batch(() => {
        this.getAll().forEach((n) => {
          n.onOnline();
        });
      });
    }
  },
  eE = class {
    #t;
    #e;
    #n;
    #l;
    #i;
    #a;
    #u;
    #s;
    constructor(n = {}) {
      ((this.#t = n.queryCache || new tE()),
        (this.#e = n.mutationCache || new W2()),
        (this.#n = n.defaultOptions || {}),
        (this.#l = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#u = Tv.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#t.onFocus());
          })),
          (this.#s = Hr.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#t.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 && (this.#u?.(), (this.#u = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(n) {
      return this.#t.findAll({ ...n, fetchStatus: "fetching" }).length;
    }
    isMutating(n) {
      return this.#e.findAll({ ...n, status: "pending" }).length;
    }
    getQueryData(n) {
      const i = this.defaultQueryOptions({ queryKey: n });
      return this.#t.get(i.queryHash)?.state.data;
    }
    ensureQueryData(n) {
      const i = this.defaultQueryOptions(n),
        s = this.#t.build(this, i),
        r = s.state.data;
      return r === void 0
        ? this.fetchQuery(n)
        : (n.revalidateIfStale && s.isStaleByTime(qc(i.staleTime, s)) && this.prefetchQuery(i),
          Promise.resolve(r));
    }
    getQueriesData(n) {
      return this.#t.findAll(n).map(({ queryKey: i, state: s }) => {
        const r = s.data;
        return [i, r];
      });
    }
    setQueryData(n, i, s) {
      const r = this.defaultQueryOptions({ queryKey: n }),
        f = this.#t.get(r.queryHash)?.state.data,
        h = j2(i, f);
      if (h !== void 0) return this.#t.build(this, r).setData(h, { ...s, manual: !0 });
    }
    setQueriesData(n, i, s) {
      return me.batch(() =>
        this.#t.findAll(n).map(({ queryKey: r }) => [r, this.setQueryData(r, i, s)]),
      );
    }
    getQueryState(n) {
      const i = this.defaultQueryOptions({ queryKey: n });
      return this.#t.get(i.queryHash)?.state;
    }
    removeQueries(n) {
      const i = this.#t;
      me.batch(() => {
        i.findAll(n).forEach((s) => {
          i.remove(s);
        });
      });
    }
    resetQueries(n, i) {
      const s = this.#t;
      return me.batch(
        () => (
          s.findAll(n).forEach((r) => {
            r.reset();
          }),
          this.refetchQueries({ type: "active", ...n }, i)
        ),
      );
    }
    cancelQueries(n, i = {}) {
      const s = { revert: !0, ...i },
        r = me.batch(() => this.#t.findAll(n).map((c) => c.cancel(s)));
      return Promise.all(r).then(Ze).catch(Ze);
    }
    invalidateQueries(n, i = {}) {
      return me.batch(
        () => (
          this.#t.findAll(n).forEach((s) => {
            s.invalidate();
          }),
          n?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries({ ...n, type: n?.refetchType ?? n?.type ?? "active" }, i)
        ),
      );
    }
    refetchQueries(n, i = {}) {
      const s = { ...i, cancelRefetch: i.cancelRefetch ?? !0 },
        r = me.batch(() =>
          this.#t
            .findAll(n)
            .filter((c) => !c.isDisabled() && !c.isStatic())
            .map((c) => {
              let f = c.fetch(void 0, s);
              return (
                s.throwOnError || (f = f.catch(Ze)),
                c.state.fetchStatus === "paused" ? Promise.resolve() : f
              );
            }),
        );
      return Promise.all(r).then(Ze);
    }
    fetchQuery(n) {
      const i = this.defaultQueryOptions(n);
      i.retry === void 0 && (i.retry = !1);
      const s = this.#t.build(this, i);
      return s.isStaleByTime(qc(i.staleTime, s)) ? s.fetch(i) : Promise.resolve(s.state.data);
    }
    prefetchQuery(n) {
      return this.fetchQuery(n).then(Ze).catch(Ze);
    }
    fetchInfiniteQuery(n) {
      return ((n._type = "infinite"), this.fetchQuery(n));
    }
    prefetchInfiniteQuery(n) {
      return this.fetchInfiniteQuery(n).then(Ze).catch(Ze);
    }
    ensureInfiniteQueryData(n) {
      return ((n._type = "infinite"), this.ensureQueryData(n));
    }
    resumePausedMutations() {
      return Hr.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#t;
    }
    getMutationCache() {
      return this.#e;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(n) {
      this.#n = n;
    }
    setQueryDefaults(n, i) {
      this.#l.set(Pi(n), { queryKey: n, defaultOptions: i });
    }
    getQueryDefaults(n) {
      const i = [...this.#l.values()],
        s = {};
      return (
        i.forEach((r) => {
          Ji(n, r.queryKey) && Object.assign(s, r.defaultOptions);
        }),
        s
      );
    }
    setMutationDefaults(n, i) {
      this.#i.set(Pi(n), { mutationKey: n, defaultOptions: i });
    }
    getMutationDefaults(n) {
      const i = [...this.#i.values()],
        s = {};
      return (
        i.forEach((r) => {
          Ji(n, r.mutationKey) && Object.assign(s, r.defaultOptions);
        }),
        s
      );
    }
    defaultQueryOptions(n) {
      if (n._defaulted) return n;
      const i = { ...this.#n.queries, ...this.getQueryDefaults(n.queryKey), ...n, _defaulted: !0 };
      return (
        i.queryHash || (i.queryHash = Wc(i.queryKey, i)),
        i.refetchOnReconnect === void 0 && (i.refetchOnReconnect = i.networkMode !== "always"),
        i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
        !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
        i.queryFn === tf && (i.enabled = !1),
        i
      );
    }
    defaultMutationOptions(n) {
      return n?._defaulted
        ? n
        : {
            ...this.#n.mutations,
            ...(n?.mutationKey && this.getMutationDefaults(n.mutationKey)),
            ...n,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#t.clear(), this.#e.clear());
    }
  },
  nE = W.createContext(void 0),
  aE = ({ client: n, children: i }) => (
    W.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n],
    ),
    O.jsx(nE.Provider, { value: n, children: i })
  );
const jv = (...n) =>
  n
    .filter((i, s, r) => !!i && i.trim() !== "" && r.indexOf(i) === s)
    .join(" ")
    .trim();
const lE = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const iE = (n) =>
  n.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, s, r) => (r ? r.toUpperCase() : s.toLowerCase()));
const ly = (n) => {
  const i = iE(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var sE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const rE = (n) => {
  for (const i in n) if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  return !1;
};
const uE = W.forwardRef(
  (
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: r,
      className: c = "",
      children: f,
      iconNode: h,
      ...y
    },
    m,
  ) =>
    W.createElement(
      "svg",
      {
        ref: m,
        ...sE,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: r ? (Number(s) * 24) / Number(i) : s,
        className: jv("lucide", c),
        ...(!f && !rE(y) && { "aria-hidden": "true" }),
        ...y,
      },
      [...h.map(([p, b]) => W.createElement(p, b)), ...(Array.isArray(f) ? f : [f])],
    ),
);
const Wi = (n, i) => {
  const s = W.forwardRef(({ className: r, ...c }, f) =>
    W.createElement(uE, {
      ref: f,
      iconNode: i,
      className: jv(`lucide-${lE(ly(n))}`, `lucide-${n}`, r),
      ...c,
    }),
  );
  return ((s.displayName = ly(n)), s);
};
const oE = [
    [
      "path",
      { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" },
    ],
  ],
  Qc = Wi("facebook", oE);
const cE = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
  ],
  fE = Wi("mail", cE);
const dE = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Vc = Wi("map-pin", dE);
const hE = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  mE = Wi("message-circle", hE);
const pE = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  qr = Wi("phone", pE),
  yE = "+420 777 444 707",
  iy = "tel:+420777444707";
function vE() {
  return O.jsx("header", {
    className:
      "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70",
    children: O.jsxs("div", {
      className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4",
      children: [
        O.jsxs("a", {
          href: "/#top",
          className: "group flex items-center gap-2",
          children: [
            O.jsx("img", {
              src: "/logo.png",
              alt: "VH Kominictví Logo",
              className:
                "h-10 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105",
            }),
            O.jsx("span", {
              className: "font-display text-xl font-bold tracking-tight text-soot",
              children: "VH Kominictví",
            }),
          ],
        }),
        O.jsxs("div", {
          className: "hidden items-center gap-6 md:flex",
          children: [
            O.jsxs("div", {
              className: "flex items-center gap-3 border-r border-border/60 pr-6",
              children: [
                O.jsx("a", {
                  href: "https://www.facebook.com/vhkominictvicz/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-muted-foreground hover:text-blue-600 transition-colors",
                  "aria-label": "Facebook",
                  children: O.jsx(Qc, { className: "h-5 w-5" }),
                }),
                O.jsx("a", {
                  href: "https://maps.app.goo.gl/tvk12uiNMT5JsqND9",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-muted-foreground hover:text-emerald-600 transition-colors",
                  "aria-label": "Google Business Profile",
                  children: O.jsx(Vc, { className: "h-5 w-5" }),
                }),
              ],
            }),
            O.jsx(nn, {
              to: "/galerie",
              className: "text-sm font-bold text-ember hover:text-soot transition-colors",
              children: "📸 Naše Galerie",
            }),
            O.jsxs("a", {
              href: iy,
              className:
                "inline-flex h-9 items-center gap-2 rounded-md bg-destructive px-4 text-sm font-bold text-destructive-foreground shadow-sm transition hover:brightness-110",
              children: [O.jsx(qr, { "aria-hidden": "true", className: "h-4 w-4" }), yE],
            }),
          ],
        }),
        O.jsxs("div", {
          className: "flex items-center gap-3 md:hidden",
          children: [
            O.jsx("a", {
              href: "https://www.facebook.com/vhkominictvicz/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-muted-foreground hover:text-blue-600 transition-colors",
              "aria-label": "Facebook",
              children: O.jsx(Qc, { className: "h-5 w-5" }),
            }),
            O.jsx("a", {
              href: "https://maps.app.goo.gl/tvk12uiNMT5JsqND9",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-muted-foreground hover:text-emerald-600 transition-colors",
              "aria-label": "Google Business Profile",
              children: O.jsx(Vc, { className: "h-5 w-5" }),
            }),
            O.jsxs("a", {
              href: iy,
              className:
                "inline-flex h-9 items-center gap-2 rounded-md bg-destructive px-3 text-sm font-bold text-destructive-foreground ml-2",
              children: [O.jsx(qr, { "aria-hidden": "true", className: "h-4 w-4" }), "Volat"],
            }),
          ],
        }),
      ],
    }),
  });
}
function gE() {
  return O.jsxs("footer", {
    className: "border-t border-border bg-background",
    children: [
      O.jsxs("div", {
        className: "mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4",
        children: [
          O.jsxs("div", {
            children: [
              O.jsxs("div", {
                className: "group flex cursor-default items-center gap-2",
                children: [
                  O.jsx("img", {
                    src: "/logo.png",
                    alt: "VH Kominictví Logo",
                    className:
                      "h-10 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105",
                  }),
                  O.jsx("span", {
                    className: "font-display text-xl font-bold text-soot",
                    children: "VH Kominictví",
                  }),
                ],
              }),
              O.jsx("p", {
                className: "mt-3 max-w-xs text-sm text-muted-foreground",
                children:
                  "Certifikovaný kominík pro Severní & západní Čechy a Středočeský kraj. Revize · čištění · kontroly.",
              }),
              O.jsx("p", {
                className: "mt-3 text-base font-extrabold uppercase tracking-wide text-ember",
                children: "Máme na to koule",
              }),
              O.jsxs("div", {
                className: "mt-4 flex items-center gap-4",
                children: [
                  O.jsx("a", {
                    href: "https://www.facebook.com/vhkominictvicz/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "rounded-full bg-muted p-2 text-muted-foreground hover:bg-blue-50 hover:text-blue-600 transition-colors",
                    "aria-label": "Facebook",
                    children: O.jsx(Qc, { className: "h-5 w-5" }),
                  }),
                  O.jsx("a", {
                    href: "https://maps.app.goo.gl/tvk12uiNMT5JsqND9",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "rounded-full bg-muted p-2 text-muted-foreground hover:bg-emerald-50 hover:text-emerald-600 transition-colors",
                    "aria-label": "Google Business Profile",
                    children: O.jsx(Vc, { className: "h-5 w-5" }),
                  }),
                ],
              }),
              O.jsxs("div", {
                className: "mt-6 flex items-center gap-3",
                children: [
                  O.jsx("img", {
                    src: "/kominici-logo.png",
                    alt: "Společenstvo kominíků ČR",
                    className: "h-12 w-auto object-contain",
                  }),
                  O.jsxs("div", {
                    className: "text-xs font-bold text-muted-foreground leading-tight",
                    children: [
                      "Revizní technik spalinových cest ",
                      O.jsx("br", {}),
                      "Člen společenstva kominíků ČR",
                    ],
                  }),
                ],
              }),
            ],
          }),
          O.jsxs("div", {
            className: "text-sm",
            children: [
              O.jsx("p", { className: "font-bold text-soot", children: "Kontakt" }),
              O.jsxs("ul", {
                className: "mt-3 space-y-2 text-muted-foreground",
                children: [
                  O.jsxs("li", {
                    className: "flex items-center gap-2",
                    children: [
                      O.jsx(qr, { "aria-hidden": "true", className: "h-4 w-4 text-ember" }),
                      O.jsx("a", {
                        href: "tel:+420777444707",
                        className: "hover:text-soot",
                        children: "+420 777 444 707",
                      }),
                    ],
                  }),
                  O.jsxs("li", {
                    className: "flex items-center gap-2",
                    children: [
                      O.jsx(fE, { "aria-hidden": "true", className: "h-4 w-4 text-ember" }),
                      O.jsx("a", {
                        href: "mailto:husarik@vhkominictvi.cz",
                        className: "hover:text-soot",
                        children: "husarik@vhkominictvi.cz",
                      }),
                    ],
                  }),
                  O.jsxs("li", {
                    className: "pt-2",
                    children: [
                      O.jsx("span", {
                        className: "block font-bold text-soot",
                        children: "Vladan Husařík",
                      }),
                      O.jsx("span", { className: "block text-xs", children: "IČO: 88883736" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          O.jsxs("div", {
            className: "text-sm",
            children: [
              O.jsx("p", { className: "font-bold text-soot", children: "Služby" }),
              O.jsxs("ul", {
                className: "mt-3 space-y-2 text-muted-foreground",
                children: [
                  O.jsx("li", {
                    children: O.jsx(nn, {
                      to: "/sluzby/revize-kominu",
                      className: "hover:text-soot transition-colors",
                      children: "Revize komínů",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx(nn, {
                      to: "/sluzby/cisteni-a-kontrola",
                      className: "hover:text-soot transition-colors",
                      children: "Čištění & Kontroly",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx(nn, {
                      to: "/sluzby/zavady-a-posouzeni",
                      className: "hover:text-soot transition-colors",
                      children: "Závady & posouzení",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx(nn, {
                      to: "/sluzby/frezovani",
                      className: "hover:text-soot transition-colors",
                      children: "Frézování",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx(nn, {
                      to: "/sluzby/vlozkovani",
                      className: "hover:text-soot transition-colors",
                      children: "Vložkování",
                    }),
                  }),
                ],
              }),
            ],
          }),
          O.jsxs("div", {
            className: "text-sm",
            children: [
              O.jsx("p", { className: "font-bold text-soot", children: "Rychlé odkazy" }),
              O.jsxs("ul", {
                className: "mt-3 grid grid-cols-2 gap-2 text-muted-foreground",
                children: [
                  O.jsx("li", {
                    children: O.jsx("a", {
                      href: "/#sluzby",
                      className: "hover:text-soot transition-colors",
                      children: "Služby",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx("a", {
                      href: "/#cetnost",
                      className: "hover:text-soot transition-colors",
                      children: "Četnost",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx("a", {
                      href: "/#postup",
                      className: "hover:text-soot transition-colors",
                      children: "Postup",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx("a", {
                      href: "/#recenze",
                      className: "hover:text-soot transition-colors",
                      children: "Recenze",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx("a", {
                      href: "/#oblast",
                      className: "hover:text-soot transition-colors",
                      children: "Oblast",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx("a", {
                      href: "/#faq",
                      className: "hover:text-soot transition-colors",
                      children: "FAQ",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx(nn, {
                      to: "/galerie",
                      className: "hover:text-soot transition-colors text-ember font-semibold",
                      children: "Galerie",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      O.jsxs("div", {
        className: "border-t border-border py-4 text-center text-xs text-muted-foreground",
        children: ["© ", new Date().getFullYear(), " VH Kominictví · IČO 88883736"],
      }),
    ],
  });
}
function bE() {
  return O.jsx("div", {
    className:
      "fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden",
    style: { paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" },
    children: O.jsxs("div", {
      className: "grid grid-cols-2 gap-2",
      children: [
        O.jsxs("a", {
          href: "tel:+420777444707",
          className:
            "inline-flex h-11 items-center justify-center gap-2 rounded-md bg-destructive font-bold text-destructive-foreground",
          children: [O.jsx(qr, { className: "h-4 w-4" }), " Zavolat"],
        }),
        O.jsxs("a", {
          href: "/#kontakt",
          className:
            "inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card font-bold text-soot",
          children: [O.jsx(mE, { className: "h-4 w-4" }), " Poptávka"],
        }),
      ],
    }),
  });
}
const SE = "/assets/styles-Dsci01Kl.css";
function _E(n, i = {}) {
  typeof window > "u" ||
    window.__lovableEvents?.captureException?.(
      n,
      { source: "react_error_boundary", route: window.location.pathname, ...i },
      { mechanism: "react_error_boundary", handled: !1, severity: "error" },
    );
}
function xE() {
  return O.jsx("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: O.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        O.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
        O.jsx("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        O.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "The page you're looking for doesn't exist or has been moved.",
        }),
        O.jsx("div", {
          className: "mt-6",
          children: O.jsx(nn, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
function EE({ error: n, reset: i }) {
  console.error(n);
  const s = oe();
  return (
    W.useEffect(() => {
      _E(n, { boundary: "tanstack_root_error_component" });
    }, [n]),
    O.jsx("div", {
      className: "flex min-h-screen items-center justify-center bg-background px-4",
      children: O.jsxs("div", {
        className: "max-w-md text-center",
        children: [
          O.jsx("h1", {
            className: "text-xl font-semibold tracking-tight text-foreground",
            children: "This page didn't load",
          }),
          O.jsx("p", {
            className: "mt-2 text-sm text-muted-foreground",
            children: "Something went wrong on our end. You can try refreshing or head back home.",
          }),
          O.jsxs("div", {
            className: "mt-6 flex flex-wrap justify-center gap-2",
            children: [
              O.jsx("button", {
                onClick: () => {
                  (s.invalidate(), i());
                },
                className:
                  "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
                children: "Try again",
              }),
              O.jsx("a", {
                href: "/",
                className:
                  "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
                children: "Go home",
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const Cn = n2()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "VH Kominictví — Revize, čištění a kontroly komínů" },
      {
        name: "description",
        content:
          "Certifikovaný kominík: revize, pravidelné čištění a kontroly komínů. Rychlý termín, férová cena, papíry pro hasiče i pojišťovnu.",
      },
      { property: "og:title", content: "VH Kominictví — Revize, čištění a kontroly komínů" },
      { name: "twitter:title", content: "VH Kominictví — Revize, čištění a kontroly komínů" },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c44c8210-e54e-450f-af34-50694c517f1c/id-preview-8769b082--4813cba9-e859-41ec-9a97-505914ee6a22.lovable.app-1780154257768.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c44c8210-e54e-450f-af34-50694c517f1c/id-preview-8769b082--4813cba9-e859-41ec-9a97-505914ee6a22.lovable.app-1780154257768.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://vhkominictvi.cz/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Nunito:wght@400;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: SE },
    ],
  }),
  shellComponent: RE,
  component: TE,
  notFoundComponent: xE,
  errorComponent: EE,
});
function RE({ children: n }) {
  return O.jsxs("html", {
    lang: "cs",
    children: [
      O.jsx("head", { children: O.jsx(x2, {}) }),
      O.jsxs("body", { children: [n, O.jsx(E2, {})] }),
    ],
  });
}
function TE() {
  const { queryClient: n } = Cn.useRouteContext();
  return O.jsx(aE, {
    client: n,
    children: O.jsxs("div", {
      className: "flex min-h-screen flex-col bg-background pb-16 md:pb-0",
      children: [
        O.jsx(vE, {}),
        O.jsx("main", { className: "flex-1", children: O.jsx(xv, {}) }),
        O.jsx(gE, {}),
        O.jsx(bE, {}),
      ],
    }),
  });
}
const AE = "modulepreload",
  ME = function (n) {
    return "/" + n;
  },
  sy = {},
  Va = function (i, s, r) {
    let c = Promise.resolve();
    if (s && s.length > 0) {
      let m = function (p) {
        return Promise.all(
          p.map((b) =>
            Promise.resolve(b).then(
              (v) => ({ status: "fulfilled", value: v }),
              (v) => ({ status: "rejected", reason: v }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const h = document.querySelector("meta[property=csp-nonce]"),
        y = h?.nonce || h?.getAttribute("nonce");
      c = m(
        s.map((p) => {
          if (((p = ME(p)), p in sy)) return;
          sy[p] = !0;
          const b = p.endsWith(".css"),
            v = b ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${p}"]${v}`)) return;
          const _ = document.createElement("link");
          if (
            ((_.rel = b ? "stylesheet" : AE),
            b || (_.as = "script"),
            (_.crossOrigin = ""),
            (_.href = p),
            y && _.setAttribute("nonce", y),
            document.head.appendChild(_),
            b)
          )
            return new Promise((x, A) => {
              (_.addEventListener("load", x),
                _.addEventListener("error", () => A(new Error(`Unable to preload CSS for ${p}`))));
            });
        }),
      );
    }
    function f(h) {
      const y = new Event("vite:preloadError", { cancelable: !0 });
      if (((y.payload = h), window.dispatchEvent(y), !y.defaultPrevented)) throw h;
    }
    return c.then((h) => {
      for (const y of h || []) y.status === "rejected" && f(y.reason);
      return i().catch(f);
    });
  },
  wE = () => Va(() => import("./galerie-D6ZSvLfV.js"), __vite__mapDeps([0, 1, 2])),
  zE = Ga("/galerie")({
    head: () => ({
      meta: [
        { title: "Galerie naší práce | VH Kominictví" },
        {
          name: "description",
          content:
            "Prohlédněte si ukázky naší práce. Frézování, vložkování, čištění a stavby komínů v oblasti Kryry, Louny, Žatec, Rakovník a širokém okolí.",
        },
      ],
    }),
    component: Qa(wE, "component"),
  }),
  OE = () => Va(() => import("./index-tNVL_pPX.js"), __vite__mapDeps([3, 1])),
  CE = Ga("/")({
    head: () => ({
      meta: [
        {
          title:
            "VH Kominictví — Revize, čištění a kontroly komínů | Severní & západní Čechy a Středočeský kraj",
        },
        {
          name: "description",
          content:
            "Certifikovaný kominík pro Prahu a Středočeský kraj. Revize, čištění a kontroly komínů dle vyhlášky 34/2016 Sb. Rychlý termín, férová cena, papíry hned.",
        },
        { property: "og:title", content: "VH Kominictví — Revize a kontroly komínů" },
        {
          property: "og:description",
          content: "Komín v pořádku. Papíry hned. Severní & západní Čechy a Středočeský kraj.",
        },
      ],
    }),
    component: Qa(OE, "component"),
  }),
  jE = () => Va(() => import("./zavady-a-posouzeni-TNPTfEo-.js"), __vite__mapDeps([4, 5, 2])),
  DE = Ga("/sluzby/zavady-a-posouzeni")({
    head: () => ({
      meta: [
        { title: "Závady komínů & odborné posouzení | VH Kominictví" },
        {
          name: "description",
          content:
            "Máte podezření na závadu komína? Diagnostika tahu, vlhkosti, dehtových usazenin. Odborné posouzení stavu a návrh řešení na míru.",
        },
      ],
    }),
    component: Qa(jE, "component"),
  }),
  NE = () => Va(() => import("./vlozkovani-CxVyqQJa.js"), __vite__mapDeps([6, 5, 2])),
  LE = Ga("/sluzby/vlozkovani")({
    head: () => ({
      meta: [
        { title: "Vložkování komínů | Bezpečná sanace nerezovou vložkou | VH Kominictví" },
        {
          name: "description",
          content:
            "Vložkování komína nerezovou vložkou je rychlý a cenově výhodný způsob rekonstrukce starších komínů. Získejte komín, který splní všechny normy.",
        },
      ],
    }),
    component: Qa(NE, "component"),
  }),
  UE = () => Va(() => import("./revize-kominu-CuoBy1vJ.js"), __vite__mapDeps([7, 5, 2])),
  BE = Ga("/sluzby/revize-kominu")({
    head: () => ({
      meta: [
        { title: "Revize komínů | Certifikovaná revizní zpráva | VH Kominictví" },
        {
          name: "description",
          content:
            "Potřebujete revizi komína pro stavební úřad, hasiče nebo pojišťovnu? Certifikovaný kominík s 14 lety praxe. Rychlý termín a férová cena.",
        },
      ],
    }),
    component: Qa(UE, "component"),
  }),
  HE = () => Va(() => import("./frezovani-DcI8y1Yt.js"), __vite__mapDeps([8, 5, 2])),
  qE = Ga("/sluzby/frezovani")({
    head: () => ({
      meta: [
        { title: "Frézování komínů | Rychlá obnova tahu | VH Kominictví" },
        {
          name: "description",
          content:
            "Ekonomicky výhodný a šetrný způsob rekonstrukce komínového tělesa bez bourání. Zvětšete průduch a připravte komín pro bezpečné vložkování.",
        },
      ],
    }),
    component: Qa(HE, "component"),
  }),
  YE = () => Va(() => import("./cisteni-a-kontrola-DGyekxUd.js"), __vite__mapDeps([9, 5, 2])),
  GE = Ga("/sluzby/cisteni-a-kontrola")({
    head: () => ({
      meta: [
        { title: "Čištění a pravidelná roční kontrola komínů | VH Kominictví" },
        {
          name: "description",
          content:
            "Zajistěte si klidný spánek s pravidelnou kontrolou a čištěním komína. Certifikované služby, mechanické odstranění sazí a dehtu, zpráva pro pojišťovnu.",
        },
      ],
    }),
    component: Qa(YE, "component"),
  }),
  QE = zE.update({ id: "/galerie", path: "/galerie", getParentRoute: () => Cn }),
  VE = CE.update({ id: "/", path: "/", getParentRoute: () => Cn }),
  kE = DE.update({
    id: "/sluzby/zavady-a-posouzeni",
    path: "/sluzby/zavady-a-posouzeni",
    getParentRoute: () => Cn,
  }),
  XE = LE.update({
    id: "/sluzby/vlozkovani",
    path: "/sluzby/vlozkovani",
    getParentRoute: () => Cn,
  }),
  KE = BE.update({
    id: "/sluzby/revize-kominu",
    path: "/sluzby/revize-kominu",
    getParentRoute: () => Cn,
  }),
  ZE = qE.update({ id: "/sluzby/frezovani", path: "/sluzby/frezovani", getParentRoute: () => Cn }),
  PE = GE.update({
    id: "/sluzby/cisteni-a-kontrola",
    path: "/sluzby/cisteni-a-kontrola",
    getParentRoute: () => Cn,
  }),
  JE = {
    IndexRoute: VE,
    GalerieRoute: QE,
    SluzbyCisteniAKontrolaRoute: PE,
    SluzbyFrezovaniRoute: ZE,
    SluzbyRevizeKominuRoute: KE,
    SluzbyVlozkovaniRoute: XE,
    SluzbyZavadyAPosouzeniRoute: kE,
  },
  FE = Cn._addFileChildren(JE),
  IE = () => {
    const n = new eE();
    return y2({
      routeTree: FE,
      context: { queryClient: n },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
  };
async function $E() {
  const n = await IE();
  let i;
  if (Fp) {
    const s = await Fp.getOptions();
    ((s.serializationAdapters = s.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = s),
      (i = s.serializationAdapters),
      (n.options.defaultSsr = s.defaultSsr));
  } else ((i = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: i }));
  return (
    i.push(Sx),
    n.options.serializationAdapters && i.push(...n.options.serializationAdapters),
    n.update({ basepath: "", serializationAdapters: i }),
    n.stores.matchesId.get().length || (await xx(n)),
    n
  );
}
var WE = $E;
async function tR() {
  const n = await WE();
  return (window.$_TSR?.h(), n);
}
var Mc;
function eR() {
  return (Mc || (Mc = tR()), O.jsx(Ax, { promise: Mc, children: (n) => O.jsx(b2, { router: n }) }));
}
W.startTransition(() => {
  ub.hydrateRoot(document, O.jsx(W.StrictMode, { children: O.jsx(eR, {}) }));
});
export { nn as L, mE as M, qr as P, ql as R, Vc as a, nR as b, Wi as c, O as j, W as r };

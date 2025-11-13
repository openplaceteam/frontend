var He = (n) => {
  throw TypeError(n);
};
var Re = (n, t, l) => t.has(n) || He("Cannot " + l);
var gt = (n, t, l) => (
    Re(n, t, "read from private field"), l ? l.call(n) : t.get(n)
  ),
  qt = (n, t, l) =>
    t.has(n)
      ? He("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(n)
      : t.set(n, l),
  Qt = (n, t, l, B) => (
    Re(n, t, "write to private field"), B ? B.call(n, l) : t.set(n, l), l
  );
import "../chunks/ClL9a_Zs.js";
import { o as pt, s as rt } from "../chunks/Ba2x20r8.js";
import {
  p as de,
  f as at,
  d as st,
  b as a,
  r as tt,
  t as $,
  c as ue,
  bz as ce,
  aF as en,
  aE as Fe,
  aG as nn,
  l as H,
  m as Ve,
  D as _t,
  o as u,
  g as e,
  u as b,
  F as $t,
  s as At,
  v as We,
  x as ht,
  w as g,
  a as v,
  k as an,
  q as Ne,
  z as ne,
  by as on,
} from "../chunks/iK5FT0Sa.js";
import { c as sn, s as Jt } from "../chunks/BHnQYZx5.js";
import { v as rn } from "../chunks/IsOmSjXL.js";
import { g as Ue, P as ln } from "../chunks/B3m8Ax5i.js";
import {
  f as G,
  j as xt,
  k as cn,
  l as dn,
  u as Pe,
  _ as un,
  m as fn,
  a as vn,
  r as mn,
  n as gn,
} from "../chunks/BcevhAVP.js";
import { A as hn, s as _n, c as bn } from "../chunks/BJyid7P1.js";
import "../chunks/DQcFTXWv.js";
import { i as T } from "../chunks/6Mc7KQD2.js";
import { e as Le } from "../chunks/DcUGKLlr.js";
import {
  c as It,
  a as Tt,
  s as A,
  f as Ae,
  d as wn,
  S as yn,
} from "../chunks/Cw1VVyw7.js";
import { b as Ke } from "../chunks/DnZ5W6UV.js";
import { p as O, s as Me, r as xn } from "../chunks/ClBgBzqC.js";
import { c as Pt } from "../chunks/CZQHObn-.js";
import "../chunks/CqEpAPi0.js";
(function () {
  try {
    var n =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    n.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      t = new n.Error().stack;
    t &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[t] = "6d70a0a0-920c-4e7f-b390-651c4f2759ff"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-6d70a0a0-920c-4e7f-b390-651c4f2759ff"));
  })();
} catch {}
const In = !0,
  ka = Object.freeze(
    Object.defineProperty(
      { __proto__: null, prerender: In },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Tn = Array(12).fill(0);
var Sn = at('<div class="sonner-loading-bar"></div>'),
  Bn = at('<div><div class="sonner-spinner"></div></div>');
function En(n, t) {
  de(t, !0);
  var l = Bn(),
    B = st(l);
  Le(
    B,
    23,
    () => Tn,
    (k, X) => `spinner-bar-${X}`,
    (k, X) => {
      var q = Sn();
      a(k, q);
    }
  ),
    tt(B),
    tt(l),
    $(
      (k) => {
        Tt(l, 1, k), A(l, "data-visible", t.visible);
      },
      [() => It(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]
    ),
    a(n, l),
    ue();
}
const Dn = typeof window < "u" ? window : void 0;
function An(n) {
  let t = n.activeElement;
  for (; t != null && t.shadowRoot; ) {
    const l = t.shadowRoot.activeElement;
    if (l === t) break;
    t = l;
  }
  return t;
}
var Ut, te;
class Mn {
  constructor(t = {}) {
    qt(this, Ut);
    qt(this, te);
    const { window: l = Dn, document: B = l == null ? void 0 : l.document } = t;
    l !== void 0 &&
      (Qt(this, Ut, B),
      Qt(
        this,
        te,
        sn((k) => {
          const X = ce(l, "focusin", k),
            q = ce(l, "focusout", k);
          return () => {
            X(), q();
          };
        })
      ));
  }
  get current() {
    var t;
    return (
      (t = gt(this, te)) == null || t.call(this),
      gt(this, Ut) ? An(gt(this, Ut)) : null
    );
  }
}
(Ut = new WeakMap()), (te = new WeakMap());
new Mn();
var ee, St;
class Cn {
  constructor(t) {
    qt(this, ee);
    qt(this, St);
    Qt(this, ee, t), Qt(this, St, Symbol(t));
  }
  get key() {
    return gt(this, St);
  }
  exists() {
    return en(gt(this, St));
  }
  get() {
    const t = Fe(gt(this, St));
    if (t === void 0) throw new Error(`Context "${gt(this, ee)}" not found`);
    return t;
  }
  getOr(t) {
    const l = Fe(gt(this, St));
    return l === void 0 ? t : l;
  }
  set(t) {
    return nn(gt(this, St), t);
  }
}
(ee = new WeakMap()), (St = new WeakMap());
const Ln = new Cn("<Toaster/>");
function re(n) {
  return n.label !== void 0;
}
function Pn() {
  let n = H(Ve(typeof document < "u" ? document.hidden : !1));
  return (
    _t(() =>
      ce(document, "visibilitychange", () => {
        u(n, document.hidden, !0);
      })
    ),
    {
      get current() {
        return e(n);
      },
    }
  );
}
const ze = 4e3,
  On = 14,
  kn = 45,
  Hn = 200,
  Rn = 0.05,
  Fn = {
    toast: "",
    title: "",
    description: "",
    loader: "",
    closeButton: "",
    cancelButton: "",
    actionButton: "",
    action: "",
    warning: "",
    error: "",
    success: "",
    default: "",
    info: "",
    loading: "",
  };
function Nn(n) {
  const [t, l] = n.split("-"),
    B = [];
  return t && B.push(t), l && B.push(l), B;
}
function je(n) {
  return 1 / (1.5 + Math.abs(n) / 20);
}
var Un = at("<div><!></div>"),
  zn = at('<button data-close-button=""><!></button>'),
  jn = at('<div data-icon=""><!> <!></div>'),
  Vn = at('<div data-description=""><!></div>'),
  Wn = at('<button data-button="" data-cancel=""> </button>'),
  Kn = at('<button data-button=""> </button>'),
  Yn = at(
    '<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>',
    1
  ),
  Gn = at('<li data-sonner-toast=""><!> <!></li>');
function Zn(n, t) {
  de(t, !0);
  const l = (s) => {
    var c = g(),
      x = v(c);
    {
      var I = (h) => {
          var W = Un(),
            nt = st(W);
          rt(nt, () => t.loadingIcon),
            tt(W),
            $(
              (K) => {
                Tt(W, 1, K), A(W, "data-visible", e(D) === "loading");
              },
              [
                () => {
                  var K, z, m;
                  return It(
                    xt(
                      (K = e(it)) == null ? void 0 : K.loader,
                      (m = (z = t.toast) == null ? void 0 : z.classes) == null
                        ? void 0
                        : m.loader,
                      "sonner-loader"
                    )
                  );
                },
              ]
            ),
            a(h, W);
        },
        S = (h) => {
          {
            let W = b(() => {
                var K, z;
                return xt(
                  (K = e(it)) == null ? void 0 : K.loader,
                  (z = t.toast.classes) == null ? void 0 : z.loader
                );
              }),
              nt = b(() => e(D) === "loading");
            En(h, {
              get class() {
                return e(W);
              },
              get visible() {
                return e(nt);
              },
            });
          }
        };
      T(x, (h) => {
        t.loadingIcon ? h(I) : h(S, !1);
      });
    }
    a(s, c);
  };
  let B = O(t, "cancelButtonStyle", 3, ""),
    k = O(t, "actionButtonStyle", 3, ""),
    X = O(t, "descriptionClass", 3, ""),
    q = O(t, "unstyled", 3, !1),
    Bt = O(t, "defaultRichColors", 3, !1);
  const et = { ...Fn };
  let L = H(!1),
    V = H(!1),
    Ot = H(!1),
    zt = H(!1),
    jt = H(!1),
    Q = H(0),
    bt = H(0),
    kt = t.toast.duration || t.duration || ze,
    ot = H(void 0),
    ut = H(null),
    Vt = H(null);
  const fe = b(() => t.index === 0),
    ve = b(() => t.index + 1 <= t.visibleToasts),
    D = b(() => t.toast.type),
    ft = b(() => t.toast.dismissable !== !1),
    Mt = b(() => t.toast.class || ""),
    Et = b(() => t.toast.descriptionClass || ""),
    vt = b(() => G.heights.findIndex((s) => s.toastId === t.toast.id) || 0),
    Ct = b(() => t.toast.closeButton ?? t.closeButton),
    me = b(() => t.toast.duration ?? t.duration ?? ze);
  let Dt = null;
  const ae = b(() => t.position.split("-")),
    ge = b(() =>
      G.heights.reduce((s, c, x) => (x >= e(vt) ? s : s + c.height), 0)
    ),
    he = Pn(),
    _e = b(() => t.toast.invert || t.invert),
    Wt = b(() => e(D) === "loading"),
    it = b(() => ({ ...et, ...t.classes })),
    be = b(() => t.toast.title),
    Lt = b(() => t.toast.description);
  let Kt = H(0),
    oe = H(0);
  const r = b(() => Math.round(e(vt) * On + e(ge)));
  _t(() => {
    e(be), e(Lt);
    let s;
    t.expanded || t.expandByDefault ? (s = 1) : (s = 1 - t.index * Rn);
    const c = $t(() => e(ot));
    if (c === void 0) return;
    c.style.setProperty("height", "auto");
    const x = c.offsetHeight,
      I = c.getBoundingClientRect().height,
      S = Math.round((I / s + Number.EPSILON) & 100) / 100;
    c.style.removeProperty("height");
    let h;
    Math.abs(S - x) < 1 ? (h = S) : (h = x),
      u(bt, h, !0),
      $t(() => {
        G.setHeight({ toastId: t.toast.id, height: h });
      });
  });
  function f() {
    u(V, !0),
      u(Q, e(r), !0),
      G.removeHeight(t.toast.id),
      setTimeout(() => {
        G.remove(t.toast.id);
      }, Hn);
  }
  let U;
  const wt = b(
    () =>
      (t.toast.promise && e(D) === "loading") ||
      t.toast.duration === Number.POSITIVE_INFINITY
  );
  function lt() {
    u(Kt, new Date().getTime(), !0),
      (U = setTimeout(() => {
        var s, c;
        (c = (s = t.toast).onAutoClose) == null || c.call(s, t.toast), f();
      }, kt));
  }
  function Ht() {
    if (e(oe) < e(Kt)) {
      const s = new Date().getTime() - e(Kt);
      kt = kt - s;
    }
    u(oe, new Date().getTime(), !0);
  }
  _t(() => {
    t.toast.updated && (clearTimeout(U), (kt = e(me)), lt());
  }),
    _t(
      () => (
        e(wt) || (t.expanded || t.interacting || he.current ? Ht() : lt()),
        () => clearTimeout(U)
      )
    ),
    pt(() => {
      var c;
      u(L, !0);
      const s = (c = e(ot)) == null ? void 0 : c.getBoundingClientRect().height;
      return (
        u(bt, s, !0),
        G.setHeight({ toastId: t.toast.id, height: s }),
        () => {
          G.removeHeight(t.toast.id);
        }
      );
    }),
    _t(() => {
      t.toast.delete &&
        $t(() => {
          var s, c;
          f(), (c = (s = t.toast).onDismiss) == null || c.call(s, t.toast);
        });
    });
  const Oe = (s) => {
      if (e(Wt)) return;
      u(Q, e(r), !0);
      const c = s.target;
      c.setPointerCapture(s.pointerId),
        c.tagName !== "BUTTON" &&
          (u(Ot, !0), (Dt = { x: s.clientX, y: s.clientY }));
    },
    ie = () => {
      var h, W, nt, K, z, m;
      if (e(zt) || !e(ft)) return;
      Dt = null;
      const s = Number(
          ((h = e(ot)) == null
            ? void 0
            : h.style.getPropertyValue("--swipe-amount-x").replace("px", "")) ||
            0
        ),
        c = Number(
          ((W = e(ot)) == null
            ? void 0
            : W.style.getPropertyValue("--swipe-amount-y").replace("px", "")) ||
            0
        ),
        x = new Date().getTime() - 0,
        I = e(ut) === "x" ? s : c,
        S = Math.abs(I) / x;
      if (Math.abs(I) >= kn || S > 0.11) {
        u(Q, e(r), !0),
          (K = (nt = t.toast).onDismiss) == null || K.call(nt, t.toast),
          e(ut) === "x"
            ? u(Vt, s > 0 ? "right" : "left", !0)
            : u(Vt, c > 0 ? "down" : "up", !0),
          f(),
          u(zt, !0);
        return;
      } else
        (z = e(ot)) == null || z.style.setProperty("--swipe-amount-x", "0px"),
          (m = e(ot)) == null || m.style.setProperty("--swipe-amount-y", "0px");
      u(jt, !1), u(Ot, !1), u(ut, null);
    },
    mt = (s) => {
      var W, nt, K;
      if (
        !Dt ||
        !e(ft) ||
        (((W = window.getSelection()) == null ? void 0 : W.toString().length) ??
          -1) > 0
      )
        return;
      const x = s.clientY - Dt.y,
        I = s.clientX - Dt.x,
        S = t.swipeDirections ?? Nn(t.position);
      !e(ut) &&
        (Math.abs(I) > 1 || Math.abs(x) > 1) &&
        u(ut, Math.abs(I) > Math.abs(x) ? "x" : "y", !0);
      let h = { x: 0, y: 0 };
      if (e(ut) === "y") {
        if (S.includes("top") || S.includes("bottom"))
          if ((S.includes("top") && x < 0) || (S.includes("bottom") && x > 0))
            h.y = x;
          else {
            const z = x * je(x);
            h.y = Math.abs(z) < Math.abs(x) ? z : x;
          }
      } else if (e(ut) === "x" && (S.includes("left") || S.includes("right")))
        if ((S.includes("left") && I < 0) || (S.includes("right") && I > 0))
          h.x = I;
        else {
          const z = I * je(I);
          h.x = Math.abs(z) < Math.abs(I) ? z : I;
        }
      (Math.abs(h.x) > 0 || Math.abs(h.y) > 0) && u(jt, !0),
        (nt = e(ot)) == null ||
          nt.style.setProperty("--swipe-amount-x", `${h.x}px`),
        (K = e(ot)) == null ||
          K.style.setProperty("--swipe-amount-y", `${h.y}px`);
    },
    yt = () => {
      u(Ot, !1), u(ut, null), (Dt = null);
    },
    J = b(() =>
      t.toast.icon
        ? t.toast.icon
        : e(D) === "success"
        ? t.successIcon
        : e(D) === "error"
        ? t.errorIcon
        : e(D) === "warning"
        ? t.warningIcon
        : e(D) === "info"
        ? t.infoIcon
        : e(D) === "loading"
        ? t.loadingIcon
        : null
    );
  var w = Gn();
  A(w, "tabindex", 0);
  let se;
  (w.__pointermove = mt), (w.__pointerup = ie), (w.__pointerdown = Oe);
  var we = st(w);
  {
    var ye = (s) => {
      var c = zn();
      c.__click = () => {
        var I, S;
        e(Wt) ||
          !e(ft) ||
          (f(), (S = (I = t.toast).onDismiss) == null || S.call(I, t.toast));
      };
      var x = st(c);
      rt(x, () => t.closeIcon ?? ht),
        tt(c),
        $(
          (I) => {
            A(c, "aria-label", t.closeButtonAriaLabel),
              A(c, "data-disabled", e(Wt)),
              Tt(c, 1, I);
          },
          [
            () => {
              var I, S, h;
              return It(
                xt(
                  (I = e(it)) == null ? void 0 : I.closeButton,
                  (h = (S = t.toast) == null ? void 0 : S.classes) == null
                    ? void 0
                    : h.closeButton
                )
              );
            },
          ]
        ),
        a(s, c);
    };
    T(we, (s) => {
      e(Ct) &&
        !t.toast.component &&
        e(D) !== "loading" &&
        t.closeIcon !== null &&
        s(ye);
    });
  }
  var xe = At(we, 2);
  {
    var Ie = (s) => {
        const c = b(() => t.toast.component);
        var x = g(),
          I = v(x);
        Pt(
          I,
          () => e(c),
          (S, h) => {
            h(
              S,
              Me(() => t.toast.componentProps, { closeToast: f })
            );
          }
        ),
          a(s, x);
      },
      Te = (s) => {
        var c = Yn(),
          x = v(c);
        {
          var I = (y) => {
            var o = jn(),
              d = st(o);
            {
              var E = (_) => {
                var C = g(),
                  j = v(C);
                {
                  var F = (Y) => {
                      var M = g(),
                        N = v(M);
                      Pt(
                        N,
                        () => t.toast.icon,
                        (p, Yt) => {
                          Yt(p, {});
                        }
                      ),
                        a(Y, M);
                    },
                    P = (Y) => {
                      l(Y);
                    };
                  T(j, (Y) => {
                    t.toast.icon ? Y(F) : Y(P, !1);
                  });
                }
                a(_, C);
              };
              T(d, (_) => {
                (t.toast.promise || e(D) === "loading") && _(E);
              });
            }
            var R = At(d, 2);
            {
              var i = (_) => {
                var C = g(),
                  j = v(C);
                {
                  var F = (Y) => {
                      var M = g(),
                        N = v(M);
                      Pt(
                        N,
                        () => t.toast.icon,
                        (p, Yt) => {
                          Yt(p, {});
                        }
                      ),
                        a(Y, M);
                    },
                    P = (Y) => {
                      var M = g(),
                        N = v(M);
                      {
                        var p = (Rt) => {
                            var Gt = g(),
                              Se = v(Gt);
                            rt(Se, () => t.successIcon ?? ht), a(Rt, Gt);
                          },
                          Yt = (Rt) => {
                            var Gt = g(),
                              Se = v(Gt);
                            {
                              var qe = (Ft) => {
                                  var Zt = g(),
                                    Be = v(Zt);
                                  rt(Be, () => t.errorIcon ?? ht), a(Ft, Zt);
                                },
                                Qe = (Ft) => {
                                  var Zt = g(),
                                    Be = v(Zt);
                                  {
                                    var Je = (Nt) => {
                                        var Xt = g(),
                                          Ee = v(Xt);
                                        rt(Ee, () => t.warningIcon ?? ht),
                                          a(Nt, Xt);
                                      },
                                      pe = (Nt) => {
                                        var Xt = g(),
                                          Ee = v(Xt);
                                        {
                                          var $e = (De) => {
                                            var ke = g(),
                                              tn = v(ke);
                                            rt(tn, () => t.infoIcon ?? ht),
                                              a(De, ke);
                                          };
                                          T(
                                            Ee,
                                            (De) => {
                                              e(D) === "info" && De($e);
                                            },
                                            !0
                                          );
                                        }
                                        a(Nt, Xt);
                                      };
                                    T(
                                      Be,
                                      (Nt) => {
                                        e(D) === "warning"
                                          ? Nt(Je)
                                          : Nt(pe, !1);
                                      },
                                      !0
                                    );
                                  }
                                  a(Ft, Zt);
                                };
                              T(
                                Se,
                                (Ft) => {
                                  e(D) === "error" ? Ft(qe) : Ft(Qe, !1);
                                },
                                !0
                              );
                            }
                            a(Rt, Gt);
                          };
                        T(
                          N,
                          (Rt) => {
                            e(D) === "success" ? Rt(p) : Rt(Yt, !1);
                          },
                          !0
                        );
                      }
                      a(Y, M);
                    };
                  T(j, (Y) => {
                    t.toast.icon ? Y(F) : Y(P, !1);
                  });
                }
                a(_, C);
              };
              T(R, (_) => {
                t.toast.type !== "loading" && _(i);
              });
            }
            tt(o),
              $(
                (_) => Tt(o, 1, _),
                [
                  () => {
                    var _, C, j;
                    return It(
                      xt(
                        (_ = e(it)) == null ? void 0 : _.icon,
                        (j = (C = t.toast) == null ? void 0 : C.classes) == null
                          ? void 0
                          : j.icon
                      )
                    );
                  },
                ]
              ),
              a(y, o);
          };
          T(x, (y) => {
            (e(D) || t.toast.icon || t.toast.promise) &&
              t.toast.icon !== null &&
              (e(J) !== null || t.toast.icon) &&
              y(I);
          });
        }
        var S = At(x, 2),
          h = st(S),
          W = st(h);
        {
          var nt = (y) => {
            var o = g(),
              d = v(o);
            {
              var E = (i) => {
                  const _ = b(() => t.toast.title);
                  var C = g(),
                    j = v(C);
                  Pt(
                    j,
                    () => e(_),
                    (F, P) => {
                      P(
                        F,
                        Me(() => t.toast.componentProps)
                      );
                    }
                  ),
                    a(i, C);
                },
                R = (i) => {
                  var _ = Ne();
                  $(() => Jt(_, t.toast.title)), a(i, _);
                };
              T(d, (i) => {
                typeof t.toast.title != "string" ? i(E) : i(R, !1);
              });
            }
            a(y, o);
          };
          T(W, (y) => {
            t.toast.title && y(nt);
          });
        }
        tt(h);
        var K = At(h, 2);
        {
          var z = (y) => {
            var o = Vn(),
              d = st(o);
            {
              var E = (i) => {
                  const _ = b(() => t.toast.description);
                  var C = g(),
                    j = v(C);
                  Pt(
                    j,
                    () => e(_),
                    (F, P) => {
                      P(
                        F,
                        Me(() => t.toast.componentProps)
                      );
                    }
                  ),
                    a(i, C);
                },
                R = (i) => {
                  var _ = Ne();
                  $(() => Jt(_, t.toast.description)), a(i, _);
                };
              T(d, (i) => {
                typeof t.toast.description != "string" ? i(E) : i(R, !1);
              });
            }
            tt(o),
              $(
                (i) => Tt(o, 1, i),
                [
                  () => {
                    var i, _;
                    return It(
                      xt(
                        X(),
                        e(Et),
                        (i = e(it)) == null ? void 0 : i.description,
                        (_ = t.toast.classes) == null ? void 0 : _.description
                      )
                    );
                  },
                ]
              ),
              a(y, o);
          };
          T(K, (y) => {
            t.toast.description && y(z);
          });
        }
        tt(S);
        var m = At(S, 2);
        {
          var Z = (y) => {
            var o = g(),
              d = v(o);
            {
              var E = (i) => {
                  var _ = g(),
                    C = v(_);
                  Pt(
                    C,
                    () => t.toast.cancel,
                    (j, F) => {
                      F(j, {});
                    }
                  ),
                    a(i, _);
                },
                R = (i) => {
                  var _ = g(),
                    C = v(_);
                  {
                    var j = (F) => {
                      var P = Wn();
                      P.__click = (M) => {
                        var N, p;
                        re(t.toast.cancel) &&
                          e(ft) &&
                          ((p =
                            (N = t.toast.cancel) == null
                              ? void 0
                              : N.onClick) == null || p.call(N, M),
                          f());
                      };
                      var Y = st(P, !0);
                      tt(P),
                        $(
                          (M) => {
                            Ae(P, t.toast.cancelButtonStyle ?? B()),
                              Tt(P, 1, M),
                              Jt(Y, t.toast.cancel.label);
                          },
                          [
                            () => {
                              var M, N, p;
                              return It(
                                xt(
                                  (M = e(it)) == null ? void 0 : M.cancelButton,
                                  (p =
                                    (N = t.toast) == null
                                      ? void 0
                                      : N.classes) == null
                                    ? void 0
                                    : p.cancelButton
                                )
                              );
                            },
                          ]
                        ),
                        a(F, P);
                    };
                    T(
                      C,
                      (F) => {
                        re(t.toast.cancel) && F(j);
                      },
                      !0
                    );
                  }
                  a(i, _);
                };
              T(d, (i) => {
                typeof t.toast.cancel == "function" ? i(E) : i(R, !1);
              });
            }
            a(y, o);
          };
          T(m, (y) => {
            t.toast.cancel && y(Z);
          });
        }
        var ct = At(m, 2);
        {
          var dt = (y) => {
            var o = g(),
              d = v(o);
            {
              var E = (i) => {
                  var _ = g(),
                    C = v(_);
                  Pt(
                    C,
                    () => t.toast.action,
                    (j, F) => {
                      F(j, {});
                    }
                  ),
                    a(i, _);
                },
                R = (i) => {
                  var _ = g(),
                    C = v(_);
                  {
                    var j = (F) => {
                      var P = Kn();
                      P.__click = (M) => {
                        var N;
                        re(t.toast.action) &&
                          ((N = t.toast.action) == null || N.onClick(M),
                          !M.defaultPrevented && f());
                      };
                      var Y = st(P, !0);
                      tt(P),
                        $(
                          (M) => {
                            Ae(P, t.toast.actionButtonStyle ?? k()),
                              Tt(P, 1, M),
                              Jt(Y, t.toast.action.label);
                          },
                          [
                            () => {
                              var M, N, p;
                              return It(
                                xt(
                                  (M = e(it)) == null ? void 0 : M.actionButton,
                                  (p =
                                    (N = t.toast) == null
                                      ? void 0
                                      : N.classes) == null
                                    ? void 0
                                    : p.actionButton
                                )
                              );
                            },
                          ]
                        ),
                        a(F, P);
                    };
                    T(
                      C,
                      (F) => {
                        re(t.toast.action) && F(j);
                      },
                      !0
                    );
                  }
                  a(i, _);
                };
              T(d, (i) => {
                typeof t.toast.action == "function" ? i(E) : i(R, !1);
              });
            }
            a(y, o);
          };
          T(ct, (y) => {
            t.toast.action && y(dt);
          });
        }
        $(
          (y) => Tt(h, 1, y),
          [
            () => {
              var y, o, d;
              return It(
                xt(
                  (y = e(it)) == null ? void 0 : y.title,
                  (d = (o = t.toast) == null ? void 0 : o.classes) == null
                    ? void 0
                    : d.title
                )
              );
            },
          ]
        ),
          a(s, c);
      };
    T(xe, (s) => {
      t.toast.component ? s(Ie) : s(Te, !1);
    });
  }
  tt(w),
    Ke(
      w,
      (s) => u(ot, s),
      () => e(ot)
    ),
    $(
      (s, c, x) => {
        Tt(w, 1, s),
          A(w, "data-rich-colors", t.toast.richColors ?? Bt()),
          A(w, "data-styled", !(t.toast.component || t.toast.unstyled || q())),
          A(w, "data-mounted", e(L)),
          A(w, "data-promise", c),
          A(w, "data-swiped", e(jt)),
          A(w, "data-removed", e(V)),
          A(w, "data-visible", e(ve)),
          A(w, "data-y-position", e(ae)[0]),
          A(w, "data-x-position", e(ae)[1]),
          A(w, "data-index", t.index),
          A(w, "data-front", e(fe)),
          A(w, "data-swiping", e(Ot)),
          A(w, "data-dismissable", e(ft)),
          A(w, "data-type", e(D)),
          A(w, "data-invert", e(_e)),
          A(w, "data-swipe-out", e(zt)),
          A(w, "data-swipe-direction", e(Vt)),
          A(w, "data-expanded", x),
          (se = Ae(w, `${t.style} ${t.toast.style}`, se, {
            "--index": t.index,
            "--toasts-before": t.index,
            "--z-index": G.toasts.length - t.index,
            "--offset": `${e(V) ? e(Q) : e(r)}px`,
            "--initial-height": t.expandByDefault ? "auto" : `${e(bt)}px`,
          }));
      },
      [
        () => {
          var s, c, x, I, S, h;
          return It(
            xt(
              t.class,
              e(Mt),
              (s = e(it)) == null ? void 0 : s.toast,
              (x = (c = t.toast) == null ? void 0 : c.classes) == null
                ? void 0
                : x.toast,
              (I = e(it)) == null ? void 0 : I[e(D)],
              (h = (S = t.toast) == null ? void 0 : S.classes) == null
                ? void 0
                : h[e(D)]
            )
          );
        },
        () => !!t.toast.promise,
        () => !!(t.expanded || (t.expandByDefault && e(L))),
      ]
    ),
    We("dragend", w, yt),
    a(n, w),
    ue();
}
an(["pointermove", "pointerup", "pointerdown", "click"]);
var Xn = ne(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>'
);
function qn(n) {
  var t = Xn();
  a(n, t);
}
var Qn = ne(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>'
);
function Jn(n) {
  var t = Qn();
  a(n, t);
}
var pn = ne(
  '<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>'
);
function $n(n) {
  var t = pn();
  a(n, t);
}
var ta = ne(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>'
);
function ea(n) {
  var t = ta();
  a(n, t);
}
var na = ne(
  '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
);
function aa(n) {
  var t = na();
  a(n, t);
}
const oa = 3,
  Ye = "24px",
  Ge = "16px",
  ia = 4e3,
  sa = 356,
  ra = 14,
  Ce = "dark",
  le = "light";
function la(n, t) {
  const l = {};
  return (
    [n, t].forEach((B, k) => {
      const X = k === 1,
        q = X ? "--mobile-offset" : "--offset",
        Bt = X ? Ge : Ye;
      function et(L) {
        ["top", "right", "bottom", "left"].forEach((V) => {
          l[`${q}-${V}`] = typeof L == "number" ? `${L}px` : L;
        });
      }
      typeof B == "number" || typeof B == "string"
        ? et(B)
        : typeof B == "object"
        ? ["top", "right", "bottom", "left"].forEach((L) => {
            const V = B[L];
            V === void 0
              ? (l[`${q}-${L}`] = Bt)
              : (l[`${q}-${L}`] = typeof V == "number" ? `${V}px` : V);
          })
        : et(Bt);
    }),
    l
  );
}
var ca = at("<ol></ol>"),
  da = at(
    '<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-v2ww3x"><!></section>'
  );
function ua(n, t) {
  de(t, !0);
  function l(r) {
    return r !== "system"
      ? r
      : typeof window < "u" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ? Ce
      : le;
  }
  let B = O(t, "invert", 3, !1),
    k = O(t, "position", 3, "bottom-right"),
    X = O(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    q = O(t, "expand", 3, !1),
    Bt = O(t, "closeButton", 3, !1),
    et = O(t, "offset", 3, Ye),
    L = O(t, "mobileOffset", 3, Ge),
    V = O(t, "theme", 3, "light"),
    Ot = O(t, "richColors", 3, !1),
    zt = O(t, "duration", 3, ia),
    jt = O(t, "visibleToasts", 3, oa),
    Q = O(t, "toastOptions", 19, () => ({})),
    bt = O(t, "dir", 7, "auto"),
    kt = O(t, "gap", 3, ra),
    ot = O(t, "containerAriaLabel", 3, "Notifications"),
    ut = O(t, "closeButtonAriaLabel", 3, "Close toast"),
    Vt = xn(t, [
      "$$slots",
      "$$events",
      "$$legacy",
      "invert",
      "position",
      "hotkey",
      "expand",
      "closeButton",
      "offset",
      "mobileOffset",
      "theme",
      "richColors",
      "duration",
      "visibleToasts",
      "toastOptions",
      "dir",
      "gap",
      "loadingIcon",
      "successIcon",
      "errorIcon",
      "warningIcon",
      "closeIcon",
      "infoIcon",
      "containerAriaLabel",
      "class",
      "closeButtonAriaLabel",
      "onblur",
      "onfocus",
      "onmouseenter",
      "onmousemove",
      "onmouseleave",
      "ondragend",
      "onpointerdown",
      "onpointerup",
    ]);
  function fe() {
    if (bt() !== "auto") return bt();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const r = document.documentElement.getAttribute("dir");
    return r === "auto" || !r
      ? ($t(() =>
          bt(
            window.getComputedStyle(document.documentElement).direction ?? "ltr"
          )
        ),
        bt())
      : ($t(() => bt(r)), r);
  }
  const ve = b(() =>
    Array.from(
      new Set(
        [
          k(),
          ...G.toasts.filter((r) => r.position).map((r) => r.position),
        ].filter(Boolean)
      )
    )
  );
  let D = H(!1),
    ft = H(!1),
    Mt = H(Ve(l(V()))),
    Et = H(void 0),
    vt = H(null),
    Ct = H(!1);
  const me = b(() => X().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  _t(() => {
    G.toasts.length <= 1 && u(D, !1);
  }),
    _t(() => {
      const r = G.toasts.filter((f) => f.dismiss && !f.delete);
      if (r.length > 0) {
        const f = G.toasts.map((U) =>
          r.find((lt) => lt.id === U.id) ? { ...U, delete: !0 } : U
        );
        G.toasts = f;
      }
    }),
    _t(() => () => {
      e(Et) &&
        e(vt) &&
        (e(vt).focus({ preventScroll: !0 }), u(vt, null), u(Ct, !1));
    }),
    pt(
      () => (
        G.reset(),
        ce(document, "keydown", (f) => {
          var wt, lt;
          X().every((Ht) => f[Ht] || f.code === Ht) &&
            (u(D, !0), (wt = e(Et)) == null || wt.focus()),
            f.code === "Escape" &&
              (document.activeElement === e(Et) ||
                ((lt = e(Et)) != null &&
                  lt.contains(document.activeElement))) &&
              u(D, !1);
        })
      )
    ),
    _t(() => {
      if ((V() !== "system" && u(Mt, V()), typeof window < "u")) {
        V() === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? u(Mt, Ce)
            : u(Mt, le));
        const r = window.matchMedia("(prefers-color-scheme: dark)"),
          f = ({ matches: U }) => {
            u(Mt, U ? Ce : le, !0);
          };
        "addEventListener" in r
          ? r.addEventListener("change", f)
          : r.addListener(f);
      }
    });
  const Dt = (r) => {
      var f;
      (f = t.onblur) == null || f.call(t, r),
        e(Ct) &&
          !r.currentTarget.contains(r.relatedTarget) &&
          (u(Ct, !1),
          e(vt) && (e(vt).focus({ preventScroll: !0 }), u(vt, null)));
    },
    ae = (r) => {
      var U;
      (U = t.onfocus) == null || U.call(t, r),
        !(
          r.target instanceof HTMLElement &&
          r.target.dataset.dismissable === "false"
        ) &&
          (e(Ct) || (u(Ct, !0), u(vt, r.relatedTarget, !0)));
    },
    ge = (r) => {
      var U;
      (U = t.onpointerdown) == null || U.call(t, r),
        !(
          r.target instanceof HTMLElement &&
          r.target.dataset.dismissable === "false"
        ) && u(ft, !0);
    },
    he = (r) => {
      var f;
      (f = t.onmouseenter) == null || f.call(t, r), u(D, !0);
    },
    _e = (r) => {
      var f;
      (f = t.onmouseleave) == null || f.call(t, r), e(ft) || u(D, !1);
    },
    Wt = (r) => {
      var f;
      (f = t.onmousemove) == null || f.call(t, r), u(D, !0);
    },
    it = (r) => {
      var f;
      (f = t.ondragend) == null || f.call(t, r), u(D, !1);
    },
    be = (r) => {
      var f;
      (f = t.onpointerup) == null || f.call(t, r), u(ft, !1);
    };
  Ln.set(new cn());
  var Lt = da();
  A(Lt, "tabindex", -1);
  var Kt = st(Lt);
  {
    var oe = (r) => {
      var f = g(),
        U = v(f);
      Le(
        U,
        18,
        () => e(ve),
        (wt) => wt,
        (wt, lt, Ht, Oe) => {
          const ie = b(() => {
              const [J, w] = lt.split("-");
              return { y: J, x: w };
            }),
            mt = b(() => la(et(), L()));
          var yt = ca();
          wn(
            yt,
            (J) => {
              var w;
              return {
                tabindex: -1,
                dir: J,
                class: t.class,
                "data-sonner-toaster": !0,
                "data-sonner-theme": e(Mt),
                "data-y-position": e(ie).y,
                "data-x-position": e(ie).x,
                style: t.style,
                onblur: Dt,
                onfocus: ae,
                onmouseenter: he,
                onmousemove: Wt,
                onmouseleave: _e,
                ondragend: it,
                onpointerdown: ge,
                onpointerup: be,
                ...Vt,
                [yn]: {
                  "--front-toast-height": `${
                    (w = G.heights[0]) == null ? void 0 : w.height
                  }px`,
                  "--width": `${sa}px`,
                  "--gap": `${kt()}px`,
                  "--offset-top": e(mt)["--offset-top"],
                  "--offset-right": e(mt)["--offset-right"],
                  "--offset-bottom": e(mt)["--offset-bottom"],
                  "--offset-left": e(mt)["--offset-left"],
                  "--mobile-offset-top": e(mt)["--mobile-offset-top"],
                  "--mobile-offset-right": e(mt)["--mobile-offset-right"],
                  "--mobile-offset-bottom": e(mt)["--mobile-offset-bottom"],
                  "--mobile-offset-left": e(mt)["--mobile-offset-left"],
                },
              };
            },
            [fe],
            void 0,
            void 0,
            "svelte-v2ww3x"
          ),
            Le(
              yt,
              23,
              () =>
                G.toasts.filter(
                  (J) => (!J.position && e(Ht) === 0) || J.position === lt
                ),
              (J) => J.id,
              (J, w, se, we) => {
                {
                  const ye = (m) => {
                      var Z = g(),
                        ct = v(Z);
                      {
                        var dt = (o) => {
                            var d = g(),
                              E = v(d);
                            rt(E, () => t.successIcon ?? ht), a(o, d);
                          },
                          y = (o) => {
                            var d = g(),
                              E = v(d);
                            {
                              var R = (i) => {
                                qn(i);
                              };
                              T(
                                E,
                                (i) => {
                                  t.successIcon !== null && i(R);
                                },
                                !0
                              );
                            }
                            a(o, d);
                          };
                        T(ct, (o) => {
                          t.successIcon ? o(dt) : o(y, !1);
                        });
                      }
                      a(m, Z);
                    },
                    xe = (m) => {
                      var Z = g(),
                        ct = v(Z);
                      {
                        var dt = (o) => {
                            var d = g(),
                              E = v(d);
                            rt(E, () => t.errorIcon ?? ht), a(o, d);
                          },
                          y = (o) => {
                            var d = g(),
                              E = v(d);
                            {
                              var R = (i) => {
                                Jn(i);
                              };
                              T(
                                E,
                                (i) => {
                                  t.errorIcon !== null && i(R);
                                },
                                !0
                              );
                            }
                            a(o, d);
                          };
                        T(ct, (o) => {
                          t.errorIcon ? o(dt) : o(y, !1);
                        });
                      }
                      a(m, Z);
                    },
                    Ie = (m) => {
                      var Z = g(),
                        ct = v(Z);
                      {
                        var dt = (o) => {
                            var d = g(),
                              E = v(d);
                            rt(E, () => t.warningIcon ?? ht), a(o, d);
                          },
                          y = (o) => {
                            var d = g(),
                              E = v(d);
                            {
                              var R = (i) => {
                                $n(i);
                              };
                              T(
                                E,
                                (i) => {
                                  t.warningIcon !== null && i(R);
                                },
                                !0
                              );
                            }
                            a(o, d);
                          };
                        T(ct, (o) => {
                          t.warningIcon ? o(dt) : o(y, !1);
                        });
                      }
                      a(m, Z);
                    },
                    Te = (m) => {
                      var Z = g(),
                        ct = v(Z);
                      {
                        var dt = (o) => {
                            var d = g(),
                              E = v(d);
                            rt(E, () => t.infoIcon ?? ht), a(o, d);
                          },
                          y = (o) => {
                            var d = g(),
                              E = v(d);
                            {
                              var R = (i) => {
                                ea(i);
                              };
                              T(
                                E,
                                (i) => {
                                  t.infoIcon !== null && i(R);
                                },
                                !0
                              );
                            }
                            a(o, d);
                          };
                        T(ct, (o) => {
                          t.infoIcon ? o(dt) : o(y, !1);
                        });
                      }
                      a(m, Z);
                    },
                    s = (m) => {
                      var Z = g(),
                        ct = v(Z);
                      {
                        var dt = (o) => {
                            var d = g(),
                              E = v(d);
                            rt(E, () => t.closeIcon ?? ht), a(o, d);
                          },
                          y = (o) => {
                            var d = g(),
                              E = v(d);
                            {
                              var R = (i) => {
                                aa(i);
                              };
                              T(
                                E,
                                (i) => {
                                  t.closeIcon !== null && i(R);
                                },
                                !0
                              );
                            }
                            a(o, d);
                          };
                        T(ct, (o) => {
                          t.closeIcon ? o(dt) : o(y, !1);
                        });
                      }
                      a(m, Z);
                    };
                  let c = b(() => {
                      var m;
                      return ((m = Q()) == null ? void 0 : m.duration) ?? zt();
                    }),
                    x = b(() => {
                      var m;
                      return ((m = Q()) == null ? void 0 : m.class) ?? "";
                    }),
                    I = b(() => {
                      var m;
                      return (
                        ((m = Q()) == null ? void 0 : m.descriptionClass) || ""
                      );
                    }),
                    S = b(() => {
                      var m;
                      return ((m = Q()) == null ? void 0 : m.style) ?? "";
                    }),
                    h = b(() => Q().classes || {}),
                    W = b(() => Q().unstyled ?? !1),
                    nt = b(() => {
                      var m;
                      return (
                        ((m = Q()) == null ? void 0 : m.cancelButtonStyle) ?? ""
                      );
                    }),
                    K = b(() => {
                      var m;
                      return (
                        ((m = Q()) == null ? void 0 : m.actionButtonStyle) ?? ""
                      );
                    }),
                    z = b(() => {
                      var m;
                      return (
                        ((m = Q()) == null ? void 0 : m.closeButtonAriaLabel) ??
                        ut()
                      );
                    });
                  Zn(J, {
                    get index() {
                      return e(se);
                    },
                    get toast() {
                      return e(w);
                    },
                    get defaultRichColors() {
                      return Ot();
                    },
                    get duration() {
                      return e(c);
                    },
                    get class() {
                      return e(x);
                    },
                    get descriptionClass() {
                      return e(I);
                    },
                    get invert() {
                      return B();
                    },
                    get visibleToasts() {
                      return jt();
                    },
                    get closeButton() {
                      return Bt();
                    },
                    get interacting() {
                      return e(ft);
                    },
                    get position() {
                      return lt;
                    },
                    get style() {
                      return e(S);
                    },
                    get classes() {
                      return e(h);
                    },
                    get unstyled() {
                      return e(W);
                    },
                    get cancelButtonStyle() {
                      return e(nt);
                    },
                    get actionButtonStyle() {
                      return e(K);
                    },
                    get closeButtonAriaLabel() {
                      return e(z);
                    },
                    get expandByDefault() {
                      return q();
                    },
                    get expanded() {
                      return e(D);
                    },
                    get loadingIcon() {
                      return t.loadingIcon;
                    },
                    successIcon: ye,
                    errorIcon: xe,
                    warningIcon: Ie,
                    infoIcon: Te,
                    closeIcon: s,
                    $$slots: {
                      successIcon: !0,
                      errorIcon: !0,
                      warningIcon: !0,
                      infoIcon: !0,
                      closeIcon: !0,
                    },
                  });
                }
              }
            ),
            tt(yt),
            Ke(
              yt,
              (J) => u(Et, J),
              () => e(Et)
            ),
            $(() => (yt.dir = yt.dir)),
            a(wt, yt);
        }
      ),
        a(r, f);
    };
    T(Kt, (r) => {
      G.toasts.length > 0 && r(oe);
    });
  }
  tt(Lt),
    $(() => A(Lt, "aria-label", `${ot() ?? ""} ${e(me) ?? ""}`)),
    a(n, Lt),
    ue();
}
const fa =
  "" + new URL("../assets/pawtect_wasm_bg.BvxCe1S1.wasm", import.meta.url).href;
let Ze = H(!1);
function va() {
  const n = dn("2025-09_pawtect");
  if (!n) throw new Error("pawtect experiment not found on load");
  n.variant !== "disabled" && (e(Ze) || (Pe.data && un(fa).then(ma)));
}
function ma() {
  fn(Pe.data.id), vn.postPawtectLoad();
  const n = fetch;
  Object.assign(window, {
    fetch: Xe((t, l) => {
      let B = null;
      return (
        t instanceof Request ? (B = t.url) : (B = t),
        B.startsWith("/") || mn(B),
        n.call(window, t, l)
      );
    }),
  }),
    u(Ze, !0);
}
function Xe(n) {
  return n.bind().bind();
}
function ga(n, t, l) {
  const B = {
    [n.name](...k) {
      return l(...k), t(...k);
    },
  }[n.name];
  return Xe(B);
}
var ha = at('<span class="hidden"> </span> <!> <!>', 1);
function Ha(n, t) {
  de(t, !0),
    pt(() => {
      gn(),
        Pe.refresh().then((L) => {
          L && va();
        }),
        Object.assign(window, {
          eval: ga(
            eval,
            function () {},
            async () => {
              await fetch(ln + "/me", {
                credentials: "include",
                headers: { Authorization: "Bearer " + crypto.randomUUID() },
              });
            }
          ),
        });
      let et = setInterval(() => {
        _n();
      }, 5e3);
      return () => {
        clearTimeout(et);
      };
    });
  const l = "muted";
  pt(() => {
    Ue.muted = localStorage.getItem(l) === "1";
  }),
    _t(() => {
      {
        const et = Ue.muted;
        document.querySelectorAll("audio").forEach((L) => {
          L.muted = et;
        });
        for (const L of Object.values(hn).filter((V) => V instanceof Audio))
          (L.muted = et), et || (L.volume = 0.3);
        localStorage.setItem(l, Number(et).toString());
      }
    }),
    pt(() => {});
  var B = ha();
  We("beforeunload", on, () => {
    bn();
  });
  var k = v(B),
    X = st(k);
  tt(k);
  var q = At(k, 2);
  rt(q, () => t.children);
  var Bt = At(q, 2);
  ua(Bt, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "!top-15",
    duration: 3e3,
  }),
    $(() => Jt(X, `Version: ${rn}`)),
    a(n, B),
    ue();
}
export { Ha as component, ka as universal };

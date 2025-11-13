import {
  an as O,
  E as B,
  aT as D,
  aU as L,
  e as $,
  F as U,
  aV as q,
  aW as z,
  aX as M,
  aY as F,
  aS as P,
  R as W,
  x as E,
} from "./iK5FT0Sa.js";
import { a as Y } from "./BHnQYZx5.js";
import { c as j } from "./DcUGKLlr.js";
(function () {
  try {
    var t =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      i = new t.Error().stack;
    i &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[i] = "bdec27be-b8c7-4fec-900c-089611ea207e"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-bdec27be-b8c7-4fec-900c-089611ea207e"));
  })();
} catch {}
const G = () => performance.now(),
  g = {
    tick: (t) => requestAnimationFrame(t),
    now: () => G(),
    tasks: new Set(),
  };
function x() {
  const t = g.now();
  g.tasks.forEach((i) => {
    i.c(t) || (g.tasks.delete(i), i.f());
  }),
    g.tasks.size !== 0 && g.tick(x);
}
function K(t) {
  let i;
  return (
    g.tasks.size === 0 && g.tick(x),
    {
      promise: new Promise((r) => {
        g.tasks.add((i = { c: t, f: r }));
      }),
      abort() {
        g.tasks.delete(i);
      },
    }
  );
}
function y(t, i) {
  F(() => {
    t.dispatchEvent(new CustomEvent(i));
  });
}
function V(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const i = t.split("-");
  return i.length === 1
    ? i[0]
    : i[0] +
        i
          .slice(1)
          .map((r) => r[0].toUpperCase() + r.slice(1))
          .join("");
}
function S(t) {
  const i = {},
    r = t.split(";");
  for (const a of r) {
    const [e, s] = a.split(":");
    if (!e || s === void 0) break;
    const n = V(e.trim());
    i[n] = s.trim();
  }
  return i;
}
const X = (t) => t;
function Z(t, i, r) {
  var a = j,
    e,
    s,
    n,
    h = null;
  a.a ??
    (a.a = {
      element: t,
      measure() {
        e = this.element.getBoundingClientRect();
      },
      apply() {
        if (
          (n == null || n.abort(),
          (s = this.element.getBoundingClientRect()),
          e.left !== s.left ||
            e.right !== s.right ||
            e.top !== s.top ||
            e.bottom !== s.bottom)
        ) {
          const c = i()(
            this.element,
            { from: e, to: s },
            r == null ? void 0 : r()
          );
          n = I(this.element, c, void 0, 1, () => {
            n == null || n.abort(), (n = void 0);
          });
        }
      },
      fix() {
        if (!t.getAnimations().length) {
          var { position: c, width: w, height: u } = getComputedStyle(t);
          if (c !== "absolute" && c !== "fixed") {
            var d = t.style;
            (h = {
              position: d.position,
              width: d.width,
              height: d.height,
              transform: d.transform,
            }),
              (d.position = "absolute"),
              (d.width = w),
              (d.height = u);
            var f = t.getBoundingClientRect();
            if (e.left !== f.left || e.top !== f.top) {
              var o = `translate(${e.left - f.left}px, ${e.top - f.top}px)`;
              d.transform = d.transform ? `${d.transform} ${o}` : o;
            }
          }
        }
      },
      unfix() {
        if (h) {
          var c = t.style;
          (c.position = h.position),
            (c.width = h.width),
            (c.height = h.height),
            (c.transform = h.transform);
        }
      },
    }),
    (a.a.element = t);
}
function tt(t, i, r, a) {
  var e = (t & z) !== 0,
    s = (t & M) !== 0,
    n = e && s,
    h = (t & q) !== 0,
    c = n ? "both" : e ? "in" : "out",
    w,
    u = i.inert,
    d = i.style.overflow,
    f,
    o;
  function _() {
    return F(
      () =>
        w ?? (w = r()(i, (a == null ? void 0 : a()) ?? {}, { direction: c }))
    );
  }
  var v = {
      is_global: h,
      in() {
        var b;
        if (((i.inert = u), !e)) {
          o == null || o.abort(),
            (b = o == null ? void 0 : o.reset) == null || b.call(o);
          return;
        }
        s || f == null || f.abort(),
          y(i, "introstart"),
          (f = I(i, _(), o, 1, () => {
            y(i, "introend"),
              f == null || f.abort(),
              (f = w = void 0),
              (i.style.overflow = d);
          }));
      },
      out(b) {
        if (!s) {
          b == null || b(), (w = void 0);
          return;
        }
        (i.inert = !0),
          y(i, "outrostart"),
          (o = I(i, _(), f, 0, () => {
            y(i, "outroend"), b == null || b();
          }));
      },
      stop: () => {
        f == null || f.abort(), o == null || o.abort();
      },
    },
    p = O;
  if (((p.transitions ?? (p.transitions = [])).push(v), e && Y)) {
    var T = h;
    if (!T) {
      for (var l = p.parent; l && (l.f & B) !== 0; )
        for (; (l = l.parent) && (l.f & D) === 0; );
      T = !l || (l.f & L) !== 0;
    }
    T &&
      $(() => {
        U(() => v.in());
      });
  }
}
function I(t, i, r, a, e) {
  var s = a === 1;
  if (P(i)) {
    var n,
      h = !1;
    return (
      W(() => {
        if (!h) {
          var p = i({ direction: s ? "in" : "out" });
          n = I(t, p, r, a, e);
        }
      }),
      {
        abort: () => {
          (h = !0), n == null || n.abort();
        },
        deactivate: () => n.deactivate(),
        reset: () => n.reset(),
        t: () => n.t(),
      }
    );
  }
  if ((r == null || r.deactivate(), !(i != null && i.duration)))
    return e(), { abort: E, deactivate: E, reset: E, t: () => a };
  const { delay: c = 0, css: w, tick: u, easing: d = X } = i;
  var f = [];
  if (s && r === void 0 && (u && u(0, 1), w)) {
    var o = S(w(0, 1));
    f.push(o, o);
  }
  var _ = () => 1 - a,
    v = t.animate(f, { duration: c, fill: "forwards" });
  return (
    (v.onfinish = () => {
      v.cancel();
      var p = (r == null ? void 0 : r.t()) ?? 1 - a;
      r == null || r.abort();
      var T = a - p,
        l = i.duration * Math.abs(T),
        b = [];
      if (l > 0) {
        var N = !1;
        if (w)
          for (
            var k = Math.ceil(l / 16.666666666666668), R = 0;
            R <= k;
            R += 1
          ) {
            var A = p + T * d(R / k),
              C = S(w(A, 1 - A));
            b.push(C), N || (N = C.overflow === "hidden");
          }
        N && (t.style.overflow = "hidden"),
          (_ = () => {
            var m = v.currentTime;
            return p + T * d(m / l);
          }),
          u &&
            K(() => {
              if (v.playState !== "running") return !1;
              var m = _();
              return u(m, 1 - m), !0;
            });
      }
      (v = t.animate(b, { duration: l, fill: "forwards" })),
        (v.onfinish = () => {
          (_ = () => a), u == null || u(a, 1 - a), e();
        });
    }),
    {
      abort: () => {
        v && (v.cancel(), (v.effect = null), (v.onfinish = E));
      },
      deactivate: () => {
        e = E;
      },
      reset: () => {
        a === 0 && (u == null || u(1, 0));
      },
      t: () => _(),
    }
  );
}
export { Z as a, tt as t };

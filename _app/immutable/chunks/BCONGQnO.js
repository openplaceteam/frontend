import {
    F as D,
    aY as L,
    aZ as q,
    i as B,
    h as F,
    e as $,
    j as z,
    k as M,
    l as U,
    m as j,
    o as P,
    aM as Y,
    q as Z,
    ad as G,
    E as K,
    a_ as W,
    a$ as X,
    M as H,
    z as J,
    b0 as Q,
    b1 as V,
    b2 as tt,
    b3 as S,
    aX as at,
    L as it,
    az as y,
} from "./BDALf20I.js";
import { a as et } from "./4k6DpCgf.js";
import { c as rt } from "./CZW2bcQi.js";
(function () {
    try {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        t.SENTRY_RELEASE = { id: "35111e7039e8c68cc677344b7f7c6971567f6820" };
    } catch {}
})();
try {
    (function () {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new t.Error().stack;
        a && ((t._sentryDebugIds = t._sentryDebugIds || {}), (t._sentryDebugIds[a] = "ffd23b39-2a11-4572-8955-38bdff19f9fa"), (t._sentryDebugIdIdentifier = "sentry-dbid-ffd23b39-2a11-4572-8955-38bdff19f9fa"));
    })();
} catch {}
function vt(t, a, i) {
    F && $();
    var r = t,
        e = Y,
        f,
        n,
        o = null,
        v = D() ? L : q;
    function h() {
        f && Z(f), o !== null && (o.lastChild.remove(), r.before(o), (o = null)), (f = n);
    }
    B(() => {
        if (v(e, (e = a()))) {
            var c = r,
                u = j();
            u && ((o = document.createDocumentFragment()), o.append((c = z()))), (n = M(() => i(c))), u ? U.add_callback(h) : h();
        }
    }),
        F && (r = P);
}
const nt = () => performance.now(),
    w = { tick: (t) => requestAnimationFrame(t), now: () => nt(), tasks: new Set() };
function O() {
    const t = w.now();
    w.tasks.forEach((a) => {
        a.c(t) || (w.tasks.delete(a), a.f());
    }),
        w.tasks.size !== 0 && w.tick(O);
}
function ft(t) {
    let a;
    return (
        w.tasks.size === 0 && w.tick(O),
        {
            promise: new Promise((i) => {
                w.tasks.add((a = { c: t, f: i }));
            }),
            abort() {
                w.tasks.delete(a);
            },
        }
    );
}
function E(t, a) {
    S(() => {
        t.dispatchEvent(new CustomEvent(a));
    });
}
function st(t) {
    if (t === "float") return "cssFloat";
    if (t === "offset") return "cssOffset";
    if (t.startsWith("--")) return t;
    const a = t.split("-");
    return a.length === 1
        ? a[0]
        : a[0] +
              a
                  .slice(1)
                  .map((i) => i[0].toUpperCase() + i.slice(1))
                  .join("");
}
function x(t) {
    const a = {},
        i = t.split(";");
    for (const r of i) {
        const [e, f] = r.split(":");
        if (!e || f === void 0) break;
        const n = st(e.trim());
        a[n] = f.trim();
    }
    return a;
}
const ot = (t) => t;
function ht(t, a, i) {
    var r = rt,
        e,
        f,
        n,
        o = null;
    r.a ??
        (r.a = {
            element: t,
            measure() {
                e = this.element.getBoundingClientRect();
            },
            apply() {
                if ((n == null || n.abort(), (f = this.element.getBoundingClientRect()), e.left !== f.left || e.right !== f.right || e.top !== f.top || e.bottom !== f.bottom)) {
                    const v = a()(this.element, { from: e, to: f }, i == null ? void 0 : i());
                    n = k(this.element, v, void 0, 1, () => {
                        n == null || n.abort(), (n = void 0);
                    });
                }
            },
            fix() {
                if (!t.getAnimations().length) {
                    var { position: v, width: h, height: c } = getComputedStyle(t);
                    if (v !== "absolute" && v !== "fixed") {
                        var u = t.style;
                        (o = { position: u.position, width: u.width, height: u.height, transform: u.transform }), (u.position = "absolute"), (u.width = h), (u.height = c);
                        var s = t.getBoundingClientRect();
                        if (e.left !== s.left || e.top !== s.top) {
                            var d = `translate(${e.left - s.left}px, ${e.top - s.top}px)`;
                            u.transform = u.transform ? `${u.transform} ${d}` : d;
                        }
                    }
                }
            },
            unfix() {
                if (o) {
                    var v = t.style;
                    (v.position = o.position), (v.width = o.width), (v.height = o.height), (v.transform = o.transform);
                }
            },
        }),
        (r.a.element = t);
}
function lt(t, a, i, r) {
    var e = (t & V) !== 0,
        f = (t & tt) !== 0,
        n = e && f,
        o = (t & Q) !== 0,
        v = n ? "both" : e ? "in" : "out",
        h,
        c = a.inert,
        u = a.style.overflow,
        s,
        d;
    function g() {
        return S(() => h ?? (h = i()(a, (r == null ? void 0 : r()) ?? {}, { direction: v })));
    }
    var l = {
            is_global: o,
            in() {
                var _;
                if (((a.inert = c), !e)) {
                    d == null || d.abort(), (_ = d == null ? void 0 : d.reset) == null || _.call(d);
                    return;
                }
                f || s == null || s.abort(),
                    E(a, "introstart"),
                    (s = k(a, g(), d, 1, () => {
                        E(a, "introend"), s == null || s.abort(), (s = h = void 0), (a.style.overflow = u);
                    }));
            },
            out(_) {
                if (!f) {
                    _ == null || _(), (h = void 0);
                    return;
                }
                (a.inert = !0),
                    E(a, "outrostart"),
                    (d = k(a, g(), s, 0, () => {
                        E(a, "outroend"), _ == null || _();
                    }));
            },
            stop: () => {
                s == null || s.abort(), d == null || d.abort();
            },
        },
        p = G;
    if (((p.transitions ?? (p.transitions = [])).push(l), e && et)) {
        var m = o;
        if (!m) {
            for (var b = p.parent; b && (b.f & K) !== 0; ) for (; (b = b.parent) && (b.f & W) === 0; );
            m = !b || (b.f & X) !== 0;
        }
        m &&
            H(() => {
                J(() => l.in());
            });
    }
}
function k(t, a, i, r, e) {
    var f = r === 1;
    if (at(a)) {
        var n,
            o = !1;
        return (
            it(() => {
                if (!o) {
                    var p = a({ direction: f ? "in" : "out" });
                    n = k(t, p, i, r, e);
                }
            }),
            {
                abort: () => {
                    (o = !0), n == null || n.abort();
                },
                deactivate: () => n.deactivate(),
                reset: () => n.reset(),
                t: () => n.t(),
            }
        );
    }
    if ((i == null || i.deactivate(), !(a != null && a.duration))) return e(), { abort: y, deactivate: y, reset: y, t: () => r };
    const { delay: v = 0, css: h, tick: c, easing: u = ot } = a;
    var s = [];
    if (f && i === void 0 && (c && c(0, 1), h)) {
        var d = x(h(0, 1));
        s.push(d, d);
    }
    var g = () => 1 - r,
        l = t.animate(s, { duration: v, fill: "forwards" });
    return (
        (l.onfinish = () => {
            l.cancel();
            var p = (i == null ? void 0 : i.t()) ?? 1 - r;
            i == null || i.abort();
            var m = r - p,
                b = a.duration * Math.abs(m),
                _ = [];
            if (b > 0) {
                var N = !1;
                if (h)
                    for (var A = Math.ceil(b / 16.666666666666668), I = 0; I <= A; I += 1) {
                        var C = p + m * u(I / A),
                            R = x(h(C, 1 - C));
                        _.push(R), N || (N = R.overflow === "hidden");
                    }
                N && (t.style.overflow = "hidden"),
                    (g = () => {
                        var T = l.currentTime;
                        return p + m * u(T / b);
                    }),
                    c &&
                        ft(() => {
                            if (l.playState !== "running") return !1;
                            var T = g();
                            return c(T, 1 - T), !0;
                        });
            }
            (l = t.animate(_, { duration: b, fill: "forwards" })),
                (l.onfinish = () => {
                    (g = () => r), c == null || c(r, 1 - r), e();
                });
        }),
        {
            abort: () => {
                l && (l.cancel(), (l.effect = null), (l.onfinish = y));
            },
            deactivate: () => {
                e = y;
            },
            reset: () => {
                r === 0 && (c == null || c(1, 0));
            },
            t: () => g(),
        }
    );
}
export { ht as a, vt as k, lt as t };

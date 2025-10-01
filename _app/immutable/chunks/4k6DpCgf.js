import {
    aj as v,
    P as A,
    W as T,
    ak as L,
    a9 as k,
    ag as b,
    V as h,
    O as D,
    e as M,
    o as u,
    X as S,
    af as Y,
    al as j,
    ab as C,
    a2 as H,
    am as V,
    an as R,
    ao as W,
    ap as y,
    aq as P,
    j as $,
    k as q,
    h as w,
    p as F,
    w as X,
    ah as z,
    ad as B,
    c as G,
} from "./BDALf20I.js";
import { r as J } from "./BUhRjcOt.js";
(function () {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        e.SENTRY_RELEASE = { id: "35111e7039e8c68cc677344b7f7c6971567f6820" };
    } catch {}
})();
try {
    (function () {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && ((e._sentryDebugIds = e._sentryDebugIds || {}), (e._sentryDebugIds[a] = "9557bbbe-29d3-45f6-8a81-e8d8cda40d22"), (e._sentryDebugIdIdentifier = "sentry-dbid-9557bbbe-29d3-45f6-8a81-e8d8cda40d22"));
    })();
} catch {}
let I = !0;
function Z(e, a) {
    var t = a == null ? "" : typeof a == "object" ? a + "" : a;
    t !== (e.__t ?? (e.__t = e.nodeValue)) && ((e.__t = t), (e.nodeValue = t + ""));
}
function K(e, a) {
    return N(e, a);
}
function x(e, a) {
    v(), (a.intro = a.intro ?? !1);
    const t = a.target,
        _ = w,
        c = u;
    try {
        for (var s = A(t); s && (s.nodeType !== T || s.data !== L); ) s = k(s);
        if (!s) throw b;
        h(!0), D(s), M();
        const d = N(e, { ...a, anchor: s });
        if (u === null || u.nodeType !== T || u.data !== S) throw (Y(), b);
        return h(!1), d;
    } catch (d) {
        if (
            d instanceof Error &&
            d.message
                .split(
                    `
`
                )
                .some((f) => f.startsWith("https://svelte.dev/e/"))
        )
            throw d;
        return d !== b && console.warn("Failed to hydrate: ", d), a.recover === !1 && j(), v(), C(t), h(!1), K(e, a);
    } finally {
        h(_), D(c), J();
    }
}
const i = new Map();
function N(e, { target: a, anchor: t, props: _ = {}, events: c, context: s, intro: d = !0 }) {
    v();
    var f = new Set(),
        g = (o) => {
            for (var n = 0; n < o.length; n++) {
                var r = o[n];
                if (!f.has(r)) {
                    f.add(r);
                    var l = P(r);
                    a.addEventListener(r, y, { passive: l });
                    var E = i.get(r);
                    E === void 0 ? (document.addEventListener(r, y, { passive: l }), i.set(r, 1)) : i.set(r, E + 1);
                }
            }
        };
    g(H(V)), R.add(g);
    var p = void 0,
        O = W(() => {
            var o = t ?? a.appendChild($());
            return (
                q(() => {
                    if (s) {
                        F({});
                        var n = X;
                        n.c = s;
                    }
                    c && (_.$$events = c), w && z(o, null), (I = d), (p = e(o, _) || {}), (I = !0), w && (B.nodes_end = u), s && G();
                }),
                () => {
                    var l;
                    for (var n of f) {
                        a.removeEventListener(n, y);
                        var r = i.get(n);
                        --r === 0 ? (document.removeEventListener(n, y), i.delete(n)) : i.set(n, r);
                    }
                    R.delete(g), o !== t && ((l = o.parentNode) == null || l.removeChild(o));
                }
            );
        });
    return m.set(p, O), p;
}
let m = new WeakMap();
function ee(e, a) {
    const t = m.get(e);
    return t ? (m.delete(e), t(a)) : Promise.resolve();
}
export { I as a, x as h, K as m, Z as s, ee as u };

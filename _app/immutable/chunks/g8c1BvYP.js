import {
    ac as m,
    J as L,
    P as N,
    ad as M,
    a2 as b,
    a9 as p,
    O as h,
    I as O,
    e as j,
    m as l,
    Q as C,
    a8 as H,
    ae as Y,
    a4 as P,
    X as S,
    af as V,
    ag as R,
    ah as W,
    ai as v,
    aj as $,
    i as k,
    j as F,
    h as w,
    p as J,
    u as Q,
    aa as X,
    a6 as q,
    c as z,
} from "./DUoKDNpf.js";
import { r as B } from "./2CRhGZHc.js";
let D = !0;
function Z(a, e) {
    var t = e == null ? "" : typeof e == "object" ? e + "" : e;
    t !== (a.__t ?? (a.__t = a.nodeValue)) && ((a.__t = t), (a.nodeValue = t + ""));
}
function G(a, e) {
    return A(a, e);
}
function x(a, e) {
    m(), (e.intro = e.intro ?? !1);
    const t = e.target,
        u = w,
        c = l;
    try {
        for (var r = L(t); r && (r.nodeType !== N || r.data !== M); ) r = b(r);
        if (!r) throw p;
        h(!0), O(r), j();
        const o = A(a, { ...e, anchor: r });
        if (l === null || l.nodeType !== N || l.data !== C) throw (H(), p);
        return h(!1), o;
    } catch (o) {
        if (
            o instanceof Error &&
            o.message
                .split(
                    `
`
                )
                .some((f) => f.startsWith("https://svelte.dev/e/"))
        )
            throw o;
        return o !== p && console.warn("Failed to hydrate: ", o), e.recover === !1 && Y(), m(), P(t), h(!1), G(a, e);
    } finally {
        h(u), O(c), B();
    }
}
const d = new Map();
function A(a, { target: e, anchor: t, props: u = {}, events: c, context: r, intro: o = !0 }) {
    m();
    var f = new Set(),
        y = (i) => {
            for (var s = 0; s < i.length; s++) {
                var n = i[s];
                if (!f.has(n)) {
                    f.add(n);
                    var _ = $(n);
                    e.addEventListener(n, v, { passive: _ });
                    var T = d.get(n);
                    T === void 0 ? (document.addEventListener(n, v, { passive: _ }), d.set(n, 1)) : d.set(n, T + 1);
                }
            }
        };
    y(S(V)), R.add(y);
    var g = void 0,
        I = W(() => {
            var i = t ?? e.appendChild(k());
            return (
                F(() => {
                    if (r) {
                        J({});
                        var s = Q;
                        s.c = r;
                    }
                    c && (u.$$events = c), w && X(i, null), (D = o), (g = a(i, u) || {}), (D = !0), w && (q.nodes_end = l), r && z();
                }),
                () => {
                    var _;
                    for (var s of f) {
                        e.removeEventListener(s, v);
                        var n = d.get(s);
                        --n === 0 ? (document.removeEventListener(s, v), d.delete(s)) : d.set(s, n);
                    }
                    R.delete(y), i !== t && ((_ = i.parentNode) == null || _.removeChild(i));
                }
            );
        });
    return E.set(g, I), g;
}
let E = new WeakMap();
function ee(a, e) {
    const t = E.get(a);
    return t ? (E.delete(a), t(e)) : Promise.resolve();
}
export { D as a, x as h, G as m, Z as s, ee as u };

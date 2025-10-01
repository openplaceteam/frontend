import {
    g as y,
    h as m,
    e as h,
    ab as b,
    aa as x,
    ao as C,
    E as w,
    j as A,
    ap as E,
    a0 as S,
    m as d,
    J as k,
    aq as c,
    w as T,
    ar as p,
    as as j,
    u as s,
    Y as P,
    at as v,
    au as R,
    x as f,
    av as z,
    aw as D,
    ax as F,
    ay as M,
    az as N,
    aA as O,
    aB as U,
} from "./DUoKDNpf.js";
import { h as $, m as q, u as B } from "./g8c1BvYP.js";
function W(e, t, ...r) {
    var n = e,
        a = E,
        o;
    y(() => {
        a !== (a = t()) && (o && (S(o), (o = null)), (o = A(() => a(n, ...r))));
    }, w),
        m && (n = d);
}
function J(e) {
    return (t, ...r) => {
        var u;
        var n = e(...r),
            a;
        if (m) (a = d), h();
        else {
            var o = n.render().trim(),
                i = b(o);
            (a = k(i)), t.before(a);
        }
        const l = (u = n.setup) == null ? void 0 : u.call(n, a);
        x(a, a), typeof l == "function" && C(l);
    };
}
function Y() {
    var e;
    return p === null && j(), ((e = p).ac ?? (e.ac = new AbortController())).signal;
}
function g(e) {
    s === null && c(),
        R && s.l !== null
            ? _(s).m.push(e)
            : T(() => {
                  const t = f(e);
                  if (typeof t == "function") return t;
              });
}
function G(e) {
    s === null && c(), g(() => () => f(e));
}
function H(e, t, { bubbles: r = !1, cancelable: n = !1 } = {}) {
    return new CustomEvent(e, { detail: t, bubbles: r, cancelable: n });
}
function I() {
    const e = s;
    return (
        e === null && c(),
        (t, r, n) => {
            var o;
            const a = (o = e.s.$$events) == null ? void 0 : o[t];
            if (a) {
                const i = P(a) ? a.slice() : [a],
                    l = H(t, r, n);
                for (const u of i) u.call(e.x, l);
                return !l.defaultPrevented;
            }
            return !0;
        }
    );
}
function K(e) {
    s === null && c(), s.l === null && v(), _(s).b.push(e);
}
function L(e) {
    s === null && c(), s.l === null && v(), _(s).a.push(e);
}
function _(e) {
    var t = e.l;
    return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const X = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            afterUpdate: L,
            beforeUpdate: K,
            createEventDispatcher: I,
            createRawSnippet: J,
            flushSync: z,
            getAbortSignal: Y,
            getAllContexts: D,
            getContext: F,
            hasContext: M,
            hydrate: $,
            mount: q,
            onDestroy: G,
            onMount: g,
            setContext: N,
            settled: O,
            tick: U,
            unmount: B,
            untrack: f,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);
export { X as a, g as o, W as s };

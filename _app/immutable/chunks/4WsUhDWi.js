import {
    i as h,
    h as p,
    e as v,
    ai as m,
    ah as w,
    K as E,
    E as x,
    k as T,
    az as C,
    a7 as S,
    o as y,
    P as k,
    aA as i,
    y as A,
    aB as _,
    aC as D,
    w as o,
    a3 as I,
    aD as b,
    aE as R,
    z as u,
    aF as P,
    aG as z,
    aH as F,
    aI as N,
    aJ as j,
    aK as K,
    aL as L,
} from "./BDALf20I.js";
import { h as M, m as O, u as U } from "./4k6DpCgf.js";
(function () {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        e.SENTRY_RELEASE = { id: "35111e7039e8c68cc677344b7f7c6971567f6820" };
    } catch {}
})();
try {
    (function () {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && ((e._sentryDebugIds = e._sentryDebugIds || {}), (e._sentryDebugIds[t] = "108534dc-c984-4e89-a0c7-0245224c9d9d"), (e._sentryDebugIdIdentifier = "sentry-dbid-108534dc-c984-4e89-a0c7-0245224c9d9d"));
    })();
} catch {}
function W(e, t, ...r) {
    var a = e,
        n = C,
        s;
    h(() => {
        n !== (n = t()) && (s && (S(s), (s = null)), (s = T(() => n(a, ...r))));
    }, x),
        p && (a = y);
}
function $(e) {
    return (t, ...r) => {
        var c;
        var a = e(...r),
            n;
        if (p) (n = y), v();
        else {
            var s = a.render().trim(),
                f = m(s);
            (n = k(f)), t.before(n);
        }
        const l = (c = a.setup) == null ? void 0 : c.call(a, n);
        w(n, n), typeof l == "function" && E(l);
    };
}
function B() {
    var e;
    return _ === null && D(), ((e = _).ac ?? (e.ac = new AbortController())).signal;
}
function g(e) {
    o === null && i(),
        R && o.l !== null
            ? d(o).m.push(e)
            : A(() => {
                  const t = u(e);
                  if (typeof t == "function") return t;
              });
}
function G(e) {
    o === null && i(), g(() => () => u(e));
}
function H(e, t, { bubbles: r = !1, cancelable: a = !1 } = {}) {
    return new CustomEvent(e, { detail: t, bubbles: r, cancelable: a });
}
function J() {
    const e = o;
    return (
        e === null && i(),
        (t, r, a) => {
            var s;
            const n = (s = e.s.$$events) == null ? void 0 : s[t];
            if (n) {
                const f = I(n) ? n.slice() : [n],
                    l = H(t, r, a);
                for (const c of f) c.call(e.x, l);
                return !l.defaultPrevented;
            }
            return !0;
        }
    );
}
function Y(e) {
    o === null && i(), o.l === null && b(), d(o).b.push(e);
}
function q(e) {
    o === null && i(), o.l === null && b(), d(o).a.push(e);
}
function d(e) {
    var t = e.l;
    return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const X = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                afterUpdate: q,
                beforeUpdate: Y,
                createEventDispatcher: J,
                createRawSnippet: $,
                flushSync: P,
                getAbortSignal: B,
                getAllContexts: z,
                getContext: F,
                hasContext: N,
                hydrate: M,
                mount: O,
                onDestroy: G,
                onMount: g,
                setContext: j,
                settled: K,
                tick: L,
                unmount: U,
                untrack: u,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    Z = "1759175263375";
export { X as a, g as o, W as s, Z as v };

import { g as z } from "./DklPLC_x.js";
(function () {
    try {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        t.SENTRY_RELEASE = { id: "35111e7039e8c68cc677344b7f7c6971567f6820" };
    } catch {}
})();
try {
    (function () {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new t.Error().stack;
        e && ((t._sentryDebugIds = t._sentryDebugIds || {}), (t._sentryDebugIds[e] = "dcdc3bc1-2905-4a7a-b382-b2ec639c05ea"), (t._sentryDebugIdIdentifier = "sentry-dbid-dcdc3bc1-2905-4a7a-b382-b2ec639c05ea"));
    })();
} catch {}
const C = () => "Timeout",
    D = () => "Timeout",
    M = (t = {}, e = {}) => ((e.locale ?? z()) === "en" ? C() : D());
function q(t) {
    const e = t - 1;
    return e * e * e + 1;
}
function O(t, { from: e, to: r }, u = {}) {
    var { delay: h = 0, duration: i = (n) => Math.sqrt(n) * 120, easing: y = q } = u,
        o = getComputedStyle(t),
        g = o.transform === "none" ? "" : o.transform,
        [s, c] = o.transformOrigin.split(" ").map(parseFloat);
    (s /= t.clientWidth), (c /= t.clientHeight);
    var f = H(t),
        p = t.clientWidth / r.width / f,
        v = t.clientHeight / r.height / f,
        b = e.left + e.width * s,
        m = e.top + e.height * c,
        w = r.left + r.width * s,
        x = r.top + r.height * c,
        l = (b - w) * p,
        d = (m - x) * v,
        S = e.width / r.width,
        _ = e.height / r.height;
    return {
        delay: h,
        duration: typeof i == "function" ? i(Math.sqrt(l * l + d * d)) : i,
        easing: y,
        css: (n, a) => {
            var T = a * l,
                E = a * d,
                I = n + a * S,
                $ = n + a * _;
            return `transform: ${g} translate(${T}px, ${E}px) scale(${I}, ${$});`;
        },
    };
}
function H(t) {
    if ("currentCSSZoom" in t) return t.currentCSSZoom;
    for (var e = t, r = 1; e !== null; ) (r *= +getComputedStyle(e).zoom), (e = e.parentElement);
    return r;
}
export { O as f, M as t };

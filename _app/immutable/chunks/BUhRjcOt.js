import { j as r, i as h, as as u, h as d, W as y, ak as c, a9 as i, V as o, O as s, o as f, P as _ } from "./BDALf20I.js";
(function () {
    try {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        a.SENTRY_RELEASE = { id: "35111e7039e8c68cc677344b7f7c6971567f6820" };
    } catch {}
})();
try {
    (function () {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new a.Error().stack;
        n && ((a._sentryDebugIds = a._sentryDebugIds || {}), (a._sentryDebugIds[n] = "48e8c989-b08a-439a-98b9-6d268a42a85e"), (a._sentryDebugIdIdentifier = "sentry-dbid-48e8c989-b08a-439a-98b9-6d268a42a85e"));
    })();
} catch {}
let e;
function g() {
    e = void 0;
}
function p(a) {
    let n = null,
        l = d;
    var t;
    if (d) {
        for (n = f, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== y || e.data !== c); ) e = i(e);
        e === null ? o(!1) : (e = s(i(e)));
    }
    d || (t = document.head.appendChild(r()));
    try {
        h(() => a(t), u);
    } finally {
        l && (o(!0), (e = f), s(n));
    }
}
export { p as h, g as r };

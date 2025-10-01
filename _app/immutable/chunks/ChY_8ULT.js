import { h as l, e as u, i as p, E as y, j as _, k as g, l as s, m as h, o as m, q as v } from "./BDALf20I.js";
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
        a && ((e._sentryDebugIds = e._sentryDebugIds || {}), (e._sentryDebugIds[a] = "9dc3bcaa-438f-488e-b391-6b55ffb9a6c0"), (e._sentryDebugIdIdentifier = "sentry-dbid-9dc3bcaa-438f-488e-b391-6b55ffb9a6c0"));
    })();
} catch {}
function E(e, a, b) {
    l && u();
    var t = e,
        d,
        n,
        f = null,
        o = null;
    function i() {
        n && (v(n), (n = null)), f && (f.lastChild.remove(), t.before(f), (f = null)), (n = o), (o = null);
    }
    p(() => {
        if (d !== (d = a())) {
            var r = h();
            if (d) {
                var c = t;
                r && ((f = document.createDocumentFragment()), f.append((c = _())), n && s.skipped_effects.add(n)), (o = g(() => b(c, d)));
            }
            r ? s.add_callback(i) : i();
        }
    }, y),
        l && (t = m);
}
export { E as c };

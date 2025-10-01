import { t as g, h, e as c, ad as b, ae as p, o as u, W as w, a9 as v, af as m, ag as E, ah as y, O as T, ai as D, P as i } from "./BDALf20I.js";
(function () {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        e.SENTRY_RELEASE = { id: "35111e7039e8c68cc677344b7f7c6971567f6820" };
    } catch {}
})();
try {
    (function () {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            d = new e.Error().stack;
        d && ((e._sentryDebugIds = e._sentryDebugIds || {}), (e._sentryDebugIds[d] = "c5676a6a-afed-4227-8555-1ad1a2540ba4"), (e._sentryDebugIdIdentifier = "sentry-dbid-c5676a6a-afed-4227-8555-1ad1a2540ba4"));
    })();
} catch {}
function O(e, d, r = !1, o = !1, I = !1) {
    var l = e,
        t = "";
    g(() => {
        var n = b;
        if (t === (t = d() ?? "")) {
            h && c();
            return;
        }
        if ((n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), (n.nodes_start = n.nodes_end = null)), t !== "")) {
            if (h) {
                u.data;
                for (var a = c(), _ = a; a !== null && (a.nodeType !== w || a.data !== ""); ) (_ = a), (a = v(a));
                if (a === null) throw (m(), E);
                y(u, _), (l = T(a));
                return;
            }
            var s = t + "";
            r ? (s = `<svg>${s}</svg>`) : o && (s = `<math>${s}</math>`);
            var f = D(s);
            if (((r || o) && (f = i(f)), y(i(f), f.lastChild), r || o)) for (; i(f); ) l.before(i(f));
            else l.before(f);
        }
    });
}
export { O as h };

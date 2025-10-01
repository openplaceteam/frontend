import { t as u, h as o, e as l, a6 as g, a7 as y, m as h, P as p, a2 as b, a8 as w, a9 as O, aa as m, I as R, ab as E, J as f } from "./DUoKDNpf.js";
function C(c, v, i = !1, _ = !1, N = !1) {
    var n = c,
        t = "";
    u(() => {
        var s = g;
        if (t === (t = v() ?? "")) {
            o && l();
            return;
        }
        if ((s.nodes_start !== null && (y(s.nodes_start, s.nodes_end), (s.nodes_start = s.nodes_end = null)), t !== "")) {
            if (o) {
                h.data;
                for (var a = l(), d = a; a !== null && (a.nodeType !== p || a.data !== ""); ) (d = a), (a = b(a));
                if (a === null) throw (w(), O);
                m(h, d), (n = R(a));
                return;
            }
            var r = t + "";
            i ? (r = `<svg>${r}</svg>`) : _ && (r = `<math>${r}</math>`);
            var e = E(r);
            if (((i || _) && (e = f(e)), m(f(e), e.lastChild), i || _)) for (; f(e); ) n.before(f(e));
            else n.before(e);
        }
    });
}
export { C as h };

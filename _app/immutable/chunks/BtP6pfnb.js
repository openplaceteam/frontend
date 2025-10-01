import { h as i, e as m, g as p, E as _, i as h, j as v, k as l, l as b, m as g, n as k } from "./DUoKDNpf.js";
function x(s, d, u) {
    i && m();
    var r = s,
        n,
        e,
        a = null,
        f = null;
    function t() {
        e && (k(e), (e = null)), a && (a.lastChild.remove(), r.before(a), (a = null)), (e = f), (f = null);
    }
    p(() => {
        if (n !== (n = d())) {
            var c = b();
            if (n) {
                var o = r;
                c && ((a = document.createDocumentFragment()), a.append((o = h())), e && l.skipped_effects.add(e)), (f = v(() => u(o, n)));
            }
            c ? l.add_callback(t) : t();
        }
    }, _),
        i && (r = g);
}
export { x as c };

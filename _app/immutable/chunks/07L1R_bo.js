import "./Bzak7iHL.js";
import { p as u, f as p, t as r, b as c, c as x, s as B, d as b, r as L } from "./DUoKDNpf.js";
import { p as Q, i as S, r as _ } from "./5NasrULQ.js";
import { a as R, s as m, b as h } from "./B1GmkH4o.js";
const E =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var T = p("<span>wplace</span>"),
    U = p('<div><img alt="Wplace logo"/> <!></div>');
function Y(n, e) {
    u(e, !0);
    let a = Q(e, "size", 3, "default"),
        f = _(e, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
    var t = U();
    R(t, () => ({ ...f, class: `flex items-center gap-1.5 ${e.class ?? ""}` }));
    var A = b(t);
    let l;
    var d = B(A, 2);
    {
        var g = (s) => {
            var i = T();
            let o;
            r((v) => (o = m(i, 1, "text-base-content font-pixel", null, o, v)), [() => ({ "text-4xl": a() === "default", "text-5xl": a() === "lg" || a() === "medium" })]), c(s, i);
        };
        S(d, (s) => {
            e.hasText && s(g);
        });
    }
    L(t),
        r(
            (s) => {
                (l = m(A, 1, "pixelated", null, l, s)), h(A, "src", E);
            },
            [() => ({ "size-10": a() === "default", "size-16": a() === "medium", "size-20": a() === "lg" })]
        ),
        c(n, t),
        x();
}
export { Y as L };

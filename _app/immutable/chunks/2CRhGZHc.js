import { i as _, g as o, am as f, h as a, P as u, ad as c, a2 as d, O as i, I as s, m as r, J as y } from "./DUoKDNpf.js";
let e;
function m() {
    e = void 0;
}
function p(h) {
    let t = null,
        l = a;
    var n;
    if (a) {
        for (t = r, e === void 0 && (e = y(document.head)); e !== null && (e.nodeType !== u || e.data !== c); ) e = d(e);
        e === null ? i(!1) : (e = s(d(e)));
    }
    a || (n = document.head.appendChild(_()));
    try {
        o(() => h(n), f);
    } finally {
        l && (i(!0), (e = r), s(t));
    }
}
export { p as h, m as r };

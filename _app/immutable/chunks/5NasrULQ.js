import {
    g as L,
    h as y,
    e as N,
    E as C,
    L as K,
    M,
    N as Y,
    I as j,
    O as T,
    i as B,
    j as w,
    k as F,
    aC as U,
    l as Z,
    Z as q,
    n as G,
    m as H,
    aD as A,
    aE as $,
    aF as z,
    A as O,
    C as J,
    K as Q,
    aG as V,
    aH as W,
    aI as X,
    a6 as k,
    aJ as ee,
    aK as re,
    x as ne,
    au as te,
    aL as ae,
    aM as se,
    aN as ie,
    S as x,
    aO as D,
    aP as P,
} from "./DUoKDNpf.js";
function ce(e, r, t = !1) {
    y && N();
    var n = e,
        a = null,
        f = null,
        l = U,
        d = t ? C : 0,
        p = !1;
    const S = (o, i = !0) => {
        (p = !0), _(i, o);
    };
    var u = null;
    function m() {
        u !== null && (u.lastChild.remove(), n.before(u), (u = null));
        var o = l ? a : f,
            i = l ? f : a;
        o && q(o),
            i &&
                G(i, () => {
                    l ? (f = null) : (a = null);
                });
    }
    const _ = (o, i) => {
        if (l === (l = o)) return;
        let I = !1;
        if (y) {
            const h = K(n) === M;
            !!l === h && ((n = Y()), j(n), T(!1), (I = !0));
        }
        var v = Z(),
            c = n;
        if ((v && ((u = document.createDocumentFragment()), u.append((c = B()))), l ? a ?? (a = i && w(() => i(c))) : f ?? (f = i && w(() => i(c))), v)) {
            var g = F,
                b = l ? a : f,
                s = l ? f : a;
            b && g.skipped_effects.delete(b), s && g.skipped_effects.add(s), g.add_callback(m);
        } else m();
        I && T(!0);
    };
    L(() => {
        (p = !1), r(S), p || _(null, null);
    }, d),
        y && (n = H);
}
let E = !1;
function fe(e) {
    var r = E;
    try {
        return (E = !1), [e(), E];
    } finally {
        E = r;
    }
}
function de(e, r = 1) {
    const t = e();
    return e(t + r), t;
}
const ue = {
    get(e, r) {
        if (!e.exclude.includes(r)) return e.props[r];
    },
    set(e, r) {
        return !1;
    },
    getOwnPropertyDescriptor(e, r) {
        if (!e.exclude.includes(r) && r in e.props) return { enumerable: !0, configurable: !0, value: e.props[r] };
    },
    has(e, r) {
        return e.exclude.includes(r) ? !1 : r in e.props;
    },
    ownKeys(e) {
        return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
    },
};
function _e(e, r, t) {
    return new Proxy({ props: e, exclude: r }, ue);
}
const le = {
    get(e, r) {
        let t = e.props.length;
        for (; t--; ) {
            let n = e.props[t];
            if ((P(n) && (n = n()), typeof n == "object" && n !== null && r in n)) return n[r];
        }
    },
    set(e, r, t) {
        let n = e.props.length;
        for (; n--; ) {
            let a = e.props[n];
            P(a) && (a = a());
            const f = A(a, r);
            if (f && f.set) return f.set(t), !0;
        }
        return !1;
    },
    getOwnPropertyDescriptor(e, r) {
        let t = e.props.length;
        for (; t--; ) {
            let n = e.props[t];
            if ((P(n) && (n = n()), typeof n == "object" && n !== null && r in n)) {
                const a = A(n, r);
                return a && !a.configurable && (a.configurable = !0), a;
            }
        }
    },
    has(e, r) {
        if (r === x || r === D) return !1;
        for (let t of e.props) if ((P(t) && (t = t()), t != null && r in t)) return !0;
        return !1;
    },
    ownKeys(e) {
        const r = [];
        for (let t of e.props)
            if ((P(t) && (t = t()), !!t)) {
                for (const n in t) r.includes(n) || r.push(n);
                for (const n of Object.getOwnPropertySymbols(t)) r.includes(n) || r.push(n);
            }
        return r;
    },
};
function pe(...e) {
    return new Proxy({ props: e }, le);
}
function ve(e, r, t, n) {
    var b;
    var a = !te || (t & ae) !== 0,
        f = (t & re) !== 0,
        l = (t & ie) !== 0,
        d = n,
        p = !0,
        S = () => (p && ((p = !1), (d = l ? ne(n) : n)), d),
        u;
    if (f) {
        var m = x in e || D in e;
        u = ((b = A(e, r)) == null ? void 0 : b.set) ?? (m && r in e ? (s) => (e[r] = s) : void 0);
    }
    var _,
        o = !1;
    f ? ([_, o] = fe(() => e[r])) : (_ = e[r]), _ === void 0 && n !== void 0 && ((_ = S()), u && (a && $(), u(_)));
    var i;
    if (
        (a
            ? (i = () => {
                  var s = e[r];
                  return s === void 0 ? S() : ((p = !0), s);
              })
            : (i = () => {
                  var s = e[r];
                  return s !== void 0 && (d = void 0), s === void 0 ? d : s;
              }),
        a && (t & z) === 0)
    )
        return i;
    if (u) {
        var I = e.$$legacy;
        return function (s, h) {
            return arguments.length > 0 ? ((!a || !h || I || o) && u(h ? i() : s), s) : i();
        };
    }
    var v = !1,
        c = ((t & se) !== 0 ? J : Q)(() => ((v = !1), i()));
    f && O(c);
    var g = k;
    return function (s, h) {
        if (arguments.length > 0) {
            const R = h ? O(c) : a && f ? V(s) : s;
            return W(c, R), (v = !0), d !== void 0 && (d = R), s;
        }
        return (X && v) || (g.f & ee) !== 0 ? c.v : O(c);
    };
}
export { ce as i, ve as p, _e as r, pe as s, de as u };

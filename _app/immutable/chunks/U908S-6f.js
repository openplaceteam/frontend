import {
    i as ee,
    g as ue,
    H as ae,
    I as X,
    h as D,
    J as te,
    e as ve,
    A as z,
    K as de,
    L as _e,
    M as oe,
    N as k,
    O as g,
    m as O,
    P as ce,
    Q as he,
    j as J,
    l as me,
    R as V,
    T as Y,
    k as pe,
    U as y,
    V as Ee,
    W as j,
    X as re,
    Y as Te,
    Z as ne,
    n as Ae,
    _ as Ie,
    $ as B,
    G as Ne,
    a0 as fe,
    a1 as we,
    a2 as xe,
    a3 as Ce,
    a4 as Me,
    a5 as De,
    a6 as He,
} from "./DUoKDNpf.js";
let F = null;
function Le(i, n) {
    return n;
}
function Re(i, n, e) {
    for (var u = i.items, t = [], v = n.length, s = 0; s < v; s++) Ce(n[s].e, t, !0);
    var c = v > 0 && t.length === 0 && e !== null;
    if (c) {
        var T = e.parentNode;
        Me(T), T.append(e), u.clear(), w(i, n[0].prev, n[v - 1].next);
    }
    De(t, () => {
        for (var E = 0; E < v; E++) {
            var _ = n[E];
            c || (u.delete(_.k), w(i, _.prev, _.next)), fe(_.e, !c);
        }
    });
}
function be(i, n, e, u, t, v = null) {
    var s = i,
        c = { flags: n, items: new Map(), first: null },
        T = (n & ae) !== 0;
    if (T) {
        var E = i;
        s = D ? X(te(E)) : E.appendChild(ee());
    }
    D && ve();
    var _ = null,
        C = !1,
        A = new Map(),
        H = de(() => {
            var d = e();
            return Te(d) ? d : d == null ? [] : re(d);
        }),
        f,
        m;
    function r() {
        Se(m, f, c, A, s, t, n, u, e),
            v !== null &&
                (f.length === 0
                    ? _
                        ? ne(_)
                        : (_ = J(() => v(s)))
                    : _ !== null &&
                      Ae(_, () => {
                          _ = null;
                      }));
    }
    ue(() => {
        m ?? (m = He), (f = z(H));
        var d = f.length;
        if (C && d === 0) return;
        C = d === 0;
        let p = !1;
        if (D) {
            var I = _e(s) === oe;
            I !== (d === 0) && ((s = k()), X(s), g(!1), (p = !0));
        }
        if (D) {
            for (var x = null, o, a = 0; a < d; a++) {
                if (O.nodeType === ce && O.data === he) {
                    (s = O), (p = !0), g(!1);
                    break;
                }
                var l = f[a],
                    h = u(l, a);
                (o = K(O, c, x, null, l, h, a, t, n, e)), c.items.set(h, o), (x = o);
            }
            d > 0 && X(k());
        }
        if (D) d === 0 && v && (_ = J(() => v(s)));
        else if (me()) {
            var R = new Set(),
                L = pe;
            for (a = 0; a < d; a += 1) {
                (l = f[a]), (h = u(l, a));
                var M = c.items.get(h) ?? A.get(h);
                M ? (n & (V | Y)) !== 0 && le(M, l, a, n) : ((o = K(null, c, null, null, l, h, a, t, n, e, !0)), A.set(h, o)), R.add(h);
            }
            for (const [N, b] of c.items) R.has(N) || L.skipped_effects.add(b.e);
            L.add_callback(r);
        } else r();
        p && g(!0), z(H);
    }),
        D && (s = O);
}
function Se(i, n, e, u, t, v, s, c, T) {
    var P, Q, W, Z;
    var E = (s & we) !== 0,
        _ = (s & (V | Y)) !== 0,
        C = n.length,
        A = e.items,
        H = e.first,
        f = H,
        m,
        r = null,
        d,
        p = [],
        I = [],
        x,
        o,
        a,
        l;
    if (E) for (l = 0; l < C; l += 1) (x = n[l]), (o = c(x, l)), (a = A.get(o)), a !== void 0 && ((P = a.a) == null || P.measure(), (d ?? (d = new Set())).add(a));
    for (l = 0; l < C; l += 1) {
        if (((x = n[l]), (o = c(x, l)), (a = A.get(o)), a === void 0)) {
            var h = u.get(o);
            if (h !== void 0) {
                u.delete(o), A.set(o, h);
                var R = r ? r.next : f;
                w(e, r, h), w(e, h, R), G(h, R, t), (r = h);
            } else {
                var L = f ? f.e.nodes_start : t;
                r = K(L, e, r, r === null ? e.first : r.next, x, o, l, v, s, T);
            }
            A.set(o, r), (p = []), (I = []), (f = r.next);
            continue;
        }
        if ((_ && le(a, x, l, s), (a.e.f & B) !== 0 && (ne(a.e), E && ((Q = a.a) == null || Q.unfix(), (d ?? (d = new Set())).delete(a))), a !== f)) {
            if (m !== void 0 && m.has(a)) {
                if (p.length < I.length) {
                    var M = I[0],
                        N;
                    r = M.prev;
                    var b = p[0],
                        q = p[p.length - 1];
                    for (N = 0; N < p.length; N += 1) G(p[N], M, t);
                    for (N = 0; N < I.length; N += 1) m.delete(I[N]);
                    w(e, b.prev, q.next), w(e, r, b), w(e, q, M), (f = M), (r = q), (l -= 1), (p = []), (I = []);
                } else m.delete(a), G(a, f, t), w(e, a.prev, a.next), w(e, a, r === null ? e.first : r.next), w(e, r, a), (r = a);
                continue;
            }
            for (p = [], I = []; f !== null && f.k !== o; ) (f.e.f & B) === 0 && (m ?? (m = new Set())).add(f), I.push(f), (f = f.next);
            if (f === null) continue;
            a = f;
        }
        p.push(a), (r = a), (f = a.next);
    }
    if (f !== null || m !== void 0) {
        for (var S = m === void 0 ? [] : re(m); f !== null; ) (f.e.f & B) === 0 && S.push(f), (f = f.next);
        var U = S.length;
        if (U > 0) {
            var ie = (s & ae) !== 0 && C === 0 ? t : null;
            if (E) {
                for (l = 0; l < U; l += 1) (W = S[l].a) == null || W.measure();
                for (l = 0; l < U; l += 1) (Z = S[l].a) == null || Z.fix();
            }
            Re(e, S, ie);
        }
    }
    E &&
        Ne(() => {
            var $;
            if (d !== void 0) for (a of d) ($ = a.a) == null || $.apply();
        }),
        (i.first = e.first && e.first.e),
        (i.last = r && r.e);
    for (var se of u.values()) fe(se.e);
    u.clear();
}
function le(i, n, e, u) {
    (u & V) !== 0 && y(i.v, n), (u & Y) !== 0 ? y(i.i, e) : (i.i = e);
}
function K(i, n, e, u, t, v, s, c, T, E, _) {
    var C = F,
        A = (T & V) !== 0,
        H = (T & Ie) === 0,
        f = A ? (H ? Ee(t, !1, !1) : j(t)) : t,
        m = (T & Y) === 0 ? s : j(s),
        r = { i: m, v: f, k: v, a: null, e: null, prev: e, next: u };
    F = r;
    try {
        if (i === null) {
            var d = document.createDocumentFragment();
            d.append((i = ee()));
        }
        return (r.e = J(() => c(i, f, m, E), D)), (r.e.prev = e && e.e), (r.e.next = u && u.e), e === null ? _ || (n.first = r) : ((e.next = r), (e.e.next = r.e)), u !== null && ((u.prev = r), (u.e.prev = r.e)), r;
    } finally {
        F = C;
    }
}
function G(i, n, e) {
    for (var u = i.next ? i.next.e.nodes_start : e, t = n ? n.e.nodes_start : e, v = i.e.nodes_start; v !== null && v !== u; ) {
        var s = xe(v);
        t.before(v), (v = s);
    }
}
function w(i, n, e) {
    n === null ? (i.first = e) : ((n.next = e), (n.e.next = e && e.e)), e !== null && ((e.prev = n), (e.e.prev = n && n.e));
}
export { F as c, be as e, Le as i };

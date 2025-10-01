var yn = Object.defineProperty;
var me = t => {
    throw TypeError(t)
};
var gn = (t, e, n) => e in t ? yn(t, e, {enumerable: !0, configurable: !0, writable: !0, value: n}) : t[e] = n;
var xt = (t, e, n) => gn(t, typeof e != "symbol" ? e + "" : e, n), Jt = (t, e, n) => e.has(t) || me("Cannot " + n);
var d = (t, e, n) => (Jt(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
    x = (t, e, n) => e.has(t) ? me("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n),
    R = (t, e, n, r) => (Jt(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n),
    Q = (t, e, n) => (Jt(t, e, "access private method"), n);
const mr = !1;
var Pe = Array.isArray, En = Array.prototype.indexOf, br = Array.from, ee = Object.defineProperty,
    Ot = Object.getOwnPropertyDescriptor, mn = Object.getOwnPropertyDescriptors, bn = Object.prototype,
    Tn = Array.prototype, De = Object.getPrototypeOf, be = Object.isExtensible;

function Tr(t) {
    return typeof t == "function"
}

const Ar = () => {
};

function xr(t) {
    return t()
}

function Me(t) {
    for (var e = 0; e < t.length; e++) t[e]()
}

function An() {
    var t, e, n = new Promise((r, a) => {
        t = r, e = a
    });
    return {promise: n, resolve: t, reject: e}
}

function kr(t, e) {
    if (Array.isArray(t)) return t;
    if (!(Symbol.iterator in t)) return Array.from(t);
    const n = [];
    for (const r of t) if (n.push(r), n.length === e) break;
    return n
}

const O = 2, le = 4, $t = 8, bt = 16, Y = 32, ft = 64, Le = 128, C = 256, Ht = 512, b = 1024, L = 2048, Z = 4096,
    K = 8192, Tt = 16384, fe = 32768, Fe = 65536, Te = 1 << 17, xn = 1 << 18, oe = 1 << 19, qe = 1 << 20, ne = 1 << 21,
    ce = 1 << 22, at = 1 << 23, st = Symbol("$state"), Sr = Symbol("legacy props"), Nr = Symbol(""),
    _e = new class extends Error {
        constructor() {
            super(...arguments);
            xt(this, "name", "StaleReactionError");
            xt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed")
        }
    }, ve = 3, de = 8;

function kn() {
    throw new Error("https://svelte.dev/e/await_outside_boundary")
}

function Sn(t) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function Nn() {
    throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function On(t) {
    throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function Rn() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function In(t) {
    throw new Error("https://svelte.dev/e/effect_orphan")
}

function Cn() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function Rr() {
    throw new Error("https://svelte.dev/e/get_abort_signal_outside_reaction")
}

function Ir() {
    throw new Error("https://svelte.dev/e/hydration_failed")
}

function Cr(t) {
    throw new Error("https://svelte.dev/e/lifecycle_legacy_only")
}

function Pr(t) {
    throw new Error("https://svelte.dev/e/props_invalid_value")
}

function Pn() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function Dn() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function Mn() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}

const Dr = 1, Mr = 2, Lr = 4, Fr = 8, qr = 16, jr = 1, Yr = 2, Hr = 4, Ur = 8, Vr = 16, Br = 1, Wr = 2, $r = 4, Ln = 1,
    Fn = 2, qn = "[", jn = "[!", Yn = "]", he = {}, m = Symbol(), Gr = "http://www.w3.org/1999/xhtml", Kr = "@attach";

function pe(t) {
    console.warn("https://svelte.dev/e/hydration_mismatch")
}

function zr() {
    console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}

let S = !1;

function Xr(t) {
    S = t
}

let y;

function yt(t) {
    if (t === null) throw pe(), he;
    return y = t
}

function je() {
    return yt(ot(y))
}

function Zr(t) {
    if (S) {
        if (ot(y) !== null) throw pe(), he;
        y = t
    }
}

function Jr(t = 1) {
    if (S) {
        for (var e = t, n = y; e--;) n = ot(n);
        y = n
    }
}

function Qr() {
    for (var t = 0, e = y; ;) {
        if (e.nodeType === de) {
            var n = e.data;
            if (n === Yn) {
                if (t === 0) return e;
                t -= 1
            } else (n === qn || n === jn) && (t += 1)
        }
        var r = ot(e);
        e.remove(), e = r
    }
}

function ta(t) {
    if (!t || t.nodeType !== de) throw pe(), he;
    return t.data
}

function Ye(t) {
    return t === this.v
}

function Hn(t, e) {
    return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function"
}

function ea(t, e) {
    return t !== e
}

function He(t) {
    return !Hn(t, this.v)
}

let Gt = !1;

function na() {
    Gt = !0
}

let g = null;

function Ut(t) {
    g = t
}

function ra(t) {
    return Kt().get(t)
}

function aa(t, e) {
    return Kt().set(t, e), e
}

function sa(t) {
    return Kt().has(t)
}

function ia() {
    return Kt()
}

function ua(t, e = !1, n) {
    g = {p: g, c: null, e: null, s: t, x: null, l: Gt && !e ? {s: null, u: null, $: []} : null}
}

function la(t) {
    var e = g, n = e.e;
    if (n !== null) {
        e.e = null;
        for (var r of n) rn(r)
    }
    return t !== void 0 && (e.x = t), g = e.p, t ?? {}
}

function Ft() {
    return !Gt || g !== null && g.l === null
}

function Kt(t) {
    return g === null && Sn(), g.c ?? (g.c = new Map(Un(g) || void 0))
}

function Un(t) {
    let e = t.p;
    for (; e !== null;) {
        const n = e.c;
        if (n !== null) return n;
        e = e.p
    }
    return null
}

const Vn = new WeakMap;

function Bn(t) {
    var e = v;
    if (e === null) return _.f |= at, t;
    if ((e.f & fe) === 0) {
        if ((e.f & Le) === 0) throw !e.parent && t instanceof Error && Ue(t), t;
        e.b.error(t)
    } else we(t, e)
}

function we(t, e) {
    for (; e !== null;) {
        if ((e.f & Le) !== 0) try {
            e.b.error(t);
            return
        } catch (n) {
            t = n
        }
        e = e.parent
    }
    throw t instanceof Error && Ue(t), t
}

function Ue(t) {
    const e = Vn.get(t);
    e && (ee(t, "message", {value: e.message}), ee(t, "stack", {value: e.stack}))
}

const Wn = typeof requestIdleCallback > "u" ? t => setTimeout(t, 1) : requestIdleCallback;
let Rt = [], It = [];

function Ve() {
    var t = Rt;
    Rt = [], Me(t)
}

function Be() {
    var t = It;
    It = [], Me(t)
}

function We(t) {
    Rt.length === 0 && queueMicrotask(Ve), Rt.push(t)
}

function fa(t) {
    It.length === 0 && Wn(Be), It.push(t)
}

function $n() {
    Rt.length > 0 && Ve(), It.length > 0 && Be()
}

function Gn() {
    for (var t = v.b; t !== null && !t.has_pending_snippet();) t = t.parent;
    return t === null && kn(), t
}

function ye(t) {
    var e = O | L, n = _ !== null && (_.f & O) !== 0 ? _ : null;
    return v === null || n !== null && (n.f & C) !== 0 ? e |= C : v.f |= oe, {
        ctx: g,
        deps: null,
        effects: null,
        equals: Ye,
        f: e,
        fn: t,
        reactions: null,
        rv: 0,
        v: m,
        wv: 0,
        parent: n ?? v,
        ac: null
    }
}

function Kn(t, e) {
    let n = v;
    n === null && Nn();
    var r = n.b, a = void 0, s = Ee(m), u = null, l = !_;
    return sr(() => {
        try {
            var i = t()
        } catch (h) {
            i = Promise.reject(h)
        }
        var f = () => i;
        a = (u == null ? void 0 : u.then(f, f)) ?? Promise.resolve(i), u = a;
        var o = E, c = r.pending;
        l && (r.update_pending_count(1), c || o.increment());
        const w = (h, p = void 0) => {
            u = null, c || o.activate(), p ? p !== _e && (s.f |= at, ie(s, p)) : ((s.f & at) !== 0 && (s.f ^= at), ie(s, h)), l && (r.update_pending_count(-1), c || o.decrement()), Ke()
        };
        if (a.then(w, h => w(null, h || "unknown")), o) return () => {
            queueMicrotask(() => o.neuter())
        }
    }), new Promise(i => {
        function f(o) {
            function c() {
                o === a ? i(s) : f(a)
            }

            o.then(c, c)
        }

        f(a)
    })
}

function oa(t) {
    const e = ye(t);
    return on(e), e
}

function zn(t) {
    const e = ye(t);
    return e.equals = He, e
}

function $e(t) {
    var e = t.effects;
    if (e !== null) {
        t.effects = null;
        for (var n = 0; n < e.length; n += 1) lt(e[n])
    }
}

function Xn(t) {
    for (var e = t.parent; e !== null;) {
        if ((e.f & O) === 0) return e;
        e = e.parent
    }
    return null
}

function ge(t) {
    var e, n = v;
    X(Xn(t));
    try {
        $e(t), e = dn(t)
    } finally {
        X(n)
    }
    return e
}

function Ge(t) {
    var e = ge(t);
    if (t.equals(e) || (t.v = e, t.wv = _n()), !At) if (W !== null) W.set(t, t.v); else {
        var n = ($ || (t.f & C) !== 0) && t.deps !== null ? Z : b;
        k(t, n)
    }
}

function Zn(t, e, n) {
    const r = Ft() ? ye : zn;
    if (e.length === 0) {
        n(t.map(r));
        return
    }
    var a = E, s = v, u = Jn(), l = Gn();
    Promise.all(e.map(i => Kn(i))).then(i => {
        a == null || a.activate(), u();
        try {
            n([...t.map(r), ...i])
        } catch (f) {
            (s.f & Tt) === 0 && we(f, s)
        }
        a == null || a.deactivate(), Ke()
    }).catch(i => {
        l.error(i)
    })
}

function Jn() {
    var t = v, e = _, n = g;
    return function () {
        X(t), F(e), Ut(n)
    }
}

function Ke() {
    X(null), F(null), Ut(null)
}

const kt = new Set;
let E = null, Qt = null, W = null, Ae = new Set, Vt = [];

function ze() {
    const t = Vt.shift();
    Vt.length > 0 && queueMicrotask(ze), t()
}

let ut = [], zt = null, re = !1, jt = !1;
var dt, ht, V, Pt, Dt, nt, pt, rt, B, wt, Mt, Lt, M, Xe, Yt, ae;
const Wt = class Wt {
    constructor() {
        x(this, M);
        xt(this, "current", new Map);
        x(this, dt, new Map);
        x(this, ht, new Set);
        x(this, V, 0);
        x(this, Pt, null);
        x(this, Dt, !1);
        x(this, nt, []);
        x(this, pt, []);
        x(this, rt, []);
        x(this, B, []);
        x(this, wt, []);
        x(this, Mt, []);
        x(this, Lt, []);
        xt(this, "skipped_effects", new Set)
    }

    process(e) {
        var s;
        ut = [], Qt = null;
        var n = null;
        if (kt.size > 1) {
            n = new Map, W = new Map;
            for (const [u, l] of this.current) n.set(u, {v: u.v, wv: u.wv}), u.v = l;
            for (const u of kt) if (u !== this) for (const [l, i] of d(u, dt)) n.has(l) || (n.set(l, {
                v: l.v,
                wv: l.wv
            }), l.v = i)
        }
        for (const u of e) Q(this, M, Xe).call(this, u);
        if (d(this, nt).length === 0 && d(this, V) === 0) {
            Q(this, M, ae).call(this);
            var r = d(this, rt), a = d(this, B);
            R(this, rt, []), R(this, B, []), R(this, wt, []), Qt = E, E = null, xe(r), xe(a), E === null ? E = this : kt.delete(this), (s = d(this, Pt)) == null || s.resolve()
        } else Q(this, M, Yt).call(this, d(this, rt)), Q(this, M, Yt).call(this, d(this, B)), Q(this, M, Yt).call(this, d(this, wt));
        if (n) {
            for (const [u, {v: l, wv: i}] of n) u.wv <= i && (u.v = l);
            W = null
        }
        for (const u of d(this, nt)) vt(u);
        for (const u of d(this, pt)) vt(u);
        R(this, nt, []), R(this, pt, [])
    }

    capture(e, n) {
        d(this, dt).has(e) || d(this, dt).set(e, n), this.current.set(e, e.v)
    }

    activate() {
        E = this
    }

    deactivate() {
        E = null, Qt = null;
        for (const e of Ae) if (Ae.delete(e), e(), E !== null) break
    }

    neuter() {
        R(this, Dt, !0)
    }

    flush() {
        ut.length > 0 ? se() : Q(this, M, ae).call(this), E === this && (d(this, V) === 0 && kt.delete(this), this.deactivate())
    }

    increment() {
        R(this, V, d(this, V) + 1)
    }

    decrement() {
        if (R(this, V, d(this, V) - 1), d(this, V) === 0) {
            for (const e of d(this, Mt)) k(e, L), Et(e);
            for (const e of d(this, Lt)) k(e, Z), Et(e);
            R(this, rt, []), R(this, B, []), this.flush()
        } else this.deactivate()
    }

    add_callback(e) {
        d(this, ht).add(e)
    }

    settled() {
        return (d(this, Pt) ?? R(this, Pt, An())).promise
    }

    static ensure() {
        if (E === null) {
            const e = E = new Wt;
            kt.add(E), jt || Wt.enqueue(() => {
                E === e && e.flush()
            })
        }
        return E
    }

    static enqueue(e) {
        Vt.length === 0 && queueMicrotask(ze), Vt.unshift(e)
    }
};
dt = new WeakMap, ht = new WeakMap, V = new WeakMap, Pt = new WeakMap, Dt = new WeakMap, nt = new WeakMap, pt = new WeakMap, rt = new WeakMap, B = new WeakMap, wt = new WeakMap, Mt = new WeakMap, Lt = new WeakMap, M = new WeakSet, Xe = function (e) {
    var o;
    e.f ^= b;
    for (var n = e.first; n !== null;) {
        var r = n.f, a = (r & (Y | ft)) !== 0, s = a && (r & b) !== 0,
            u = s || (r & K) !== 0 || this.skipped_effects.has(n);
        if (!u && n.fn !== null) {
            if (a) n.f ^= b; else if ((r & le) !== 0) d(this, B).push(n); else if ((r & b) === 0) if ((r & ce) !== 0) {
                var l = (o = n.b) != null && o.pending ? d(this, pt) : d(this, nt);
                l.push(n)
            } else Zt(n) && ((n.f & bt) !== 0 && d(this, wt).push(n), vt(n));
            var i = n.first;
            if (i !== null) {
                n = i;
                continue
            }
        }
        var f = n.parent;
        for (n = n.next; n === null && f !== null;) n = f.next, f = f.parent
    }
}, Yt = function (e) {
    for (const n of e) ((n.f & L) !== 0 ? d(this, Mt) : d(this, Lt)).push(n), k(n, b);
    e.length = 0
}, ae = function () {
    if (!d(this, Dt)) for (const e of d(this, ht)) e();
    d(this, ht).clear()
};
let gt = Wt;

function Qn(t) {
    var e = jt;
    jt = !0;
    try {
        var n;
        for (t && (se(), n = t()); ;) {
            if ($n(), ut.length === 0 && (E == null || E.flush(), ut.length === 0)) return zt = null, n;
            se()
        }
    } finally {
        jt = e
    }
}

function se() {
    var t = _t;
    re = !0;
    try {
        var e = 0;
        for (Oe(!0); ut.length > 0;) {
            var n = gt.ensure();
            if (e++ > 1e3) {
                var r, a;
                tr()
            }
            n.process(ut), G.clear()
        }
    } finally {
        re = !1, Oe(t), zt = null
    }
}

function tr() {
    try {
        Cn()
    } catch (t) {
        we(t, zt)
    }
}

let et = null;

function xe(t) {
    var e = t.length;
    if (e !== 0) {
        for (var n = 0; n < e;) {
            var r = t[n++];
            if ((r.f & (Tt | K)) === 0 && Zt(r) && (et = [], vt(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? un(r) : r.fn = null), et.length > 0)) {
                G.clear();
                for (const a of et) vt(a);
                et = []
            }
        }
        et = null
    }
}

function Et(t) {
    for (var e = zt = t; e.parent !== null;) {
        e = e.parent;
        var n = e.f;
        if (re && e === v && (n & bt) !== 0) return;
        if ((n & (ft | Y)) !== 0) {
            if ((n & b) === 0) return;
            e.f ^= b
        }
    }
    ut.push(e)
}

const G = new Map;

function Ee(t, e) {
    var n = {f: 0, v: t, reactions: null, equals: Ye, rv: 0, wv: 0};
    return n
}

function U(t, e) {
    const n = Ee(t);
    return on(n), n
}

function ca(t, e = !1, n = !0) {
    var a;
    const r = Ee(t);
    return e || (r.equals = He), Gt && n && g !== null && g.l !== null && ((a = g.l).s ?? (a.s = [])).push(r), r
}

function tt(t, e, n = !1) {
    _ !== null && (!D || (_.f & Te) !== 0) && Ft() && (_.f & (O | bt | ce | Te)) !== 0 && !(A != null && A.includes(t)) && Mn();
    let r = n ? St(e) : e;
    return ie(t, r)
}

function ie(t, e) {
    if (!t.equals(e)) {
        var n = t.v;
        At ? G.set(t, e) : G.set(t, n), t.v = e;
        var r = gt.ensure();
        r.capture(t, n), (t.f & O) !== 0 && ((t.f & L) !== 0 && ge(t), k(t, (t.f & C) === 0 ? b : Z)), t.wv = _n(), Ze(t, L), Ft() && v !== null && (v.f & b) !== 0 && (v.f & (Y | ft)) === 0 && (I === null ? or([t]) : I.push(t))
    }
    return e
}

function te(t) {
    tt(t, t.v + 1)
}

function Ze(t, e) {
    var n = t.reactions;
    if (n !== null) for (var r = Ft(), a = n.length, s = 0; s < a; s++) {
        var u = n[s], l = u.f;
        if (!(!r && u === v)) {
            var i = (l & L) === 0;
            i && k(u, e), (l & O) !== 0 ? Ze(u, Z) : i && ((l & bt) !== 0 && et !== null && et.push(u), Et(u))
        }
    }
}

function St(t) {
    if (typeof t != "object" || t === null || st in t) return t;
    const e = De(t);
    if (e !== bn && e !== Tn) return t;
    var n = new Map, r = Pe(t), a = U(0), s = it, u = l => {
        if (it === s) return l();
        var i = _, f = it;
        F(null), Ie(s);
        var o = l();
        return F(i), Ie(f), o
    };
    return r && n.set("length", U(t.length)), new Proxy(t, {
        defineProperty(l, i, f) {
            (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Pn();
            var o = n.get(i);
            return o === void 0 ? o = u(() => {
                var c = U(f.value);
                return n.set(i, c), c
            }) : tt(o, f.value, !0), !0
        }, deleteProperty(l, i) {
            var f = n.get(i);
            if (f === void 0) {
                if (i in l) {
                    const o = u(() => U(m));
                    n.set(i, o), te(a)
                }
            } else tt(f, m), te(a);
            return !0
        }, get(l, i, f) {
            var h;
            if (i === st) return t;
            var o = n.get(i), c = i in l;
            if (o === void 0 && (!c || (h = Ot(l, i)) != null && h.writable) && (o = u(() => {
                var p = St(c ? l[i] : m), P = U(p);
                return P
            }), n.set(i, o)), o !== void 0) {
                var w = Nt(o);
                return w === m ? void 0 : w
            }
            return Reflect.get(l, i, f)
        }, getOwnPropertyDescriptor(l, i) {
            var f = Reflect.getOwnPropertyDescriptor(l, i);
            if (f && "value" in f) {
                var o = n.get(i);
                o && (f.value = Nt(o))
            } else if (f === void 0) {
                var c = n.get(i), w = c == null ? void 0 : c.v;
                if (c !== void 0 && w !== m) return {enumerable: !0, configurable: !0, value: w, writable: !0}
            }
            return f
        }, has(l, i) {
            var w;
            if (i === st) return !0;
            var f = n.get(i), o = f !== void 0 && f.v !== m || Reflect.has(l, i);
            if (f !== void 0 || v !== null && (!o || (w = Ot(l, i)) != null && w.writable)) {
                f === void 0 && (f = u(() => {
                    var h = o ? St(l[i]) : m, p = U(h);
                    return p
                }), n.set(i, f));
                var c = Nt(f);
                if (c === m) return !1
            }
            return o
        }, set(l, i, f, o) {
            var J;
            var c = n.get(i), w = i in l;
            if (r && i === "length") for (var h = f; h < c.v; h += 1) {
                var p = n.get(h + "");
                p !== void 0 ? tt(p, m) : h in l && (p = u(() => U(m)), n.set(h + "", p))
            }
            if (c === void 0) (!w || (J = Ot(l, i)) != null && J.writable) && (c = u(() => U(void 0)), tt(c, St(f)), n.set(i, c)); else {
                w = c.v !== m;
                var P = u(() => St(f));
                tt(c, P)
            }
            var H = Reflect.getOwnPropertyDescriptor(l, i);
            if (H != null && H.set && H.set.call(o, f), !w) {
                if (r && typeof i == "string") {
                    var qt = n.get("length"), ct = Number(i);
                    Number.isInteger(ct) && ct >= qt.v && tt(qt, ct + 1)
                }
                te(a)
            }
            return !0
        }, ownKeys(l) {
            Nt(a);
            var i = Reflect.ownKeys(l).filter(c => {
                var w = n.get(c);
                return w === void 0 || w.v !== m
            });
            for (var [f, o] of n) o.v !== m && !(f in l) && i.push(f);
            return i
        }, setPrototypeOf() {
            Dn()
        }
    })
}

function ke(t) {
    try {
        if (t !== null && typeof t == "object" && st in t) return t[st]
    } catch {
    }
    return t
}

function _a(t, e) {
    return Object.is(ke(t), ke(e))
}

var Se, er, Je, Qe, tn;

function va() {
    if (Se === void 0) {
        Se = window, er = document, Je = /Firefox/.test(navigator.userAgent);
        var t = Element.prototype, e = Node.prototype, n = Text.prototype;
        Qe = Ot(e, "firstChild").get, tn = Ot(e, "nextSibling").get, be(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), be(n) && (n.__t = void 0)
    }
}

function mt(t = "") {
    return document.createTextNode(t)
}

function z(t) {
    return Qe.call(t)
}

function ot(t) {
    return tn.call(t)
}

function da(t, e) {
    if (!S) return z(t);
    var n = z(y);
    if (n === null) n = y.appendChild(mt()); else if (e && n.nodeType !== ve) {
        var r = mt();
        return n == null || n.before(r), yt(r), r
    }
    return yt(n), n
}

function ha(t, e) {
    if (!S) {
        var n = z(t);
        return n instanceof Comment && n.data === "" ? ot(n) : n
    }
    return y
}

function pa(t, e = 1, n = !1) {
    let r = S ? y : t;
    for (var a; e--;) a = r, r = ot(r);
    if (!S) return r;
    if (n && (r == null ? void 0 : r.nodeType) !== ve) {
        var s = mt();
        return r === null ? a == null || a.after(s) : r.before(s), yt(s), s
    }
    return yt(r), r
}

function nr(t) {
    t.textContent = ""
}

function wa() {
    return !1
}

function ya(t, e) {
    if (e) {
        const n = document.body;
        t.autofocus = !0, We(() => {
            document.activeElement === n && t.focus()
        })
    }
}

function ga(t) {
    S && z(t) !== null && nr(t)
}

let Ne = !1;

function rr() {
    Ne || (Ne = !0, document.addEventListener("reset", t => {
        Promise.resolve().then(() => {
            var e;
            if (!t.defaultPrevented) for (const n of t.target.elements) (e = n.__on_r) == null || e.call(n)
        })
    }, {capture: !0}))
}

function Ea(t, e, n, r = !0) {
    r && n();
    for (var a of e) t.addEventListener(a, n);
    nn(() => {
        for (var s of e) t.removeEventListener(s, n)
    })
}

function Xt(t) {
    var e = _, n = v;
    F(null), X(null);
    try {
        return t()
    } finally {
        F(e), X(n)
    }
}

function ma(t, e, n, r = n) {
    t.addEventListener(e, () => Xt(n));
    const a = t.__on_r;
    a ? t.__on_r = () => {
        a(), r(!0)
    } : t.__on_r = () => r(!0), rr()
}

function en(t) {
    v === null && _ === null && In(), _ !== null && (_.f & C) !== 0 && v === null && Rn(), At && On()
}

function ar(t, e) {
    var n = e.last;
    n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t)
}

function q(t, e, n, r = !0) {
    var a = v;
    a !== null && (a.f & K) !== 0 && (t |= K);
    var s = {
        ctx: g,
        deps: null,
        nodes_start: null,
        nodes_end: null,
        f: t | L,
        first: null,
        fn: e,
        last: null,
        next: null,
        parent: a,
        b: a && a.b,
        prev: null,
        teardown: null,
        transitions: null,
        wv: 0,
        ac: null
    };
    if (n) try {
        vt(s), s.f |= fe
    } catch (i) {
        throw lt(s), i
    } else e !== null && Et(s);
    var u = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & oe) === 0;
    if (!u && r && (a !== null && ar(s, a), _ !== null && (_.f & O) !== 0 && (t & ft) === 0)) {
        var l = _;
        (l.effects ?? (l.effects = [])).push(s)
    }
    return s
}

function ba() {
    return _ !== null && !D
}

function nn(t) {
    const e = q($t, null, !1);
    return k(e, b), e.teardown = t, e
}

function Ta(t) {
    en();
    var e = v.f, n = !_ && (e & Y) !== 0 && (e & fe) === 0;
    if (n) {
        var r = g;
        (r.e ?? (r.e = [])).push(t)
    } else return rn(t)
}

function rn(t) {
    return q(le | qe, t, !1)
}

function Aa(t) {
    return en(), q($t | qe, t, !0)
}

function xa(t) {
    gt.ensure();
    const e = q(ft, t, !0);
    return (n = {}) => new Promise(r => {
        n.outro ? lr(e, () => {
            lt(e), r(void 0)
        }) : (lt(e), r(void 0))
    })
}

function ka(t) {
    return q(le, t, !1)
}

function sr(t) {
    return q(ce | oe, t, !0)
}

function Sa(t, e = 0) {
    return q($t | e, t, !0)
}

function Na(t, e = [], n = []) {
    Zn(e, n, r => {
        q($t, () => t(...r.map(Nt)), !0)
    })
}

function Oa(t, e = 0) {
    var n = q(bt | e, t, !0);
    return n
}

function Ra(t, e = !0) {
    return q(Y, t, !0, e)
}

function an(t) {
    var e = t.teardown;
    if (e !== null) {
        const n = At, r = _;
        Re(!0), F(null);
        try {
            e.call(null)
        } finally {
            Re(n), F(r)
        }
    }
}

function sn(t, e = !1) {
    var n = t.first;
    for (t.first = t.last = null; n !== null;) {
        const a = n.ac;
        a !== null && Xt(() => {
            a.abort(_e)
        });
        var r = n.next;
        (n.f & ft) !== 0 ? n.parent = null : lt(n, e), n = r
    }
}

function ir(t) {
    for (var e = t.first; e !== null;) {
        var n = e.next;
        (e.f & Y) === 0 && lt(e), e = n
    }
}

function lt(t, e = !0) {
    var n = !1;
    (e || (t.f & xn) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (ur(t.nodes_start, t.nodes_end), n = !0), sn(t, e && !n), Bt(t, 0), k(t, Tt);
    var r = t.transitions;
    if (r !== null) for (const s of r) s.stop();
    an(t);
    var a = t.parent;
    a !== null && a.first !== null && un(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null
}

function ur(t, e) {
    for (; t !== null;) {
        var n = t === e ? null : ot(t);
        t.remove(), t = n
    }
}

function un(t) {
    var e = t.parent, n = t.prev, r = t.next;
    n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n))
}

function lr(t, e) {
    var n = [];
    ln(t, n, !0), fr(n, () => {
        lt(t), e && e()
    })
}

function fr(t, e) {
    var n = t.length;
    if (n > 0) {
        var r = () => --n || e();
        for (var a of t) a.out(r)
    } else e()
}

function ln(t, e, n) {
    if ((t.f & K) === 0) {
        if (t.f ^= K, t.transitions !== null) for (const u of t.transitions) (u.is_global || n) && e.push(u);
        for (var r = t.first; r !== null;) {
            var a = r.next, s = (r.f & Fe) !== 0 || (r.f & Y) !== 0;
            ln(r, e, s ? n : !1), r = a
        }
    }
}

function Ia(t) {
    fn(t, !0)
}

function fn(t, e) {
    if ((t.f & K) !== 0) {
        t.f ^= K, (t.f & b) === 0 && (k(t, L), Et(t));
        for (var n = t.first; n !== null;) {
            var r = n.next, a = (n.f & Fe) !== 0 || (n.f & Y) !== 0;
            fn(n, a ? e : !1), n = r
        }
        if (t.transitions !== null) for (const s of t.transitions) (s.is_global || e) && s.in()
    }
}

let _t = !1;

function Oe(t) {
    _t = t
}

let At = !1;

function Re(t) {
    At = t
}

let _ = null, D = !1;

function F(t) {
    _ = t
}

let v = null;

function X(t) {
    v = t
}

let A = null;

function on(t) {
    _ !== null && (A === null ? A = [t] : A.push(t))
}

let T = null, N = 0, I = null;

function or(t) {
    I = t
}

let cn = 1, Ct = 0, it = Ct;

function Ie(t) {
    it = t
}

let $ = !1;

function _n() {
    return ++cn
}

function Zt(t) {
    var c;
    var e = t.f;
    if ((e & L) !== 0) return !0;
    if ((e & Z) !== 0) {
        var n = t.deps, r = (e & C) !== 0;
        if (n !== null) {
            var a, s, u = (e & Ht) !== 0, l = r && v !== null && !$, i = n.length;
            if ((u || l) && (v === null || (v.f & Tt) === 0)) {
                var f = t, o = f.parent;
                for (a = 0; a < i; a++) s = n[a], (u || !((c = s == null ? void 0 : s.reactions) != null && c.includes(f))) && (s.reactions ?? (s.reactions = [])).push(f);
                u && (f.f ^= Ht), l && o !== null && (o.f & C) === 0 && (f.f ^= C)
            }
            for (a = 0; a < i; a++) if (s = n[a], Zt(s) && Ge(s), s.wv > t.wv) return !0
        }
        (!r || v !== null && !$) && k(t, b)
    }
    return !1
}

function vn(t, e, n = !0) {
    var r = t.reactions;
    if (r !== null && !(A != null && A.includes(t))) for (var a = 0; a < r.length; a++) {
        var s = r[a];
        (s.f & O) !== 0 ? vn(s, e, !1) : e === s && (n ? k(s, L) : (s.f & b) !== 0 && k(s, Z), Et(s))
    }
}

function dn(t) {
    var P;
    var e = T, n = N, r = I, a = _, s = $, u = A, l = g, i = D, f = it, o = t.f;
    T = null, N = 0, I = null, $ = (o & C) !== 0 && (D || !_t || _ === null), _ = (o & (Y | ft)) === 0 ? t : null, A = null, Ut(t.ctx), D = !1, it = ++Ct, t.ac !== null && (Xt(() => {
        t.ac.abort(_e)
    }), t.ac = null);
    try {
        t.f |= ne;
        var c = t.fn, w = c(), h = t.deps;
        if (T !== null) {
            var p;
            if (Bt(t, N), h !== null && N > 0) for (h.length = N + T.length, p = 0; p < T.length; p++) h[N + p] = T[p]; else t.deps = h = T;
            if (!$ || (o & O) !== 0 && t.reactions !== null) for (p = N; p < h.length; p++) ((P = h[p]).reactions ?? (P.reactions = [])).push(t)
        } else h !== null && N < h.length && (Bt(t, N), h.length = N);
        if (Ft() && I !== null && !D && h !== null && (t.f & (O | Z | L)) === 0) for (p = 0; p < I.length; p++) vn(I[p], t);
        return a !== null && a !== t && (Ct++, I !== null && (r === null ? r = I : r.push(...I))), (t.f & at) !== 0 && (t.f ^= at), w
    } catch (H) {
        return Bn(H)
    } finally {
        t.f ^= ne, T = e, N = n, I = r, _ = a, $ = s, A = u, Ut(l), D = i, it = f
    }
}

function cr(t, e) {
    let n = e.reactions;
    if (n !== null) {
        var r = En.call(n, t);
        if (r !== -1) {
            var a = n.length - 1;
            a === 0 ? n = e.reactions = null : (n[r] = n[a], n.pop())
        }
    }
    n === null && (e.f & O) !== 0 && (T === null || !T.includes(e)) && (k(e, Z), (e.f & (C | Ht)) === 0 && (e.f ^= Ht), $e(e), Bt(e, 0))
}

function Bt(t, e) {
    var n = t.deps;
    if (n !== null) for (var r = e; r < n.length; r++) cr(t, n[r])
}

function vt(t) {
    var e = t.f;
    if ((e & Tt) === 0) {
        k(t, b);
        var n = v, r = _t;
        v = t, _t = !0;
        try {
            (e & bt) !== 0 ? ir(t) : sn(t), an(t);
            var a = dn(t);
            t.teardown = typeof a == "function" ? a : null, t.wv = cn;
            var s
        } finally {
            _t = r, v = n
        }
    }
}

async function Ca() {
    await Promise.resolve(), Qn()
}

function Pa() {
    return gt.ensure().settled()
}

function Nt(t) {
    var e = t.f, n = (e & O) !== 0;
    if (_ !== null && !D) {
        var r = v !== null && (v.f & Tt) !== 0;
        if (!r && !(A != null && A.includes(t))) {
            var a = _.deps;
            if ((_.f & ne) !== 0) t.rv < Ct && (t.rv = Ct, T === null && a !== null && a[N] === t ? N++ : T === null ? T = [t] : (!$ || !T.includes(t)) && T.push(t)); else {
                (_.deps ?? (_.deps = [])).push(t);
                var s = t.reactions;
                s === null ? t.reactions = [_] : s.includes(_) || s.push(_)
            }
        }
    } else if (n && t.deps === null && t.effects === null) {
        var u = t, l = u.parent;
        l !== null && (l.f & C) === 0 && (u.f ^= C)
    }
    if (At) {
        if (G.has(t)) return G.get(t);
        if (n) {
            u = t;
            var i = u.v;
            return ((u.f & b) === 0 && u.reactions !== null || hn(u)) && (i = ge(u)), G.set(u, i), i
        }
    } else if (n) {
        if (u = t, W != null && W.has(u)) return W.get(u);
        Zt(u) && Ge(u)
    }
    if ((t.f & at) !== 0) throw t.v;
    return t.v
}

function hn(t) {
    if (t.v === m) return !0;
    if (t.deps === null) return !1;
    for (const e of t.deps) if (G.has(e) || (e.f & O) !== 0 && hn(e)) return !0;
    return !1
}

function Da(t) {
    var e = D;
    try {
        return D = !0, t()
    } finally {
        D = e
    }
}

const _r = -7169;

function k(t, e) {
    t.f = t.f & _r | e
}

function Ma(t) {
    if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
        if (st in t) ue(t); else if (!Array.isArray(t)) for (let e in t) {
            const n = t[e];
            typeof n == "object" && n && st in n && ue(n)
        }
    }
}

function ue(t, e = new Set) {
    if (typeof t == "object" && t !== null && !(t instanceof EventTarget) && !e.has(t)) {
        e.add(t), t instanceof Date && t.getTime();
        for (let r in t) try {
            ue(t[r], e)
        } catch {
        }
        const n = De(t);
        if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
            const r = mn(n);
            for (let a in r) {
                const s = r[a].get;
                if (s) try {
                    s.call(t)
                } catch {
                }
            }
        }
    }
}

function La(t) {
    return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture"
}

const vr = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function Fa(t) {
    return vr.includes(t)
}

const dr = {
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
    defaultvalue: "defaultValue",
    defaultchecked: "defaultChecked",
    srcobject: "srcObject",
    novalidate: "noValidate",
    allowfullscreen: "allowFullscreen",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback"
};

function qa(t) {
    return t = t.toLowerCase(), dr[t] ?? t
}

const hr = ["touchstart", "touchmove"];

function ja(t) {
    return hr.includes(t)
}

const pr = new Set, wr = new Set;

function pn(t, e, n, r = {}) {
    function a(s) {
        if (r.capture || yr.call(e, s), !s.cancelBubble) return Xt(() => n == null ? void 0 : n.call(this, s))
    }

    return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? We(() => {
        e.addEventListener(t, a, r)
    }) : e.addEventListener(t, a, r), a
}

function Ya(t, e, n, r = {}) {
    var a = pn(e, t, n, r);
    return () => {
        t.removeEventListener(e, a, r)
    }
}

function Ha(t, e, n, r, a) {
    var s = {capture: r, passive: a}, u = pn(t, e, n, s);
    (e === document.body || e === window || e === document || e instanceof HTMLMediaElement) && nn(() => {
        e.removeEventListener(t, u, s)
    })
}

function Ua(t) {
    for (var e = 0; e < t.length; e++) pr.add(t[e]);
    for (var n of wr) n(t)
}

let Ce = null;

function yr(t) {
    var ct;
    var e = this, n = e.ownerDocument, r = t.type, a = ((ct = t.composedPath) == null ? void 0 : ct.call(t)) || [],
        s = a[0] || t.target;
    Ce = t;
    var u = 0, l = Ce === t && t.__root;
    if (l) {
        var i = a.indexOf(l);
        if (i !== -1 && (e === document || e === window)) {
            t.__root = e;
            return
        }
        var f = a.indexOf(e);
        if (f === -1) return;
        i <= f && (u = i)
    }
    if (s = a[u] || t.target, s !== e) {
        ee(t, "currentTarget", {
            configurable: !0, get() {
                return s || n
            }
        });
        var o = _, c = v;
        F(null), X(null);
        try {
            for (var w, h = []; s !== null;) {
                var p = s.assignedSlot || s.parentNode || s.host || null;
                try {
                    var P = s["__" + r];
                    if (P != null && (!s.disabled || t.target === s)) if (Pe(P)) {
                        var [H, ...qt] = P;
                        H.apply(s, [t, ...qt])
                    } else P.call(s, t)
                } catch (J) {
                    w ? h.push(J) : w = J
                }
                if (t.cancelBubble || p === e || p === null) break;
                s = p
            }
            if (w) {
                for (let J of h) queueMicrotask(() => {
                    throw J
                });
                throw w
            }
        } finally {
            t.__root = e, delete t.currentTarget, F(o), X(c)
        }
    }
}

function wn(t) {
    var e = document.createElement("template");
    return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content
}

function j(t, e) {
    var n = v;
    n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e)
}

function Va(t, e) {
    var n = (e & Ln) !== 0, r = (e & Fn) !== 0, a, s = !t.startsWith("<!>");
    return () => {
        if (S) return j(y, null), y;
        a === void 0 && (a = wn(s ? t : "<!>" + t), n || (a = z(a)));
        var u = r || Je ? document.importNode(a, !0) : a.cloneNode(!0);
        if (n) {
            var l = z(u), i = u.lastChild;
            j(l, i)
        } else j(u, u);
        return u
    }
}

function gr(t, e, n = "svg") {
    var r = !t.startsWith("<!>"), a = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
    return () => {
        if (S) return j(y, null), y;
        if (!s) {
            var u = wn(a), l = z(u);
            s = z(l)
        }
        var i = s.cloneNode(!0);
        return j(i, i), i
    }
}

function Ba(t, e) {
    return gr(t, e, "svg")
}

function Wa(t = "") {
    if (!S) {
        var e = mt(t + "");
        return j(e, e), e
    }
    var n = y;
    return n.nodeType !== ve && (n.before(n = mt()), yt(n)), j(n, n), n
}

function $a() {
    if (S) return j(y, null), y;
    var t = document.createDocumentFragment(), e = document.createComment(""), n = mt();
    return t.append(e, n), j(e, n), t
}

function Ga(t, e) {
    if (S) {
        v.nodes_end = y, je();
        return
    }
    t !== null && t.before(e)
}

function Ka() {
    var t, e;
    if (S && y && y.nodeType === de && ((t = y.textContent) != null && t.startsWith("#"))) {
        const n = y.textContent.substring(1);
        return je(), n
    }
    return (e = window.__svelte ?? (window.__svelte = {})).uid ?? (e.uid = 1), `c${window.__svelte.uid++}`
}

export {
    K as $,
    Nt as A,
    Ma as B,
    ye as C,
    ka as D,
    Fe as E,
    Sa as F,
    We as G,
    Lr as H,
    yt as I,
    z as J,
    zn as K,
    ta as L,
    jn as M,
    Qr as N,
    Xr as O,
    de as P,
    Yn as Q,
    Dr as R,
    st as S,
    Mr as T,
    ie as U,
    ca as V,
    Ee as W,
    br as X,
    Pe as Y,
    Ia as Z,
    qr as _,
    ha as a,
    Kr as a$,
    lt as a0,
    Fr as a1,
    ot as a2,
    ln as a3,
    nr as a4,
    fr as a5,
    v as a6,
    ur as a7,
    pe as a8,
    he as a9,
    Pa as aA,
    Ca as aB,
    m as aC,
    Ot as aD,
    Pr as aE,
    Hr as aF,
    St as aG,
    tt as aH,
    At as aI,
    Tt as aJ,
    Ur as aK,
    Yr as aL,
    jr as aM,
    Vr as aN,
    Sr as aO,
    Tr as aP,
    ee as aQ,
    U as aR,
    $a as aS,
    oa as aT,
    Wa as aU,
    zr as aV,
    _a as aW,
    Zn as aX,
    Gr as aY,
    De as aZ,
    Nr as a_,
    j as aa,
    wn as ab,
    va as ac,
    qn as ad,
    Ir as ae,
    pr as af,
    wr as ag,
    xa as ah,
    yr as ai,
    ja as aj,
    er as ak,
    na as al,
    xn as am,
    Ua as an,
    nn as ao,
    Ar as ap,
    Sn as aq,
    _ as ar,
    Rr as as,
    Cr as at,
    Gt as au,
    Qn as av,
    ia as aw,
    ra as ax,
    sa as ay,
    aa as az,
    Ga as b,
    mn as b0,
    La as b1,
    pn as b2,
    ya as b3,
    qa as b4,
    Fa as b5,
    fa as b6,
    rr as b7,
    ba as b8,
    te as b9,
    Hn as ba,
    Ft as bb,
    ea as bc,
    $r as bd,
    Xt as be,
    bt as bf,
    fe as bg,
    Br as bh,
    Wr as bi,
    Ha as bj,
    Se as bk,
    ma as bl,
    Qt as bm,
    mr as bn,
    Ya as bo,
    bn as bp,
    Ea as bq,
    ga as br,
    Ka as bs,
    kr as bt,
    la as c,
    da as d,
    je as e,
    Va as f,
    Oa as g,
    S as h,
    mt as i,
    Ra as j,
    E as k,
    wa as l,
    y as m,
    lr as n,
    Jr as o,
    ua as p,
    Ba as q,
    Zr as r,
    pa as s,
    Na as t,
    g as u,
    Aa as v,
    Ta as w,
    Da as x,
    xr as y,
    Me as z
};

import {
    bb as z,
    bc as D,
    ba as P,
    g as G,
    h as A,
    e as U,
    i as W,
    j,
    k as K,
    l as Q,
    m as J,
    aC as V,
    n as X,
    a6 as Y,
    bd as tt,
    be as F,
    aP as rt,
    G as at,
    ap as C,
    E as it,
    bf as et,
    bg as st,
    D as nt,
    x as ot,
    bh as ft,
    bi as vt,
    q as Z,
    b as $,
    aS as ct,
    a as lt
} from "./DUoKDNpf.js";
import {
    a as ht
} from "./g8c1BvYP.js";
import {
    c as ut
} from "./U908S-6f.js";
import {
    g as L
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
    a as y
} from "./B1GmkH4o.js";
import {
    r as M,
    i as dt
} from "./5NasrULQ.js";

function Lt(r, t, a) {
    A && U();
    var i = r,
        e = V,
        o, n, s = null,
        f = z() ? D : P;

    function u() {
        o && X(o), s !== null && (s.lastChild.remove(), i.before(s), s = null), o = n
    }
    G(() => {
        if (f(e, e = t())) {
            var c = i,
                l = Q();
            l && (s = document.createDocumentFragment(), s.append(c = W())), n = j(() => a(c)), l ? K.add_callback(u) : u()
        }
    }), A && (i = J)
}
const pt = () => performance.now(),
    T = {
        tick: r => requestAnimationFrame(r),
        now: () => pt(),
        tasks: new Set
    };

function O() {
    const r = T.now();
    T.tasks.forEach(t => {
        t.c(r) || (T.tasks.delete(t), t.f())
    }), T.tasks.size !== 0 && T.tick(O)
}

function gt(r) {
    let t;
    return T.tasks.size === 0 && T.tick(O), {
        promise: new Promise(a => {
            T.tasks.add(t = {
                c: r,
                f: a
            })
        }),
        abort() {
            T.tasks.delete(t)
        }
    }
}

function E(r, t) {
    F(() => {
        r.dispatchEvent(new CustomEvent(t))
    })
}

function mt(r) {
    if (r === "float") return "cssFloat";
    if (r === "offset") return "cssOffset";
    if (r.startsWith("--")) return r;
    const t = r.split("-");
    return t.length === 1 ? t[0] : t[0] + t.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function B(r) {
    const t = {},
        a = r.split(";");
    for (const i of a) {
        const [e, o] = i.split(":");
        if (!e || o === void 0) break;
        const n = mt(e.trim());
        t[n] = o.trim()
    }
    return t
}
const wt = r => r;

function Ot(r, t, a) {
    var i = ut,
        e, o, n, s = null;
    i.a ?? (i.a = {
        element: r,
        measure() {
            e = this.element.getBoundingClientRect()
        },
        apply() {
            if (n == null || n.abort(), o = this.element.getBoundingClientRect(), e.left !== o.left || e.right !== o.right || e.top !== o.top || e.bottom !== o.bottom) {
                const f = t()(this.element, {
                    from: e,
                    to: o
                }, a == null ? void 0 : a());
                n = N(this.element, f, void 0, 1, () => {
                    n == null || n.abort(), n = void 0
                })
            }
        },
        fix() {
            if (!r.getAnimations().length) {
                var {
                    position: f,
                    width: u,
                    height: c
                } = getComputedStyle(r);
                if (f !== "absolute" && f !== "fixed") {
                    var l = r.style;
                    s = {
                        position: l.position,
                        width: l.width,
                        height: l.height,
                        transform: l.transform
                    }, l.position = "absolute", l.width = u, l.height = c;
                    var v = r.getBoundingClientRect();
                    if (e.left !== v.left || e.top !== v.top) {
                        var h = `translate(${e.left-v.left}px, ${e.top-v.top}px)`;
                        l.transform = l.transform ? `${l.transform} ${h}` : h
                    }
                }
            }
        },
        unfix() {
            if (s) {
                var f = r.style;
                f.position = s.position, f.width = s.width, f.height = s.height, f.transform = s.transform
            }
        }
    }), i.a.element = r
}

function Ht(r, t, a, i) {
    var e = (r & ft) !== 0,
        o = (r & vt) !== 0,
        n = e && o,
        s = (r & tt) !== 0,
        f = n ? "both" : e ? "in" : "out",
        u, c = t.inert,
        l = t.style.overflow,
        v, h;

    function w() {
        return F(() => u ?? (u = a()(t, (i == null ? void 0 : i()) ?? {}, {
            direction: f
        })))
    }
    var g = {
            is_global: s,
            in() {
                var p;
                if (t.inert = c, !e) {
                    h == null || h.abort(), (p = h == null ? void 0 : h.reset) == null || p.call(h);
                    return
                }
                o || v == null || v.abort(), E(t, "introstart"), v = N(t, w(), h, 1, () => {
                    E(t, "introend"), v == null || v.abort(), v = u = void 0, t.style.overflow = l
                })
            },
            out(p) {
                if (!o) {
                    p == null || p(), u = void 0;
                    return
                }
                t.inert = !0, E(t, "outrostart"), h = N(t, w(), v, 0, () => {
                    E(t, "outroend"), p == null || p()
                })
            },
            stop: () => {
                v == null || v.abort(), h == null || h.abort()
            }
        },
        m = Y;
    if ((m.transitions ?? (m.transitions = [])).push(g), e && ht) {
        var _ = s;
        if (!_) {
            for (var d = m.parent; d && (d.f & it) !== 0;)
                for (;
                    (d = d.parent) && (d.f & et) === 0;);
            _ = !d || (d.f & st) !== 0
        }
        _ && nt(() => {
            ot(() => g.in())
        })
    }
}

function N(r, t, a, i, e) {
    var o = i === 1;
    if (rt(t)) {
        var n, s = !1;
        return at(() => {
            if (!s) {
                var m = t({
                    direction: o ? "in" : "out"
                });
                n = N(r, m, a, i, e)
            }
        }), {
            abort: () => {
                s = !0, n == null || n.abort()
            },
            deactivate: () => n.deactivate(),
            reset: () => n.reset(),
            t: () => n.t()
        }
    }
    if (a == null || a.deactivate(), !(t != null && t.duration)) return e(), {
        abort: C,
        deactivate: C,
        reset: C,
        t: () => i
    };
    const {
        delay: f = 0,
        css: u,
        tick: c,
        easing: l = wt
    } = t;
    var v = [];
    if (o && a === void 0 && (c && c(0, 1), u)) {
        var h = B(u(0, 1));
        v.push(h, h)
    }
    var w = () => 1 - i,
        g = r.animate(v, {
            duration: f,
            fill: "forwards"
        });
    return g.onfinish = () => {
        g.cancel();
        var m = (a == null ? void 0 : a.t()) ?? 1 - i;
        a == null || a.abort();
        var _ = i - m,
            d = t.duration * Math.abs(_),
            p = [];
        if (d > 0) {
            var k = !1;
            if (u)
                for (var I = Math.ceil(d / 16.666666666666668), q = 0; q <= I; q += 1) {
                    var b = m + _ * l(q / I),
                        S = B(u(b, 1 - b));
                    p.push(S), k || (k = S.overflow === "hidden")
                }
            k && (r.style.overflow = "hidden"), w = () => {
                var x = g.currentTime;
                return m + _ * l(x / d)
            }, c && gt(() => {
                if (g.playState !== "running") return !1;
                var x = w();
                return c(x, 1 - x), !0
            })
        }
        g = r.animate(p, {
            duration: d,
            fill: "forwards"
        }), g.onfinish = () => {
            w = () => i, c == null || c(i, 1 - i), e()
        }
    }, {
        abort: () => {
            g && (g.cancel(), g.effect = null, g.onfinish = C)
        },
        deactivate: () => {
            e = C
        },
        reset: () => {
            i === 0 && (c == null || c(1, 0))
        },
        t: () => w()
    }
}
const _t = () => "Pixels painted",
    Tt = () => "已绘制像素",
    Rt = (r = {}, t = {}) => (t.locale ?? L()) === "en" ? _t() : Tt(),
    qt = () => "Description",
    bt = () => "描述",
    zt = (r = {}, t = {}) => (t.locale ?? L()) === "en" ? qt() : bt();
var xt = Z('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function Dt(r, t) {
    let a = M(t, ["$$slots", "$$events", "$$legacy"]);
    var i = xt();
    y(i, () => ({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 -960 960 960",
        fill: "currentColor",
        ...a
    })), $(r, i)
}

function $t(r) {
    const t = r - 1;
    return t * t * t + 1
}

function Pt(r, {
    from: t,
    to: a
}, i = {}) {
    var {
        delay: e = 0,
        duration: o = q => Math.sqrt(q) * 120,
        easing: n = $t
    } = i, s = getComputedStyle(r), f = s.transform === "none" ? "" : s.transform, [u, c] = s.transformOrigin.split(" ").map(parseFloat);
    u /= r.clientWidth, c /= r.clientHeight;
    var l = Ct(r),
        v = r.clientWidth / a.width / l,
        h = r.clientHeight / a.height / l,
        w = t.left + t.width * u,
        g = t.top + t.height * c,
        m = a.left + a.width * u,
        _ = a.top + a.height * c,
        d = (w - m) * v,
        p = (g - _) * h,
        k = t.width / a.width,
        I = t.height / a.height;
    return {
        delay: e,
        duration: typeof o == "function" ? o(Math.sqrt(d * d + p * p)) : o,
        easing: n,
        css: (q, b) => {
            var S = b * d,
                x = b * p,
                H = q + b * k,
                R = q + b * I;
            return `transform: ${f} translate(${S}px, ${x}px) scale(${H}, ${R});`
        }
    }
}

function Ct(r) {
    if ("currentCSSZoom" in r) return r.currentCSSZoom;
    for (var t = r, a = 1; t !== null;) a *= +getComputedStyle(t).zoom, t = t.parentElement;
    return a
}
var yt = Z('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
    Zt = Z('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function Gt(r, t) {
    let a = M(t, ["$$slots", "$$events", "$$legacy", "filled"]);
    var i = ct(),
        e = lt(i);
    {
        var o = s => {
                var f = yt();
                y(f, () => ({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 -960 960 960",
                    fill: "currentColor",
                    ...a
                })), $(s, f)
            },
            n = s => {
                var f = Zt();
                y(f, () => ({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 -960 960 960",
                    fill: "currentColor",
                    ...a
                })), $(s, f)
            };
        dt(e, s => {
            t.filled ? s(o) : s(n, !1)
        })
    }
    $(r, i)
}
var kt = Z('<svg><path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"></path></svg>');

function Ut(r, t) {
    let a = M(t, ["$$slots", "$$events", "$$legacy"]);
    var i = kt();
    y(i, () => ({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 -960 960 960",
        fill: "currentColor",
        ...a
    })), $(r, i)
}
var It = Z('<svg><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"></path></svg>');

function Wt(r, t) {
    let a = M(t, ["$$slots", "$$events", "$$legacy"]);
    var i = It();
    y(i, () => ({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 -960 960 960",
        fill: "currentColor",
        ...a
    })), $(r, i)
}
export {
    Gt as C, Ut as G, Dt as L, Wt as T, Ot as a, zt as d, Pt as f, Lt as k, Rt as p, Ht as t
};
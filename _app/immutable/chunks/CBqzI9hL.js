import {
    bl as ze,
    F as Se,
    h as qe,
    aW as _t,
    ao as mt,
    G as Re,
    bb as bt,
    k as G,
    x as Xe,
    bm as ht,
    bn as gt,
    q as R,
    b as _,
    an as We,
    p as Qe,
    aS as Ge,
    a as pe,
    c as Ke,
    f as k,
    d as o,
    r as l,
    s as d,
    o as U,
    t as z,
    bj as ce,
    w as xt,
    A as b,
    aR as ie,
    aH as C,
    aT as Le,
    aU as wt
} from "./DUoKDNpf.js";
import {
    g as N
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
    o as kt
} from "./ByKBPM-D.js";
import {
    s as I
} from "./g8c1BvYP.js";
import {
    r as Y,
    p as Ne,
    i as M
} from "./5NasrULQ.js";
import {
    a as A,
    e as yt,
    r as xe,
    b as de,
    f as we,
    s as Ye,
    d as Ct
} from "./B1GmkH4o.js";
import {
    b as Lt
} from "./CMs8vKjq.js";
import {
    g as Fe
} from "./KvV259my.js";
import {
    g as It,
    u as ve,
    t as K,
    a as Je,
    S as zt,
    c as je
} from "./1lh-LSvX.js";
import {
    a as St
} from "./DsJqb9ei.js";

function Ca(e, t, a = t) {
    var r = bt(),
        i = new WeakSet;
    ze(e, "input", c => {
        var s = c ? e.defaultValue : e.value;
        if (s = ye(e) ? Ce(s) : s, a(s), G !== null && i.add(G), r && s !== (s = t())) {
            var f = e.selectionStart,
                v = e.selectionEnd;
            e.value = s ?? "", v !== null && (e.selectionStart = f, e.selectionEnd = Math.min(v, e.value.length))
        }
    }), (qe && e.defaultValue !== e.value || Xe(t) == null && e.value) && (a(ye(e) ? Ce(e.value) : e.value), G !== null && i.add(G)), Se(() => {
        var c = t();
        if (e === document.activeElement) {
            var s = ht ?? G;
            if (i.has(s)) return
        }
        ye(e) && c === Ce(e.value) || e.type === "date" && !c && !e.value || c !== e.value && (e.value = c ?? "")
    })
}
const ke = new Set;

function La(e, t, a, r, i = r) {
    var c = a.getAttribute("type") === "checkbox",
        s = e;
    let f = !1;
    if (t !== null)
        for (var v of t) s = s[v] ?? (s[v] = []);
    s.push(a), ze(a, "change", () => {
        var n = a.__value;
        c && (n = Oe(s, n, a.checked)), i(n)
    }, () => i(c ? [] : null)), Se(() => {
        var n = r();
        if (qe && a.defaultChecked !== a.checked) {
            f = !0;
            return
        }
        c ? (n = n || [], a.checked = n.includes(a.__value)) : a.checked = _t(a.__value, n)
    }), mt(() => {
        var n = s.indexOf(a);
        n !== -1 && s.splice(n, 1)
    }), ke.has(s) || (ke.add(s), Re(() => {
        s.sort((n, p) => n.compareDocumentPosition(p) === 4 ? -1 : 1), ke.delete(s)
    })), Re(() => {
        if (f) {
            var n;
            if (c) n = Oe(s, n, a.checked);
            else {
                var p = s.find(g => g.checked);
                n = p == null ? void 0 : p.__value
            }
            i(n)
        }
    })
}

function Ia(e, t, a = t) {
    ze(e, "change", r => {
        var i = r ? e.defaultChecked : e.checked;
        a(i)
    }), (qe && e.defaultChecked !== e.checked || Xe(t) == null) && a(e.checked), Se(() => {
        var r = t();
        e.checked = !!r
    })
}

function Oe(e, t, a) {
    for (var r = new Set, i = 0; i < e.length; i += 1) e[i].checked && r.add(e[i].__value);
    return a || r.delete(t), Array.from(r)
}

function ye(e) {
    var t = e.type;
    return t === "number" || t === "range"
}

function Ce(e) {
    return e === "" ? null : +e
}
const qt = gt,
    Pt = () => "Add profile picture",
    Dt = () => "添加头像",
    za = (e = {}, t = {}) => (t.locale ?? N()) === "en" ? Pt() : Dt(),
    Mt = () => "Cancel",
    Tt = () => "取消",
    Sa = (e = {}, t = {}) => (t.locale ?? N()) === "en" ? Mt() : Tt(),
    Bt = () => "Close",
    Et = () => "关闭",
    Ht = (e = {}, t = {}) => (t.locale ?? N()) === "en" ? Bt() : Et(),
    Zt = () => "You gain 1 droplet per pixel painted and 500 droplets per level",
    Ut = () => "每绘制一个像素会获得一个水滴，每次升级会获得500水滴",
    At = (e = {}, t = {}) => (t.locale ?? N()) === "en" ? Zt() : Ut(),
    Rt = () => "Eraser",
    Ft = () => "擦除",
    Text3_EN = () => "Droplets",
    Text3_CN = () => "水滴",
    Text3 = (e = {}, t = {}) => (t.locale ?? N()) === "en" ? Text3_EN() : Text3_CN(),
    Text4_EN = () => "bonus",
    Text4_CN = () => "赠品",
    Text4 = (e = {}, t = {}) => (t.locale ?? N()) === "en" ? Text4_EN() : Text4_CN(),
    qa = (e = {}, t = {}) => (t.locale ?? N()) === "en" ? Rt() : Ft();
var jt = R('<svg><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');

function Ot(e, t) {
    let a = Y(t, ["$$slots", "$$events", "$$legacy"]);
    var r = jt();
    A(r, () => ({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 -960 960 960",
        fill: "currentColor",
        ...a
    })), _(e, r)
}
var Vt = R('<svg><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"></path></svg>');

function Ie(e, t) {
    let a = Y(t, ["$$slots", "$$events", "$$legacy"]);
    var r = Vt();
    A(r, () => ({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 -960 960 960",
        fill: "currentColor",
        ...a
    })), _(e, r)
}
var Xt = k('<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>'),
    Wt = k('<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-sm:hidden">'+Text3()+'</span></span> <!></span>'),
    Qt = k('<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pl-1 pr-1"><!></button>'),
    Gt = k('<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pl-1 pr-2"><!></span>');

function Kt(e, t) {
    Qe(t, !0);
    const a = v => {
        var n = Wt(),
            p = o(n);
        Ie(p, {
            class: "text-primary size-4.5"
        });
        var g = d(p, 2),
            P = o(g);
        U(), l(g);
        var x = d(g, 2);
        {
            var S = T => {
                var D = Xt(),
                    J = o(D);
                Ot(J, {
                    class: "size-4"
                }), l(D), _(T, D)
            };
            M(x, T => {
                r() && T(S)
            })
        }
        l(n), z(T => I(P, `${T??""} `), [() => t.value.toLocaleString("en-US")]), _(v, n)
    };
    let r = Ne(t, "button", 3, !0);
    var i = Ge(),
        c = pe(i);
    {
        var s = v => {
                var n = Qt();
                n.__click = () => {
                    It.dropletsDialogOpen = !0
                };
                var p = o(n);
                a(p), l(n), _(v, n)
            },
            f = v => {
                var n = Gt(),
                    p = o(n);
                a(p), l(n), _(v, n)
            };
        M(c, v => {
            r() ? v(s) : v(f, !1)
        })
    }
    _(e, i), Ke()
}
We(["click"]);
var Nt = R('<svg><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"></path></svg>');

function Yt(e, t) {
    let a = Y(t, ["$$slots", "$$events", "$$legacy"]);
    var r = Nt();
    A(r, () => ({
        xmlns: "http://www.w3.org/2000/svg",
        height: "24px",
        viewBox: "0 -960 960 960",
        width: "24px",
        fill: "currentColor",
        ...a
    })), _(e, r)
}
var Jt = R('<svg><path fill="#4db6ac" d="M11.9,12h-0.68l8.04-8.04c2.62-2.61,6.86-2.61,9.48,0L36.78,12H36.1c-1.6,0-3.11,0.62-4.24,1.76	l-6.8,6.77c-0.59,0.59-1.53,0.59-2.12,0l-6.8-6.77C15.01,12.62,13.5,12,11.9,12z"></path><path fill="#4db6ac" d="M36.1,36h0.68l-8.04,8.04c-2.62,2.61-6.86,2.61-9.48,0L11.22,36h0.68c1.6,0,3.11-0.62,4.24-1.76	l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36z"></path><path fill="#4db6ac" d="M44.04,28.74L38.78,34H36.1c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0	l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l-5.26-5.26c-2.61-2.62-2.61-6.86,0-9.48L9.22,14h2.68c1.07,0,2.07,0.42,2.83,1.17	l6.8,6.78c0.68,0.68,1.58,1.02,2.47,1.02s1.79-0.34,2.47-1.02l6.8-6.78C34.03,14.42,35.03,14,36.1,14h2.68l5.26,5.26	C46.65,21.88,46.65,26.12,44.04,28.74z"></path></svg>');

function Ve(e, t) {
    let a = Y(t, ["$$slots", "$$events", "$$legacy"]);
    var r = Jt();
    A(r, () => ({
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "100",
        height: "100",
        viewBox: "0 0 48 48",
        ...a
    })), _(e, r)
}
var $t = (e, t, a, r, i) => {
        b(t).show(), C(a, !0), Je.generatePixQrCode(r()).then(c => {
            C(i, c, !0)
        }).catch(c => {
            K.error(c.message)
        }).finally(() => {
            C(a, !1)
        })
    },
    ea = k('<div><div tabindex="0" class="btn btn-lg btn-primary h-10"> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 border-base-content/20 m-1 w-max rounded-xl border p-2 shadow"><li><form method="POST"><input type="hidden" name="lookup_key"/> <button class="flex items-center gap-1.5"><!> <span>Cartão ou Boleto</span></button></form></li> <li><button class="flex items-center gap-1.5"><!> <span>Pix</span></button></li></ul></div>'),
    ta = k('<form method="POST"><input type="hidden" name="lookup_key"/> <button class="btn btn-lg btn-primary mt-3 h-10" type="submit"> </button></form>'),
    aa = k('<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl px-4 py-6"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal">'+Text3()+'</span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <!></div>'),
    ra = k('<div class="flex flex-col gap-4"><section><div class="flex items-center gap-1"><!> <h3 class="text-xl font-bold">'+Text3()+'</h3> <div class="ml-auto mr-4"><!></div></div> <p class="text-base-content/80 mt-1 text-sm"> </p></section> <section><div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div></section></div>'),
    sa = (e, t) => {
        var a;
        navigator.clipboard.writeText(((a = b(t)) == null ? void 0 : a.pixCode) ?? ""), K.success("Código PIX copiado")
    },
    oa = async (e, t, a) => {
        var r, i, c;
        if (!b(t)) {
            K.info("Espere 1 minuto e recarrege a pagina");
            return
        }
        try {
            C(a, !0);
            const {
                paid: s
            } = await Je.getPixStatus(b(t).pixId);
            if (s) {
                const f = b(t).productId.toString(),
                    v = (c = (i = (r = zt.products[f]) == null ? void 0 : r.items) == null ? void 0 : i[0]) == null ? void 0 : c.amount;
                await ve.refresh(), v ? Fe(`payment/success?droplets=${v}`) : Fe("payment/success")
            } else K.info("Pagamento ainda não recebido. Desculpe a demora, tente novamente em instantes.", {
                duration: 1e5
            })
        } catch (s) {
            console.error(s), K.error("Error ao atualizar o status do pix. Tente recarregar a página.")
        } finally {
            C(a, !1)
        }
    }, la = k('<p class="text-base-content/80">Efetue o pagamento do PIX no valor de <span class="font-semibold"> </span></p> <section><div class="relative"><img class="pixelated w-70 aspect-square" alt="QR code PIX"/> <div class="center-absolute border-6 absolute size-[95%] border-black"></div></div></section> <section class="w-full"><span class="text-base-content/80 ml-4 text-sm font-semibold">Código</span> <div class="border-base-content/20 rounded-field flex w-full items-center gap-1 border-2 py-1.5 pl-4 pr-2.5"><input class="text-base-content/80 w-full min-w-10 grow text-sm font-medium" readonly=""/> <div class="h-10"><button class="btn btn-primary">Copiar</button></div></div></section> <section class="mt-2"><button class="btn btn-primary btn-lg">Fiz o pagamento</button></section>', 1), na = k('<div class="flex h-96 items-center justify-center"><span class="loading loading-spinner loading-xl"></span></div>'), ca = k('<dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-2xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button> </button></form></dialog> <dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-lg"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <div class="flex h-full flex-col items-center gap-4"><section><div class="flex items-center gap-2"><!> <h3 class="text-4xl font-bold">PIX</h3></div></section> <!></div></div></dialog>', 1);

function Pa(e, t) {
    Qe(t, !0);
    let a = Ne(t, "open", 15),
        r = ie(!1);
    kt(() => {
        const u = w => {
            w.key === "Escape" && a(!1)
        };
        return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u)
    });
    const i = Le(() => {
        var u, w;
        return ((w = (u = ve.data) == null ? void 0 : u.country) == null ? void 0 : w.toUpperCase()) === "BR"
    });
    let c = ie(null),
        s = ie(void 0),
        f = ie(!1);
    var v = ca(),
        n = pe(v),
        p = o(n),
        g = d(o(p), 2);
    {
        var P = u => {
            var w = ra(),
                B = o(w),
                E = o(B),
                $ = o(E);
            Ie($, {
                class: "text-primary size-6"
            });
            var H = d($, 4),
                ee = o(H);
            {
                let L = Le(() => {
                    var se;
                    return ((se = ve.data) == null ? void 0 : se.droplets) ?? 0
                });
                Kt(ee, {
                    get value() {
                        return b(L)
                    },
                    button: !1
                })
            }
            l(H), l(E);
            var te = d(E, 2),
                F = o(te, !0);
            l(te), l(B);
            var j = d(B, 2);
            {
                const L = (se, m) => {
                    let Me = () => m == null ? void 0 : m().droplets,
                        fe = () => m == null ? void 0 : m().bonus,
                        Te = () => m == null ? void 0 : m().price,
                        Be = () => m == null ? void 0 : m().stripeLookupkey,
                        st = () => m == null ? void 0 : m().productId,
                        ot = () => m == null ? void 0 : m().dropdownClass;
                    var _e = aa(),
                        me = o(_e),
                        Ee = o(me);
                    Ie(Ee, {
                        class: "mb-1 inline size-7"
                    });
                    var He = d(Ee, 2),
                        lt = o(He);
                    U(), l(He), l(me);
                    var be = d(me, 2),
                        Ze = o(be);
                    {
                        var nt = y => {
                            var h = wt();
                            z(q => I(h, `${q??""} ` + Text3()), [() => Me().toLocaleString("en-US")]), _(y, h)
                        };
                        M(Ze, y => {
                            fe() && y(nt)
                        })
                    }
                    var Ue = d(Ze, 2),
                        ct = o(Ue);
                    l(Ue), l(be);
                    var it = d(be, 2);
                    {
                        var dt = y => {
                                var h = ea(),
                                    q = o(h),
                                    W = o(q);
                                l(q);
                                var oe = d(q, 2),
                                    Q = o(oe),
                                    le = o(Q),
                                    he = o(le);
                                xe(he);
                                var ge = d(he, 2),
                                    pt = o(ge);
                                Yt(pt, {
                                    class: "inline size-5"
                                }), U(2), l(ge), l(le), l(Q);
                                var Ae = d(Q, 2),
                                    ne = o(Ae);
                                ne.__click = [$t, c, r, st, s];
                                var ut = o(ne);
                                Ve(ut, {
                                    class: "size-5"
                                }), U(2), l(ne), l(Ae), l(oe), l(h), z(ft => {
                                    Ye(h, 1, `dropdown mt-3 ${ot()??""}`), I(W, `R$${ft??""}`), de(le, "action", `${je}/payment/create-checkout-session`), we(he, Be()), ge.disabled = b(r), ne.disabled = b(r)
                                }, [() => (Te() * 4).toFixed(2).replace(".", ",")]), ce("submit", le, () => {
                                    C(r, !0), setTimeout(() => C(r, !1), 3e3)
                                }), _(y, h)
                            },
                            vt = y => {
                                var h = ta(),
                                    q = o(h);
                                xe(q);
                                var W = d(q, 2),
                                    oe = o(W);
                                l(W), l(h), z(Q => {
                                    de(h, "action", `${je}/payment/create-checkout-session`), we(q, Be()), W.disabled = b(r), I(oe, `￥ ${Q??""}`)
                                }, [() => Te().toFixed(2)]), ce("submit", h, () => {
                                    C(r, !0), setTimeout(() => C(r, !1), 3e3)
                                }), _(y, h)
                            };
                        M(it, y => {
                            b(i) || qt ? y(dt) : y(vt, !1)
                        })
                    }
                    l(_e), z((y, h) => {
                        I(lt, `${y??""} `), I(ct, `+${h??""} ` + Text4())
                    }, [() => (Me() + fe()).toLocaleString("en-US"), () => fe().toLocaleString("en-US")]), _(se, _e)
                };
                var Z = o(j),
                    O = o(Z);
                L(O, () => ({
                    price: 5,
                    droplets: 25e3,
                    bonus: 0,
                    stripeLookupkey: "droplets_5",
                    productId: 10,
                    dropdownClass: "dropdown-center"
                }));
                var ae = d(O, 2);
                L(ae, () => ({
                    price: 15,
                    droplets: 75e3,
                    bonus: 3750,
                    stripeLookupkey: "droplets_15",
                    productId: 20,
                    dropdownClass: "dropdown-center"
                }));
                var V = d(ae, 2);
                L(V, () => ({
                    price: 30,
                    droplets: 15e4,
                    bonus: 15e3,
                    stripeLookupkey: "droplets_30",
                    productId: 30,
                    dropdownClass: "dropdown-center"
                }));
                var X = d(V, 2);
                L(X, () => ({
                    price: 50,
                    droplets: 25e4,
                    bonus: 37500,
                    stripeLookupkey: "droplets_50",
                    productId: 40,
                    dropdownClass: "dropdown-center"
                }));
                var re = d(X, 2);
                L(re, () => ({
                    price: 75,
                    droplets: 375e3,
                    bonus: 75e3,
                    stripeLookupkey: "droplets_75",
                    productId: 50,
                    dropdownClass: "dropdown-center"
                }));
                var rt = d(re, 2);
                L(rt, () => ({
                    price: 100,
                    droplets: 5e5,
                    bonus: 125e3,
                    stripeLookupkey: "droplets_100",
                    productId: 60,
                    dropdownClass: "max-sm:dropdown-top dropdown-center"
                })), l(Z), l(j)
            }
            l(w), z(L => I(F, L), [() => At()]), _(u, w)
        };
        M(g, u => {
            ve.data && u(P)
        })
    }
    l(p);
    var x = d(p, 2),
        S = o(x),
        T = o(S, !0);
    l(S), l(x), l(n), yt(n, () => u => {
        xt(() => {
            a() ? u.show() : u.close()
        })
    });
    var D = d(n, 2),
        J = o(D),
        Pe = d(o(J), 2),
        ue = o(Pe),
        De = o(ue),
        $e = o(De);
    Ve($e, {
        class: "size-10"
    }), U(2), l(De), l(ue);
    var et = d(ue, 2);
    {
        var tt = u => {
                var w = la(),
                    B = pe(w),
                    E = d(o(B)),
                    $ = o(E);
                l(E), l(B);
                var H = d(B, 2),
                    ee = o(H),
                    te = o(ee);
                U(2), l(ee), l(H);
                var F = d(H, 2),
                    j = d(o(F), 2),
                    Z = o(j);
                xe(Z);
                var O = d(Z, 2),
                    ae = o(O);
                ae.__click = [sa, s], l(O), l(j), l(F);
                var V = d(F, 2),
                    X = o(V);
                X.__click = [oa, s, f], l(V), z(re => {
                    I($, `R$${re??""}`), de(te, "src", b(s).qrCode), we(Z, b(s).pixCode), X.disabled = b(f)
                }, [() => (b(s).price / 100).toFixed(2).replace(".", ",")]), _(u, w)
            },
            at = u => {
                var w = na();
                _(u, w)
            };
        M(et, u => {
            b(s) ? u(tt) : u(at, !1)
        })
    }
    l(Pe), l(J), l(D), Lt(D, u => C(c, u), () => b(c)), z(u => I(T, u), [() => Ht()]), ce("close", n, () => {
        a(!1)
    }), ce("close", D, () => {
        setTimeout(() => {
            C(s, void 0)
        }, 300)
    }), _(e, v), Ke()
}
We(["click"]);
var ia = R('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>'),
    da = R('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>');

function Da(e, t) {
    let a = Y(t, ["$$slots", "$$events", "$$legacy", "filled"]);
    var r = Ge(),
        i = pe(r);
    {
        var c = f => {
                var v = ia();
                A(v, () => ({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 -960 960 960",
                    fill: "currentColor",
                    ...a
                })), _(f, v)
            },
            s = f => {
                var v = da();
                A(v, () => ({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 -960 960 960",
                    fill: "currentColor",
                    ...a
                })), _(f, v)
            };
        M(i, f => {
            t.filled ? f(c) : f(s, !1)
        })
    }
    _(e, r)
}

function Ma([e, t], [a, r]) {
    e = Math.floor(e), t = Math.floor(t), a = Math.floor(a), r = Math.floor(r);
    const i = [],
        c = Math.abs(a - e),
        s = Math.abs(r - t),
        f = e < a ? 1 : -1,
        v = t < r ? 1 : -1;
    let n = c - s,
        p = e,
        g = t;
    for (; i.push([p, g]), !(p === a && g === r);) {
        const P = 2 * n;
        P > -s && (n -= s, p += f), P < c && (n += c, g += v)
    }
    return i
}
var va = k('<img class="pixelated bg-base-200" alt="User profile"/>'),
    pa = k('<div class="relative w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-zhy0pt"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <div> </div></div>');

function Ta(e, t) {
    const a = Le(() => t.level % 1 * 360);
    var r = pa(),
        i = d(o(r), 2),
        c = d(i, 2),
        s = o(c),
        f = o(s);
    {
        var v = x => {
                St(x, {
                    get userId() {
                        return t.userId
                    }
                })
            },
            n = x => {
                var S = va();
                z(() => de(S, "src", t.pictureUrl)), _(x, S)
            };
        M(f, x => {
            t.pictureUrl ? x(n, !1) : x(v)
        })
    }
    l(s), l(c);
    var p = d(c, 2);
    let g;
    var P = o(p, !0);
    l(p), l(r), z((x, S) => {
        Ct(i, `--angle: ${b(a)??""}deg; --color: var(--color-secondary)`), g = Ye(p, 1, "text-primary-content bg-secondary absolute bottom-0 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold", null, g, x), I(P, S)
    }, [() => ({
        "left-0": t.level > 99,
        "-left-1": t.level > 99
    }), () => Math.floor(t.level)]), _(e, r)
}
export {
    Ot as A, Kt as D, Da as I, Ta as P, Ie as a, Pa as b, za as c, Sa as d, qa as e, Ht as f, Ca as g, La as h, qt as i, Ia as j, Ma as r
};
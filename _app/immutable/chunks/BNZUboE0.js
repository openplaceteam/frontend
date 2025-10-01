import {
    i as V,
    a7 as k,
    k as Y,
    M as P,
    h as p,
    a3 as Z,
    b5 as Q,
    J as W,
    K as X,
    G as m,
    b6 as x,
    b7 as rr,
    b8 as fr,
    b9 as ir,
    g as ar,
    ba as er,
    bb as tr,
    V as j,
    bc as ur,
    bd as sr,
    at as or,
    be as lr,
    bf as nr,
    aM as cr,
    bg as dr,
    bh as vr,
    bi as br,
} from "./BDALf20I.js";
(function () {
    try {
        var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        r.SENTRY_RELEASE = { id: "35111e7039e8c68cc677344b7f7c6971567f6820" };
    } catch {}
})();
try {
    (function () {
        var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            f = new r.Error().stack;
        f && ((r._sentryDebugIds = r._sentryDebugIds || {}), (r._sentryDebugIds[f] = "79114daf-27cc-4daf-a558-677aac9a6589"), (r._sentryDebugIdIdentifier = "sentry-dbid-79114daf-27cc-4daf-a558-677aac9a6589"));
    })();
} catch {}
function gr(r, f) {
    var i = void 0,
        a;
    V(() => {
        i !== (i = f()) &&
            (a && (k(a), (a = null)),
            i &&
                (a = Y(() => {
                    P(() => i(r));
                })));
    });
}
function G(r) {
    var f,
        i,
        a = "";
    if (typeof r == "string" || typeof r == "number") a += r;
    else if (typeof r == "object")
        if (Array.isArray(r)) {
            var e = r.length;
            for (f = 0; f < e; f++) r[f] && (i = G(r[f])) && (a && (a += " "), (a += i));
        } else for (i in r) r[i] && (a && (a += " "), (a += i));
    return a;
}
function hr() {
    for (var r, f, i = 0, a = "", e = arguments.length; i < e; i++) (r = arguments[i]) && (f = G(r)) && (a && (a += " "), (a += f));
    return a;
}
function _r(r) {
    return typeof r == "object" ? hr(r) : r ?? "";
}
const q = [
    ...` 	
\r\f \v\uFEFF`,
];
function Ar(r, f, i) {
    var a = r == null ? "" : "" + r;
    if ((f && (a = a ? a + " " + f : f), i)) {
        for (var e in i)
            if (i[e]) a = a ? a + " " + e : e;
            else if (a.length)
                for (var t = e.length, u = 0; (u = a.indexOf(e, u)) >= 0; ) {
                    var s = u + t;
                    (u === 0 || q.includes(a[u - 1])) && (s === a.length || q.includes(a[s])) ? (a = (u === 0 ? "" : a.substring(0, u)) + a.substring(s + 1)) : (u = s);
                }
    }
    return a === "" ? null : a;
}
function D(r, f = !1) {
    var i = f ? " !important;" : ";",
        a = "";
    for (var e in r) {
        var t = r[e];
        t != null && t !== "" && (a += " " + e + ": " + t + i);
    }
    return a;
}
function M(r) {
    return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function Sr(r, f) {
    if (f) {
        var i = "",
            a,
            e;
        if ((Array.isArray(f) ? ((a = f[0]), (e = f[1])) : (a = f), r)) {
            r = String(r)
                .replaceAll(/\s*\/\*.*?\*\/\s*/g, "")
                .trim();
            var t = !1,
                u = 0,
                s = !1,
                d = [];
            a && d.push(...Object.keys(a).map(M)), e && d.push(...Object.keys(e).map(M));
            var l = 0,
                A = -1;
            const b = r.length;
            for (var v = 0; v < b; v++) {
                var c = r[v];
                if ((s ? c === "/" && r[v - 1] === "*" && (s = !1) : t ? t === c && (t = !1) : c === "/" && r[v + 1] === "*" ? (s = !0) : c === '"' || c === "'" ? (t = c) : c === "(" ? u++ : c === ")" && u--, !s && t === !1 && u === 0)) {
                    if (c === ":" && A === -1) A = v;
                    else if (c === ";" || v === b - 1) {
                        if (A !== -1) {
                            var y = M(r.substring(l, A).trim());
                            if (!d.includes(y)) {
                                c !== ";" && v++;
                                var S = r.substring(l, v).trim();
                                i += " " + S + ";";
                            }
                        }
                        (l = v + 1), (A = -1);
                    }
                }
            }
        }
        return a && (i += D(a)), e && (i += D(e, !0)), (i = i.trim()), i === "" ? null : i;
    }
    return r == null ? null : String(r);
}
function pr(r, f, i, a, e, t) {
    var u = r.__className;
    if (p || u !== i || u === void 0) {
        var s = Ar(i, a, t);
        (!p || s !== r.getAttribute("class")) && (s == null ? r.removeAttribute("class") : f ? (r.className = s) : r.setAttribute("class", s)), (r.__className = i);
    } else if (t && e !== t)
        for (var d in t) {
            var l = !!t[d];
            (e == null || l !== !!e[d]) && r.classList.toggle(d, l);
        }
    return t;
}
function C(r, f = {}, i, a) {
    for (var e in i) {
        var t = i[e];
        f[e] !== t && (i[e] == null ? r.style.removeProperty(e) : r.style.setProperty(e, t, a));
    }
}
function yr(r, f, i, a) {
    var e = r.__style;
    if (p || e !== f) {
        var t = Sr(f, a);
        (!p || t !== r.getAttribute("style")) && (t == null ? r.removeAttribute("style") : (r.style.cssText = t)), (r.__style = f);
    } else a && (Array.isArray(a) ? (C(r, i == null ? void 0 : i[0], a[0]), C(r, i == null ? void 0 : i[1], a[1], "important")) : C(r, i, a));
    return a;
}
function I(r, f, i = !1) {
    if (r.multiple) {
        if (f == null) return;
        if (!Z(f)) return Q();
        for (var a of r.options) a.selected = f.includes(w(a));
        return;
    }
    for (a of r.options) {
        var e = w(a);
        if (W(e, f)) {
            a.selected = !0;
            return;
        }
    }
    (!i || f !== void 0) && (r.selectedIndex = -1);
}
function H(r) {
    var f = new MutationObserver(() => {
        I(r, r.__value);
    });
    f.observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["value"] }),
        X(() => {
            f.disconnect();
        });
}
function wr(r, f, i = f) {
    var a = !0;
    m(r, "change", (e) => {
        var t = e ? "[selected]" : ":checked",
            u;
        if (r.multiple) u = [].map.call(r.querySelectorAll(t), w);
        else {
            var s = r.querySelector(t) ?? r.querySelector("option:not([disabled])");
            u = s && w(s);
        }
        i(u);
    }),
        P(() => {
            var e = f();
            if ((I(r, e, a), a && e === void 0)) {
                var t = r.querySelector(":checked");
                t !== null && ((e = w(t)), i(e));
            }
            (r.__value = e), (a = !1);
        }),
        H(r);
}
function w(r) {
    return "__value" in r ? r.__value : r.value;
}
const N = Symbol("class"),
    T = Symbol("style"),
    K = Symbol("is custom element"),
    B = Symbol("is html");
function Ir(r) {
    if (p) {
        var f = !1,
            i = () => {
                if (!f) {
                    if (((f = !0), r.hasAttribute("value"))) {
                        var a = r.value;
                        L(r, "value", null), (r.value = a);
                    }
                    if (r.hasAttribute("checked")) {
                        var e = r.checked;
                        L(r, "checked", null), (r.checked = e);
                    }
                }
            };
        (r.__on_r = i), dr(i), vr();
    }
}
function Lr(r, f) {
    var i = R(r);
    i.value === (i.value = f ?? void 0) || (r.value === f && (f !== 0 || r.nodeName !== "PROGRESS")) || (r.value = f ?? "");
}
function Er(r, f) {
    f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function L(r, f, i, a) {
    var e = R(r);
    (p && ((e[f] = r.getAttribute(f)), f === "src" || f === "srcset" || (f === "href" && r.nodeName === "LINK"))) ||
        (e[f] !== (e[f] = i) && (f === "loading" && (r[ir] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && z(r).includes(f) ? (r[f] = i) : r.setAttribute(f, i)));
}
function Nr(r, f, i, a, e = !1) {
    var t = R(r),
        u = t[K],
        s = !t[B];
    let d = p && u;
    d && j(!1);
    var l = f || {},
        A = r.tagName === "OPTION";
    for (var v in f) v in i || (i[v] = null);
    i.class ? (i.class = _r(i.class)) : (a || i[N]) && (i.class = null), i[T] && (i.style ?? (i.style = null));
    var c = z(r);
    for (const o in i) {
        let n = i[o];
        if (A && o === "value" && n == null) {
            (r.value = r.__value = ""), (l[o] = n);
            continue;
        }
        if (o === "class") {
            var y = r.namespaceURI === "http://www.w3.org/1999/xhtml";
            pr(r, y, n, a, f == null ? void 0 : f[N], i[N]), (l[o] = n), (l[N] = i[N]);
            continue;
        }
        if (o === "style") {
            yr(r, n, f == null ? void 0 : f[T], i[T]), (l[o] = n), (l[T] = i[T]);
            continue;
        }
        var S = l[o];
        if (!(n === S && !(n === void 0 && r.hasAttribute(o)))) {
            l[o] = n;
            var b = o[0] + o[1];
            if (b !== "$$")
                if (b === "on") {
                    const _ = {},
                        E = "$$" + o;
                    let g = o.slice(2);
                    var O = br(g);
                    if ((ur(g) && ((g = g.slice(0, -7)), (_.capture = !0)), !O && S)) {
                        if (n != null) continue;
                        r.removeEventListener(g, l[E], _), (l[E] = null);
                    }
                    if (n != null)
                        if (O) (r[`__${g}`] = n), or([g]);
                        else {
                            let F = function (J) {
                                l[o].call(this, J);
                            };
                            l[E] = sr(g, r, F, _);
                        }
                    else O && (r[`__${g}`] = void 0);
                } else if (o === "style") L(r, o, n);
                else if (o === "autofocus") lr(r, !!n);
                else if (!u && (o === "__value" || (o === "value" && n != null))) r.value = r.__value = n;
                else if (o === "selected" && A) Er(r, n);
                else {
                    var h = o;
                    s || (h = nr(h));
                    var $ = h === "defaultValue" || h === "defaultChecked";
                    if (n == null && !u && !$)
                        if (((t[o] = null), h === "value" || h === "checked")) {
                            let _ = r;
                            const E = f === void 0;
                            if (h === "value") {
                                let g = _.defaultValue;
                                _.removeAttribute(h), (_.defaultValue = g), (_.value = _.__value = E ? g : null);
                            } else {
                                let g = _.defaultChecked;
                                _.removeAttribute(h), (_.defaultChecked = g), (_.checked = E ? g : !1);
                            }
                        } else r.removeAttribute(o);
                    else $ || (c.includes(h) && (u || typeof n != "string")) ? ((r[h] = n), h in t && (t[h] = cr)) : typeof n != "function" && L(r, h, n);
                }
        }
    }
    return d && j(!0), l;
}
function Or(r, f, i = [], a = [], e, t = !1) {
    x(i, a, (u) => {
        var s = void 0,
            d = {},
            l = r.nodeName === "SELECT",
            A = !1;
        if (
            (V(() => {
                var c = f(...u.map(ar)),
                    y = Nr(r, s, c, e, t);
                A && l && "value" in c && I(r, c.value);
                for (let b of Object.getOwnPropertySymbols(d)) c[b] || k(d[b]);
                for (let b of Object.getOwnPropertySymbols(c)) {
                    var S = c[b];
                    b.description === er && (!s || S !== s[b]) && (d[b] && k(d[b]), (d[b] = Y(() => gr(r, () => S)))), (y[b] = S);
                }
                s = y;
            }),
            l)
        ) {
            var v = r;
            P(() => {
                I(v, s.value, !0), H(v);
            });
        }
        A = !0;
    });
}
function R(r) {
    return r.__attributes ?? (r.__attributes = { [K]: r.nodeName.includes("-"), [B]: r.namespaceURI === rr });
}
var U = new Map();
function z(r) {
    var f = U.get(r.nodeName);
    if (f) return f;
    U.set(r.nodeName, (f = []));
    for (var i, a = r, e = Element.prototype; e !== a; ) {
        i = tr(a);
        for (var t in i) i[t].set && f.push(t);
        a = fr(a);
    }
    return f;
}
export { N as C, T as S, pr as a, Or as b, _r as c, wr as d, yr as e, gr as f, Lr as g, hr as h, Ir as r, L as s };

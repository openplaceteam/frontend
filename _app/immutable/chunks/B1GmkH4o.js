import {
    g as D,
    a0 as M,
    j as H,
    D as B,
    h as N,
    Y as F,
    aV as W,
    aW as X,
    ao as J,
    aX as Q,
    aY as m,
    aZ as x,
    a_ as rr,
    A as ir,
    a$ as fr,
    b0 as ar,
    O as R,
    b1 as tr,
    b2 as sr,
    an as ur,
    b3 as er,
    b4 as or,
    aC as lr,
    b5 as cr,
    b6 as nr,
    b7 as vr,
} from "./DUoKDNpf.js";
function dr(r, f) {
    var i = void 0,
        a;
    D(() => {
        i !== (i = f()) &&
            (a && (M(a), (a = null)),
            i &&
                (a = H(() => {
                    B(() => i(r));
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
            var t = r.length;
            for (f = 0; f < t; f++) r[f] && (i = G(r[f])) && (a && (a += " "), (a += i));
        } else for (i in r) r[i] && (a && (a += " "), (a += i));
    return a;
}
function br() {
    for (var r, f, i = 0, a = "", t = arguments.length; i < t; i++) (r = arguments[i]) && (f = G(r)) && (a && (a += " "), (a += f));
    return a;
}
function gr(r) {
    return typeof r == "object" ? br(r) : r ?? "";
}
const Y = [
    ...` 	
\r\f \v\uFEFF`,
];
function hr(r, f, i) {
    var a = r == null ? "" : "" + r;
    if ((f && (a = a ? a + " " + f : f), i)) {
        for (var t in i)
            if (i[t]) a = a ? a + " " + t : t;
            else if (a.length)
                for (var s = t.length, e = 0; (e = a.indexOf(t, e)) >= 0; ) {
                    var o = e + s;
                    (e === 0 || Y.includes(a[e - 1])) && (o === a.length || Y.includes(a[o])) ? (a = (e === 0 ? "" : a.substring(0, e)) + a.substring(o + 1)) : (e = o);
                }
    }
    return a === "" ? null : a;
}
function k(r, f = !1) {
    var i = f ? " !important;" : ";",
        a = "";
    for (var t in r) {
        var s = r[t];
        s != null && s !== "" && (a += " " + t + ": " + s + i);
    }
    return a;
}
function C(r) {
    return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function Ar(r, f) {
    if (f) {
        var i = "",
            a,
            t;
        if ((Array.isArray(f) ? ((a = f[0]), (t = f[1])) : (a = f), r)) {
            r = String(r)
                .replaceAll(/\s*\/\*.*?\*\/\s*/g, "")
                .trim();
            var s = !1,
                e = 0,
                o = !1,
                v = [];
            a && v.push(...Object.keys(a).map(C)), t && v.push(...Object.keys(t).map(C));
            var l = 0,
                _ = -1;
            const b = r.length;
            for (var d = 0; d < b; d++) {
                var n = r[d];
                if ((o ? n === "/" && r[d - 1] === "*" && (o = !1) : s ? s === n && (s = !1) : n === "/" && r[d + 1] === "*" ? (o = !0) : n === '"' || n === "'" ? (s = n) : n === "(" ? e++ : n === ")" && e--, !o && s === !1 && e === 0)) {
                    if (n === ":" && _ === -1) _ = d;
                    else if (n === ";" || d === b - 1) {
                        if (_ !== -1) {
                            var O = C(r.substring(l, _).trim());
                            if (!v.includes(O)) {
                                n !== ";" && d++;
                                var S = r.substring(l, d).trim();
                                i += " " + S + ";";
                            }
                        }
                        (l = d + 1), (_ = -1);
                    }
                }
            }
        }
        return a && (i += k(a)), t && (i += k(t, !0)), (i = i.trim()), i === "" ? null : i;
    }
    return r == null ? null : String(r);
}
function _r(r, f, i, a, t, s) {
    var e = r.__className;
    if (N || e !== i || e === void 0) {
        var o = hr(i, a, s);
        (!N || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : f ? (r.className = o) : r.setAttribute("class", o)), (r.__className = i);
    } else if (s && t !== s)
        for (var v in s) {
            var l = !!s[v];
            (t == null || l !== !!t[v]) && r.classList.toggle(v, l);
        }
    return s;
}
function w(r, f = {}, i, a) {
    for (var t in i) {
        var s = i[t];
        f[t] !== s && (i[t] == null ? r.style.removeProperty(t) : r.style.setProperty(t, s, a));
    }
}
function Sr(r, f, i, a) {
    var t = r.__style;
    if (N || t !== f) {
        var s = Ar(f, a);
        (!N || s !== r.getAttribute("style")) && (s == null ? r.removeAttribute("style") : (r.style.cssText = s)), (r.__style = f);
    } else a && (Array.isArray(a) ? (w(r, i == null ? void 0 : i[0], a[0]), w(r, i == null ? void 0 : i[1], a[1], "important")) : w(r, i, a));
    return a;
}
function $(r, f, i = !1) {
    if (r.multiple) {
        if (f == null) return;
        if (!F(f)) return W();
        for (var a of r.options) a.selected = f.includes(U(a));
        return;
    }
    for (a of r.options) {
        var t = U(a);
        if (X(t, f)) {
            a.selected = !0;
            return;
        }
    }
    (!i || f !== void 0) && (r.selectedIndex = -1);
}
function Nr(r) {
    var f = new MutationObserver(() => {
        $(r, r.__value);
    });
    f.observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["value"] }),
        J(() => {
            f.disconnect();
        });
}
function U(r) {
    return "__value" in r ? r.__value : r.value;
}
const L = Symbol("class"),
    T = Symbol("style"),
    K = Symbol("is custom element"),
    Z = Symbol("is html");
function Tr(r) {
    if (N) {
        var f = !1,
            i = () => {
                if (!f) {
                    if (((f = !0), r.hasAttribute("value"))) {
                        var a = r.value;
                        p(r, "value", null), (r.value = a);
                    }
                    if (r.hasAttribute("checked")) {
                        var t = r.checked;
                        p(r, "checked", null), (r.checked = t);
                    }
                }
            };
        (r.__on_r = i), nr(i), vr();
    }
}
function pr(r, f) {
    var i = j(r);
    i.value === (i.value = f ?? void 0) || (r.value === f && (f !== 0 || r.nodeName !== "PROGRESS")) || (r.value = f ?? "");
}
function Or(r, f) {
    f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function p(r, f, i, a) {
    var t = j(r);
    (N && ((t[f] = r.getAttribute(f)), f === "src" || f === "srcset" || (f === "href" && r.nodeName === "LINK"))) ||
        (t[f] !== (t[f] = i) && (f === "loading" && (r[rr] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && q(r).includes(f) ? (r[f] = i) : r.setAttribute(f, i)));
}
function Er(r, f, i, a, t = !1) {
    var s = j(r),
        e = s[K],
        o = !s[Z];
    let v = N && e;
    v && R(!1);
    var l = f || {},
        _ = r.tagName === "OPTION";
    for (var d in f) d in i || (i[d] = null);
    i.class ? (i.class = gr(i.class)) : (a || i[L]) && (i.class = null), i[T] && (i.style ?? (i.style = null));
    var n = q(r);
    for (const u in i) {
        let c = i[u];
        if (_ && u === "value" && c == null) {
            (r.value = r.__value = ""), (l[u] = c);
            continue;
        }
        if (u === "class") {
            var O = r.namespaceURI === "http://www.w3.org/1999/xhtml";
            _r(r, O, c, a, f == null ? void 0 : f[L], i[L]), (l[u] = c), (l[L] = i[L]);
            continue;
        }
        if (u === "style") {
            Sr(r, c, f == null ? void 0 : f[T], i[T]), (l[u] = c), (l[T] = i[T]);
            continue;
        }
        var S = l[u];
        if (!(c === S && !(c === void 0 && r.hasAttribute(u)))) {
            l[u] = c;
            var b = u[0] + u[1];
            if (b !== "$$")
                if (b === "on") {
                    const A = {},
                        E = "$$" + u;
                    let g = u.slice(2);
                    var I = cr(g);
                    if ((tr(g) && ((g = g.slice(0, -7)), (A.capture = !0)), !I && S)) {
                        if (c != null) continue;
                        r.removeEventListener(g, l[E], A), (l[E] = null);
                    }
                    if (c != null)
                        if (I) (r[`__${g}`] = c), ur([g]);
                        else {
                            let y = function (z) {
                                l[u].call(this, z);
                            };
                            l[E] = sr(g, r, y, A);
                        }
                    else I && (r[`__${g}`] = void 0);
                } else if (u === "style") p(r, u, c);
                else if (u === "autofocus") er(r, !!c);
                else if (!e && (u === "__value" || (u === "value" && c != null))) r.value = r.__value = c;
                else if (u === "selected" && _) Or(r, c);
                else {
                    var h = u;
                    o || (h = or(h));
                    var P = h === "defaultValue" || h === "defaultChecked";
                    if (c == null && !e && !P)
                        if (((s[u] = null), h === "value" || h === "checked")) {
                            let A = r;
                            const E = f === void 0;
                            if (h === "value") {
                                let g = A.defaultValue;
                                A.removeAttribute(h), (A.defaultValue = g), (A.value = A.__value = E ? g : null);
                            } else {
                                let g = A.defaultChecked;
                                A.removeAttribute(h), (A.defaultChecked = g), (A.checked = E ? g : !1);
                            }
                        } else r.removeAttribute(u);
                    else P || (n.includes(h) && (e || typeof c != "string")) ? ((r[h] = c), h in s && (s[h] = lr)) : typeof c != "function" && p(r, h, c);
                }
        }
    }
    return v && R(!0), l;
}
function Ir(r, f, i = [], a = [], t, s = !1) {
    Q(i, a, (e) => {
        var o = void 0,
            v = {},
            l = r.nodeName === "SELECT",
            _ = !1;
        if (
            (D(() => {
                var n = f(...e.map(ir)),
                    O = Er(r, o, n, t, s);
                _ && l && "value" in n && $(r, n.value);
                for (let b of Object.getOwnPropertySymbols(v)) n[b] || M(v[b]);
                for (let b of Object.getOwnPropertySymbols(n)) {
                    var S = n[b];
                    b.description === fr && (!o || S !== o[b]) && (v[b] && M(v[b]), (v[b] = H(() => dr(r, () => S)))), (O[b] = S);
                }
                o = O;
            }),
            l)
        ) {
            var d = r;
            B(() => {
                $(d, o.value, !0), Nr(d);
            });
        }
        _ = !0;
    });
}
function j(r) {
    return r.__attributes ?? (r.__attributes = { [K]: r.nodeName.includes("-"), [Z]: r.namespaceURI === m });
}
var V = new Map();
function q(r) {
    var f = V.get(r.nodeName);
    if (f) return f;
    V.set(r.nodeName, (f = []));
    for (var i, a = r, t = Element.prototype; t !== a; ) {
        i = ar(a);
        for (var s in i) i[s].set && f.push(s);
        a = x(a);
    }
    return f;
}
export { L as C, T as S, Ir as a, p as b, gr as c, Sr as d, dr as e, pr as f, br as g, Tr as r, _r as s };

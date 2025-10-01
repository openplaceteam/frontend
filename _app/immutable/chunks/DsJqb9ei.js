var sr = Object.defineProperty;
var Re = (e) => {
    throw TypeError(e);
};
var nr = (e, r, o) => (r in e ? sr(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[r] = o));
var Pe = (e, r, o) => nr(e, typeof r != "symbol" ? r + "" : r, o),
    ae = (e, r, o) => r.has(e) || Re("Cannot " + o);
var ie = (e, r, o) => (ae(e, r, "read from private field"), o ? o.call(e) : r.get(e)),
    Q = (e, r, o) => (r.has(e) ? Re("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, o)),
    Te = (e, r, o, t) => (ae(e, r, "write to private field"), t ? t.call(e, o) : r.set(e, o), o),
    le = (e, r, o) => (ae(e, r, "access private method"), o);
import "./Bzak7iHL.js";
import { p as $e, f as we, d as me, r as pe, t as ue, b as re, c as He, q as ar } from "./DUoKDNpf.js";
import { i as ir, r as lr } from "./5NasrULQ.js";
import { s as We, c as cr, b as dr, a as mr } from "./B1GmkH4o.js";
import { h as pr } from "./BMKgGW48.js";
import { S as ge } from "./1lh-LSvX.js";
const Ee = 9,
    ur = 95,
    gr = 45,
    Ge = 5;
function br(e) {
    return e.split("").reduce((r, o) => (r ^ o.charCodeAt(0)) * -Ge, Ge) >>> 2;
}
function qe(e = "", r = ur, o = gr, t = br) {
    const s = t(e),
        i = (s % Ee) * (360 / Ee);
    return (
        [...Array(e ? 25 : 0)].reduce(
            (l, p, c) => (s & (1 << c % 15) ? l + `<rect x="${c > 14 ? 7 - ~~(c / 5) : ~~(c / 5)}" y="${c % 5}" width="1" height="1"/>` : l),
            `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${i} ${r}% ${o}%)" shape-rendering="crispEdges">`
        ) + "</svg>"
    );
}
var je, A, oe, H, W, be, Fe;
((je = globalThis.customElements) != null && je.get("minidenticon-svg")) ||
    (Fe = globalThis.customElements) == null ||
    Fe.define(
        "minidenticon-svg",
        ((A = class extends HTMLElement {
            constructor() {
                super(...arguments);
                Q(this, W);
                Q(this, H, !1);
            }
            connectedCallback() {
                le(this, W, be).call(this), Te(this, H, !0);
            }
            attributeChangedCallback() {
                ie(this, H) && le(this, W, be).call(this);
            }
        }),
        (oe = new WeakMap()),
        (H = new WeakMap()),
        (W = new WeakSet()),
        (be = function () {
            var s;
            const o = A.observedAttributes.map((i) => this.getAttribute(i) || void 0),
                t = o.join(",");
            this.innerHTML = (s = ie(A, oe))[t] ?? (s[t] = qe(...o));
        }),
        Pe(A, "observedAttributes", ["username", "saturation", "lightness"]),
        Q(A, oe, {}),
        A)
    );
var fr = we("<div><!></div>");
function hr(e, r) {
    $e(r, !0);
    var o = fr(),
        t = me(o);
    pr(t, () => qe(r.userId.toString(), 95, 45)), pe(o), ue(() => We(o, 1, `bg-base-200 minidenticon ${r.class ?? "" ?? ""}`)), re(e, o), He();
}
const ve = "-",
    xr = (e) => {
        const r = vr(e),
            { conflictingClassGroups: o, conflictingClassGroupModifiers: t } = e;
        return {
            getClassGroupId: (l) => {
                const p = l.split(ve);
                return p[0] === "" && p.length !== 1 && p.shift(), De(p, r) || wr(l);
            },
            getConflictingClassGroupIds: (l, p) => {
                const c = o[l] || [];
                return p && t[l] ? [...c, ...t[l]] : c;
            },
        };
    },
    De = (e, r) => {
        var l;
        if (e.length === 0) return r.classGroupId;
        const o = e[0],
            t = r.nextPart.get(o),
            s = t ? De(e.slice(1), t) : void 0;
        if (s) return s;
        if (r.validators.length === 0) return;
        const i = e.join(ve);
        return (l = r.validators.find(({ validator: p }) => p(i))) == null ? void 0 : l.classGroupId;
    },
    Le = /^\[(.+)\]$/,
    wr = (e) => {
        if (Le.test(e)) {
            const r = Le.exec(e)[1],
                o = r == null ? void 0 : r.substring(0, r.indexOf(":"));
            if (o) return "arbitrary.." + o;
        }
    },
    vr = (e) => {
        const { theme: r, classGroups: o } = e,
            t = { nextPart: new Map(), validators: [] };
        for (const s in o) fe(o[s], t, s, r);
        return t;
    },
    fe = (e, r, o, t) => {
        e.forEach((s) => {
            if (typeof s == "string") {
                const i = s === "" ? r : Ne(r, s);
                i.classGroupId = o;
                return;
            }
            if (typeof s == "function") {
                if (kr(s)) {
                    fe(s(t), r, o, t);
                    return;
                }
                r.validators.push({ validator: s, classGroupId: o });
                return;
            }
            Object.entries(s).forEach(([i, l]) => {
                fe(l, Ne(r, i), o, t);
            });
        });
    },
    Ne = (e, r) => {
        let o = e;
        return (
            r.split(ve).forEach((t) => {
                o.nextPart.has(t) || o.nextPart.set(t, { nextPart: new Map(), validators: [] }), (o = o.nextPart.get(t));
            }),
            o
        );
    },
    kr = (e) => e.isThemeGetter,
    yr = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let r = 0,
            o = new Map(),
            t = new Map();
        const s = (i, l) => {
            o.set(i, l), r++, r > e && ((r = 0), (t = o), (o = new Map()));
        };
        return {
            get(i) {
                let l = o.get(i);
                if (l !== void 0) return l;
                if ((l = t.get(i)) !== void 0) return s(i, l), l;
            },
            set(i, l) {
                o.has(i) ? o.set(i, l) : s(i, l);
            },
        };
    },
    he = "!",
    xe = ":",
    zr = xe.length,
    Cr = (e) => {
        const { prefix: r, experimentalParseClassName: o } = e;
        let t = (s) => {
            const i = [];
            let l = 0,
                p = 0,
                c = 0,
                f;
            for (let x = 0; x < s.length; x++) {
                let y = s[x];
                if (l === 0 && p === 0) {
                    if (y === xe) {
                        i.push(s.slice(c, x)), (c = x + zr);
                        continue;
                    }
                    if (y === "/") {
                        f = x;
                        continue;
                    }
                }
                y === "[" ? l++ : y === "]" ? l-- : y === "(" ? p++ : y === ")" && p--;
            }
            const h = i.length === 0 ? s : s.substring(c),
                k = Mr(h),
                S = k !== h,
                I = f && f > c ? f - c : void 0;
            return { modifiers: i, hasImportantModifier: S, baseClassName: k, maybePostfixModifierPosition: I };
        };
        if (r) {
            const s = r + xe,
                i = t;
            t = (l) => (l.startsWith(s) ? i(l.substring(s.length)) : { isExternal: !0, modifiers: [], hasImportantModifier: !1, baseClassName: l, maybePostfixModifierPosition: void 0 });
        }
        if (o) {
            const s = t;
            t = (i) => o({ className: i, parseClassName: s });
        }
        return t;
    },
    Mr = (e) => (e.endsWith(he) ? e.substring(0, e.length - 1) : e.startsWith(he) ? e.substring(1) : e),
    Ar = (e) => {
        const r = Object.fromEntries(e.orderSensitiveModifiers.map((t) => [t, !0]));
        return (t) => {
            if (t.length <= 1) return t;
            const s = [];
            let i = [];
            return (
                t.forEach((l) => {
                    l[0] === "[" || r[l] ? (s.push(...i.sort(), l), (i = [])) : i.push(l);
                }),
                s.push(...i.sort()),
                s
            );
        };
    },
    Sr = (e) => ({ cache: yr(e.cacheSize), parseClassName: Cr(e), sortModifiers: Ar(e), ...xr(e) }),
    Ir = /\s+/,
    Rr = (e, r) => {
        const { parseClassName: o, getClassGroupId: t, getConflictingClassGroupIds: s, sortModifiers: i } = r,
            l = [],
            p = e.trim().split(Ir);
        let c = "";
        for (let f = p.length - 1; f >= 0; f -= 1) {
            const h = p[f],
                { isExternal: k, modifiers: S, hasImportantModifier: I, baseClassName: x, maybePostfixModifierPosition: y } = o(h);
            if (k) {
                c = h + (c.length > 0 ? " " + c : c);
                continue;
            }
            let L = !!y,
                P = t(L ? x.substring(0, y) : x);
            if (!P) {
                if (!L) {
                    c = h + (c.length > 0 ? " " + c : c);
                    continue;
                }
                if (((P = t(x)), !P)) {
                    c = h + (c.length > 0 ? " " + c : c);
                    continue;
                }
                L = !1;
            }
            const q = i(S).join(":"),
                j = I ? q + he : q,
                N = j + P;
            if (l.includes(N)) continue;
            l.push(N);
            const _ = s(P, L);
            for (let T = 0; T < _.length; ++T) {
                const F = _[T];
                l.push(j + F);
            }
            c = h + (c.length > 0 ? " " + c : c);
        }
        return c;
    };
function Pr() {
    let e = 0,
        r,
        o,
        t = "";
    for (; e < arguments.length; ) (r = arguments[e++]) && (o = Xe(r)) && (t && (t += " "), (t += o));
    return t;
}
const Xe = (e) => {
    if (typeof e == "string") return e;
    let r,
        o = "";
    for (let t = 0; t < e.length; t++) e[t] && (r = Xe(e[t])) && (o && (o += " "), (o += r));
    return o;
};
function Tr(e, ...r) {
    let o,
        t,
        s,
        i = l;
    function l(c) {
        const f = r.reduce((h, k) => k(h), e());
        return (o = Sr(f)), (t = o.cache.get), (s = o.cache.set), (i = p), p(c);
    }
    function p(c) {
        const f = t(c);
        if (f) return f;
        const h = Rr(c, o);
        return s(c, h), h;
    }
    return function () {
        return i(Pr.apply(null, arguments));
    };
}
const g = (e) => {
        const r = (o) => o[e] || [];
        return (r.isThemeGetter = !0), r;
    },
    Je = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    Ze = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    Er = /^\d+\/\d+$/,
    Gr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Lr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Nr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    _r = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Br = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    O = (e) => Er.test(e),
    u = (e) => !!e && !Number.isNaN(Number(e)),
    R = (e) => !!e && Number.isInteger(Number(e)),
    ce = (e) => e.endsWith("%") && u(e.slice(0, -1)),
    M = (e) => Gr.test(e),
    Or = () => !0,
    Vr = (e) => Lr.test(e) && !Nr.test(e),
    Ke = () => !1,
    Ur = (e) => _r.test(e),
    jr = (e) => Br.test(e),
    Fr = (e) => !n(e) && !a(e),
    $r = (e) => V(e, er, Ke),
    n = (e) => Je.test(e),
    G = (e) => V(e, rr, Vr),
    de = (e) => V(e, Xr, u),
    _e = (e) => V(e, Qe, Ke),
    Hr = (e) => V(e, Ye, jr),
    Y = (e) => V(e, or, Ur),
    a = (e) => Ze.test(e),
    $ = (e) => U(e, rr),
    Wr = (e) => U(e, Jr),
    Be = (e) => U(e, Qe),
    qr = (e) => U(e, er),
    Dr = (e) => U(e, Ye),
    ee = (e) => U(e, or, !0),
    V = (e, r, o) => {
        const t = Je.exec(e);
        return t ? (t[1] ? r(t[1]) : o(t[2])) : !1;
    },
    U = (e, r, o = !1) => {
        const t = Ze.exec(e);
        return t ? (t[1] ? r(t[1]) : o) : !1;
    },
    Qe = (e) => e === "position" || e === "percentage",
    Ye = (e) => e === "image" || e === "url",
    er = (e) => e === "length" || e === "size" || e === "bg-size",
    rr = (e) => e === "length",
    Xr = (e) => e === "number",
    Jr = (e) => e === "family-name",
    or = (e) => e === "shadow",
    Zr = () => {
        const e = g("color"),
            r = g("font"),
            o = g("text"),
            t = g("font-weight"),
            s = g("tracking"),
            i = g("leading"),
            l = g("breakpoint"),
            p = g("container"),
            c = g("spacing"),
            f = g("radius"),
            h = g("shadow"),
            k = g("inset-shadow"),
            S = g("text-shadow"),
            I = g("drop-shadow"),
            x = g("blur"),
            y = g("perspective"),
            L = g("aspect"),
            P = g("ease"),
            q = g("animate"),
            j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            N = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            _ = () => [...N(), a, n],
            T = () => ["auto", "hidden", "clip", "visible", "scroll"],
            F = () => ["auto", "contain", "none"],
            m = () => [a, n, c],
            z = () => [O, "full", "auto", ...m()],
            ke = () => [R, "none", "subgrid", a, n],
            ye = () => ["auto", { span: ["full", R, a, n] }, R, a, n],
            D = () => [R, "auto", a, n],
            ze = () => ["auto", "min", "max", "fr", a, n],
            te = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            C = () => ["auto", ...m()],
            E = () => [O, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...m()],
            d = () => [e, a, n],
            Ce = () => [...N(), Be, _e, { position: [a, n] }],
            Me = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
            Ae = () => ["auto", "cover", "contain", qr, $r, { size: [a, n] }],
            se = () => [ce, $, G],
            w = () => ["", "none", "full", f, a, n],
            v = () => ["", u, $, G],
            X = () => ["solid", "dashed", "dotted", "double"],
            Se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            b = () => [u, ce, Be, _e],
            Ie = () => ["", "none", x, a, n],
            J = () => ["none", u, a, n],
            Z = () => ["none", u, a, n],
            ne = () => [u, a, n],
            K = () => [O, "full", ...m()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [M],
                breakpoint: [M],
                color: [Or],
                container: [M],
                "drop-shadow": [M],
                ease: ["in", "out", "in-out"],
                font: [Fr],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [M],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [M],
                shadow: [M],
                spacing: ["px", u],
                text: [M],
                "text-shadow": [M],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
            },
            classGroups: {
                aspect: [{ aspect: ["auto", "square", O, n, a, L] }],
                container: ["container"],
                columns: [{ columns: [u, n, a, p] }],
                "break-after": [{ "break-after": j() }],
                "break-before": [{ "break-before": j() }],
                "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
                "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                box: [{ box: ["border", "content"] }],
                display: [
                    "block",
                    "inline-block",
                    "inline",
                    "flex",
                    "inline-flex",
                    "table",
                    "inline-table",
                    "table-caption",
                    "table-cell",
                    "table-column",
                    "table-column-group",
                    "table-footer-group",
                    "table-header-group",
                    "table-row-group",
                    "table-row",
                    "flow-root",
                    "grid",
                    "inline-grid",
                    "contents",
                    "list-item",
                    "hidden",
                ],
                sr: ["sr-only", "not-sr-only"],
                float: [{ float: ["right", "left", "none", "start", "end"] }],
                clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                "object-position": [{ object: _() }],
                overflow: [{ overflow: T() }],
                "overflow-x": [{ "overflow-x": T() }],
                "overflow-y": [{ "overflow-y": T() }],
                overscroll: [{ overscroll: F() }],
                "overscroll-x": [{ "overscroll-x": F() }],
                "overscroll-y": [{ "overscroll-y": F() }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{ inset: z() }],
                "inset-x": [{ "inset-x": z() }],
                "inset-y": [{ "inset-y": z() }],
                start: [{ start: z() }],
                end: [{ end: z() }],
                top: [{ top: z() }],
                right: [{ right: z() }],
                bottom: [{ bottom: z() }],
                left: [{ left: z() }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: [R, "auto", a, n] }],
                basis: [{ basis: [O, "full", "auto", p, ...m()] }],
                "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
                flex: [{ flex: [u, O, "auto", "initial", "none", n] }],
                grow: [{ grow: ["", u, a, n] }],
                shrink: [{ shrink: ["", u, a, n] }],
                order: [{ order: [R, "first", "last", "none", a, n] }],
                "grid-cols": [{ "grid-cols": ke() }],
                "col-start-end": [{ col: ye() }],
                "col-start": [{ "col-start": D() }],
                "col-end": [{ "col-end": D() }],
                "grid-rows": [{ "grid-rows": ke() }],
                "row-start-end": [{ row: ye() }],
                "row-start": [{ "row-start": D() }],
                "row-end": [{ "row-end": D() }],
                "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                "auto-cols": [{ "auto-cols": ze() }],
                "auto-rows": [{ "auto-rows": ze() }],
                gap: [{ gap: m() }],
                "gap-x": [{ "gap-x": m() }],
                "gap-y": [{ "gap-y": m() }],
                "justify-content": [{ justify: [...te(), "normal"] }],
                "justify-items": [{ "justify-items": [...B(), "normal"] }],
                "justify-self": [{ "justify-self": ["auto", ...B()] }],
                "align-content": [{ content: ["normal", ...te()] }],
                "align-items": [{ items: [...B(), { baseline: ["", "last"] }] }],
                "align-self": [{ self: ["auto", ...B(), { baseline: ["", "last"] }] }],
                "place-content": [{ "place-content": te() }],
                "place-items": [{ "place-items": [...B(), "baseline"] }],
                "place-self": [{ "place-self": ["auto", ...B()] }],
                p: [{ p: m() }],
                px: [{ px: m() }],
                py: [{ py: m() }],
                ps: [{ ps: m() }],
                pe: [{ pe: m() }],
                pt: [{ pt: m() }],
                pr: [{ pr: m() }],
                pb: [{ pb: m() }],
                pl: [{ pl: m() }],
                m: [{ m: C() }],
                mx: [{ mx: C() }],
                my: [{ my: C() }],
                ms: [{ ms: C() }],
                me: [{ me: C() }],
                mt: [{ mt: C() }],
                mr: [{ mr: C() }],
                mb: [{ mb: C() }],
                ml: [{ ml: C() }],
                "space-x": [{ "space-x": m() }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": m() }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{ size: E() }],
                w: [{ w: [p, "screen", ...E()] }],
                "min-w": [{ "min-w": [p, "screen", "none", ...E()] }],
                "max-w": [{ "max-w": [p, "screen", "none", "prose", { screen: [l] }, ...E()] }],
                h: [{ h: ["screen", "lh", ...E()] }],
                "min-h": [{ "min-h": ["screen", "lh", "none", ...E()] }],
                "max-h": [{ "max-h": ["screen", "lh", ...E()] }],
                "font-size": [{ text: ["base", o, $, G] }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{ font: [t, a, de] }],
                "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ce, n] }],
                "font-family": [{ font: [Wr, n, r] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{ tracking: [s, a, n] }],
                "line-clamp": [{ "line-clamp": [u, "none", a, de] }],
                leading: [{ leading: [i, ...m()] }],
                "list-image": [{ "list-image": ["none", a, n] }],
                "list-style-position": [{ list: ["inside", "outside"] }],
                "list-style-type": [{ list: ["disc", "decimal", "none", a, n] }],
                "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                "placeholder-color": [{ placeholder: d() }],
                "text-color": [{ text: d() }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{ decoration: [...X(), "wavy"] }],
                "text-decoration-thickness": [{ decoration: [u, "from-font", "auto", a, G] }],
                "text-decoration-color": [{ decoration: d() }],
                "underline-offset": [{ "underline-offset": [u, "auto", a, n] }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                indent: [{ indent: m() }],
                "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", a, n] }],
                whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                break: [{ break: ["normal", "words", "all", "keep"] }],
                wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
                hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                content: [{ content: ["none", a, n] }],
                "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                "bg-position": [{ bg: Ce() }],
                "bg-repeat": [{ bg: Me() }],
                "bg-size": [{ bg: Ae() }],
                "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, R, a, n], radial: ["", a, n], conic: [R, a, n] }, Dr, Hr] }],
                "bg-color": [{ bg: d() }],
                "gradient-from-pos": [{ from: se() }],
                "gradient-via-pos": [{ via: se() }],
                "gradient-to-pos": [{ to: se() }],
                "gradient-from": [{ from: d() }],
                "gradient-via": [{ via: d() }],
                "gradient-to": [{ to: d() }],
                rounded: [{ rounded: w() }],
                "rounded-s": [{ "rounded-s": w() }],
                "rounded-e": [{ "rounded-e": w() }],
                "rounded-t": [{ "rounded-t": w() }],
                "rounded-r": [{ "rounded-r": w() }],
                "rounded-b": [{ "rounded-b": w() }],
                "rounded-l": [{ "rounded-l": w() }],
                "rounded-ss": [{ "rounded-ss": w() }],
                "rounded-se": [{ "rounded-se": w() }],
                "rounded-ee": [{ "rounded-ee": w() }],
                "rounded-es": [{ "rounded-es": w() }],
                "rounded-tl": [{ "rounded-tl": w() }],
                "rounded-tr": [{ "rounded-tr": w() }],
                "rounded-br": [{ "rounded-br": w() }],
                "rounded-bl": [{ "rounded-bl": w() }],
                "border-w": [{ border: v() }],
                "border-w-x": [{ "border-x": v() }],
                "border-w-y": [{ "border-y": v() }],
                "border-w-s": [{ "border-s": v() }],
                "border-w-e": [{ "border-e": v() }],
                "border-w-t": [{ "border-t": v() }],
                "border-w-r": [{ "border-r": v() }],
                "border-w-b": [{ "border-b": v() }],
                "border-w-l": [{ "border-l": v() }],
                "divide-x": [{ "divide-x": v() }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": v() }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{ border: [...X(), "hidden", "none"] }],
                "divide-style": [{ divide: [...X(), "hidden", "none"] }],
                "border-color": [{ border: d() }],
                "border-color-x": [{ "border-x": d() }],
                "border-color-y": [{ "border-y": d() }],
                "border-color-s": [{ "border-s": d() }],
                "border-color-e": [{ "border-e": d() }],
                "border-color-t": [{ "border-t": d() }],
                "border-color-r": [{ "border-r": d() }],
                "border-color-b": [{ "border-b": d() }],
                "border-color-l": [{ "border-l": d() }],
                "divide-color": [{ divide: d() }],
                "outline-style": [{ outline: [...X(), "none", "hidden"] }],
                "outline-offset": [{ "outline-offset": [u, a, n] }],
                "outline-w": [{ outline: ["", u, $, G] }],
                "outline-color": [{ outline: d() }],
                shadow: [{ shadow: ["", "none", h, ee, Y] }],
                "shadow-color": [{ shadow: d() }],
                "inset-shadow": [{ "inset-shadow": ["none", k, ee, Y] }],
                "inset-shadow-color": [{ "inset-shadow": d() }],
                "ring-w": [{ ring: v() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: d() }],
                "ring-offset-w": [{ "ring-offset": [u, G] }],
                "ring-offset-color": [{ "ring-offset": d() }],
                "inset-ring-w": [{ "inset-ring": v() }],
                "inset-ring-color": [{ "inset-ring": d() }],
                "text-shadow": [{ "text-shadow": ["none", S, ee, Y] }],
                "text-shadow-color": [{ "text-shadow": d() }],
                opacity: [{ opacity: [u, a, n] }],
                "mix-blend": [{ "mix-blend": [...Se(), "plus-darker", "plus-lighter"] }],
                "bg-blend": [{ "bg-blend": Se() }],
                "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"],
                "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }],
                "mask-image-linear-pos": [{ "mask-linear": [u] }],
                "mask-image-linear-from-pos": [{ "mask-linear-from": b() }],
                "mask-image-linear-to-pos": [{ "mask-linear-to": b() }],
                "mask-image-linear-from-color": [{ "mask-linear-from": d() }],
                "mask-image-linear-to-color": [{ "mask-linear-to": d() }],
                "mask-image-t-from-pos": [{ "mask-t-from": b() }],
                "mask-image-t-to-pos": [{ "mask-t-to": b() }],
                "mask-image-t-from-color": [{ "mask-t-from": d() }],
                "mask-image-t-to-color": [{ "mask-t-to": d() }],
                "mask-image-r-from-pos": [{ "mask-r-from": b() }],
                "mask-image-r-to-pos": [{ "mask-r-to": b() }],
                "mask-image-r-from-color": [{ "mask-r-from": d() }],
                "mask-image-r-to-color": [{ "mask-r-to": d() }],
                "mask-image-b-from-pos": [{ "mask-b-from": b() }],
                "mask-image-b-to-pos": [{ "mask-b-to": b() }],
                "mask-image-b-from-color": [{ "mask-b-from": d() }],
                "mask-image-b-to-color": [{ "mask-b-to": d() }],
                "mask-image-l-from-pos": [{ "mask-l-from": b() }],
                "mask-image-l-to-pos": [{ "mask-l-to": b() }],
                "mask-image-l-from-color": [{ "mask-l-from": d() }],
                "mask-image-l-to-color": [{ "mask-l-to": d() }],
                "mask-image-x-from-pos": [{ "mask-x-from": b() }],
                "mask-image-x-to-pos": [{ "mask-x-to": b() }],
                "mask-image-x-from-color": [{ "mask-x-from": d() }],
                "mask-image-x-to-color": [{ "mask-x-to": d() }],
                "mask-image-y-from-pos": [{ "mask-y-from": b() }],
                "mask-image-y-to-pos": [{ "mask-y-to": b() }],
                "mask-image-y-from-color": [{ "mask-y-from": d() }],
                "mask-image-y-to-color": [{ "mask-y-to": d() }],
                "mask-image-radial": [{ "mask-radial": [a, n] }],
                "mask-image-radial-from-pos": [{ "mask-radial-from": b() }],
                "mask-image-radial-to-pos": [{ "mask-radial-to": b() }],
                "mask-image-radial-from-color": [{ "mask-radial-from": d() }],
                "mask-image-radial-to-color": [{ "mask-radial-to": d() }],
                "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
                "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }],
                "mask-image-radial-pos": [{ "mask-radial-at": N() }],
                "mask-image-conic-pos": [{ "mask-conic": [u] }],
                "mask-image-conic-from-pos": [{ "mask-conic-from": b() }],
                "mask-image-conic-to-pos": [{ "mask-conic-to": b() }],
                "mask-image-conic-from-color": [{ "mask-conic-from": d() }],
                "mask-image-conic-to-color": [{ "mask-conic-to": d() }],
                "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
                "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }],
                "mask-position": [{ mask: Ce() }],
                "mask-repeat": [{ mask: Me() }],
                "mask-size": [{ mask: Ae() }],
                "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
                "mask-image": [{ mask: ["none", a, n] }],
                filter: [{ filter: ["", "none", a, n] }],
                blur: [{ blur: Ie() }],
                brightness: [{ brightness: [u, a, n] }],
                contrast: [{ contrast: [u, a, n] }],
                "drop-shadow": [{ "drop-shadow": ["", "none", I, ee, Y] }],
                "drop-shadow-color": [{ "drop-shadow": d() }],
                grayscale: [{ grayscale: ["", u, a, n] }],
                "hue-rotate": [{ "hue-rotate": [u, a, n] }],
                invert: [{ invert: ["", u, a, n] }],
                saturate: [{ saturate: [u, a, n] }],
                sepia: [{ sepia: ["", u, a, n] }],
                "backdrop-filter": [{ "backdrop-filter": ["", "none", a, n] }],
                "backdrop-blur": [{ "backdrop-blur": Ie() }],
                "backdrop-brightness": [{ "backdrop-brightness": [u, a, n] }],
                "backdrop-contrast": [{ "backdrop-contrast": [u, a, n] }],
                "backdrop-grayscale": [{ "backdrop-grayscale": ["", u, a, n] }],
                "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u, a, n] }],
                "backdrop-invert": [{ "backdrop-invert": ["", u, a, n] }],
                "backdrop-opacity": [{ "backdrop-opacity": [u, a, n] }],
                "backdrop-saturate": [{ "backdrop-saturate": [u, a, n] }],
                "backdrop-sepia": [{ "backdrop-sepia": ["", u, a, n] }],
                "border-collapse": [{ border: ["collapse", "separate"] }],
                "border-spacing": [{ "border-spacing": m() }],
                "border-spacing-x": [{ "border-spacing-x": m() }],
                "border-spacing-y": [{ "border-spacing-y": m() }],
                "table-layout": [{ table: ["auto", "fixed"] }],
                caption: [{ caption: ["top", "bottom"] }],
                transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", a, n] }],
                "transition-behavior": [{ transition: ["normal", "discrete"] }],
                duration: [{ duration: [u, "initial", a, n] }],
                ease: [{ ease: ["linear", "initial", P, a, n] }],
                delay: [{ delay: [u, a, n] }],
                animate: [{ animate: ["none", q, a, n] }],
                backface: [{ backface: ["hidden", "visible"] }],
                perspective: [{ perspective: [y, a, n] }],
                "perspective-origin": [{ "perspective-origin": _() }],
                rotate: [{ rotate: J() }],
                "rotate-x": [{ "rotate-x": J() }],
                "rotate-y": [{ "rotate-y": J() }],
                "rotate-z": [{ "rotate-z": J() }],
                scale: [{ scale: Z() }],
                "scale-x": [{ "scale-x": Z() }],
                "scale-y": [{ "scale-y": Z() }],
                "scale-z": [{ "scale-z": Z() }],
                "scale-3d": ["scale-3d"],
                skew: [{ skew: ne() }],
                "skew-x": [{ "skew-x": ne() }],
                "skew-y": [{ "skew-y": ne() }],
                transform: [{ transform: [a, n, "", "none", "gpu", "cpu"] }],
                "transform-origin": [{ origin: _() }],
                "transform-style": [{ transform: ["3d", "flat"] }],
                translate: [{ translate: K() }],
                "translate-x": [{ "translate-x": K() }],
                "translate-y": [{ "translate-y": K() }],
                "translate-z": [{ "translate-z": K() }],
                "translate-none": ["translate-none"],
                accent: [{ accent: d() }],
                appearance: [{ appearance: ["none", "auto"] }],
                "caret-color": [{ caret: d() }],
                "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }],
                cursor: [
                    {
                        cursor: [
                            "auto",
                            "default",
                            "pointer",
                            "wait",
                            "text",
                            "move",
                            "help",
                            "not-allowed",
                            "none",
                            "context-menu",
                            "progress",
                            "cell",
                            "crosshair",
                            "vertical-text",
                            "alias",
                            "copy",
                            "no-drop",
                            "grab",
                            "grabbing",
                            "all-scroll",
                            "col-resize",
                            "row-resize",
                            "n-resize",
                            "e-resize",
                            "s-resize",
                            "w-resize",
                            "ne-resize",
                            "nw-resize",
                            "se-resize",
                            "sw-resize",
                            "ew-resize",
                            "ns-resize",
                            "nesw-resize",
                            "nwse-resize",
                            "zoom-in",
                            "zoom-out",
                            a,
                            n,
                        ],
                    },
                ],
                "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
                "pointer-events": [{ "pointer-events": ["auto", "none"] }],
                resize: [{ resize: ["none", "", "y", "x"] }],
                "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                "scroll-m": [{ "scroll-m": m() }],
                "scroll-mx": [{ "scroll-mx": m() }],
                "scroll-my": [{ "scroll-my": m() }],
                "scroll-ms": [{ "scroll-ms": m() }],
                "scroll-me": [{ "scroll-me": m() }],
                "scroll-mt": [{ "scroll-mt": m() }],
                "scroll-mr": [{ "scroll-mr": m() }],
                "scroll-mb": [{ "scroll-mb": m() }],
                "scroll-ml": [{ "scroll-ml": m() }],
                "scroll-p": [{ "scroll-p": m() }],
                "scroll-px": [{ "scroll-px": m() }],
                "scroll-py": [{ "scroll-py": m() }],
                "scroll-ps": [{ "scroll-ps": m() }],
                "scroll-pe": [{ "scroll-pe": m() }],
                "scroll-pt": [{ "scroll-pt": m() }],
                "scroll-pr": [{ "scroll-pr": m() }],
                "scroll-pb": [{ "scroll-pb": m() }],
                "scroll-pl": [{ "scroll-pl": m() }],
                "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                "snap-stop": [{ snap: ["normal", "always"] }],
                "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                touch: [{ touch: ["auto", "none", "manipulation"] }],
                "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{ select: ["none", "text", "all", "auto"] }],
                "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", a, n] }],
                fill: [{ fill: ["none", ...d()] }],
                "stroke-w": [{ stroke: [u, $, G, de] }],
                stroke: [{ stroke: ["none", ...d()] }],
                "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"],
        };
    },
    Kr = Tr(Zr);
var Qr = we('<img class="pixelated bg-base-200" alt="User profile"/>'),
    Yr = we('<div class="avatar relative"><div><!></div></div>');
function co(e, r) {
    $e(r, !0);
    var o = Yr(),
        t = me(o),
        s = me(t);
    {
        var i = (p) => {
                hr(p, {
                    get userId() {
                        return r.userId;
                    },
                });
            },
            l = (p) => {
                var c = Qr();
                ue(() => dr(c, "src", r.pictureUrl)), re(p, c);
            };
        ir(s, (p) => {
            r.pictureUrl ? p(l, !1) : p(i);
        });
    }
    pe(t), pe(o), ue((p) => We(t, 1, p), [() => cr(Kr("border-base-300 size-20 rounded-full border-2", r.class))]), re(e, o), He();
}
const Oe = [
        "text-red-500",
        "text-orange-500",
        "text-yellow-500",
        "text-lime-500",
        "text-emerald-500",
        "text-teal-500",
        "text-cyan-500",
        "text-sky-500",
        "text-indigo-500",
        "text-violet-500",
        "text-purple-500",
        "text-fuchsia-500",
        "text-pink-500",
        "text-rose-500",
    ],
    Ve = [
        "bg-red-500/10",
        "bg-orange-500/10",
        "bg-yellow-500/10",
        "bg-lime-500/10",
        "bg-emerald-500/10",
        "bg-teal-500/10",
        "bg-cyan-500/10",
        "bg-sky-500/10",
        "bg-indigo-500/10",
        "bg-violet-500/10",
        "bg-purple-500/10",
        "bg-fuchsia-500/10",
        "bg-pink-500/10",
        "bg-rose-500/10",
    ];
function mo(e) {
    return Oe[e % Oe.length];
}
function po(e) {
    return Ve[e % Ve.length];
}
function uo({ r: e, g: r, b: o }) {
    function t(s) {
        return s.toString(16).padStart(2, "0");
    }
    return `#${t(e)}${t(r)}${t(o)}`;
}
function go(e) {
    return (e = e.trim().replace("#", "")), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6 ? { r: 0, g: 0, b: 0 } : { r: +("0x" + e.slice(0, 2)), g: +("0x" + e.slice(2, 4)), b: +("0x" + e.slice(4, 6)) };
}
function bo(e) {
    e = Math.min(e, ge.colors.length - 1);
    const [r, o, t] = ge.colors[e].rgb;
    return { r, g: o, b: t, a: e === 0 ? 0 : 255 };
}
const Ue = ge.colors.map((e, r) => ({ ...e, idx: r, lab: tr({ r: e.rgb[0], g: e.rgb[1], b: e.rgb[2] }) })).filter((e) => e.idx !== 0);
function fo(e) {
    let r = Ue[0],
        o = Number.MAX_VALUE;
    const t = tr(e);
    for (let s of Ue) {
        const i = eo(t, s.lab);
        i < o && ((r = s), (o = i));
    }
    return r.idx;
}
function tr(e) {
    var r = e.r / 255,
        o = e.g / 255,
        t = e.b / 255,
        s,
        i,
        l;
    return (
        (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92),
        (o = o > 0.04045 ? Math.pow((o + 0.055) / 1.055, 2.4) : o / 12.92),
        (t = t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92),
        (s = (r * 0.4124 + o * 0.3576 + t * 0.1805) / 0.95047),
        (i = (r * 0.2126 + o * 0.7152 + t * 0.0722) / 1),
        (l = (r * 0.0193 + o * 0.1192 + t * 0.9505) / 1.08883),
        (s = s > 0.008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116),
        (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116),
        (l = l > 0.008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116),
        { l: 116 * i - 16, a: 500 * (s - i), b: 200 * (i - l) }
    );
}
function eo(e, r) {
    var o = e.l - r.l,
        t = e.a - r.a,
        s = e.b - r.b,
        i = Math.sqrt(e.a * e.a + e.b * e.b),
        l = Math.sqrt(r.a * r.a + r.b * r.b),
        p = i - l,
        c = t * t + s * s - p * p;
    c = c < 0 ? 0 : Math.sqrt(c);
    var f = 1 + 0.045 * i,
        h = 1 + 0.015 * i,
        k = o / 1,
        S = p / f,
        I = c / h,
        x = k * k + S * S + I * I;
    return x < 0 ? 0 : Math.sqrt(x);
}
var ro = ar('<svg><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path></svg>');
function ho(e, r) {
    let o = lr(r, ["$$slots", "$$events", "$$legacy"]);
    var t = ro();
    mr(t, () => ({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -960 960 960", fill: "currentColor", ...o })), re(e, t);
}
export { ho as A, co as P, hr as a, po as b, bo as c, fo as d, mo as g, go as h, uo as r, Kr as t };

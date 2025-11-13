var oo = Object.defineProperty;
var Re = (e) => {
  throw TypeError(e);
};
var to = (e, o, t) =>
  o in e
    ? oo(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[o] = t);
var Te = (e, o, t) => to(e, typeof o != "symbol" ? o + "" : o, t),
  ae = (e, o, t) => o.has(e) || Re("Cannot " + t);
var ie = (e, o, t) => (
    ae(e, o, "read from private field"), t ? t.call(e) : o.get(e)
  ),
  K = (e, o, t) =>
    o.has(e)
      ? Re("Cannot add the same private member more than once")
      : o instanceof WeakSet
      ? o.add(e)
      : o.set(e, t),
  Me = (e, o, t, r) => (
    ae(e, o, "write to private field"), r ? r.call(e, t) : o.set(e, t), t
  ),
  le = (e, o, t) => (ae(e, o, "access private method"), t);
import "./ClL9a_Zs.js";
import {
  p as Fe,
  f as we,
  d as me,
  r as pe,
  t as ue,
  b as fe,
  c as Be,
} from "./iK5FT0Sa.js";
import { i as ro } from "./6Mc7KQD2.js";
import { a as be, c as so, s as no } from "./Cw1VVyw7.js";
import { h as ao } from "./D_F-xNOc.js";
(function () {
  try {
    var e =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      o = new e.Error().stack;
    o &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[o] = "0dde1484-e888-4245-a9a2-054593fed358"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-0dde1484-e888-4245-a9a2-054593fed358"));
  })();
} catch {}
const Pe = 9,
  io = 95,
  lo = 45,
  Ee = 5;
function co(e) {
  return e.split("").reduce((o, t) => (o ^ t.charCodeAt(0)) * -Ee, Ee) >>> 2;
}
function Ue(e = "", o = io, t = lo, r = co) {
  const i = r(e),
    c = (i % Pe) * (360 / Pe);
  return (
    [...Array(e ? 25 : 0)].reduce(
      (l, u, a) =>
        i & (1 << a % 15)
          ? l +
            `<rect x="${a > 14 ? 7 - ~~(a / 5) : ~~(a / 5)}" y="${
              a % 5
            }" width="1" height="1"/>`
          : l,
      `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${c} ${o}% ${t}%)" shape-rendering="crispEdges">`
    ) + "</svg>"
  );
}
var je, I, te, W, Y, ge, Ve;
((je = globalThis.customElements) != null && je.get("minidenticon-svg")) ||
  (Ve = globalThis.customElements) == null ||
  Ve.define(
    "minidenticon-svg",
    ((I = class extends HTMLElement {
      constructor() {
        super(...arguments);
        K(this, Y);
        K(this, W, !1);
      }
      connectedCallback() {
        le(this, Y, ge).call(this), Me(this, W, !0);
      }
      attributeChangedCallback() {
        ie(this, W) && le(this, Y, ge).call(this);
      }
    }),
    (te = new WeakMap()),
    (W = new WeakMap()),
    (Y = new WeakSet()),
    (ge = function () {
      var i;
      const t = I.observedAttributes.map((c) => this.getAttribute(c) || void 0),
        r = t.join(",");
      this.innerHTML = (i = ie(I, te))[r] ?? (i[r] = Ue(...t));
    }),
    Te(I, "observedAttributes", ["username", "saturation", "lightness"]),
    K(I, te, {}),
    I)
  );
var mo = we("<div><!></div>");
function po(e, o) {
  Fe(o, !0);
  var t = mo(),
    r = me(t);
  ao(r, () => Ue(o.userId.toString(), 95, 45)),
    pe(t),
    ue(() => be(t, 1, `bg-base-200 minidenticon ${o.class ?? "" ?? ""}`)),
    fe(e, t),
    Be();
}
const uo = (e, o) => {
    const t = new Array(e.length + o.length);
    for (let r = 0; r < e.length; r++) t[r] = e[r];
    for (let r = 0; r < o.length; r++) t[e.length + r] = o[r];
    return t;
  },
  fo = (e, o) => ({ classGroupId: e, validator: o }),
  De = (e = new Map(), o = null, t) => ({
    nextPart: e,
    validators: o,
    classGroupId: t,
  }),
  oe = "-",
  Ge = [],
  bo = "arbitrary..",
  go = (e) => {
    const o = wo(e),
      { conflictingClassGroups: t, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (l) => {
        if (l.startsWith("[") && l.endsWith("]")) return ho(l);
        const u = l.split(oe),
          a = u[0] === "" && u.length > 1 ? 1 : 0;
        return We(u, a, o);
      },
      getConflictingClassGroupIds: (l, u) => {
        if (u) {
          const a = r[l],
            f = t[l];
          return a ? (f ? uo(f, a) : a) : f || Ge;
        }
        return t[l] || Ge;
      },
    };
  },
  We = (e, o, t) => {
    if (e.length - o === 0) return t.classGroupId;
    const i = e[o],
      c = t.nextPart.get(i);
    if (c) {
      const f = We(e, o + 1, c);
      if (f) return f;
    }
    const l = t.validators;
    if (l === null) return;
    const u = o === 0 ? e.join(oe) : e.slice(o).join(oe),
      a = l.length;
    for (let f = 0; f < a; f++) {
      const h = l[f];
      if (h.validator(u)) return h.classGroupId;
    }
  },
  ho = (e) =>
    e.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const o = e.slice(1, -1),
            t = o.indexOf(":"),
            r = o.slice(0, t);
          return r ? bo + r : void 0;
        })(),
  wo = (e) => {
    const { theme: o, classGroups: t } = e;
    return xo(t, o);
  },
  xo = (e, o) => {
    const t = De();
    for (const r in e) {
      const i = e[r];
      xe(i, t, r, o);
    }
    return t;
  },
  xe = (e, o, t, r) => {
    const i = e.length;
    for (let c = 0; c < i; c++) {
      const l = e[c];
      ko(l, o, t, r);
    }
  },
  ko = (e, o, t, r) => {
    if (typeof e == "string") {
      yo(e, o, t);
      return;
    }
    if (typeof e == "function") {
      vo(e, o, t, r);
      return;
    }
    zo(e, o, t, r);
  },
  yo = (e, o, t) => {
    const r = e === "" ? o : Ye(o, e);
    r.classGroupId = t;
  },
  vo = (e, o, t, r) => {
    if (Co(e)) {
      xe(e(r), o, t, r);
      return;
    }
    o.validators === null && (o.validators = []), o.validators.push(fo(t, e));
  },
  zo = (e, o, t, r) => {
    const i = Object.entries(e),
      c = i.length;
    for (let l = 0; l < c; l++) {
      const [u, a] = i[l];
      xe(a, Ye(o, u), t, r);
    }
  },
  Ye = (e, o) => {
    let t = e;
    const r = o.split(oe),
      i = r.length;
    for (let c = 0; c < i; c++) {
      const l = r[c];
      let u = t.nextPart.get(l);
      u || ((u = De()), t.nextPart.set(l, u)), (t = u);
    }
    return t;
  },
  Co = (e) => "isThemeGetter" in e && e.isThemeGetter === !0,
  Ao = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      t = Object.create(null),
      r = Object.create(null);
    const i = (c, l) => {
      (t[c] = l), o++, o > e && ((o = 0), (r = t), (t = Object.create(null)));
    };
    return {
      get(c) {
        let l = t[c];
        if (l !== void 0) return l;
        if ((l = r[c]) !== void 0) return i(c, l), l;
      },
      set(c, l) {
        c in t ? (t[c] = l) : i(c, l);
      },
    };
  },
  he = "!",
  Le = ":",
  So = [],
  _e = (e, o, t, r, i) => ({
    modifiers: e,
    hasImportantModifier: o,
    baseClassName: t,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  Io = (e) => {
    const { prefix: o, experimentalParseClassName: t } = e;
    let r = (i) => {
      const c = [];
      let l = 0,
        u = 0,
        a = 0,
        f;
      const h = i.length;
      for (let v = 0; v < h; v++) {
        const x = i[v];
        if (l === 0 && u === 0) {
          if (x === Le) {
            c.push(i.slice(a, v)), (a = v + 1);
            continue;
          }
          if (x === "/") {
            f = v;
            continue;
          }
        }
        x === "[" ? l++ : x === "]" ? l-- : x === "(" ? u++ : x === ")" && u--;
      }
      const y = c.length === 0 ? i : i.slice(a);
      let z = y,
        T = !1;
      y.endsWith(he)
        ? ((z = y.slice(0, -1)), (T = !0))
        : y.startsWith(he) && ((z = y.slice(1)), (T = !0));
      const M = f && f > a ? f - a : void 0;
      return _e(c, T, z, M);
    };
    if (o) {
      const i = o + Le,
        c = r;
      r = (l) =>
        l.startsWith(i) ? c(l.slice(i.length)) : _e(So, !1, l, void 0, !0);
    }
    if (t) {
      const i = r;
      r = (c) => t({ className: c, parseClassName: i });
    }
    return r;
  },
  Ro = (e) => {
    const o = new Map();
    return (
      e.orderSensitiveModifiers.forEach((t, r) => {
        o.set(t, 1e6 + r);
      }),
      (t) => {
        const r = [];
        let i = [];
        for (let c = 0; c < t.length; c++) {
          const l = t[c],
            u = l[0] === "[",
            a = o.has(l);
          u || a
            ? (i.length > 0 && (i.sort(), r.push(...i), (i = [])), r.push(l))
            : i.push(l);
        }
        return i.length > 0 && (i.sort(), r.push(...i)), r;
      }
    );
  },
  To = (e) => ({
    cache: Ao(e.cacheSize),
    parseClassName: Io(e),
    sortModifiers: Ro(e),
    ...go(e),
  }),
  Mo = /\s+/,
  Po = (e, o) => {
    const {
        parseClassName: t,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: c,
      } = o,
      l = [],
      u = e.trim().split(Mo);
    let a = "";
    for (let f = u.length - 1; f >= 0; f -= 1) {
      const h = u[f],
        {
          isExternal: y,
          modifiers: z,
          hasImportantModifier: T,
          baseClassName: M,
          maybePostfixModifierPosition: v,
        } = t(h);
      if (y) {
        a = h + (a.length > 0 ? " " + a : a);
        continue;
      }
      let x = !!v,
        P = r(x ? M.substring(0, v) : M);
      if (!P) {
        if (!x) {
          a = h + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((P = r(M)), !P)) {
          a = h + (a.length > 0 ? " " + a : a);
          continue;
        }
        x = !1;
      }
      const H = z.length === 0 ? "" : z.length === 1 ? z[0] : c(z).join(":"),
        B = T ? H + he : H,
        _ = B + P;
      if (l.indexOf(_) > -1) continue;
      l.push(_);
      const O = i(P, x);
      for (let E = 0; E < O.length; ++E) {
        const U = O[E];
        l.push(B + U);
      }
      a = h + (a.length > 0 ? " " + a : a);
    }
    return a;
  },
  Eo = (...e) => {
    let o = 0,
      t,
      r,
      i = "";
    for (; o < e.length; )
      (t = e[o++]) && (r = He(t)) && (i && (i += " "), (i += r));
    return i;
  },
  He = (e) => {
    if (typeof e == "string") return e;
    let o,
      t = "";
    for (let r = 0; r < e.length; r++)
      e[r] && (o = He(e[r])) && (t && (t += " "), (t += o));
    return t;
  },
  Go = (e, ...o) => {
    let t, r, i, c;
    const l = (a) => {
        const f = o.reduce((h, y) => y(h), e());
        return (t = To(f)), (r = t.cache.get), (i = t.cache.set), (c = u), u(a);
      },
      u = (a) => {
        const f = r(a);
        if (f) return f;
        const h = Po(a, t);
        return i(a, h), h;
      };
    return (c = l), (...a) => c(Eo(...a));
  },
  Lo = [],
  b = (e) => {
    const o = (t) => t[e] || Lo;
    return (o.isThemeGetter = !0), o;
  },
  qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Xe = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  _o = /^\d+\/\d+$/,
  Oo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  No =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  jo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Vo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Fo =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  j = (e) => _o.test(e),
  p = (e) => !!e && !Number.isNaN(Number(e)),
  R = (e) => !!e && Number.isInteger(Number(e)),
  ce = (e) => e.endsWith("%") && p(e.slice(0, -1)),
  S = (e) => Oo.test(e),
  Bo = () => !0,
  Uo = (e) => No.test(e) && !jo.test(e),
  Je = () => !1,
  Do = (e) => Vo.test(e),
  Wo = (e) => Fo.test(e),
  Yo = (e) => !s(e) && !n(e),
  Ho = (e) => V(e, Ke, Je),
  s = (e) => qe.test(e),
  L = (e) => V(e, $e, Uo),
  de = (e) => V(e, Zo, p),
  Oe = (e) => V(e, Qe, Je),
  qo = (e) => V(e, Ze, Wo),
  $ = (e) => V(e, eo, Do),
  n = (e) => Xe.test(e),
  D = (e) => F(e, $e),
  Xo = (e) => F(e, Ko),
  Ne = (e) => F(e, Qe),
  Jo = (e) => F(e, Ke),
  Qo = (e) => F(e, Ze),
  ee = (e) => F(e, eo, !0),
  V = (e, o, t) => {
    const r = qe.exec(e);
    return r ? (r[1] ? o(r[1]) : t(r[2])) : !1;
  },
  F = (e, o, t = !1) => {
    const r = Xe.exec(e);
    return r ? (r[1] ? o(r[1]) : t) : !1;
  },
  Qe = (e) => e === "position" || e === "percentage",
  Ze = (e) => e === "image" || e === "url",
  Ke = (e) => e === "length" || e === "size" || e === "bg-size",
  $e = (e) => e === "length",
  Zo = (e) => e === "number",
  Ko = (e) => e === "family-name",
  eo = (e) => e === "shadow",
  $o = () => {
    const e = b("color"),
      o = b("font"),
      t = b("text"),
      r = b("font-weight"),
      i = b("tracking"),
      c = b("leading"),
      l = b("breakpoint"),
      u = b("container"),
      a = b("spacing"),
      f = b("radius"),
      h = b("shadow"),
      y = b("inset-shadow"),
      z = b("text-shadow"),
      T = b("drop-shadow"),
      M = b("blur"),
      v = b("perspective"),
      x = b("aspect"),
      P = b("ease"),
      H = b("animate"),
      B = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      _ = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      O = () => [..._(), n, s],
      E = () => ["auto", "hidden", "clip", "visible", "scroll"],
      U = () => ["auto", "contain", "none"],
      m = () => [n, s, a],
      C = () => [j, "full", "auto", ...m()],
      ke = () => [R, "none", "subgrid", n, s],
      ye = () => ["auto", { span: ["full", R, n, s] }, R, n, s],
      q = () => [R, "auto", n, s],
      ve = () => ["auto", "min", "max", "fr", n, s],
      re = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      N = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      A = () => ["auto", ...m()],
      G = () => [
        j,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...m(),
      ],
      d = () => [e, n, s],
      ze = () => [..._(), Ne, Oe, { position: [n, s] }],
      Ce = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      Ae = () => ["auto", "cover", "contain", Jo, Ho, { size: [n, s] }],
      se = () => [ce, D, L],
      w = () => ["", "none", "full", f, n, s],
      k = () => ["", p, D, L],
      X = () => ["solid", "dashed", "dotted", "double"],
      Se = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      g = () => [p, ce, Ne, Oe],
      Ie = () => ["", "none", M, n, s],
      J = () => ["none", p, n, s],
      Q = () => ["none", p, n, s],
      ne = () => [p, n, s],
      Z = () => [j, "full", ...m()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [S],
        breakpoint: [S],
        color: [Bo],
        container: [S],
        "drop-shadow": [S],
        ease: ["in", "out", "in-out"],
        font: [Yo],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [S],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [S],
        shadow: [S],
        spacing: ["px", p],
        text: [S],
        "text-shadow": [S],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", j, s, n, x] }],
        container: ["container"],
        columns: [{ columns: [p, s, n, u] }],
        "break-after": [{ "break-after": B() }],
        "break-before": [{ "break-before": B() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
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
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: O() }],
        overflow: [{ overflow: E() }],
        "overflow-x": [{ "overflow-x": E() }],
        "overflow-y": [{ "overflow-y": E() }],
        overscroll: [{ overscroll: U() }],
        "overscroll-x": [{ "overscroll-x": U() }],
        "overscroll-y": [{ "overscroll-y": U() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: C() }],
        "inset-x": [{ "inset-x": C() }],
        "inset-y": [{ "inset-y": C() }],
        start: [{ start: C() }],
        end: [{ end: C() }],
        top: [{ top: C() }],
        right: [{ right: C() }],
        bottom: [{ bottom: C() }],
        left: [{ left: C() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [R, "auto", n, s] }],
        basis: [{ basis: [j, "full", "auto", u, ...m()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [p, j, "auto", "initial", "none", s] }],
        grow: [{ grow: ["", p, n, s] }],
        shrink: [{ shrink: ["", p, n, s] }],
        order: [{ order: [R, "first", "last", "none", n, s] }],
        "grid-cols": [{ "grid-cols": ke() }],
        "col-start-end": [{ col: ye() }],
        "col-start": [{ "col-start": q() }],
        "col-end": [{ "col-end": q() }],
        "grid-rows": [{ "grid-rows": ke() }],
        "row-start-end": [{ row: ye() }],
        "row-start": [{ "row-start": q() }],
        "row-end": [{ "row-end": q() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ve() }],
        "auto-rows": [{ "auto-rows": ve() }],
        gap: [{ gap: m() }],
        "gap-x": [{ "gap-x": m() }],
        "gap-y": [{ "gap-y": m() }],
        "justify-content": [{ justify: [...re(), "normal"] }],
        "justify-items": [{ "justify-items": [...N(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...N()] }],
        "align-content": [{ content: ["normal", ...re()] }],
        "align-items": [{ items: [...N(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...N(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": re() }],
        "place-items": [{ "place-items": [...N(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...N()] }],
        p: [{ p: m() }],
        px: [{ px: m() }],
        py: [{ py: m() }],
        ps: [{ ps: m() }],
        pe: [{ pe: m() }],
        pt: [{ pt: m() }],
        pr: [{ pr: m() }],
        pb: [{ pb: m() }],
        pl: [{ pl: m() }],
        m: [{ m: A() }],
        mx: [{ mx: A() }],
        my: [{ my: A() }],
        ms: [{ ms: A() }],
        me: [{ me: A() }],
        mt: [{ mt: A() }],
        mr: [{ mr: A() }],
        mb: [{ mb: A() }],
        ml: [{ ml: A() }],
        "space-x": [{ "space-x": m() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": m() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: G() }],
        w: [{ w: [u, "screen", ...G()] }],
        "min-w": [{ "min-w": [u, "screen", "none", ...G()] }],
        "max-w": [
          { "max-w": [u, "screen", "none", "prose", { screen: [l] }, ...G()] },
        ],
        h: [{ h: ["screen", "lh", ...G()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...G()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...G()] }],
        "font-size": [{ text: ["base", t, D, L] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, n, de] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              ce,
              s,
            ],
          },
        ],
        "font-family": [{ font: [Xo, s, o] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [i, n, s] }],
        "line-clamp": [{ "line-clamp": [p, "none", n, de] }],
        leading: [{ leading: [c, ...m()] }],
        "list-image": [{ "list-image": ["none", n, s] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", n, s] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: d() }],
        "text-color": [{ text: d() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...X(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [p, "from-font", "auto", n, L] },
        ],
        "text-decoration-color": [{ decoration: d() }],
        "underline-offset": [{ "underline-offset": [p, "auto", n, s] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: m() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              n,
              s,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", n, s] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: ze() }],
        "bg-repeat": [{ bg: Ce() }],
        "bg-size": [{ bg: Ae() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  R,
                  n,
                  s,
                ],
                radial: ["", n, s],
                conic: [R, n, s],
              },
              Qo,
              qo,
            ],
          },
        ],
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
        "border-w": [{ border: k() }],
        "border-w-x": [{ "border-x": k() }],
        "border-w-y": [{ "border-y": k() }],
        "border-w-s": [{ "border-s": k() }],
        "border-w-e": [{ "border-e": k() }],
        "border-w-t": [{ "border-t": k() }],
        "border-w-r": [{ "border-r": k() }],
        "border-w-b": [{ "border-b": k() }],
        "border-w-l": [{ "border-l": k() }],
        "divide-x": [{ "divide-x": k() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": k() }],
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
        "outline-offset": [{ "outline-offset": [p, n, s] }],
        "outline-w": [{ outline: ["", p, D, L] }],
        "outline-color": [{ outline: d() }],
        shadow: [{ shadow: ["", "none", h, ee, $] }],
        "shadow-color": [{ shadow: d() }],
        "inset-shadow": [{ "inset-shadow": ["none", y, ee, $] }],
        "inset-shadow-color": [{ "inset-shadow": d() }],
        "ring-w": [{ ring: k() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: d() }],
        "ring-offset-w": [{ "ring-offset": [p, L] }],
        "ring-offset-color": [{ "ring-offset": d() }],
        "inset-ring-w": [{ "inset-ring": k() }],
        "inset-ring-color": [{ "inset-ring": d() }],
        "text-shadow": [{ "text-shadow": ["none", z, ee, $] }],
        "text-shadow-color": [{ "text-shadow": d() }],
        opacity: [{ opacity: [p, n, s] }],
        "mix-blend": [
          { "mix-blend": [...Se(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": Se() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [p] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": g() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": g() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": d() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": d() }],
        "mask-image-t-from-pos": [{ "mask-t-from": g() }],
        "mask-image-t-to-pos": [{ "mask-t-to": g() }],
        "mask-image-t-from-color": [{ "mask-t-from": d() }],
        "mask-image-t-to-color": [{ "mask-t-to": d() }],
        "mask-image-r-from-pos": [{ "mask-r-from": g() }],
        "mask-image-r-to-pos": [{ "mask-r-to": g() }],
        "mask-image-r-from-color": [{ "mask-r-from": d() }],
        "mask-image-r-to-color": [{ "mask-r-to": d() }],
        "mask-image-b-from-pos": [{ "mask-b-from": g() }],
        "mask-image-b-to-pos": [{ "mask-b-to": g() }],
        "mask-image-b-from-color": [{ "mask-b-from": d() }],
        "mask-image-b-to-color": [{ "mask-b-to": d() }],
        "mask-image-l-from-pos": [{ "mask-l-from": g() }],
        "mask-image-l-to-pos": [{ "mask-l-to": g() }],
        "mask-image-l-from-color": [{ "mask-l-from": d() }],
        "mask-image-l-to-color": [{ "mask-l-to": d() }],
        "mask-image-x-from-pos": [{ "mask-x-from": g() }],
        "mask-image-x-to-pos": [{ "mask-x-to": g() }],
        "mask-image-x-from-color": [{ "mask-x-from": d() }],
        "mask-image-x-to-color": [{ "mask-x-to": d() }],
        "mask-image-y-from-pos": [{ "mask-y-from": g() }],
        "mask-image-y-to-pos": [{ "mask-y-to": g() }],
        "mask-image-y-from-color": [{ "mask-y-from": d() }],
        "mask-image-y-to-color": [{ "mask-y-to": d() }],
        "mask-image-radial": [{ "mask-radial": [n, s] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": g() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": g() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": d() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": d() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": _() }],
        "mask-image-conic-pos": [{ "mask-conic": [p] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": g() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": g() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": d() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": d() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: ze() }],
        "mask-repeat": [{ mask: Ce() }],
        "mask-size": [{ mask: Ae() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", n, s] }],
        filter: [{ filter: ["", "none", n, s] }],
        blur: [{ blur: Ie() }],
        brightness: [{ brightness: [p, n, s] }],
        contrast: [{ contrast: [p, n, s] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", T, ee, $] }],
        "drop-shadow-color": [{ "drop-shadow": d() }],
        grayscale: [{ grayscale: ["", p, n, s] }],
        "hue-rotate": [{ "hue-rotate": [p, n, s] }],
        invert: [{ invert: ["", p, n, s] }],
        saturate: [{ saturate: [p, n, s] }],
        sepia: [{ sepia: ["", p, n, s] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", n, s] }],
        "backdrop-blur": [{ "backdrop-blur": Ie() }],
        "backdrop-brightness": [{ "backdrop-brightness": [p, n, s] }],
        "backdrop-contrast": [{ "backdrop-contrast": [p, n, s] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", p, n, s] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p, n, s] }],
        "backdrop-invert": [{ "backdrop-invert": ["", p, n, s] }],
        "backdrop-opacity": [{ "backdrop-opacity": [p, n, s] }],
        "backdrop-saturate": [{ "backdrop-saturate": [p, n, s] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", p, n, s] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": m() }],
        "border-spacing-x": [{ "border-spacing-x": m() }],
        "border-spacing-y": [{ "border-spacing-y": m() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              n,
              s,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [p, "initial", n, s] }],
        ease: [{ ease: ["linear", "initial", P, n, s] }],
        delay: [{ delay: [p, n, s] }],
        animate: [{ animate: ["none", H, n, s] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [v, n, s] }],
        "perspective-origin": [{ "perspective-origin": O() }],
        rotate: [{ rotate: J() }],
        "rotate-x": [{ "rotate-x": J() }],
        "rotate-y": [{ "rotate-y": J() }],
        "rotate-z": [{ "rotate-z": J() }],
        scale: [{ scale: Q() }],
        "scale-x": [{ "scale-x": Q() }],
        "scale-y": [{ "scale-y": Q() }],
        "scale-z": [{ "scale-z": Q() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: ne() }],
        "skew-x": [{ "skew-x": ne() }],
        "skew-y": [{ "skew-y": ne() }],
        transform: [{ transform: [n, s, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: O() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Z() }],
        "translate-x": [{ "translate-x": Z() }],
        "translate-y": [{ "translate-y": Z() }],
        "translate-z": [{ "translate-z": Z() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: d() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: d() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
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
              n,
              s,
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
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", n, s] },
        ],
        fill: [{ fill: ["none", ...d()] }],
        "stroke-w": [{ stroke: [p, D, L, de] }],
        stroke: [{ stroke: ["none", ...d()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
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
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  et = Go($o);
var ot = we('<img class="pixelated bg-base-200" alt="User profile"/>'),
  tt = we("<div><div><!></div></div>");
function ct(e, o) {
  Fe(o, !0);
  var t = tt();
  let r;
  var i = me(t),
    c = me(i);
  {
    var l = (a) => {
        po(a, {
          get userId() {
            return o.userId;
          },
        });
      },
      u = (a) => {
        var f = ot();
        ue(() => no(f, "src", o.pictureUrl)), fe(a, f);
      };
    ro(c, (a) => {
      o.pictureUrl ? a(u, !1) : a(l);
    });
  }
  pe(i),
    pe(t),
    ue(
      (a) => {
        (r = be(t, 1, "avatar relative rounded-full", null, r, {
          "border-3": o.isSuspended,
          "border-red-500": o.isSuspended,
        })),
          be(i, 1, a);
      },
      [() => so(et("border-base-300 size-20 rounded-full border-2", o.class))]
    ),
    fe(e, t),
    Be();
}
export { ct as P, po as a, et as t };

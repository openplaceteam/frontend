var $e = Object.defineProperty;
var Re = (e) => {
	throw TypeError(e);
};
var eo = (e, o, r) =>
	o in e
		? $e(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
		: (e[o] = r);
var Te = (e, o, r) => eo(e, typeof o != "symbol" ? o + "" : o, r),
	ne = (e, o, r) => o.has(e) || Re("Cannot " + r);
var ae = (e, o, r) => (
		ne(e, o, "read from private field"), r ? r.call(e) : o.get(e)
	),
	K = (e, o, r) =>
		o.has(e)
			? Re("Cannot add the same private member more than once")
			: o instanceof WeakSet
			? o.add(e)
			: o.set(e, r),
	Pe = (e, o, r, t) => (
		ne(e, o, "write to private field"), t ? t.call(e, r) : o.set(e, r), r
	),
	ie = (e, o, r) => (ne(e, o, "access private method"), r);
import "./Ch2Ub8FX.js";
import {
	p as Fe,
	f as xe,
	d as de,
	r as me,
	t as pe,
	b as ue,
	c as Ue,
} from "./CMvZtFtm.js";
import { i as oo } from "./BF50aS-j.js";
import { a as fe, c as ro, s as to } from "./C5yqZvKC.js";
import { h as so } from "./DueIxFLX.js";
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
		e.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
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
			(e._sentryDebugIds[o] = "1e957b58-5144-4041-9888-816ae37d90f2"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-1e957b58-5144-4041-9888-816ae37d90f2"));
	})();
} catch {}
const Ee = 9,
	no = 95,
	ao = 45,
	Ge = 5;
function io(e) {
	return e.split("").reduce((o, r) => (o ^ r.charCodeAt(0)) * -Ge, Ge) >>> 2;
}
function Be(e = "", o = no, r = ao, t = io) {
	const a = t(e),
		d = (a % Ee) * (360 / Ee);
	return (
		[...Array(e ? 25 : 0)].reduce(
			(l, u, i) =>
				a & (1 << i % 15)
					? l +
					  `<rect x="${i > 14 ? 7 - ~~(i / 5) : ~~(i / 5)}" y="${
							i % 5
					  }" width="1" height="1"/>`
					: l,
			`<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${d} ${o}% ${r}%)" shape-rendering="crispEdges">`
		) + "</svg>"
	);
}
var Ve, A, oe, D, H, be, je;
((Ve = globalThis.customElements) != null && Ve.get("minidenticon-svg")) ||
	(je = globalThis.customElements) == null ||
	je.define(
		"minidenticon-svg",
		((A = class extends HTMLElement {
			constructor() {
				super(...arguments);
				K(this, H);
				K(this, D, !1);
			}
			connectedCallback() {
				ie(this, H, be).call(this), Pe(this, D, !0);
			}
			attributeChangedCallback() {
				ae(this, D) && ie(this, H, be).call(this);
			}
		}),
		(oe = new WeakMap()),
		(D = new WeakMap()),
		(H = new WeakSet()),
		(be = function () {
			var a;
			const r = A.observedAttributes.map((d) => this.getAttribute(d) || void 0),
				t = r.join(",");
			this.innerHTML = (a = ae(A, oe))[t] ?? (a[t] = Be(...r));
		}),
		Te(A, "observedAttributes", ["username", "saturation", "lightness"]),
		K(A, oe, {}),
		A)
	);
var lo = xe("<div><!></div>");
function co(e, o) {
	Fe(o, !0);
	var r = lo(),
		t = de(r);
	so(t, () => Be(o.userId.toString(), 95, 45)),
		me(r),
		pe(() => fe(r, 1, `bg-base-200 minidenticon ${o.class ?? "" ?? ""}`)),
		ue(e, r),
		Ue();
}
const ye = "-",
	mo = (e) => {
		const o = uo(e),
			{ conflictingClassGroups: r, conflictingClassGroupModifiers: t } = e;
		return {
			getClassGroupId: (l) => {
				const u = l.split(ye);
				return u[0] === "" && u.length !== 1 && u.shift(), We(u, o) || po(l);
			},
			getConflictingClassGroupIds: (l, u) => {
				const i = r[l] || [];
				return u && t[l] ? [...i, ...t[l]] : i;
			},
		};
	},
	We = (e, o) => {
		var l;
		if (e.length === 0) return o.classGroupId;
		const r = e[0],
			t = o.nextPart.get(r),
			a = t ? We(e.slice(1), t) : void 0;
		if (a) return a;
		if (o.validators.length === 0) return;
		const d = e.join(ye);
		return (l = o.validators.find(({ validator: u }) => u(d))) == null
			? void 0
			: l.classGroupId;
	},
	Le = /^\[(.+)\]$/,
	po = (e) => {
		if (Le.test(e)) {
			const o = Le.exec(e)[1],
				r = o == null ? void 0 : o.substring(0, o.indexOf(":"));
			if (r) return "arbitrary.." + r;
		}
	},
	uo = (e) => {
		const { theme: o, classGroups: r } = e,
			t = { nextPart: new Map(), validators: [] };
		for (const a in r) ge(r[a], t, a, o);
		return t;
	},
	ge = (e, o, r, t) => {
		e.forEach((a) => {
			if (typeof a == "string") {
				const d = a === "" ? o : _e(o, a);
				d.classGroupId = r;
				return;
			}
			if (typeof a == "function") {
				if (fo(a)) {
					ge(a(t), o, r, t);
					return;
				}
				o.validators.push({ validator: a, classGroupId: r });
				return;
			}
			Object.entries(a).forEach(([d, l]) => {
				ge(l, _e(o, d), r, t);
			});
		});
	},
	_e = (e, o) => {
		let r = e;
		return (
			o.split(ye).forEach((t) => {
				r.nextPart.has(t) ||
					r.nextPart.set(t, { nextPart: new Map(), validators: [] }),
					(r = r.nextPart.get(t));
			}),
			r
		);
	},
	fo = (e) => e.isThemeGetter,
	bo = (e) => {
		if (e < 1) return { get: () => {}, set: () => {} };
		let o = 0,
			r = new Map(),
			t = new Map();
		const a = (d, l) => {
			r.set(d, l), o++, o > e && ((o = 0), (t = r), (r = new Map()));
		};
		return {
			get(d) {
				let l = r.get(d);
				if (l !== void 0) return l;
				if ((l = t.get(d)) !== void 0) return a(d, l), l;
			},
			set(d, l) {
				r.has(d) ? r.set(d, l) : a(d, l);
			},
		};
	},
	he = "!",
	we = ":",
	go = we.length,
	ho = (e) => {
		const { prefix: o, experimentalParseClassName: r } = e;
		let t = (a) => {
			const d = [];
			let l = 0,
				u = 0,
				i = 0,
				f;
			for (let y = 0; y < a.length; y++) {
				let k = a[y];
				if (l === 0 && u === 0) {
					if (k === we) {
						d.push(a.slice(i, y)), (i = y + go);
						continue;
					}
					if (k === "/") {
						f = y;
						continue;
					}
				}
				k === "[" ? l++ : k === "]" ? l-- : k === "(" ? u++ : k === ")" && u--;
			}
			const h = d.length === 0 ? a : a.substring(i),
				C = wo(h),
				j = C !== h,
				F = f && f > i ? f - i : void 0;
			return {
				modifiers: d,
				hasImportantModifier: j,
				baseClassName: C,
				maybePostfixModifierPosition: F,
			};
		};
		if (o) {
			const a = o + we,
				d = t;
			t = (l) =>
				l.startsWith(a)
					? d(l.substring(a.length))
					: {
							isExternal: !0,
							modifiers: [],
							hasImportantModifier: !1,
							baseClassName: l,
							maybePostfixModifierPosition: void 0,
					  };
		}
		if (r) {
			const a = t;
			t = (d) => r({ className: d, parseClassName: a });
		}
		return t;
	},
	wo = (e) =>
		e.endsWith(he)
			? e.substring(0, e.length - 1)
			: e.startsWith(he)
			? e.substring(1)
			: e,
	xo = (e) => {
		const o = Object.fromEntries(e.orderSensitiveModifiers.map((t) => [t, !0]));
		return (t) => {
			if (t.length <= 1) return t;
			const a = [];
			let d = [];
			return (
				t.forEach((l) => {
					l[0] === "[" || o[l] ? (a.push(...d.sort(), l), (d = [])) : d.push(l);
				}),
				a.push(...d.sort()),
				a
			);
		};
	},
	yo = (e) => ({
		cache: bo(e.cacheSize),
		parseClassName: ho(e),
		sortModifiers: xo(e),
		...mo(e),
	}),
	ko = /\s+/,
	vo = (e, o) => {
		const {
				parseClassName: r,
				getClassGroupId: t,
				getConflictingClassGroupIds: a,
				sortModifiers: d,
			} = o,
			l = [],
			u = e.trim().split(ko);
		let i = "";
		for (let f = u.length - 1; f >= 0; f -= 1) {
			const h = u[f],
				{
					isExternal: C,
					modifiers: j,
					hasImportantModifier: F,
					baseClassName: y,
					maybePostfixModifierPosition: k,
				} = r(h);
			if (C) {
				i = h + (i.length > 0 ? " " + i : i);
				continue;
			}
			let E = !!k,
				I = t(E ? y.substring(0, k) : y);
			if (!I) {
				if (!E) {
					i = h + (i.length > 0 ? " " + i : i);
					continue;
				}
				if (((I = t(y)), !I)) {
					i = h + (i.length > 0 ? " " + i : i);
					continue;
				}
				E = !1;
			}
			const q = d(j).join(":"),
				U = F ? q + he : q,
				G = U + I;
			if (l.includes(G)) continue;
			l.push(G);
			const L = a(I, E);
			for (let R = 0; R < L.length; ++R) {
				const B = L[R];
				l.push(U + B);
			}
			i = h + (i.length > 0 ? " " + i : i);
		}
		return i;
	};
function zo() {
	let e = 0,
		o,
		r,
		t = "";
	for (; e < arguments.length; )
		(o = arguments[e++]) && (r = De(o)) && (t && (t += " "), (t += r));
	return t;
}
const De = (e) => {
	if (typeof e == "string") return e;
	let o,
		r = "";
	for (let t = 0; t < e.length; t++)
		e[t] && (o = De(e[t])) && (r && (r += " "), (r += o));
	return r;
};
function So(e, ...o) {
	let r,
		t,
		a,
		d = l;
	function l(i) {
		const f = o.reduce((h, C) => C(h), e());
		return (r = yo(f)), (t = r.cache.get), (a = r.cache.set), (d = u), u(i);
	}
	function u(i) {
		const f = t(i);
		if (f) return f;
		const h = vo(i, r);
		return a(i, h), h;
	}
	return function () {
		return d(zo.apply(null, arguments));
	};
}
const b = (e) => {
		const o = (r) => r[e] || [];
		return (o.isThemeGetter = !0), o;
	},
	He = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
	qe = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
	Ao = /^\d+\/\d+$/,
	Co = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	Mo =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	Io = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
	Ro = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
	To =
		/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
	N = (e) => Ao.test(e),
	p = (e) => !!e && !Number.isNaN(Number(e)),
	M = (e) => !!e && Number.isInteger(Number(e)),
	le = (e) => e.endsWith("%") && p(e.slice(0, -1)),
	S = (e) => Co.test(e),
	Po = () => !0,
	Eo = (e) => Mo.test(e) && !Io.test(e),
	Je = () => !1,
	Go = (e) => Ro.test(e),
	Lo = (e) => To.test(e),
	_o = (e) => !s(e) && !n(e),
	No = (e) => O(e, Qe, Je),
	s = (e) => He.test(e),
	P = (e) => O(e, Ze, Eo),
	ce = (e) => O(e, Uo, p),
	Ne = (e) => O(e, Xe, Je),
	Oo = (e) => O(e, Ye, Lo),
	$ = (e) => O(e, Ke, Go),
	n = (e) => qe.test(e),
	W = (e) => V(e, Ze),
	Vo = (e) => V(e, Bo),
	Oe = (e) => V(e, Xe),
	jo = (e) => V(e, Qe),
	Fo = (e) => V(e, Ye),
	ee = (e) => V(e, Ke, !0),
	O = (e, o, r) => {
		const t = He.exec(e);
		return t ? (t[1] ? o(t[1]) : r(t[2])) : !1;
	},
	V = (e, o, r = !1) => {
		const t = qe.exec(e);
		return t ? (t[1] ? o(t[1]) : r) : !1;
	},
	Xe = (e) => e === "position" || e === "percentage",
	Ye = (e) => e === "image" || e === "url",
	Qe = (e) => e === "length" || e === "size" || e === "bg-size",
	Ze = (e) => e === "length",
	Uo = (e) => e === "number",
	Bo = (e) => e === "family-name",
	Ke = (e) => e === "shadow",
	Wo = () => {
		const e = b("color"),
			o = b("font"),
			r = b("text"),
			t = b("font-weight"),
			a = b("tracking"),
			d = b("leading"),
			l = b("breakpoint"),
			u = b("container"),
			i = b("spacing"),
			f = b("radius"),
			h = b("shadow"),
			C = b("inset-shadow"),
			j = b("text-shadow"),
			F = b("drop-shadow"),
			y = b("blur"),
			k = b("perspective"),
			E = b("aspect"),
			I = b("ease"),
			q = b("animate"),
			U = () => [
				"auto",
				"avoid",
				"all",
				"avoid-page",
				"page",
				"left",
				"right",
				"column",
			],
			G = () => [
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
			L = () => [...G(), n, s],
			R = () => ["auto", "hidden", "clip", "visible", "scroll"],
			B = () => ["auto", "contain", "none"],
			m = () => [n, s, i],
			v = () => [N, "full", "auto", ...m()],
			ke = () => [M, "none", "subgrid", n, s],
			ve = () => ["auto", { span: ["full", M, n, s] }, M, n, s],
			J = () => [M, "auto", n, s],
			ze = () => ["auto", "min", "max", "fr", n, s],
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
			_ = () => [
				"start",
				"end",
				"center",
				"stretch",
				"center-safe",
				"end-safe",
			],
			z = () => ["auto", ...m()],
			T = () => [
				N,
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
			c = () => [e, n, s],
			Se = () => [...G(), Oe, Ne, { position: [n, s] }],
			Ae = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
			Ce = () => ["auto", "cover", "contain", jo, No, { size: [n, s] }],
			te = () => [le, W, P],
			w = () => ["", "none", "full", f, n, s],
			x = () => ["", p, W, P],
			X = () => ["solid", "dashed", "dotted", "double"],
			Me = () => [
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
			g = () => [p, le, Oe, Ne],
			Ie = () => ["", "none", y, n, s],
			Y = () => ["none", p, n, s],
			Q = () => ["none", p, n, s],
			se = () => [p, n, s],
			Z = () => [N, "full", ...m()];
		return {
			cacheSize: 500,
			theme: {
				animate: ["spin", "ping", "pulse", "bounce"],
				aspect: ["video"],
				blur: [S],
				breakpoint: [S],
				color: [Po],
				container: [S],
				"drop-shadow": [S],
				ease: ["in", "out", "in-out"],
				font: [_o],
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
				aspect: [{ aspect: ["auto", "square", N, s, n, E] }],
				container: ["container"],
				columns: [{ columns: [p, s, n, u] }],
				"break-after": [{ "break-after": U() }],
				"break-before": [{ "break-before": U() }],
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
				"object-position": [{ object: L() }],
				overflow: [{ overflow: R() }],
				"overflow-x": [{ "overflow-x": R() }],
				"overflow-y": [{ "overflow-y": R() }],
				overscroll: [{ overscroll: B() }],
				"overscroll-x": [{ "overscroll-x": B() }],
				"overscroll-y": [{ "overscroll-y": B() }],
				position: ["static", "fixed", "absolute", "relative", "sticky"],
				inset: [{ inset: v() }],
				"inset-x": [{ "inset-x": v() }],
				"inset-y": [{ "inset-y": v() }],
				start: [{ start: v() }],
				end: [{ end: v() }],
				top: [{ top: v() }],
				right: [{ right: v() }],
				bottom: [{ bottom: v() }],
				left: [{ left: v() }],
				visibility: ["visible", "invisible", "collapse"],
				z: [{ z: [M, "auto", n, s] }],
				basis: [{ basis: [N, "full", "auto", u, ...m()] }],
				"flex-direction": [
					{ flex: ["row", "row-reverse", "col", "col-reverse"] },
				],
				"flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
				flex: [{ flex: [p, N, "auto", "initial", "none", s] }],
				grow: [{ grow: ["", p, n, s] }],
				shrink: [{ shrink: ["", p, n, s] }],
				order: [{ order: [M, "first", "last", "none", n, s] }],
				"grid-cols": [{ "grid-cols": ke() }],
				"col-start-end": [{ col: ve() }],
				"col-start": [{ "col-start": J() }],
				"col-end": [{ "col-end": J() }],
				"grid-rows": [{ "grid-rows": ke() }],
				"row-start-end": [{ row: ve() }],
				"row-start": [{ "row-start": J() }],
				"row-end": [{ "row-end": J() }],
				"grid-flow": [
					{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
				],
				"auto-cols": [{ "auto-cols": ze() }],
				"auto-rows": [{ "auto-rows": ze() }],
				gap: [{ gap: m() }],
				"gap-x": [{ "gap-x": m() }],
				"gap-y": [{ "gap-y": m() }],
				"justify-content": [{ justify: [...re(), "normal"] }],
				"justify-items": [{ "justify-items": [..._(), "normal"] }],
				"justify-self": [{ "justify-self": ["auto", ..._()] }],
				"align-content": [{ content: ["normal", ...re()] }],
				"align-items": [{ items: [..._(), { baseline: ["", "last"] }] }],
				"align-self": [{ self: ["auto", ..._(), { baseline: ["", "last"] }] }],
				"place-content": [{ "place-content": re() }],
				"place-items": [{ "place-items": [..._(), "baseline"] }],
				"place-self": [{ "place-self": ["auto", ..._()] }],
				p: [{ p: m() }],
				px: [{ px: m() }],
				py: [{ py: m() }],
				ps: [{ ps: m() }],
				pe: [{ pe: m() }],
				pt: [{ pt: m() }],
				pr: [{ pr: m() }],
				pb: [{ pb: m() }],
				pl: [{ pl: m() }],
				m: [{ m: z() }],
				mx: [{ mx: z() }],
				my: [{ my: z() }],
				ms: [{ ms: z() }],
				me: [{ me: z() }],
				mt: [{ mt: z() }],
				mr: [{ mr: z() }],
				mb: [{ mb: z() }],
				ml: [{ ml: z() }],
				"space-x": [{ "space-x": m() }],
				"space-x-reverse": ["space-x-reverse"],
				"space-y": [{ "space-y": m() }],
				"space-y-reverse": ["space-y-reverse"],
				size: [{ size: T() }],
				w: [{ w: [u, "screen", ...T()] }],
				"min-w": [{ "min-w": [u, "screen", "none", ...T()] }],
				"max-w": [
					{ "max-w": [u, "screen", "none", "prose", { screen: [l] }, ...T()] },
				],
				h: [{ h: ["screen", "lh", ...T()] }],
				"min-h": [{ "min-h": ["screen", "lh", "none", ...T()] }],
				"max-h": [{ "max-h": ["screen", "lh", ...T()] }],
				"font-size": [{ text: ["base", r, W, P] }],
				"font-smoothing": ["antialiased", "subpixel-antialiased"],
				"font-style": ["italic", "not-italic"],
				"font-weight": [{ font: [t, n, ce] }],
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
							le,
							s,
						],
					},
				],
				"font-family": [{ font: [Vo, s, o] }],
				"fvn-normal": ["normal-nums"],
				"fvn-ordinal": ["ordinal"],
				"fvn-slashed-zero": ["slashed-zero"],
				"fvn-figure": ["lining-nums", "oldstyle-nums"],
				"fvn-spacing": ["proportional-nums", "tabular-nums"],
				"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
				tracking: [{ tracking: [a, n, s] }],
				"line-clamp": [{ "line-clamp": [p, "none", n, ce] }],
				leading: [{ leading: [d, ...m()] }],
				"list-image": [{ "list-image": ["none", n, s] }],
				"list-style-position": [{ list: ["inside", "outside"] }],
				"list-style-type": [{ list: ["disc", "decimal", "none", n, s] }],
				"text-alignment": [
					{ text: ["left", "center", "right", "justify", "start", "end"] },
				],
				"placeholder-color": [{ placeholder: c() }],
				"text-color": [{ text: c() }],
				"text-decoration": [
					"underline",
					"overline",
					"line-through",
					"no-underline",
				],
				"text-decoration-style": [{ decoration: [...X(), "wavy"] }],
				"text-decoration-thickness": [
					{ decoration: [p, "from-font", "auto", n, P] },
				],
				"text-decoration-color": [{ decoration: c() }],
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
				"bg-position": [{ bg: Se() }],
				"bg-repeat": [{ bg: Ae() }],
				"bg-size": [{ bg: Ce() }],
				"bg-image": [
					{
						bg: [
							"none",
							{
								linear: [
									{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
									M,
									n,
									s,
								],
								radial: ["", n, s],
								conic: [M, n, s],
							},
							Fo,
							Oo,
						],
					},
				],
				"bg-color": [{ bg: c() }],
				"gradient-from-pos": [{ from: te() }],
				"gradient-via-pos": [{ via: te() }],
				"gradient-to-pos": [{ to: te() }],
				"gradient-from": [{ from: c() }],
				"gradient-via": [{ via: c() }],
				"gradient-to": [{ to: c() }],
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
				"border-w": [{ border: x() }],
				"border-w-x": [{ "border-x": x() }],
				"border-w-y": [{ "border-y": x() }],
				"border-w-s": [{ "border-s": x() }],
				"border-w-e": [{ "border-e": x() }],
				"border-w-t": [{ "border-t": x() }],
				"border-w-r": [{ "border-r": x() }],
				"border-w-b": [{ "border-b": x() }],
				"border-w-l": [{ "border-l": x() }],
				"divide-x": [{ "divide-x": x() }],
				"divide-x-reverse": ["divide-x-reverse"],
				"divide-y": [{ "divide-y": x() }],
				"divide-y-reverse": ["divide-y-reverse"],
				"border-style": [{ border: [...X(), "hidden", "none"] }],
				"divide-style": [{ divide: [...X(), "hidden", "none"] }],
				"border-color": [{ border: c() }],
				"border-color-x": [{ "border-x": c() }],
				"border-color-y": [{ "border-y": c() }],
				"border-color-s": [{ "border-s": c() }],
				"border-color-e": [{ "border-e": c() }],
				"border-color-t": [{ "border-t": c() }],
				"border-color-r": [{ "border-r": c() }],
				"border-color-b": [{ "border-b": c() }],
				"border-color-l": [{ "border-l": c() }],
				"divide-color": [{ divide: c() }],
				"outline-style": [{ outline: [...X(), "none", "hidden"] }],
				"outline-offset": [{ "outline-offset": [p, n, s] }],
				"outline-w": [{ outline: ["", p, W, P] }],
				"outline-color": [{ outline: c() }],
				shadow: [{ shadow: ["", "none", h, ee, $] }],
				"shadow-color": [{ shadow: c() }],
				"inset-shadow": [{ "inset-shadow": ["none", C, ee, $] }],
				"inset-shadow-color": [{ "inset-shadow": c() }],
				"ring-w": [{ ring: x() }],
				"ring-w-inset": ["ring-inset"],
				"ring-color": [{ ring: c() }],
				"ring-offset-w": [{ "ring-offset": [p, P] }],
				"ring-offset-color": [{ "ring-offset": c() }],
				"inset-ring-w": [{ "inset-ring": x() }],
				"inset-ring-color": [{ "inset-ring": c() }],
				"text-shadow": [{ "text-shadow": ["none", j, ee, $] }],
				"text-shadow-color": [{ "text-shadow": c() }],
				opacity: [{ opacity: [p, n, s] }],
				"mix-blend": [
					{ "mix-blend": [...Me(), "plus-darker", "plus-lighter"] },
				],
				"bg-blend": [{ "bg-blend": Me() }],
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
				"mask-image-linear-from-color": [{ "mask-linear-from": c() }],
				"mask-image-linear-to-color": [{ "mask-linear-to": c() }],
				"mask-image-t-from-pos": [{ "mask-t-from": g() }],
				"mask-image-t-to-pos": [{ "mask-t-to": g() }],
				"mask-image-t-from-color": [{ "mask-t-from": c() }],
				"mask-image-t-to-color": [{ "mask-t-to": c() }],
				"mask-image-r-from-pos": [{ "mask-r-from": g() }],
				"mask-image-r-to-pos": [{ "mask-r-to": g() }],
				"mask-image-r-from-color": [{ "mask-r-from": c() }],
				"mask-image-r-to-color": [{ "mask-r-to": c() }],
				"mask-image-b-from-pos": [{ "mask-b-from": g() }],
				"mask-image-b-to-pos": [{ "mask-b-to": g() }],
				"mask-image-b-from-color": [{ "mask-b-from": c() }],
				"mask-image-b-to-color": [{ "mask-b-to": c() }],
				"mask-image-l-from-pos": [{ "mask-l-from": g() }],
				"mask-image-l-to-pos": [{ "mask-l-to": g() }],
				"mask-image-l-from-color": [{ "mask-l-from": c() }],
				"mask-image-l-to-color": [{ "mask-l-to": c() }],
				"mask-image-x-from-pos": [{ "mask-x-from": g() }],
				"mask-image-x-to-pos": [{ "mask-x-to": g() }],
				"mask-image-x-from-color": [{ "mask-x-from": c() }],
				"mask-image-x-to-color": [{ "mask-x-to": c() }],
				"mask-image-y-from-pos": [{ "mask-y-from": g() }],
				"mask-image-y-to-pos": [{ "mask-y-to": g() }],
				"mask-image-y-from-color": [{ "mask-y-from": c() }],
				"mask-image-y-to-color": [{ "mask-y-to": c() }],
				"mask-image-radial": [{ "mask-radial": [n, s] }],
				"mask-image-radial-from-pos": [{ "mask-radial-from": g() }],
				"mask-image-radial-to-pos": [{ "mask-radial-to": g() }],
				"mask-image-radial-from-color": [{ "mask-radial-from": c() }],
				"mask-image-radial-to-color": [{ "mask-radial-to": c() }],
				"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
				"mask-image-radial-size": [
					{
						"mask-radial": [
							{ closest: ["side", "corner"], farthest: ["side", "corner"] },
						],
					},
				],
				"mask-image-radial-pos": [{ "mask-radial-at": G() }],
				"mask-image-conic-pos": [{ "mask-conic": [p] }],
				"mask-image-conic-from-pos": [{ "mask-conic-from": g() }],
				"mask-image-conic-to-pos": [{ "mask-conic-to": g() }],
				"mask-image-conic-from-color": [{ "mask-conic-from": c() }],
				"mask-image-conic-to-color": [{ "mask-conic-to": c() }],
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
				"mask-position": [{ mask: Se() }],
				"mask-repeat": [{ mask: Ae() }],
				"mask-size": [{ mask: Ce() }],
				"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
				"mask-image": [{ mask: ["none", n, s] }],
				filter: [{ filter: ["", "none", n, s] }],
				blur: [{ blur: Ie() }],
				brightness: [{ brightness: [p, n, s] }],
				contrast: [{ contrast: [p, n, s] }],
				"drop-shadow": [{ "drop-shadow": ["", "none", F, ee, $] }],
				"drop-shadow-color": [{ "drop-shadow": c() }],
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
				ease: [{ ease: ["linear", "initial", I, n, s] }],
				delay: [{ delay: [p, n, s] }],
				animate: [{ animate: ["none", q, n, s] }],
				backface: [{ backface: ["hidden", "visible"] }],
				perspective: [{ perspective: [k, n, s] }],
				"perspective-origin": [{ "perspective-origin": L() }],
				rotate: [{ rotate: Y() }],
				"rotate-x": [{ "rotate-x": Y() }],
				"rotate-y": [{ "rotate-y": Y() }],
				"rotate-z": [{ "rotate-z": Y() }],
				scale: [{ scale: Q() }],
				"scale-x": [{ "scale-x": Q() }],
				"scale-y": [{ "scale-y": Q() }],
				"scale-z": [{ "scale-z": Q() }],
				"scale-3d": ["scale-3d"],
				skew: [{ skew: se() }],
				"skew-x": [{ "skew-x": se() }],
				"skew-y": [{ "skew-y": se() }],
				transform: [{ transform: [n, s, "", "none", "gpu", "cpu"] }],
				"transform-origin": [{ origin: L() }],
				"transform-style": [{ transform: ["3d", "flat"] }],
				translate: [{ translate: Z() }],
				"translate-x": [{ "translate-x": Z() }],
				"translate-y": [{ "translate-y": Z() }],
				"translate-z": [{ "translate-z": Z() }],
				"translate-none": ["translate-none"],
				accent: [{ accent: c() }],
				appearance: [{ appearance: ["none", "auto"] }],
				"caret-color": [{ caret: c() }],
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
				fill: [{ fill: ["none", ...c()] }],
				"stroke-w": [{ stroke: [p, W, P, ce] }],
				stroke: [{ stroke: ["none", ...c()] }],
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
	Do = So(Wo);
var Ho = xe('<img class="pixelated bg-base-200" alt="User profile"/>'),
	qo = xe("<div><div><!></div></div>");
function $o(e, o) {
	Fe(o, !0);
	var r = qo();
	let t;
	var a = de(r),
		d = de(a);
	{
		var l = (i) => {
				co(i, {
					get userId() {
						return o.userId;
					},
				});
			},
			u = (i) => {
				var f = Ho();
				pe(() => to(f, "src", o.pictureUrl)), ue(i, f);
			};
		oo(d, (i) => {
			o.pictureUrl ? i(u, !1) : i(l);
		});
	}
	me(a),
		me(r),
		pe(
			(i, f) => {
				(t = fe(r, 1, "avatar relative rounded-full", null, t, i)), fe(a, 1, f);
			},
			[
				() => ({ "border-3": o.isSuspended, "border-red-500": o.isSuspended }),
				() => ro(Do("border-base-300 size-20 rounded-full border-2", o.class)),
			]
		),
		ue(e, r),
		Ue();
}
export { $o as P, co as a, Do as t };

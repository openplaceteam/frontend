import {
	aj as v,
	O as A,
	U as T,
	ak as L,
	a7 as k,
	ag as p,
	T as h,
	N as D,
	e as M,
	o as u,
	V as S,
	af as Y,
	al as j,
	a9 as C,
	a0 as H,
	am as V,
	an as N,
	ao as W,
	ap as y,
	aq as $,
	j as q,
	k as F,
	h as w,
	p as P,
	w as U,
	ah as z,
	ab as B,
	c as G,
} from "./CMvZtFtm.js";
import { r as J } from "./P77cUGnY.js";
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
			a = new e.Error().stack;
		a &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[a] = "091e34c6-a6e4-4616-9b7c-d8a0b150b9c0"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-091e34c6-a6e4-4616-9b7c-d8a0b150b9c0"));
	})();
} catch {}
let R = !0;
function Z(e, a) {
	var t = a == null ? "" : typeof a == "object" ? a + "" : a;
	t !== (e.__t ?? (e.__t = e.nodeValue)) &&
		((e.__t = t), (e.nodeValue = t + ""));
}
function K(e, a) {
	return I(e, a);
}
function x(e, a) {
	v(), (a.intro = a.intro ?? !1);
	const t = a.target,
		c = w,
		_ = u;
	try {
		for (var s = A(t); s && (s.nodeType !== T || s.data !== L); ) s = k(s);
		if (!s) throw p;
		h(!0), D(s), M();
		const d = I(e, { ...a, anchor: s });
		if (u === null || u.nodeType !== T || u.data !== S) throw (Y(), p);
		return h(!1), d;
	} catch (d) {
		if (
			d instanceof Error &&
			d.message
				.split(
					`
`
				)
				.some((f) => f.startsWith("https://svelte.dev/e/"))
		)
			throw d;
		return (
			d !== p && console.warn("Failed to hydrate: ", d),
			a.recover === !1 && j(),
			v(),
			C(t),
			h(!1),
			K(e, a)
		);
	} finally {
		h(c), D(_), J();
	}
}
const i = new Map();
function I(
	e,
	{ target: a, anchor: t, props: c = {}, events: _, context: s, intro: d = !0 }
) {
	v();
	var f = new Set(),
		g = (o) => {
			for (var n = 0; n < o.length; n++) {
				var r = o[n];
				if (!f.has(r)) {
					f.add(r);
					var l = $(r);
					a.addEventListener(r, y, { passive: l });
					var E = i.get(r);
					E === void 0
						? (document.addEventListener(r, y, { passive: l }), i.set(r, 1))
						: i.set(r, E + 1);
				}
			}
		};
	g(H(V)), N.add(g);
	var b = void 0,
		O = W(() => {
			var o = t ?? a.appendChild(q());
			return (
				F(() => {
					if (s) {
						P({});
						var n = U;
						n.c = s;
					}
					_ && (c.$$events = _),
						w && z(o, null),
						(R = d),
						(b = e(o, c) || {}),
						(R = !0),
						w && (B.nodes_end = u),
						s && G();
				}),
				() => {
					var l;
					for (var n of f) {
						a.removeEventListener(n, y);
						var r = i.get(n);
						--r === 0
							? (document.removeEventListener(n, y), i.delete(n))
							: i.set(n, r);
					}
					N.delete(g),
						o !== t && ((l = o.parentNode) == null || l.removeChild(o));
				}
			);
		});
	return m.set(b, O), b;
}
let m = new WeakMap();
function ee(e, a) {
	const t = m.get(e);
	return t ? (m.delete(e), t(a)) : Promise.resolve();
}
export { R as a, x as h, K as m, Z as s, ee as u };

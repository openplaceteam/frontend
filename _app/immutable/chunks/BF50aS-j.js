import {
	i as x,
	h as I,
	e as L,
	E as Y,
	Q as U,
	R as j,
	S as B,
	N as M,
	T as D,
	j as q,
	k as O,
	l as C,
	aM as F,
	m as K,
	a2 as z,
	q as Q,
	o as Z,
	aN as m,
	aO as $,
	aP as G,
	g as T,
	D as H,
	P as V,
	av as W,
	aw as X,
	aQ as J,
	ab as k,
	aR as ee,
	aS as re,
	z as ne,
	aE as te,
	aT as ae,
	aU as se,
	aV as ie,
	ad as A,
	aW as N,
	aX as y,
} from "./CMvZtFtm.js";
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
			r = new e.Error().stack;
		r &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[r] = "fa4d28dc-79ce-49af-88f2-dcb89d2725c4"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-fa4d28dc-79ce-49af-88f2-dcb89d2725c4"));
	})();
} catch {}
function oe(e, r, t = !1) {
	I && L();
	var n = e,
		a = null,
		f = null,
		l = F,
		c = t ? Y : 0,
		p = !1;
	const S = (d, i = !0) => {
		(p = !0), _(i, d);
	};
	var u = null;
	function w() {
		u !== null && (u.lastChild.remove(), n.before(u), (u = null));
		var d = l ? a : f,
			i = l ? f : a;
		d && z(d),
			i &&
				Q(i, () => {
					l ? (f = null) : (a = null);
				});
	}
	const _ = (d, i) => {
		if (l === (l = d)) return;
		let E = !1;
		if (I) {
			const b = U(n) === j;
			!!l === b && ((n = B()), M(n), D(!1), (E = !0));
		}
		var v = K(),
			o = n;
		if (
			(v && ((u = document.createDocumentFragment()), u.append((o = q()))),
			l ? a ?? (a = i && O(() => i(o))) : f ?? (f = i && O(() => i(o))),
			v)
		) {
			var h = C,
				g = l ? a : f,
				s = l ? f : a;
			g && h.skipped_effects.delete(g),
				s && h.skipped_effects.add(s),
				h.add_callback(w);
		} else w();
		E && D(!0);
	};
	x(() => {
		(p = !1), r(S), p || _(null, null);
	}, c),
		I && (n = Z);
}
let P = !1;
function fe(e) {
	var r = P;
	try {
		return (P = !1), [e(), P];
	} finally {
		P = r;
	}
}
function ce(e, r = 1) {
	const t = e();
	return e(t + r), t;
}
const ue = {
	get(e, r) {
		if (!e.exclude.includes(r)) return e.props[r];
	},
	set(e, r) {
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		if (!e.exclude.includes(r) && r in e.props)
			return { enumerable: !0, configurable: !0, value: e.props[r] };
	},
	has(e, r) {
		return e.exclude.includes(r) ? !1 : r in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
	},
};
function _e(e, r, t) {
	return new Proxy({ props: e, exclude: r }, ue);
}
const le = {
	get(e, r) {
		let t = e.props.length;
		for (; t--; ) {
			let n = e.props[t];
			if ((y(n) && (n = n()), typeof n == "object" && n !== null && r in n))
				return n[r];
		}
	},
	set(e, r, t) {
		let n = e.props.length;
		for (; n--; ) {
			let a = e.props[n];
			y(a) && (a = a());
			const f = m(a, r);
			if (f && f.set) return f.set(t), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		let t = e.props.length;
		for (; t--; ) {
			let n = e.props[t];
			if ((y(n) && (n = n()), typeof n == "object" && n !== null && r in n)) {
				const a = m(n, r);
				return a && !a.configurable && (a.configurable = !0), a;
			}
		}
	},
	has(e, r) {
		if (r === A || r === N) return !1;
		for (let t of e.props)
			if ((y(t) && (t = t()), t != null && r in t)) return !0;
		return !1;
	},
	ownKeys(e) {
		const r = [];
		for (let t of e.props)
			if ((y(t) && (t = t()), !!t)) {
				for (const n in t) r.includes(n) || r.push(n);
				for (const n of Object.getOwnPropertySymbols(t))
					r.includes(n) || r.push(n);
			}
		return r;
	},
};
function pe(...e) {
	return new Proxy({ props: e }, le);
}
function ve(e, r, t, n) {
	var g;
	var a = !te || (t & ae) !== 0,
		f = (t & re) !== 0,
		l = (t & ie) !== 0,
		c = n,
		p = !0,
		S = () => (p && ((p = !1), (c = l ? ne(n) : n)), c),
		u;
	if (f) {
		var w = A in e || N in e;
		u =
			((g = m(e, r)) == null ? void 0 : g.set) ??
			(w && r in e ? (s) => (e[r] = s) : void 0);
	}
	var _,
		d = !1;
	f ? ([_, d] = fe(() => e[r])) : (_ = e[r]),
		_ === void 0 && n !== void 0 && ((_ = S()), u && (a && $(), u(_)));
	var i;
	if (
		(a
			? (i = () => {
					var s = e[r];
					return s === void 0 ? S() : ((p = !0), s);
			  })
			: (i = () => {
					var s = e[r];
					return s !== void 0 && (c = void 0), s === void 0 ? c : s;
			  }),
		a && (t & G) === 0)
	)
		return i;
	if (u) {
		var E = e.$$legacy;
		return function (s, b) {
			return arguments.length > 0
				? ((!a || !b || E || d) && u(b ? i() : s), s)
				: i();
		};
	}
	var v = !1,
		o = ((t & se) !== 0 ? H : V)(() => ((v = !1), i()));
	f && T(o);
	var h = k;
	return function (s, b) {
		if (arguments.length > 0) {
			const R = b ? T(o) : a && f ? W(s) : s;
			return X(o, R), (v = !0), c !== void 0 && (c = R), s;
		}
		return (J && v) || (h.f & ee) !== 0 ? o.v : T(o);
	};
}
export { oe as i, ve as p, _e as r, pe as s, ce as u };

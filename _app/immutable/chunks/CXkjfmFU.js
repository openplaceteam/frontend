import {
	j as ee,
	i as se,
	M as ae,
	N as V,
	h as N,
	O as ue,
	e as de,
	g as J,
	P as ve,
	Q as oe,
	R as _e,
	S as K,
	T as U,
	o as M,
	U as ce,
	V as he,
	k as P,
	m as be,
	W as O,
	X as L,
	l as pe,
	Y as $,
	Z as Ee,
	_ as j,
	a0 as re,
	a1 as me,
	a2 as ne,
	q as Te,
	a3 as we,
	a4 as X,
	L as Ie,
	a5 as fe,
	a6 as Ae,
	a7 as ge,
	a8 as ye,
	a9 as De,
	aa as Ne,
	ab as Se,
} from "./CMvZtFtm.js";
(function () {
	try {
		var f =
			typeof window < "u"
				? window
				: typeof global < "u"
				? global
				: typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
				? self
				: {};
		f.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
	} catch {}
})();
try {
	(function () {
		var f =
				typeof window < "u"
					? window
					: typeof global < "u"
					? global
					: typeof globalThis < "u"
					? globalThis
					: typeof self < "u"
					? self
					: {},
			r = new f.Error().stack;
		r &&
			((f._sentryDebugIds = f._sentryDebugIds || {}),
			(f._sentryDebugIds[r] = "2b5bde17-2785-4b31-a81c-050ebb6df357"),
			(f._sentryDebugIdIdentifier =
				"sentry-dbid-2b5bde17-2785-4b31-a81c-050ebb6df357"));
	})();
} catch {}
let B = null;
function Re(f, r) {
	return r;
}
function xe(f, r, e) {
	for (var s = f.items, u = [], d = r.length, t = 0; t < d; t++)
		ye(r[t].e, u, !0);
	var c = d > 0 && u.length === 0 && e !== null;
	if (c) {
		var m = e.parentNode;
		De(m), m.append(e), s.clear(), A(f, r[0].prev, r[d - 1].next);
	}
	Ne(u, () => {
		for (var E = 0; E < d; E++) {
			var o = r[E];
			c || (s.delete(o.k), A(f, o.prev, o.next)), fe(o.e, !c);
		}
	});
}
function He(f, r, e, s, u, d = null) {
	var t = f,
		c = { flags: r, items: new Map(), first: null },
		m = (r & ae) !== 0;
	if (m) {
		var E = f;
		t = N ? V(ue(E)) : E.appendChild(ee());
	}
	N && de();
	var o = null,
		y = !1,
		T = new Map(),
		S = ve(() => {
			var v = e();
			return me(v) ? v : v == null ? [] : re(v);
		}),
		i,
		b;
	function n() {
		Ce(b, i, c, T, t, u, r, s, e),
			d !== null &&
				(i.length === 0
					? o
						? ne(o)
						: (o = P(() => d(t)))
					: o !== null &&
					  Te(o, () => {
							o = null;
					  }));
	}
	se(() => {
		b ?? (b = Se), (i = J(S));
		var v = i.length;
		if (y && v === 0) return;
		y = v === 0;
		let p = !1;
		if (N) {
			var w = oe(t) === _e;
			w !== (v === 0) && ((t = K()), V(t), U(!1), (p = !0));
		}
		if (N) {
			for (var g = null, _, a = 0; a < v; a++) {
				if (M.nodeType === ce && M.data === he) {
					(t = M), (p = !0), U(!1);
					break;
				}
				var l = i[a],
					h = s(l, a);
				(_ = Q(M, c, g, null, l, h, a, u, r, e)), c.items.set(h, _), (g = _);
			}
			v > 0 && V(K());
		}
		if (N) v === 0 && d && (o = P(() => d(t)));
		else if (be()) {
			var x = new Set(),
				R = pe;
			for (a = 0; a < v; a += 1) {
				(l = i[a]), (h = s(l, a));
				var D = c.items.get(h) ?? T.get(h);
				D
					? (r & (O | L)) !== 0 && ie(D, l, a, r)
					: ((_ = Q(null, c, null, null, l, h, a, u, r, e, !0)), T.set(h, _)),
					x.add(h);
			}
			for (const [I, H] of c.items) x.has(I) || R.skipped_effects.add(H.e);
			R.add_callback(n);
		} else n();
		p && U(!0), J(S);
	}),
		N && (t = M);
}
function Ce(f, r, e, s, u, d, t, c, m) {
	var W, Z, k, z;
	var E = (t & Ae) !== 0,
		o = (t & (O | L)) !== 0,
		y = r.length,
		T = e.items,
		S = e.first,
		i = S,
		b,
		n = null,
		v,
		p = [],
		w = [],
		g,
		_,
		a,
		l;
	if (E)
		for (l = 0; l < y; l += 1)
			(g = r[l]),
				(_ = c(g, l)),
				(a = T.get(_)),
				a !== void 0 &&
					((W = a.a) == null || W.measure(), (v ?? (v = new Set())).add(a));
	for (l = 0; l < y; l += 1) {
		if (((g = r[l]), (_ = c(g, l)), (a = T.get(_)), a === void 0)) {
			var h = s.get(_);
			if (h !== void 0) {
				s.delete(_), T.set(_, h);
				var x = n ? n.next : i;
				A(e, n, h), A(e, h, x), F(h, x, u), (n = h);
			} else {
				var R = i ? i.e.nodes_start : u;
				n = Q(R, e, n, n === null ? e.first : n.next, g, _, l, d, t, m);
			}
			T.set(_, n), (p = []), (w = []), (i = n.next);
			continue;
		}
		if (
			(o && ie(a, g, l, t),
			(a.e.f & X) !== 0 &&
				(ne(a.e),
				E &&
					((Z = a.a) == null || Z.unfix(), (v ?? (v = new Set())).delete(a))),
			a !== i)
		) {
			if (b !== void 0 && b.has(a)) {
				if (p.length < w.length) {
					var D = w[0],
						I;
					n = D.prev;
					var H = p[0],
						Y = p[p.length - 1];
					for (I = 0; I < p.length; I += 1) F(p[I], D, u);
					for (I = 0; I < w.length; I += 1) b.delete(w[I]);
					A(e, H.prev, Y.next),
						A(e, n, H),
						A(e, Y, D),
						(i = D),
						(n = Y),
						(l -= 1),
						(p = []),
						(w = []);
				} else
					b.delete(a),
						F(a, i, u),
						A(e, a.prev, a.next),
						A(e, a, n === null ? e.first : n.next),
						A(e, n, a),
						(n = a);
				continue;
			}
			for (p = [], w = []; i !== null && i.k !== _; )
				(i.e.f & X) === 0 && (b ?? (b = new Set())).add(i),
					w.push(i),
					(i = i.next);
			if (i === null) continue;
			a = i;
		}
		p.push(a), (n = a), (i = a.next);
	}
	if (i !== null || b !== void 0) {
		for (var C = b === void 0 ? [] : re(b); i !== null; )
			(i.e.f & X) === 0 && C.push(i), (i = i.next);
		var q = C.length;
		if (q > 0) {
			var le = (t & ae) !== 0 && y === 0 ? u : null;
			if (E) {
				for (l = 0; l < q; l += 1) (k = C[l].a) == null || k.measure();
				for (l = 0; l < q; l += 1) (z = C[l].a) == null || z.fix();
			}
			xe(e, C, le);
		}
	}
	E &&
		Ie(() => {
			var G;
			if (v !== void 0) for (a of v) (G = a.a) == null || G.apply();
		}),
		(f.first = e.first && e.first.e),
		(f.last = n && n.e);
	for (var te of s.values()) fe(te.e);
	s.clear();
}
function ie(f, r, e, s) {
	(s & O) !== 0 && $(f.v, r), (s & L) !== 0 ? $(f.i, e) : (f.i = e);
}
function Q(f, r, e, s, u, d, t, c, m, E, o) {
	var y = B,
		T = (m & O) !== 0,
		S = (m & we) === 0,
		i = T ? (S ? Ee(u, !1, !1) : j(u)) : u,
		b = (m & L) === 0 ? t : j(t),
		n = { i: b, v: i, k: d, a: null, e: null, prev: e, next: s };
	B = n;
	try {
		if (f === null) {
			var v = document.createDocumentFragment();
			v.append((f = ee()));
		}
		return (
			(n.e = P(() => c(f, i, b, E), N)),
			(n.e.prev = e && e.e),
			(n.e.next = s && s.e),
			e === null ? o || (r.first = n) : ((e.next = n), (e.e.next = n.e)),
			s !== null && ((s.prev = n), (s.e.prev = n.e)),
			n
		);
	} finally {
		B = y;
	}
}
function F(f, r, e) {
	for (
		var s = f.next ? f.next.e.nodes_start : e,
			u = r ? r.e.nodes_start : e,
			d = f.e.nodes_start;
		d !== null && d !== s;

	) {
		var t = ge(d);
		u.before(d), (d = t);
	}
}
function A(f, r, e) {
	r === null ? (f.first = e) : ((r.next = e), (r.e.next = e && e.e)),
		e !== null && ((e.prev = r), (e.e.prev = r && r.e));
}
export { B as c, He as e, Re as i };

import {
	w as p,
	x as g,
	y as d,
	z as y,
	A as _,
	B as l,
	g as u,
	C as w,
	D as h,
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
			n = new e.Error().stack;
		n &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[n] = "888755b8-82ba-4039-836b-67876fe1f611"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-888755b8-82ba-4039-836b-67876fe1f611"));
	})();
} catch {}
function m(e = !1) {
	const n = p,
		f = n.l.u;
	if (!f) return;
	let i = () => w(n.s);
	if (e) {
		let s = 0,
			t = {};
		const b = h(() => {
			let r = !1;
			const a = n.s;
			for (const o in a) a[o] !== t[o] && ((t[o] = a[o]), (r = !0));
			return r && s++, s;
		});
		i = () => u(b);
	}
	f.b.length &&
		g(() => {
			c(n, i), l(f.b);
		}),
		d(() => {
			const s = y(() => f.m.map(_));
			return () => {
				for (const t of s) typeof t == "function" && t();
			};
		}),
		f.a.length &&
			d(() => {
				c(n, i), l(f.a);
			});
}
function c(e, n) {
	if (e.l.s) for (const f of e.l.s) u(f);
	n();
}
export { m as i };

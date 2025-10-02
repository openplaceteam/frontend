import {
	t as y,
	h as c,
	e as h,
	ab as g,
	ae as p,
	o as b,
	U as w,
	a7 as v,
	af as m,
	ag as E,
	ah as u,
	N as T,
	ai as D,
	O as i,
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
			d = new e.Error().stack;
		d &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[d] = "94d4e00b-a912-44a4-9c84-3fbf1f4139c4"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-94d4e00b-a912-44a4-9c84-3fbf1f4139c4"));
	})();
} catch {}
function N(e, d, r = !1, o = !1, I = !1) {
	var l = e,
		t = "";
	y(() => {
		var n = g;
		if (t === (t = d() ?? "")) {
			c && h();
			return;
		}
		if (
			(n.nodes_start !== null &&
				(p(n.nodes_start, n.nodes_end), (n.nodes_start = n.nodes_end = null)),
			t !== "")
		) {
			if (c) {
				b.data;
				for (
					var a = h(), _ = a;
					a !== null && (a.nodeType !== w || a.data !== "");

				)
					(_ = a), (a = v(a));
				if (a === null) throw (m(), E);
				u(b, _), (l = T(a));
				return;
			}
			var s = t + "";
			r ? (s = `<svg>${s}</svg>`) : o && (s = `<math>${s}</math>`);
			var f = D(s);
			if (((r || o) && (f = i(f)), u(i(f), f.lastChild), r || o))
				for (; i(f); ) l.before(i(f));
			else l.before(f);
		}
	});
}
export { N as h };

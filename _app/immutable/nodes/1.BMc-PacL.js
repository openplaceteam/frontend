import "../chunks/Ch2Ub8FX.js";
import "../chunks/BOREeBzQ.js";
import {
	p as b,
	f as c,
	a as u,
	t as g,
	b as m,
	c as y,
	d as s,
	r as f,
	s as h,
} from "../chunks/CMvZtFtm.js";
import { s as n } from "../chunks/DVA6u9-7.js";
import { i as _ } from "../chunks/Z_72d8Vp.js";
import { p as i } from "../chunks/B6ZK_HZO.js";
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
			t = new e.Error().stack;
		t &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[t] = "9e42cebb-3df8-4a2b-82b0-9519d6cdf9ae"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-9e42cebb-3df8-4a2b-82b0-9519d6cdf9ae"));
	})();
} catch {}
var w = c("<h1> </h1> <p> </p>", 1);
function R(e, t) {
	b(t, !1), _();
	var r = w(),
		a = u(r),
		p = s(a, !0);
	f(a);
	var o = h(a, 2),
		l = s(o, !0);
	f(o),
		g(() => {
			var d;
			n(p, i.status), n(l, (d = i.error) == null ? void 0 : d.message);
		}),
		m(e, r),
		y();
}
export { R as component };

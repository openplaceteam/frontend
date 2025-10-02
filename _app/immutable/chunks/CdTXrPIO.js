import {
	h as l,
	e as u,
	i as p,
	E as y,
	j as _,
	k as g,
	l as s,
	m as h,
	o as m,
	q as v,
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
			a = new e.Error().stack;
		a &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[a] = "9dc3bcaa-438f-488e-b391-6b55ffb9a6c0"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-9dc3bcaa-438f-488e-b391-6b55ffb9a6c0"));
	})();
} catch {}
function E(e, a, b) {
	l && u();
	var t = e,
		d,
		n,
		f = null,
		o = null;
	function c() {
		n && (v(n), (n = null)),
			f && (f.lastChild.remove(), t.before(f), (f = null)),
			(n = o),
			(o = null);
	}
	p(() => {
		if (d !== (d = a())) {
			var i = h();
			if (d) {
				var r = t;
				i &&
					((f = document.createDocumentFragment()),
					f.append((r = _())),
					n && s.skipped_effects.add(n)),
					(o = g(() => b(r, d)));
			}
			i ? s.add_callback(c) : c();
		}
	}, y),
		l && (t = m);
}
export { E as c };

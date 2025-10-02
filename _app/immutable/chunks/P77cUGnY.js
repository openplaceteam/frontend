import {
	j as r,
	i as h,
	as as u,
	h as a,
	U as y,
	ak as _,
	a7 as i,
	T as f,
	N as o,
	o as s,
	O as c,
} from "./CMvZtFtm.js";
(function () {
	try {
		var n =
			typeof window < "u"
				? window
				: typeof global < "u"
				? global
				: typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
				? self
				: {};
		n.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
	} catch {}
})();
try {
	(function () {
		var n =
				typeof window < "u"
					? window
					: typeof global < "u"
					? global
					: typeof globalThis < "u"
					? globalThis
					: typeof self < "u"
					? self
					: {},
			d = new n.Error().stack;
		d &&
			((n._sentryDebugIds = n._sentryDebugIds || {}),
			(n._sentryDebugIds[d] = "83634668-25a7-4757-b236-0f768368991f"),
			(n._sentryDebugIdIdentifier =
				"sentry-dbid-83634668-25a7-4757-b236-0f768368991f"));
	})();
} catch {}
let e;
function g() {
	e = void 0;
}
function p(n) {
	let d = null,
		l = a;
	var t;
	if (a) {
		for (
			d = s, e === void 0 && (e = c(document.head));
			e !== null && (e.nodeType !== y || e.data !== _);

		)
			e = i(e);
		e === null ? f(!1) : (e = o(i(e)));
	}
	a || (t = document.head.appendChild(r()));
	try {
		h(() => n(t), u);
	} finally {
		l && (f(!0), (e = s), o(d));
	}
}
export { p as h, g as r };

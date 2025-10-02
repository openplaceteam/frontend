import "../chunks/Ch2Ub8FX.js";
import "../chunks/BOREeBzQ.js";
import { f, b as i, d, r as a, n as r } from "../chunks/CMvZtFtm.js";
import { L as s } from "../chunks/D3yDgRbd.js";
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
			(e._sentryDebugIds[t] = "dd4bfa84-6a4f-4083-bc94-ea0b0e129dfb"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-dd4bfa84-6a4f-4083-bc94-ea0b0e129dfb"));
	})();
} catch {}
var l = f(
	'<div class="flex h-full flex-col items-center justify-center gap-6"><a href="/"><!></a> <p class="max-w-3xl text-center font-medium sm:text-xl">Not found</p> <a class="btn btn-primary btn-lg" href="/">Go to map</a></div>'
);
function g(e) {
	var t = l(),
		n = d(t),
		o = d(n);
	s(o, { size: "lg", hasText: !0 }), a(n), r(4), a(t), i(e, t);
}
export { g as component };

import { ar as d } from "./CMvZtFtm.js";
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
			f = new e.Error().stack;
		f &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[f] = "04fff17c-04f8-458c-8ff9-180b80f62e15"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-04fff17c-04f8-458c-8ff9-180b80f62e15"));
	})();
} catch {}
d();

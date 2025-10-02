import { l as o, a } from "../chunks/CyB--sFG.js";
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
			(e._sentryDebugIds[d] = "5a191b66-7525-49e4-8b03-c06818aa62d5"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-5a191b66-7525-49e4-8b03-c06818aa62d5"));
	})();
} catch {}
export { o as load_css, a as start };

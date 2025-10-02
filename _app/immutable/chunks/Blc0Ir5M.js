import { g as d } from "./CV9xcpLq.js";
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
			(e._sentryDebugIds[n] = "e0ae0548-fcbf-4f39-9ea8-c8dece67686b"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-e0ae0548-fcbf-4f39-9ea8-c8dece67686b"));
	})();
} catch {}
const o = () => "No data.",
	t = () => "Sem dados.",
	l = (e = {}, n = {}) => ((n.locale ?? d()) === "en" ? o() : t());
export { l as n };

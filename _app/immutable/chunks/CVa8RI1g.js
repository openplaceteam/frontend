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
			(e._sentryDebugIds[n] = "b0beadb0-deec-4a77-af24-7bb1740c9b03"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-b0beadb0-deec-4a77-af24-7bb1740c9b03"));
	})();
} catch {}
const o = () => "Clear",
	t = () => "Limpar",
	f = (e = {}, n = {}) => ((n.locale ?? d()) === "en" ? o() : t());
export { f as c };

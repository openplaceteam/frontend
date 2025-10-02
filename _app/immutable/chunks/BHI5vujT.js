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
			(e._sentryDebugIds[n] = "a102ee55-05cc-4e26-9c0a-bd1623e19f6f"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-a102ee55-05cc-4e26-9c0a-bd1623e19f6f"));
	})();
} catch {}
const o = () => "Loading...",
	t = () => "Carregando...",
	a = (e = {}, n = {}) => ((n.locale ?? d()) === "en" ? o() : t());
export { a as l };

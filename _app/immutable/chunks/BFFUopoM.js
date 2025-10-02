import { g as o } from "./CV9xcpLq.js";
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
			(e._sentryDebugIds[n] = "a22836e1-99fe-4372-8041-51d766e562e7"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-a22836e1-99fe-4372-8041-51d766e562e7"));
	})();
} catch {}
const t = () => "Search",
	d = () => "Buscar",
	c = (e = {}, n = {}) => ((n.locale ?? o()) === "en" ? t() : d()),
	a = () => "Load more",
	l = () => "Carregar mais",
	f = (e = {}, n = {}) => ((n.locale ?? o()) === "en" ? a() : l());
export { f as l, c as s };

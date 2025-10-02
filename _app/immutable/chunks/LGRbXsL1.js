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
			(e._sentryDebugIds[n] = "6cf8a249-5900-4491-a606-2fb2ee92a24f"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-6cf8a249-5900-4491-a606-2fb2ee92a24f"));
	})();
} catch {}
const t = () => "Export CSV",
	f = () => "Exportar CSV",
	l = (e = {}, n = {}) => ((n.locale ?? o()) === "en" ? t() : f());
export { l as e };

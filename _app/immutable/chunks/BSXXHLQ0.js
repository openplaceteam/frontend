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
			(e._sentryDebugIds[n] = "488cf311-8f60-4dea-820a-6e96b60c34c0"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-488cf311-8f60-4dea-820a-6e96b60c34c0"));
	})();
} catch {}
const t = () => "Go to map",
	d = () => "Ir para o mapa",
	l = (e = {}, n = {}) => ((n.locale ?? o()) === "en" ? t() : d());
export { l as g };

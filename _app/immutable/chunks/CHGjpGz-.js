import { g as c } from "./CV9xcpLq.js";
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
			(e._sentryDebugIds[n] = "476c3416-464c-44fb-9f2f-18bebc310382"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-476c3416-464c-44fb-9f2f-18bebc310382"));
	})();
} catch {}
const o = () => "Cancel",
	t = () => "Cancelar",
	l = (e = {}, n = {}) => ((n.locale ?? c()) === "en" ? o() : t());
export { l as c };

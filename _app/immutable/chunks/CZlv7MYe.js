import { g as n } from "./CV9xcpLq.js";
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
			(e._sentryDebugIds[d] = "cb9cdd54-2441-45dd-bc58-9d9fa5dd59c8"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-cb9cdd54-2441-45dd-bc58-9d9fa5dd59c8"));
	})();
} catch {}
const o = () => "Add",
	t = () => "Adicionar",
	i = (e = {}, d = {}) => ((d.locale ?? n()) === "en" ? o() : t());
export { i as a };

import { g as f } from "./CV9xcpLq.js";
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
			(e._sentryDebugIds[n] = "b6fedc18-c426-4b17-bf09-8644b91cab4b"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-b6fedc18-c426-4b17-bf09-8644b91cab4b"));
	})();
} catch {}
const t = () => "Refresh",
	d = () => "Atualizar",
	l = (e = {}, n = {}) => ((n.locale ?? f()) === "en" ? t() : d());
export { l as r };

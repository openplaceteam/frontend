import { g as t } from "./CV9xcpLq.js";
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
			(e._sentryDebugIds[n] = "82e5352c-47b9-45dc-82d9-9c5d1081102b"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-82e5352c-47b9-45dc-82d9-9c5d1081102b"));
	})();
} catch {}
const o = () => "Open tickets",
	d = () => "Tickets abertos",
	s = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? o() : d());
export { s as o };

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
			(e._sentryDebugIds[n] = "9b7e0fbd-b2ac-4ffa-96b2-eb70cfb71837"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-9b7e0fbd-b2ac-4ffa-96b2-eb70cfb71837"));
	})();
} catch {}
const f = () => "Role",
	d = () => "Cargo",
	r = (e = {}, n = {}) => ((n.locale ?? o()) === "en" ? f() : d());
export { r };

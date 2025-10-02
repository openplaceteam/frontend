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
			o = new e.Error().stack;
		o &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[o] = "76e4e08a-3479-4679-9995-6d7032094b18"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-76e4e08a-3479-4679-9995-6d7032094b18"));
	})();
} catch {}
const d = () => "Apply",
	r = () => "Aplicar",
	f = (e = {}, o = {}) => ((o.locale ?? n()) === "en" ? d() : r()),
	a = () => "Media total per mod",
	i = () => "Media total por mod",
	b = (e = {}, o = {}) => ((o.locale ?? n()) === "en" ? a() : i()),
	l = () => "Media ban per mod",
	_ = () => "Media de banimento por mod",
	g = (e = {}, o = {}) => ((o.locale ?? n()) === "en" ? l() : _()),
	c = () => "Media ignored per mod",
	p = () => "Media de ignorados por mod",
	y = (e = {}, o = {}) => ((o.locale ?? n()) === "en" ? c() : p()),
	s = () => "Media timeout per mod",
	u = () => "Media de timeout por mod",
	w = (e = {}, o = {}) => ((o.locale ?? n()) === "en" ? s() : u());
export { f as a, g as b, y as c, w as d, b as m };

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
			(e._sentryDebugIds[n] = "78305447-0aa0-4fe7-b9f4-39f491404710"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-78305447-0aa0-4fe7-b9f4-39f491404710"));
	})();
} catch {}
const l = () => "Save",
	o = () => "Salvar",
	y = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? l() : o()),
	s = () => "Members",
	a = () => "Membros",
	_ = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? s() : a()),
	i = () => "Player",
	c = () => "Jogador",
	g = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? i() : c()),
	u = () => "Last pixel",
	f = () => "Último pixel",
	m = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? u() : f()),
	d = () => "Visit",
	p = () => "Visitar",
	v = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? d() : p());
export { m as l, _ as m, g as p, y as s, v };

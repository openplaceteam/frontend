import "../chunks/Ch2Ub8FX.js";
import "../chunks/BOREeBzQ.js";
import { o as i } from "../chunks/DoL3ojdE.js";
import {
	p as c,
	f,
	t as l,
	b,
	c as p,
	$ as m,
	s as u,
	d as s,
	r as d,
} from "../chunks/CMvZtFtm.js";
import { s as h } from "../chunks/DVA6u9-7.js";
import { h as g } from "../chunks/P77cUGnY.js";
import { i as y } from "../chunks/Z_72d8Vp.js";
import { g as _ } from "../chunks/CV9xcpLq.js";
import { g as w } from "../chunks/CyB--sFG.js";
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
			(e._sentryDebugIds[o] = "72a55a37-b288-4457-b985-9193a3894d7c"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-72a55a37-b288-4457-b985-9193a3894d7c"));
	})();
} catch {}
const x = () => "Admin dashboard content",
	v = () => "Conteúdo do painel de administração",
	D = (e = {}, o = {}) => ((o.locale ?? _()) === "en" ? x() : v());
var E = f(
	'<section class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><h2 class="text-xl font-semibold">Dashboard</h2> <p class="text-base-content/80 mt-1"> </p></section>'
);
function M(e, o) {
	c(o, !1),
		i(() => {
			w("/admin/dashboard");
		}),
		y();
	var t = E();
	g((n) => {
		m.title = "Wplace - Admin Dashboard";
	});
	var a = u(s(t), 2),
		r = s(a, !0);
	d(a), d(t), l((n) => h(r, n), [() => D()]), b(e, t), p();
}
export { M as component };

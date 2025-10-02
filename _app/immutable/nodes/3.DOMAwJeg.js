import "../chunks/Ch2Ub8FX.js";
import {
	p as E,
	f as b,
	b as f,
	c as I,
	$ as D,
	d as o,
	s as v,
	r as s,
	t as A,
	g as i,
	u as L,
} from "../chunks/CMvZtFtm.js";
import { s as R } from "../chunks/DVA6u9-7.js";
import { s as M } from "../chunks/DoL3ojdE.js";
import { k as S, t as h } from "../chunks/BBgyHb-Z.js";
import { e as W, i as $ } from "../chunks/CXkjfmFU.js";
import { h as j } from "../chunks/P77cUGnY.js";
import { c as z, s as N, a as P } from "../chunks/C5yqZvKC.js";
import { p as x } from "../chunks/B6ZK_HZO.js";
import { f as y } from "../chunks/wZ7b5CwQ.js";
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
			(e._sentryDebugIds[d] = "5182694d-9a71-4d57-8522-89f3ef7ecde6"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-5182694d-9a71-4d57-8522-89f3ef7ecde6"));
	})();
} catch {}
var Y = b('<a data-sveltekit-prefetch=""> </a>'),
	q = b("<div><!></div>"),
	B = b(
		'<div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><header class="bg-base-100 border-base-300 sticky top-0 z-20 border-b"><div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"><a class="flex items-center gap-2" href="/admin/mods"><span class="text-base-content/80 text-lg font-semibold">Mods</span></a> <div></div></div> <nav class="mx-auto max-w-7xl px-4"><div class="tabs tabs-border flex items-center gap-2 overflow-auto"></div></nav></header> <main class="mx-auto max-w-7xl px-4 py-4"><!></main></div>'
	);
function X(e, d) {
	E(d, !0);
	const c = L(() => x.url.pathname),
		g = [
			{
				label: "Leaderboard (Tickets)",
				href: "/admin/mods/leaderboard",
				key: "leaderboard",
			},
			{
				label: "Leaderboard (Reports)",
				href: "/admin/mods/leaderboard-reports",
				key: "leaderboard-reports",
			},
		];
	function _(t) {
		return i(c) === t || i(c).startsWith(t + "/");
	}
	var n = B();
	j((t) => {
		D.title = "Wplace - Admin - Mods";
	});
	var l = o(n),
		m = v(o(l), 2),
		p = o(m);
	W(
		p,
		21,
		() => g,
		$,
		(t, a) => {
			var r = Y(),
				k = o(r, !0);
			s(r),
				A(
					(T) => {
						N(r, "href", i(a).href), P(r, 1, T), R(k, i(a).label);
					},
					[
						() =>
							z({ tab: !0, "font-semibold": !0, "tab-active": _(i(a).href) }),
					]
				),
				f(t, r);
		}
	),
		s(p),
		s(m),
		s(l);
	var u = v(l, 2),
		w = o(u);
	S(
		w,
		() => x.url.pathname,
		(t) => {
			var a = q(),
				r = o(a);
			M(r, () => d.children),
				s(a),
				h(
					1,
					a,
					() => y,
					() => ({ duration: 120 })
				),
				h(
					2,
					a,
					() => y,
					() => ({ duration: 80 })
				),
				f(t, a);
		}
	),
		s(u),
		s(n),
		f(e, n),
		I();
}
export { X as component };

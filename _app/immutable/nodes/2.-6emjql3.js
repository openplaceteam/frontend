import "../chunks/Ch2Ub8FX.js";
import {
	p as L,
	f as b,
	b as f,
	c as R,
	$ as S,
	d as t,
	n as y,
	r as s,
	s as x,
	t as W,
	g as i,
	u as $,
} from "../chunks/CMvZtFtm.js";
import { s as j } from "../chunks/DVA6u9-7.js";
import { s as z } from "../chunks/DoL3ojdE.js";
import { k as M, t as g } from "../chunks/BBgyHb-Z.js";
import { e as N, i as P } from "../chunks/CXkjfmFU.js";
import { h as U } from "../chunks/P77cUGnY.js";
import { c as Y, s as q, a as B } from "../chunks/C5yqZvKC.js";
import { p as _ } from "../chunks/B6ZK_HZO.js";
import { L as C } from "../chunks/D3yDgRbd.js";
import { f as w } from "../chunks/wZ7b5CwQ.js";
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
			(e._sentryDebugIds[d] = "b13ebcf7-0e8c-49ec-bc33-0015c8d1ee6b"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-b13ebcf7-0e8c-49ec-bc33-0015c8d1ee6b"));
	})();
} catch {}
var F = b('<a data-sveltekit-prefetch=""> </a>'),
	G = b("<div><!></div>"),
	H = b(
		'<div class="bg-base-200 min-h-screen"><header class="bg-base-100 border-base-300 sticky top-0 z-20 border-b"><div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"><a class="flex items-center gap-2" href="/"><!> <span class="text-base-content/80 text-lg font-semibold">Admin</span></a> <div></div></div> <nav class="mx-auto max-w-7xl px-4"><div class="tabs tabs-border flex items-center gap-2 overflow-auto"></div></nav></header> <main class="mx-auto max-w-7xl px-4 py-4"><!></main></div>'
	);
function re(e, d) {
	L(d, !0);
	const m = $(() => _.url.pathname),
		k = [
			{ label: "Dashboard", href: "/admin/dashboard", key: "dashboard" },
			{ label: "Mods", href: "/admin/mods/leaderboard", key: "mods" },
			{ label: "Users", href: "/admin/users", key: "users" },
			{ label: "Alliances", href: "/admin/alliances", key: "alliances" },
		];
	function A(r) {
		return i(m) === r || i(m).startsWith(r + "/");
	}
	var n = H();
	U((r) => {
		S.title = "Wplace - Admin";
	});
	var l = t(n),
		c = t(l),
		p = t(c),
		D = t(p);
	C(D, { class: "h-7 w-auto" }), y(2), s(p), y(2), s(c);
	var u = x(c, 2),
		v = t(u);
	N(
		v,
		21,
		() => k,
		P,
		(r, a) => {
			var o = F(),
				I = t(o, !0);
			s(o),
				W(
					(T) => {
						q(o, "href", i(a).href), B(o, 1, T), j(I, i(a).label);
					},
					[
						() =>
							Y({ tab: !0, "font-semibold": !0, "tab-active": A(i(a).href) }),
					]
				),
				f(r, o);
		}
	),
		s(v),
		s(u),
		s(l);
	var h = x(l, 2),
		E = t(h);
	M(
		E,
		() => _.url.pathname,
		(r) => {
			var a = G(),
				o = t(a);
			z(o, () => d.children),
				s(a),
				g(
					1,
					a,
					() => w,
					() => ({ duration: 120 })
				),
				g(
					2,
					a,
					() => w,
					() => ({ duration: 80 })
				),
				f(r, a);
		}
	),
		s(h),
		s(n),
		f(e, n),
		R();
}
export { re as component };

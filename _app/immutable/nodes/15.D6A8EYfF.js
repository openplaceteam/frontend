import "../chunks/Ch2Ub8FX.js";
import "../chunks/BOREeBzQ.js";
import {
	at as v,
	p as y,
	f as x,
	s as o,
	t as u,
	b as w,
	c as I,
	$ as T,
	d as a,
	r,
} from "../chunks/CMvZtFtm.js";
import { s as m } from "../chunks/DVA6u9-7.js";
import { h as $ } from "../chunks/P77cUGnY.js";
import { i as E } from "../chunks/Z_72d8Vp.js";
import { L as k } from "../chunks/D3yDgRbd.js";
import { R as D } from "../chunks/m3o6lEf1.js";
import { W as L } from "../chunks/DCynssDD.js";
import { g as R } from "../chunks/CV9xcpLq.js";
import { r as S } from "../chunks/C3E1P42D.js";
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
			t = new e.Error().stack;
		t &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[t] = "f5fe2200-0629-4b3d-908c-fa574a4638ca"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-f5fe2200-0629-4b3d-908c-fa574a4638ca"));
	})();
} catch {}
const W = () => "No internet connection",
	z = () => "Sem conexão na internet",
	b = (e = {}, t = {}) => ((t.locale ?? R()) === "en" ? W() : z());
var N = () => {
		location.reload();
	},
	j = x(
		'<div class="relative flex h-full flex-col items-center justify-center gap-2"><a href="/"><!></a> <!> <p class="text-lg"> </p> <button class="btn btn-lg mt-4"><!> </button></div>'
	);
function M(e, t) {
	y(t, !1), E();
	var n = j();
	$((p) => {
		u((f) => (T.title = `Wplace - ${f ?? ""}`), [() => b()]);
	});
	var s = a(n),
		_ = a(s);
	k(_, {
		class: "absolute left-1/2 top-10 -translate-x-1/2",
		size: "lg",
		hasText: !0,
	}),
		r(s);
	var l = o(s, 2);
	L(l, { class: "text-base-content/80 w-40" });
	var i = o(l, 2),
		g = a(i, !0);
	r(i);
	var c = o(i, 2);
	c.__click = [N];
	var d = a(c);
	D(d, { class: "size-5" });
	var h = o(d);
	r(c),
		r(n),
		u(
			(p, f) => {
				m(g, p), m(h, ` ${f ?? ""}`);
			},
			[() => b(), () => S()]
		),
		w(e, n),
		I();
}
v(["click"]);
export { M as component };

import "../chunks/Ch2Ub8FX.js";
import { o as P } from "../chunks/DoL3ojdE.js";
import {
	v as D,
	b as m,
	p as S,
	f as C,
	t as w,
	c as z,
	$ as N,
	d as a,
	s as d,
	aw as R,
	au as Y,
	r as n,
	g as x,
	ay as Z,
	a as j,
} from "../chunks/CMvZtFtm.js";
import { s as f } from "../chunks/DVA6u9-7.js";
import { r as A, i as B } from "../chunks/BF50aS-j.js";
import { h as M } from "../chunks/DueIxFLX.js";
import { h as O } from "../chunks/P77cUGnY.js";
import { p as $ } from "../chunks/B6ZK_HZO.js";
import { a as V, u as W } from "../chunks/BRM3t761.js";
import { L as F } from "../chunks/D3yDgRbd.js";
import { b as G } from "../chunks/C5yqZvKC.js";
import { g as _ } from "../chunks/CV9xcpLq.js";
import { g as H } from "../chunks/BSXXHLQ0.js";
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
			(e._sentryDebugIds[t] = "287ebbc0-bb62-455b-83c8-7046bd097bb3"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-287ebbc0-bb62-455b-83c8-7046bd097bb3"));
	})();
} catch {}
const J = () => "Payment succeeded",
	K = () => "Pagamento bem sucedido",
	T = (e = {}, t = {}) => ((t.locale ?? _()) === "en" ? J() : K()),
	Q = (e) => `You purchased <b>${e.number_droplet} droplets</b>.`,
	U = (e) => `Você comprou <b>${e.number_droplet} droplets</b>.`,
	X = (e, t = {}) => ((t.locale ?? _()) === "en" ? Q(e) : U(e)),
	ee = () => "Thank you for your support!",
	te = () => "Obrigado pelo seu apoio!",
	re = (e = {}, t = {}) => ((t.locale ?? _()) === "en" ? ee() : te());
var oe = D(
	'<svg><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"></path></svg>'
);
function se(e, t) {
	let o = A(t, ["$$slots", "$$events", "$$legacy"]);
	var l = oe();
	G(l, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 -960 960 960",
		fill: "currentColor",
		...o,
	})),
		m(e, l);
}
var ae = C(
	'<div class="relative flex h-full flex-col items-center justify-center px-4"><div class="absolute top-8"><!></div> <div class="card border-base-content/10 w-full max-w-xl border shadow-sm"><div class="card-body gap-3"><!> <h2 class="text-4xl font-medium sm:text-5xl"> </h2> <p class="text-lg"><!> </p> <a class="btn btn-primary btn-lg mt-2 w-max" href="/"> </a></div></div></div>'
);
function ge(e, t) {
	S(t, !0);
	let o = Y(null);
	P(async () => {
		R(o, $.url.searchParams.get("droplets"), !0);
		const r = $.url.searchParams.get("session_id");
		r && (await V.refreshPaymentSession(r)) && (await W.refresh());
	});
	var l = ae();
	O((r) => {
		w((s) => (N.title = `Wplace - ${s ?? ""}`), [() => T()]);
	});
	var c = a(l),
		q = a(c);
	F(q, { size: "lg", hasText: !0 }), n(c);
	var b = d(c, 2),
		v = a(b),
		h = a(v);
	se(h, { class: "size-16 text-emerald-500" });
	var i = d(h, 2),
		k = a(i);
	n(i);
	var p = d(i, 2),
		g = a(p);
	{
		var I = (r) => {
			var s = Z(),
				u = j(s);
			M(u, () => X({ number_droplet: Number(x(o)).toLocaleString() })), m(r, s);
		};
		B(g, (r) => {
			x(o) && r(I);
		});
	}
	var E = d(g);
	n(p);
	var y = d(p, 2),
		L = a(y, !0);
	n(y),
		n(v),
		n(b),
		n(l),
		w(
			(r, s, u) => {
				f(k, `${r ?? ""}!`), f(E, ` ${s ?? ""}`), f(L, u);
			},
			[() => T(), () => re(), () => H()]
		),
		m(e, l),
		z();
}
export { ge as component };

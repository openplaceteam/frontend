import { g as s } from "./CV9xcpLq.js";
import "./Ch2Ub8FX.js";
import {
	p as O,
	g as o,
	u as R,
	aw as w,
	au as j,
	y as k,
	f as g,
	d as c,
	s as x,
	bj as C,
	r as l,
	t as v,
	b,
	c as N,
} from "./CMvZtFtm.js";
import { s as h } from "./DVA6u9-7.js";
import { p as S, i as q, r as Y } from "./BF50aS-j.js";
import { b as z, C as B } from "./C5yqZvKC.js";
import { b as F } from "./Dpga8uG-.js";
(function () {
	try {
		var t =
			typeof window < "u"
				? window
				: typeof global < "u"
				? global
				: typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
				? self
				: {};
		t.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
	} catch {}
})();
try {
	(function () {
		var t =
				typeof window < "u"
					? window
					: typeof global < "u"
					? global
					: typeof globalThis < "u"
					? globalThis
					: typeof self < "u"
					? self
					: {},
			e = new t.Error().stack;
		e &&
			((t._sentryDebugIds = t._sentryDebugIds || {}),
			(t._sentryDebugIds[e] = "832b2d91-c507-495d-8a1f-d5c91dd6acad"),
			(t._sentryDebugIdIdentifier =
				"sentry-dbid-832b2d91-c507-495d-8a1f-d5c91dd6acad"));
	})();
} catch {}
const G = () => "Select the reason",
	H = () => "Selecione o motivo",
	xe = (t = {}, e = {}) => ((e.locale ?? s()) === "en" ? G() : H()),
	J = () => "Other",
	K = () => "Outro motivo",
	ve = (t = {}, e = {}) => ((e.locale ?? s()) === "en" ? J() : K()),
	P = () => "Extra context on what happened (required)",
	Q = () => "Mais informações sobre o que aconteceu (obrigatório)",
	be = (t = {}, e = {}) => ((e.locale ?? s()) === "en" ? P() : Q()),
	U = () => "Select the report reason",
	V = () => "Selecione o motivo da denúncia",
	he = (t = {}, e = {}) => ((e.locale ?? s()) === "en" ? U() : V()),
	W = () => "Required",
	X = () => "Obrigatório",
	Z = (t = {}, e = {}) => ((e.locale ?? s()) === "en" ? W() : X()),
	$ = (t) => `Min. characters: ${t.min}`,
	ee = (t) => `Mínimo de caracteres: ${t.min}`,
	te = (t, e = {}) => ((e.locale ?? s()) === "en" ? $(t) : ee(t)),
	ae = (t) => `Max. characters: ${t.max}`,
	re = (t) => `Máximo de caracteres: ${t.max}`,
	ne = (t, e = {}) => ((e.locale ?? s()) === "en" ? ae(t) : re(t));
var se = g('<legend class="fieldset-legend"> </legend>'),
	oe = g('<span class="text-base-content/80"> </span>'),
	ce = g(
		'<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>'
	);
function ge(t, e) {
	O(e, !0);
	let r = S(e, "value", 15),
		E = S(e, "validate", 15),
		I = Y(e, [
			"$$slots",
			"$$events",
			"$$legacy",
			"label",
			"placeholder",
			"value",
			"max",
			"min",
			"validate",
		]),
		i = j("");
	const d = R(() => {
		var a;
		return ((a = r()) == null ? void 0 : a.length) ?? 0;
	});
	E(T);
	function T() {
		return e.min !== void 0 && o(d) < e.min
			? (w(i, e.min === 1 ? Z() : te({ min: e.min }), !0), !1)
			: e.max !== void 0 && o(d) > e.max
			? (w(i, ne({ max: e.max }), !0), !1)
			: !0;
	}
	k(() => {
		var a;
		e.max !== void 0 &&
			o(d) > e.max &&
			r((a = r()) == null ? void 0 : a.substring(0, e.max));
	});
	var f = ce(),
		y = c(f);
	{
		var L = (a) => {
			var n = se(),
				m = c(n, !0);
			l(n), v(() => h(m, e.label)), b(a, n);
		};
		q(y, (a) => {
			e.label && a(L);
		});
	}
	var u = x(y, 2);
	C(u),
		z(
			u,
			(a) => ({
				...I,
				class: `textarea w-full ${e.class ?? ""}`,
				placeholder: e.placeholder,
				[B]: a,
			}),
			[() => ({ "textarea-error": !!o(i) })]
		);
	var p = x(u, 2),
		_ = c(p),
		M = c(_, !0);
	l(_);
	var D = x(_, 2);
	{
		var A = (a) => {
			var n = oe(),
				m = c(n, !0);
			l(n), v(() => h(m, e.max - o(d))), b(a, n);
		};
		q(D, (a) => {
			e.max !== void 0 && a(A);
		});
	}
	l(p), l(f), v(() => h(M, o(i))), F(u, r), b(t, f), N();
}
export { ge as L, he as a, be as g, ve as o, xe as s };

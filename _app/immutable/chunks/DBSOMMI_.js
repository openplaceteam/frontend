import { g as z } from "./CV9xcpLq.js";
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
			(t._sentryDebugIds[e] = "dcdc3bc1-2905-4a7a-b382-b2ec639c05ea"),
			(t._sentryDebugIdIdentifier =
				"sentry-dbid-dcdc3bc1-2905-4a7a-b382-b2ec639c05ea"));
	})();
} catch {}
const C = () => "Timeout",
	D = () => "Timeout",
	M = (t = {}, e = {}) => ((e.locale ?? z()) === "en" ? C() : D());
function q(t) {
	const e = t - 1;
	return e * e * e + 1;
}
function O(t, { from: e, to: r }, u = {}) {
	var {
			delay: h = 0,
			duration: i = (n) => Math.sqrt(n) * 120,
			easing: y = q,
		} = u,
		o = getComputedStyle(t),
		g = o.transform === "none" ? "" : o.transform,
		[d, s] = o.transformOrigin.split(" ").map(parseFloat);
	(d /= t.clientWidth), (s /= t.clientHeight);
	var f = H(t),
		p = t.clientWidth / r.width / f,
		v = t.clientHeight / r.height / f,
		b = e.left + e.width * d,
		m = e.top + e.height * s,
		w = r.left + r.width * d,
		x = r.top + r.height * s,
		c = (b - w) * p,
		l = (m - x) * v,
		S = e.width / r.width,
		_ = e.height / r.height;
	return {
		delay: h,
		duration: typeof i == "function" ? i(Math.sqrt(c * c + l * l)) : i,
		easing: y,
		css: (n, a) => {
			var T = a * c,
				E = a * l,
				I = n + a * S,
				$ = n + a * _;
			return `transform: ${g} translate(${T}px, ${E}px) scale(${I}, ${$});`;
		},
	};
}
function H(t) {
	if ("currentCSSZoom" in t) return t.currentCSSZoom;
	for (var e = t, r = 1; e !== null; )
		(r *= +getComputedStyle(e).zoom), (e = e.parentElement);
	return r;
}
export { O as f, M as t };

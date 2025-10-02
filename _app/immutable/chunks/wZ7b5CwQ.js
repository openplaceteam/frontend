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
			(e._sentryDebugIds[t] = "318a9da5-f9ae-41c4-a6ad-1557223c6f66"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-318a9da5-f9ae-41c4-a6ad-1557223c6f66"));
	})();
} catch {}
const b = (e) => e;
function h(e) {
	const t = e - 1;
	return t * t * t + 1;
}
function w(e, { delay: t = 0, duration: i = 400, easing: s = b } = {}) {
	const r = +getComputedStyle(e).opacity;
	return { delay: t, duration: i, easing: s, css: (a) => `opacity: ${a * r}` };
}
function m(
	e,
	{ delay: t = 0, duration: i = 400, easing: s = h, axis: r = "y" } = {}
) {
	const a = getComputedStyle(e),
		c = +a.opacity,
		p = r === "y" ? "height" : "width",
		l = parseFloat(a[p]),
		o = r === "y" ? ["top", "bottom"] : ["left", "right"],
		d = o.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`),
		f = parseFloat(a[`padding${d[0]}`]),
		y = parseFloat(a[`padding${d[1]}`]),
		u = parseFloat(a[`margin${d[0]}`]),
		g = parseFloat(a[`margin${d[1]}`]),
		_ = parseFloat(a[`border${d[0]}Width`]),
		$ = parseFloat(a[`border${d[1]}Width`]);
	return {
		delay: t,
		duration: i,
		easing: s,
		css: (n) =>
			`overflow: hidden;opacity: ${Math.min(n * 20, 1) * c};${p}: ${
				n * l
			}px;padding-${o[0]}: ${n * f}px;padding-${o[1]}: ${n * y}px;margin-${
				o[0]
			}: ${n * u}px;margin-${o[1]}: ${n * g}px;border-${o[0]}-width: ${
				n * _
			}px;border-${o[1]}-width: ${n * $}px;min-${p}: 0`,
	};
}
export { w as f, m as s };

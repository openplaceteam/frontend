import "./Ch2Ub8FX.js";
import {
	p as m,
	f as c,
	t as A,
	b as f,
	c as v,
	d as y,
	s as _,
	r as h,
} from "./CMvZtFtm.js";
import { p as w, i as x, r as E } from "./BF50aS-j.js";
import { b as T, a as r, s as S } from "./C5yqZvKC.js";
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
			a = new e.Error().stack;
		a &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[a] = "bfaa257f-561a-4221-9d82-ad8618895a89"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-bfaa257f-561a-4221-9d82-ad8618895a89"));
	})();
} catch {}
const B =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>openplace</span>"),
	R = c('<div><img alt="Wplace logo"/> <!></div>');
function z(e, a) {
	m(a, !0);
	let t = w(a, "size", 3, "default"),
		g = E(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
	var l = R();
	T(l, () => ({ ...g, class: `flex items-center gap-1.5 ${a.class ?? ""}` }));
	var i = y(l);
	let o;
	var p = _(i, 2);
	{
		var u = (s) => {
			var d = L();
			let n;
			A(
				(b) => (n = r(d, 1, "text-base-content font-pixel", null, n, b)),
				[
					() => ({
						"text-4xl": t() === "default",
						"text-5xl": t() === "lg" || t() === "medium",
					}),
				]
			),
				f(s, d);
		};
		x(p, (s) => {
			a.hasText && s(u);
		});
	}
	h(l),
		A(
			(s) => {
				(o = r(i, 1, "pixelated", null, o, s)), S(i, "src", B);
			},
			[
				() => ({
					"size-10": t() === "default",
					"size-16": t() === "medium",
					"size-20": t() === "lg",
				}),
			]
		),
		f(e, l),
		v();
}
export { z as L };

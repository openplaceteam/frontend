import { g as s } from "./CV9xcpLq.js";
import "./Ch2Ub8FX.js";
import { v as r, b as i } from "./CMvZtFtm.js";
import { b as a } from "./C5yqZvKC.js";
import { r as l } from "./BF50aS-j.js";
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
			(e._sentryDebugIds[t] = "e9a4a830-f71c-4119-8142-30326aa85639"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-e9a4a830-f71c-4119-8142-30326aa85639"));
	})();
} catch {}
const d = () => "Pixels painted",
	c = () => "Pixels pintados",
	T = (e = {}, t = {}) => ((t.locale ?? s()) === "en" ? d() : c()),
	p = () => "Description",
	f = () => "Descrição",
	m = (e = {}, t = {}) => ((t.locale ?? s()) === "en" ? p() : f());
var u = r(
	'<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>'
);
function v(e, t) {
	let n = l(t, ["$$slots", "$$events", "$$legacy"]);
	var o = u();
	a(o, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 -960 960 960",
		fill: "currentColor",
		...n,
	})),
		i(e, o);
}
export { v as L, m as d, T as p };

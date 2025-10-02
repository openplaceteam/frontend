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
			(e._sentryDebugIds[o] = "138d49da-a363-498b-a700-aea1b9f4af0d"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-138d49da-a363-498b-a700-aea1b9f4af0d"));
	})();
} catch {}
const y = "en",
	c = ["en", "pt"],
	d = "PARAGLIDE_LOCALE",
	g = ["localStorage", "preferredLanguage", "baseLocale"];
globalThis.__paraglide = {};
let f = !1,
	w = () => {
		let e;
		for (const o of g) {
			if (o === "baseLocale") e = y;
			else if (o === "preferredLanguage") e = L();
			else if (o === "localStorage") e = localStorage.getItem(d) ?? void 0;
			else if (u(o) && l.has(o)) {
				const a = l.get(o);
				if (a) {
					const t = a.getLocale();
					if (t instanceof Promise) continue;
					e = t;
				}
			}
			if (e !== void 0) {
				const a = h(e);
				return f || ((f = !0), p(a, { reload: !1 })), a;
			}
		}
		throw new Error(
			"No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found"
		);
	},
	p = (e, o) => {
		const a = { reload: !0, ...o };
		let t;
		try {
			t = w();
		} catch {}
		for (const n of g)
			if (n !== "baseLocale") {
				if (n === "localStorage" && typeof window < "u")
					localStorage.setItem(d, e);
				else if (u(n) && l.has(n)) {
					const s = l.get(n);
					if (s) {
						const i = s.setLocale(e);
						i instanceof Promise &&
							i.catch((b) => {
								console.warn(`Custom strategy "${n}" setLocale failed:`, b);
							});
					}
				}
			}
		a.reload && window.location && e !== t && window.location.reload();
	};
function r(e) {
	return e ? c.includes(e) : !1;
}
function h(e) {
	if (r(e) === !1)
		throw new Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
	return e;
}
function L() {
	var o;
	if (
		!(
			(o = navigator == null ? void 0 : navigator.languages) != null && o.length
		)
	)
		return;
	const e = navigator.languages.map((a) => {
		var t;
		return {
			fullTag: a.toLowerCase(),
			baseTag: (t = a.split("-")[0]) == null ? void 0 : t.toLowerCase(),
		};
	});
	for (const a of e) {
		if (r(a.fullTag)) return a.fullTag;
		if (r(a.baseTag)) return a.baseTag;
	}
}
const l = new Map();
function u(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
export { w as g, d as l };

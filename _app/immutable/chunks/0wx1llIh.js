import { ac as n, H as t, z as a, L as c, ad as y } from "./CMvZtFtm.js";
(function () {
	try {
		var f =
			typeof window < "u"
				? window
				: typeof global < "u"
				? global
				: typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
				? self
				: {};
		f.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
	} catch {}
})();
try {
	(function () {
		var f =
				typeof window < "u"
					? window
					: typeof global < "u"
					? global
					: typeof globalThis < "u"
					? globalThis
					: typeof self < "u"
					? self
					: {},
			d = new f.Error().stack;
		d &&
			((f._sentryDebugIds = f._sentryDebugIds || {}),
			(f._sentryDebugIds[d] = "554e06f2-a09e-496d-9df0-84ac5f964ff6"),
			(f._sentryDebugIdIdentifier =
				"sentry-dbid-554e06f2-a09e-496d-9df0-84ac5f964ff6"));
	})();
} catch {}
function r(f, d) {
	return f === d || (f == null ? void 0 : f[y]) === d;
}
function g(f = {}, d, s, b) {
	return (
		n(() => {
			var e, i;
			return (
				t(() => {
					(e = i),
						(i = []),
						a(() => {
							f !== s(...i) &&
								(d(f, ...i), e && r(s(...e), f) && d(null, ...e));
						});
				}),
				() => {
					c(() => {
						i && r(s(...i), f) && d(null, ...i);
					});
				}
			);
		}),
		f
	);
}
export { g as b };

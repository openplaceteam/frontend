import { s as t, p as n } from "./CyB--sFG.js";
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
			(e._sentryDebugIds[d] = "a3dbed05-c198-4ed7-927f-c0428effe604"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-a3dbed05-c198-4ed7-927f-c0428effe604"));
	})();
} catch {}
const f = {
	get error() {
		return n.error;
	},
	get status() {
		return n.status;
	},
	get url() {
		return n.url;
	},
};
t.updated.check;
const r = f;
export { r as p };

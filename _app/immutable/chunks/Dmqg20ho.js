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
			(t._sentryDebugIds[e] = "94f605bd-8e96-4f8e-8769-0ddf701a4cfb"),
			(t._sentryDebugIdIdentifier =
				"sentry-dbid-94f605bd-8e96-4f8e-8769-0ddf701a4cfb"));
	})();
} catch {}
const S = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
	g = globalThis,
	O = "10.11.0";
function D() {
	return et(g), g;
}
function et(t) {
	const e = (t.__SENTRY__ = t.__SENTRY__ || {});
	return (e.version = e.version || O), (e[O] = e[O] || {});
}
function j(t, e, n = g) {
	const r = (n.__SENTRY__ = n.__SENTRY__ || {}),
		s = (r[O] = r[O] || {});
	return s[t] || (s[t] = e());
}
const wn = ["debug", "info", "warn", "error", "log", "assert", "trace"],
	Jt = "Sentry Logger ",
	dt = {};
function nt(t) {
	if (!("console" in g)) return t();
	const e = g.console,
		n = {},
		r = Object.keys(dt);
	r.forEach((s) => {
		const i = dt[s];
		(n[s] = e[s]), (e[s] = i);
	});
	try {
		return t();
	} finally {
		r.forEach((s) => {
			e[s] = n[s];
		});
	}
}
function qt() {
	st().enabled = !0;
}
function Qt() {
	st().enabled = !1;
}
function Rt() {
	return st().enabled;
}
function Zt(...t) {
	rt("log", ...t);
}
function te(...t) {
	rt("warn", ...t);
}
function ee(...t) {
	rt("error", ...t);
}
function rt(t, ...e) {
	S &&
		Rt() &&
		nt(() => {
			g.console[t](`${Jt}[${t}]:`, ...e);
		});
}
function st() {
	return S ? j("loggerSettings", () => ({ enabled: !1 })) : { enabled: !1 };
}
const h = {
		enable: qt,
		disable: Qt,
		isEnabled: Rt,
		log: Zt,
		warn: te,
		error: ee,
	},
	Ot = 50,
	ne = "?",
	pt = /\(error: (.*)\)/,
	lt = /captureMessage|captureException/;
function re(...t) {
	const e = t.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
	return (n, r = 0, s = 0) => {
		const i = [],
			o = n.split(`
`);
		for (let c = r; c < o.length; c++) {
			let a = o[c];
			a.length > 1024 && (a = a.slice(0, 1024));
			const u = pt.test(a) ? a.replace(pt, "$1") : a;
			if (!u.match(/\S*Error: /)) {
				for (const f of e) {
					const d = f(u);
					if (d) {
						i.push(d);
						break;
					}
				}
				if (i.length >= Ot + s) break;
			}
		}
		return se(i.slice(s));
	};
}
function Pn(t) {
	return Array.isArray(t) ? re(...t) : t;
}
function se(t) {
	if (!t.length) return [];
	const e = Array.from(t);
	return (
		/sentryWrapped/.test(w(e).function || "") && e.pop(),
		e.reverse(),
		lt.test(w(e).function || "") &&
			(e.pop(), lt.test(w(e).function || "") && e.pop()),
		e
			.slice(0, Ot)
			.map((n) => ({
				...n,
				filename: n.filename || w(e).filename,
				function: n.function || ne,
			}))
	);
}
function w(t) {
	return t[t.length - 1] || {};
}
const K = "<anonymous>";
function ie(t) {
	try {
		return !t || typeof t != "function" ? K : t.name || K;
	} catch {
		return K;
	}
}
function kn(t) {
	const e = t.exception;
	if (e) {
		const n = [];
		try {
			return (
				e.values.forEach((r) => {
					r.stacktrace.frames && n.push(...r.stacktrace.frames);
				}),
				n
			);
		} catch {
			return;
		}
	}
}
const Dt = Object.prototype.toString;
function oe(t) {
	switch (Dt.call(t)) {
		case "[object Error]":
		case "[object Exception]":
		case "[object DOMException]":
		case "[object WebAssembly.Exception]":
			return !0;
		default:
			return M(t, Error);
	}
}
function x(t, e) {
	return Dt.call(t) === `[object ${e}]`;
}
function Ln(t) {
	return x(t, "ErrorEvent");
}
function Fn(t) {
	return x(t, "DOMError");
}
function $n(t) {
	return x(t, "DOMException");
}
function F(t) {
	return x(t, "String");
}
function ae(t) {
	return (
		typeof t == "object" &&
		t !== null &&
		"__sentry_template_string__" in t &&
		"__sentry_template_values__" in t
	);
}
function Un(t) {
	return (
		t === null || ae(t) || (typeof t != "object" && typeof t != "function")
	);
}
function Mt(t) {
	return x(t, "Object");
}
function ce(t) {
	return typeof Event < "u" && M(t, Event);
}
function ue(t) {
	return typeof Element < "u" && M(t, Element);
}
function fe(t) {
	return x(t, "RegExp");
}
function it(t) {
	return !!(t != null && t.then && typeof t.then == "function");
}
function de(t) {
	return (
		Mt(t) &&
		"nativeEvent" in t &&
		"preventDefault" in t &&
		"stopPropagation" in t
	);
}
function M(t, e) {
	try {
		return t instanceof e;
	} catch {
		return !1;
	}
}
function wt(t) {
	return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue));
}
function jn(t) {
	return typeof Request < "u" && M(t, Request);
}
const ot = g,
	pe = 80;
function le(t, e = {}) {
	if (!t) return "<unknown>";
	try {
		let n = t;
		const r = 5,
			s = [];
		let i = 0,
			o = 0;
		const c = " > ",
			a = c.length;
		let u;
		const f = Array.isArray(e) ? e : e.keyAttrs,
			d = (!Array.isArray(e) && e.maxStringLength) || pe;
		for (
			;
			n &&
			i++ < r &&
			((u = _e(n, f)),
			!(u === "html" || (i > 1 && o + s.length * a + u.length >= d)));

		)
			s.push(u), (o += u.length), (n = n.parentNode);
		return s.reverse().join(c);
	} catch {
		return "<unknown>";
	}
}
function _e(t, e) {
	const n = t,
		r = [];
	if (!(n != null && n.tagName)) return "";
	if (ot.HTMLElement && n instanceof HTMLElement && n.dataset) {
		if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
		if (n.dataset.sentryElement) return n.dataset.sentryElement;
	}
	r.push(n.tagName.toLowerCase());
	const s =
		e != null && e.length
			? e.filter((o) => n.getAttribute(o)).map((o) => [o, n.getAttribute(o)])
			: null;
	if (s != null && s.length)
		s.forEach((o) => {
			r.push(`[${o[0]}="${o[1]}"]`);
		});
	else {
		n.id && r.push(`#${n.id}`);
		const o = n.className;
		if (o && F(o)) {
			const c = o.split(/\s+/);
			for (const a of c) r.push(`.${a}`);
		}
	}
	const i = ["aria-label", "type", "name", "title", "alt"];
	for (const o of i) {
		const c = n.getAttribute(o);
		c && r.push(`[${o}="${c}"]`);
	}
	return r.join("");
}
function vn() {
	try {
		return ot.document.location.href;
	} catch {
		return "";
	}
}
function Bn(t) {
	if (!ot.HTMLElement) return null;
	let e = t;
	const n = 5;
	for (let r = 0; r < n; r++) {
		if (!e) return null;
		if (e instanceof HTMLElement) {
			if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
			if (e.dataset.sentryElement) return e.dataset.sentryElement;
		}
		e = e.parentNode;
	}
	return null;
}
function $(t, e = 0) {
	return typeof t != "string" || e === 0 || t.length <= e
		? t
		: `${t.slice(0, e)}...`;
}
function Gn(t, e) {
	if (!Array.isArray(t)) return "";
	const n = [];
	for (let r = 0; r < t.length; r++) {
		const s = t[r];
		try {
			wt(s) ? n.push("[VueViewModel]") : n.push(String(s));
		} catch {
			n.push("[value cannot be serialized]");
		}
	}
	return n.join(e);
}
function ge(t, e, n = !1) {
	return F(t)
		? fe(e)
			? e.test(t)
			: F(e)
			? n
				? t === e
				: t.includes(e)
			: !1
		: !1;
}
function zn(t, e = [], n = !1) {
	return e.some((r) => ge(t, r, n));
}
function Hn(t, e, n) {
	if (!(e in t)) return;
	const r = t[e];
	if (typeof r != "function") return;
	const s = n(r);
	typeof s == "function" && he(s, r);
	try {
		t[e] = s;
	} catch {
		S && h.log(`Failed to replace method "${e}" in object`, t);
	}
}
function I(t, e, n) {
	try {
		Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
	} catch {
		S && h.log(`Failed to add non-enumerable property "${e}" to object`, t);
	}
}
function he(t, e) {
	try {
		const n = e.prototype || {};
		(t.prototype = e.prototype = n), I(t, "__sentry_original__", e);
	} catch {}
}
function Yn(t) {
	return t.__sentry_original__;
}
function Pt(t) {
	if (oe(t))
		return { message: t.message, name: t.name, stack: t.stack, ...gt(t) };
	if (ce(t)) {
		const e = {
			type: t.type,
			target: _t(t.target),
			currentTarget: _t(t.currentTarget),
			...gt(t),
		};
		return (
			typeof CustomEvent < "u" && M(t, CustomEvent) && (e.detail = t.detail), e
		);
	} else return t;
}
function _t(t) {
	try {
		return ue(t) ? le(t) : Object.prototype.toString.call(t);
	} catch {
		return "<unknown>";
	}
}
function gt(t) {
	if (typeof t == "object" && t !== null) {
		const e = {};
		for (const n in t)
			Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		return e;
	} else return {};
}
function Vn(t, e = 40) {
	const n = Object.keys(Pt(t));
	n.sort();
	const r = n[0];
	if (!r) return "[object has no keys]";
	if (r.length >= e) return $(r, e);
	for (let s = n.length; s > 0; s--) {
		const i = n.slice(0, s).join(", ");
		if (!(i.length > e)) return s === n.length ? i : $(i, e);
	}
	return "";
}
function me() {
	const t = g;
	return t.crypto || t.msCrypto;
}
function T(t = me()) {
	let e = () => Math.random() * 16;
	try {
		if (t != null && t.randomUUID) return t.randomUUID().replace(/-/g, "");
		t != null &&
			t.getRandomValues &&
			(e = () => {
				const n = new Uint8Array(1);
				return t.getRandomValues(n), n[0];
			});
	} catch {}
	return ("10000000100040008000" + 1e11).replace(/[018]/g, (n) =>
		(n ^ ((e() & 15) >> (n / 4))).toString(16)
	);
}
function kt(t) {
	var e, n;
	return (n = (e = t.exception) == null ? void 0 : e.values) == null
		? void 0
		: n[0];
}
function Kn(t) {
	const { message: e, event_id: n } = t;
	if (e) return e;
	const r = kt(t);
	return r
		? r.type && r.value
			? `${r.type}: ${r.value}`
			: r.type || r.value || n || "<unknown>"
		: n || "<unknown>";
}
function Wn(t, e, n) {
	const r = (t.exception = t.exception || {}),
		s = (r.values = r.values || []),
		i = (s[0] = s[0] || {});
	i.value || (i.value = e || ""), i.type || (i.type = "Error");
}
function Se(t, e) {
	const n = kt(t);
	if (!n) return;
	const r = { type: "generic", handled: !0 },
		s = n.mechanism;
	if (((n.mechanism = { ...r, ...s, ...e }), e && "data" in e)) {
		const i = { ...(s == null ? void 0 : s.data), ...e.data };
		n.mechanism.data = i;
	}
}
function Xn(t) {
	if (ye(t)) return !0;
	try {
		I(t, "__sentry_captured__", !0);
	} catch {}
	return !1;
}
function ye(t) {
	try {
		return t.__sentry_captured__;
	} catch {}
}
const Lt = 1e3;
function at() {
	return Date.now() / Lt;
}
function Ee() {
	const { performance: t } = g;
	if (!(t != null && t.now) || !t.timeOrigin) return at;
	const e = t.timeOrigin;
	return () => (e + t.now()) / Lt;
}
let ht;
function ct() {
	return (ht ?? (ht = Ee()))();
}
let W;
function be() {
	var f;
	const { performance: t } = g;
	if (!(t != null && t.now)) return [void 0, "none"];
	const e = 3600 * 1e3,
		n = t.now(),
		r = Date.now(),
		s = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
		i = s < e,
		o = (f = t.timing) == null ? void 0 : f.navigationStart,
		a = typeof o == "number" ? Math.abs(o + n - r) : e,
		u = a < e;
	return i || u
		? s <= a
			? [t.timeOrigin, "timeOrigin"]
			: [o, "navigationStart"]
		: [r, "dateNow"];
}
function Jn() {
	return W || (W = be()), W[0];
}
function Te(t) {
	const e = ct(),
		n = {
			sid: T(),
			init: !0,
			timestamp: e,
			started: e,
			duration: 0,
			status: "ok",
			errors: 0,
			ignoreDuration: !1,
			toJSON: () => Ae(n),
		};
	return t && v(n, t), n;
}
function v(t, e = {}) {
	if (
		(e.user &&
			(!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
			!t.did &&
				!e.did &&
				(t.did = e.user.id || e.user.email || e.user.username)),
		(t.timestamp = e.timestamp || ct()),
		e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
		e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
		e.sid && (t.sid = e.sid.length === 32 ? e.sid : T()),
		e.init !== void 0 && (t.init = e.init),
		!t.did && e.did && (t.did = `${e.did}`),
		typeof e.started == "number" && (t.started = e.started),
		t.ignoreDuration)
	)
		t.duration = void 0;
	else if (typeof e.duration == "number") t.duration = e.duration;
	else {
		const n = t.timestamp - t.started;
		t.duration = n >= 0 ? n : 0;
	}
	e.release && (t.release = e.release),
		e.environment && (t.environment = e.environment),
		!t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
		!t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
		typeof e.errors == "number" && (t.errors = e.errors),
		e.status && (t.status = e.status);
}
function Ie(t, e) {
	let n = {};
	t.status === "ok" && (n = { status: "exited" }), v(t, n);
}
function Ae(t) {
	return {
		sid: `${t.sid}`,
		init: t.init,
		started: new Date(t.started * 1e3).toISOString(),
		timestamp: new Date(t.timestamp * 1e3).toISOString(),
		status: t.status,
		errors: t.errors,
		did:
			typeof t.did == "number" || typeof t.did == "string"
				? `${t.did}`
				: void 0,
		duration: t.duration,
		abnormal_mechanism: t.abnormal_mechanism,
		attrs: {
			release: t.release,
			environment: t.environment,
			ip_address: t.ipAddress,
			user_agent: t.userAgent,
		},
	};
}
function B(t, e, n = 2) {
	if (!e || typeof e != "object" || n <= 0) return e;
	if (t && Object.keys(e).length === 0) return t;
	const r = { ...t };
	for (const s in e)
		Object.prototype.hasOwnProperty.call(e, s) && (r[s] = B(r[s], e[s], n - 1));
	return r;
}
function U() {
	return T();
}
function ut() {
	return T().substring(16);
}
const J = "_sentrySpan";
function mt(t, e) {
	e ? I(t, J, e) : delete t[J];
}
function q(t) {
	return t[J];
}
const Ce = 100;
class y {
	constructor() {
		(this._notifyingListeners = !1),
			(this._scopeListeners = []),
			(this._eventProcessors = []),
			(this._breadcrumbs = []),
			(this._attachments = []),
			(this._user = {}),
			(this._tags = {}),
			(this._extra = {}),
			(this._contexts = {}),
			(this._sdkProcessingMetadata = {}),
			(this._propagationContext = { traceId: U(), sampleRand: Math.random() });
	}
	clone() {
		const e = new y();
		return (
			(e._breadcrumbs = [...this._breadcrumbs]),
			(e._tags = { ...this._tags }),
			(e._extra = { ...this._extra }),
			(e._contexts = { ...this._contexts }),
			this._contexts.flags &&
				(e._contexts.flags = { values: [...this._contexts.flags.values] }),
			(e._user = this._user),
			(e._level = this._level),
			(e._session = this._session),
			(e._transactionName = this._transactionName),
			(e._fingerprint = this._fingerprint),
			(e._eventProcessors = [...this._eventProcessors]),
			(e._attachments = [...this._attachments]),
			(e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
			(e._propagationContext = { ...this._propagationContext }),
			(e._client = this._client),
			(e._lastEventId = this._lastEventId),
			mt(e, q(this)),
			e
		);
	}
	setClient(e) {
		this._client = e;
	}
	setLastEventId(e) {
		this._lastEventId = e;
	}
	getClient() {
		return this._client;
	}
	lastEventId() {
		return this._lastEventId;
	}
	addScopeListener(e) {
		this._scopeListeners.push(e);
	}
	addEventProcessor(e) {
		return this._eventProcessors.push(e), this;
	}
	setUser(e) {
		return (
			(this._user = e || {
				email: void 0,
				id: void 0,
				ip_address: void 0,
				username: void 0,
			}),
			this._session && v(this._session, { user: e }),
			this._notifyScopeListeners(),
			this
		);
	}
	getUser() {
		return this._user;
	}
	setTags(e) {
		return (
			(this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this
		);
	}
	setTag(e, n) {
		return (
			(this._tags = { ...this._tags, [e]: n }),
			this._notifyScopeListeners(),
			this
		);
	}
	setExtras(e) {
		return (
			(this._extra = { ...this._extra, ...e }),
			this._notifyScopeListeners(),
			this
		);
	}
	setExtra(e, n) {
		return (
			(this._extra = { ...this._extra, [e]: n }),
			this._notifyScopeListeners(),
			this
		);
	}
	setFingerprint(e) {
		return (this._fingerprint = e), this._notifyScopeListeners(), this;
	}
	setLevel(e) {
		return (this._level = e), this._notifyScopeListeners(), this;
	}
	setTransactionName(e) {
		return (this._transactionName = e), this._notifyScopeListeners(), this;
	}
	setContext(e, n) {
		return (
			n === null ? delete this._contexts[e] : (this._contexts[e] = n),
			this._notifyScopeListeners(),
			this
		);
	}
	setSession(e) {
		return (
			e ? (this._session = e) : delete this._session,
			this._notifyScopeListeners(),
			this
		);
	}
	getSession() {
		return this._session;
	}
	update(e) {
		if (!e) return this;
		const n = typeof e == "function" ? e(this) : e,
			r = n instanceof y ? n.getScopeData() : Mt(n) ? e : void 0,
			{
				tags: s,
				extra: i,
				user: o,
				contexts: c,
				level: a,
				fingerprint: u = [],
				propagationContext: f,
			} = r || {};
		return (
			(this._tags = { ...this._tags, ...s }),
			(this._extra = { ...this._extra, ...i }),
			(this._contexts = { ...this._contexts, ...c }),
			o && Object.keys(o).length && (this._user = o),
			a && (this._level = a),
			u.length && (this._fingerprint = u),
			f && (this._propagationContext = f),
			this
		);
	}
	clear() {
		return (
			(this._breadcrumbs = []),
			(this._tags = {}),
			(this._extra = {}),
			(this._user = {}),
			(this._contexts = {}),
			(this._level = void 0),
			(this._transactionName = void 0),
			(this._fingerprint = void 0),
			(this._session = void 0),
			mt(this, void 0),
			(this._attachments = []),
			this.setPropagationContext({ traceId: U(), sampleRand: Math.random() }),
			this._notifyScopeListeners(),
			this
		);
	}
	addBreadcrumb(e, n) {
		var i;
		const r = typeof n == "number" ? n : Ce;
		if (r <= 0) return this;
		const s = {
			timestamp: at(),
			...e,
			message: e.message ? $(e.message, 2048) : e.message,
		};
		return (
			this._breadcrumbs.push(s),
			this._breadcrumbs.length > r &&
				((this._breadcrumbs = this._breadcrumbs.slice(-r)),
				(i = this._client) == null ||
					i.recordDroppedEvent("buffer_overflow", "log_item")),
			this._notifyScopeListeners(),
			this
		);
	}
	getLastBreadcrumb() {
		return this._breadcrumbs[this._breadcrumbs.length - 1];
	}
	clearBreadcrumbs() {
		return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
	}
	addAttachment(e) {
		return this._attachments.push(e), this;
	}
	clearAttachments() {
		return (this._attachments = []), this;
	}
	getScopeData() {
		return {
			breadcrumbs: this._breadcrumbs,
			attachments: this._attachments,
			contexts: this._contexts,
			tags: this._tags,
			extra: this._extra,
			user: this._user,
			level: this._level,
			fingerprint: this._fingerprint || [],
			eventProcessors: this._eventProcessors,
			propagationContext: this._propagationContext,
			sdkProcessingMetadata: this._sdkProcessingMetadata,
			transactionName: this._transactionName,
			span: q(this),
		};
	}
	setSDKProcessingMetadata(e) {
		return (
			(this._sdkProcessingMetadata = B(this._sdkProcessingMetadata, e, 2)), this
		);
	}
	setPropagationContext(e) {
		return (this._propagationContext = e), this;
	}
	getPropagationContext() {
		return this._propagationContext;
	}
	captureException(e, n) {
		const r = (n == null ? void 0 : n.event_id) || T();
		if (!this._client)
			return (
				S &&
					h.warn("No client configured on scope - will not capture exception!"),
				r
			);
		const s = new Error("Sentry syntheticException");
		return (
			this._client.captureException(
				e,
				{ originalException: e, syntheticException: s, ...n, event_id: r },
				this
			),
			r
		);
	}
	captureMessage(e, n, r) {
		const s = (r == null ? void 0 : r.event_id) || T();
		if (!this._client)
			return (
				S &&
					h.warn("No client configured on scope - will not capture message!"),
				s
			);
		const i = new Error(e);
		return (
			this._client.captureMessage(
				e,
				n,
				{ originalException: e, syntheticException: i, ...r, event_id: s },
				this
			),
			s
		);
	}
	captureEvent(e, n) {
		const r = (n == null ? void 0 : n.event_id) || T();
		return this._client
			? (this._client.captureEvent(e, { ...n, event_id: r }, this), r)
			: (S && h.warn("No client configured on scope - will not capture event!"),
			  r);
	}
	_notifyScopeListeners() {
		this._notifyingListeners ||
			((this._notifyingListeners = !0),
			this._scopeListeners.forEach((e) => {
				e(this);
			}),
			(this._notifyingListeners = !1));
	}
}
function Ne() {
	return j("defaultCurrentScope", () => new y());
}
function xe() {
	return j("defaultIsolationScope", () => new y());
}
class Re {
	constructor(e, n) {
		let r;
		e ? (r = e) : (r = new y());
		let s;
		n ? (s = n) : (s = new y()),
			(this._stack = [{ scope: r }]),
			(this._isolationScope = s);
	}
	withScope(e) {
		const n = this._pushScope();
		let r;
		try {
			r = e(n);
		} catch (s) {
			throw (this._popScope(), s);
		}
		return it(r)
			? r.then(
					(s) => (this._popScope(), s),
					(s) => {
						throw (this._popScope(), s);
					}
			  )
			: (this._popScope(), r);
	}
	getClient() {
		return this.getStackTop().client;
	}
	getScope() {
		return this.getStackTop().scope;
	}
	getIsolationScope() {
		return this._isolationScope;
	}
	getStackTop() {
		return this._stack[this._stack.length - 1];
	}
	_pushScope() {
		const e = this.getScope().clone();
		return this._stack.push({ client: this.getClient(), scope: e }), e;
	}
	_popScope() {
		return this._stack.length <= 1 ? !1 : !!this._stack.pop();
	}
}
function C() {
	const t = D(),
		e = et(t);
	return (e.stack = e.stack || new Re(Ne(), xe()));
}
function Oe(t) {
	return C().withScope(t);
}
function De(t, e) {
	const n = C();
	return n.withScope(() => ((n.getStackTop().scope = t), e(t)));
}
function St(t) {
	return C().withScope(() => t(C().getIsolationScope()));
}
function Me() {
	return {
		withIsolationScope: St,
		withScope: Oe,
		withSetScope: De,
		withSetIsolationScope: (t, e) => St(e),
		getCurrentScope: () => C().getScope(),
		getIsolationScope: () => C().getIsolationScope(),
	};
}
function G(t) {
	const e = et(t);
	return e.acs ? e.acs : Me();
}
function R() {
	const t = D();
	return G(t).getCurrentScope();
}
function z() {
	const t = D();
	return G(t).getIsolationScope();
}
function we() {
	return j("globalScope", () => new y());
}
function qn(...t) {
	const e = D(),
		n = G(e);
	if (t.length === 2) {
		const [r, s] = t;
		return r ? n.withSetScope(r, s) : n.withScope(s);
	}
	return n.withScope(t[0]);
}
function H() {
	return R().getClient();
}
function Qn(t) {
	const e = t.getPropagationContext(),
		{ traceId: n, parentSpanId: r, propagationSpanId: s } = e,
		i = { trace_id: n, span_id: s || ut() };
	return r && (i.parent_span_id = r), i;
}
const Pe = "sentry.source",
	ke = "sentry.sample_rate",
	Le = "sentry.previous_trace_sample_rate",
	Fe = "sentry.op",
	$e = "sentry.origin",
	Zn = "sentry.idle_span_finish_reason",
	tr = "sentry.measurement_unit",
	er = "sentry.measurement_value",
	nr = "sentry.custom_span_name",
	rr = "sentry.profile_id",
	sr = "sentry.exclusive_time",
	ir = "sentry.link.type",
	Ue = 0,
	Ft = 1,
	_ = 2;
function je(t) {
	if (t < 400 && t >= 100) return { code: Ft };
	if (t >= 400 && t < 500)
		switch (t) {
			case 401:
				return { code: _, message: "unauthenticated" };
			case 403:
				return { code: _, message: "permission_denied" };
			case 404:
				return { code: _, message: "not_found" };
			case 409:
				return { code: _, message: "already_exists" };
			case 413:
				return { code: _, message: "failed_precondition" };
			case 429:
				return { code: _, message: "resource_exhausted" };
			case 499:
				return { code: _, message: "cancelled" };
			default:
				return { code: _, message: "invalid_argument" };
		}
	if (t >= 500 && t < 600)
		switch (t) {
			case 501:
				return { code: _, message: "unimplemented" };
			case 503:
				return { code: _, message: "unavailable" };
			case 504:
				return { code: _, message: "deadline_exceeded" };
			default:
				return { code: _, message: "internal_error" };
		}
	return { code: _, message: "unknown_error" };
}
function or(t, e) {
	t.setAttribute("http.response.status_code", e);
	const n = je(e);
	n.message !== "unknown_error" && t.setStatus(n);
}
const $t = "_sentryScope",
	Ut = "_sentryIsolationScope";
function ar(t, e, n) {
	t && (I(t, Ut, n), I(t, $t, e));
}
function jt(t) {
	return { scope: t[$t], isolationScope: t[Ut] };
}
const vt = "sentry-",
	ve = /^sentry-/,
	Be = 8192;
function Bt(t) {
	const e = Ge(t);
	if (!e) return;
	const n = Object.entries(e).reduce((r, [s, i]) => {
		if (s.match(ve)) {
			const o = s.slice(vt.length);
			r[o] = i;
		}
		return r;
	}, {});
	if (Object.keys(n).length > 0) return n;
}
function cr(t) {
	if (!t) return;
	const e = Object.entries(t).reduce(
		(n, [r, s]) => (s && (n[`${vt}${r}`] = s), n),
		{}
	);
	return ze(e);
}
function Ge(t) {
	if (!(!t || (!F(t) && !Array.isArray(t))))
		return Array.isArray(t)
			? t.reduce((e, n) => {
					const r = yt(n);
					return (
						Object.entries(r).forEach(([s, i]) => {
							e[s] = i;
						}),
						e
					);
			  }, {})
			: yt(t);
}
function yt(t) {
	return t
		.split(",")
		.map((e) =>
			e.split("=").map((n) => {
				try {
					return decodeURIComponent(n.trim());
				} catch {
					return;
				}
			})
		)
		.reduce((e, [n, r]) => (n && r && (e[n] = r), e), {});
}
function ze(t) {
	if (Object.keys(t).length !== 0)
		return Object.entries(t).reduce((e, [n, r], s) => {
			const i = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
				o = s === 0 ? i : `${e},${i}`;
			return o.length > Be
				? (S &&
						h.warn(
							`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`
						),
				  e)
				: o;
		}, "");
}
const He = /^o(\d+)\./,
	Ye = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Ve(t) {
	return t === "http" || t === "https";
}
function ur(t, e = !1) {
	const {
		host: n,
		path: r,
		pass: s,
		port: i,
		projectId: o,
		protocol: c,
		publicKey: a,
	} = t;
	return `${c}://${a}${e && s ? `:${s}` : ""}@${n}${i ? `:${i}` : ""}/${
		r && `${r}/`
	}${o}`;
}
function Ke(t) {
	const e = Ye.exec(t);
	if (!e) {
		nt(() => {
			console.error(`Invalid Sentry Dsn: ${t}`);
		});
		return;
	}
	const [n, r, s = "", i = "", o = "", c = ""] = e.slice(1);
	let a = "",
		u = c;
	const f = u.split("/");
	if ((f.length > 1 && ((a = f.slice(0, -1).join("/")), (u = f.pop())), u)) {
		const d = u.match(/^\d+/);
		d && (u = d[0]);
	}
	return Gt({
		host: i,
		pass: s,
		path: a,
		projectId: u,
		port: o,
		protocol: n,
		publicKey: r,
	});
}
function Gt(t) {
	return {
		protocol: t.protocol,
		publicKey: t.publicKey || "",
		pass: t.pass || "",
		host: t.host,
		port: t.port || "",
		path: t.path || "",
		projectId: t.projectId,
	};
}
function We(t) {
	if (!S) return !0;
	const { port: e, projectId: n, protocol: r } = t;
	return ["protocol", "publicKey", "host", "projectId"].find((o) =>
		t[o] ? !1 : (h.error(`Invalid Sentry Dsn: ${o} missing`), !0)
	)
		? !1
		: n.match(/^\d+$/)
		? Ve(r)
			? e && isNaN(parseInt(e, 10))
				? (h.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1)
				: !0
			: (h.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
		: (h.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function Xe(t) {
	const e = t.match(He);
	return e == null ? void 0 : e[1];
}
function Je(t) {
	const e = t.getOptions(),
		{ host: n } = t.getDsn() || {};
	let r;
	return e.orgId ? (r = String(e.orgId)) : n && (r = Xe(n)), r;
}
function fr(t) {
	const e = typeof t == "string" ? Ke(t) : Gt(t);
	if (!(!e || !We(e))) return e;
}
function Et(t) {
	if (typeof t == "boolean") return Number(t);
	const e = typeof t == "string" ? parseFloat(t) : t;
	if (!(typeof e != "number" || isNaN(e) || e < 0 || e > 1)) return e;
}
const qe = new RegExp(
	"^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
);
function Qe(t) {
	if (!t) return;
	const e = t.match(qe);
	if (!e) return;
	let n;
	return (
		e[3] === "1" ? (n = !0) : e[3] === "0" && (n = !1),
		{ traceId: e[1], parentSampled: n, parentSpanId: e[2] }
	);
}
function dr(t, e) {
	const n = Qe(t),
		r = Bt(e);
	if (!(n != null && n.traceId))
		return { traceId: U(), sampleRand: Math.random() };
	const s = tn(n, r);
	r && (r.sample_rand = s.toString());
	const { traceId: i, parentSpanId: o, parentSampled: c } = n;
	return {
		traceId: i,
		parentSpanId: o,
		sampled: c,
		dsc: r || {},
		sampleRand: s,
	};
}
function Ze(t = U(), e = ut(), n) {
	let r = "";
	return n !== void 0 && (r = n ? "-1" : "-0"), `${t}-${e}${r}`;
}
function tn(t, e) {
	const n = Et(e == null ? void 0 : e.sample_rand);
	if (n !== void 0) return n;
	const r = Et(e == null ? void 0 : e.sample_rate);
	return r && (t == null ? void 0 : t.parentSampled) !== void 0
		? t.parentSampled
			? Math.random() * r
			: r + Math.random() * (1 - r)
		: Math.random();
}
const pr = 0,
	zt = 1;
let bt = !1;
function lr(t) {
	const { spanId: e, traceId: n } = t.spanContext(),
		{
			data: r,
			op: s,
			parent_span_id: i,
			status: o,
			origin: c,
			links: a,
		} = Y(t);
	return {
		parent_span_id: i,
		span_id: e,
		trace_id: n,
		data: r,
		op: s,
		status: o,
		origin: c,
		links: a,
	};
}
function en(t) {
	const { spanId: e, traceId: n, isRemote: r } = t.spanContext(),
		s = r ? e : Y(t).parent_span_id,
		i = jt(t).scope,
		o = r
			? (i == null ? void 0 : i.getPropagationContext().propagationSpanId) ||
			  ut()
			: e;
	return { parent_span_id: s, span_id: o, trace_id: n };
}
function _r(t) {
	const { traceId: e, spanId: n } = t.spanContext(),
		r = ft(t);
	return Ze(e, n, r);
}
function nn(t) {
	if (t && t.length > 0)
		return t.map(
			({
				context: { spanId: e, traceId: n, traceFlags: r, ...s },
				attributes: i,
			}) => ({
				span_id: e,
				trace_id: n,
				sampled: r === zt,
				attributes: i,
				...s,
			})
		);
}
function Tt(t) {
	return typeof t == "number"
		? It(t)
		: Array.isArray(t)
		? t[0] + t[1] / 1e9
		: t instanceof Date
		? It(t.getTime())
		: ct();
}
function It(t) {
	return t > 9999999999 ? t / 1e3 : t;
}
function Y(t) {
	var r;
	if (sn(t)) return t.getSpanJSON();
	const { spanId: e, traceId: n } = t.spanContext();
	if (rn(t)) {
		const {
				attributes: s,
				startTime: i,
				name: o,
				endTime: c,
				status: a,
				links: u,
			} = t,
			f =
				"parentSpanId" in t
					? t.parentSpanId
					: "parentSpanContext" in t
					? (r = t.parentSpanContext) == null
						? void 0
						: r.spanId
					: void 0;
		return {
			span_id: e,
			trace_id: n,
			data: s,
			description: o,
			parent_span_id: f,
			start_timestamp: Tt(i),
			timestamp: Tt(c) || void 0,
			status: on(a),
			op: s[Fe],
			origin: s[$e],
			links: nn(u),
		};
	}
	return { span_id: e, trace_id: n, start_timestamp: 0, data: {} };
}
function rn(t) {
	const e = t;
	return (
		!!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
	);
}
function sn(t) {
	return typeof t.getSpanJSON == "function";
}
function ft(t) {
	const { traceFlags: e } = t.spanContext();
	return e === zt;
}
function on(t) {
	if (!(!t || t.code === Ue))
		return t.code === Ft ? "ok" : t.message || "unknown_error";
}
const A = "_sentryChildSpans",
	Q = "_sentryRootSpan";
function gr(t, e) {
	const n = t[Q] || t;
	I(e, Q, n), t[A] ? t[A].add(e) : I(t, A, new Set([e]));
}
function hr(t, e) {
	t[A] && t[A].delete(e);
}
function mr(t) {
	const e = new Set();
	function n(r) {
		if (!e.has(r) && ft(r)) {
			e.add(r);
			const s = r[A] ? Array.from(r[A]) : [];
			for (const i of s) n(i);
		}
	}
	return n(t), Array.from(e);
}
function Ht(t) {
	return t[Q] || t;
}
function Sr() {
	const t = D(),
		e = G(t);
	return e.getActiveSpan ? e.getActiveSpan() : q(R());
}
function yr() {
	bt ||
		(nt(() => {
			console.warn(
				"[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly."
			);
		}),
		(bt = !0));
}
function an(t) {
	var n;
	if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
	const e = t || ((n = H()) == null ? void 0 : n.getOptions());
	return !!e && (e.tracesSampleRate != null || !!e.tracesSampler);
}
const Yt = "production",
	Vt = "_frozenDsc";
function Er(t, e) {
	I(t, Vt, e);
}
function Kt(t, e) {
	const n = e.getOptions(),
		{ publicKey: r } = e.getDsn() || {},
		s = {
			environment: n.environment || Yt,
			release: n.release,
			public_key: r,
			trace_id: t,
			org_id: Je(e),
		};
	return e.emit("createDsc", s), s;
}
function br(t, e) {
	const n = e.getPropagationContext();
	return n.dsc || Kt(n.traceId, t);
}
function cn(t) {
	var E;
	const e = H();
	if (!e) return {};
	const n = Ht(t),
		r = Y(n),
		s = r.data,
		i = n.spanContext().traceState,
		o = (i == null ? void 0 : i.get("sentry.sample_rate")) ?? s[ke] ?? s[Le];
	function c(V) {
		return (
			(typeof o == "number" || typeof o == "string") &&
				(V.sample_rate = `${o}`),
			V
		);
	}
	const a = n[Vt];
	if (a) return c(a);
	const u = i == null ? void 0 : i.get("sentry.dsc"),
		f = u && Bt(u);
	if (f) return c(f);
	const d = Kt(t.spanContext().traceId, e),
		l = s[Pe],
		p = r.description;
	return (
		l !== "url" && p && (d.transaction = p),
		an() &&
			((d.sampled = String(ft(n))),
			(d.sample_rand =
				(i == null ? void 0 : i.get("sentry.sample_rand")) ??
				((E = jt(n).scope) == null
					? void 0
					: E.getPropagationContext().sampleRand.toString()))),
		c(d),
		e.emit("createDsc", d, n),
		d
	);
}
function b(t, e = 100, n = 1 / 0) {
	try {
		return Z("", t, e, n);
	} catch (r) {
		return { ERROR: `**non-serializable** (${r})` };
	}
}
function un(t, e = 3, n = 100 * 1024) {
	const r = b(t, e);
	return ln(r) > n ? un(t, e - 1, n) : r;
}
function Z(t, e, n = 1 / 0, r = 1 / 0, s = _n()) {
	const [i, o] = s;
	if (
		e == null ||
		["boolean", "string"].includes(typeof e) ||
		(typeof e == "number" && Number.isFinite(e))
	)
		return e;
	const c = fn(t, e);
	if (!c.startsWith("[object ")) return c;
	if (e.__sentry_skip_normalization__) return e;
	const a =
		typeof e.__sentry_override_normalization_depth__ == "number"
			? e.__sentry_override_normalization_depth__
			: n;
	if (a === 0) return c.replace("object ", "");
	if (i(e)) return "[Circular ~]";
	const u = e;
	if (u && typeof u.toJSON == "function")
		try {
			const p = u.toJSON();
			return Z("", p, a - 1, r, s);
		} catch {}
	const f = Array.isArray(e) ? [] : {};
	let d = 0;
	const l = Pt(e);
	for (const p in l) {
		if (!Object.prototype.hasOwnProperty.call(l, p)) continue;
		if (d >= r) {
			f[p] = "[MaxProperties ~]";
			break;
		}
		const E = l[p];
		(f[p] = Z(p, E, a - 1, r, s)), d++;
	}
	return o(e), f;
}
function fn(t, e) {
	try {
		if (t === "domain" && e && typeof e == "object" && e._events)
			return "[Domain]";
		if (t === "domainEmitter") return "[DomainEmitter]";
		if (typeof global < "u" && e === global) return "[Global]";
		if (typeof window < "u" && e === window) return "[Window]";
		if (typeof document < "u" && e === document) return "[Document]";
		if (wt(e)) return "[VueViewModel]";
		if (de(e)) return "[SyntheticEvent]";
		if (typeof e == "number" && !Number.isFinite(e)) return `[${e}]`;
		if (typeof e == "function") return `[Function: ${ie(e)}]`;
		if (typeof e == "symbol") return `[${String(e)}]`;
		if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
		const n = dn(e);
		return /^HTML(\w*)Element$/.test(n)
			? `[HTMLElement: ${n}]`
			: `[object ${n}]`;
	} catch (n) {
		return `**non-serializable** (${n})`;
	}
}
function dn(t) {
	const e = Object.getPrototypeOf(t);
	return e != null && e.constructor ? e.constructor.name : "null prototype";
}
function pn(t) {
	return ~-encodeURI(t).split(/%..|./).length;
}
function ln(t) {
	return pn(JSON.stringify(t));
}
function _n() {
	const t = new WeakSet();
	function e(r) {
		return t.has(r) ? !0 : (t.add(r), !1);
	}
	function n(r) {
		t.delete(r);
	}
	return [e, n];
}
const X = 0,
	At = 1,
	Ct = 2;
function Tr(t) {
	return new N((e) => {
		e(t);
	});
}
function Ir(t) {
	return new N((e, n) => {
		n(t);
	});
}
class N {
	constructor(e) {
		(this._state = X), (this._handlers = []), this._runExecutor(e);
	}
	then(e, n) {
		return new N((r, s) => {
			this._handlers.push([
				!1,
				(i) => {
					if (!e) r(i);
					else
						try {
							r(e(i));
						} catch (o) {
							s(o);
						}
				},
				(i) => {
					if (!n) s(i);
					else
						try {
							r(n(i));
						} catch (o) {
							s(o);
						}
				},
			]),
				this._executeHandlers();
		});
	}
	catch(e) {
		return this.then((n) => n, e);
	}
	finally(e) {
		return new N((n, r) => {
			let s, i;
			return this.then(
				(o) => {
					(i = !1), (s = o), e && e();
				},
				(o) => {
					(i = !0), (s = o), e && e();
				}
			).then(() => {
				if (i) {
					r(s);
					return;
				}
				n(s);
			});
		});
	}
	_executeHandlers() {
		if (this._state === X) return;
		const e = this._handlers.slice();
		(this._handlers = []),
			e.forEach((n) => {
				n[0] ||
					(this._state === At && n[1](this._value),
					this._state === Ct && n[2](this._value),
					(n[0] = !0));
			});
	}
	_runExecutor(e) {
		const n = (i, o) => {
				if (this._state === X) {
					if (it(o)) {
						o.then(r, s);
						return;
					}
					(this._state = i), (this._value = o), this._executeHandlers();
				}
			},
			r = (i) => {
				n(At, i);
			},
			s = (i) => {
				n(Ct, i);
			};
		try {
			e(r, s);
		} catch (i) {
			s(i);
		}
	}
}
function tt(t, e, n, r = 0) {
	return new N((s, i) => {
		const o = t[r];
		if (e === null || typeof o != "function") s(e);
		else {
			const c = o({ ...e }, n);
			S &&
				o.id &&
				c === null &&
				h.log(`Event processor "${o.id}" dropped event`),
				it(c)
					? c.then((a) => tt(t, a, n, r + 1).then(s)).then(null, i)
					: tt(t, c, n, r + 1)
							.then(s)
							.then(null, i);
		}
	});
}
function gn(t, e) {
	const {
		fingerprint: n,
		span: r,
		breadcrumbs: s,
		sdkProcessingMetadata: i,
	} = e;
	hn(t, e), r && yn(t, r), En(t, n), mn(t, s), Sn(t, i);
}
function Nt(t, e) {
	const {
		extra: n,
		tags: r,
		user: s,
		contexts: i,
		level: o,
		sdkProcessingMetadata: c,
		breadcrumbs: a,
		fingerprint: u,
		eventProcessors: f,
		attachments: d,
		propagationContext: l,
		transactionName: p,
		span: E,
	} = e;
	P(t, "extra", n),
		P(t, "tags", r),
		P(t, "user", s),
		P(t, "contexts", i),
		(t.sdkProcessingMetadata = B(t.sdkProcessingMetadata, c, 2)),
		o && (t.level = o),
		p && (t.transactionName = p),
		E && (t.span = E),
		a.length && (t.breadcrumbs = [...t.breadcrumbs, ...a]),
		u.length && (t.fingerprint = [...t.fingerprint, ...u]),
		f.length && (t.eventProcessors = [...t.eventProcessors, ...f]),
		d.length && (t.attachments = [...t.attachments, ...d]),
		(t.propagationContext = { ...t.propagationContext, ...l });
}
function P(t, e, n) {
	t[e] = B(t[e], n, 1);
}
function hn(t, e) {
	const {
		extra: n,
		tags: r,
		user: s,
		contexts: i,
		level: o,
		transactionName: c,
	} = e;
	Object.keys(n).length && (t.extra = { ...n, ...t.extra }),
		Object.keys(r).length && (t.tags = { ...r, ...t.tags }),
		Object.keys(s).length && (t.user = { ...s, ...t.user }),
		Object.keys(i).length && (t.contexts = { ...i, ...t.contexts }),
		o && (t.level = o),
		c && t.type !== "transaction" && (t.transaction = c);
}
function mn(t, e) {
	const n = [...(t.breadcrumbs || []), ...e];
	t.breadcrumbs = n.length ? n : void 0;
}
function Sn(t, e) {
	t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, ...e };
}
function yn(t, e) {
	(t.contexts = { trace: en(e), ...t.contexts }),
		(t.sdkProcessingMetadata = {
			dynamicSamplingContext: cn(e),
			...t.sdkProcessingMetadata,
		});
	const n = Ht(e),
		r = Y(n).description;
	r && !t.transaction && t.type === "transaction" && (t.transaction = r);
}
function En(t, e) {
	(t.fingerprint = t.fingerprint
		? Array.isArray(t.fingerprint)
			? t.fingerprint
			: [t.fingerprint]
		: []),
		e && (t.fingerprint = t.fingerprint.concat(e)),
		t.fingerprint.length || delete t.fingerprint;
}
let k, xt, L;
function bn(t) {
	const e = g._sentryDebugIds;
	if (!e) return {};
	const n = Object.keys(e);
	return (
		(L && n.length === xt) ||
			((xt = n.length),
			(L = n.reduce((r, s) => {
				k || (k = {});
				const i = k[s];
				if (i) r[i[0]] = i[1];
				else {
					const o = t(s);
					for (let c = o.length - 1; c >= 0; c--) {
						const a = o[c],
							u = a == null ? void 0 : a.filename,
							f = e[s];
						if (u && f) {
							(r[u] = f), (k[s] = [u, f]);
							break;
						}
					}
				}
				return r;
			}, {}))),
		L
	);
}
function Ar(t, e, n, r, s, i) {
	const { normalizeDepth: o = 3, normalizeMaxBreadth: c = 1e3 } = t,
		a = {
			...e,
			event_id: e.event_id || n.event_id || T(),
			timestamp: e.timestamp || at(),
		},
		u = n.integrations || t.integrations.map((m) => m.name);
	Tn(a, t),
		Cn(a, u),
		s && s.emit("applyFrameMetadata", e),
		e.type === void 0 && In(a, t.stackParser);
	const f = xn(r, n.captureContext);
	n.mechanism && Se(a, n.mechanism);
	const d = s ? s.getEventProcessors() : [],
		l = we().getScopeData();
	if (i) {
		const m = i.getScopeData();
		Nt(l, m);
	}
	if (f) {
		const m = f.getScopeData();
		Nt(l, m);
	}
	const p = [...(n.attachments || []), ...l.attachments];
	p.length && (n.attachments = p), gn(a, l);
	const E = [...d, ...l.eventProcessors];
	return tt(E, a, n).then(
		(m) => (m && An(m), typeof o == "number" && o > 0 ? Nn(m, o, c) : m)
	);
}
function Tn(t, e) {
	const { environment: n, release: r, dist: s, maxValueLength: i = 250 } = e;
	(t.environment = t.environment || n || Yt),
		!t.release && r && (t.release = r),
		!t.dist && s && (t.dist = s);
	const o = t.request;
	o != null && o.url && (o.url = $(o.url, i));
}
function In(t, e) {
	var r, s;
	const n = bn(e);
	(s = (r = t.exception) == null ? void 0 : r.values) == null ||
		s.forEach((i) => {
			var o, c;
			(c = (o = i.stacktrace) == null ? void 0 : o.frames) == null ||
				c.forEach((a) => {
					a.filename && (a.debug_id = n[a.filename]);
				});
		});
}
function An(t) {
	var r, s;
	const e = {};
	if (
		((s = (r = t.exception) == null ? void 0 : r.values) == null ||
			s.forEach((i) => {
				var o, c;
				(c = (o = i.stacktrace) == null ? void 0 : o.frames) == null ||
					c.forEach((a) => {
						a.debug_id &&
							(a.abs_path
								? (e[a.abs_path] = a.debug_id)
								: a.filename && (e[a.filename] = a.debug_id),
							delete a.debug_id);
					});
			}),
		Object.keys(e).length === 0)
	)
		return;
	(t.debug_meta = t.debug_meta || {}),
		(t.debug_meta.images = t.debug_meta.images || []);
	const n = t.debug_meta.images;
	Object.entries(e).forEach(([i, o]) => {
		n.push({ type: "sourcemap", code_file: i, debug_id: o });
	});
}
function Cn(t, e) {
	e.length > 0 &&
		((t.sdk = t.sdk || {}),
		(t.sdk.integrations = [...(t.sdk.integrations || []), ...e]));
}
function Nn(t, e, n) {
	var s, i;
	if (!t) return null;
	const r = {
		...t,
		...(t.breadcrumbs && {
			breadcrumbs: t.breadcrumbs.map((o) => ({
				...o,
				...(o.data && { data: b(o.data, e, n) }),
			})),
		}),
		...(t.user && { user: b(t.user, e, n) }),
		...(t.contexts && { contexts: b(t.contexts, e, n) }),
		...(t.extra && { extra: b(t.extra, e, n) }),
	};
	return (
		(s = t.contexts) != null &&
			s.trace &&
			r.contexts &&
			((r.contexts.trace = t.contexts.trace),
			t.contexts.trace.data &&
				(r.contexts.trace.data = b(t.contexts.trace.data, e, n))),
		t.spans &&
			(r.spans = t.spans.map((o) => ({
				...o,
				...(o.data && { data: b(o.data, e, n) }),
			}))),
		(i = t.contexts) != null &&
			i.flags &&
			r.contexts &&
			(r.contexts.flags = b(t.contexts.flags, 3, n)),
		r
	);
}
function xn(t, e) {
	if (!e) return t;
	const n = t ? t.clone() : new y();
	return n.update(e), n;
}
function Rn(t) {
	if (t)
		return On(t) ? { captureContext: t } : Mn(t) ? { captureContext: t } : t;
}
function On(t) {
	return t instanceof y || typeof t == "function";
}
const Dn = [
	"user",
	"level",
	"extra",
	"contexts",
	"tags",
	"fingerprint",
	"propagationContext",
];
function Mn(t) {
	return Object.keys(t).some((e) => Dn.includes(e));
}
function Cr(t, e) {
	return R().captureException(t, Rn(e));
}
function Nr(t, e) {
	return R().captureEvent(t, e);
}
function xr(t, e) {
	z().setContext(t, e);
}
function Rr() {
	const t = H();
	return (
		(t == null ? void 0 : t.getOptions().enabled) !== !1 &&
		!!(t != null && t.getTransport())
	);
}
function Or(t) {
	const e = z(),
		n = R(),
		{ userAgent: r } = g.navigator || {},
		s = Te({
			user: n.getUser() || e.getUser(),
			...(r && { userAgent: r }),
			...t,
		}),
		i = e.getSession();
	return (
		(i == null ? void 0 : i.status) === "ok" && v(i, { status: "exited" }),
		Wt(),
		e.setSession(s),
		s
	);
}
function Wt() {
	const t = z(),
		n = R().getSession() || t.getSession();
	n && Ie(n), Xt(), t.setSession();
}
function Xt() {
	const t = z(),
		e = H(),
		n = t.getSession();
	n && e && e.captureSession(n);
}
function Dr(t = !1) {
	if (t) {
		Wt();
		return;
	}
	Xt();
}
export {
	fr as $,
	rr as A,
	H as B,
	jt as C,
	S as D,
	R as E,
	mr as F,
	g as G,
	nr as H,
	lr as I,
	it as J,
	an as K,
	Et as L,
	qn as M,
	D as N,
	G as O,
	q as P,
	Er as Q,
	z as R,
	_ as S,
	pr as T,
	gr as U,
	ar as V,
	ke as W,
	Zn as X,
	hr as Y,
	at as Z,
	mt as _,
	Sr as a,
	T as a0,
	Xn as a1,
	Un as a2,
	v as a3,
	Tr as a4,
	Yt as a5,
	N as a6,
	Ar as a7,
	Qn as a8,
	br as a9,
	vn as aA,
	he as aB,
	Wn as aC,
	Se as aD,
	Cr as aE,
	Ln as aF,
	Fn as aG,
	$n as aH,
	ce as aI,
	un as aJ,
	Vn as aK,
	Jn as aL,
	le as aM,
	Bn as aN,
	F as aO,
	re as aP,
	ne as aQ,
	Gn as aR,
	Or as aS,
	Dr as aT,
	Nr as aU,
	Pn as aV,
	Le as aW,
	ir as aX,
	dr as aY,
	Ir as aa,
	ae as ab,
	B as ac,
	Mt as ad,
	j as ae,
	nt as af,
	O as ag,
	Rr as ah,
	_r as ai,
	cr as aj,
	qe as ak,
	Ze as al,
	Qe as am,
	Yn as an,
	Kn as ao,
	zn as ap,
	M as aq,
	wn as ar,
	Hn as as,
	dt as at,
	kn as au,
	or as av,
	jn as aw,
	vt as ax,
	oe as ay,
	I as az,
	Ht as b,
	U as c,
	h as d,
	ut as e,
	et as f,
	ie as g,
	ur as h,
	ge as i,
	cn as j,
	Y as k,
	yr as l,
	ft as m,
	b as n,
	tr as o,
	er as p,
	Fe as q,
	$e as r,
	xr as s,
	ct as t,
	zt as u,
	Tt as v,
	Pe as w,
	nn as x,
	on as y,
	sr as z,
};

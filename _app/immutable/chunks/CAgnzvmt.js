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
    t.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
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
      (t._sentryDebugIds[e] = "c81cc66f-1b56-4725-a681-a89a2316a045"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-c81cc66f-1b56-4725-a681-a89a2316a045"));
  })();
} catch {}
const y = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  _ = globalThis,
  D = "10.25.0";
function w() {
  return st(_), _;
}
function st(t) {
  const e = (t.__SENTRY__ = t.__SENTRY__ || {});
  return (e.version = e.version || D), (e[D] = e[D] || {});
}
function j(t, e, n = _) {
  const r = (n.__SENTRY__ = n.__SENTRY__ || {}),
    s = (r[D] = r[D] || {});
  return s[t] || (s[t] = e());
}
const Bn = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  Qt = "Sentry Logger ",
  dt = {};
function it(t) {
  if (!("console" in _)) return t();
  const e = _.console,
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
function Zt() {
  at().enabled = !0;
}
function te() {
  at().enabled = !1;
}
function Ot() {
  return at().enabled;
}
function ee(...t) {
  ot("log", ...t);
}
function ne(...t) {
  ot("warn", ...t);
}
function re(...t) {
  ot("error", ...t);
}
function ot(t, ...e) {
  y &&
    Ot() &&
    it(() => {
      _.console[t](`${Qt}[${t}]:`, ...e);
    });
}
function at() {
  return y ? j("loggerSettings", () => ({ enabled: !1 })) : { enabled: !1 };
}
const m = {
    enable: Zt,
    disable: te,
    isEnabled: Ot,
    log: ee,
    warn: ne,
    error: re,
  },
  Dt = 50,
  se = "?",
  pt = /\(error: (.*)\)/,
  lt = /captureMessage|captureException/;
function ie(...t) {
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
        if (i.length >= Dt + s) break;
      }
    }
    return oe(i.slice(s));
  };
}
function Gn(t) {
  return Array.isArray(t) ? ie(...t) : t;
}
function oe(t) {
  if (!t.length) return [];
  const e = Array.from(t);
  return (
    /sentryWrapped/.test(L(e).function || "") && e.pop(),
    e.reverse(),
    lt.test(L(e).function || "") &&
      (e.pop(), lt.test(L(e).function || "") && e.pop()),
    e
      .slice(0, Dt)
      .map((n) => ({
        ...n,
        filename: n.filename || L(e).filename,
        function: n.function || se,
      }))
  );
}
function L(t) {
  return t[t.length - 1] || {};
}
const X = "<anonymous>";
function ae(t) {
  try {
    return !t || typeof t != "function" ? X : t.name || X;
  } catch {
    return X;
  }
}
function Hn(t) {
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
const Mt = Object.prototype.toString;
function ce(t) {
  switch (Mt.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return k(t, Error);
  }
}
function R(t, e) {
  return Mt.call(t) === `[object ${e}]`;
}
function zn(t) {
  return R(t, "ErrorEvent");
}
function Yn(t) {
  return R(t, "DOMError");
}
function Kn(t) {
  return R(t, "DOMException");
}
function $(t) {
  return R(t, "String");
}
function ue(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    "__sentry_template_string__" in t &&
    "__sentry_template_values__" in t
  );
}
function Vn(t) {
  return (
    t === null || ue(t) || (typeof t != "object" && typeof t != "function")
  );
}
function Pt(t) {
  return R(t, "Object");
}
function fe(t) {
  return typeof Event < "u" && k(t, Event);
}
function de(t) {
  return typeof Element < "u" && k(t, Element);
}
function pe(t) {
  return R(t, "RegExp");
}
function U(t) {
  return !!(t != null && t.then && typeof t.then == "function");
}
function le(t) {
  return (
    Pt(t) &&
    "nativeEvent" in t &&
    "preventDefault" in t &&
    "stopPropagation" in t
  );
}
function k(t, e) {
  try {
    return t instanceof e;
  } catch {
    return !1;
  }
}
function wt(t) {
  return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue));
}
function Wn(t) {
  return typeof Request < "u" && k(t, Request);
}
const ct = _,
  _e = 80;
function ge(t, e = {}) {
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
      d = (!Array.isArray(e) && e.maxStringLength) || _e;
    for (
      ;
      n &&
      i++ < r &&
      ((u = he(n, f)),
      !(u === "html" || (i > 1 && o + s.length * a + u.length >= d)));

    )
      s.push(u), (o += u.length), (n = n.parentNode);
    return s.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function he(t, e) {
  const n = t,
    r = [];
  if (!(n != null && n.tagName)) return "";
  if (ct.HTMLElement && n instanceof HTMLElement && n.dataset) {
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
    if (o && $(o)) {
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
function Xn() {
  try {
    return ct.document.location.href;
  } catch {
    return "";
  }
}
function Jn(t) {
  if (!ct.HTMLElement) return null;
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
function qn(t, e, n) {
  if (!(e in t)) return;
  const r = t[e];
  if (typeof r != "function") return;
  const s = n(r);
  typeof s == "function" && me(s, r);
  try {
    t[e] = s;
  } catch {
    y && m.log(`Failed to replace method "${e}" in object`, t);
  }
}
function A(t, e, n) {
  try {
    Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
  } catch {
    y && m.log(`Failed to add non-enumerable property "${e}" to object`, t);
  }
}
function me(t, e) {
  try {
    const n = e.prototype || {};
    (t.prototype = e.prototype = n), A(t, "__sentry_original__", e);
  } catch {}
}
function Qn(t) {
  return t.__sentry_original__;
}
function kt(t) {
  if (ce(t))
    return { message: t.message, name: t.name, stack: t.stack, ...gt(t) };
  if (fe(t)) {
    const e = {
      type: t.type,
      target: _t(t.target),
      currentTarget: _t(t.currentTarget),
      ...gt(t),
    };
    return (
      typeof CustomEvent < "u" && k(t, CustomEvent) && (e.detail = t.detail), e
    );
  } else return t;
}
function _t(t) {
  try {
    return de(t) ? ge(t) : Object.prototype.toString.call(t);
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
function Zn(t) {
  const e = Object.keys(kt(t));
  return e.sort(), e[0] ? e.join(", ") : "[object has no keys]";
}
function Lt(t, e = 0) {
  return typeof t != "string" || e === 0 || t.length <= e
    ? t
    : `${t.slice(0, e)}...`;
}
function tr(t, e) {
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
function Se(t, e, n = !1) {
  return $(t)
    ? pe(e)
      ? e.test(t)
      : $(e)
      ? n
        ? t === e
        : t.includes(e)
      : !1
    : !1;
}
function er(t, e = [], n = !1) {
  return e.some((r) => Se(t, r, n));
}
function ye() {
  const t = _;
  return t.crypto || t.msCrypto;
}
let J;
function Ee() {
  return Math.random() * 16;
}
function C(t = ye()) {
  try {
    if (t != null && t.randomUUID) return t.randomUUID().replace(/-/g, "");
  } catch {}
  return (
    J || (J = "10000000100040008000" + 1e11),
    J.replace(/[018]/g, (e) => (e ^ ((Ee() & 15) >> (e / 4))).toString(16))
  );
}
function Ft(t) {
  var e, n;
  return (n = (e = t.exception) == null ? void 0 : e.values) == null
    ? void 0
    : n[0];
}
function nr(t) {
  const { message: e, event_id: n } = t;
  if (e) return e;
  const r = Ft(t);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || "<unknown>"
    : n || "<unknown>";
}
function rr(t, e, n) {
  const r = (t.exception = t.exception || {}),
    s = (r.values = r.values || []),
    i = (s[0] = s[0] || {});
  i.value || (i.value = e || ""), i.type || (i.type = "Error");
}
function be(t, e) {
  const n = Ft(t);
  if (!n) return;
  const r = { type: "generic", handled: !0 },
    s = n.mechanism;
  if (((n.mechanism = { ...r, ...s, ...e }), e && "data" in e)) {
    const i = { ...(s == null ? void 0 : s.data), ...e.data };
    n.mechanism.data = i;
  }
}
function sr(t) {
  if (Te(t)) return !0;
  try {
    A(t, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function Te(t) {
  try {
    return t.__sentry_captured__;
  } catch {}
}
const $t = 1e3;
function ut() {
  return Date.now() / $t;
}
function Ie() {
  const { performance: t } = _;
  if (!(t != null && t.now) || !t.timeOrigin) return ut;
  const e = t.timeOrigin;
  return () => (e + t.now()) / $t;
}
let ht;
function ft() {
  return (ht ?? (ht = Ie()))();
}
let q;
function Ce() {
  var f;
  const { performance: t } = _;
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
function ir() {
  return q || (q = Ce()), q[0];
}
function Ae(t) {
  const e = ft(),
    n = {
      sid: C(),
      init: !0,
      timestamp: e,
      started: e,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => xe(n),
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
    (t.timestamp = e.timestamp || ft()),
    e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
    e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
    e.sid && (t.sid = e.sid.length === 32 ? e.sid : C()),
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
function Ne(t, e) {
  let n = {};
  t.status === "ok" && (n = { status: "exited" }), v(t, n);
}
function xe(t) {
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
function M() {
  return C();
}
function G() {
  return C().substring(16);
}
const Z = "_sentrySpan";
function mt(t, e) {
  e ? A(t, Z, e) : delete t[Z];
}
function tt(t) {
  return t[Z];
}
const Re = 100;
class E {
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
      (this._propagationContext = { traceId: M(), sampleRand: Math.random() });
  }
  clone() {
    const e = new E();
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
      mt(e, tt(this)),
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
      r = n instanceof E ? n.getScopeData() : Pt(n) ? e : void 0,
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
      this.setPropagationContext({ traceId: M(), sampleRand: Math.random() }),
      this._notifyScopeListeners(),
      this
    );
  }
  addBreadcrumb(e, n) {
    var i;
    const r = typeof n == "number" ? n : Re;
    if (r <= 0) return this;
    const s = {
      timestamp: ut(),
      ...e,
      message: e.message ? Lt(e.message, 2048) : e.message,
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
      span: tt(this),
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
    const r = (n == null ? void 0 : n.event_id) || C();
    if (!this._client)
      return (
        y &&
          m.warn("No client configured on scope - will not capture exception!"),
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
    const s = (r == null ? void 0 : r.event_id) || C();
    if (!this._client)
      return (
        y &&
          m.warn("No client configured on scope - will not capture message!"),
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
    const r = (n == null ? void 0 : n.event_id) || C();
    return this._client
      ? (this._client.captureEvent(e, { ...n, event_id: r }, this), r)
      : (y && m.warn("No client configured on scope - will not capture event!"),
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
function Oe() {
  return j("defaultCurrentScope", () => new E());
}
function De() {
  return j("defaultIsolationScope", () => new E());
}
class Me {
  constructor(e, n) {
    let r;
    e ? (r = e) : (r = new E());
    let s;
    n ? (s = n) : (s = new E()),
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
    return U(r)
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
function x() {
  const t = w(),
    e = st(t);
  return (e.stack = e.stack || new Me(Oe(), De()));
}
function Pe(t) {
  return x().withScope(t);
}
function we(t, e) {
  const n = x();
  return n.withScope(() => ((n.getStackTop().scope = t), e(t)));
}
function St(t) {
  return x().withScope(() => t(x().getIsolationScope()));
}
function ke() {
  return {
    withIsolationScope: St,
    withScope: Pe,
    withSetScope: we,
    withSetIsolationScope: (t, e) => St(e),
    getCurrentScope: () => x().getScope(),
    getIsolationScope: () => x().getIsolationScope(),
  };
}
function H(t) {
  const e = st(t);
  return e.acs ? e.acs : ke();
}
function O() {
  const t = w();
  return H(t).getCurrentScope();
}
function z() {
  const t = w();
  return H(t).getIsolationScope();
}
function Le() {
  return j("globalScope", () => new E());
}
function or(...t) {
  const e = w(),
    n = H(e);
  if (t.length === 2) {
    const [r, s] = t;
    return r ? n.withSetScope(r, s) : n.withScope(s);
  }
  return n.withScope(t[0]);
}
function Y() {
  return O().getClient();
}
function ar(t) {
  const e = t.getPropagationContext(),
    { traceId: n, parentSpanId: r, propagationSpanId: s } = e,
    i = { trace_id: n, span_id: s || G() };
  return r && (i.parent_span_id = r), i;
}
const Fe = "sentry.source",
  $e = "sentry.sample_rate",
  je = "sentry.previous_trace_sample_rate",
  Ue = "sentry.op",
  ve = "sentry.origin",
  cr = "sentry.idle_span_finish_reason",
  ur = "sentry.measurement_unit",
  fr = "sentry.measurement_value",
  dr = "sentry.custom_span_name",
  pr = "sentry.profile_id",
  lr = "sentry.exclusive_time",
  _r = "sentry.link.type",
  Be = 0,
  jt = 1,
  h = 2;
function Ge(t) {
  if (t < 400 && t >= 100) return { code: jt };
  if (t >= 400 && t < 500)
    switch (t) {
      case 401:
        return { code: h, message: "unauthenticated" };
      case 403:
        return { code: h, message: "permission_denied" };
      case 404:
        return { code: h, message: "not_found" };
      case 409:
        return { code: h, message: "already_exists" };
      case 413:
        return { code: h, message: "failed_precondition" };
      case 429:
        return { code: h, message: "resource_exhausted" };
      case 499:
        return { code: h, message: "cancelled" };
      default:
        return { code: h, message: "invalid_argument" };
    }
  if (t >= 500 && t < 600)
    switch (t) {
      case 501:
        return { code: h, message: "unimplemented" };
      case 503:
        return { code: h, message: "unavailable" };
      case 504:
        return { code: h, message: "deadline_exceeded" };
      default:
        return { code: h, message: "internal_error" };
    }
  return { code: h, message: "internal_error" };
}
function gr(t, e) {
  t.setAttribute("http.response.status_code", e);
  const n = Ge(e);
  n.message !== "unknown_error" && t.setStatus(n);
}
const Ut = "_sentryScope",
  vt = "_sentryIsolationScope";
function He(t) {
  try {
    const e = _.WeakRef;
    if (typeof e == "function") return new e(t);
  } catch {}
  return t;
}
function ze(t) {
  if (t) {
    if (typeof t == "object" && "deref" in t && typeof t.deref == "function")
      try {
        return t.deref();
      } catch {
        return;
      }
    return t;
  }
}
function hr(t, e, n) {
  t && (A(t, vt, He(n)), A(t, Ut, e));
}
function Bt(t) {
  const e = t;
  return { scope: e[Ut], isolationScope: ze(e[vt]) };
}
const Gt = "sentry-",
  Ye = /^sentry-/,
  Ke = 8192;
function Ht(t) {
  const e = Ve(t);
  if (!e) return;
  const n = Object.entries(e).reduce((r, [s, i]) => {
    if (s.match(Ye)) {
      const o = s.slice(Gt.length);
      r[o] = i;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function mr(t) {
  if (!t) return;
  const e = Object.entries(t).reduce(
    (n, [r, s]) => (s && (n[`${Gt}${r}`] = s), n),
    {}
  );
  return We(e);
}
function Ve(t) {
  if (!(!t || (!$(t) && !Array.isArray(t))))
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
    .map((e) => {
      const n = e.indexOf("=");
      if (n === -1) return [];
      const r = e.slice(0, n),
        s = e.slice(n + 1);
      return [r, s].map((i) => {
        try {
          return decodeURIComponent(i.trim());
        } catch {
          return;
        }
      });
    })
    .reduce((e, [n, r]) => (n && r && (e[n] = r), e), {});
}
function We(t) {
  if (Object.keys(t).length !== 0)
    return Object.entries(t).reduce((e, [n, r], s) => {
      const i = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
        o = s === 0 ? i : `${e},${i}`;
      return o.length > Ke
        ? (y &&
            m.warn(
              `Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`
            ),
          e)
        : o;
    }, "");
}
const Xe = /^o(\d+)\./,
  Je = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function qe(t) {
  return t === "http" || t === "https";
}
function Sr(t, e = !1) {
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
function Qe(t) {
  const e = Je.exec(t);
  if (!e) {
    it(() => {
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
  return zt({
    host: i,
    pass: s,
    path: a,
    projectId: u,
    port: o,
    protocol: n,
    publicKey: r,
  });
}
function zt(t) {
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
function Ze(t) {
  if (!y) return !0;
  const { port: e, projectId: n, protocol: r } = t;
  return ["protocol", "publicKey", "host", "projectId"].find((o) =>
    t[o] ? !1 : (m.error(`Invalid Sentry Dsn: ${o} missing`), !0)
  )
    ? !1
    : n.match(/^\d+$/)
    ? qe(r)
      ? e && isNaN(parseInt(e, 10))
        ? (m.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1)
        : !0
      : (m.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
    : (m.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function tn(t) {
  const e = t.match(Xe);
  return e == null ? void 0 : e[1];
}
function en(t) {
  const e = t.getOptions(),
    { host: n } = t.getDsn() || {};
  let r;
  return e.orgId ? (r = String(e.orgId)) : n && (r = tn(n)), r;
}
function yr(t) {
  const e = typeof t == "string" ? Qe(t) : zt(t);
  if (!(!e || !Ze(e))) return e;
}
function Et(t) {
  if (typeof t == "boolean") return Number(t);
  const e = typeof t == "string" ? parseFloat(t) : t;
  if (!(typeof e != "number" || isNaN(e) || e < 0 || e > 1)) return e;
}
const nn = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
);
function rn(t) {
  if (!t) return;
  const e = t.match(nn);
  if (!e) return;
  let n;
  return (
    e[3] === "1" ? (n = !0) : e[3] === "0" && (n = !1),
    { traceId: e[1], parentSampled: n, parentSpanId: e[2] }
  );
}
function Er(t, e) {
  const n = rn(t),
    r = Ht(e);
  if (!(n != null && n.traceId))
    return { traceId: M(), sampleRand: Math.random() };
  const s = an(n, r);
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
function sn(t = M(), e = G(), n) {
  let r = "";
  return n !== void 0 && (r = n ? "-1" : "-0"), `${t}-${e}${r}`;
}
function on(t = M(), e = G(), n) {
  return `00-${t}-${e}-${n ? "01" : "00"}`;
}
function an(t, e) {
  const n = Et(e == null ? void 0 : e.sample_rand);
  if (n !== void 0) return n;
  const r = Et(e == null ? void 0 : e.sample_rate);
  return r && (t == null ? void 0 : t.parentSampled) !== void 0
    ? t.parentSampled
      ? Math.random() * r
      : r + Math.random() * (1 - r)
    : Math.random();
}
const br = 0,
  Yt = 1;
let bt = !1;
function Tr(t) {
  const { spanId: e, traceId: n } = t.spanContext(),
    {
      data: r,
      op: s,
      parent_span_id: i,
      status: o,
      origin: c,
      links: a,
    } = K(t);
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
function cn(t) {
  const { spanId: e, traceId: n, isRemote: r } = t.spanContext(),
    s = r ? e : K(t).parent_span_id,
    i = Bt(t).scope,
    o = r
      ? (i == null ? void 0 : i.getPropagationContext().propagationSpanId) ||
        G()
      : e;
  return { parent_span_id: s, span_id: o, trace_id: n };
}
function Ir(t) {
  const { traceId: e, spanId: n } = t.spanContext(),
    r = V(t);
  return sn(e, n, r);
}
function Cr(t) {
  const { traceId: e, spanId: n } = t.spanContext(),
    r = V(t);
  return on(e, n, r);
}
function un(t) {
  if (t && t.length > 0)
    return t.map(
      ({
        context: { spanId: e, traceId: n, traceFlags: r, ...s },
        attributes: i,
      }) => ({
        span_id: e,
        trace_id: n,
        sampled: r === Yt,
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
    : ft();
}
function It(t) {
  return t > 9999999999 ? t / 1e3 : t;
}
function K(t) {
  var r;
  if (dn(t)) return t.getSpanJSON();
  const { spanId: e, traceId: n } = t.spanContext();
  if (fn(t)) {
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
      status: pn(a),
      op: s[Ue],
      origin: s[ve],
      links: un(u),
    };
  }
  return { span_id: e, trace_id: n, start_timestamp: 0, data: {} };
}
function fn(t) {
  const e = t;
  return (
    !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
  );
}
function dn(t) {
  return typeof t.getSpanJSON == "function";
}
function V(t) {
  const { traceFlags: e } = t.spanContext();
  return e === Yt;
}
function pn(t) {
  if (!(!t || t.code === Be))
    return t.code === jt ? "ok" : t.message || "internal_error";
}
const N = "_sentryChildSpans",
  et = "_sentryRootSpan";
function Ar(t, e) {
  const n = t[et] || t;
  A(e, et, n), t[N] ? t[N].add(e) : A(t, N, new Set([e]));
}
function Nr(t, e) {
  t[N] && t[N].delete(e);
}
function xr(t) {
  const e = new Set();
  function n(r) {
    if (!e.has(r) && V(r)) {
      e.add(r);
      const s = r[N] ? Array.from(r[N]) : [];
      for (const i of s) n(i);
    }
  }
  return n(t), Array.from(e);
}
function Kt(t) {
  return t[et] || t;
}
function Rr() {
  const t = w(),
    e = H(t);
  return e.getActiveSpan ? e.getActiveSpan() : tt(O());
}
function Or() {
  bt ||
    (it(() => {
      console.warn(
        "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
      );
    }),
    (bt = !0));
}
function ln(t) {
  var n;
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const e = t || ((n = Y()) == null ? void 0 : n.getOptions());
  return !!e && (e.tracesSampleRate != null || !!e.tracesSampler);
}
const Vt = "production",
  Wt = "_frozenDsc";
function Dr(t, e) {
  A(t, Wt, e);
}
function Xt(t, e) {
  const n = e.getOptions(),
    { publicKey: r } = e.getDsn() || {},
    s = {
      environment: n.environment || Vt,
      release: n.release,
      public_key: r,
      trace_id: t,
      org_id: en(e),
    };
  return e.emit("createDsc", s), s;
}
function Mr(t, e) {
  const n = e.getPropagationContext();
  return n.dsc || Xt(n.traceId, t);
}
function _n(t) {
  var g;
  const e = Y();
  if (!e) return {};
  const n = Kt(t),
    r = K(n),
    s = r.data,
    i = n.spanContext().traceState,
    o = (i == null ? void 0 : i.get("sentry.sample_rate")) ?? s[$e] ?? s[je];
  function c(W) {
    return (
      (typeof o == "number" || typeof o == "string") &&
        (W.sample_rate = `${o}`),
      W
    );
  }
  const a = n[Wt];
  if (a) return c(a);
  const u = i == null ? void 0 : i.get("sentry.dsc"),
    f = u && Ht(u);
  if (f) return c(f);
  const d = Xt(t.spanContext().traceId, e),
    l = s[Fe],
    p = r.description;
  return (
    l !== "url" && p && (d.transaction = p),
    ln() &&
      ((d.sampled = String(V(n))),
      (d.sample_rand =
        (i == null ? void 0 : i.get("sentry.sample_rand")) ??
        ((g = Bt(n).scope) == null
          ? void 0
          : g.getPropagationContext().sampleRand.toString()))),
    c(d),
    e.emit("createDsc", d, n),
    d
  );
}
function I(t, e = 100, n = 1 / 0) {
  try {
    return nt("", t, e, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function gn(t, e = 3, n = 100 * 1024) {
  const r = I(t, e);
  return yn(r) > n ? gn(t, e - 1, n) : r;
}
function nt(t, e, n = 1 / 0, r = 1 / 0, s = En()) {
  const [i, o] = s;
  if (
    e == null ||
    ["boolean", "string"].includes(typeof e) ||
    (typeof e == "number" && Number.isFinite(e))
  )
    return e;
  const c = hn(t, e);
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
      return nt("", p, a - 1, r, s);
    } catch {}
  const f = Array.isArray(e) ? [] : {};
  let d = 0;
  const l = kt(e);
  for (const p in l) {
    if (!Object.prototype.hasOwnProperty.call(l, p)) continue;
    if (d >= r) {
      f[p] = "[MaxProperties ~]";
      break;
    }
    const g = l[p];
    (f[p] = nt(p, g, a - 1, r, s)), d++;
  }
  return o(e), f;
}
function hn(t, e) {
  try {
    if (t === "domain" && e && typeof e == "object" && e._events)
      return "[Domain]";
    if (t === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && e === global) return "[Global]";
    if (typeof window < "u" && e === window) return "[Window]";
    if (typeof document < "u" && e === document) return "[Document]";
    if (wt(e)) return "[VueViewModel]";
    if (le(e)) return "[SyntheticEvent]";
    if (typeof e == "number" && !Number.isFinite(e)) return `[${e}]`;
    if (typeof e == "function") return `[Function: ${ae(e)}]`;
    if (typeof e == "symbol") return `[${String(e)}]`;
    if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
    const n = mn(e);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function mn(t) {
  const e = Object.getPrototypeOf(t);
  return e != null && e.constructor ? e.constructor.name : "null prototype";
}
function Sn(t) {
  return ~-encodeURI(t).split(/%..|./).length;
}
function yn(t) {
  return Sn(JSON.stringify(t));
}
function En() {
  const t = new WeakSet();
  function e(r) {
    return t.has(r) ? !0 : (t.add(r), !1);
  }
  function n(r) {
    t.delete(r);
  }
  return [e, n];
}
const Q = 0,
  Ct = 1,
  At = 2;
function bn(t) {
  return new P((e) => {
    e(t);
  });
}
function Tn(t) {
  return new P((e, n) => {
    n(t);
  });
}
class P {
  constructor(e) {
    (this._state = Q), (this._handlers = []), this._runExecutor(e);
  }
  then(e, n) {
    return new P((r, s) => {
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
    return new P((n, r) => {
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
    if (this._state === Q) return;
    const e = this._handlers.slice();
    (this._handlers = []),
      e.forEach((n) => {
        n[0] ||
          (this._state === Ct && n[1](this._value),
          this._state === At && n[2](this._value),
          (n[0] = !0));
      });
  }
  _runExecutor(e) {
    const n = (i, o) => {
        if (this._state === Q) {
          if (U(o)) {
            o.then(r, s);
            return;
          }
          (this._state = i), (this._value = o), this._executeHandlers();
        }
      },
      r = (i) => {
        n(Ct, i);
      },
      s = (i) => {
        n(At, i);
      };
    try {
      e(r, s);
    } catch (i) {
      s(i);
    }
  }
}
function In(t, e, n, r = 0) {
  try {
    const s = rt(e, n, t, r);
    return U(s) ? s : bn(s);
  } catch (s) {
    return Tn(s);
  }
}
function rt(t, e, n, r) {
  const s = n[r];
  if (!t || !s) return t;
  const i = s({ ...t }, e);
  return (
    y && i === null && m.log(`Event processor "${s.id || "?"}" dropped event`),
    U(i) ? i.then((o) => rt(o, e, n, r + 1)) : rt(i, e, n, r + 1)
  );
}
function Cn(t, e) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: s,
    sdkProcessingMetadata: i,
  } = e;
  An(t, e), r && Rn(t, r), On(t, n), Nn(t, s), xn(t, i);
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
    span: g,
  } = e;
  F(t, "extra", n),
    F(t, "tags", r),
    F(t, "user", s),
    F(t, "contexts", i),
    (t.sdkProcessingMetadata = B(t.sdkProcessingMetadata, c, 2)),
    o && (t.level = o),
    p && (t.transactionName = p),
    g && (t.span = g),
    a.length && (t.breadcrumbs = [...t.breadcrumbs, ...a]),
    u.length && (t.fingerprint = [...t.fingerprint, ...u]),
    f.length && (t.eventProcessors = [...t.eventProcessors, ...f]),
    d.length && (t.attachments = [...t.attachments, ...d]),
    (t.propagationContext = { ...t.propagationContext, ...l });
}
function F(t, e, n) {
  t[e] = B(t[e], n, 1);
}
function An(t, e) {
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
function Nn(t, e) {
  const n = [...(t.breadcrumbs || []), ...e];
  t.breadcrumbs = n.length ? n : void 0;
}
function xn(t, e) {
  t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, ...e };
}
function Rn(t, e) {
  (t.contexts = { trace: cn(e), ...t.contexts }),
    (t.sdkProcessingMetadata = {
      dynamicSamplingContext: _n(e),
      ...t.sdkProcessingMetadata,
    });
  const n = Kt(e),
    r = K(n).description;
  r && !t.transaction && t.type === "transaction" && (t.transaction = r);
}
function On(t, e) {
  (t.fingerprint = t.fingerprint
    ? Array.isArray(t.fingerprint)
      ? t.fingerprint
      : [t.fingerprint]
    : []),
    e && (t.fingerprint = t.fingerprint.concat(e)),
    t.fingerprint.length || delete t.fingerprint;
}
let b, xt, Rt, T;
function Dn(t) {
  const e = _._sentryDebugIds,
    n = _._debugIds;
  if (!e && !n) return {};
  const r = e ? Object.keys(e) : [],
    s = n ? Object.keys(n) : [];
  if (T && r.length === xt && s.length === Rt) return T;
  (xt = r.length), (Rt = s.length), (T = {}), b || (b = {});
  const i = (o, c) => {
    for (const a of o) {
      const u = c[a],
        f = b == null ? void 0 : b[a];
      if (f && T && u) (T[f[0]] = u), b && (b[a] = [f[0], u]);
      else if (u) {
        const d = t(a);
        for (let l = d.length - 1; l >= 0; l--) {
          const p = d[l],
            g = p == null ? void 0 : p.filename;
          if (g && T && b) {
            (T[g] = u), (b[a] = [g, u]);
            break;
          }
        }
      }
    }
  };
  return e && i(r, e), n && i(s, n), T;
}
function Pr(t, e, n, r, s, i) {
  const { normalizeDepth: o = 3, normalizeMaxBreadth: c = 1e3 } = t,
    a = {
      ...e,
      event_id: e.event_id || n.event_id || C(),
      timestamp: e.timestamp || ut(),
    },
    u = n.integrations || t.integrations.map((S) => S.name);
  Mn(a, t),
    kn(a, u),
    s && s.emit("applyFrameMetadata", e),
    e.type === void 0 && Pn(a, t.stackParser);
  const f = Fn(r, n.captureContext);
  n.mechanism && be(a, n.mechanism);
  const d = s ? s.getEventProcessors() : [],
    l = Le().getScopeData();
  if (i) {
    const S = i.getScopeData();
    Nt(l, S);
  }
  if (f) {
    const S = f.getScopeData();
    Nt(l, S);
  }
  const p = [...(n.attachments || []), ...l.attachments];
  p.length && (n.attachments = p), Cn(a, l);
  const g = [...d, ...l.eventProcessors];
  return In(g, a, n).then(
    (S) => (S && wn(S), typeof o == "number" && o > 0 ? Ln(S, o, c) : S)
  );
}
function Mn(t, e) {
  const { environment: n, release: r, dist: s, maxValueLength: i } = e;
  (t.environment = t.environment || n || Vt),
    !t.release && r && (t.release = r),
    !t.dist && s && (t.dist = s);
  const o = t.request;
  o != null && o.url && (o.url = i ? Lt(o.url, i) : o.url);
}
function Pn(t, e) {
  var r, s;
  const n = Dn(e);
  (s = (r = t.exception) == null ? void 0 : r.values) == null ||
    s.forEach((i) => {
      var o, c;
      (c = (o = i.stacktrace) == null ? void 0 : o.frames) == null ||
        c.forEach((a) => {
          a.filename && (a.debug_id = n[a.filename]);
        });
    });
}
function wn(t) {
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
function kn(t, e) {
  e.length > 0 &&
    ((t.sdk = t.sdk || {}),
    (t.sdk.integrations = [...(t.sdk.integrations || []), ...e]));
}
function Ln(t, e, n) {
  var s, i;
  if (!t) return null;
  const r = {
    ...t,
    ...(t.breadcrumbs && {
      breadcrumbs: t.breadcrumbs.map((o) => ({
        ...o,
        ...(o.data && { data: I(o.data, e, n) }),
      })),
    }),
    ...(t.user && { user: I(t.user, e, n) }),
    ...(t.contexts && { contexts: I(t.contexts, e, n) }),
    ...(t.extra && { extra: I(t.extra, e, n) }),
  };
  return (
    (s = t.contexts) != null &&
      s.trace &&
      r.contexts &&
      ((r.contexts.trace = t.contexts.trace),
      t.contexts.trace.data &&
        (r.contexts.trace.data = I(t.contexts.trace.data, e, n))),
    t.spans &&
      (r.spans = t.spans.map((o) => ({
        ...o,
        ...(o.data && { data: I(o.data, e, n) }),
      }))),
    (i = t.contexts) != null &&
      i.flags &&
      r.contexts &&
      (r.contexts.flags = I(t.contexts.flags, 3, n)),
    r
  );
}
function Fn(t, e) {
  if (!e) return t;
  const n = t ? t.clone() : new E();
  return n.update(e), n;
}
function $n(t) {
  if (t)
    return jn(t) ? { captureContext: t } : vn(t) ? { captureContext: t } : t;
}
function jn(t) {
  return t instanceof E || typeof t == "function";
}
const Un = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function vn(t) {
  return Object.keys(t).some((e) => Un.includes(e));
}
function wr(t, e) {
  return O().captureException(t, $n(e));
}
function kr(t, e) {
  return O().captureEvent(t, e);
}
function Lr(t, e) {
  z().setContext(t, e);
}
function Fr() {
  const t = Y();
  return (
    (t == null ? void 0 : t.getOptions().enabled) !== !1 &&
    !!(t != null && t.getTransport())
  );
}
function $r(t) {
  const e = z(),
    n = O(),
    { userAgent: r } = _.navigator || {},
    s = Ae({
      user: n.getUser() || e.getUser(),
      ...(r && { userAgent: r }),
      ...t,
    }),
    i = e.getSession();
  return (
    (i == null ? void 0 : i.status) === "ok" && v(i, { status: "exited" }),
    Jt(),
    e.setSession(s),
    s
  );
}
function Jt() {
  const t = z(),
    n = O().getSession() || t.getSession();
  n && Ne(n), qt(), t.setSession();
}
function qt() {
  const t = z(),
    e = Y(),
    n = t.getSession();
  n && e && e.captureSession(n);
}
function jr(t = !1) {
  if (t) {
    Jt();
    return;
  }
  qt();
}
export {
  ut as $,
  pr as A,
  Y as B,
  Bt as C,
  y as D,
  O as E,
  xr as F,
  _ as G,
  dr as H,
  Tr as I,
  U as J,
  ln as K,
  Et as L,
  or as M,
  w as N,
  H as O,
  tt as P,
  Dr as Q,
  z as R,
  h as S,
  br as T,
  Ar as U,
  hr as V,
  $e as W,
  cr as X,
  Nr as Y,
  j as Z,
  mt as _,
  Rr as a,
  yr as a0,
  C as a1,
  sr as a2,
  Vn as a3,
  v as a4,
  Vt as a5,
  Pr as a6,
  ar as a7,
  Mr as a8,
  Tn as a9,
  Xn as aA,
  me as aB,
  rr as aC,
  be as aD,
  wr as aE,
  zn as aF,
  Yn as aG,
  Kn as aH,
  fe as aI,
  gn as aJ,
  Zn as aK,
  ir as aL,
  ge as aM,
  Jn as aN,
  $ as aO,
  ie as aP,
  se as aQ,
  tr as aR,
  $r as aS,
  jr as aT,
  kr as aU,
  Gn as aV,
  je as aW,
  _r as aX,
  Er as aY,
  ue as aa,
  B as ab,
  Pt as ac,
  it as ad,
  bn as ae,
  D as af,
  Fr as ag,
  Ir as ah,
  mr as ai,
  nn as aj,
  Cr as ak,
  sn as al,
  on as am,
  Qn as an,
  nr as ao,
  er as ap,
  k as aq,
  Bn as ar,
  qn as as,
  dt as at,
  Hn as au,
  gr as av,
  Wn as aw,
  Gt as ax,
  ce as ay,
  A as az,
  Kt as b,
  M as c,
  m as d,
  G as e,
  st as f,
  ae as g,
  Sr as h,
  Se as i,
  _n as j,
  K as k,
  Or as l,
  V as m,
  I as n,
  ur as o,
  fr as p,
  Ue as q,
  ve as r,
  Lr as s,
  ft as t,
  Yt as u,
  Tt as v,
  Fe as w,
  un as x,
  pn as y,
  lr as z,
};

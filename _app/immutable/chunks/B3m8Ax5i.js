var b = (t) => {
  throw TypeError(t);
};
var w = (t, e, i) => e.has(t) || b("Cannot " + i);
var a = (t, e, i) => (
    w(t, e, "read from private field"), i ? i.call(t) : e.get(t)
  ),
  n = (t, e, i) =>
    e.has(t)
      ? b("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(t)
      : e.set(t, i);
import { l as s, g as o, o as r, m } from "./iK5FT0Sa.js";
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
      (t._sentryDebugIds[e] = "1a93429f-fa28-46f4-880b-703f42d023d7"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-1a93429f-fa28-46f4-880b-703f42d023d7"));
  })();
} catch {}
const L = "true",
  S = "https://backend.wplace.live/files",
  v = "0x4AAAAAABpHqZ-6i7uL0nmG",
  A = "https://backend.wplace.live",
  p = "theme";
var l, g, u, d, f, h, c;
class y {
  constructor() {
    n(this, l, s(!1));
    n(this, g, s(!1));
    n(this, u, s(m(I())));
    n(this, d, s(!1));
    n(this, f, s("custom-winter"));
    n(this, h, s(m(Date.now())));
    n(this, c, s(void 0));
    setInterval(() => {
      r(a(this, h), Date.now(), !0);
    }, 500),
      (this.theme = localStorage.getItem(p)),
      this.theme !== "dark" &&
        this.theme !== "custom-winter" &&
        (this.theme = "custom-winter");
  }
  get dropletsDialogOpen() {
    return o(a(this, l));
  }
  set dropletsDialogOpen(e) {
    r(a(this, l), e, !0);
  }
  get muted() {
    return o(a(this, g));
  }
  set muted(e) {
    r(a(this, g), e, !0);
  }
  get language() {
    return o(a(this, u));
  }
  set language(e) {
    r(a(this, u), e, !0);
  }
  get turnstatileLoaded() {
    return o(a(this, d));
  }
  set turnstatileLoaded(e) {
    r(a(this, d), e, !0);
  }
  get theme() {
    return o(a(this, f));
  }
  set theme(e) {
    r(a(this, f), e, !0),
      localStorage.setItem(p, e),
      document.documentElement.setAttribute("data-theme", e);
  }
  get now() {
    return o(a(this, h));
  }
  get captcha() {
    return E
      ? o(a(this, c))
      : { token: "turnstile-disabled", time: Date.now() };
  }
  set captcha(e) {
    r(a(this, c), e, !0);
  }
}
(l = new WeakMap()),
  (g = new WeakMap()),
  (u = new WeakMap()),
  (d = new WeakMap()),
  (f = new WeakMap()),
  (h = new WeakMap()),
  (c = new WeakMap());
const T = new y();
function I() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find((e) => e.length === 2);
    if (t) return t;
  }
  return (
    navigator.language ||
    navigator.userLanguage ||
    navigator.browserLanguage ||
    "en"
  ).substring(0, 2);
}
const E = L.toLowerCase() !== "false";
export { A as P, v as a, S as b, T as g, E as t };

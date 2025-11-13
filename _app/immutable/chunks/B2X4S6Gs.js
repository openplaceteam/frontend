import { g as n } from "./DQcFTXWv.js";
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
    e.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
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
      (e._sentryDebugIds[o] = "8844e698-91b4-49c3-ac47-b50d7c93592d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-8844e698-91b4-49c3-ac47-b50d7c93592d"));
  })();
} catch {}
const d = () => "Media total per mod",
  r = () => "Media total por mod",
  u = (e = {}, o = {}) => ((o.locale ?? n()) === "en" ? d() : r()),
  a = () => "Media ban per mod",
  i = () => "Media de banimento por mod",
  p = (e = {}, o = {}) => ((o.locale ?? n()) === "en" ? a() : i()),
  l = () => "Media ignored per mod",
  _ = () => "Media de ignorados por mod",
  f = (e = {}, o = {}) => ((o.locale ?? n()) === "en" ? l() : _()),
  c = () => "Media timeout per mod",
  s = () => "Media de timeout por mod",
  b = (e = {}, o = {}) => ((o.locale ?? n()) === "en" ? c() : s());
export { p as a, f as b, b as c, u as m };

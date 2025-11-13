import { g as t } from "./DQcFTXWv.js";
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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "0fa5cbe7-ce2b-408f-82df-a986cc38300c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-0fa5cbe7-ce2b-408f-82df-a986cc38300c"));
  })();
} catch {}
const o = () => "Translating...",
  r = () => "Traduzindo...",
  f = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? o() : r()),
  l = () => "Translate",
  s = () => "Traduzir",
  u = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? l() : s()),
  i = () => "Show original",
  c = () => "Mostrar original",
  g = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? i() : c());
export { u as a, g as s, f as t };

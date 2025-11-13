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
      (e._sentryDebugIds[n] = "f07c0664-c329-4a58-88e7-a897b73cfeef"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-f07c0664-c329-4a58-88e7-a897b73cfeef"));
  })();
} catch {}
const a = () => "No data.",
  l = () => "Sem dados.",
  c = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? a() : l()),
  d = () => "Apply",
  f = () => "Aplicar",
  s = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? d() : f());
export { s as a, c as n };

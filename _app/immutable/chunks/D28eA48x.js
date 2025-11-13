import { g as o } from "./DQcFTXWv.js";
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
      (e._sentryDebugIds[n] = "5f677cb3-9458-41e8-ba4a-77bd7c2b946c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-5f677cb3-9458-41e8-ba4a-77bd7c2b946c"));
  })();
} catch {}
const d = () => "Loading...",
  t = () => "Carregando...",
  f = (e = {}, n = {}) => ((n.locale ?? o()) === "en" ? d() : t());
export { f as l };

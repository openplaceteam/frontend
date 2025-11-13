import { g as d } from "./DQcFTXWv.js";
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
      (e._sentryDebugIds[n] = "b373e5df-4cb4-4179-a56e-c25c324e6df3"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-b373e5df-4cb4-4179-a56e-c25c324e6df3"));
  })();
} catch {}
const f = () => "Refresh",
  t = () => "Atualizar",
  l = (e = {}, n = {}) => ((n.locale ?? d()) === "en" ? f() : t());
export { l as r };

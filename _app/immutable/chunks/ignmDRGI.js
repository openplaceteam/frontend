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
      (e._sentryDebugIds[n] = "2e3de6d2-1990-41ed-86a9-34b0622219f1"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-2e3de6d2-1990-41ed-86a9-34b0622219f1"));
  })();
} catch {}
const o = () => "Open tickets",
  d = () => "Tickets abertos",
  f = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? o() : d());
export { f as o };

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
      (e._sentryDebugIds[n] = "ce69992f-e512-4b8b-884b-86324fc656cd"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-ce69992f-e512-4b8b-884b-86324fc656cd"));
  })();
} catch {}
const t = () => "Export CSV",
  d = () => "Exportar CSV",
  c = (e = {}, n = {}) => ((n.locale ?? o()) === "en" ? t() : d());
export { c as e };

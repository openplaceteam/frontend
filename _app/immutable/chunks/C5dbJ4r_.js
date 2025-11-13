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
      (e._sentryDebugIds[n] = "9291cab4-7a8e-4868-adbf-7d1b8f3e5ebf"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-9291cab4-7a8e-4868-adbf-7d1b8f3e5ebf"));
  })();
} catch {}
const r = () => "Error loading",
  d = () => "Erro ao carregar",
  f = (e = {}, n = {}) => ((n.locale ?? o()) === "en" ? r() : d());
export { f as e };

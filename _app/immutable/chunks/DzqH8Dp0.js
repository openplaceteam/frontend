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
      (e._sentryDebugIds[n] = "f956a0ab-8894-4772-8a67-1e972a94525f"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-f956a0ab-8894-4772-8a67-1e972a94525f"));
  })();
} catch {}
const a = () => "Go to map",
  t = () => "Ir para o mapa",
  l = (e = {}, n = {}) => ((n.locale ?? o()) === "en" ? a() : t());
export { l as g };

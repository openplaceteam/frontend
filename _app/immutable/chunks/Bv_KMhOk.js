import { g as a } from "./DQcFTXWv.js";
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
      (e._sentryDebugIds[n] = "afe1b431-0ad2-420b-a3c4-b6c25188face"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-afe1b431-0ad2-420b-a3c4-b6c25188face"));
  })();
} catch {}
const o = () => "Clear",
  t = () => "Limpar",
  l = (e = {}, n = {}) => ((n.locale ?? a()) === "en" ? o() : t());
export { l as c };

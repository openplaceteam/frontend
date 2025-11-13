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
      (e._sentryDebugIds[n] = "5a86289b-e6f5-4624-9be9-a0f58f8c053e"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-5a86289b-e6f5-4624-9be9-a0f58f8c053e"));
  })();
} catch {}
const o = () => "Add",
  t = () => "Adicionar",
  i = (e = {}, n = {}) => ((n.locale ?? d()) === "en" ? o() : t());
export { i as a };

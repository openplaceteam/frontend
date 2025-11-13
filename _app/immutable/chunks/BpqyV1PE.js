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
      (e._sentryDebugIds[n] = "07b258f6-1637-4bda-8a3d-ec9ad8244c08"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-07b258f6-1637-4bda-8a3d-ec9ad8244c08"));
  })();
} catch {}
const d = () => "Load more",
  a = () => "Carregar mais",
  r = (e = {}, n = {}) => ((n.locale ?? o()) === "en" ? d() : a());
export { r as l };

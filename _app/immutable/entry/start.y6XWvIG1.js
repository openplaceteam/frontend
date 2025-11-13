import { a as o } from "../chunks/E8vEVpET.js";
import { x as b } from "../chunks/BvzQyf_g.js";
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
      d = new e.Error().stack;
    d &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[d] = "e05554cb-18fe-4985-8db2-7f6b990b0569"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-e05554cb-18fe-4985-8db2-7f6b990b0569"));
  })();
} catch {}
export { b as load_css, o as start };

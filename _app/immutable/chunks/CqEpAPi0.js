import { ao as d } from "./iK5FT0Sa.js";
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
      f = new e.Error().stack;
    f &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[f] = "bc4c7f98-63a5-4158-a0ff-0a62692d08af"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-bc4c7f98-63a5-4158-a0ff-0a62692d08af"));
  })();
} catch {}
d();

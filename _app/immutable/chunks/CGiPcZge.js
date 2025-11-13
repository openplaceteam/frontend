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
      (e._sentryDebugIds[n] = "85dc38b1-a0f3-4fb1-b837-2e5c70eba942"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-85dc38b1-a0f3-4fb1-b837-2e5c70eba942"));
  })();
} catch {}
const t = () => "Role",
  d = () => "Cargo",
  r = (e = {}, n = {}) => ((n.locale ?? o()) === "en" ? t() : d());
export { r };

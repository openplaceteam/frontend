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
      (e._sentryDebugIds[d] = "de59cd8a-506f-43e6-a3d3-bc92e3ebaf74"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-de59cd8a-506f-43e6-a3d3-bc92e3ebaf74"));
  })();
} catch {}
const f = "5";
var n;
typeof window < "u" &&
  ((n = window.__svelte ?? (window.__svelte = {})).v ?? (n.v = new Set())).add(
    f
  );

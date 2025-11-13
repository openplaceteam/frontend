import "../chunks/ClL9a_Zs.js";
import "../chunks/CqEpAPi0.js";
import { f, b as i, d as a, r as o, n as r } from "../chunks/iK5FT0Sa.js";
import { L as s } from "../chunks/qHbcPXTE.js";
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
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "b4601e27-484d-4053-9cc8-a2c35f8d3131"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-b4601e27-484d-4053-9cc8-a2c35f8d3131"));
  })();
} catch {}
var l = f(
  '<div class="flex h-full flex-col items-center justify-center gap-6"><a href="/"><!></a> <p class="max-w-3xl text-center font-medium sm:text-xl">Not found</p> <a class="btn btn-primary btn-lg" href="/">Go to map</a></div>'
);
function g(e) {
  var t = l(),
    n = a(t),
    d = a(n);
  s(d, { size: "lg", hasText: !0 }), o(n), r(4), o(t), i(e, t);
}
export { g as component };

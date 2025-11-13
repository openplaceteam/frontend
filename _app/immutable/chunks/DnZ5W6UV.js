import { e as n, N as t, F as a, R as b, S as c } from "./iK5FT0Sa.js";
(function () {
  try {
    var f =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    f.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var f =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      i = new f.Error().stack;
    i &&
      ((f._sentryDebugIds = f._sentryDebugIds || {}),
      (f._sentryDebugIds[i] = "87249c32-a1b1-43c3-84bb-485be2695d75"),
      (f._sentryDebugIdIdentifier =
        "sentry-dbid-87249c32-a1b1-43c3-84bb-485be2695d75"));
  })();
} catch {}
function r(f, i) {
  return f === i || (f == null ? void 0 : f[c]) === i;
}
function g(f = {}, i, s, y) {
  return (
    n(() => {
      var e, d;
      return (
        t(() => {
          (e = d),
            (d = []),
            a(() => {
              f !== s(...d) &&
                (i(f, ...d), e && r(s(...e), f) && i(null, ...e));
            });
        }),
        () => {
          b(() => {
            d && r(s(...d), f) && i(null, ...d);
          });
        }
      );
    }),
    f
  );
}
export { g as b };

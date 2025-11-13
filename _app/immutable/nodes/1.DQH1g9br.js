import "../chunks/ClL9a_Zs.js";
import "../chunks/CqEpAPi0.js";
import {
  p as c,
  f as b,
  a as u,
  t as g,
  b as m,
  c as y,
  d,
  r as n,
  s as h,
} from "../chunks/iK5FT0Sa.js";
import { s as f } from "../chunks/BHnQYZx5.js";
import { i as _ } from "../chunks/AXHr-fF2.js";
import { p as i } from "../chunks/D_G6cexA.js";
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
      (e._sentryDebugIds[t] = "7a4ce87d-c5fa-40de-96a4-13c83b80de16"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-7a4ce87d-c5fa-40de-96a4-13c83b80de16"));
  })();
} catch {}
var w = b("<h1> </h1> <p> </p>", 1);
function R(e, t) {
  c(t, !1), _();
  var r = w(),
    a = u(r),
    p = d(a, !0);
  n(a);
  var o = h(a, 2),
    l = d(o, !0);
  n(o),
    g(() => {
      var s;
      f(p, i.status), f(l, (s = i.error) == null ? void 0 : s.message);
    }),
    m(e, r),
    y();
}
export { R as component };

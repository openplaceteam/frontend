import {
  T as y,
  j as b,
  au as u,
  h as n,
  W as g,
  a2 as p,
  aj as l,
  a0 as f,
  V as s,
  a1 as c,
} from "./iK5FT0Sa.js";
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
      (e._sentryDebugIds[t] = "8bbfe94a-7035-43d5-ad8e-5558ddd8b6ec"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-8bbfe94a-7035-43d5-ad8e-5558ddd8b6ec"));
  })();
} catch {}
function w(e, t) {
  let a = null,
    o = n;
  var i;
  if (n) {
    a = c;
    for (
      var d = g(document.head);
      d !== null && (d.nodeType !== p || d.data !== e);

    )
      d = l(d);
    if (d === null) f(!1);
    else {
      var r = l(d);
      d.remove(), s(r);
    }
  }
  n || (i = document.head.appendChild(y()));
  try {
    b(() => t(i), u);
  } finally {
    o && (f(!0), s(a));
  }
}
export { w as h };

import {
  t as b,
  h,
  i as u,
  an as g,
  ap as p,
  a1 as c,
  a2 as w,
  aj as v,
  aq as m,
  ar as E,
  as as y,
  V as T,
  at as D,
  W as i,
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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "83270889-9897-4efe-9ff1-b8c6d6829284"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-83270889-9897-4efe-9ff1-b8c6d6829284"));
  })();
} catch {}
function N(e, n, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  b(() => {
    var d = g;
    if (t === (t = n() ?? "")) {
      h && u();
      return;
    }
    if (
      (d.nodes_start !== null &&
        (p(d.nodes_start, d.nodes_end), (d.nodes_start = d.nodes_end = null)),
      t !== "")
    ) {
      if (h) {
        c.data;
        for (
          var a = u(), _ = a;
          a !== null && (a.nodeType !== w || a.data !== "");

        )
          (_ = a), (a = v(a));
        if (a === null) throw (m(), E);
        y(c, _), (l = T(a));
        return;
      }
      var s = t + "";
      r ? (s = `<svg>${s}</svg>`) : o && (s = `<math>${s}</math>`);
      var f = D(s);
      if (((r || o) && (f = i(f)), y(i(f), f.lastChild), r || o))
        for (; i(f); ) l.before(i(f));
      else l.before(f);
    }
  });
}
export { N as h };

import {
  A as p,
  C as g,
  D as l,
  F as y,
  G as _,
  H as c,
  g as u,
  I as h,
  J as w,
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
      (e._sentryDebugIds[n] = "72606fcc-f5a4-4427-9c3b-f14259fc0ab7"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-72606fcc-f5a4-4427-9c3b-f14259fc0ab7"));
  })();
} catch {}
function I(e = !1) {
  const n = p,
    f = n.l.u;
  if (!f) return;
  let a = () => h(n.s);
  if (e) {
    let s = 0,
      t = {};
    const b = w(() => {
      let r = !1;
      const i = n.s;
      for (const o in i) i[o] !== t[o] && ((t[o] = i[o]), (r = !0));
      return r && s++, s;
    });
    a = () => u(b);
  }
  f.b.length &&
    g(() => {
      d(n, a), c(f.b);
    }),
    l(() => {
      const s = y(() => f.m.map(_));
      return () => {
        for (const t of s) typeof t == "function" && t();
      };
    }),
    f.a.length &&
      l(() => {
        d(n, a), c(f.a);
      });
}
function d(e, n) {
  if (e.l.s) for (const f of e.l.s) u(f);
  n();
}
export { I as i };

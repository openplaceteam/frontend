import "../chunks/ClL9a_Zs.js";
import "../chunks/CqEpAPi0.js";
import {
  k as h,
  p as y,
  f as w,
  s as o,
  t as u,
  b as x,
  c as I,
  $ as T,
  d as a,
  r,
} from "../chunks/iK5FT0Sa.js";
import { s as m } from "../chunks/BHnQYZx5.js";
import { h as $ } from "../chunks/DDOVU0Bm.js";
import { i as E } from "../chunks/AXHr-fF2.js";
import { L as k } from "../chunks/qHbcPXTE.js";
import { R as D } from "../chunks/DIrPyiFz.js";
import { W as L } from "../chunks/CnpP4qa_.js";
import { g as R } from "../chunks/DQcFTXWv.js";
import { r as S } from "../chunks/C4amkYCn.js";
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
      (e._sentryDebugIds[t] = "4414f5f7-a6c0-49f2-846e-1d901fadddce"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-4414f5f7-a6c0-49f2-846e-1d901fadddce"));
  })();
} catch {}
const W = () => "No internet connection",
  z = () => "Sem conexão na internet",
  b = (e = {}, t = {}) => ((t.locale ?? R()) === "en" ? W() : z());
var N = w(
  '<div class="relative flex h-full flex-col items-center justify-center gap-2"><a href="/"><!></a> <!> <p class="text-lg"> </p> <button class="btn btn-lg mt-4"><!> </button></div>'
);
function K(e, t) {
  y(t, !1), E();
  var n = N();
  $("swcdds", (p) => {
    u(
      (c) => {
        T.title = `Wplace - ${c ?? ""}`;
      },
      [() => b()],
      void 0,
      void 0,
      !0
    );
  });
  var s = a(n),
    g = a(s);
  k(g, {
    class: "absolute left-1/2 top-10 -translate-x-1/2",
    size: "lg",
    hasText: !0,
  }),
    r(s);
  var l = o(s, 2);
  L(l, { class: "text-base-content/80 w-40" });
  var i = o(l, 2),
    _ = a(i, !0);
  r(i);
  var f = o(i, 2);
  f.__click = () => {
    location.reload();
  };
  var d = a(f);
  D(d, { class: "size-5" });
  var v = o(d);
  r(f),
    r(n),
    u(
      (p, c) => {
        m(_, p), m(v, ` ${c ?? ""}`);
      },
      [() => b(), () => S()]
    ),
    x(e, n),
    I();
}
h(["click"]);
export { K as component };

import "../chunks/ClL9a_Zs.js";
import { o as D } from "../chunks/Ba2x20r8.js";
import {
  p as S,
  f as z,
  t as g,
  b as x,
  c as C,
  $ as j,
  d as a,
  s as d,
  o as N,
  l as R,
  r as s,
  g as w,
  w as Y,
  a as A,
} from "../chunks/iK5FT0Sa.js";
import { s as f } from "../chunks/BHnQYZx5.js";
import { i as M } from "../chunks/6Mc7KQD2.js";
import { h as O } from "../chunks/D_F-xNOc.js";
import { h as V } from "../chunks/DDOVU0Bm.js";
import { p as $ } from "../chunks/D_G6cexA.js";
import { a as W, u as q } from "../chunks/BcevhAVP.js";
import { L as B } from "../chunks/qHbcPXTE.js";
import { C as F } from "../chunks/D-ki6Nha.js";
import { g as m } from "../chunks/DQcFTXWv.js";
import { g as G } from "../chunks/DzqH8Dp0.js";
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
      (e._sentryDebugIds[t] = "0cd53401-201b-4ce3-a067-cce5c9bb0e6b"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-0cd53401-201b-4ce3-a067-cce5c9bb0e6b"));
  })();
} catch {}
const H = () => "Payment succeeded",
  J = () => "Pagamento bem sucedido",
  k = (e = {}, t = {}) => ((t.locale ?? m()) === "en" ? H() : J()),
  K = (e) => `You purchased <b>${e.number_droplet} droplets</b>.`,
  Q = (e) => `Você comprou <b>${e.number_droplet} droplets</b>.`,
  U = (e, t = {}) => ((t.locale ?? m()) === "en" ? K(e) : Q(e)),
  X = () => "Thank you for your support!",
  Z = () => "Obrigado pelo seu apoio!",
  ee = (e = {}, t = {}) => ((t.locale ?? m()) === "en" ? X() : Z());
var te = z(
  '<div class="relative flex h-full flex-col items-center justify-center px-4"><div class="absolute top-8"><!></div> <div class="card border-base-content/10 w-full max-w-xl border shadow-sm"><div class="card-body gap-3"><!> <h2 class="text-4xl font-medium sm:text-5xl"> </h2> <p class="text-lg"><!> </p> <a class="btn btn-primary btn-lg mt-2 w-max" href="/"> </a></div></div></div>'
);
function _e(e, t) {
  S(t, !0);
  let n = R(null);
  D(async () => {
    N(n, $.url.searchParams.get("droplets"), !0);
    const r = $.url.searchParams.get("session_id");
    r && (await W.refreshPaymentSession(r)) && (await q.refresh());
  });
  var c = te();
  V("bj7zax", (r) => {
    g(
      (o) => {
        j.title = `openplace - ${o ?? ""}`;
      },
      [() => k()],
      void 0,
      void 0,
      !0
    );
  });
  var l = a(c),
    I = a(l);
  B(I, { size: "lg", hasText: !0 }), s(l);
  var _ = d(l, 2),
    b = a(_),
    h = a(b);
  F(h, { class: "size-16 text-emerald-500" });
  var i = d(h, 2),
    T = a(i);
  s(i);
  var u = d(i, 2),
    y = a(u);
  {
    var E = (r) => {
      var o = Y(),
        p = A(o);
      O(p, () => U({ number_droplet: Number(w(n)).toLocaleString() })), x(r, o);
    };
    M(y, (r) => {
      w(n) && r(E);
    });
  }
  var L = d(y);
  s(u);
  var v = d(u, 2),
    P = a(v, !0);
  s(v),
    s(b),
    s(_),
    s(c),
    g(
      (r, o, p) => {
        f(T, `${r ?? ""}!`), f(L, ` ${o ?? ""}`), f(P, p);
      },
      [() => k(), () => ee(), () => G()]
    ),
    x(e, c),
    C();
}
export { _e as component };

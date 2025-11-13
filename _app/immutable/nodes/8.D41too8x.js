import "../chunks/ClL9a_Zs.js";
import { o as G } from "../chunks/Ba2x20r8.js";
import {
  k as H,
  p as J,
  l as w,
  m as K,
  f as B,
  a as O,
  s as o,
  o as b,
  t as u,
  b as f,
  c as P,
  d as s,
  g as d,
  r as e,
  q as R,
} from "../chunks/iK5FT0Sa.js";
import { s as c } from "../chunks/BHnQYZx5.js";
import { i as U } from "../chunks/6Mc7KQD2.js";
import { e as Q } from "../chunks/DcUGKLlr.js";
import { a as j, t as V } from "../chunks/BcevhAVP.js";
(function () {
  try {
    var a =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    a.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var a =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      i = new a.Error().stack;
    i &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[i] = "10940bc0-0960-4078-8d85-3cc50154bdc2"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-10940bc0-0960-4078-8d85-3cc50154bdc2"));
  })();
} catch {}
var X = B('<div class="text-base-content/80 text-sm"> </div>'),
  Z = B("<tr><th> </th><td><!></td><td> </td><td> </td></tr>"),
  tt = B(
    '<div class="mt-2 flex justify-between"><h1 class="text-lg font-bold">Ban Waves</h1> <div class="flex items-center gap-4"><!> <button class="btn btn-sm">New</button></div></div> <div class="overflow-x-auto"><table class="table"><thead><tr><th></th><th>Executed by</th><th>Ban count</th><th>Executed at</th></tr></thead><tbody></tbody></table></div>',
    1
  );
function it(a, i) {
  J(i, !0);
  let m = w(void 0),
    W = w(K([])),
    y = w(!1);
  G(() => {
    D();
  });
  async function D() {
    const t = await j.getAdminBanWave();
    b(m, new Date(t.nextBanWaveAt), !0), b(W, t.banWaves, !0);
  }
  var E = tt(),
    p = O(E),
    I = o(s(p), 2),
    S = s(I);
  {
    var q = (t) => {
      var n = X(),
        h = s(n);
      e(n),
        u(
          (l) => c(h, `Next ban wave: ${l ?? ""}`),
          [() => d(m).toLocaleDateString(void 0, { dateStyle: "medium" })]
        ),
        f(t, n);
    };
    U(S, (t) => {
      d(m) && t(q);
    });
  }
  var A = o(S, 2);
  (A.__click = async () => {
    try {
      b(y, !0), await j.postAdminBanWave(), await D();
    } catch (t) {
      V.error(t.message);
    } finally {
      b(y, !1);
    }
  }),
    e(I),
    e(p);
  var k = o(p, 2),
    N = s(k),
    T = o(s(N));
  Q(
    T,
    23,
    () => d(W),
    (t) => t.id,
    (t, n, h) => {
      var l = Z(),
        _ = s(l),
        M = s(_, !0);
      e(_);
      var g = o(_),
        Y = s(g);
      {
        var $ = (r) => {
            var v = R("System");
            f(r, v);
          },
          z = (r) => {
            var v = R();
            u(() =>
              c(
                v,
                `${d(n).executedByName ?? "System" ?? ""} #${
                  d(n).executedByUserId ?? ""
                }`
              )
            ),
              f(r, v);
          };
        U(Y, (r) => {
          d(n).executedByUserId === 0 ? r($) : r(z, !1);
        });
      }
      e(g);
      var x = o(g),
        C = s(x, !0);
      e(x);
      var L = o(x),
        F = s(L, !0);
      e(L),
        e(l),
        u(
          (r) => {
            c(M, d(h) + 1), c(C, d(n).totalBans), c(F, r);
          },
          [
            () =>
              new Date(d(n).createdAt).toLocaleString(void 0, { hour12: !1 }),
          ]
        ),
        f(t, l);
    }
  ),
    e(T),
    e(N),
    e(k),
    u(() => (A.disabled = d(y))),
    f(a, E),
    P();
}
H(["click"]);
export { it as component };

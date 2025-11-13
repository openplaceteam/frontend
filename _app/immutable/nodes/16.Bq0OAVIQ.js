import "../chunks/ClL9a_Zs.js";
import { o as re } from "../chunks/Ba2x20r8.js";
import {
  k as oe,
  p as ie,
  D as le,
  g as t,
  l as b,
  u as F,
  o as r,
  f as _,
  b as l,
  c as se,
  t as y,
  $ as ce,
  n as ue,
  d as s,
  r as c,
  w as M,
  a as Y,
  s as N,
} from "../chunks/iK5FT0Sa.js";
import { s as w } from "../chunks/BHnQYZx5.js";
import { i as x } from "../chunks/6Mc7KQD2.js";
import { h as fe } from "../chunks/DDOVU0Bm.js";
import { g as U } from "../chunks/E8vEVpET.js";
import { p as P } from "../chunks/D_G6cexA.js";
import { c as de, a as S, t as ve } from "../chunks/BcevhAVP.js";
import { L as pe } from "../chunks/CgP_-eBe.js";
import { L as _e } from "../chunks/qHbcPXTE.js";
import { g as m } from "../chunks/DQcFTXWv.js";
import { g as me } from "../chunks/DzqH8Dp0.js";
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
      e = new a.Error().stack;
    e &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[e] = "e0d5c215-70e3-4f33-9999-1ef94ebb34ad"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-e0d5c215-70e3-4f33-9999-1ef94ebb34ad"));
  })();
} catch {}
const ge = () => "You have been banned from this alliance. You cannot join it.",
  be = () => "Você foi banido desta aliança. Você não pode entrar.",
  he = (a = {}, e = {}) => ((e.locale ?? m()) === "en" ? ge() : be()),
  ye = () => `You are already in an alliance.
Do you want to leave your current alliance to join?`,
  we = () => "Você já está em uma aliança. Deseja sair da sua aliança atual?",
  xe = (a = {}, e = {}) => ((e.locale ?? m()) === "en" ? ye() : we()),
  je = () => "Invalid invite. It might be expired.",
  Ie = () => "Convite inválido. Pode estar expirado.",
  De = (a = {}, e = {}) => ((e.locale ?? m()) === "en" ? je() : Ie()),
  Le = () => "Alliance invite",
  Ae = () => "Convite de aliança",
  Te = (a = {}, e = {}) => ((e.locale ?? m()) === "en" ? Le() : Ae()),
  ke = () => "Leave",
  Ee = () => "Sair",
  Ye = (a = {}, e = {}) => ((e.locale ?? m()) === "en" ? ke() : Ee()),
  Ne = () => "No",
  Pe = () => "Não",
  Se = (a = {}, e = {}) => ((e.locale ?? m()) === "en" ? Ne() : Pe());
var Ve = _(
    '<meta property="og:title" content="Join the alliance"/> <meta name="twitter:title" content="Join the allince"/> <meta name="robots" content="noindex"/>',
    1
  ),
  ze = _('<span class="loading loading-xl loading-spinner"></span>'),
  Ce = _(
    '<div class="flex items-center gap-2"><a class="btn w-32" href="/"> </a> <button class="btn btn-warning w-32"> </button></div>'
  ),
  Je = _('<a class="btn btn-primary btn-lg" href="/"> </a>'),
  Re = _(
    '<div class="flex justify-center"><a href="/"><!></a></div> <p class="my-6 max-w-2xl whitespace-pre-line text-center text-lg"> </p> <!>',
    1
  ),
  Fe = _(
    '<div class="mx-auto flex h-full w-max flex-col items-center justify-center px-4"><!></div>'
  );
function ea(a, e) {
  ie(e, !0);
  let i = b(!0),
    o = b(void 0),
    V = b(!1),
    u = b(""),
    j = b(!1);
  const z = F(() => P.url.searchParams.get("id") ?? ""),
    W = F(() => P.url.searchParams.get("new-user"));
  re(async () => {
    try {
      r(o, await S.joinAlliance(t(z)), !0);
    } catch (n) {
      console.error(n.message), r(u, n.message, !0);
    } finally {
      r(i, !1);
    }
  }),
    le(() => {
      t(o) === "success"
        ? t(W)
          ? U("/?new-user=1")
          : U("/?alliance=1")
        : t(o) === "not-logged-in"
        ? r(V, !0)
        : t(o) === "banned"
        ? r(u, he(), !0)
        : t(o) === "in-another-alliance"
        ? r(u, xe(), !0)
        : t(o) === "invalid-invite"
        ? r(u, De(), !0)
        : t(o) === "error" && r(u, de(), !0);
    });
  var I = Fe();
  fe("1rdz7hh", (n) => {
    var d = Ve();
    ue(4),
      y(
        (D) => {
          ce.title = `Wplace - ${D ?? ""}`;
        },
        [() => Te()],
        void 0,
        void 0,
        !0
      ),
      l(n, d);
  });
  var q = s(I);
  {
    var B = (n) => {
        var d = ze();
        l(n, d);
      },
      G = (n) => {
        var d = M(),
          D = Y(d);
        {
          var H = (v) => {
              pe(v, {
                get redirect() {
                  return P.url.pathname;
                },
              });
            },
            K = (v) => {
              var C = M(),
                O = Y(C);
              {
                var Q = (L) => {
                  var J = Re(),
                    A = Y(J),
                    R = s(A),
                    X = s(R);
                  _e(X, { size: "lg", hasText: !0 }), c(R), c(A);
                  var T = N(A, 2),
                    Z = s(T, !0);
                  c(T);
                  var $ = N(T, 2);
                  {
                    var ee = (p) => {
                        var f = Ce(),
                          g = s(f),
                          k = s(g, !0);
                        c(g);
                        var h = N(g, 2);
                        h.__click = async () => {
                          r(j, !0);
                          try {
                            await S.leaveAlliance(),
                              r(o, await S.joinAlliance(t(z)), !0);
                          } catch (E) {
                            ve.error(E.message);
                          } finally {
                            r(j, !1);
                          }
                        };
                        var te = s(h, !0);
                        c(h),
                          c(f),
                          y(
                            (E, ne) => {
                              w(k, E), (h.disabled = t(j)), w(te, ne);
                            },
                            [() => Se(), () => Ye()]
                          ),
                          l(p, f);
                      },
                      ae = (p) => {
                        var f = Je(),
                          g = s(f, !0);
                        c(f), y((k) => w(g, k), [() => me()]), l(p, f);
                      };
                    x($, (p) => {
                      t(o) === "in-another-alliance" ? p(ee) : p(ae, !1);
                    });
                  }
                  y(() => w(Z, t(u))), l(L, J);
                };
                x(
                  O,
                  (L) => {
                    t(u) && L(Q);
                  },
                  !0
                );
              }
              l(v, C);
            };
          x(
            D,
            (v) => {
              t(V) ? v(H) : v(K, !1);
            },
            !0
          );
        }
        l(n, d);
      };
    x(q, (n) => {
      t(i) ? n(B) : n(G, !1);
    });
  }
  c(I), l(a, I), se();
}
oe(["click"]);
export { ea as component };

import "../chunks/ClL9a_Zs.js";
import { o as H } from "../chunks/Ba2x20r8.js";
import {
  p as J,
  f as P,
  b as d,
  c as K,
  e as Q,
  g as p,
  l as V,
  o as A,
  $ as X,
  d as e,
  r as t,
  a as L,
  s as v,
  t as W,
  w as S,
} from "../chunks/iK5FT0Sa.js";
import { s as T } from "../chunks/BHnQYZx5.js";
import { i as E } from "../chunks/6Mc7KQD2.js";
import { h as F } from "../chunks/D_F-xNOc.js";
import { h as Z } from "../chunks/DDOVU0Bm.js";
import { g as aa } from "../chunks/E8vEVpET.js";
import { L as ea } from "../chunks/CgP_-eBe.js";
import { L as j } from "../chunks/qHbcPXTE.js";
import { g as I } from "../chunks/DQcFTXWv.js";
import { g as R } from "../chunks/DzqH8Dp0.js";
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
      o = new a.Error().stack;
    o &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[o] = "da4c8fb2-10f4-4e92-8006-c1cd86b10517"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-da4c8fb2-10f4-4e92-8006-c1cd86b10517"));
  })();
} catch {}
const ta = () =>
    "For security reasons, we are moving away from Twitch authentication. Please choose an alternative login method to migrate your account bellow:",
  oa = () =>
    "Por questões de segurança, estamos desativando o login via Twitch. Por favor selecione um método de login alternativo para migrar sua conta abaixo:",
  ra = (a = {}, o = {}) => ((o.locale ?? I()) === "en" ? ta() : oa()),
  na = (a) =>
    `The email ${a.email} already has a Wplace account. Please try to migrate to another account or delete the account before the migration.`,
  ia = (a) =>
    `O email (${a.email}) já está associado a uma conta Wplace. Por favor, tente migrar para outra conta ou delete a conta existente antes da migração.`,
  sa = (a, o = {}) => ((o.locale ?? I()) === "en" ? na(a) : ia(a)),
  ca = (a) =>
    `The Twitch account you tried to migrate has already been migrated to a Wplace account (${a.email}). Please log in normally using this email.`,
  la = (a) =>
    `A conta Twitch que você tentou migrar já foi migrada para uma conta Wplace (${a.email}). Por favor, faça login normalmente usando esse email.`,
  ma = (a, o = {}) => ((o.locale ?? I()) === "en" ? ca(a) : la(a)),
  ua = () =>
    "Migration not possible. Your current Twitch account is not associated with a Wplace account.",
  da = () =>
    "Migração não possível. Sua conta Twitch atual não está associada a uma conta Wplace.",
  fa = (a = {}, o = {}) => ((o.locale ?? I()) === "en" ? ua() : da());
var _a = P('<p class="mb-6 text-center"> </p> <!>', 1),
  ga = P(
    '<div class="flex flex-col items-center gap-6"><a href="/"><!></a> <p class="text-center text-lg"><!></p> <a class="btn btn-primary btn-lg" href="/"> </a></div>'
  ),
  pa = P(
    '<div class="flex flex-col items-center gap-6"><a href="/"><!></a> <p class="text-center text-lg"><!></p> <a class="btn btn-primary btn-lg" href="/"> </a></div>'
  ),
  va = P(
    '<div class="flex flex-col items-center gap-6"><a href="/"><!></a> <p class="text-center text-lg"> </p> <a class="btn btn-primary btn-lg" href="/"> </a></div>'
  ),
  ha = P(
    '<div class="mx-auto flex h-full max-w-xl flex-col items-center justify-center px-4"><!></div>'
  );
function za(a, o) {
  J(o, !0);
  let r = V(void 0);
  H(() => {
    if (!p(r)) {
      const s = new URLSearchParams(window.location.search),
        n = s.get("response");
      switch (n) {
        case "choose-account":
        case "new-account":
          A(r, { name: n }, !0);
          break;
        case "already-migrated":
        case "account-exists":
          const f = s.get("email");
          A(r, { name: n, email: f ?? "" }, !0);
          break;
        default:
          aa("/");
      }
    }
  });
  var $ = ha();
  Z("1i7v6zb", (s) => {
    Q(() => {
      X.title = "openplace - Twitch account migration";
    });
  });
  var Y = e($);
  {
    var N = (s) => {
        var n = _a(),
          f = L(n),
          k = e(f, !0);
        t(f);
        var z = v(f, 2);
        ea(z, { showTwitchMigration: !1 }),
          W((l) => T(k, l), [() => ra()]),
          d(s, n);
      },
      O = (s) => {
        var n = S(),
          f = L(n);
        {
          var k = (l) => {
              var c = ga(),
                w = e(c),
                D = e(w);
              j(D, { size: "lg", hasText: !0 }), t(w);
              var b = v(w, 2),
                m = e(b);
              F(m, () =>
                sa({ email: `<span class="font-medium">${p(r).email}</span>` })
              ),
                t(b);
              var i = v(b, 2),
                _ = e(i, !0);
              t(i), t(c), W((x) => T(_, x), [() => R()]), d(l, c);
            },
            z = (l) => {
              var c = S(),
                w = L(c);
              {
                var D = (m) => {
                    var i = pa(),
                      _ = e(i),
                      x = e(_);
                    j(x, { size: "lg", hasText: !0 }), t(_);
                    var g = v(_, 2),
                      u = e(g);
                    F(u, () =>
                      ma({
                        email: `<span class="font-medium">${p(r).email}</span>`,
                      })
                    ),
                      t(g);
                    var h = v(g, 2),
                      M = e(h, !0);
                    t(h), t(i), W((y) => T(M, y), [() => R()]), d(m, i);
                  },
                  b = (m) => {
                    var i = S(),
                      _ = L(i);
                    {
                      var x = (g) => {
                        var u = va(),
                          h = e(u),
                          M = e(h);
                        j(M, { size: "lg", hasText: !0 }), t(h);
                        var y = v(h, 2),
                          U = e(y, !0);
                        t(y);
                        var q = v(y, 2),
                          B = e(q, !0);
                        t(q),
                          t(u),
                          W(
                            (C, G) => {
                              T(U, C), T(B, G);
                            },
                            [() => fa(), () => R()]
                          ),
                          d(g, u);
                      };
                      E(
                        _,
                        (g) => {
                          var u;
                          ((u = p(r)) == null ? void 0 : u.name) ===
                            "new-account" && g(x);
                        },
                        !0
                      );
                    }
                    d(m, i);
                  };
                E(
                  w,
                  (m) => {
                    var i;
                    ((i = p(r)) == null ? void 0 : i.name) ===
                    "already-migrated"
                      ? m(D)
                      : m(b, !1);
                  },
                  !0
                );
              }
              d(l, c);
            };
          E(
            f,
            (l) => {
              var c;
              ((c = p(r)) == null ? void 0 : c.name) === "account-exists"
                ? l(k)
                : l(z, !1);
            },
            !0
          );
        }
        d(s, n);
      };
    E(Y, (s) => {
      var n;
      ((n = p(r)) == null ? void 0 : n.name) === "choose-account"
        ? s(N)
        : s(O, !1);
    });
  }
  t($), d(a, $), K();
}
export { za as component };

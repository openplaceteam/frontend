import "../chunks/ClL9a_Zs.js";
import {
  p as T,
  f as c,
  b as m,
  c as L,
  e as R,
  $ as S,
  d as t,
  n as W,
  r as s,
  s as y,
  t as $,
  g as i,
  u as j,
} from "../chunks/iK5FT0Sa.js";
import { s as q } from "../chunks/BHnQYZx5.js";
import { s as z } from "../chunks/Ba2x20r8.js";
import { k as B } from "../chunks/COcZhybn.js";
import { e as M, i as N } from "../chunks/DcUGKLlr.js";
import { h as P } from "../chunks/DDOVU0Bm.js";
import { c as U, s as Y, a as C } from "../chunks/Cw1VVyw7.js";
import { t as g } from "../chunks/D4MEaonn.js";
import { p as x } from "../chunks/D_G6cexA.js";
import { L as F } from "../chunks/qHbcPXTE.js";
import { f as _ } from "../chunks/DG5z7AC6.js";
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
      d = new e.Error().stack;
    d &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[d] = "d34d4ee4-7229-4072-95e2-e5c18fbe35c9"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d34d4ee4-7229-4072-95e2-e5c18fbe35c9"));
  })();
} catch {}
var G = c('<a data-sveltekit-prefetch=""> </a>'),
  H = c("<div><!></div>"),
  J = c(
    '<div class="bg-base-200 min-h-screen"><header class="bg-base-100 border-base-300 sticky top-0 z-20 border-b"><div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"><a class="flex items-center gap-2" href="/"><!> <span class="text-base-content/80 text-lg font-semibold">Admin</span></a></div> <nav class="mx-auto max-w-7xl px-4"><div class="tabs tabs-border flex items-center gap-2 overflow-auto"></div></nav></header> <main class="mx-auto max-w-7xl px-4 py-4"><!></main></div>'
  );
function de(e, d) {
  T(d, !0);
  const b = j(() => x.url.pathname),
    w = [
      { label: "Dashboard", href: "/admin/dashboard", key: "dashboard" },
      { label: "Mods", href: "/admin/mods/leaderboard", key: "mods" },
      { label: "Users", href: "/admin/users", key: "users" },
      { label: "Alliances", href: "/admin/alliances", key: "alliances" },
      { label: "Audit Logs", href: "/admin/logs", key: "audit-logs" },
      { label: "Ban waves", href: "/admin/ban-waves", key: "ban-waves" },
    ];
  function k(r) {
    return i(b) === r || i(b).startsWith(r + "/");
  }
  var n = J();
  P("1qg5d05", (r) => {
    R(() => {
      S.title = "Wplace - Admin";
    });
  });
  var l = t(n),
    f = t(l),
    p = t(f),
    A = t(p);
  F(A, { class: "h-7 w-auto" }), W(2), s(p), s(f);
  var u = y(f, 2),
    v = t(u);
  M(
    v,
    21,
    () => w,
    N,
    (r, a) => {
      var o = G(),
        E = t(o, !0);
      s(o),
        $(
          (I) => {
            Y(o, "href", i(a).href), C(o, 1, I), q(E, i(a).label);
          },
          [
            () =>
              U({ tab: !0, "font-semibold": !0, "tab-active": k(i(a).href) }),
          ]
        ),
        m(r, o);
    }
  ),
    s(v),
    s(u),
    s(l);
  var h = y(l, 2),
    D = t(h);
  B(
    D,
    () => x.url.pathname,
    (r) => {
      var a = H(),
        o = t(a);
      z(o, () => d.children),
        s(a),
        g(
          1,
          a,
          () => _,
          () => ({ duration: 120 })
        ),
        g(
          2,
          a,
          () => _,
          () => ({ duration: 80 })
        ),
        m(r, a);
    }
  ),
    s(h),
    s(n),
    m(e, n),
    L();
}
export { de as component };

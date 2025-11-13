import "../chunks/ClL9a_Zs.js";
import {
  p as E,
  f as b,
  b as f,
  c as I,
  e as D,
  d,
  $ as A,
  s as v,
  r as s,
  t as L,
  g as i,
  u as R,
} from "../chunks/iK5FT0Sa.js";
import { s as M } from "../chunks/BHnQYZx5.js";
import { s as S } from "../chunks/Ba2x20r8.js";
import { k as W } from "../chunks/COcZhybn.js";
import { e as $, i as j } from "../chunks/DcUGKLlr.js";
import { h as z } from "../chunks/DDOVU0Bm.js";
import { c as N, s as P, a as Y } from "../chunks/Cw1VVyw7.js";
import { t as h } from "../chunks/D4MEaonn.js";
import { p as x } from "../chunks/D_G6cexA.js";
import { f as y } from "../chunks/DG5z7AC6.js";
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
      o = new e.Error().stack;
    o &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[o] = "71328908-c052-4771-aaf7-b56be907238e"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-71328908-c052-4771-aaf7-b56be907238e"));
  })();
} catch {}
var q = b('<a data-sveltekit-prefetch=""> </a>'),
  B = b("<div><!></div>"),
  C = b(
    '<div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><header class="bg-base-100 border-base-300 sticky top-0 z-30 border-b"><div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"><a class="flex items-center gap-2" href="/admin/mods"><span class="text-base-content/80 text-lg font-semibold">Mods</span></a> <div></div></div> <nav class="mx-auto max-w-7xl px-4"><div class="tabs tabs-border flex items-center gap-2 overflow-auto"></div></nav></header> <main class="mx-auto max-w-7xl px-4 py-4"><!></main></div>'
  );
function ee(e, o) {
  E(o, !0);
  const m = R(() => x.url.pathname),
    g = [
      {
        label: "Leaderboard (Tickets)",
        href: "/admin/mods/leaderboard",
        key: "leaderboard",
      },
      {
        label: "Leaderboard (Reports)",
        href: "/admin/mods/leaderboard-reports",
        key: "leaderboard-reports",
      },
    ];
  function _(t) {
    return i(m) === t || i(m).startsWith(t + "/");
  }
  var n = C();
  z("1hh8w3l", (t) => {
    D(() => {
      A.title = "openplace - Admin - Mods";
    });
  });
  var l = d(n),
    p = v(d(l), 2),
    c = d(p);
  $(
    c,
    21,
    () => g,
    j,
    (t, a) => {
      var r = q(),
        k = d(r, !0);
      s(r),
        L(
          (T) => {
            P(r, "href", i(a).href), Y(r, 1, T), M(k, i(a).label);
          },
          [
            () =>
              N({ tab: !0, "font-semibold": !0, "tab-active": _(i(a).href) }),
          ]
        ),
        f(t, r);
    }
  ),
    s(c),
    s(p),
    s(l);
  var u = v(l, 2),
    w = d(u);
  W(
    w,
    () => x.url.pathname,
    (t) => {
      var a = B(),
        r = d(a);
      S(r, () => o.children),
        s(a),
        h(
          1,
          a,
          () => y,
          () => ({ duration: 120 })
        ),
        h(
          2,
          a,
          () => y,
          () => ({ duration: 80 })
        ),
        f(t, a);
    }
  ),
    s(u),
    s(n),
    f(e, n),
    I();
}
export { ee as component };

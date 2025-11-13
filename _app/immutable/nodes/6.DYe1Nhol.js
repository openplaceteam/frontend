import "../chunks/ClL9a_Zs.js";
import "../chunks/CqEpAPi0.js";
import { o as i } from "../chunks/Ba2x20r8.js";
import {
  p as f,
  f as l,
  t as b,
  b as c,
  c as p,
  e as m,
  s as u,
  d as s,
  $ as h,
  r as d,
} from "../chunks/iK5FT0Sa.js";
import { s as g } from "../chunks/BHnQYZx5.js";
import { h as y } from "../chunks/DDOVU0Bm.js";
import { i as _ } from "../chunks/AXHr-fF2.js";
import { g as w } from "../chunks/DQcFTXWv.js";
import { g as x } from "../chunks/E8vEVpET.js";
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
      (e._sentryDebugIds[o] = "e3439a1d-4bd9-4af1-8b9a-e5a20a3b39e3"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-e3439a1d-4bd9-4af1-8b9a-e5a20a3b39e3"));
  })();
} catch {}
const v = () => "Admin dashboard content",
  D = () => "Conteúdo do painel de administração",
  E = (e = {}, o = {}) => ((o.locale ?? w()) === "en" ? v() : D());
var I = l(
  '<section class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><h2 class="text-xl font-semibold">Dashboard</h2> <p class="text-base-content/80 mt-1"> </p></section>'
);
function M(e, o) {
  f(o, !1),
    i(() => {
      x("/admin/dashboard");
    }),
    _();
  var t = I();
  y("1jef3w8", (n) => {
    m(() => {
      h.title = "Wplace - Admin Dashboard";
    });
  });
  var a = u(s(t), 2),
    r = s(a, !0);
  d(a), d(t), b((n) => g(r, n), [() => E()]), c(e, t), p();
}
export { M as component };

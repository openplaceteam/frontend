import "../chunks/ClL9a_Zs.js";
import {
  p as P,
  f as b,
  b as f,
  c as E,
  e as T,
  d as a,
  s as y,
  $ as C,
  r as i,
  g,
  l as I,
  n as A,
  o as S,
  t as R,
} from "../chunks/iK5FT0Sa.js";
import { s as L } from "../chunks/BHnQYZx5.js";
import { i as W } from "../chunks/6Mc7KQD2.js";
import { e as z, i as D } from "../chunks/DcUGKLlr.js";
import { h as B } from "../chunks/DDOVU0Bm.js";
import { e as U, s as _ } from "../chunks/Cw1VVyw7.js";
import { L as M } from "../chunks/qHbcPXTE.js";
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
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "5ab660c9-f947-4067-8145-d69b153c8d38"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-5ab660c9-f947-4067-8145-d69b153c8d38"));
  })();
} catch {}
var H = b("<li><a> </a></li>"),
  j = b("<nav><h3>Sections</h3> <ul></ul></nav>"),
  G = b(
    `<div class="prose mx-auto p-4"><a class="flex justify-center" href="/"><!></a> <section><h2 class="text-center">Account Enforcement Policy</h2> <p class="text-center"><strong>Last update:</strong> October 1, 2025</p><p>Unimplemented</p></section></section></div>`,
  );
function J(e, r) {
  P(r, !0);
  let u = I([]);
  var h = G();
  B("bnihef", (o) => {
    T(() => {
      C.title = "openplace - Code of Conduct";
    });
  });
  var m = a(h),
    v = a(m);
  (M(v, { size: "lg", hasText: !0 }), i(m));
  var d = y(m, 4),
    w = y(a(d), 10);
  {
    var k = (o) => {
      var s = j(),
        l = y(a(s), 2);
      (z(
        l,
        21,
        () => g(u),
        D,
        (p, c) => {
          var t = H(),
            n = a(t),
            x = a(n, !0);
          (i(n),
            i(t),
            R(() => {
              (_(n, "href", `#${g(c).id}`), L(x, g(c).title));
            }),
            f(p, t));
        },
      ),
        i(l),
        i(s),
        f(o, s));
    };
    W(w, (o) => {
      g(u).length > 0 && o(k);
    });
  }
  (A(26),
    i(d),
    U(d, () => (o) => {
      var p;
      const s = o.querySelectorAll("section"),
        l = [];
      for (const c of s) {
        const t =
          (p = c.querySelector("h3, h4")) == null ? void 0 : p.textContent;
        if (t) {
          const n = t
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
          ((c.id = n), l.push({ title: t, id: n }));
        }
      }
      S(u, l);
    }),
    i(h),
    f(e, h),
    E());
}
export { J as component };

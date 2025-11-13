import { g as l } from "./DQcFTXWv.js";
import "./ClL9a_Zs.js";
import {
  p as R,
  g as s,
  u as k,
  o as q,
  D as C,
  f as y,
  t as x,
  b as v,
  c as j,
  l as N,
  s as b,
  d as o,
  bi as Y,
  r as i,
} from "./iK5FT0Sa.js";
import { s as h } from "./BHnQYZx5.js";
import { i as E } from "./6Mc7KQD2.js";
import { d as z, C as B } from "./Cw1VVyw7.js";
import { b as F } from "./yt7z1efG.js";
import { p as g, r as G } from "./ClBgBzqC.js";
(function () {
  try {
    var t =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "a7d5770a-0273-4d45-a526-170d27c6058f"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-a7d5770a-0273-4d45-a526-170d27c6058f"));
  })();
} catch {}
const H = () => "Select the reason",
  J = () => "Selecione o motivo",
  xe = (t = {}, e = {}) => ((e.locale ?? l()) === "en" ? H() : J()),
  K = () => "Other",
  P = () => "Outro motivo",
  ve = (t = {}, e = {}) => ((e.locale ?? l()) === "en" ? K() : P()),
  Q = () => "Extra context on what happened (required)",
  U = () => "Mais informações sobre o que aconteceu (obrigatório)",
  be = (t = {}, e = {}) => ((e.locale ?? l()) === "en" ? Q() : U()),
  V = () => "Required",
  W = () => "Obrigatório",
  X = (t = {}, e = {}) => ((e.locale ?? l()) === "en" ? V() : W()),
  Z = (t) => `Min. characters: ${t.min}`,
  $ = (t) => `Mínimo de caracteres: ${t.min}`,
  ee = (t, e = {}) => ((e.locale ?? l()) === "en" ? Z(t) : $(t)),
  te = (t) => `Max. characters: ${t.max}`,
  ae = (t) => `Máximo de caracteres: ${t.max}`,
  re = (t, e = {}) => ((e.locale ?? l()) === "en" ? te(t) : ae(t));
var ne = y('<legend class="fieldset-legend"> </legend>'),
  se = y('<span class="text-base-content/80"> </span>'),
  le = y(
    '<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>'
  );
function he(t, e) {
  R(e, !0);
  let r = g(e, "value", 15),
    I = g(e, "validate", 15),
    S = g(e, "disabled", 3, !1),
    T = G(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "label",
      "placeholder",
      "value",
      "max",
      "min",
      "validate",
      "disabled",
    ]),
    c = N("");
  const d = k(() => {
    var a;
    return ((a = r()) == null ? void 0 : a.length) ?? 0;
  });
  I(D);
  function D() {
    return e.min !== void 0 && s(d) < e.min
      ? (q(c, e.min === 1 ? X() : ee({ min: e.min }), !0), !1)
      : e.max !== void 0 && s(d) > e.max
      ? (q(c, re({ max: e.max }), !0), !1)
      : !0;
  }
  C(() => {
    var a;
    e.max !== void 0 &&
      s(d) > e.max &&
      r((a = r()) == null ? void 0 : a.substring(0, e.max));
  });
  var f = le(),
    w = o(f);
  {
    var L = (a) => {
      var n = ne(),
        _ = o(n, !0);
      i(n), x(() => h(_, e.label)), v(a, n);
    };
    E(w, (a) => {
      e.label && a(L);
    });
  }
  var u = b(w, 2);
  Y(u),
    z(u, () => ({
      ...T,
      class: `textarea w-full ${e.class ?? ""}`,
      placeholder: e.placeholder,
      disabled: S(),
      [B]: { "textarea-error": !!s(c) },
    }));
  var p = b(u, 2),
    m = o(p),
    M = o(m, !0);
  i(m);
  var A = b(m, 2);
  {
    var O = (a) => {
      var n = se(),
        _ = o(n, !0);
      i(n), x(() => h(_, e.max - s(d))), v(a, n);
    };
    E(A, (a) => {
      e.max !== void 0 && a(O);
    });
  }
  i(p), i(f), x(() => h(M, s(c))), F(u, r), v(t, f), j();
}
export { he as L, be as g, ve as o, xe as s };

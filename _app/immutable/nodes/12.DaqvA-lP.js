import "../chunks/ClL9a_Zs.js";
import { o as $e } from "../chunks/Ba2x20r8.js";
import {
  k as Me,
  p as Ee,
  l as p,
  m as T,
  D as je,
  g as a,
  o as v,
  f as M,
  s as o,
  d as t,
  t as $,
  v as Ae,
  b as x,
  c as Ue,
  e as ze,
  $ as Oe,
  r as e,
  w as wt,
  a as kt,
} from "../chunks/iK5FT0Sa.js";
import { s as d } from "../chunks/BHnQYZx5.js";
import { i as It } from "../chunks/6Mc7KQD2.js";
import { e as Be } from "../chunks/DcUGKLlr.js";
import { h as Ce } from "../chunks/DDOVU0Bm.js";
import { r as Yt, s as Ne, a as Pe } from "../chunks/Cw1VVyw7.js";
import { b as qt } from "../chunks/yt7z1efG.js";
import { g as Fe } from "../chunks/E8vEVpET.js";
import { a as Ve } from "../chunks/BcevhAVP.js";
import { P as Ke } from "../chunks/DUpX1e05.js";
import { R as We } from "../chunks/DIrPyiFz.js";
import { g as Ye } from "../chunks/DQcFTXWv.js";
import { l as qe } from "../chunks/D28eA48x.js";
import { a as Ge, n as He } from "../chunks/CtNRy5kr.js";
import { e as Je } from "../chunks/VeD2qHkI.js";
import { e as Qe } from "../chunks/C5dbJ4r_.js";
import { m as Xe, a as Ze, b as ta, c as ea } from "../chunks/B2X4S6Gs.js";
import { r as aa } from "../chunks/CGiPcZge.js";
(function () {
  try {
    var m =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    m.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var m =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      g = new m.Error().stack;
    g &&
      ((m._sentryDebugIds = m._sentryDebugIds || {}),
      (m._sentryDebugIds[g] = "d7e01933-8d97-4b04-ae9f-0e5697cdda64"),
      (m._sentryDebugIdIdentifier =
        "sentry-dbid-d7e01933-8d97-4b04-ae9f-0e5697cdda64"));
  })();
} catch {}
const ra = () => "Mod metrics",
  sa = () => "Métricas dos mods",
  oa = (m = {}, g = {}) => ((g.locale ?? Ye()) === "en" ? ra() : sa());
var na = M(
    '<tr><td colspan="9"><div class="text-base-content/80 flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div></td></tr>'
  ),
  da = M('<tr><td colspan="9" class="text-error"> </td></tr>'),
  ia = M('<tr><td colspan="9" class="text-base-content/70"> </td></tr>'),
  la = M(
    '<tr class="hover"><td><a class="link hover:text-primary"><div class="flex items-center gap-2"><!> </div></a></td><td> </td><td> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td></tr>'
  ),
  ca = M(
    '<section class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div class="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><h2 class="text-xl font-semibold">Leaderboard (Mods)</h2> <p class="text-base-content/80 mt-1"> </p></div> <form class="grid grid-cols-1 gap-2 sm:auto-cols-max sm:grid-flow-col sm:items-end"><label class="form-control"><span class="label-text text-sm">Início</span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <label class="form-control"><span class="label-text text-sm">Fim</span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <div class="flex gap-2"><button type="submit" class="btn btn-primary btn-sm"> </button> <button type="button" class="btn btn-outline btn-sm"> </button> <button type="button" class="btn btn-circle btn-sm" title="Atualizar"><!></button></div></form></div> <div class="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div></div> <div class="overflow-x-auto"><table class="table"><thead><tr><th><button class="btn btn-ghost btn-xs"> </button></th><th> </th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th></tr></thead><tbody><!></tbody></table></div></section>'
  );
function Ma(m, g) {
  Ee(g, !0);
  let h = p(!1),
    E = p(null),
    y = p(T([]));
  T({});
  function Rt(r) {
    return r.toISOString().slice(0, 16);
  }
  const Dt = new Date(),
    Gt = new Date(Dt.getTime() - 10080 * 60 * 1e3);
  let j = p(T(Rt(Gt))),
    A = p(T(Rt(Dt)));
  function U(r) {
    const i = new Date(r);
    return isNaN(i.getTime()) ? null : i.toISOString();
  }
  let f = p("total"),
    _ = p("desc");
  function w(r) {
    a(f) === r
      ? v(_, a(_) === "asc" ? "desc" : "asc", !0)
      : (v(f, r, !0), v(_, r === "mod" ? "asc" : "desc", !0));
  }
  function St(r) {
    const i = [...r];
    return (
      i.sort((l, c) => {
        let s, n;
        switch (a(f)) {
          case "mod":
            return (
              (s = l.user.id.toString()),
              (n = c.user.id.toString()),
              a(_) === "asc"
                ? s < n
                  ? -1
                  : s > n
                  ? 1
                  : 0
                : s > n
                ? -1
                : s < n
                ? 1
                : 0
            );
          case "total":
            (s = l.total), (n = c.total);
            break;
          case "ban":
            (s = l.ban), (n = c.ban);
            break;
          case "ignored":
            (s = l.ignored), (n = c.ignored);
            break;
          case "timeout":
            (s = l.timeout), (n = c.timeout);
            break;
          case "suspensionRate":
            (s = l.suspensionRate), (n = c.suspensionRate);
            break;
          default:
            (s = 0), (n = 0);
        }
        return a(_) === "asc" ? s - n : n - s;
      }),
      i
    );
  }
  function Ht(r, i = 1) {
    return `${(r * 100).toFixed(i)}%`;
  }
  async function N() {
    try {
      v(h, !0), v(E, null);
      const r = U(a(j)),
        i = U(a(A));
      if (!r || !i) throw new Error("Datas inválidas");
      const l = await Ve.getClosedTicketsByMod(r, i);
      v(y, l ?? [], !0);
    } catch (r) {
      r.status === 403 || r.status === 401
        ? Fe("/404")
        : v(E, (r == null ? void 0 : r.message) ?? Qe(), !0),
        v(y, [], !0);
    } finally {
      v(h, !1);
    }
  }
  $e(N);
  function Jt(r) {
    r.preventDefault(), N();
  }
  let k = p(T({ total: 0, ban: 0, ignored: 0, timeout: 0 }));
  je(() => {
    const r = a(y);
    if (!r || r.length === 0) {
      v(k, { total: 0, ban: 0, ignored: 0, timeout: 0 }, !0);
      return;
    }
    const i = r.length,
      l = r.reduce(
        (s, n) => (
          (s.total += n.total),
          (s.ban += n.ban),
          (s.ignored += n.ignored),
          (s.timeout += n.timeout),
          s
        ),
        { total: 0, ban: 0, ignored: 0, timeout: 0 }
      ),
      c = (s) => Math.round(s * 100) / 100;
    v(
      k,
      {
        total: c(l.total / i),
        ban: c(l.ban / i),
        ignored: c(l.ignored / i),
        timeout: c(l.timeout / i),
      },
      !0
    );
  });
  function Qt(r, i) {
    const l = [
        "assigned_mod_id",
        "name",
        "alliance_id",
        "role",
        "total",
        "ban",
        "ignored",
        "timeout",
      ].join(","),
      c = r.map((s) =>
        [
          s.user.id,
          s.user.name,
          s.user.allianceId,
          s.user.role,
          s.total,
          s.ban,
          s.ignored,
          s.timeout,
        ].join(",")
      );
    return [l, ...c].join(`
`);
  }
  function Xt() {
    const r = St(a(y)),
      i = Qt(r),
      l = new Blob([i], { type: "text/csv;charset=utf-8;" }),
      c = URL.createObjectURL(l),
      s = document.createElement("a"),
      n = U(a(j)) ?? "start",
      b = U(a(A)) ?? "end";
    (s.href = c),
      (s.download = `mods_leaderboard_${n}_${b}.csv`),
      s.click(),
      URL.revokeObjectURL(c);
  }
  var P = ca();
  Ce("ote4uu", (r) => {
    ze(() => {
      Oe.title = "Wplace - Admin - Mods - Leaderboard";
    });
  });
  var F = t(P),
    V = t(F),
    Lt = o(t(V), 2),
    Zt = t(Lt, !0);
  e(Lt), e(V);
  var K = o(V, 2),
    W = t(K),
    Tt = o(t(W), 2);
  Yt(Tt), e(W);
  var Y = o(W, 2),
    $t = o(t(Y), 2);
  Yt($t), e(Y);
  var Mt = o(Y, 2),
    z = t(Mt),
    te = t(z, !0);
  e(z);
  var S = o(z, 2);
  S.__click = Xt;
  var ee = t(S, !0);
  e(S);
  var O = o(S, 2);
  O.__click = N;
  var ae = t(O);
  We(ae, { class: "size-4" }), e(O), e(Mt), e(K), e(F);
  var q = o(F, 2),
    G = t(q),
    H = t(G),
    re = t(H, !0);
  e(H);
  var Et = o(H, 2),
    se = t(Et, !0);
  e(Et), e(G);
  var J = o(G, 2),
    Q = t(J),
    oe = t(Q, !0);
  e(Q);
  var jt = o(Q, 2),
    ne = t(jt, !0);
  e(jt), e(J);
  var X = o(J, 2),
    Z = t(X),
    de = t(Z, !0);
  e(Z);
  var At = o(Z, 2),
    ie = t(At, !0);
  e(At), e(X);
  var Ut = o(X, 2),
    tt = t(Ut),
    le = t(tt, !0);
  e(tt);
  var zt = o(tt, 2),
    ce = t(zt, !0);
  e(zt), e(Ut), e(q);
  var Ot = o(q, 2),
    Bt = t(Ot),
    et = t(Bt),
    Ct = t(et),
    at = t(Ct),
    rt = t(at);
  rt.__click = () => w("mod");
  var ue = t(rt);
  e(rt), e(at);
  var st = o(at),
    ve = t(st, !0);
  e(st);
  var ot = o(st),
    nt = t(ot);
  nt.__click = () => w("suspensionRate");
  var be = t(nt);
  e(nt), e(ot);
  var dt = o(ot),
    it = t(dt);
  it.__click = () => w("ignored");
  var me = t(it);
  e(it), e(dt);
  var lt = o(dt),
    ct = t(lt);
  ct.__click = () => w("timeout");
  var _e = t(ct);
  e(ct), e(lt);
  var ut = o(lt),
    vt = t(ut);
  vt.__click = () => w("ban");
  var fe = t(vt);
  e(vt), e(ut);
  var Nt = o(ut),
    bt = t(Nt);
  bt.__click = () => w("total");
  var pe = t(bt);
  e(bt), e(Nt), e(Ct), e(et);
  var Pt = o(et),
    xe = t(Pt);
  {
    var ge = (r) => {
        var i = na(),
          l = t(i),
          c = t(l),
          s = o(t(c), 2),
          n = t(s, !0);
        e(s), e(c), e(l), e(i), $((b) => d(n, b), [() => qe()]), x(r, i);
      },
      he = (r) => {
        var i = wt(),
          l = kt(i);
        {
          var c = (n) => {
              var b = da(),
                I = t(b),
                mt = t(I, !0);
              e(I), e(b), $(() => d(mt, a(E))), x(n, b);
            },
            s = (n) => {
              var b = wt(),
                I = kt(b);
              {
                var mt = (R) => {
                    var D = ia(),
                      B = t(D),
                      L = t(B, !0);
                    e(B), e(D), $((u) => d(L, u), [() => He()]), x(R, D);
                  },
                  ye = (R) => {
                    var D = wt(),
                      B = kt(D);
                    Be(
                      B,
                      17,
                      () => St(a(y)),
                      (L) => L.user.id,
                      (L, u) => {
                        var _t = la(),
                          ft = t(_t),
                          pt = t(ft),
                          Ft = t(pt),
                          Vt = t(Ft);
                        Ke(Vt, {
                          class: "size-8 border sm:size-10",
                          get userId() {
                            return a(u).user.id;
                          },
                          get pictureUrl() {
                            return a(u).user.picture;
                          },
                        });
                        var we = o(Vt);
                        e(Ft), e(pt), e(ft);
                        var xt = o(ft),
                          ke = t(xt, !0);
                        e(xt);
                        var C = o(xt);
                        let Kt;
                        var Ie = t(C, !0);
                        e(C);
                        var gt = o(C),
                          Re = t(gt, !0);
                        e(gt);
                        var ht = o(gt),
                          De = t(ht, !0);
                        e(ht);
                        var yt = o(ht),
                          Se = t(yt, !0);
                        e(yt);
                        var Wt = o(yt),
                          Le = t(Wt, !0);
                        e(Wt),
                          e(_t),
                          $(
                            (Te) => {
                              Ne(
                                pt,
                                "href",
                                `/admin/users?id=${a(u).user.id ?? ""}`
                              ),
                                d(
                                  we,
                                  ` ${a(u).user.name ?? ""} #${
                                    a(u).user.id ?? ""
                                  }`
                                ),
                                d(ke, a(u).user.role),
                                (Kt = Pe(C, 1, "text-error", null, Kt, {
                                  "text-error":
                                    a(u).suspensionRate > 0.7 &&
                                    a(u).total > 50,
                                })),
                                d(Ie, Te),
                                d(Re, a(u).ignored),
                                d(De, a(u).timeout),
                                d(Se, a(u).ban),
                                d(Le, a(u).total);
                            },
                            [() => Ht(a(u).suspensionRate, 1)]
                          ),
                          x(L, _t);
                      }
                    ),
                      x(R, D);
                  };
                It(
                  I,
                  (R) => {
                    a(y).length === 0 ? R(mt) : R(ye, !1);
                  },
                  !0
                );
              }
              x(n, b);
            };
          It(
            l,
            (n) => {
              a(E) ? n(c) : n(s, !1);
            },
            !0
          );
        }
        x(r, i);
      };
    It(xe, (r) => {
      a(h) ? r(ge) : r(he, !1);
    });
  }
  e(Pt),
    e(Bt),
    e(Ot),
    e(P),
    $(
      (r, i, l, c, s, n, b, I) => {
        d(Zt, r),
          (z.disabled = a(h)),
          d(te, i),
          (S.disabled = a(h) || a(y).length === 0),
          d(ee, l),
          (O.disabled = a(h)),
          d(re, c),
          d(se, a(k).total),
          d(oe, s),
          d(ne, a(k).ban),
          d(de, n),
          d(ie, a(k).ignored),
          d(le, b),
          d(ce, a(k).timeout),
          d(ue, `Mod ${a(f) === "mod" ? (a(_) === "asc" ? "▲" : "▼") : ""}`),
          d(ve, I),
          d(
            be,
            `Suspension rate ${
              a(f) === "suspensionRate" ? (a(_) === "asc" ? "▲" : "▼") : ""
            }`
          ),
          d(
            me,
            `Ignored ${a(f) === "ignored" ? (a(_) === "asc" ? "▲" : "▼") : ""}`
          ),
          d(
            _e,
            `Timeout ${a(f) === "timeout" ? (a(_) === "asc" ? "▲" : "▼") : ""}`
          ),
          d(fe, `Ban ${a(f) === "ban" ? (a(_) === "asc" ? "▲" : "▼") : ""}`),
          d(
            pe,
            `Total ${a(f) === "total" ? (a(_) === "asc" ? "▲" : "▼") : ""}`
          );
      },
      [
        () => oa(),
        () => Ge(),
        () => Je(),
        () => Xe(),
        () => Ze(),
        () => ta(),
        () => ea(),
        () => aa(),
      ]
    ),
    Ae("submit", K, Jt),
    qt(
      Tt,
      () => a(j),
      (r) => v(j, r)
    ),
    qt(
      $t,
      () => a(A),
      (r) => v(A, r)
    ),
    x(m, P),
    Ue();
}
Me(["click"]);
export { Ma as component };

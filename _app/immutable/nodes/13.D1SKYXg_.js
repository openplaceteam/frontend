import "../chunks/ClL9a_Zs.js";
import { o as Ee } from "../chunks/Ba2x20r8.js";
import {
  k as je,
  p as Ae,
  l as g,
  m as L,
  D as Me,
  g as r,
  o as v,
  f as E,
  s as n,
  d as t,
  t as T,
  v as Ue,
  b as h,
  c as ze,
  e as Ne,
  $ as Oe,
  r as e,
  w as wt,
  a as Rt,
} from "../chunks/iK5FT0Sa.js";
import { s as d } from "../chunks/BHnQYZx5.js";
import { i as kt } from "../chunks/6Mc7KQD2.js";
import { e as Be } from "../chunks/DcUGKLlr.js";
import { h as Ce } from "../chunks/DDOVU0Bm.js";
import { r as Wt, s as Fe, a as Pe } from "../chunks/Cw1VVyw7.js";
import { b as Yt } from "../chunks/yt7z1efG.js";
import { g as Ve } from "../chunks/E8vEVpET.js";
import { a as Ke } from "../chunks/BcevhAVP.js";
import { P as Qe } from "../chunks/DUpX1e05.js";
import { R as We } from "../chunks/DIrPyiFz.js";
import { g as qt } from "../chunks/DQcFTXWv.js";
import { l as Ye } from "../chunks/D28eA48x.js";
import { a as qe, n as Ge } from "../chunks/CtNRy5kr.js";
import { e as He } from "../chunks/VeD2qHkI.js";
import { e as Je } from "../chunks/C5dbJ4r_.js";
import { m as Xe, a as Ze, b as tr, c as er } from "../chunks/B2X4S6Gs.js";
(function () {
  try {
    var b =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    b.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var b =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      p = new b.Error().stack;
    p &&
      ((b._sentryDebugIds = b._sentryDebugIds || {}),
      (b._sentryDebugIds[p] = "2d26aea8-ab78-46d6-b99f-c8645adc8abf"),
      (b._sentryDebugIdIdentifier =
        "sentry-dbid-2d26aea8-ab78-46d6-b99f-c8645adc8abf"));
  })();
} catch {}
const rr = () => "Number of reports treated per moderator in the period",
  ar = () => "Quantidade de reports tratados por moderador no período",
  sr = (b = {}, p = {}) => ((p.locale ?? qt()) === "en" ? rr() : ar()),
  or = () => "Treated reports",
  nr = () => "Reports tratados",
  dr = (b = {}, p = {}) => ((p.locale ?? qt()) === "en" ? or() : nr());
var lr = E(
    '<tr><td colspan="9"><div class="text-base-content/80 flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div></td></tr>'
  ),
  ir = E('<tr><td colspan="9" class="text-error"> </td></tr>'),
  cr = E('<tr><td colspan="9" class="text-base-content/70"> </td></tr>'),
  ur = E(
    '<tr class="hover"><td><a class="link hover:text-primary"><div class="flex items-center gap-2"><!> </div></a></td><td> </td><td> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td></tr>'
  ),
  vr = E(
    '<section class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div class="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><h2 class="text-xl font-semibold"> </h2> <p class="text-base-content/80 mt-1"> </p></div> <form class="grid grid-cols-1 gap-2 sm:auto-cols-max sm:grid-flow-col sm:items-end"><label class="form-control"><span class="label-text text-sm">Início</span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <label class="form-control"><span class="label-text text-sm">Fim</span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <div class="flex gap-2"><button type="submit" class="btn btn-primary btn-sm"> </button> <button type="button" class="btn btn-outline btn-sm"> </button> <button type="button" class="btn btn-circle btn-sm" title="Atualizar"><!></button></div></form></div> <div class="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div></div> <div class="overflow-x-auto"><table class="table"><thead><tr><th><button class="btn btn-ghost btn-xs"> </button></th><th>Role</th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th></tr></thead><tbody><!></tbody></table></div></section>'
  );
function jr(b, p) {
  Ae(p, !0);
  let x = g(!1),
    j = g(null),
    y = g(L([]));
  L({});
  function It(a) {
    return a.toISOString().slice(0, 16);
  }
  const Dt = new Date(),
    Gt = new Date(Dt.getTime() - 10080 * 60 * 1e3);
  let A = g(L(It(Gt))),
    M = g(L(It(Dt)));
  function U(a) {
    const l = new Date(a);
    return isNaN(l.getTime()) ? null : l.toISOString();
  }
  let f = g("total"),
    m = g("desc");
  function w(a) {
    r(f) === a
      ? v(m, r(m) === "asc" ? "desc" : "asc", !0)
      : (v(f, a, !0), v(m, a === "mod" ? "asc" : "desc", !0));
  }
  function St(a) {
    const l = [...a];
    return (
      l.sort((i, c) => {
        let s, o;
        switch (r(f)) {
          case "mod":
            return (
              (s = i.user.id.toString()),
              (o = c.user.id.toString()),
              r(m) === "asc"
                ? s < o
                  ? -1
                  : s > o
                  ? 1
                  : 0
                : s > o
                ? -1
                : s < o
                ? 1
                : 0
            );
          case "total":
            (s = i.total), (o = c.total);
            break;
          case "ban":
            (s = i.ban), (o = c.ban);
            break;
          case "ignored":
            (s = i.ignored), (o = c.ignored);
            break;
          case "timeout":
            (s = i.timeout), (o = c.timeout);
            break;
          case "suspensionRate":
            (s = i.suspensionRate ?? 0), (o = c.suspensionRate ?? 0);
            break;
          default:
            (s = 0), (o = 0);
        }
        return r(m) === "asc" ? s - o : o - s;
      }),
      l
    );
  }
  function Ht(a, l = 1) {
    return `${((a ?? 0) * 100).toFixed(l)}%`;
  }
  async function C() {
    try {
      v(x, !0), v(j, null);
      const a = U(r(A)),
        l = U(r(M));
      if (!a || !l) throw new Error("Datas inválidas");
      const i = await Ke.getClosedReportsByMod(a, l);
      v(y, i ?? [], !0);
    } catch (a) {
      a.status === 403 || a.status === 401
        ? Ve("/404")
        : v(j, (a == null ? void 0 : a.message) ?? Je(), !0),
        v(y, [], !0);
    } finally {
      v(x, !1);
    }
  }
  Ee(C);
  function Jt(a) {
    a.preventDefault(), C();
  }
  let R = g(L({ total: 0, ban: 0, ignored: 0, timeout: 0 }));
  Me(() => {
    const a = r(y);
    if (!a || a.length === 0) {
      v(R, { total: 0, ban: 0, ignored: 0, timeout: 0 }, !0);
      return;
    }
    const l = a.length,
      i = a.reduce(
        (s, o) => (
          (s.total += o.total),
          (s.ban += o.ban),
          (s.ignored += o.ignored),
          (s.timeout += o.timeout),
          s
        ),
        { total: 0, ban: 0, ignored: 0, timeout: 0 }
      ),
      c = (s) => Math.round(s * 100) / 100;
    v(
      R,
      {
        total: c(i.total / l),
        ban: c(i.ban / l),
        ignored: c(i.ignored / l),
        timeout: c(i.timeout / l),
      },
      !0
    );
  });
  function Xt(a, l) {
    const i = [
        "assigned_mod_id",
        "name",
        "alliance_id",
        "role",
        "total_reports_closed",
        "ban",
        "ignored",
        "timeout",
        "suspension_rate",
      ].join(","),
      c = a.map((s) =>
        [
          s.user.id,
          s.user.name,
          s.user.allianceId,
          s.user.role,
          s.total,
          s.ban,
          s.ignored,
          s.timeout,
          (s.suspensionRate ?? 0).toFixed(4),
        ].join(",")
      );
    return [i, ...c].join(`
`);
  }
  function Zt() {
    const a = St(r(y)),
      l = Xt(a),
      i = new Blob([l], { type: "text/csv;charset=utf-8;" }),
      c = URL.createObjectURL(i),
      s = document.createElement("a"),
      o = U(r(A)) ?? "start",
      _ = U(r(M)) ?? "end";
    (s.href = c),
      (s.download = `reports_leaderboard_${o}_${_}.csv`),
      s.click(),
      URL.revokeObjectURL(c);
  }
  var F = vr();
  Ce("11knr4c", (a) => {
    Ne(() => {
      Oe.title = "openplace - Admin - Reports - Leaderboard";
    });
  });
  var P = t(F),
    V = t(P),
    K = t(V),
    te = t(K);
  e(K);
  var $t = n(K, 2),
    ee = t($t, !0);
  e($t), e(V);
  var Q = n(V, 2),
    W = t(Q),
    Lt = n(t(W), 2);
  Wt(Lt), e(W);
  var Y = n(W, 2),
    Tt = n(t(Y), 2);
  Wt(Tt), e(Y);
  var Et = n(Y, 2),
    z = t(Et),
    re = t(z, !0);
  e(z);
  var S = n(z, 2);
  S.__click = Zt;
  var ae = t(S, !0);
  e(S);
  var N = n(S, 2);
  N.__click = C;
  var se = t(N);
  We(se, { class: "size-4" }), e(N), e(Et), e(Q), e(P);
  var q = n(P, 2),
    G = t(q),
    H = t(G),
    oe = t(H, !0);
  e(H);
  var jt = n(H, 2),
    ne = t(jt, !0);
  e(jt), e(G);
  var J = n(G, 2),
    X = t(J),
    de = t(X, !0);
  e(X);
  var At = n(X, 2),
    le = t(At, !0);
  e(At), e(J);
  var Z = n(J, 2),
    tt = t(Z),
    ie = t(tt, !0);
  e(tt);
  var Mt = n(tt, 2),
    ce = t(Mt, !0);
  e(Mt), e(Z);
  var Ut = n(Z, 2),
    et = t(Ut),
    ue = t(et, !0);
  e(et);
  var zt = n(et, 2),
    ve = t(zt, !0);
  e(zt), e(Ut), e(q);
  var Nt = n(q, 2),
    Ot = t(Nt),
    rt = t(Ot),
    Bt = t(rt),
    at = t(Bt),
    st = t(at);
  st.__click = () => w("mod");
  var be = t(st);
  e(st), e(at);
  var ot = n(at, 2),
    nt = t(ot);
  nt.__click = () => w("suspensionRate");
  var _e = t(nt);
  e(nt), e(ot);
  var dt = n(ot),
    lt = t(dt);
  lt.__click = () => w("ignored");
  var me = t(lt);
  e(lt), e(dt);
  var it = n(dt),
    ct = t(it);
  ct.__click = () => w("timeout");
  var pe = t(ct);
  e(ct), e(it);
  var ut = n(it),
    vt = t(ut);
  vt.__click = () => w("ban");
  var fe = t(vt);
  e(vt), e(ut);
  var Ct = n(ut),
    bt = t(Ct);
  bt.__click = () => w("total");
  var xe = t(bt);
  e(bt), e(Ct), e(Bt), e(rt);
  var Ft = n(rt),
    ge = t(Ft);
  {
    var he = (a) => {
        var l = lr(),
          i = t(l),
          c = t(i),
          s = n(t(c), 2),
          o = t(s, !0);
        e(s), e(c), e(i), e(l), T((_) => d(o, _), [() => Ye()]), h(a, l);
      },
      ye = (a) => {
        var l = wt(),
          i = Rt(l);
        {
          var c = (o) => {
              var _ = ir(),
                k = t(_),
                _t = t(k, !0);
              e(k), e(_), T(() => d(_t, r(j))), h(o, _);
            },
            s = (o) => {
              var _ = wt(),
                k = Rt(_);
              {
                var _t = (I) => {
                    var D = cr(),
                      O = t(D),
                      $ = t(O, !0);
                    e(O), e(D), T((u) => d($, u), [() => Ge()]), h(I, D);
                  },
                  we = (I) => {
                    var D = wt(),
                      O = Rt(D);
                    Be(
                      O,
                      17,
                      () => St(r(y)),
                      ($) => $.user.id,
                      ($, u) => {
                        var mt = ur(),
                          pt = t(mt),
                          ft = t(pt),
                          Pt = t(ft),
                          Vt = t(Pt);
                        Qe(Vt, {
                          class: "size-8 border sm:size-10",
                          get userId() {
                            return r(u).user.id;
                          },
                          get pictureUrl() {
                            return r(u).user.picture;
                          },
                        });
                        var Re = n(Vt);
                        e(Pt), e(ft), e(pt);
                        var xt = n(pt),
                          ke = t(xt, !0);
                        e(xt);
                        var B = n(xt);
                        let Kt;
                        var Ie = t(B, !0);
                        e(B);
                        var gt = n(B),
                          De = t(gt, !0);
                        e(gt);
                        var ht = n(gt),
                          Se = t(ht, !0);
                        e(ht);
                        var yt = n(ht),
                          $e = t(yt, !0);
                        e(yt);
                        var Qt = n(yt),
                          Le = t(Qt, !0);
                        e(Qt),
                          e(mt),
                          T(
                            (Te) => {
                              Fe(
                                ft,
                                "href",
                                `/admin/users?id=${r(u).user.id ?? ""}`
                              ),
                                d(
                                  Re,
                                  ` ${r(u).user.name ?? ""} #${
                                    r(u).user.id ?? ""
                                  }`
                                ),
                                d(ke, r(u).user.role),
                                (Kt = Pe(B, 1, "text-error", null, Kt, {
                                  "text-error":
                                    r(u).suspensionRate > 0.7 &&
                                    r(u).total > 50,
                                })),
                                d(Ie, Te),
                                d(De, r(u).ignored),
                                d(Se, r(u).timeout),
                                d($e, r(u).ban),
                                d(Le, r(u).total);
                            },
                            [() => Ht(r(u).suspensionRate, 1)]
                          ),
                          h($, mt);
                      }
                    ),
                      h(I, D);
                  };
                kt(
                  k,
                  (I) => {
                    r(y).length === 0 ? I(_t) : I(we, !1);
                  },
                  !0
                );
              }
              h(o, _);
            };
          kt(
            i,
            (o) => {
              r(j) ? o(c) : o(s, !1);
            },
            !0
          );
        }
        h(a, l);
      };
    kt(ge, (a) => {
      r(x) ? a(he) : a(ye, !1);
    });
  }
  e(Ft),
    e(Ot),
    e(Nt),
    e(F),
    T(
      (a, l, i, c, s, o, _, k) => {
        d(te, `Leaderboard (${a ?? ""})`),
          d(ee, l),
          (z.disabled = r(x)),
          d(re, i),
          (S.disabled = r(x) || r(y).length === 0),
          d(ae, c),
          (N.disabled = r(x)),
          d(oe, s),
          d(ne, r(R).total),
          d(de, o),
          d(le, r(R).ban),
          d(ie, _),
          d(ce, r(R).ignored),
          d(ue, k),
          d(ve, r(R).timeout),
          d(be, `Mod ${r(f) === "mod" ? (r(m) === "asc" ? "▲" : "▼") : ""}`),
          d(
            _e,
            `Suspension rate ${
              r(f) === "suspensionRate" ? (r(m) === "asc" ? "▲" : "▼") : ""
            }`
          ),
          d(
            me,
            `Ignored ${r(f) === "ignored" ? (r(m) === "asc" ? "▲" : "▼") : ""}`
          ),
          d(
            pe,
            `Timeout ${r(f) === "timeout" ? (r(m) === "asc" ? "▲" : "▼") : ""}`
          ),
          d(fe, `Ban ${r(f) === "ban" ? (r(m) === "asc" ? "▲" : "▼") : ""}`),
          d(
            xe,
            `Total ${r(f) === "total" ? (r(m) === "asc" ? "▲" : "▼") : ""}`
          );
      },
      [
        () => dr(),
        () => sr(),
        () => qe(),
        () => He(),
        () => Xe(),
        () => Ze(),
        () => tr(),
        () => er(),
      ]
    ),
    Ue("submit", Q, Jt),
    Yt(
      Lt,
      () => r(A),
      (a) => v(A, a)
    ),
    Yt(
      Tt,
      () => r(M),
      (a) => v(M, a)
    ),
    h(b, F),
    ze();
}
je(["click"]);
export { jr as component };

import "../chunks/ClL9a_Zs.js";
import { o as xe } from "../chunks/Ba2x20r8.js";
import {
  k as Ee,
  p as Ie,
  l as h,
  m as Lt,
  f as E,
  d as e,
  s as r,
  t as y,
  v as ye,
  g as t,
  b as _,
  c as we,
  o as n,
  e as Ue,
  $ as Ae,
  r as a,
  w as Tt,
  a as W,
  q as zt,
} from "../chunks/iK5FT0Sa.js";
import { s as u } from "../chunks/BHnQYZx5.js";
import { i as L } from "../chunks/6Mc7KQD2.js";
import { e as Ht, i as Le } from "../chunks/DcUGKLlr.js";
import { h as Te } from "../chunks/DDOVU0Bm.js";
import { b as De, r as Y, s as qt } from "../chunks/Cw1VVyw7.js";
import { b as Z } from "../chunks/yt7z1efG.js";
import { g as Ne } from "../chunks/E8vEVpET.js";
import { a as Oe } from "../chunks/BcevhAVP.js";
import { P as Se } from "../chunks/DUpX1e05.js";
import { R as Re } from "../chunks/DIrPyiFz.js";
import "../chunks/DQcFTXWv.js";
import { c as Be } from "../chunks/Bv_KMhOk.js";
import { l as Me } from "../chunks/D28eA48x.js";
import { a as ke, n as Ve } from "../chunks/CtNRy5kr.js";
import { e as Ce } from "../chunks/VeD2qHkI.js";
import { e as je } from "../chunks/C5dbJ4r_.js";
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
      T = new b.Error().stack;
    T &&
      ((b._sentryDebugIds = b._sentryDebugIds || {}),
      (b._sentryDebugIds[T] = "30b4f96f-f71c-4fb2-9588-a626f03d0b2f"),
      (b._sentryDebugIdIdentifier =
        "sentry-dbid-30b4f96f-f71c-4fb2-9588-a626f03d0b2f"));
  })();
} catch {}
var Ke = E(
    '<tr><td colspan="7"><div class="text-base-content/80 flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div></td></tr>'
  ),
  Fe = E('<tr><td colspan="7" class="text-error"> </td></tr>'),
  Ge = E('<tr><td colspan="7" class="text-base-content/70"> </td></tr>'),
  Pe = E(
    '<a class="link hover:text-primary"><div class="flex items-center gap-2"><!> </div></a>'
  ),
  $e = E('<a class="link"> </a> ', 1),
  ze = E(
    '<tr class="hover"><td> </td><td> </td><td><span class="badge badge-ghost"> </span></td><td><!></td><td><span><!> <!></span></td><td class="max-w-[360px] whitespace-pre-wrap"> </td></tr>'
  ),
  He = E('<span class="loading loading-spinner loading-sm mr-2"></span>'),
  qe = E(
    '<section class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div><h2 class="text-xl font-semibold">Audit Logs</h2> <p class="text-base-content/80 mt-1">Filtre por Actor, Target, Action e Data</p></div> <div class="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><form class="mb-2 mt-2 gap-2 sm:auto-cols-max sm:items-end"><label class="form-control"><span class="label-text text-sm">Actor (User ID)</span> <input type="number" min="1" class="input input-bordered input-sm" placeholder="ex.: 12"/></label> <label class="form-control"><span class="label-text text-sm">Target (User ID)</span> <input type="number" min="1" class="input input-bordered input-sm" placeholder="ex.: 34"/></label> <label class="form-control"><span class="label-text text-sm">Action</span> <select class="select select-bordered select-sm"><option>Todas</option><option>TIMEOUT</option><option>BAN</option><option>CHANGE_DROPLETS</option><option>REMOVE_TIMEOUT</option><option>REMOVE_BAN</option><option>BULK_TIMEOUT</option><option>BULK_BAN</option><option>BULK_CHANGE_DROPLETS</option><option>BULK_REMOVE_BAN</option><option>LOGOUT_ALL_DEVICES</option></select></label> <label class="form-control"><span class="label-text mt-3 text-sm">Início</span> <input type="datetime-local" class="input input-bordered input-sm mt-2"/></label> <label class="form-control"><span class="label-text mt-3 text-sm">Fim</span> <input type="datetime-local" class="input input-bordered input-sm mt-2"/></label> <div class="mt-3 flex gap-2"><button type="submit" class="btn btn-primary btn-sm"> </button> <button type="button" class="btn btn-outline btn-sm"> </button> <button type="button" class="btn btn-ghost btn-sm"> </button> <button type="button" class="btn btn-circle btn-sm" title="Atualizar"><!></button></div></form></div> <div class="overflow-x-auto"><table class="table"><thead><tr><th>ID</th><th>Data</th><th>Action</th><th>Actor</th><th>Target</th><th>Notas</th></tr></thead><tbody><!></tbody></table></div> <div class="mt-4 flex justify-center"><button class="btn btn-outline"><!> </button></div></section>'
  );
function _a(b, T) {
  Ie(T, !0);
  let m = h(!1),
    C = h(null),
    p = h(Lt([])),
    I = h(!0);
  const Dt = 20;
  let D = h(0),
    N = h(""),
    O = h(""),
    j = h("");
  function K(o) {
    return o.toISOString().slice(0, 16);
  }
  const J = new Date(),
    Nt = new Date(J.getTime() - 10080 * 60 * 1e3);
  let S = h(Lt(K(Nt))),
    R = h(Lt(K(J)));
  function F(o) {
    const s = new Date(o);
    return isNaN(s.getTime()) ? null : s.toISOString();
  }
  function Q() {
    n(D, 0), n(p, [], !0), n(I, !0), X();
  }
  async function X(o = !0) {
    try {
      o || (n(D, 0), n(p, [], !0), n(I, !0)), n(m, !0), n(C, null);
      const s = F(t(S)),
        d = F(t(R));
      if (!s || !d) throw new Error("Datas inválidas");
      const l = t(N) ? Number(t(N)) : void 0,
        g = t(O) ? Number(t(O)) : void 0;
      if (l !== void 0 && Number.isNaN(l)) throw new Error("Actor ID inválido");
      if (g !== void 0 && Number.isNaN(g))
        throw new Error("Target ID inválido");
      const i =
        (await Oe.getAuditLogs({
          actorUserId: l,
          targetUserId: g,
          action: t(j) || void 0,
          startIso: s,
          endIso: d,
          limit: Dt,
          offset: t(D),
        })) ?? [];
      o ? n(p, [...t(p), ...i], !0) : n(p, i, !0),
        n(I, i.length === Dt),
        n(D, t(D) + i.length);
    } catch (s) {
      if (
        (s == null ? void 0 : s.status) === 403 ||
        (s == null ? void 0 : s.status) === 401
      ) {
        Ne("/404");
        return;
      }
      n(C, (s == null ? void 0 : s.message) ?? je(), !0), n(I, !1);
    } finally {
      n(m, !1);
    }
  }
  function Wt(o) {
    o.preventDefault(), Q();
  }
  function Yt() {
    t(m) || !t(I) || X(!0);
  }
  function Zt() {
    n(N, ""), n(O, ""), n(j, ""), n(S, K(Nt), !0), n(R, K(J), !0), Q();
  }
  function Jt(o) {
    const s = [
        "id",
        "created_at",
        "action",
        "actor_user_id",
        "target_user_id",
        "notes",
      ].join(","),
      d = o.map((l) =>
        [
          l.id,
          l.createdAt,
          l.action,
          l.actorUserId,
          `"${l.targetUserId.join(",")}"`,
          l.notes ? `"${String(l.notes).replace(/"/g, '""')}"` : "",
        ].join(",")
      );
    return [s, ...d].join(`
`);
  }
  function Qt() {
    const o = Jt(t(p)),
      s = new Blob([o], { type: "text/csv;charset=utf-8;" }),
      d = URL.createObjectURL(s),
      l = document.createElement("a"),
      g = F(t(S)) ?? "start",
      i = F(t(R)) ?? "end";
    (l.href = d),
      (l.download = `audit_logs_${g}_${i}.csv`),
      l.click(),
      URL.revokeObjectURL(d);
  }
  xe(() => {
    Q();
  });
  var tt = qe();
  Te("1w6l7vk", (o) => {
    Ue(() => {
      Ae.title = "openplace - Admin - Audit Logs";
    });
  });
  var et = r(e(tt), 2),
    at = e(et),
    rt = e(at),
    Ot = r(e(rt), 2);
  Y(Ot), a(rt);
  var ot = r(rt, 2),
    St = r(e(ot), 2);
  Y(St), a(ot);
  var st = r(ot, 2),
    nt = r(e(st), 2),
    lt = e(nt);
  lt.value = lt.__value = "";
  var it = r(lt);
  it.value = it.__value = "TIMEOUT";
  var dt = r(it);
  dt.value = dt.__value = "BAN";
  var ct = r(dt);
  ct.value = ct.__value = "CHANGE_DROPLETS";
  var ut = r(ct);
  ut.value = ut.__value = "REMOVE_TIMEOUT";
  var vt = r(ut);
  vt.value = vt.__value = "REMOVE_BAN";
  var _t = r(vt);
  _t.value = _t.__value = "BULK_TIMEOUT";
  var pt = r(_t);
  pt.value = pt.__value = "BULK_BAN";
  var ft = r(pt);
  ft.value = ft.__value = "BULK_CHANGE_DROPLETS";
  var bt = r(ft);
  bt.value = bt.__value = "BULK_REMOVE_BAN";
  var Rt = r(bt);
  (Rt.value = Rt.__value = "LOGOUT_ALL_DEVICES"), a(nt), a(st);
  var mt = r(st, 2),
    Bt = r(e(mt), 2);
  Y(Bt), a(mt);
  var gt = r(mt, 2),
    Mt = r(e(gt), 2);
  Y(Mt), a(gt);
  var kt = r(gt, 2),
    G = e(kt),
    Xt = e(G, !0);
  a(G);
  var B = r(G, 2);
  B.__click = Qt;
  var te = e(B, !0);
  a(B);
  var M = r(B, 2);
  M.__click = Zt;
  var ee = e(M, !0);
  a(M);
  var P = r(M, 2);
  P.__click = () => X(!1);
  var ae = e(P);
  Re(ae, { class: "size-4" }), a(P), a(kt), a(at), a(et);
  var ht = r(et, 2),
    Vt = e(ht),
    Ct = r(e(Vt)),
    re = e(Ct);
  {
    var oe = (o) => {
        var s = Ke(),
          d = e(s),
          l = e(d),
          g = r(e(l), 2),
          i = e(g, !0);
        a(g), a(l), a(d), a(s), y((x) => u(i, x), [() => Me()]), _(o, s);
      },
      se = (o) => {
        var s = Tt(),
          d = W(s);
        {
          var l = (i) => {
              var x = Fe(),
                z = e(x),
                xt = e(z, !0);
              a(z), a(x), y(() => u(xt, t(C))), _(i, x);
            },
            g = (i) => {
              var x = Tt(),
                z = W(x);
              {
                var xt = (w) => {
                    var U = Ge(),
                      H = e(U),
                      k = e(H, !0);
                    a(H), a(U), y((v) => u(k, v), [() => Ve()]), _(w, U);
                  },
                  ie = (w) => {
                    var U = Tt(),
                      H = W(U);
                    Ht(
                      H,
                      17,
                      () => t(p),
                      (k) => k.id,
                      (k, v) => {
                        var Et = ze(),
                          It = e(Et),
                          de = e(It, !0);
                        a(It);
                        var yt = r(It),
                          ce = e(yt, !0);
                        a(yt);
                        var wt = r(yt),
                          Ft = e(wt),
                          ue = e(Ft, !0);
                        a(Ft), a(wt);
                        var Ut = r(wt),
                          ve = e(Ut);
                        {
                          var _e = (c) => {
                              var f = zt("System");
                              _(c, f);
                            },
                            pe = (c) => {
                              var f = Pe(),
                                q = e(f),
                                V = e(q);
                              Se(V, {
                                class: "size-8 border sm:size-8",
                                get userId() {
                                  return t(v).actorUserId;
                                },
                                pictureUrl: void 0,
                              });
                              var A = r(V);
                              a(q),
                                a(f),
                                y(() => {
                                  qt(
                                    f,
                                    "href",
                                    `/admin/users?id=${t(v).actorUserId}`
                                  ),
                                    u(A, ` #${t(v).actorUserId ?? ""}`);
                                }),
                                _(c, f);
                            };
                          L(ve, (c) => {
                            t(v).actorUserId === 0 ? c(_e) : c(pe, !1);
                          });
                        }
                        a(Ut);
                        var At = r(Ut),
                          Gt = e(At),
                          Pt = e(Gt);
                        {
                          var fe = (c) => {
                            var f = zt("—");
                            _(c, f);
                          };
                          L(Pt, (c) => {
                            t(v).targetUserId.length === 0 && c(fe);
                          });
                        }
                        var be = r(Pt, 2);
                        Ht(
                          be,
                          17,
                          () => t(v).targetUserId,
                          Le,
                          (c, f, q) => {
                            var V = $e(),
                              A = W(V),
                              ge = e(A, !0);
                            a(A);
                            var he = r(A, 1, !0);
                            y(() => {
                              qt(A, "href", `/admin/users?id=${t(f)}`),
                                u(ge, t(f)),
                                u(
                                  he,
                                  q !== t(v).targetUserId.length - 1 ? ", " : ""
                                );
                            }),
                              _(c, V);
                          }
                        ),
                          a(Gt),
                          a(At);
                        var $t = r(At),
                          me = e($t, !0);
                        a($t),
                          a(Et),
                          y(
                            (c) => {
                              u(de, t(v).id),
                                u(ce, c),
                                u(ue, t(v).action),
                                u(me, t(v).notes ?? "—");
                            },
                            [() => new Date(t(v).createdAt).toLocaleString()]
                          ),
                          _(k, Et);
                      }
                    ),
                      _(w, U);
                  };
                L(
                  z,
                  (w) => {
                    t(p).length === 0 ? w(xt) : w(ie, !1);
                  },
                  !0
                );
              }
              _(i, x);
            };
          L(
            d,
            (i) => {
              t(C) ? i(l) : i(g, !1);
            },
            !0
          );
        }
        _(o, s);
      };
    L(re, (o) => {
      t(m) && t(p).length === 0 ? o(oe) : o(se, !1);
    });
  }
  a(Ct), a(Vt), a(ht);
  var jt = r(ht, 2),
    $ = e(jt);
  $.__click = Yt;
  var Kt = e($);
  {
    var ne = (o) => {
      var s = He();
      _(o, s);
    };
    L(Kt, (o) => {
      t(m) && t(p).length > 0 && o(ne);
    });
  }
  var le = r(Kt);
  a($),
    a(jt),
    a(tt),
    y(
      (o, s, d) => {
        (G.disabled = t(m)),
          u(Xt, o),
          (B.disabled = t(m) || t(p).length === 0),
          u(te, s),
          (M.disabled = t(m)),
          u(ee, d),
          (P.disabled = t(m)),
          ($.disabled = t(m) || !t(I)),
          u(le, ` ${t(I) ? "Carregar mais" : "Sem mais resultados"}`);
      },
      [() => ke(), () => Ce(), () => Be()]
    ),
    ye("submit", at, Wt),
    Z(
      Ot,
      () => t(N),
      (o) => n(N, o)
    ),
    Z(
      St,
      () => t(O),
      (o) => n(O, o)
    ),
    De(
      nt,
      () => t(j),
      (o) => n(j, o)
    ),
    Z(
      Bt,
      () => t(S),
      (o) => n(S, o)
    ),
    Z(
      Mt,
      () => t(R),
      (o) => n(R, o)
    ),
    _(b, tt),
    we();
}
Ee(["click"]);
export { _a as component };

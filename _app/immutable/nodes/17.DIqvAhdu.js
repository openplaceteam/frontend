import "../chunks/ClL9a_Zs.js";
import { o as vs } from "../chunks/Ba2x20r8.js";
import {
  k as ps,
  p as _s,
  l as S,
  m as xe,
  f as y,
  a as te,
  s,
  d as a,
  g as e,
  t as g,
  v as us,
  b as p,
  c as fs,
  o as v,
  e as bs,
  $ as ms,
  r as t,
  u as ne,
  x as gs,
  w as ft,
  n as ra,
  q as ae,
} from "../chunks/iK5FT0Sa.js";
import { s as l } from "../chunks/BHnQYZx5.js";
import { i as h } from "../chunks/6Mc7KQD2.js";
import { k as xs } from "../chunks/COcZhybn.js";
import { e as vt, i as hs } from "../chunks/DcUGKLlr.js";
import { h as ys } from "../chunks/DDOVU0Bm.js";
import { s as q, a as K, c as ws, b as $s } from "../chunks/Cw1VVyw7.js";
import { a as ks } from "../chunks/D4MEaonn.js";
import { b as Ts } from "../chunks/DnZ5W6UV.js";
import { g as Us } from "../chunks/E8vEVpET.js";
import { p as pt } from "../chunks/D_G6cexA.js";
import {
  a as ie,
  t as G,
  u as _t,
  b as J,
  s as Is,
} from "../chunks/BcevhAVP.js";
import { h as oa, f as zs } from "../chunks/D1YbojwT.js";
import { P as ut } from "../chunks/DUpX1e05.js";
import { A as Rs, c as As } from "../chunks/DpS0PshJ.js";
import { C as na, c as Ls } from "../chunks/2xVnDudW.js";
import { T as ia, t as la, G as da } from "../chunks/DnpWy_rL.js";
import { L as ca, d as Cs, p as Ms } from "../chunks/CbE2L3A6.js";
import {
  e as va,
  r as pa,
  n as Bs,
  u as Ds,
  M as Ss,
  a as Ns,
  b as js,
  t as Ps,
  c as Es,
  l as Os,
  d as Gs,
  f as Ws,
  g as qs,
  h as Ys,
  m as Fs,
  i as Hs,
  j as Js,
  k as Ks,
} from "../chunks/x172pvsV.js";
import { R as _a } from "../chunks/DIrPyiFz.js";
import { g as Me } from "../chunks/DQcFTXWv.js";
import { r as Qs } from "../chunks/C4amkYCn.js";
import { o as Vs } from "../chunks/ignmDRGI.js";
import { t as Xs, s as Zs, a as er } from "../chunks/Xu0Wy4QE.js";
import { g as Ce, a as tr } from "../chunks/UjG3PxiF.js";
(function () {
  try {
    var w =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    w.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var w =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      u = new w.Error().stack;
    u &&
      ((w._sentryDebugIds = w._sentryDebugIds || {}),
      (w._sentryDebugIds[u] = "78118b75-664a-4a36-81d0-b7fc271da4e2"),
      (w._sentryDebugIdIdentifier =
        "sentry-dbid-78118b75-664a-4a36-81d0-b7fc271da4e2"));
  })();
} catch {}
const ar = () => "Ignore",
  sr = () => "Ignorar",
  ua = (w = {}, u = {}) => ((u.locale ?? Me()) === "en" ? ar() : sr()),
  rr = () => "Ignore all",
  or = () => "Ignorar todos",
  nr = (w = {}, u = {}) => ((u.locale ?? Me()) === "en" ? rr() : or()),
  ma = () => "Ban",
  ir = ma,
  fa = (w = {}, u = {}) => ((u.locale ?? Me()) === "en" ? ma() : ir()),
  lr = () => "Closed tickets",
  dr = () => "Tickets fechados",
  cr = (w = {}, u = {}) => ((u.locale ?? Me()) === "en" ? lr() : dr()),
  ba = (w, u = gs) => {
    var $ = vr();
    let A;
    var _ = a($);
    {
      var he = (f) => {
          var T = ae("MOD");
          p(f, T);
        },
        Y = (f) => {
          var T = ft(),
            Be = te(T);
          {
            var ye = (L) => {
                var se = ae("GM");
                p(L, se);
              },
              we = (L) => {
                var se = ae("ADMIN");
                p(L, se);
              };
            h(
              Be,
              (L) => {
                u() === "global_moderator" ? L(ye) : L(we, !1);
              },
              !0
            );
          }
          p(f, T);
        };
      h(_, (f) => {
        u() === "moderator" ? f(he) : f(Y, !1);
      });
    }
    t($),
      g(
        () =>
          (A = K($, 1, "badge badge-sm ml-0.5 font-semibold", null, A, {
            "badge-secondary": u() === "moderator" || u() == "global_moderator",
            "badge-warning": u() === "admin",
          }))
      ),
      p(w, $);
  };
var vr = y("<span><!></span>"),
  pr = y('<div class="absolute bottom-5 right-5"><!></div>'),
  _r = y(
    '<button><!> <div class="flex flex-col text-start"><span><span> </span> <span> </span></span> <span class="text-base-content/80 text-sm font-medium"> </span></div> <!></button>'
  ),
  ur = y(
    '<p class="text-base-content/80"> </p> <button class="btn btn-primary btn-sm"><!> </button>',
    1
  ),
  fr = y('<span class="loading loading-spinner loading-md"></span>'),
  br = y("<button> <!></button>"),
  mr = y(
    '<span class="tooltip tooltip-bottom badge bg-green-600 text-green-100" data-tip="User has spent money on openplace">💰 PAID</span>'
  ),
  gr = y(
    '<span> <span class="font-semibold"> </span></span> <span> <span class="font-semibold"> </span></span>',
    1
  ),
  xr = y('<button class="btn ml-auto"> </button>'),
  hr = y('<button class="btn btn-error"><!> </button>'),
  yr = y("<option> </option>"),
  wr = y(
    '<div><h4 class="font-semibold"> </h4> <p class="text-base-content/80 flex flex-wrap items-center gap-2 text-sm"><!></p> <button class="btn btn-xs btn-primary"><!></button></div>'
  ),
  $r = y(
    '<div class="flex flex-col gap-3"><h4 class="text-primary flex items-center justify-between text-xl font-semibold"> <div class="flex gap-2"><button class="btn"> </button> <button class="btn btn-error"><!> </button> <!></div></h4> <div class="flex gap-3"><!> <div><span class="text-lg"> <span><span> </span> <span> </span></span></span> <div class="flex flex-col text-sm"><div class="mt-1 flex items-center gap-2"><span class="text-base"> </span> <select></select></div> <span class="mt-1"> <span class="font-semibold"> </span></span> <span> <a target="_blank"><!> <span class="link">Link</span></a></span> <span> <a target="_blank"><!> <span class="link">Link</span></a></span></div></div></div> <!> <div class="flex flex-col items-center justify-center gap-4"><button class="relative h-max w-max" title="Report location"><img class="border-base-content/20 mx-auto max-h-[70vh] w-max border" alt="Report location"/> <!></button></div></div>'
  ),
  kr = y(
    '<header class="bg-base-100 sticky top-0 z-10 flex items-center justify-between px-6 pb-4 pt-6"><h3 class="text-xl font-semibold"> </h3></header> <div class="px-6 pb-8"><section class="flex gap-3"><!> <div><span class="text-lg"><span> </span>: <span><span> </span> <span> </span> <button><!></button> <!> <!></span> <!></span> <div class="flex flex-col text-sm"><span> <span class="font-semibold"> </span></span> <!> <span> <span class="font-semibold"> </span></span> <span> <span> </span></span></div></div> <!></section> <span class="divider"></span> <section class="mt-6 flex flex-col gap-4"></section></div>',
    1
  ),
  Tr = y('<button class="btn btn-error"><!> </button>'),
  Ur = y(
    '<iframe class="border-base-content/20 skeleton w-full grow border" title="Report location"></iframe>'
  ),
  Ir = y(
    '<div class="bg-base-200 grid h-full grid-cols-[350px_1fr] gap-4 p-4"><section class="flex flex-col gap-3 overflow-auto px-1 pb-1"><div class="mb-4 flex items-center justify-between"><div class="flex items-center gap-1"><a class="btn btn-ghost btn-circle"><!></a> <span class="relative flex flex-col items-start"><h2 class="text-xl font-semibold"> </h2> <span class="text-base-content/80 -bottom-4.5 absolute text-sm"> </span> <span class="tooltip tooltip-bottom text-base-content/80 text-sm before:translate-x-1/4"><div class="tooltip-content rounded-xl text-left"> <br/> <br/> <br/> </div> </span></span></div> <button class="btn btn-circle btn-sm"><!></button></div> <!> <div class="mt-10 flex flex-col items-center justify-center gap-2"><!></div></section> <section class="rounded-box bg-base-100 overflow-auto shadow"><!></section></div> <dialog class="modal"><div class="modal-box h-11/12 max-w-11/12 w-11/12 pb-4"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <div class="flex h-full flex-col gap-4"><div class="flex items-center justify-between"><div class="tooltip tooltip-bottom"><h4 class="text-primary text-xl font-semibold"> </h4></div> <div class="mr-4 flex gap-2"><button class="btn"> </button> <button class="btn btn-error"><!> </button> <!></div></div> <!></div></div> <form method="dialog" class="modal-backdrop"><button> </button></form></dialog>',
    1
  );
function to(w, u) {
  _s(u, !0);
  let $ = S(!0),
    A = S(!1),
    _ = S(xe([])),
    he = S(void 0),
    Y = S(
      xe({
        closedTotal: 0,
        bans: 0,
        ignored: 0,
        timeouts: 0,
        rclosedTotal: 0,
        rignored: 0,
        rtimeouts: 0,
        rbans: 0,
      })
    ),
    f = S(void 0),
    T = S(xe({}));
  const Be = [
    { value: "griefing", label: J.griefing },
    { value: "inappropriate-content", label: J["inappropriate-content"] },
    { value: "hate-speech", label: J["hate-speech"] },
    { value: "doxxing", label: J.doxxing },
    { value: "multi-accounting", label: J["multi-accounting"] },
    { value: "bot", label: J.bot },
    { value: "other", label: J.other },
  ];
  vs(() => {
    ye();
  });
  async function ye() {
    await we(), e(_).length <= 1 && (await L()), e(f) || v(f, e(_)[0], !0);
  }
  async function we() {
    try {
      v($, !0);
      const n = await ie.getModeratorTickets();
      v(_, n.tickets, !0), se();
      try {
        v(Y, await ie.countMyTicketsClosedToday(), !0);
      } catch (r) {
        return (
          G.error(r.message),
          {
            closedTotal: 0,
            ignored: 0,
            timeouts: 0,
            bans: 0,
            rclosedTotal: 0,
            rignored: 0,
            rtimeouts: 0,
            rbans: 0,
          }
        );
      }
      v(T, {}, !0);
      for (const r of e(_))
        for (const d of r.reports) e(T)[d.id] = d.assignedReason ?? d.reason;
    } catch (n) {
      n.status === 403 || n.status === 401 ? Us("/404") : G.error(n.message);
    } finally {
      v($, !1);
    }
  }
  async function L() {
    try {
      v($, !0);
      const { newTicketsIds: n } = await ie.assignNewTickets();
      n.length > 0 && (await we()), await se();
    } catch (n) {
      G.error(n.message);
    } finally {
      v($, !1);
    }
  }
  async function se() {
    try {
      v(he, await ie.getNonPaidUserOpenTicketsCount(), !0);
    } catch (n) {
      G.error(n.message);
    }
  }
  async function $e(n, r, d, b) {
    try {
      v(A, !0),
        await ie.setTicketStatus(n, r, d, b),
        r !== "open" &&
          !(r === "ignore" && d) &&
          (v(
            _,
            e(_).filter((o) => o.id !== n),
            !0
          ),
          e(_).length <= 1 && (await L()),
          v(f, e(_)[0], !0));
    } catch (o) {
      G.error(o.message);
    } finally {
      v(A, !1);
    }
  }
  function ga(n) {
    return $e(n, "ignore", 0, "other")
      .then(() => {
        v(
          _,
          e(_).filter((r) => r.id !== n),
          !0
        ),
          v(f, e(_)[0], !0),
          e(_).length <= 1 && L();
      })
      .catch((r) => {
        G.error(r.message);
      });
  }
  function bt(n, r) {
    return $e(n, "ignore", r, e(T)[r] ?? "other")
      .then(() => {
        const d = e(_).findIndex((o) => o.id === n);
        if (d === -1) return;
        const b = e(_)[d];
        if (
          ((b.reports = b.reports.filter((o) => o.id !== r)),
          delete e(T)[r],
          b.reports.length === 0)
        ) {
          v(
            _,
            e(_).filter((o) => o.id !== n),
            !0
          ),
            v(f, e(_)[0], !0),
            e(_).length <= 1 && L();
          return;
        }
        v(f, { ...b }, !0);
      })
      .catch((d) => {
        G.error(d.message);
      });
  }
  function mt(n, r) {
    const d = e(T)[r.id] ?? r.assignedReason ?? r.reason;
    return $e(n, "timeout", r.id, d);
  }
  function gt(n, r) {
    const d = e(T)[r.id] ?? r.assignedReason ?? r.reason;
    return $e(n, "ban", r.id, d);
  }
  let re = S(null),
    ke = S(""),
    Q = S(void 0),
    V = S(void 0),
    De = xe({}),
    X = xe({});
  async function xa(n, r) {
    if (X[r]) {
      X[r] = !1;
      return;
    }
    if (De[r]) {
      X[r] = !0;
      return;
    }
    try {
      X[r] = !0;
      const d = await ie.getModerationTranslate(n);
      De[r] = d;
    } catch (d) {
      G.error(d.message), (X[r] = !1);
    }
  }
  var xt = Ir();
  ys("1cfidl9", (n) => {
    bs(() => {
      ms.title = "openplace - Moderation";
    });
  });
  var Se = te(xt),
    Ne = a(Se),
    je = a(Ne),
    Pe = a(je),
    Te = a(Pe),
    ha = a(Te);
  Rs(ha, { class: "size-5" }), t(Te);
  var ht = s(Te, 2),
    Ee = a(ht),
    ya = a(Ee, !0);
  t(Ee);
  var Oe = s(Ee, 2),
    wa = a(Oe);
  t(Oe);
  var yt = s(Oe, 2),
    Ge = a(yt),
    wt = a(Ge),
    $t = s(wt, 2),
    kt = s($t, 2),
    $a = s(kt, 2);
  t(Ge);
  var ka = s(Ge);
  t(yt), t(ht), t(Pe);
  var Ue = s(Pe, 2);
  Ue.__click = () => {
    ye();
  };
  var Ta = a(Ue);
  _a(Ta, { class: "size-4" }), t(Ue), t(je);
  var Tt = s(je, 2);
  vt(
    Tt,
    25,
    () => e(_),
    (n) => n.id,
    (n, r) => {
      const d = ne(() => new Date(e(r).createdAt)),
        b = ne(() => {
          var j;
          return ((j = e(f)) == null ? void 0 : j.id) === e(r).id;
        });
      var o = _r();
      o.__click = () => {
        v(f, e(r), !0);
      };
      var C = a(o);
      ut(C, {
        class: "size-13",
        get userId() {
          return e(r).reportedUser.id;
        },
        get pictureUrl() {
          return e(r).reportedUser.picture;
        },
      });
      var N = s(C, 2),
        I = a(N),
        M = a(I),
        oe = a(M, !0);
      t(M);
      var F = s(M, 2),
        ce = a(F);
      t(F), t(I);
      var ve = s(I, 2),
        pe = a(ve, !0);
      t(ve), t(N);
      var _e = s(N, 2);
      {
        var ue = (j) => {
          var P = pr(),
            fe = a(P);
          ba(fe, () => e(r).reportedUser.role), t(P), p(j, P);
        };
        h(_e, (j) => {
          e(r).reportedUser.role !== "user" && j(ue);
        });
      }
      t(o),
        g(
          (j, P) => {
            K(
              o,
              1,
              ws({
                "bg-base-100 ring-primary relative flex gap-2 rounded-2xl p-4 shadow":
                  !0,
                "bg-primary/10 ring-2": e(b),
              })
            ),
              K(I, 1, `text-lg font-semibold ${j ?? ""} flex gap-1.5`),
              l(oe, e(r).reportedUser.name),
              l(ce, `#${e(r).reportedUser.id ?? ""}`),
              l(pe, P);
          },
          [() => Ce(e(r).reportedUser.id), () => e(d).toLocaleString()]
        ),
        ks(
          o,
          () => zs,
          () => ({ duration: 250 })
        ),
        p(n, o);
    }
  );
  var Ut = s(Tt, 2),
    Ua = a(Ut);
  {
    var Ia = (n) => {
        var r = ur(),
          d = te(r),
          b = a(d, !0);
        t(d);
        var o = s(d, 2);
        o.__click = async () => {
          await L(), v(f, e(_)[0], !0);
        };
        var C = a(o);
        _a(C, { class: "size-5" });
        var N = s(C);
        t(o),
          g(
            (I, M) => {
              l(b, I), l(N, ` ${M ?? ""}`);
            },
            [() => Bs(), () => Qs()]
          ),
          p(n, r);
      },
      za = (n) => {
        var r = ft(),
          d = te(r);
        {
          var b = (o) => {
            var C = fr();
            p(o, C);
          };
          h(
            d,
            (o) => {
              e($) && e(_).length === 0 && o(b);
            },
            !0
          );
        }
        p(n, r);
      };
    h(Ua, (n) => {
      !e($) && e(_).length === 0 ? n(Ia) : n(za, !1);
    });
  }
  t(Ut), t(Ne);
  var It = s(Ne, 2),
    Ra = a(It);
  {
    var Aa = (n) => {
      var r = ft(),
        d = te(r);
      xs(
        d,
        () => e(f).id,
        (b) => {
          const o = ne(() => e(f)),
            C = ne(() => {
              var c;
              return (c = Fs(e(o).reports, (i) => i.sameIpAccounts)) == null
                ? void 0
                : c.sameIpAccounts;
            });
          var N = kr(),
            I = te(N),
            M = a(I),
            oe = a(M);
          t(M), t(I);
          var F = s(I, 2),
            ce = a(F),
            ve = a(ce);
          ut(ve, {
            class: "size-15",
            get userId() {
              return e(o).reportedUser.id;
            },
            get pictureUrl() {
              return e(o).reportedUser.picture;
            },
          });
          var pe = s(ve, 2),
            _e = a(pe),
            ue = a(_e),
            j = a(ue, !0);
          t(ue);
          var P = s(ue, 2),
            fe = a(P),
            Pa = a(fe, !0);
          t(fe);
          var Ye = s(fe, 2),
            Ea = a(Ye);
          t(Ye);
          var be = s(Ye, 2);
          be.__click = () => {
            navigator.clipboard.writeText(e(o).reportedUser.id.toString()),
              G.success(Ds());
          };
          var Oa = a(be);
          na(Oa, { class: "inline size-4" }), t(be);
          var Bt = s(be, 2);
          {
            var Ga = (c) => {
              const i = ne(() => e(o).reportedUser.allianceId);
              var x = br();
              x.__click = () => {
                navigator.clipboard.writeText(e(i).toString()), G.success(Hs());
              };
              var z = a(x),
                E = s(z);
              na(E, { class: "size-3" }),
                t(x),
                g(
                  (H, W, B) => {
                    K(
                      x,
                      1,
                      `tooltip badge badge-sm ml-0.5 border-0 ${H ?? ""} ${
                        W ?? ""
                      }`
                    ),
                      q(x, "title", B),
                      l(z, `${e(o).reportedUser.allianceName ?? ""} `);
                  },
                  [
                    () => tr(e(i)),
                    () => Ce(e(i)),
                    () => Ls({ allianceId: e(i) }),
                  ]
                ),
                p(c, x);
            };
            h(Bt, (c) => {
              e(o).reportedUser.allianceId && c(Ga);
            });
          }
          var Wa = s(Bt, 2);
          {
            var qa = (c) => {
              var i = mr();
              p(c, i);
            };
            h(Wa, (c) => {
              e(o).reportedUser.paid && c(qa);
            });
          }
          t(P);
          var Ya = s(P, 2);
          {
            var Fa = (c) => {
              ba(c, () => e(o).reportedUser.role);
            };
            h(Ya, (c) => {
              e(o).reportedUser.role !== "user" && c(Fa);
            });
          }
          t(_e);
          var Dt = s(_e, 2),
            Fe = a(Dt),
            St = a(Fe),
            Nt = s(St),
            Ha = a(Nt, !0);
          t(Nt), t(Fe);
          var jt = s(Fe, 2);
          {
            var Ja = (c) => {
              var i = gr(),
                x = te(i),
                z = a(x),
                E = s(z),
                H = a(E, !0);
              t(E), t(x);
              var W = s(x, 2),
                B = a(W),
                Re = s(B),
                Z = a(Re, !0);
              t(Re),
                t(W),
                g(
                  (Ae, Ke) => {
                    l(z, `${Ae ?? ""}: `),
                      l(H, e(o).reportedUser.timeoutCount),
                      l(B, `${Ke ?? ""}: `),
                      l(
                        Z,
                        J[e(o).reportedUser.lastTimeoutReason] ??
                          e(o).reportedUser.lastTimeoutReason
                      );
                  },
                  [() => Js(), () => Ks()]
                ),
                p(c, i);
            };
            h(jt, (c) => {
              e(o).reportedUser.lastTimeoutReason && c(Ja);
            });
          }
          var He = s(jt, 2),
            Pt = a(He),
            Et = s(Pt),
            Ka = a(Et, !0);
          t(Et), t(He);
          var Ot = s(He, 2),
            Gt = a(Ot),
            Je = s(Gt);
          let Wt;
          var Qa = a(Je, !0);
          t(Je), t(Ot), t(Dt), t(pe);
          var Va = s(pe, 2);
          {
            var Xa = (c) => {
              var i = xr();
              i.__click = () => {
                ga(e(o).id);
              };
              var x = a(i, !0);
              t(i),
                g(
                  (z) => {
                    (i.disabled = e(A)), l(x, z);
                  },
                  [() => nr()]
                ),
                p(c, i);
            };
            h(Va, (c) => {
              var i;
              ((i = _t.data) == null ? void 0 : i.role) === "admin" && c(Xa);
            });
          }
          t(ce);
          var qt = s(ce, 4);
          vt(
            qt,
            21,
            () => e(o).reports,
            (c) => c.id,
            (c, i) => {
              const x = ne(
                () =>
                  `${pt.url.origin}/?lat=${e(i).reportedLatitude}&lng=${
                    e(i).reportedLongitude
                  }&select=true${e(i).zoom ? `&zoom=${e(i).zoom}` : ""}`
              );
              var z = $r(),
                E = a(z),
                H = a(E),
                W = s(H),
                B = a(W);
              B.__click = () => {
                bt(e(o).id, e(i).id);
              };
              var Re = a(B, !0);
              t(B);
              var Z = s(B, 2);
              Z.__click = () => {
                mt(e(o).id, e(i));
              };
              var Ae = a(Z);
              ia(Ae, { class: "size-5" });
              var Ke = s(Ae);
              t(Z);
              var Za = s(Z, 2);
              {
                var es = (R) => {
                  var m = hr();
                  m.__click = () => {
                    gt(e(o).id, e(i));
                  };
                  var U = a(m);
                  da(U, { class: "size-5" });
                  var ee = s(U);
                  t(m),
                    g(
                      (O) => {
                        (m.disabled = e(A)), l(ee, ` ${O ?? ""}`);
                      },
                      [() => fa()]
                    ),
                    p(R, m);
                };
                h(Za, (R) => {
                  var m;
                  oa((m = _t.data) == null ? void 0 : m.role, [
                    "admin",
                    "global_moderator",
                    "moderator",
                  ]) && R(es);
                });
              }
              t(W), t(E);
              var Qe = s(E, 2),
                Yt = a(Qe);
              ut(Yt, {
                class: "size-15",
                get userId() {
                  return e(i).reportedBy;
                },
                get pictureUrl() {
                  return e(i).reportedByPicture;
                },
              });
              var Ft = s(Yt, 2),
                Ve = a(Ft),
                Ht = a(Ve),
                Xe = s(Ht),
                Ze = a(Xe),
                ts = a(Ze, !0);
              t(Ze);
              var Jt = s(Ze, 2),
                as = a(Jt);
              t(Jt), t(Xe), t(Ve);
              var Kt = s(Ve, 2),
                et = a(Kt),
                tt = a(et),
                ss = a(tt);
              t(tt);
              var Le = s(tt, 2);
              vt(
                Le,
                21,
                () => Be,
                hs,
                (R, m) => {
                  var U = yr(),
                    ee = a(U, !0);
                  t(U);
                  var O = {};
                  g(() => {
                    l(ee, e(m).label),
                      O !== (O = e(m).value) &&
                        (U.value = (U.__value = e(m).value) ?? "");
                  }),
                    p(R, U);
                }
              ),
                t(Le),
                t(et);
              var at = s(et, 2),
                Qt = a(at),
                Vt = s(Qt),
                rs = a(Vt, !0);
              t(Vt), t(at);
              var st = s(at, 2),
                Xt = a(st),
                rt = s(Xt),
                os = a(rt);
              ca(os, { class: "inline size-4" }), ra(2), t(rt), t(st);
              var Zt = s(st, 2),
                ea = a(Zt),
                ot = s(ea),
                ns = a(ot);
              ca(ns, { class: "inline size-4" }),
                ra(2),
                t(ot),
                t(Zt),
                t(Kt),
                t(Ft),
                t(Qe);
              var ta = s(Qe, 2);
              {
                var is = (R) => {
                  var m = wr(),
                    U = a(m),
                    ee = a(U, !0);
                  t(U);
                  var O = s(U, 2),
                    it = a(O);
                  {
                    var lt = (k) => {
                        var D = ae();
                        g((ge) => l(D, ge), [() => De[e(i).id] ?? Xs()]),
                          p(k, D);
                      },
                      dt = (k) => {
                        var D = ae();
                        g(() => l(D, e(i).notes)), p(k, D);
                      };
                    h(it, (k) => {
                      X[e(i).id] ? k(lt) : k(dt, !1);
                    });
                  }
                  t(O);
                  var me = s(O, 2);
                  me.__click = () => xa(e(i).notes, e(i).id);
                  var ct = a(me);
                  {
                    var ds = (k) => {
                        var D = ae();
                        g((ge) => l(D, ge), [() => Zs()]), p(k, D);
                      },
                      cs = (k) => {
                        var D = ae();
                        g((ge) => l(D, ge), [() => er()]), p(k, D);
                      };
                    h(ct, (k) => {
                      X[e(i).id] ? k(ds) : k(cs, !1);
                    });
                  }
                  t(me), t(m), g((k) => l(ee, k), [() => Cs()]), p(R, m);
                };
                h(ta, (R) => {
                  e(i).notes && R(is);
                });
              }
              var aa = s(ta, 2),
                nt = a(aa);
              nt.__click = () => {
                v(ke, e(x)), v(Q, e(o), !0), v(V, e(i), !0), e(re).showModal();
              };
              var sa = a(nt),
                ls = s(sa, 2);
              Ss(ls, {
                class:
                  "absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-[87%]",
              }),
                t(nt),
                t(aa),
                t(z),
                g(
                  (R, m, U, ee, O, it, lt, dt, me, ct) => {
                    l(H, `${R ?? ""} #${e(i).id ?? ""} `),
                      (B.disabled = e(A)),
                      l(Re, m),
                      (Z.disabled = e(A)),
                      l(Ke, ` ${U ?? ""}`),
                      l(Ht, `${ee ?? ""}: `),
                      K(Xe, 1, `font-semibold ${O ?? ""}`),
                      l(ts, e(i).reportedByName),
                      l(as, `#${e(i).reportedBy ?? ""}`),
                      l(ss, `${it ?? ""}:`),
                      K(
                        Le,
                        1,
                        `select select-bordered select-sm font-semibold ${
                          Is[e(T)[e(i).id]] ?? ""
                        }`
                      ),
                      l(Qt, `${lt ?? ""}: `),
                      l(rs, dt),
                      l(Xt, `${me ?? ""}: `),
                      q(rt, "href", e(x)),
                      l(ea, `${ct ?? ""}: `),
                      q(
                        ot,
                        "href",
                        `${pt.url.origin ?? ""}/?lat=${
                          e(i).lastPixelLatitude ?? ""
                        }&lng=${e(i).lastPixelLongitude ?? ""}&select=true`
                      ),
                      q(sa, "src", e(i).imageUrl);
                  },
                  [
                    () => pa(),
                    () => ua(),
                    () => la(),
                    () => Ns(),
                    () => Ce(e(i).reportedBy),
                    () => js(),
                    () => Ps(),
                    () => new Date(e(i).createdAt).toLocaleString(),
                    () => Es(),
                    () => Os(),
                  ]
                ),
                $s(
                  Le,
                  () => e(T)[e(i).id],
                  (R) => (e(T)[e(i).id] = R)
                ),
                p(c, z);
            }
          ),
            t(qt),
            t(F),
            g(
              (c, i, x, z, E, H, W, B) => {
                q(M, "title", e(o).id),
                  l(oe, `${c ?? ""}: ${i ?? ""}`),
                  l(j, x),
                  K(P, 1, `text-lg font-semibold ${z ?? ""}`),
                  l(Pa, e(o).reportedUser.name),
                  l(Ea, `#${e(o).reportedUser.id ?? ""}`),
                  q(be, "title", E),
                  l(St, `${H ?? ""}: `),
                  l(Ha, e(o).reportedUser.reportedCount),
                  l(Pt, `${W ?? ""}: `),
                  l(Ka, e(o).reportedUser.pixelsPainted),
                  l(Gt, `${B ?? ""}: `),
                  (Wt = K(Je, 1, "font-semibold", null, Wt, {
                    "text-red-600": e(C) >= 7,
                  })),
                  l(Qa, e(C));
              },
              [
                () => Gs(),
                () => e(o).id.split("-").at(-1),
                () => va(),
                () => Ce(e(o).reportedUser.id),
                () => Ws({ userId: e(o).reportedUser.id }),
                () => qs(),
                () => Ms(),
                () => Ys(),
              ]
            ),
            p(b, N);
        }
      ),
        p(n, r);
    };
    h(Ra, (n) => {
      e(f) && n(Aa);
    });
  }
  t(It), t(Se);
  var Ie = s(Se, 2),
    We = a(Ie),
    zt = s(a(We), 2),
    qe = a(zt),
    ze = a(qe),
    Rt = a(ze),
    La = a(Rt);
  t(Rt), t(ze);
  var At = s(ze, 2),
    le = a(At);
  le.__click = async () => {
    await bt(e(Q).id, e(V).id), e(re).close();
  };
  var Ca = a(le, !0);
  t(le);
  var de = s(le, 2);
  de.__click = async () => {
    await mt(e(Q).id, e(V)), e(re).close();
  };
  var Lt = a(de);
  ia(Lt, { class: "size-5" });
  var Ma = s(Lt);
  t(de);
  var Ba = s(de, 2);
  {
    var Da = (n) => {
      var r = Tr();
      r.__click = async () => {
        await gt(e(Q).id, e(V)), e(re).close();
      };
      var d = a(r);
      da(d, { class: "size-5" });
      var b = s(d);
      t(r),
        g(
          (o) => {
            (r.disabled = e(A)), l(b, ` ${o ?? ""}`);
          },
          [() => fa()]
        ),
        p(n, r);
    };
    h(Ba, (n) => {
      var r;
      oa((r = _t.data) == null ? void 0 : r.role, [
        "admin",
        "global_moderator",
        "moderator",
      ]) && n(Da);
    });
  }
  t(At), t(qe);
  var Sa = s(qe, 2);
  {
    var Na = (n) => {
      var r = Ur();
      g(() => q(r, "src", e(ke))), p(n, r);
    };
    h(Sa, (n) => {
      e(ke) && n(Na);
    });
  }
  t(zt), t(We);
  var Ct = s(We, 2),
    Mt = a(Ct),
    ja = a(Mt, !0);
  t(Mt),
    t(Ct),
    t(Ie),
    Ts(
      Ie,
      (n) => v(re, n),
      () => e(re)
    ),
    g(
      (n, r, d, b, o, C, N) => {
        var I, M, oe, F;
        q(Te, "href", pt.url.origin),
          l(ya, n),
          l(wa, `${r ?? ""}: ${e(he) ?? "" ?? ""}`),
          l(wt, `Closed reports: ${e(Y).rclosedTotal ?? ""}`),
          l($t, ` Ignored: ${e(Y).ignored ?? ""}`),
          l(kt, ` Timeouts: ${e(Y).timeouts ?? ""}`),
          l($a, ` Bans: ${e(Y).bans ?? ""}`),
          l(ka, ` ${d ?? ""}: ${e(Y).closedTotal ?? ""}`),
          (Ue.disabled = e($)),
          q(
            ze,
            "data-tip",
            `Notes: ${((I = e(V)) == null ? void 0 : I.notes) ?? "" ?? ""}`
          ),
          l(
            La,
            `${b ?? ""} #${((M = e(V)) == null ? void 0 : M.id) ?? ""} | ${
              ((oe = e(Q)) == null ? void 0 : oe.reportedUser.name) ?? ""
            }#${((F = e(Q)) == null ? void 0 : F.reportedUser.id) ?? ""}`
          ),
          (le.disabled = e(A)),
          l(Ca, o),
          (de.disabled = e(A)),
          l(Ma, ` ${C ?? ""}`),
          l(ja, N);
      },
      [
        () => va(),
        () => Vs(),
        () => cr(),
        () => pa(),
        () => ua(),
        () => la(),
        () => As(),
      ]
    ),
    us("close", Ie, () => {
      v(ke, ""), v(Q, void 0), v(V, void 0);
    }),
    p(w, xt),
    fs();
}
ps(["click"]);
export { to as component };

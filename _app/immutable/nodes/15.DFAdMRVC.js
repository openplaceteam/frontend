import "../chunks/ClL9a_Zs.js";
import { o as hs } from "../chunks/Ba2x20r8.js";
import {
  k as ys,
  p as ws,
  l as X,
  m as xa,
  f as u,
  s,
  t as b,
  b as v,
  c as Us,
  o as g,
  e as $s,
  d as t,
  g as a,
  $ as As,
  r as e,
  u as M,
  a as ha,
  n as ge,
  x as Ts,
  q as oa,
  w as he,
} from "../chunks/iK5FT0Sa.js";
import { s as o } from "../chunks/BHnQYZx5.js";
import { i as f } from "../chunks/6Mc7KQD2.js";
import { k as ks } from "../chunks/COcZhybn.js";
import { e as qa } from "../chunks/DcUGKLlr.js";
import { h as Ls } from "../chunks/DDOVU0Bm.js";
import { a as P, c as Ga, r as Is, s as na } from "../chunks/Cw1VVyw7.js";
import { b as zs } from "../chunks/yt7z1efG.js";
import { p as dt } from "../chunks/D_G6cexA.js";
import { a as Z, t as E, s as Rs, b as lt } from "../chunks/BcevhAVP.js";
import { P as Da } from "../chunks/DUpX1e05.js";
import { C as xe, c as Cs } from "../chunks/2xVnDudW.js";
import { L as vt, d as Ds, p as Ps } from "../chunks/CbE2L3A6.js";
import {
  u as pt,
  r as js,
  a as Ns,
  b as Ss,
  t as Bs,
  c as Ms,
  l as Es,
  M as Fs,
  d as Os,
  e as qs,
  f as Gs,
  g as Ws,
  h as Ys,
  m as Hs,
  i as Js,
  j as Ks,
  k as Qs,
  n as Vs,
} from "../chunks/x172pvsV.js";
import { R as Xs } from "../chunks/DIrPyiFz.js";
import "../chunks/DQcFTXWv.js";
import { a as Zs } from "../chunks/D6qiv33a.js";
import { n as ar, a as er, b as tr } from "../chunks/BGlGAxl5.js";
import { t as sr, s as rr, a as nr } from "../chunks/Xu0Wy4QE.js";
import { g as da, a as ct } from "../chunks/UjG3PxiF.js";
(function () {
  try {
    var F =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    F.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var F =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      G = new F.Error().stack;
    G &&
      ((F._sentryDebugIds = F._sentryDebugIds || {}),
      (F._sentryDebugIds[G] = "7774e0a4-138e-4c73-9243-c0f6b0549482"),
      (F._sentryDebugIdIdentifier =
        "sentry-dbid-7774e0a4-138e-4c73-9243-c0f6b0549482"));
  })();
} catch {}
const _t = (F, G = Ts) => {
  var z = or();
  let aa;
  var j = t(z);
  {
    var p = (W) => {
        var ea = oa("MOD");
        v(W, ea);
      },
      Wa = (W) => {
        var ea = he(),
          Pa = ha(ea);
        {
          var _a = (N) => {
              var ya = oa("GM");
              v(N, ya);
            },
            ua = (N) => {
              var ya = oa("ADMIN");
              v(N, ya);
            };
          f(
            Pa,
            (N) => {
              G() === "global_moderator" ? N(_a) : N(ua, !1);
            },
            !0
          );
        }
        v(W, ea);
      };
    f(j, (W) => {
      G() === "moderator" ? W(p) : W(Wa, !1);
    });
  }
  e(z),
    b(
      () =>
        (aa = P(z, 1, "badge badge-sm ml-0.5 font-semibold", null, aa, {
          "badge-secondary": G() === "moderator" || G() == "global_moderator",
          "badge-warning": G() === "admin",
        }))
    ),
    v(F, z);
};
var or = u("<span><!></span>"),
  ir = u(
    '<div class="flex items-center justify-center py-10"><span class="loading loading-spinner loading-md"></span></div>'
  ),
  dr = u('<span class="badge badge-xs"> </span>'),
  lr = u(
    '<button><!> <div class="flex flex-col text-start"><span><span> </span> <span> </span> <!></span> <span class="text-base-content/80 text-xs font-medium"> </span></div></button>'
  ),
  vr = u(
    '<div class="text-base-content/70 mt-4 text-center">Nenhum appeal pendente</div>'
  ),
  pr = u('<span class="badge badge-xs"> </span>'),
  cr = u('<div class="mt-1"><span> </span></div>'),
  _r = u(
    '<div class="badge badge-warning badge-outline mt-2"><span>Timeout até: <b> </b></span></div>'
  ),
  ur = u(
    '<div class="badge badge-error badge-outline mt-2"><span>Banido: <b> </b></span></div>'
  ),
  br = u(
    '<div class="rounded-box border-base-300 border p-3"><div class="flex justify-between text-sm"><span class="font-medium"> <span class="badge badge-xs"> </span></span> <span class="text-base-content/80"> </span></div> <div class="mt-1 whitespace-pre-wrap break-words"> </div></div>'
  ),
  fr = u('<div class="text-base-content/70 text-sm"> </div>'),
  mr = u(
    '<div class="flex items-center justify-center py-6"><span class="loading loading-spinner loading-md"></span></div>'
  ),
  gr = u("<span> </span>"),
  xr = u('<div class="absolute bottom-3 right-3"><!></div>'),
  hr = u(
    '<button><!> <div class="flex flex-col text-start"><span><span> </span> <span> </span> <!></span> <div class="flex items-center gap-2"><span class="text-base-content/80 text-xs font-medium"> </span></div></div> <!></button>'
  ),
  yr = u("<button> <!></button>"),
  wr = u(
    '<span> <span class="font-semibold"> </span></span> <span> <span class="font-semibold"> </span></span>',
    1
  ),
  Ur = u(
    '<span> <a target="_blank"><!> <span class="link">Link</span></a></span>'
  ),
  $r = u(
    '<span> <a target="_blank"><!> <span class="link">Link</span></a></span>'
  ),
  Ar = u(
    '<div><h5 class="font-semibold"> </h5> <p class="text-base-content/80 text-sm"> </p></div>'
  ),
  Tr = u(
    '<img class="border-base-content/20 mx-auto max-h-[70vh] w-max border" alt="Report location"/>'
  ),
  kr = u(
    '<div class="grid grid-cols-1 items-center gap-2"><a class="relative h-max rounded-md" title="Report location" target="_blank"><!> <!></a></div>'
  ),
  Lr = u(
    '<div class="mt-2"><img class="border-base-content/20 mx-auto max-h-[70vh] w-max border" alt="Reported location"/></div>'
  ),
  Ir = u(
    '<div class="flex flex-col gap-3"><h5 class="text-primary text-base font-semibold"> </h5> <div class="flex gap-3"><!> <div><span class="text-base"> <span><span> </span> <span> </span></span></span> <div class="flex flex-col text-sm"><span class="text-base"> <span> </span></span> <span class="mt-1"> <span class="font-semibold"> </span></span> <!> <!></div></div></div> <!> <!></div>'
  ),
  zr = u(
    '<header class="bg-base-100 sticky top-0 z-10 flex items-center justify-between px-4 pb-3 pt-4"><h4 class="text-lg font-semibold"> <span>|</span> <span>Tratado por:</span> <span> </span> <span> </span></h4></header> <div class="px-4 pb-6"><section class="flex gap-3"><!> <div><span class="text-base"><span> </span> <span><span> </span> <span> </span> <button><!></button> <!></span> <!></span> <div class="flex flex-col text-sm"><span> <span class="font-semibold"> </span></span> <!> <span> <span class="font-semibold"> </span></span> <span> <span> </span></span></div></div></section> <span class="divider"></span> <section class="mt-4 flex flex-col gap-4"></section></div>',
    1
  ),
  Rr = u('<span class="loading loading-spinner loading-md"></span>'),
  Cr = u(
    '<div class="text-base-content/70 flex h-full items-center justify-center"><!></div>'
  ),
  Dr = u(
    '<header class="mb-3 flex items-center justify-between"><h3 class="text-lg font-semibold"> </h3> <div class="flex gap-2"><button class="btn btn-outline btn-sm"><!> Copiar ID</button> <button class="btn btn-primary btn-sm">Aprovar</button> <button class="btn btn-error btn-sm">Rejeitar</button></div></header> <div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border-base-300 border p-3"><div class="flex items-center gap-3"><!> <div><div class="flex items-center gap-2 text-base font-semibold"><span> </span> <span> </span> <!></div> <div class="text-base-content/80 text-sm"><span>Pixels: <b> </b></span> <span class="mx-2">•</span> <span>Reportado: <b> </b></span> <span class="mx-2">•</span> <span>Timeouts: <b> </b></span></div> <!> <!> <!></div></div></div> <div class="rounded-box border-base-300 border p-3"><h4 class="mb-2 text-base font-semibold">Nota do usuário (appeal)</h4> <div class="text-base-content/80 whitespace-pre-wrap break-words text-sm"><p><!></p> <button class="btn btn-primary btn-xs mt-1"><!></button></div></div></div> <div class="rounded-box bg-base-100 border-base-300 mt-4 border p-4 shadow"><div class="mb-2 flex items-center justify-between"><h3 class="text-lg font-semibold"> </h3></div> <div class="mb-3 flex gap-2"><input class="input input-bordered input-sm w-full"/> <button class="btn btn-primary btn-sm"> </button></div> <div class="flex flex-col gap-3"><!> <!></div></div> <div class="rounded-box bg-base-100 border-base-300 mt-4 border p-4 shadow"><div class="mb-2 flex items-center justify-between"><h3 class="text-lg font-semibold">Tickets recebidos</h3></div> <div class="bg-base-200 rounded-box mt-3 grid min-h-[320px] grid-cols-1 gap-4 p-3 md:grid-cols-[320px_1fr]"><section class="flex flex-col gap-3 overflow-auto px-1 pb-1"><!> <!></section> <section class="rounded-box bg-base-100 overflow-auto p-4 shadow"><!></section></div></div>',
    1
  ),
  Pr = u('<span class="loading loading-spinner loading-md"></span>'),
  jr = u(
    '<div class="text-base-content/70 flex h-full items-center justify-center"><!></div>'
  ),
  Nr = u(
    '<div class="bg-base-200 grid h-full grid-cols-[320px_1fr] gap-4 p-4"><section class="flex flex-col gap-3 overflow-auto px-1 pb-1"><div class="mb-3 flex items-center justify-between"><h2 class="text-xl font-semibold">Appeals abertos</h2> <span class="text-base-content/80 mt-0.5 text-sm"> </span> <button class="btn btn-circle btn-sm"><!></button></div> <!> <!> <!></section> <section class="rounded-box bg-base-100 overflow-auto p-4 shadow"><!></section></div>'
  );
function nn(F, G) {
  ws(G, !0);
  let z = X(!1),
    aa = X(!1),
    j = X(xa([])),
    p = X(void 0),
    Wa = xa({ received: 0 }),
    W = X(xa([])),
    ea = X(!1),
    Pa = X(0),
    _a = X(xa([])),
    ua = X(""),
    N = X(void 0);
  const ya = 20;
  hs(() => {
    Ue();
  });
  async function ye() {
    try {
      g(z, !0),
        g(j, await Z.getOpenAppeals(), !0),
        !a(p) && a(j).length > 0 && we(a(j)[0]);
    } catch (l) {
      E.error((l == null ? void 0 : l.message) ?? "Falha ao carregar appeals");
    } finally {
      g(z, !1);
    }
  }
  async function ut(l = 1) {
    if (!(a(j).length >= l))
      try {
        g(aa, !0), await Z.assignAppeals(), await ye();
      } catch (i) {
        E.error(
          (i == null ? void 0 : i.message) ?? "Falha ao buscar novos appeals"
        );
      } finally {
        g(aa, !1);
      }
  }
  async function we(l) {
    g(p, l, !0), g(N, void 0), await $e(l.user.id);
  }
  async function Ue() {
    await Z.assignAppeals(), await ye(), await gt();
  }
  async function $e(l) {
    try {
      g(ea, !0);
      const i = Wa.received,
        w = await Z.getUserTickets({
          userId: l,
          kind: "received",
          page: i,
          pageSize: ya,
        });
      g(_a, await Z.getUserNotes(l).then((m) => m.notes), !0),
        g(W, i === 0 ? w : [...a(W), ...w], !0);
    } catch (i) {
      E.error(
        (i == null ? void 0 : i.message) ??
          "Falha ao carregar tickets do usuário"
      ),
        g(W, [], !0);
    } finally {
      g(ea, !1);
    }
  }
  async function Ae(l, i) {
    var w;
    try {
      g(aa, !0);
      let m = "timeout";
      (w = a(p)) != null && w.user.banReason && (m = "ban"),
        await Z.postResponseAppeal(l, i, m),
        g(
          j,
          a(j).filter((Y) => Y.id !== l),
          !0
        ),
        g(p, a(j)[0] ?? null, !0),
        a(j).length === 0 ? await ut(1) : a(p) && (await $e(a(p).user.id)),
        i ? E.success("Appeal aprovado") : E.warning("Appeal rejeitado");
    } catch (m) {
      E.error((m == null ? void 0 : m.message) ?? "Falha ao aprovar appeal");
    } finally {
      g(aa, !1);
    }
  }
  function bt(l) {
    var i;
    navigator.clipboard.writeText(String(l)),
      E.success(((i = pt) == null ? void 0 : i()) ?? "User ID copied");
  }
  async function ft(l) {
    var w, m, Y;
    if (!((w = a(p)) != null && w.user.id)) return;
    const i = l.trim();
    if (i)
      try {
        g(z, !0),
          await Z.addUserNote((m = a(p)) == null ? void 0 : m.user.id, i),
          (l = ""),
          E.success("Nota adicionada");
        try {
          const U = await Z.getUserNotes(
            (Y = a(p)) == null ? void 0 : Y.user.id
          );
          g(_a, U.notes, !0);
        } catch (U) {
          console.error("Erro ao recarregar notas", U);
        }
      } catch (U) {
        E.error((U == null ? void 0 : U.message) ?? "Falha ao adicionar nota");
      } finally {
        g(z, !1);
      }
  }
  let Ya = xa({}),
    la = xa({});
  async function mt(l, i) {
    if (la[i]) {
      la[i] = !1;
      return;
    }
    if (Ya[i]) {
      la[i] = !0;
      return;
    }
    try {
      la[i] = !0;
      const w = await Z.getModerationTranslate(l);
      Ya[i] = w;
    } catch (w) {
      E.error(w.message), (la[i] = !1);
    }
  }
  async function gt() {
    try {
      g(Pa, await Z.getPendingAppealsCount(), !0);
    } catch (l) {
      E.error(l.message);
    } finally {
      g(z, !1);
    }
  }
  var Ha = Nr();
  Ls("151n1ss", (l) => {
    $s(() => {
      As.title = "openplace - Appeals";
    });
  });
  var Ja = t(Ha),
    Ka = t(Ja),
    Qa = s(t(Ka), 2),
    xt = t(Qa);
  e(Qa);
  var ja = s(Qa, 2);
  ja.__click = Ue;
  var ht = t(ja);
  Xs(ht, { class: "size-4" }), e(ja), e(Ka);
  var Te = s(Ka, 2);
  {
    var yt = (l) => {
      var i = ir();
      v(l, i);
    };
    f(Te, (l) => {
      a(z) && a(j).length === 0 && l(yt);
    });
  }
  var ke = s(Te, 2);
  qa(
    ke,
    17,
    () => a(j),
    (l) => l.id,
    (l, i) => {
      const w = M(() => {
        var R;
        return ((R = a(p)) == null ? void 0 : R.id) === a(i).id;
      });
      var m = lr();
      m.__click = () => we(a(i));
      var Y = t(m);
      {
        let R = M(() => a(i).user.picture ?? void 0);
        Da(Y, {
          class: "size-12",
          get userId() {
            return a(i).user.id;
          },
          get pictureUrl() {
            return a(R);
          },
        });
      }
      var U = s(Y, 2),
        S = t(U),
        wa = t(S),
        Ua = t(wa, !0);
      e(wa);
      var ba = s(wa, 2),
        $a = t(ba);
      e(ba);
      var Aa = s(ba, 2);
      {
        var Na = (R) => {
          var ta = dr(),
            Va = t(ta, !0);
          e(ta), b(() => o(Va, a(i).user.role)), v(R, ta);
        };
        f(Aa, (R) => {
          a(i).user.role !== "user" && R(Na);
        });
      }
      e(S);
      var Ta = s(S, 2),
        Sa = t(Ta, !0);
      e(Ta),
        e(U),
        e(m),
        b(
          (R, ta) => {
            P(
              m,
              1,
              Ga({
                "bg-base-100 ring-primary relative flex gap-2 rounded-2xl p-4 shadow":
                  !0,
                "bg-primary/10 ring-2": a(w),
              })
            ),
              P(S, 1, `text-base font-semibold ${R ?? ""} flex gap-1.5`),
              o(Ua, a(i).user.name),
              o($a, `#${a(i).user.id ?? ""}`),
              o(Sa, ta);
          },
          [
            () => da(a(i).user.id),
            () => new Date(a(i).createdAt).toLocaleString(),
          ]
        ),
        v(l, m);
    }
  );
  var wt = s(ke, 2);
  {
    var Ut = (l) => {
      var i = vr();
      v(l, i);
    };
    f(wt, (l) => {
      !a(z) && a(j).length === 0 && l(Ut);
    });
  }
  e(Ja);
  var Le = s(Ja, 2),
    $t = t(Le);
  {
    var At = (l) => {
        var i = Dr(),
          w = ha(i),
          m = t(w),
          Y = t(m);
        e(m);
        var U = s(m, 2),
          S = t(U);
        S.__click = () => bt(a(p).user.id);
        var wa = t(S);
        xe(wa, { class: "size-4" }), ge(), e(S);
        var Ua = s(S, 2);
        Ua.__click = () => {
          var r;
          return Ae((r = a(p)) == null ? void 0 : r.id, !0);
        };
        var ba = s(Ua, 2);
        (ba.__click = () => {
          var r;
          return Ae((r = a(p)) == null ? void 0 : r.id, !1);
        }),
          e(U),
          e(w);
        var $a = s(w, 2),
          Aa = t($a),
          Na = t(Aa),
          Ta = t(Na);
        {
          let r = M(() => a(p).user.picture ?? void 0);
          Da(Ta, {
            class: "size-14",
            get userId() {
              return a(p).user.id;
            },
            get pictureUrl() {
              return a(r);
            },
          });
        }
        var Sa = s(Ta, 2),
          R = t(Sa),
          ta = t(R),
          Va = t(ta, !0);
        e(ta);
        var Xa = s(ta, 2),
          kt = t(Xa);
        e(Xa);
        var Lt = s(Xa, 2);
        {
          var It = (r) => {
            var n = pr(),
              _ = t(n, !0);
            e(n), b(() => o(_, a(p).user.role)), v(r, n);
          };
          f(Lt, (r) => {
            a(p).user.role !== "user" && r(It);
          });
        }
        e(R);
        var Za = s(R, 2),
          ae = t(Za),
          Ie = s(t(ae)),
          zt = t(Ie, !0);
        e(Ie), e(ae);
        var ee = s(ae, 4),
          ze = s(t(ee)),
          Rt = t(ze, !0);
        e(ze), e(ee);
        var Re = s(ee, 4),
          Ce = s(t(Re)),
          Ct = t(Ce, !0);
        e(Ce), e(Re), e(Za);
        var De = s(Za, 2);
        {
          var Dt = (r) => {
            var n = cr(),
              _ = t(n),
              y = t(_, !0);
            e(_),
              e(n),
              b(
                (d, A) => {
                  P(_, 1, `badge badge-sm border-0 ${d ?? ""} ${A ?? ""}`),
                    o(y, a(p).user.allianceName);
                },
                [() => ct(a(p).user.allianceId), () => da(a(p).user.allianceId)]
              ),
              v(r, n);
          };
          f(De, (r) => {
            a(p).user.allianceId && r(Dt);
          });
        }
        var Pe = s(De, 2);
        {
          var Pt = (r) => {
            var n = _r(),
              _ = t(n),
              y = s(t(_)),
              d = t(y, !0);
            e(y),
              e(_),
              e(n),
              b(
                (A) => o(d, A),
                [() => new Date(a(p).user.timeoutUntil).toLocaleString()]
              ),
              v(r, n);
          };
          f(Pe, (r) => {
            new Date(a(p).user.timeoutUntil).getTime() >= Date.now() && r(Pt);
          });
        }
        var jt = s(Pe, 2);
        {
          var Nt = (r) => {
            var n = ur(),
              _ = t(n),
              y = s(t(_)),
              d = t(y, !0);
            e(y), e(_), e(n), b(() => o(d, a(p).user.banReason)), v(r, n);
          };
          f(jt, (r) => {
            a(p).user.banReason && r(Nt);
          });
        }
        e(Sa), e(Na), e(Aa);
        var je = s(Aa, 2),
          Ne = s(t(je), 2),
          te = t(Ne),
          St = t(te);
        {
          var Bt = (r) => {
              var n = oa();
              b((_) => o(n, _), [() => Ya[a(p).id] ?? sr()]), v(r, n);
            },
            Mt = (r) => {
              var n = oa();
              b(() => o(n, a(p).notes)), v(r, n);
            };
          f(St, (r) => {
            la[a(p).id] ? r(Bt) : r(Mt, !1);
          });
        }
        e(te);
        var se = s(te, 2);
        se.__click = () => {
          var r, n;
          return mt(
            (r = a(p)) == null ? void 0 : r.notes,
            (n = a(p)) == null ? void 0 : n.id
          );
        };
        var Et = t(se);
        {
          var Ft = (r) => {
              var n = oa();
              b((_) => o(n, _), [() => rr()]), v(r, n);
            },
            Ot = (r) => {
              var n = oa();
              b((_) => o(n, _), [() => nr()]), v(r, n);
            };
          f(Et, (r) => {
            la[a(p).id] ? r(Ft) : r(Ot, !1);
          });
        }
        e(se), e(Ne), e(je), e($a);
        var re = s($a, 2),
          ne = t(re),
          Se = t(ne),
          qt = t(Se, !0);
        e(Se), e(ne);
        var oe = s(ne, 2),
          Ba = t(oe);
        Is(Ba);
        var Ma = s(Ba, 2);
        Ma.__click = () => ft(a(ua));
        var Gt = t(Ma, !0);
        e(Ma), e(oe);
        var Be = s(oe, 2),
          Me = t(Be);
        qa(
          Me,
          17,
          () => a(_a),
          (r) => `${r.author.id}-${r.createdAt}`,
          (r, n) => {
            var _ = br(),
              y = t(_),
              d = t(y),
              A = t(d),
              C = s(A),
              O = t(C, !0);
            e(C), e(d);
            var K = s(d, 2),
              fa = t(K, !0);
            e(K), e(y);
            var H = s(y, 2),
              ka = t(H, !0);
            e(H),
              e(_),
              b(
                (va) => {
                  o(A, `${a(n).author.name ?? ""} #${a(n).author.id ?? ""} `),
                    o(O, a(n).author.role),
                    o(fa, va),
                    o(ka, a(n).note);
                },
                [() => new Date(a(n).createdAt).toLocaleString()]
              ),
              v(r, _);
          }
        );
        var Wt = s(Me, 2);
        {
          var Yt = (r) => {
            var n = fr(),
              _ = t(n, !0);
            e(n), b((y) => o(_, y), [() => tr()]), v(r, n);
          };
          f(Wt, (r) => {
            a(_a).length === 0 && r(Yt);
          });
        }
        e(Be), e(re);
        var Ee = s(re, 2),
          Fe = s(t(Ee), 2),
          ie = t(Fe),
          Oe = t(ie);
        {
          var Ht = (r) => {
            var n = mr();
            v(r, n);
          };
          f(Oe, (r) => {
            a(ea) && r(Ht);
          });
        }
        var Jt = s(Oe, 2);
        qa(
          Jt,
          17,
          () => a(W),
          (r) => r.id,
          (r, n) => {
            const _ = M(() => new Date(a(n).createdAt)),
              y = M(() => {
                var T;
                return ((T = a(N)) == null ? void 0 : T.id) === a(n).id;
              });
            var d = hr();
            d.__click = () => {
              g(N, a(n), !0);
            };
            var A = t(d);
            {
              let T = M(() => a(n).reportedUser.picture ?? void 0);
              Da(A, {
                class: "size-12",
                get userId() {
                  return a(n).reportedUser.id;
                },
                get pictureUrl() {
                  return a(T);
                },
              });
            }
            var C = s(A, 2),
              O = t(C),
              K = t(O),
              fa = t(K, !0);
            e(K);
            var H = s(K, 2),
              ka = t(H);
            e(H);
            var va = s(H, 2);
            {
              var de = (T) => {
                var q = gr();
                let sa;
                var za = t(q, !0);
                e(q),
                  b(() => {
                    (sa = P(q, 1, "badge badge-xs font-semibold", null, sa, {
                      "badge-ghost":
                        a(n).status === "open" || a(n).status === "ignore",
                      "badge-warning": a(n).status === "timeout",
                      "badge-error": a(n).status === "ban",
                    })),
                      o(za, a(n).status);
                  }),
                  v(T, q);
              };
              f(va, (T) => {
                a(n).status && T(de);
              });
            }
            e(O);
            var La = s(O, 2),
              ma = t(La),
              Ea = t(ma, !0);
            e(ma), e(La), e(C);
            var Fa = s(C, 2);
            {
              var Ia = (T) => {
                var q = xr(),
                  sa = t(q);
                _t(sa, () => a(n).reportedUser.role), e(q), v(T, q);
              };
              f(Fa, (T) => {
                a(n).reportedUser.role !== "user" && T(Ia);
              });
            }
            e(d),
              b(
                (T, q) => {
                  P(
                    d,
                    1,
                    Ga({
                      "bg-base-100 ring-primary relative flex gap-2 rounded-2xl p-3 shadow":
                        !0,
                      "bg-primary/10 ring-2": a(y),
                    })
                  ),
                    P(O, 1, `text-base font-semibold ${T ?? ""} flex gap-1.5`),
                    o(fa, a(n).reportedUser.name),
                    o(ka, `#${a(n).reportedUser.id ?? ""}`),
                    o(Ea, q);
                },
                [() => da(a(n).reportedUser.id), () => a(_).toLocaleString()]
              ),
              v(r, d);
          }
        ),
          e(ie);
        var qe = s(ie, 2),
          Kt = t(qe);
        {
          var Qt = (r) => {
              var n = he(),
                _ = ha(n);
              ks(
                _,
                () => a(N).id,
                (y) => {
                  const d = M(() => a(N)),
                    A = M(() => {
                      var x;
                      return (
                        ((x = Hs(a(d).reports, (c) => c.sameIpAccounts ?? 0)) ==
                        null
                          ? void 0
                          : x.sameIpAccounts) ?? 0
                      );
                    });
                  var C = zr(),
                    O = ha(C),
                    K = t(O),
                    fa = t(K),
                    H = s(fa, 5),
                    ka = t(H, !0);
                  e(H);
                  var va = s(H, 2),
                    de = t(va);
                  e(va), e(K), e(O);
                  var La = s(O, 2),
                    ma = t(La),
                    Ea = t(ma);
                  {
                    let x = M(() => a(d).reportedUser.picture ?? void 0);
                    Da(Ea, {
                      class: "size-14",
                      get userId() {
                        return a(d).reportedUser.id;
                      },
                      get pictureUrl() {
                        return a(x);
                      },
                    });
                  }
                  var Fa = s(Ea, 2),
                    Ia = t(Fa),
                    T = t(Ia),
                    q = t(T);
                  e(T);
                  var sa = s(T, 2),
                    za = t(sa),
                    Xt = t(za, !0);
                  e(za);
                  var le = s(za, 2),
                    Zt = t(le);
                  e(le);
                  var Ra = s(le, 2);
                  Ra.__click = () => {
                    navigator.clipboard.writeText(
                      a(d).reportedUser.id.toString()
                    ),
                      E.success(pt());
                  };
                  var as = t(Ra);
                  xe(as, { class: "inline size-4" }), e(Ra);
                  var es = s(Ra, 2);
                  {
                    var ts = (x) => {
                      const c = M(() => a(d).reportedUser.allianceId);
                      var I = yr();
                      I.__click = () => {
                        navigator.clipboard.writeText(String(a(c))),
                          E.success(Js());
                      };
                      var J = t(I),
                        Q = s(J);
                      xe(Q, { class: "size-3" }),
                        e(I),
                        b(
                          (ra, ia, V) => {
                            P(
                              I,
                              1,
                              `tooltip badge badge-sm ml-0.5 border-0 ${
                                ra ?? ""
                              } ${ia ?? ""}`
                            ),
                              na(I, "title", V),
                              o(
                                J,
                                `${
                                  a(d).reportedUser.allianceName ?? "—" ?? ""
                                } `
                              );
                          },
                          [
                            () => ct(a(c)),
                            () => da(a(c)),
                            () => Cs({ allianceId: a(c) }),
                          ]
                        ),
                        v(x, I);
                    };
                    f(es, (x) => {
                      a(d).reportedUser.allianceId != null && x(ts);
                    });
                  }
                  e(sa);
                  var ss = s(sa, 2);
                  {
                    var rs = (x) => {
                      _t(x, () => a(d).reportedUser.role);
                    };
                    f(ss, (x) => {
                      a(d).reportedUser.role !== "user" && x(rs);
                    });
                  }
                  e(Ia);
                  var Ge = s(Ia, 2),
                    ve = t(Ge),
                    We = t(ve),
                    Ye = s(We),
                    ns = t(Ye, !0);
                  e(Ye), e(ve);
                  var He = s(ve, 2);
                  {
                    var os = (x) => {
                      var c = wr(),
                        I = ha(c),
                        J = t(I),
                        Q = s(J),
                        ra = t(Q, !0);
                      e(Q), e(I);
                      var ia = s(I, 2),
                        V = t(ia),
                        pa = s(V),
                        ga = t(pa, !0);
                      e(pa),
                        e(ia),
                        b(
                          (Ca, Oa) => {
                            o(J, `${Ca ?? ""}: `),
                              o(ra, a(d).reportedUser.timeoutCount ?? 0),
                              o(V, `${Oa ?? ""}: `),
                              o(
                                ga,
                                lt[a(d).reportedUser.lastTimeoutReason] ??
                                  a(d).reportedUser.lastTimeoutReason
                              );
                          },
                          [() => Ks(), () => Qs()]
                        ),
                        v(x, c);
                    };
                    f(He, (x) => {
                      a(d).reportedUser.lastTimeoutReason && x(os);
                    });
                  }
                  var pe = s(He, 2),
                    Je = t(pe),
                    Ke = s(Je),
                    is = t(Ke, !0);
                  e(Ke), e(pe);
                  var Qe = s(pe, 2),
                    Ve = t(Qe),
                    ce = s(Ve);
                  let Xe;
                  var ds = t(ce, !0);
                  e(ce), e(Qe), e(Ge), e(Fa), e(ma);
                  var Ze = s(ma, 4);
                  qa(
                    Ze,
                    21,
                    () => a(d).reports,
                    (x) => x.id,
                    (x, c) => {
                      const I = M(
                          () =>
                            a(c).reportedLatitude != null &&
                            a(c).reportedLongitude != null
                        ),
                        J = M(() =>
                          a(I)
                            ? `${dt.url.origin}/?lat=${
                                a(c).reportedLatitude
                              }&lng=${a(c).reportedLongitude}&select=true${
                                a(c).zoom ? `&zoom=${a(c).zoom}` : ""
                              }`
                            : null
                        );
                      var Q = Ir(),
                        ra = t(Q),
                        ia = t(ra);
                      e(ra);
                      var V = s(ra, 2),
                        pa = t(V);
                      {
                        let h = M(() => a(c).reportedByPicture ?? void 0);
                        Da(pa, {
                          class: "size-14",
                          get userId() {
                            return a(c).reportedBy;
                          },
                          get pictureUrl() {
                            return a(h);
                          },
                        });
                      }
                      var ga = s(pa, 2),
                        Ca = t(ga),
                        Oa = t(Ca),
                        _e = s(Oa),
                        ue = t(_e),
                        ls = t(ue, !0);
                      e(ue);
                      var at = s(ue, 2),
                        vs = t(at);
                      e(at), e(_e), e(Ca);
                      var et = s(Ca, 2),
                        be = t(et),
                        tt = t(be),
                        fe = s(tt),
                        ps = t(fe, !0);
                      e(fe), e(be);
                      var me = s(be, 2),
                        st = t(me),
                        rt = s(st),
                        cs = t(rt, !0);
                      e(rt), e(me);
                      var nt = s(me, 2);
                      {
                        var _s = (h) => {
                          var $ = Ur(),
                            k = t($),
                            L = s(k),
                            D = t(L);
                          vt(D, { class: "inline size-4" }),
                            ge(2),
                            e(L),
                            e($),
                            b(
                              (B) => {
                                o(k, `${B ?? ""}: `), na(L, "href", a(J));
                              },
                              [() => Ms()]
                            ),
                            v(h, $);
                        };
                        f(nt, (h) => {
                          a(I) && h(_s);
                        });
                      }
                      var us = s(nt, 2);
                      {
                        var bs = (h) => {
                          var $ = $r(),
                            k = t($),
                            L = s(k),
                            D = t(L);
                          vt(D, { class: "inline size-4" }),
                            ge(2),
                            e(L),
                            e($),
                            b(
                              (B) => {
                                o(k, `${B ?? ""}: `),
                                  na(
                                    L,
                                    "href",
                                    `${dt.url.origin}/?lat=${
                                      a(c).lastPixelLatitude
                                    }&lng=${
                                      a(c).lastPixelLongitude
                                    }&select=true`
                                  );
                              },
                              [() => Es()]
                            ),
                            v(h, $);
                        };
                        f(us, (h) => {
                          a(c).lastPixelLatitude != null &&
                            a(c).lastPixelLongitude != null &&
                            h(bs);
                        });
                      }
                      e(et), e(ga), e(V);
                      var ot = s(V, 2);
                      {
                        var fs = (h) => {
                          var $ = Ar(),
                            k = t($),
                            L = t(k, !0);
                          e(k);
                          var D = s(k, 2),
                            B = t(D, !0);
                          e(D),
                            e($),
                            b(
                              (ca) => {
                                o(L, ca), o(B, a(c).notes);
                              },
                              [() => Ds()]
                            ),
                            v(h, $);
                        };
                        f(ot, (h) => {
                          a(c).notes && h(fs);
                        });
                      }
                      var ms = s(ot, 2);
                      {
                        var gs = (h) => {
                            var $ = kr(),
                              k = t($),
                              L = t(k);
                            {
                              var D = (ca) => {
                                var it = Tr();
                                b(() => na(it, "src", a(c).imageUrl)),
                                  v(ca, it);
                              };
                              f(L, (ca) => {
                                a(c).imageUrl && ca(D);
                              });
                            }
                            var B = s(L, 2);
                            Fs(B, {
                              class:
                                "absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-[87%]",
                            }),
                              e(k),
                              e($),
                              b(() => na(k, "href", a(J))),
                              v(h, $);
                          },
                          xs = (h) => {
                            var $ = he(),
                              k = ha($);
                            {
                              var L = (D) => {
                                var B = Lr(),
                                  ca = t(B);
                                e(B),
                                  b(() => na(ca, "src", a(c).imageUrl)),
                                  v(D, B);
                              };
                              f(
                                k,
                                (D) => {
                                  a(c).imageUrl && D(L);
                                },
                                !0
                              );
                            }
                            v(h, $);
                          };
                        f(ms, (h) => {
                          a(J) ? h(gs) : h(xs, !1);
                        });
                      }
                      e(Q),
                        b(
                          (h, $, k, L, D, B) => {
                            o(ia, `${h ?? ""} #${a(c).id ?? ""}`),
                              o(Oa, `${$ ?? ""}: `),
                              P(_e, 1, `font-semibold ${k ?? ""}`),
                              o(ls, a(c).reportedByName),
                              o(vs, `#${a(c).reportedBy ?? ""}`),
                              o(tt, `${L ?? ""}: `),
                              P(fe, 1, `font-bold ${Rs[a(c).reason] ?? ""}`),
                              o(ps, lt[a(c).reason] ?? a(c).reason),
                              o(st, `${D ?? ""}: `),
                              o(cs, B);
                          },
                          [
                            () => js(),
                            () => Ns(),
                            () => da(a(c).reportedBy),
                            () => Ss(),
                            () => Bs(),
                            () => new Date(a(c).createdAt).toLocaleString(),
                          ]
                        ),
                        v(x, Q);
                    }
                  ),
                    e(Ze),
                    e(La),
                    b(
                      (x, c, I, J, Q, ra, ia, V, pa, ga) => {
                        na(K, "title", a(d).id),
                          o(fa, `${x ?? ""}: ${c ?? ""} `),
                          P(H, 1, I),
                          o(ka, a(d).assignedUser.name),
                          P(va, 1, J),
                          o(de, `#${a(d).assignedUser.id ?? ""}`),
                          o(q, `${Q ?? ""}:`),
                          P(sa, 1, `text-base font-semibold ${ra ?? ""}`),
                          o(Xt, a(d).reportedUser.name),
                          o(Zt, `#${a(d).reportedUser.id ?? ""}`),
                          na(Ra, "title", ia),
                          o(We, `${V ?? ""}: `),
                          o(ns, a(d).reportedUser.reportedCount ?? 0),
                          o(Je, `${pa ?? ""}: `),
                          o(is, a(d).reportedUser.pixelsPainted ?? 0),
                          o(Ve, `${ga ?? ""}: `),
                          (Xe = P(ce, 1, "font-semibold", null, Xe, {
                            "text-red-600": a(A) >= 7,
                          })),
                          o(ds, a(A));
                      },
                      [
                        () => Os(),
                        () => a(d).id.split("-").at(-1),
                        () => Ga(da(a(d).assignedUser.id)),
                        () => Ga(da(a(d).assignedUser.id)),
                        () => qs(),
                        () => da(a(d).reportedUser.id),
                        () => Gs({ userId: a(d).reportedUser.id }),
                        () => Ws(),
                        () => Ps(),
                        () => Ys(),
                      ]
                    ),
                    v(y, C);
                }
              ),
                v(r, n);
            },
            Vt = (r) => {
              var n = Cr(),
                _ = t(n);
              {
                var y = (A) => {
                    var C = Rr();
                    v(A, C);
                  },
                  d = (A) => {
                    var C = oa();
                    b((O) => o(C, O), [() => Vs()]), v(A, C);
                  };
                f(_, (A) => {
                  a(ea) ? A(y) : A(d, !1);
                });
              }
              e(n), v(r, n);
            };
          f(Kt, (r) => {
            a(N) ? r(Qt) : r(Vt, !1);
          });
        }
        e(qe),
          e(Fe),
          e(Ee),
          b(
            (r, n, _, y) => {
              o(Y, `Appeal #${a(p).id ?? ""}`),
                (Ua.disabled = a(aa)),
                (ba.disabled = a(aa)),
                o(Va, a(p).user.name),
                o(kt, `#${a(p).user.id ?? ""}`),
                o(zt, a(p).user.pixelsPainted ?? 0),
                o(Rt, a(p).user.reportedCount ?? 0),
                o(Ct, a(p).user.timeoutCount ?? 0),
                o(qt, r),
                na(Ba, "placeholder", n),
                (Ma.disabled = _),
                o(Gt, y);
            },
            [() => ar(), () => er(), () => !a(ua).trim(), () => Zs()]
          ),
          zs(
            Ba,
            () => a(ua),
            (r) => g(ua, r)
          ),
          v(l, i);
      },
      Tt = (l) => {
        var i = jr(),
          w = t(i);
        {
          var m = (U) => {
              var S = Pr();
              v(U, S);
            },
            Y = (U) => {
              var S = oa("Nenhum appeal selecionado");
              v(U, S);
            };
          f(w, (U) => {
            a(z) ? U(m) : U(Y, !1);
          });
        }
        e(i), v(l, i);
      };
    f($t, (l) => {
      a(p) ? l(At) : l(Tt, !1);
    });
  }
  e(Le),
    e(Ha),
    b(() => {
      o(xt, `Pendentes: ${a(Pa) ?? ""}`), (ja.disabled = a(z));
    }),
    v(F, Ha),
    Us();
}
ys(["click"]);
export { nn as component };

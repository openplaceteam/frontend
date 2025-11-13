import "../chunks/ClL9a_Zs.js";
import {
  k as Vs,
  p as Hs,
  l as M,
  m as Be,
  D as Ks,
  g as e,
  o as l,
  f as m,
  d as a,
  s as r,
  t as b,
  v as Qs,
  b as v,
  c as Ws,
  e as Ys,
  $ as Zs,
  r as t,
  w as Ve,
  a as _e,
  u as J,
  x as Js,
  q as Me,
  n as jt,
} from "../chunks/iK5FT0Sa.js";
import { s as n } from "../chunks/BHnQYZx5.js";
import { i as f } from "../chunks/6Mc7KQD2.js";
import { k as Xs } from "../chunks/COcZhybn.js";
import { e as Et } from "../chunks/DcUGKLlr.js";
import { h as en } from "../chunks/DDOVU0Bm.js";
import { r as Ta, a as q, c as Ut, s as we } from "../chunks/Cw1VVyw7.js";
import { b as ka } from "../chunks/yt7z1efG.js";
import { g as tn } from "../chunks/E8vEVpET.js";
import { p as Na } from "../chunks/D_G6cexA.js";
import {
  a as ue,
  t as Q,
  s as an,
  b as $r,
  u as rn,
} from "../chunks/BcevhAVP.js";
import {
  D as sn,
  l as nn,
  a as on,
  p as dn,
  R as ln,
  s as vn,
  d as cn,
  c as un,
} from "../chunks/DKIm2qqY.js";
import { P as Ct } from "../chunks/DUpX1e05.js";
import { C as La, c as _n } from "../chunks/2xVnDudW.js";
import { G as pn, T as bn } from "../chunks/DnpWy_rL.js";
import { p as Ir, L as Dr, d as mn } from "../chunks/CbE2L3A6.js";
import {
  g as Tr,
  h as kr,
  n as Nr,
  u as fn,
  r as xn,
  a as gn,
  b as hn,
  t as yn,
  c as wn,
  l as Un,
  M as $n,
  d as In,
  e as Dn,
  f as Tn,
  m as kn,
  i as Nn,
  j as Ln,
  k as An,
} from "../chunks/x172pvsV.js";
import { R as Lr } from "../chunks/DIrPyiFz.js";
import { g as H } from "../chunks/DQcFTXWv.js";
import { r as Ar } from "../chunks/C4amkYCn.js";
import { a as Rn } from "../chunks/D6qiv33a.js";
import { l as Pn } from "../chunks/D28eA48x.js";
import { a as Sn, n as Rr } from "../chunks/CtNRy5kr.js";
import { e as zn } from "../chunks/VeD2qHkI.js";
import { s as Bn } from "../chunks/BQsyJ3Sw.js";
import { n as Mn, a as jn, b as En } from "../chunks/BGlGAxl5.js";
import { l as Cn } from "../chunks/BpqyV1PE.js";
import { g as et, a as Fn } from "../chunks/UjG3PxiF.js";
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
      _ = new w.Error().stack;
    _ &&
      ((w._sentryDebugIds = w._sentryDebugIds || {}),
      (w._sentryDebugIds[_] = "47ffc276-b9c7-45ef-be4d-632ff82e3d29"),
      (w._sentryDebugIdIdentifier =
        "sentry-dbid-47ffc276-b9c7-45ef-be4d-632ff82e3d29"));
  })();
} catch {}
const On = () => "Search user",
  qn = () => "Buscar usuário",
  Aa = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? On() : qn()),
  Gn = () => "Verifications",
  Vn = () => "Verificações",
  Hn = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? Gn() : Vn()),
  Kn = () => "Product",
  Qn = () => "Produto",
  Wn = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? Kn() : Qn()),
  Yn = () => "Price",
  Zn = () => "Preço",
  Jn = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? Yn() : Zn()),
  Xn = () => "Amount",
  eo = () => "Quantidade",
  to = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? Xn() : eo()),
  ao = () => "Date",
  ro = () => "Data",
  so = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? ao() : ro()),
  no = () => "No purchases",
  oo = () => "Sem compras",
  io = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? no() : oo()),
  lo = () => "Received reports",
  vo = () => "Reportes recebidos",
  co = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? lo() : vo()),
  uo = () => "Sent reports",
  _o = () => "Reportes enviados",
  po = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? uo() : _o()),
  bo = () => "Handled reports",
  mo = () => "Reportes tratados",
  fo = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? bo() : mo()),
  xo = () => "Received",
  go = () => "Recebidos",
  ho = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? xo() : go()),
  yo = () => "Sent",
  wo = () => "Enviados",
  Uo = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? yo() : wo()),
  $o = () => "Handled",
  Io = () => "Tratados",
  Do = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? $o() : Io()),
  To = () => "Associated tickets",
  ko = () => "Tickets atrelados",
  No = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? To() : ko()),
  Lo = () => "Moderator performance",
  Ao = () => "Desempenho do moderador",
  Ro = (w = {}, _ = {}) => ((_.locale ?? H()) === "en" ? Lo() : Ao()),
  Pr = (w, _ = Js) => {
    var D = Po();
    let pe;
    var N = a(D);
    {
      var Ue = (X) => {
          var $e = Me("MOD");
          v(X, $e);
        },
        o = (X) => {
          var $e = Ve(),
            je = _e($e);
          {
            var Ft = (P) => {
                var G = Me("GM");
                v(P, G);
              },
              Ot = (P) => {
                var G = Me("ADMIN");
                v(P, G);
              };
            f(
              je,
              (P) => {
                _() === "global_moderator" ? P(Ft) : P(Ot, !1);
              },
              !0
            );
          }
          v(X, $e);
        };
      f(N, (X) => {
        _() === "moderator" ? X(Ue) : X(o, !1);
      });
    }
    t(D),
      b(
        () =>
          (pe = q(D, 1, "badge badge-sm ml-0.5 font-semibold", null, pe, {
            "badge-secondary": _() === "moderator" || _() == "global_moderator",
            "badge-warning": _() === "admin",
          }))
      ),
      v(w, D);
  };
var Po = m("<span><!></span>"),
  So = m(
    '<div class="flex items-center gap-3"><span class="loading loading-spinner loading-sm"></span> <span> </span></div>'
  ),
  zo = m('<div class="text-error"> </div>'),
  Bo = m('<div class="text-base-content/70"> </div>'),
  Mo = m('<span class="badge badge-sm"> </span>'),
  jo = m('<span class="badge badge-error badge-outline"> </span>'),
  Eo = m('<span class="badge badge-warning badge-outline"> </span>'),
  Co = m('<span class="badge badge-success badge-outline">OK</span>'),
  Fo = m('<button class="btn btn-outline btn-sm"><!> Timeout</button>'),
  Oo = m('<!> <button class="btn btn-error btn-sm"><!> Ban</button>', 1),
  qo = m(
    '<div class="flex flex-col gap-4 md:flex-row md:justify-between"><div class="flex items-center gap-4"><!> <div class="flex flex-col"><div class="flex items-center gap-2 text-lg font-semibold"><span> </span> <span> </span> <button class="btn btn-ghost btn-xs"><!> </button> <!></div> <div class="text-base-content/80 flex flex-wrap items-center gap-2 text-sm"><span>Alliance: <b> </b> <!></span> <span>•</span> <span>Role: <b> </b></span></div></div></div> <div class="flex flex-col items-start gap-2 md:items-end"><div class="flex items-center gap-2"><!></div> <div class="flex gap-2"><!> <button class="btn btn-outline btn-sm">Remove Timeout</button> <button class="btn btn-outline btn-sm">Unban</button></div></div></div>'
  ),
  Go = m('<span class="badge badge-xs"> </span>'),
  Vo = m(
    '<div class="rounded-box border-base-300 border p-3"><div class="flex justify-between text-sm"><span class="font-medium"> <!></span> <span class="text-base-content/80"> </span></div> <div class="mt-1 whitespace-pre-wrap break-words"> </div></div>'
  ),
  Ho = m('<div class="text-base-content/70 text-sm"> </div>'),
  Ko = m(
    '<tr><td> </td><td class="text-right"> </td><td> </td><td class="text-right"> </td></tr>'
  ),
  Qo = m('<tr><td colspan="4" class="text-base-content/70"> </td></tr>'),
  Wo = m('<div class="text-base-content/70 text-sm"> </div>'),
  Yo = m(
    '<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><div class="rounded-box border-base-300 border p-3"><div class="text-base-content/70 text-xs">Closed tickets</div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box border-base-300 border p-3"><div class="text-base-content/70 text-xs">Bans</div> <div class="text-xl font-bold"> <span class="text-base-content/70 text-sm"> </span></div></div> <div class="rounded-box border-base-300 border p-3"><div class="text-base-content/70 text-xs">Ignored</div> <div class="text-xl font-bold"> <span class="text-base-content/70 text-sm"> </span></div></div> <div class="rounded-box border-base-300 border p-3"><div class="text-base-content/70 text-xs">Timeouts</div> <div class="text-xl font-bold"> <span class="text-base-content/70 text-sm"> </span></div></div></div>'
  ),
  Zo = m(
    '<div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><h3 class="mb-3 text-lg font-semibold"> </h3> <!></div>'
  ),
  Jo = m(
    '<div class="flex items-center justify-center py-6"><span class="loading loading-spinner loading-md"></span></div>'
  ),
  Xo = m("<span> </span>"),
  ei = m('<div class="absolute bottom-3 right-3"><!></div>'),
  ti = m(
    '<button><!> <div class="flex flex-col text-start"><span><span> </span> <span> </span> <!></span> <div class="flex items-center gap-2"><span class="text-base-content/80 text-xs font-medium"> </span></div></div> <!></button>'
  ),
  ai = m('<div class="text-base-content/70 mt-4 text-center"> </div>'),
  ri = m("<button> <!></button>"),
  si = m(
    '<span> <span class="font-semibold"> </span></span> <span> <span class="font-semibold"> </span></span>',
    1
  ),
  ni = m(
    '<span> <a target="_blank"><!> <span class="link">Link</span></a></span>'
  ),
  oi = m(
    '<span> <a target="_blank"><!> <span class="link">Link</span></a></span>'
  ),
  ii = m(
    '<div><h5 class="font-semibold"> </h5> <p class="text-base-content/80 text-sm"> </p></div>'
  ),
  di = m(
    '<img class="border-base-content/20 mx-auto max-h-[70vh] w-max border" alt="Report location"/>'
  ),
  li = m(
    '<div class="grid grid-cols-1 items-center gap-2"><a class="relative h-max rounded-md" title="Report location" target="_blank"><!> <!></a></div>'
  ),
  vi = m(
    '<div class="mt-2"><img class="border-base-content/20 mx-auto max-h-[70vh] w-max border" alt="Reported location"/></div>'
  ),
  ci = m(
    '<div class="flex flex-col gap-3"><h5 class="text-primary text-base font-semibold"> </h5> <div class="flex gap-3"><!> <div><span class="text-base"> <span><span> </span> <span> </span></span></span> <div class="flex flex-col text-sm"><span class="text-base"> <span> </span></span> <span class="mt-1"> <span class="font-semibold"> </span></span> <!> <!></div></div></div> <!> <!></div>'
  ),
  ui = m(
    '<header class="bg-base-100 sticky top-0 z-10 flex items-center justify-between px-4 pb-3 pt-4"><h4 class="text-lg font-semibold"> <span>|</span> <span>Tratado por:</span> <span> </span> <span> </span></h4></header> <div class="px-4 pb-6"><section class="flex gap-3"><!> <div><span class="text-base"><span> </span> <span><span> </span> <span> </span> <button><!></button> <!></span> <!></span> <div class="flex flex-col text-sm"><span> <span class="font-semibold"> </span></span> <!> <span> <span class="font-semibold"> </span></span> <span> <span> </span></span></div></div></section> <span class="divider"></span> <section class="mt-4 flex flex-col gap-4"></section></div>',
    1
  ),
  _i = m('<span class="loading loading-spinner loading-md"></span>'),
  pi = m(
    '<div class="text-base-content/70 flex h-full items-center justify-center"><!></div>'
  ),
  bi = m(
    '<div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"><div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs">Timeouts</div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3 sm:col-span-2 xl:col-span-1"><div class="text-base-content/70 text-xs">Droplets</div> <div class="flex items-center gap-2"><div class="text-xl font-bold"> </div> <div class="flex items-center gap-2"><input class="input input-bordered input-xs w-24" type="number" placeholder="+/- valor"/> <button class="btn btn-primary btn-xs"> </button></div></div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3 sm:col-span-2 xl:col-span-1"><div class="text-base-content/70 text-xs"> </div> <div class="text-sm"><div>Email: <b class="text-success"> </b></div> <div>Phone: <b> </b></div> <div>Discord: <b> </b></div></div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3 sm:col-span-2 xl:col-span-1"><div class="text-base-content/70 text-xs"> </div> <button class="btn btn-primary btn-xs"> </button></div></div> <div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div class="mb-2 flex items-center justify-between"><h3 class="text-lg font-semibold"> </h3></div> <div class="mb-3 flex gap-2"><input class="input input-bordered input-sm w-full"/> <button class="btn btn-primary btn-sm"> </button></div> <div class="flex flex-col gap-3"><!> <!></div></div> <div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div class="mb-2 flex items-center justify-between"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-outline btn-sm"><!> </button></div> <div class="max-h-80 overflow-auto"><table class="table-sm table"><thead><tr><th> </th><th class="text-right"> </th><th> </th><th class="text-right"> </th></tr></thead><tbody><!><!></tbody></table></div></div> <!> <div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><h3 class="mb-3 text-lg font-semibold"> </h3> <div class="tabs tabs-boxed gap-2"><button> </button> <button> </button> <button> </button></div> <div class="bg-base-200 rounded-box mt-3 grid min-h-[420px] grid-cols-1 gap-4 p-3 md:grid-cols-[320px_1fr]"><section class="flex flex-col gap-3 px-1 pb-1 max-h-[80svh] overflow-auto"><div class="mb-2 flex items-center justify-between"><div class="flex items-center gap-2"><h3 class="text-lg font-semibold"><!></h3></div> <button class="btn btn-circle btn-sm"><!></button></div> <!> <!> <!> <div class="mt-2 flex justify-end"><button class="btn btn-sm"> </button></div></section> <section class="rounded-box bg-base-100 shadow max-h-[80svh] overflow-auto"><!></section></div></div>',
    1
  ),
  mi = m(
    '<section class="flex flex-col gap-4 p-4"><div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><form class="flex flex-col gap-2 sm:flex-row sm:items-end"><label class="form-control w-full sm:max-w-xs"><span class="label-text text-sm"> </span> <input class="input input-bordered input-sm" placeholder="User ID"/></label> <div class="flex gap-2"><button class="btn btn-primary btn-sm"> </button> <button class="btn btn-outline btn-sm"><!> </button></div></form></div> <div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><!></div> <!> <!></section>'
  );
function Hi(w, _) {
  Hs(_, !0);
  let D = M(""),
    pe = M(null),
    N = M(!1),
    Ue = M(null),
    o = M(null),
    X = M(Be([])),
    $e = M(""),
    je = M(Be([])),
    Ft = M(0),
    Ot = M(!0),
    P = M(null),
    G = M("received");
  Be([]), Be([]), Be([]);
  let $t = M(!1),
    qt = M("timeout"),
    It = M(null);
  const Sr = [-23.551814832869923, -46.63379610146964],
    zr = 1;
  let Dt = M(""),
    Ee = M(!1),
    ke = M(Be([])),
    Ne = M(void 0),
    Gt = Be({ received: 0, sent: 0, handled: 0 });
  const Br = 20;
  let tt = Be(new Set());
  function Ra() {
    const s = Number(e(Dt));
    if (!Number.isFinite(s) || s === 0) {
      Q.error("Informe um número diferente de 0");
      return;
    }
    qr(s), l(Dt, "");
  }
  function Mr() {
    const s = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="256">
      <rect width="100%" height="100%" fill="#111827"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
            font-family="sans-serif" font-size="28" fill="#F9FAFB">
        Action from Admin Panel
      </text>
    </svg>`;
    return Promise.resolve(new Blob([s], { type: "image/svg+xml" }));
  }
  function Pa(s) {
    return {
      id: s.id,
      name: s.name ?? `#${s.id}`,
      picture: s.picture ?? void 0,
      allianceId: 0,
      allianceName: "",
      equippedFlag: 0,
    };
  }
  function jr() {
    e(o) && (l(qt, "timeout"), l(It, Pa(e(o)), !0), l($t, !0));
  }
  function Er() {
    e(o) && (l(qt, "ban"), l(It, Pa(e(o)), !0), l($t, !0));
  }
  Ks(() => {
    const s = Na.url.searchParams.get("id"),
      u = s ? Number(s) : null;
    u !== e(pe) && (l(pe, u, !0), s && l(D, s, !0)),
      e(pe) != null && !isNaN(e(pe)) ? za() : (l(o, null), l(Ue, null));
  });
  function Sa(s) {
    if (!s) return "—";
    const u = new Date(s);
    return isNaN(u.getTime()) ? "—" : u.toLocaleString();
  }
  function Vt(s, u) {
    if (!u) return "0.00%";
    const x = (s / u) * 100;
    return `${(Math.round(x * 100) / 100).toFixed(2)}%`;
  }
  function Cr(s, u = "Copied!") {
    navigator.clipboard.writeText(s), Q.success(u);
  }
  function Ht(s) {
    if (!s) return !1;
    const u = new Date(s).getTime();
    return !isNaN(u) && u > Date.now();
  }
  async function He(s, u = !1) {
    if (e(o))
      try {
        l(Ee, !0),
          u && ((Gt[s] = 0), l(ke, [], !0), l(Ne, void 0), tt.delete(s));
        const x = Gt[s],
          F = await ue.getUserTickets({
            userId: e(o).id,
            kind: s,
            page: x,
            pageSize: Br,
          });
        l(ke, x === 0 ? F : [...e(ke), ...F], !0),
          !e(Ne) && e(ke).length > 0 && l(Ne, e(ke)[0], !0),
          tt.add(s);
      } catch (x) {
        console.error("Erro ao carregar mini moderation", s, x),
          Q.error(
            (x == null ? void 0 : x.message) ?? "Falha ao carregar tickets"
          );
      } finally {
        l(Ee, !1);
      }
  }
  async function za() {
    if (!e(pe) || isNaN(e(pe))) {
      l(o, null), l(Ue, null);
      return;
    }
    try {
      l(N, !0), l(Ue, null);
      const s = await ue.getUserInfoFull(e(pe));
      if (!s) {
        l(o, null), l(Ue, "User not found");
        return;
      }
      s.timeout_until && !Ht(s.timeout_until) && (s.timeout_until = null),
        l(o, s, !0),
        Gr(),
        l(N, !1),
        l(Ft, 0);
      try {
        const u = await ue.getUserPurchases(s.id);
        l(
          je,
          u.sort(
            (x, F) =>
              new Date(F.createdAt).getTime() - new Date(x.createdAt).getTime()
          ),
          !0
        );
      } catch (u) {
        console.error("Erro ao carregar compras", u), l(je, [], !0), l(Ot, !1);
      }
      if ((l(P, null), s.role !== "user"))
        try {
          const u = await ue.getModeratorClosedTicketStats(s.id);
          l(P, u, !0);
        } catch (u) {
          console.error("Moderator stats error", u), l(P, null);
        }
      await He("received", !0);
    } catch (s) {
      l(Ue, (s == null ? void 0 : s.message) ?? "Erro ao carregar usuário", !0);
    } finally {
      l(N, !1);
    }
  }
  async function Ba() {
    const s = Number(e(D).trim());
    if (!s || isNaN(s)) {
      Q.error("Informe um ID numérico por enquanto");
      return;
    }
    tn(`/admin/users?id=${s}`);
  }
  async function Fr() {
    if (e(o))
      try {
        l(N, !0),
          await ue.removeBan(e(o).id),
          (e(o).ban_reason = null),
          Q.success("Ban removido");
      } catch (s) {
        Q.error((s == null ? void 0 : s.message) ?? "Falha ao remover ban");
      } finally {
        l(N, !1);
      }
  }
  async function Or() {
    if (e(o))
      try {
        l(N, !0),
          await ue.removeTimeout(e(o).id),
          (e(o).timeout_until = null),
          Q.success("Timeout removido");
      } catch (s) {
        Q.error((s == null ? void 0 : s.message) ?? "Falha ao remover timeout");
      } finally {
        l(N, !1);
      }
  }
  async function qr(s) {
    e(o) &&
      (await ue.postSetUserDroplets(e(o).id, s),
      (e(o).droplets = Math.max(0, (e(o).droplets ?? 0) + s)),
      Ma(
        `Droplets ${s >= 0 ? "+" : "-"}${Math.abs(s)}, agora ${e(o).droplets}`
      ));
  }
  async function Gr() {
    if (e(o) && e(o))
      try {
        const s = await ue.getUserNotes(e(o).id);
        l(X, s.notes, !0);
      } catch (s) {
        console.error("Erro ao carregar notas", s), l(X, [], !0);
      }
  }
  async function Ma(s) {
    if (!e(o)) return;
    const u = s.trim();
    if (u)
      try {
        l(N, !0),
          await ue.addUserNote(e(o).id, u),
          (s = ""),
          Q.success("Nota adicionada");
        try {
          const x = await ue.getUserNotes(e(o).id);
          l(X, x.notes, !0);
        } catch (x) {
          console.error("Erro ao recarregar notas", x);
        }
      } catch (x) {
        Q.error((x == null ? void 0 : x.message) ?? "Falha ao adicionar nota");
      } finally {
        l(N, !1);
      }
  }
  function Vr() {
    var te;
    const s = ["id", "product_name", "price", "amount", "createdAt"].join(","),
      u = e(je).map((se) =>
        [se.id, se.product_name, se.price, se.amount, se.createdAt].join(",")
      ),
      x = [s, ...u].join(`
`),
      F = new Blob([x], { type: "text/csv;charset=utf-8;" }),
      W = URL.createObjectURL(F),
      ee = document.createElement("a");
    (ee.href = W),
      (ee.download = `purchases_user_${
        ((te = e(o)) == null ? void 0 : te.id) ?? "unknown"
      }.csv`),
      ee.click(),
      URL.revokeObjectURL(W);
  }
  async function Hr() {
    if (e(o))
      try {
        l(N, !0), await ue.deleteAllUserSessions(e(o).id), Q.success(vn());
      } catch (s) {
        Q.error((s == null ? void 0 : s.message) ?? cn());
      } finally {
        l(N, !1);
      }
  }
  var Kt = mi();
  en("1p497kv", (s) => {
    Ys(() => {
      Zs.title = "Wplace - Admin - Users";
    });
  });
  var Qt = a(Kt),
    Wt = a(Qt),
    Yt = a(Wt),
    Zt = a(Yt),
    Kr = a(Zt, !0);
  t(Zt);
  var ja = r(Zt, 2);
  Ta(ja), t(Yt);
  var Ea = r(Yt, 2),
    at = a(Ea);
  at.__click = Ba;
  var Qr = a(at, !0);
  t(at);
  var Tt = r(at, 2);
  Tt.__click = za;
  var Ca = a(Tt);
  Lr(Ca, { class: "size-4" });
  var Wr = r(Ca);
  t(Tt), t(Ea), t(Wt), t(Qt);
  var Jt = r(Qt, 2),
    Yr = a(Jt);
  {
    var Zr = (s) => {
        var u = So(),
          x = r(a(u), 2),
          F = a(x, !0);
        t(x),
          t(u),
          b(
            (W) => n(F, W),
            [
              () => {
                var W;
                return ((W = Pn) == null ? void 0 : W()) ?? "Loading...";
              },
            ]
          ),
          v(s, u);
      },
      Jr = (s) => {
        var u = Ve(),
          x = _e(u);
        {
          var F = (ee) => {
              var te = zo(),
                se = a(te, !0);
              t(te), b(() => n(se, e(Ue))), v(ee, te);
            },
            W = (ee) => {
              var te = Ve(),
                se = _e(te);
              {
                var rt = (Le) => {
                    var ne = Bo(),
                      Ie = a(ne, !0);
                    t(ne),
                      b(
                        (De) => n(Ie, De),
                        [
                          () => {
                            var De;
                            return (
                              ((De = Rr) == null ? void 0 : De()) ??
                              "No user selected"
                            );
                          },
                        ]
                      ),
                      v(Le, ne);
                  },
                  kt = (Le) => {
                    var ne = qo(),
                      Ie = a(ne),
                      De = a(Ie);
                    {
                      let U = J(() => e(o).picture ?? void 0);
                      Ct(De, {
                        class: "size-16 border",
                        get userId() {
                          return e(o).id;
                        },
                        get pictureUrl() {
                          return e(U);
                        },
                      });
                    }
                    var st = r(De, 2),
                      nt = a(st),
                      Ce = a(nt),
                      ot = a(Ce, !0);
                    t(Ce);
                    var it = r(Ce, 2),
                      Nt = a(it);
                    t(it);
                    var Ke = r(it, 2);
                    Ke.__click = () => {
                      var U;
                      return Cr(
                        String((U = e(o)) == null ? void 0 : U.id),
                        "User ID copied"
                      );
                    };
                    var Qe = a(Ke);
                    La(Qe, { class: "size-3.5" });
                    var Lt = r(Qe);
                    t(Ke);
                    var dt = r(Ke, 2);
                    {
                      var Xt = (U) => {
                        var T = Mo(),
                          be = a(T, !0);
                        t(T), b(() => n(be, e(o).role)), v(U, T);
                      };
                      f(dt, (U) => {
                        e(o).role !== "user" && U(Xt);
                      });
                    }
                    t(nt);
                    var lt = r(nt, 2),
                      Ae = a(lt),
                      Re = r(a(Ae)),
                      ea = a(Re, !0);
                    t(Re);
                    var vt = r(Re, 2);
                    {
                      var ct = (U) => {
                        var T = Me();
                        b(() => n(T, `(#${e(o).alliance_id ?? ""})`)), v(U, T);
                      };
                      f(vt, (U) => {
                        e(o).alliance_id && U(ct);
                      });
                    }
                    t(Ae);
                    var At = r(Ae, 4),
                      ut = r(a(At)),
                      _t = a(ut, !0);
                    t(ut), t(At), t(lt), t(st), t(Ie);
                    var pt = r(Ie, 2),
                      bt = a(pt),
                      mt = a(bt);
                    {
                      var ft = (U) => {
                          var T = jo(),
                            be = a(T);
                          t(T),
                            b(() =>
                              n(
                                be,
                                `BANNED${
                                  e(o).ban_reason ? ` (${e(o).ban_reason})` : ""
                                }`
                              )
                            ),
                            v(U, T);
                        },
                        ta = (U) => {
                          var T = Ve(),
                            be = _e(T);
                          {
                            var Fe = (oe) => {
                                var ie = Eo(),
                                  de = a(ie);
                                t(ie),
                                  b(
                                    (Pe) => n(de, `TIMEOUT until ${Pe ?? ""}`),
                                    [() => Sa(e(o).timeout_until)]
                                  ),
                                  v(oe, ie);
                              },
                              me = (oe) => {
                                var ie = Co();
                                v(oe, ie);
                              };
                            f(
                              be,
                              (oe) => {
                                Ht(e(o).timeout_until) ? oe(Fe) : oe(me, !1);
                              },
                              !0
                            );
                          }
                          v(U, T);
                        };
                      f(mt, (U) => {
                        e(o).ban_reason ? U(ft) : U(ta, !1);
                      });
                    }
                    t(bt);
                    var xt = r(bt, 2),
                      We = a(xt);
                    {
                      var aa = (U) => {
                        var T = Oo(),
                          be = _e(T);
                        {
                          var Fe = (ie) => {
                            var de = Fo();
                            de.__click = jr;
                            var Pe = a(de);
                            bn(Pe, { class: "size-4" }),
                              jt(),
                              t(de),
                              b(() => (de.disabled = e(N))),
                              v(ie, de);
                          };
                          f(be, (ie) => {
                            Ht(e(o).timeout_until) || ie(Fe);
                          });
                        }
                        var me = r(be, 2);
                        me.__click = Er;
                        var oe = a(me);
                        pn(oe, { class: "size-4" }),
                          jt(),
                          t(me),
                          b(() => (me.disabled = e(N))),
                          v(U, T);
                      };
                      f(We, (U) => {
                        var T;
                        ((T = rn.data) == null ? void 0 : T.id) !== e(o).id &&
                          !e(o).ban_reason &&
                          U(aa);
                      });
                    }
                    var Ye = r(We, 2);
                    Ye.__click = Or;
                    var Ze = r(Ye, 2);
                    (Ze.__click = Fr),
                      t(xt),
                      t(pt),
                      t(ne),
                      b(
                        (U) => {
                          n(ot, e(o).name),
                            n(Nt, `#${e(o).id ?? ""}`),
                            n(Lt, ` ${U ?? ""} ID`),
                            n(ea, e(o).alliance_name ?? "—"),
                            n(_t, e(o).role),
                            (Ye.disabled = e(N)),
                            (Ze.disabled = e(N));
                        },
                        [() => un()]
                      ),
                      v(Le, ne);
                  };
                f(
                  se,
                  (Le) => {
                    e(o) ? Le(kt, !1) : Le(rt);
                  },
                  !0
                );
              }
              v(ee, te);
            };
          f(
            x,
            (ee) => {
              e(Ue) ? ee(F) : ee(W, !1);
            },
            !0
          );
        }
        v(s, u);
      };
    f(Yr, (s) => {
      e(N) ? s(Zr) : s(Jr, !1);
    });
  }
  t(Jt);
  var Fa = r(Jt, 2);
  {
    var Xr = (s) => {
      var u = bi(),
        x = _e(u),
        F = a(x),
        W = a(F),
        ee = a(W, !0);
      t(W);
      var te = r(W, 2),
        se = a(te, !0);
      t(te), t(F);
      var rt = r(F, 2),
        kt = r(a(rt), 2),
        Le = a(kt, !0);
      t(kt), t(rt);
      var ne = r(rt, 2),
        Ie = a(ne),
        De = a(Ie, !0);
      t(Ie);
      var st = r(Ie, 2),
        nt = a(st, !0);
      t(st), t(ne);
      var Ce = r(ne, 2),
        ot = a(Ce),
        it = a(ot, !0);
      t(ot);
      var Nt = r(ot, 2),
        Ke = a(Nt, !0);
      t(Nt), t(Ce);
      var Qe = r(Ce, 2),
        Lt = r(a(Qe), 2),
        dt = a(Lt),
        Xt = a(dt, !0);
      t(dt);
      var lt = r(dt, 2),
        Ae = a(lt);
      Ta(Ae),
        (Ae.__keydown = (d) => {
          d.key === "Enter" && Ra();
        });
      var Re = r(Ae, 2);
      Re.__click = Ra;
      var ea = a(Re, !0);
      t(Re), t(lt), t(Lt), t(Qe);
      var vt = r(Qe, 2),
        ct = a(vt),
        At = a(ct, !0);
      t(ct);
      var ut = r(ct, 2),
        _t = a(ut),
        pt = r(a(_t)),
        bt = a(pt, !0);
      t(pt), t(_t);
      var mt = r(_t, 2),
        ft = r(a(mt)),
        ta = a(ft, !0);
      t(ft), t(mt);
      var xt = r(mt, 2),
        We = r(a(xt)),
        aa = a(We, !0);
      t(We), t(xt), t(ut), t(vt);
      var Ye = r(vt, 2),
        Ze = a(Ye),
        U = a(Ze, !0);
      t(Ze);
      var T = r(Ze, 2);
      T.__click = Hr;
      var be = a(T, !0);
      t(T), t(Ye), t(x);
      var Fe = r(x, 2),
        me = a(Fe),
        oe = a(me),
        ie = a(oe, !0);
      t(oe), t(me);
      var de = r(me, 2),
        Pe = a(de);
      Ta(Pe);
      var Rt = r(Pe, 2);
      Rt.__click = () => Ma(e($e));
      var as = a(Rt, !0);
      t(Rt), t(de);
      var Oa = r(de, 2),
        qa = a(Oa);
      Et(
        qa,
        17,
        () => e(X),
        (d) => `${d.author.id}-${d.createdAt}`,
        (d, i) => {
          var h = Vo(),
            $ = a(h),
            c = a($),
            y = a(c),
            I = r(y);
          {
            var g = (B) => {
              var ae = Go(),
                re = a(ae, !0);
              t(ae), b(() => n(re, e(i).author.role)), v(B, ae);
            };
            f(I, (B) => {
              e(i).author.role && B(g);
            });
          }
          t(c);
          var L = r(c, 2),
            j = a(L, !0);
          t(L), t($);
          var S = r($, 2),
            le = a(S, !0);
          t(S),
            t(h),
            b(
              (B) => {
                n(
                  y,
                  `${(e(i).author.id ? e(i).author.name : "System") ?? ""} #${
                    e(i).author.id ?? ""
                  } `
                ),
                  n(j, B),
                  n(le, e(i).note);
              },
              [() => new Date(e(i).createdAt).toLocaleString()]
            ),
            v(d, h);
        }
      );
      var rs = r(qa, 2);
      {
        var ss = (d) => {
          var i = Ho(),
            h = a(i, !0);
          t(i), b(($) => n(h, $), [() => En()]), v(d, i);
        };
        f(rs, (d) => {
          e(X).length === 0 && d(ss);
        });
      }
      t(Oa), t(Fe);
      var ra = r(Fe, 2),
        sa = a(ra),
        na = a(sa),
        ns = a(na, !0);
      t(na);
      var oa = r(na, 2);
      oa.__click = Vr;
      var Ga = a(oa);
      sn(Ga, { class: "size-4" });
      var os = r(Ga);
      t(oa), t(sa);
      var Va = r(sa, 2),
        Ha = a(Va),
        ia = a(Ha),
        Ka = a(ia),
        da = a(Ka),
        is = a(da, !0);
      t(da);
      var la = r(da),
        ds = a(la, !0);
      t(la);
      var va = r(la),
        ls = a(va, !0);
      t(va);
      var Qa = r(va),
        vs = a(Qa, !0);
      t(Qa), t(Ka), t(ia);
      var Wa = r(ia),
        Ya = a(Wa);
      Et(
        Ya,
        17,
        () => e(je),
        (d) => d.id,
        (d, i) => {
          var h = Ko(),
            $ = a(h),
            c = a($, !0);
          t($);
          var y = r($),
            I = a(y);
          t(y);
          var g = r(y),
            L = a(g, !0);
          t(g);
          var j = r(g),
            S = a(j, !0);
          t(j),
            t(h),
            b(
              (le, B) => {
                n(c, e(i).product_name),
                  n(I, `US$ ${le ?? ""}`),
                  n(L, e(i).amount),
                  n(S, B);
              },
              [() => (e(i).price / 100).toFixed(2), () => Sa(e(i).createdAt)]
            ),
            v(d, h);
        }
      );
      var cs = r(Ya);
      {
        var us = (d) => {
          var i = Qo(),
            h = a(i),
            $ = a(h, !0);
          t(h), t(i), b((c) => n($, c), [() => io()]), v(d, i);
        };
        f(cs, (d) => {
          e(je).length === 0 && d(us);
        });
      }
      t(Wa), t(Ha), t(Va), t(ra);
      var Za = r(ra, 2);
      {
        var _s = (d) => {
          var i = Zo(),
            h = a(i),
            $ = a(h, !0);
          t(h);
          var c = r(h, 2);
          {
            var y = (g) => {
                var L = Wo(),
                  j = a(L, !0);
                t(L), b((S) => n(j, S), [() => Rr()]), v(g, L);
              },
              I = (g) => {
                var L = Yo(),
                  j = a(L),
                  S = r(a(j), 2),
                  le = a(S, !0);
                t(S), t(j);
                var B = r(j, 2),
                  ae = r(a(B), 2),
                  re = a(ae),
                  ve = r(re),
                  Se = a(ve);
                t(ve), t(ae), t(B);
                var fe = r(B, 2),
                  xe = r(a(fe), 2),
                  k = a(xe),
                  E = r(k),
                  Y = a(E);
                t(E), t(xe), t(fe);
                var ge = r(fe, 2),
                  zt = r(a(ge), 2),
                  Je = a(zt),
                  Bt = r(Je),
                  Oe = a(Bt);
                t(Bt),
                  t(zt),
                  t(ge),
                  t(L),
                  b(
                    (ma, fa, xa) => {
                      n(le, e(P).closedTotal),
                        n(re, `${e(P).bans ?? ""} `),
                        n(Se, `(${ma ?? ""})`),
                        n(k, `${e(P).ignored ?? ""} `),
                        n(Y, `(${fa ?? ""})`),
                        n(Je, `${e(P).timeouts ?? ""} `),
                        n(Oe, `(${xa ?? ""})`);
                    },
                    [
                      () => Vt(e(P).bans, e(P).closedTotal),
                      () => Vt(e(P).ignored, e(P).closedTotal),
                      () => Vt(e(P).timeouts, e(P).closedTotal),
                    ]
                  ),
                  v(g, L);
              };
            f(c, (g) => {
              e(P) ? g(I, !1) : g(y);
            });
          }
          t(i), b((g) => n($, g), [() => Ro()]), v(d, i);
        };
        f(Za, (d) => {
          e(o).role !== "user" && d(_s);
        });
      }
      var Ja = r(Za, 2),
        ca = a(Ja),
        ps = a(ca, !0);
      t(ca);
      var ua = r(ca, 2),
        gt = a(ua);
      gt.__click = async () => {
        l(G, "received"), tt.has("received") || (await He("received", !0));
      };
      var bs = a(gt, !0);
      t(gt);
      var ht = r(gt, 2);
      ht.__click = async () => {
        l(G, "sent"), tt.has("sent") || (await He("sent", !0));
      };
      var ms = a(ht, !0);
      t(ht);
      var Pt = r(ht, 2);
      Pt.__click = async () => {
        l(G, "handled"), tt.has("handled") || (await He("handled", !0));
      };
      var fs = a(Pt, !0);
      t(Pt), t(ua);
      var Xa = r(ua, 2),
        _a = a(Xa),
        pa = a(_a),
        ba = a(pa),
        er = a(ba),
        xs = a(er);
      {
        var gs = (d) => {
            var i = Me();
            b((h) => n(i, h), [() => co()]), v(d, i);
          },
          hs = (d) => {
            var i = Ve(),
              h = _e(i);
            {
              var $ = (y) => {
                  var I = Me();
                  b((g) => n(I, g), [() => po()]), v(y, I);
                },
                c = (y) => {
                  var I = Me();
                  b((g) => n(I, g), [() => fo()]), v(y, I);
                };
              f(
                h,
                (y) => {
                  e(G) === "sent" ? y($) : y(c, !1);
                },
                !0
              );
            }
            v(d, i);
          };
        f(xs, (d) => {
          e(G) === "received" ? d(gs) : d(hs, !1);
        });
      }
      t(er), t(ba);
      var yt = r(ba, 2);
      yt.__click = async () => {
        await He(e(G), !0);
      };
      var ys = a(yt);
      Lr(ys, { class: "size-4" }), t(yt), t(pa);
      var tr = r(pa, 2);
      {
        var ws = (d) => {
          var i = Jo();
          v(d, i);
        };
        f(tr, (d) => {
          e(Ee) && e(ke).length === 0 && d(ws);
        });
      }
      var ar = r(tr, 2);
      Et(
        ar,
        17,
        () => e(ke),
        (d) => d.id,
        (d, i) => {
          const h = J(() => new Date(e(i).createdAt)),
            $ = J(() => {
              var k;
              return ((k = e(Ne)) == null ? void 0 : k.id) === e(i).id;
            });
          var c = ti();
          c.__click = () => {
            l(Ne, e(i), !0);
          };
          var y = a(c);
          {
            let k = J(() => e(i).reportedUser.picture ?? void 0);
            Ct(y, {
              class: "size-12",
              get userId() {
                return e(i).reportedUser.id;
              },
              get pictureUrl() {
                return e(k);
              },
            });
          }
          var I = r(y, 2),
            g = a(I),
            L = a(g),
            j = a(L, !0);
          t(L);
          var S = r(L, 2),
            le = a(S);
          t(S);
          var B = r(S, 2);
          {
            var ae = (k) => {
              var E = Xo();
              let Y;
              var ge = a(E, !0);
              t(E),
                b(() => {
                  (Y = q(E, 1, "badge badge-xs font-semibold", null, Y, {
                    "badge-ghost":
                      e(i).status === "open" || e(i).status === "ignore",
                    "badge-warning": e(i).status === "timeout",
                    "badge-error": e(i).status === "ban",
                  })),
                    n(ge, e(i).status);
                }),
                v(k, E);
            };
            f(B, (k) => {
              e(i).status && k(ae);
            });
          }
          t(g);
          var re = r(g, 2),
            ve = a(re),
            Se = a(ve, !0);
          t(ve), t(re), t(I);
          var fe = r(I, 2);
          {
            var xe = (k) => {
              var E = ei(),
                Y = a(E);
              Pr(Y, () => e(i).reportedUser.role), t(E), v(k, E);
            };
            f(fe, (k) => {
              e(i).reportedUser.role !== "user" && k(xe);
            });
          }
          t(c),
            b(
              (k, E) => {
                q(
                  c,
                  1,
                  Ut({
                    "bg-base-100 ring-primary relative flex gap-2 rounded-2xl p-3 shadow":
                      !0,
                    "bg-primary/10 ring-2": e($),
                  })
                ),
                  q(g, 1, `text-base font-semibold ${k ?? ""} flex gap-1.5`),
                  n(j, e(i).reportedUser.name),
                  n(le, `#${e(i).reportedUser.id ?? ""}`),
                  n(Se, E);
              },
              [() => et(e(i).reportedUser.id), () => e(h).toLocaleString()]
            ),
            v(d, c);
        }
      );
      var rr = r(ar, 2);
      {
        var Us = (d) => {
          var i = ai(),
            h = a(i, !0);
          t(i), b(($) => n(h, $), [() => Nr()]), v(d, i);
        };
        f(rr, (d) => {
          !e(Ee) && e(ke).length === 0 && d(Us);
        });
      }
      var sr = r(rr, 2),
        St = a(sr);
      St.__click = async () => {
        (Gt[e(G)] += 1), await He(e(G));
      };
      var $s = a(St, !0);
      t(St), t(sr), t(_a);
      var nr = r(_a, 2),
        Is = a(nr);
      {
        var Ds = (d) => {
            var i = Ve(),
              h = _e(i);
            Xs(
              h,
              () => e(Ne).id,
              ($) => {
                const c = J(() => e(Ne)),
                  y = J(() => {
                    var A;
                    return (
                      ((A = kn(e(c).reports, (p) => p.sameIpAccounts ?? 0)) ==
                      null
                        ? void 0
                        : A.sameIpAccounts) ?? 0
                    );
                  });
                var I = ui(),
                  g = _e(I),
                  L = a(g),
                  j = a(L),
                  S = r(j, 5),
                  le = a(S, !0);
                t(S);
                var B = r(S, 2),
                  ae = a(B);
                t(B), t(L), t(g);
                var re = r(g, 2),
                  ve = a(re),
                  Se = a(ve);
                {
                  let A = J(() => e(c).reportedUser.picture ?? void 0);
                  Ct(Se, {
                    class: "size-14",
                    get userId() {
                      return e(c).reportedUser.id;
                    },
                    get pictureUrl() {
                      return e(A);
                    },
                  });
                }
                var fe = r(Se, 2),
                  xe = a(fe),
                  k = a(xe),
                  E = a(k);
                t(k);
                var Y = r(k, 2),
                  ge = a(Y),
                  zt = a(ge, !0);
                t(ge);
                var Je = r(ge, 2),
                  Bt = a(Je);
                t(Je);
                var Oe = r(Je, 2);
                Oe.__click = () => {
                  navigator.clipboard.writeText(
                    e(c).reportedUser.id.toString()
                  ),
                    Q.success(fn());
                };
                var ma = a(Oe);
                La(ma, { class: "inline size-4" }), t(Oe);
                var fa = r(Oe, 2);
                {
                  var xa = (A) => {
                    const p = J(() => e(c).reportedUser.allianceId);
                    var V = ri();
                    V.__click = () => {
                      navigator.clipboard.writeText(String(e(p))),
                        Q.success(Nn());
                    };
                    var ce = a(V),
                      he = r(ce);
                    La(he, { class: "size-3" }),
                      t(V),
                      b(
                        (Te, ze, ye) => {
                          q(
                            V,
                            1,
                            `tooltip badge badge-sm ml-0.5 border-0 ${
                              Te ?? ""
                            } ${ze ?? ""}`
                          ),
                            we(V, "title", ye),
                            n(
                              ce,
                              `${e(c).reportedUser.allianceName ?? "—" ?? ""} `
                            );
                        },
                        [
                          () => Fn(e(p)),
                          () => et(e(p)),
                          () => _n({ allianceId: e(p) }),
                        ]
                      ),
                      v(A, V);
                  };
                  f(fa, (A) => {
                    e(c).reportedUser.allianceId != null && A(xa);
                  });
                }
                t(Y);
                var ks = r(Y, 2);
                {
                  var Ns = (A) => {
                    Pr(A, () => e(c).reportedUser.role);
                  };
                  f(ks, (A) => {
                    e(c).reportedUser.role !== "user" && A(Ns);
                  });
                }
                t(xe);
                var or = r(xe, 2),
                  ga = a(or),
                  ir = a(ga),
                  dr = r(ir),
                  Ls = a(dr, !0);
                t(dr), t(ga);
                var lr = r(ga, 2);
                {
                  var As = (A) => {
                    var p = si(),
                      V = _e(p),
                      ce = a(V),
                      he = r(ce),
                      Te = a(he, !0);
                    t(he), t(V);
                    var ze = r(V, 2),
                      ye = a(ze),
                      qe = r(ye),
                      Xe = a(qe, !0);
                    t(qe),
                      t(ze),
                      b(
                        (wt, Mt) => {
                          n(ce, `${wt ?? ""}: `),
                            n(Te, e(c).reportedUser.timeoutCount ?? 0),
                            n(ye, `${Mt ?? ""}: `),
                            n(
                              Xe,
                              $r[e(c).reportedUser.lastTimeoutReason] ??
                                e(c).reportedUser.lastTimeoutReason
                            );
                        },
                        [() => Ln(), () => An()]
                      ),
                      v(A, p);
                  };
                  f(lr, (A) => {
                    e(c).reportedUser.lastTimeoutReason && A(As);
                  });
                }
                var ha = r(lr, 2),
                  vr = a(ha),
                  cr = r(vr),
                  Rs = a(cr, !0);
                t(cr), t(ha);
                var ur = r(ha, 2),
                  _r = a(ur),
                  ya = r(_r);
                let pr;
                var Ps = a(ya, !0);
                t(ya), t(ur), t(or), t(fe), t(ve);
                var br = r(ve, 4);
                Et(
                  br,
                  21,
                  () => e(c).reports,
                  (A) => A.id,
                  (A, p) => {
                    const V = J(
                        () =>
                          e(p).reportedLatitude != null &&
                          e(p).reportedLongitude != null
                      ),
                      ce = J(() =>
                        e(V)
                          ? `${Na.url.origin}/?lat=${
                              e(p).reportedLatitude
                            }&lng=${e(p).reportedLongitude}&select=true${
                              e(p).zoom ? `&zoom=${e(p).zoom}` : ""
                            }`
                          : null
                      );
                    var he = ci(),
                      Te = a(he),
                      ze = a(Te);
                    t(Te);
                    var ye = r(Te, 2),
                      qe = a(ye);
                    {
                      let R = J(() => e(p).reportedByPicture ?? void 0);
                      Ct(qe, {
                        class: "size-14",
                        get userId() {
                          return e(p).reportedBy;
                        },
                        get pictureUrl() {
                          return e(R);
                        },
                      });
                    }
                    var Xe = r(qe, 2),
                      wt = a(Xe),
                      Mt = a(wt),
                      wa = r(Mt),
                      Ua = a(wa),
                      Ss = a(Ua, !0);
                    t(Ua);
                    var mr = r(Ua, 2),
                      zs = a(mr);
                    t(mr), t(wa), t(wt);
                    var fr = r(wt, 2),
                      $a = a(fr),
                      xr = a($a),
                      Ia = r(xr),
                      Bs = a(Ia, !0);
                    t(Ia), t($a);
                    var Da = r($a, 2),
                      gr = a(Da),
                      hr = r(gr),
                      Ms = a(hr, !0);
                    t(hr), t(Da);
                    var yr = r(Da, 2);
                    {
                      var js = (R) => {
                        var z = ni(),
                          C = a(z),
                          O = r(C),
                          K = a(O);
                        Dr(K, { class: "inline size-4" }),
                          jt(2),
                          t(O),
                          t(z),
                          b(
                            (Z) => {
                              n(C, `${Z ?? ""}: `), we(O, "href", e(ce));
                            },
                            [() => wn()]
                          ),
                          v(R, z);
                      };
                      f(yr, (R) => {
                        e(V) && R(js);
                      });
                    }
                    var Es = r(yr, 2);
                    {
                      var Cs = (R) => {
                        var z = oi(),
                          C = a(z),
                          O = r(C),
                          K = a(O);
                        Dr(K, { class: "inline size-4" }),
                          jt(2),
                          t(O),
                          t(z),
                          b(
                            (Z) => {
                              n(C, `${Z ?? ""}: `),
                                we(
                                  O,
                                  "href",
                                  `${Na.url.origin}/?lat=${
                                    e(p).lastPixelLatitude
                                  }&lng=${e(p).lastPixelLongitude}&select=true`
                                );
                            },
                            [() => Un()]
                          ),
                          v(R, z);
                      };
                      f(Es, (R) => {
                        e(p).lastPixelLatitude != null &&
                          e(p).lastPixelLongitude != null &&
                          R(Cs);
                      });
                    }
                    t(fr), t(Xe), t(ye);
                    var wr = r(ye, 2);
                    {
                      var Fs = (R) => {
                        var z = ii(),
                          C = a(z),
                          O = a(C, !0);
                        t(C);
                        var K = r(C, 2),
                          Z = a(K, !0);
                        t(K),
                          t(z),
                          b(
                            (Ge) => {
                              n(O, Ge), n(Z, e(p).notes);
                            },
                            [() => mn()]
                          ),
                          v(R, z);
                      };
                      f(wr, (R) => {
                        e(p).notes && R(Fs);
                      });
                    }
                    var Os = r(wr, 2);
                    {
                      var qs = (R) => {
                          var z = li(),
                            C = a(z),
                            O = a(C);
                          {
                            var K = (Ge) => {
                              var Ur = di();
                              b(() => we(Ur, "src", e(p).imageUrl)), v(Ge, Ur);
                            };
                            f(O, (Ge) => {
                              e(p).imageUrl && Ge(K);
                            });
                          }
                          var Z = r(O, 2);
                          $n(Z, {
                            class:
                              "absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-[87%]",
                          }),
                            t(C),
                            t(z),
                            b(() => we(C, "href", e(ce))),
                            v(R, z);
                        },
                        Gs = (R) => {
                          var z = Ve(),
                            C = _e(z);
                          {
                            var O = (K) => {
                              var Z = vi(),
                                Ge = a(Z);
                              t(Z),
                                b(() => we(Ge, "src", e(p).imageUrl)),
                                v(K, Z);
                            };
                            f(
                              C,
                              (K) => {
                                e(p).imageUrl && K(O);
                              },
                              !0
                            );
                          }
                          v(R, z);
                        };
                      f(Os, (R) => {
                        e(ce) ? R(qs) : R(Gs, !1);
                      });
                    }
                    t(he),
                      b(
                        (R, z, C, O, K, Z) => {
                          n(ze, `${R ?? ""} #${e(p).id ?? ""}`),
                            n(Mt, `${z ?? ""}: `),
                            q(wa, 1, `font-semibold ${C ?? ""}`),
                            n(Ss, e(p).reportedByName),
                            n(zs, `#${e(p).reportedBy ?? ""}`),
                            n(xr, `${O ?? ""}: `),
                            q(Ia, 1, `font-bold ${an[e(p).reason] ?? ""}`),
                            n(Bs, $r[e(p).reason] ?? e(p).reason),
                            n(gr, `${K ?? ""}: `),
                            n(Ms, Z);
                        },
                        [
                          () => xn(),
                          () => gn(),
                          () => et(e(p).reportedBy),
                          () => hn(),
                          () => yn(),
                          () => new Date(e(p).createdAt).toLocaleString(),
                        ]
                      ),
                      v(A, he);
                  }
                ),
                  t(br),
                  t(re),
                  b(
                    (A, p, V, ce, he, Te, ze, ye, qe, Xe) => {
                      we(L, "title", e(c).id),
                        n(j, `${A ?? ""}: ${p ?? ""} `),
                        q(S, 1, V),
                        n(le, e(c).assignedUser.name),
                        q(B, 1, ce),
                        n(ae, `#${e(c).assignedUser.id ?? ""}`),
                        n(E, `${he ?? ""}:`),
                        q(Y, 1, `text-base font-semibold ${Te ?? ""}`),
                        n(zt, e(c).reportedUser.name),
                        n(Bt, `#${e(c).reportedUser.id ?? ""}`),
                        we(Oe, "title", ze),
                        n(ir, `${ye ?? ""}: `),
                        n(Ls, e(c).reportedUser.reportedCount ?? 0),
                        n(vr, `${qe ?? ""}: `),
                        n(Rs, e(c).reportedUser.pixelsPainted ?? 0),
                        n(_r, `${Xe ?? ""}: `),
                        (pr = q(ya, 1, "font-semibold", null, pr, {
                          "text-red-600": e(y) >= 7,
                        })),
                        n(Ps, e(y));
                    },
                    [
                      () => In(),
                      () => e(c).id.split("-").at(-1),
                      () => Ut(et(e(c).assignedUser.id)),
                      () => Ut(et(e(c).assignedUser.id)),
                      () => Dn(),
                      () => et(e(c).reportedUser.id),
                      () => Tn({ userId: e(c).reportedUser.id }),
                      () => Tr(),
                      () => Ir(),
                      () => kr(),
                    ]
                  ),
                  v($, I);
              }
            ),
              v(d, i);
          },
          Ts = (d) => {
            var i = pi(),
              h = a(i);
            {
              var $ = (y) => {
                  var I = _i();
                  v(y, I);
                },
                c = (y) => {
                  var I = Me();
                  b((g) => n(I, g), [() => Nr()]), v(y, I);
                };
              f(h, (y) => {
                e(Ee) ? y($) : y(c, !1);
              });
            }
            t(i), v(d, i);
          };
        f(Is, (d) => {
          e(Ne) ? d(Ds) : d(Ts, !1);
        });
      }
      t(nr),
        t(Xa),
        t(Ja),
        b(
          (
            d,
            i,
            h,
            $,
            c,
            y,
            I,
            g,
            L,
            j,
            S,
            le,
            B,
            ae,
            re,
            ve,
            Se,
            fe,
            xe,
            k,
            E,
            Y,
            ge
          ) => {
            n(ee, d),
              n(se, e(o).reported_times),
              n(Le, e(o).timeouts_count),
              n(De, i),
              n(nt, e(o).same_ip_accounts),
              n(it, h),
              n(Ke, e(o).pixels_painted),
              n(Xt, e(o).droplets),
              (Re.disabled = e(N)),
              n(ea, $),
              n(At, c),
              n(bt, e(o).email),
              q(
                ft,
                1,
                Ut(e(o).phone_validated ? "text-success" : "text-error")
              ),
              n(ta, e(o).phone_validated ? "Validated" : "Not validated"),
              q(We, 1, Ut(e(o).discord ? "text-success" : "text-error")),
              n(aa, e(o).discord ? e(o).discord : "Not connected"),
              n(U, y),
              (T.disabled = e(N)),
              n(be, I),
              n(ie, g),
              we(Pe, "placeholder", L),
              (Rt.disabled = j),
              n(as, S),
              n(ns, le),
              n(os, ` ${B ?? ""}`),
              n(is, ae),
              n(ds, re),
              n(ls, ve),
              n(vs, Se),
              n(ps, fe),
              q(
                gt,
                1,
                `tab transition-all ${
                  e(G) === "received"
                    ? "tab-active !bg-primary !text-primary-content !border-primary/60 btn btn-primary btn-sm scale-[1.02] !border !shadow-md"
                    : "hover:brightness-105"
                }`
              ),
              n(bs, xe),
              q(
                ht,
                1,
                `tab transition-all ${
                  e(G) === "sent"
                    ? "tab-active !bg-primary !text-primary-content !border-primary/60 btn btn-primary btn-sm scale-[1.02] !border !shadow-md"
                    : "hover:brightness-105"
                }`
              ),
              n(ms, k),
              q(
                Pt,
                1,
                `tab transition-all ${
                  e(G) === "handled"
                    ? "tab-active !bg-primary !text-primary-content !border-primary/60 btn btn-primary btn-sm scale-[1.02] !border !shadow-md"
                    : "hover:brightness-105"
                }`
              ),
              n(fs, E),
              (yt.disabled = e(Ee)),
              we(yt, "title", Y),
              (St.disabled = e(Ee)),
              n($s, ge);
          },
          [
            () => Tr(),
            () => kr(),
            () => Ir(),
            () => Sn(),
            () => Hn(),
            () => nn(),
            () => on(),
            () => Mn(),
            () => jn(),
            () => !e($e).trim(),
            () => Rn(),
            () => dn(),
            () => zn(),
            () => Wn(),
            () => Jn(),
            () => to(),
            () => so(),
            () => No(),
            () => ho(),
            () => Uo(),
            () => Do(),
            () => {
              var d;
              return ((d = Ar) == null ? void 0 : d()) ?? "Refresh";
            },
            () => {
              var d;
              return ((d = Cn) == null ? void 0 : d()) ?? "Load more";
            },
          ]
        ),
        ka(
          Ae,
          () => e(Dt),
          (d) => l(Dt, d)
        ),
        ka(
          Pe,
          () => e($e),
          (d) => l($e, d)
        ),
        v(s, u);
    };
    f(Fa, (s) => {
      e(o) && s(Xr);
    });
  }
  var es = r(Fa, 2);
  {
    var ts = (s) => {
      {
        let u = J(() => [e(It)]),
          x = J(Mr);
        ln(s, {
          get action() {
            return e(qt);
          },
          get targets() {
            return e(u);
          },
          get image() {
            return e(x);
          },
          get latLon() {
            return Sr;
          },
          zoom: zr,
          get open() {
            return e($t);
          },
          set open(F) {
            l($t, F, !0);
          },
        });
      }
    };
    f(es, (s) => {
      e(It) && s(ts);
    });
  }
  t(Kt),
    b(
      (s, u, x) => {
        n(Kr, s),
          (at.disabled = e(N)),
          n(Qr, u),
          (Tt.disabled = e(N)),
          n(Wr, ` ${x ?? ""}`);
      },
      [
        () => (Aa == null ? void 0 : Aa()) ?? "Search user (ID)",
        () => {
          var s;
          return ((s = Bn) == null ? void 0 : s()) ?? "Search";
        },
        () => {
          var s;
          return ((s = Ar) == null ? void 0 : s()) ?? "Refresh";
        },
      ]
    ),
    Qs("submit", Wt, (s) => {
      s.preventDefault(), Ba();
    }),
    ka(
      ja,
      () => e(D),
      (s) => l(D, s)
    ),
    v(w, Kt),
    Ws();
}
Vs(["click", "keydown"]);
export { Hi as component };

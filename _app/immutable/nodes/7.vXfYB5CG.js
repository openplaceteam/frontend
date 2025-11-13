import "../chunks/ClL9a_Zs.js";
import {
  k as Xa,
  p as Za,
  l as D,
  m as er,
  D as Ht,
  g as e,
  o,
  f as L,
  d as a,
  s,
  t as C,
  v as tr,
  b as p,
  c as ar,
  e as rr,
  $ as nr,
  r as t,
  w as me,
  a as le,
  u as Pe,
} from "../chunks/iK5FT0Sa.js";
import { s as i } from "../chunks/BHnQYZx5.js";
import { i as q } from "../chunks/6Mc7KQD2.js";
import { k as lr } from "../chunks/COcZhybn.js";
import { e as it } from "../chunks/DcUGKLlr.js";
import { h as sr } from "../chunks/DDOVU0Bm.js";
import { s as Ot, r as ct, b as or, a as se } from "../chunks/Cw1VVyw7.js";
import { t as Qt } from "../chunks/D4MEaonn.js";
import { b as dt } from "../chunks/yt7z1efG.js";
import { g as Wt } from "../chunks/E8vEVpET.js";
import { p as ut } from "../chunks/D_G6cexA.js";
import {
  a as W,
  t as R,
  i as ir,
  h as cr,
  d as dr,
  e as ur,
  g as vr,
} from "../chunks/BcevhAVP.js";
import { o as _r, L as br, s as Yt, g as mr } from "../chunks/6G5adFH1.js";
import { P as Gt } from "../chunks/DUpX1e05.js";
import { p as vt, L as Jt, d as fr } from "../chunks/CbE2L3A6.js";
import { R as pr } from "../chunks/DIrPyiFz.js";
import { g as F } from "../chunks/DQcFTXWv.js";
import { r as xr } from "../chunks/C4amkYCn.js";
import { c as _t } from "../chunks/BRvsRNeX.js";
import { c as gr } from "../chunks/y2OiVH5z.js";
import {
  s as Kt,
  v as Vt,
  m as hr,
  p as yr,
  l as wr,
} from "../chunks/DsSnzxUe.js";
import { s as kr, a as Ar } from "../chunks/BQsyJ3Sw.js";
import { c as Ir } from "../chunks/Bv_KMhOk.js";
import { l as Xt } from "../chunks/D28eA48x.js";
import { r as Lr } from "../chunks/CGiPcZge.js";
import { l as Nr } from "../chunks/BpqyV1PE.js";
import { g as Ce, a as $r } from "../chunks/UjG3PxiF.js";
import { f as Zt } from "../chunks/DG5z7AC6.js";
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
      d = new b.Error().stack;
    d &&
      ((b._sentryDebugIds = b._sentryDebugIds || {}),
      (b._sentryDebugIds[d] = "8f901ffa-a856-4dc9-9e1e-06a66000398f"),
      (b._sentryDebugIdIdentifier =
        "sentry-dbid-8f901ffa-a856-4dc9-9e1e-06a66000398f"));
  })();
} catch {}
const Pr = () => "Search alliance (name or ID)",
  Cr = () => "Buscar aliança (nome ou ID)",
  Sr = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? Pr() : Cr()),
  Dr = () => "Partial name or numeric ID",
  Rr = () => "Nome parcial ou ID numérico",
  Mr = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? Dr() : Rr()),
  Fr = () => "Results",
  Tr = () => "Resultados",
  zr = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? Fr() : Tr()),
  Er = () => "No alliance found",
  jr = () => "Nenhuma aliança encontrada",
  Br = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? Er() : jr()),
  qr = () => "No alliance selected",
  Ur = () => "Nenhuma aliança selecionada",
  Hr = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? qr() : Ur()),
  Or = () => "Change name",
  Qr = () => "Alterar nome",
  Wr = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? Or() : Qr()),
  Yr = () => "Change leader",
  Gr = () => "Alterar líder",
  ea = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? Yr() : Gr()),
  Jr = () => "Ban all members",
  Kr = () => "Banir todos os membros",
  ta = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? Jr() : Kr()),
  Vr = () => "Creator (leader)",
  Xr = () => "Proprietário (líder)",
  Zr = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? Vr() : Xr()),
  en = () => "No coordinates",
  tn = () => "Sem coordenadas",
  an = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? en() : tn()),
  rn = () => "Actions",
  nn = () => "Ações",
  ln = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? rn() : nn()),
  sn = () => "Remove",
  on = () => "Remover",
  cn = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? sn() : on()),
  dn = () => "No members",
  un = () => "Sem membros",
  vn = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? dn() : un()),
  _n = () => "Rename alliance",
  bn = () => "Alterar nome da aliança",
  mn = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? _n() : bn()),
  fn = () => "Inform the ID of the new leader",
  pn = () => "Informe o ID do novo líder",
  xn = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? fn() : pn()),
  gn = () =>
    "Are you sure you want to ban all members of this alliance? This action cannot be undone.",
  hn = () =>
    "Tem certeza que deseja banir todos os membros desta aliança? Esta ação não pode ser desfeita.",
  yn = (b = {}, d = {}) => ((d.locale ?? F()) === "en" ? gn() : hn());
var wn = L(
    '<div class="flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div>'
  ),
  kn = L('<div class="text-error"> </div>'),
  An = L('<div class="text-base-content/70 text-sm"> </div>'),
  In = L(
    '<button class="bg-base-100 hover:bg-base-200 rounded-box border p-3 text-left transition"><div class="flex items-center justify-between"><span> </span> <span class="text-base-content/70 text-xs"> </span></div> <div class="text-base-content/80 text-sm"> <b> </b></div></button>'
  ),
  Ln = L(
    '<div class="flex max-h-[360px] flex-col gap-2 overflow-auto pr-1"></div>'
  ),
  Nn = L(
    '<div class="flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div>'
  ),
  $n = L('<div class="text-error"> </div>'),
  Pn = L('<div class="text-base-content/70"> </div>'),
  Cn = L(
    '<div class="text-base-content/80 text-sm"> </div> <button class="btn btn-sm mt-2"><!> </button>',
    1
  ),
  Sn = L('<div class="text-base-content/70 text-sm"> </div>'),
  Dn = L(
    '<tr><td class="max-sm:hidden"><!></td><td><button> <span class="text-base-content/70 ml-0.5"> </span></button></td><td class="text-center"> </td><td class="text-center"><button class="btn btn-ghost btn-xs"><!> </button></td><td class="text-center"><div class="join join-horizontal"><button>Member</button> <button>Admin</button></div></td><td class="text-center"><button class="btn btn-error btn-xs"> </button></td></tr>'
  ),
  Rn = L(
    '<tr><td colspan="6" class="text-base-content/70 text-center"> </td></tr>'
  ),
  Mn = L(
    '<div class="mt-2 flex justify-end"><button class="btn btn-sm"> </button></div>'
  ),
  Fn = L(
    '<div class="flex flex-col gap-4"><div class="flex flex-col justify-between gap-3 md:flex-row"><div class="flex items-center gap-2"><span> </span> <span> </span></div> <div class="flex flex-wrap gap-2"><button class="btn btn-outline btn-sm"> </button> <button class="btn btn-outline btn-sm"> </button> <button class="btn btn-error btn-sm"> </button></div></div> <div class="rounded-box border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="whitespace-pre-wrap"> </div></div> <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><div class="rounded-box border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="mt-1 flex items-center gap-2"><!> <button class="link font-semibold"> </button></div></div> <div class="rounded-box border p-3"><div class="text-base-content/70 text-xs">HQ</div> <div class="mt-1"><!></div></div> <div class="rounded-box border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div></div> <div class="rounded-box border p-3"><div class="mb-2 flex items-center justify-between"><div><h3 class="text-lg font-semibold"> </h3> <div class="text-base-content/70 text-sm">Total: <b> </b></div></div> <div class="flex items-center gap-2"><button class="btn btn-sm"><!> </button></div></div> <div class="max-h-[520px] overflow-auto"><table class="table-sm table"><thead><tr><th class="max-sm:hidden"></th><th> </th><th class="text-center"> </th><th class="text-center"> </th><th class="text-center"> </th><th class="text-center"> </th></tr></thead><tbody><!><!></tbody></table></div> <!></div></div>'
  ),
  Tn = L(
    '<div class="modal modal-open"><div class="modal-box"><h3 class="text-lg font-bold"> </h3> <div class="mt-3"><input class="input input-bordered w-full" placeholder="Novo nome"/></div> <div class="modal-action"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div> <button type="button" class="modal-backdrop" aria-label="Close dialog"></button></div>'
  ),
  zn = L(
    '<div class="modal modal-open"><div class="modal-box"><h3 class="text-lg font-bold"> </h3> <p class="text-base-content/70 text-sm"> </p> <div class="mt-3"><input class="input input-bordered w-full" type="number" min="1" placeholder="ID do novo líder"/></div> <div class="modal-action"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div> <button type="button" class="modal-backdrop" aria-label="Close dialog"></button></div>'
  ),
  En = L("<option> </option>"),
  jn = L(
    '<div class="modal modal-open"><div class="modal-box max-w-xl"><h3 class="text-error text-lg font-bold"> </h3> <p class="mt-2"> </p> <section class="mt-4"><label class="form-control w-full"><span class="label-text text-sm"> </span> <select class="select select-bordered"><option disabled selected>Select</option><!></select></label></section> <section class="mt-4"><!></section> <div class="modal-action"><button class="btn"> </button> <button class="btn btn-error"> </button></div></div> <button type="button" class="modal-backdrop" aria-label="Close dialog"></button></div>'
  ),
  Bn = L(
    '<section class="flex flex-col gap-4 p-4"><div class="grid gap-4 md:grid-cols-[360px_1fr]"><div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><form class="flex flex-col gap-2"><label class="form-control"><span class="label-text text-sm"> </span> <input class="input input-bordered input-sm"/></label> <div class="flex gap-2"><button class="btn btn-primary btn-sm"> </button> <button class="btn btn-outline btn-sm" type="button"> </button></div></form> <div class="mt-3"><div class="text-base-content/70 mb-1 text-sm"> </div> <!></div></div> <div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><!></div></div> <!> <!> <!></section>'
  );
function fl(b, d) {
  Za(d, !0);
  let h = D(""),
    fe = D(!1),
    K = D(er([])),
    oe = D(null),
    _ = D(!1),
    ee = D(null),
    ie = D(null),
    n = D(null),
    ce = D(!1),
    pe = D(""),
    de = D(!1),
    xe = D(""),
    te = D(!1),
    V = D(""),
    ge = D(""),
    he = D(null);
  const aa = [
    { value: "inappropriate-content", label: ir() },
    { value: "hate-speech", label: cr() },
    { value: "doxxing", label: dr() },
    { value: "bot", label: ur() },
    { value: "griefing", label: vr() },
    { value: "other", label: _r() },
  ];
  let ye = D(0);
  const ra = 50;
  let na = Pe(() => !!e(n) && e(n).members.length < e(n).membersCount);
  Ht(() => {
    e(te) || (o(V, ""), o(ge, ""));
  }),
    Ht(() => {
      const r = ut.url.searchParams.get("id"),
        l = r ? Number(r) : null;
      async function c() {
        l !== e(ie) &&
          (o(ie, l, !0),
          r && o(h, r, !0),
          e(ie) != null && !isNaN(e(ie))
            ? await we(e(ie), !0)
            : (o(n, null), o(ee, null)));
      }
      c();
    });
  async function bt() {
    try {
      o(oe, null), o(fe, !0);
      const r = e(h).trim();
      if (!r) {
        o(K, [], !0);
        return;
      }
      const l = Number(r);
      if (Number.isFinite(l))
        try {
          const v = await W.getAllianceById(l);
          if (v) {
            o(
              K,
              [{ id: v.id, name: v.name, pixelsPainted: v.pixelsPainted ?? 0 }],
              !0
            );
            return;
          }
        } catch {}
      const c = await W.searchAlliances(r);
      o(K, c, !0);
    } catch (r) {
      console.error(r),
        o(oe, (r == null ? void 0 : r.message) ?? "Falha na busca", !0),
        o(K, [], !0);
    } finally {
      o(fe, !1);
    }
  }
  async function we(r, l = !1) {
    try {
      o(_, !0), o(ee, null);
      const c = await W.getAllianceFull(r);
      if (!c) {
        o(n, null), o(ee, "Alliance not found");
        return;
      }
      o(n, c, !0),
        l && (o(ye, 0), la() && (await mt(!0))),
        Wt(`/admin/alliances?id=${r}`, { replaceState: !0 });
    } catch (c) {
      console.error(c),
        o(
          ee,
          (c == null ? void 0 : c.message) ?? "Erro ao carregar aliança",
          !0
        ),
        o(n, null);
    } finally {
      o(_, !1);
    }
  }
  function la() {
    return !!e(n) && e(n).members.length < e(n).membersCount;
  }
  async function mt(r = !1) {
    if (e(n))
      try {
        o(_, !0), r && o(ye, 0);
        const l = r ? 0 : e(ye) + 1,
          c = await W.getAdminAllianceMembers(e(n).id, {
            page: l,
            pageSize: ra,
          }),
          v = l === 0 ? c.members : [...e(n).members, ...c.members];
        o(
          n,
          { ...e(n), members: v, membersCount: c.total ?? e(n).membersCount },
          !0
        ),
          o(ye, l, !0);
      } catch (l) {
        console.error(l),
          R.error(
            (l == null ? void 0 : l.message) ?? "Falha ao carregar membros"
          );
      } finally {
        o(_, !1);
      }
  }
  function sa() {
    e(n) && (o(pe, e(n).name ?? "", !0), o(ce, !0));
  }
  async function ft() {
    if (!e(n)) return;
    const r = e(pe).trim();
    if (!r) {
      R.error("Informe um nome válido");
      return;
    }
    try {
      o(_, !0),
        await W.renameAlliance(e(n).id, r),
        o(n, { ...e(n), name: r }, !0),
        R.success("Nome alterado"),
        o(ce, !1);
    } catch (l) {
      R.error((l == null ? void 0 : l.message) ?? "Falha ao alterar nome");
    } finally {
      o(_, !1);
    }
  }
  function oa() {
    e(n) && (o(xe, e(n).ownerId ? String(e(n).ownerId) : "", !0), o(de, !0));
  }
  async function pt() {
    if (!e(n)) return;
    const r = Number(e(xe));
    if (!Number.isFinite(r) || r <= 0) {
      R.error("ID inválido");
      return;
    }
    try {
      o(_, !0), await W.changeAllianceLeader(e(n).id, r);
      const l = await W.getAllianceFull(e(n).id);
      o(n, l, !0), R.success("Líder alterado"), o(de, !1);
    } catch (l) {
      R.error((l == null ? void 0 : l.message) ?? "Falha ao alterar líder");
    } finally {
      o(_, !1);
    }
  }
  function ia() {
    o(te, !0);
  }
  async function ca() {
    if (e(n)) {
      if (!e(V)) {
        R.error(Ar());
        return;
      }
      if (!(e(he) && !e(he)()))
        try {
          o(_, !0),
            await W.banAllAllianceMembers(e(n).id, e(V), e(ge)),
            R.success("Todos os membros banidos"),
            await we(e(n).id, !0),
            o(te, !1);
        } catch (r) {
          R.error((r == null ? void 0 : r.message) ?? "Falha ao banir membros");
        } finally {
          o(_, !1);
        }
    }
  }
  async function xt(r, l) {
    if (e(n))
      try {
        o(_, !0),
          await W.setAllianceMemberRole(e(n).id, r.id, l),
          o(
            n,
            {
              ...e(n),
              members: e(n).members.map((c) =>
                c.id === r.id ? { ...c, role: l } : c
              ),
            },
            !0
          ),
          R.success("Cargo atualizado");
      } catch (c) {
        R.error((c == null ? void 0 : c.message) ?? "Falha ao atualizar cargo");
      } finally {
        o(_, !1);
      }
  }
  async function da(r) {
    if (e(n)) {
      if (r.id == e(n).ownerId) {
        R.error("Não é possível remover o líder da aliança");
        return;
      }
      try {
        o(_, !0),
          await W.removeAllianceMember(e(n).id, r.id),
          o(
            n,
            {
              ...e(n),
              members: e(n).members.filter((l) => l.id !== r.id),
              membersCount: Math.max(0, e(n).membersCount - 1),
            },
            !0
          ),
          R.success("Membro removido");
      } catch (l) {
        R.error((l == null ? void 0 : l.message) ?? "Falha ao remover membro");
      } finally {
        o(_, !1);
      }
    }
  }
  function ua(r) {
    if (!r.lastPixelLatitude || !r.lastPixelLongitude) {
      R.error("Sem registro de último pixel");
      return;
    }
    const l = `${ut.url.origin}/?lat=${r.lastPixelLatitude}&lng=${r.lastPixelLongitude}&select=true`;
    window.open(l, "_blank");
  }
  function va(r) {
    const { hqLatitude: l, hqLongitude: c } = r;
    if (l == null || c == null) {
      R.error("No coords for HQ");
      return;
    }
    const v = `${ut.url.origin}/?lat=${l}&lng=${c}&select=true`;
    window.open(v, "_blank");
  }
  function gt(r) {
    Wt(`/admin/users?id=${r}`);
  }
  var Se = Bn();
  sr("14ti4sx", (r) => {
    rr(() => {
      nr.title = "Wplace - Admin - Alliances";
    });
  });
  var De = a(Se),
    Re = a(De),
    ke = a(Re),
    Me = a(ke),
    Fe = a(Me),
    _a = a(Fe, !0);
  t(Fe);
  var Te = s(Fe, 2);
  ct(Te), t(Me);
  var ht = s(Me, 2),
    ue = a(ht);
  ue.__click = bt;
  var ba = a(ue, !0);
  t(ue);
  var ze = s(ue, 2);
  ze.__click = () => {
    o(h, ""), o(K, [], !0), o(oe, null);
  };
  var ma = a(ze, !0);
  t(ze), t(ht), t(ke);
  var yt = s(ke, 2),
    Ee = a(yt),
    fa = a(Ee, !0);
  t(Ee);
  var pa = s(Ee, 2);
  {
    var xa = (r) => {
        var l = wn(),
          c = s(a(l), 2),
          v = a(c, !0);
        t(c), t(l), C((T) => i(v, T), [() => Xt()]), p(r, l);
      },
      ga = (r) => {
        var l = me(),
          c = le(l);
        {
          var v = (f) => {
              var y = kn(),
                N = a(y, !0);
              t(y), C(() => i(N, e(oe))), p(f, y);
            },
            T = (f) => {
              var y = me(),
                N = le(y);
              {
                var M = (m) => {
                    var x = An(),
                      k = a(x, !0);
                    t(x), C((w) => i(k, w), [() => Br()]), p(m, x);
                  },
                  B = (m) => {
                    var x = Ln();
                    it(
                      x,
                      21,
                      () => e(K),
                      (k) => k.id,
                      (k, w) => {
                        var $ = In();
                        $.__click = () => we(e(w).id, !0);
                        var S = a($),
                          E = a(S),
                          z = a(E, !0);
                        t(E);
                        var Y = s(E, 2),
                          Q = a(Y);
                        t(Y), t(S);
                        var ae = s(S, 2),
                          X = a(ae),
                          P = s(X),
                          U = a(P, !0);
                        t(P),
                          t(ae),
                          t($),
                          C(
                            (A, Z, H) => {
                              se(E, 1, `font-semibold ${A ?? ""}`),
                                i(z, e(w).name),
                                i(Q, `#${e(w).id ?? ""}`),
                                i(X, `${Z ?? ""}: `),
                                i(U, H);
                            },
                            [
                              () => Ce(e(w).id),
                              () => vt(),
                              () => e(w).pixelsPainted.toLocaleString("en-US"),
                            ]
                          ),
                          p(k, $);
                      }
                    ),
                      t(x),
                      p(m, x);
                  };
                q(
                  N,
                  (m) => {
                    e(K).length === 0 ? m(M) : m(B, !1);
                  },
                  !0
                );
              }
              p(f, y);
            };
          q(
            c,
            (f) => {
              e(oe) ? f(v) : f(T, !1);
            },
            !0
          );
        }
        p(r, l);
      };
    q(pa, (r) => {
      e(fe) ? r(xa) : r(ga, !1);
    });
  }
  t(yt), t(Re);
  var wt = s(Re, 2),
    ha = a(wt);
  {
    var ya = (r) => {
        var l = Nn(),
          c = s(a(l), 2),
          v = a(c, !0);
        t(c), t(l), C((T) => i(v, T), [() => Xt()]), p(r, l);
      },
      wa = (r) => {
        var l = me(),
          c = le(l);
        {
          var v = (f) => {
              var y = $n(),
                N = a(y, !0);
              t(y), C(() => i(N, e(ee))), p(f, y);
            },
            T = (f) => {
              var y = me(),
                N = le(y);
              {
                var M = (m) => {
                    var x = Pn(),
                      k = a(x, !0);
                    t(x), C((w) => i(k, w), [() => Hr()]), p(m, x);
                  },
                  B = (m) => {
                    var x = me(),
                      k = le(x);
                    lr(
                      k,
                      () => e(n).id,
                      (w) => {
                        var $ = Fn(),
                          S = a($),
                          E = a(S),
                          z = a(E),
                          Y = a(z, !0);
                        t(z);
                        var Q = s(z, 2),
                          ae = a(Q);
                        t(Q), t(E);
                        var X = s(E, 2),
                          P = a(X);
                        P.__click = sa;
                        var U = a(P, !0);
                        t(P);
                        var A = s(P, 2);
                        A.__click = oa;
                        var Z = a(A, !0);
                        t(A);
                        var H = s(A, 2);
                        H.__click = ia;
                        var je = a(H, !0);
                        t(H), t(X), t(S);
                        var Be = s(S, 2),
                          qe = a(Be),
                          Na = a(qe, !0);
                        t(qe);
                        var It = s(qe, 2),
                          $a = a(It, !0);
                        t(It), t(Be);
                        var Ue = s(Be, 2),
                          He = a(Ue),
                          Oe = a(He),
                          Pa = a(Oe, !0);
                        t(Oe);
                        var Lt = s(Oe, 2),
                          Nt = a(Lt);
                        Gt(Nt, {
                          class: "size-8 border",
                          get userId() {
                            return e(n).ownerId;
                          },
                          pictureUrl: void 0,
                        });
                        var Qe = s(Nt, 2);
                        Qe.__click = () => {
                          var g;
                          return (
                            ((g = e(n)) == null ? void 0 : g.ownerId) !==
                              void 0 && gt(e(n).ownerId)
                          );
                        };
                        var Ca = a(Qe, !0);
                        t(Qe), t(Lt), t(He);
                        var We = s(He, 2),
                          $t = s(a(We), 2),
                          Sa = a($t);
                        {
                          var Da = (g) => {
                              var u = Cn(),
                                I = le(u),
                                j = a(I);
                              t(I);
                              var O = s(I, 2);
                              O.__click = () => va(e(n));
                              var G = a(O);
                              Jt(G, { class: "size-4" });
                              var J = s(G);
                              t(O),
                                C(
                                  (re) => {
                                    i(
                                      j,
                                      `Lat: ${e(n).hqLatitude ?? ""}, Lng: ${
                                        e(n).hqLongitude ?? ""
                                      }`
                                    ),
                                      i(J, ` ${re ?? ""}`);
                                  },
                                  [() => Vt()]
                                ),
                                p(g, u);
                            },
                            Ra = (g) => {
                              var u = Sn(),
                                I = a(u, !0);
                              t(u), C((j) => i(I, j), [() => an()]), p(g, u);
                            };
                          q(Sa, (g) => {
                            e(n).hqLatitude != null && e(n).hqLongitude != null
                              ? g(Da)
                              : g(Ra, !1);
                          });
                        }
                        t($t), t(We);
                        var Pt = s(We, 2),
                          Ye = a(Pt),
                          Ma = a(Ye, !0);
                        t(Ye);
                        var Ct = s(Ye, 2),
                          Fa = a(Ct, !0);
                        t(Ct), t(Pt), t(Ue);
                        var St = s(Ue, 2),
                          Ge = a(St),
                          Je = a(Ge),
                          Ke = a(Je),
                          Ta = a(Ke, !0);
                        t(Ke);
                        var Dt = s(Ke, 2),
                          Rt = s(a(Dt)),
                          za = a(Rt, !0);
                        t(Rt), t(Dt), t(Je);
                        var Mt = s(Je, 2),
                          Ae = a(Mt);
                        Ae.__click = () => e(n) && we(e(n).id, !0);
                        var Ft = a(Ae);
                        pr(Ft, { class: "size-4" });
                        var Ea = s(Ft);
                        t(Ae), t(Mt), t(Ge);
                        var Ve = s(Ge, 2),
                          Tt = a(Ve),
                          Xe = a(Tt),
                          zt = a(Xe),
                          Ze = s(a(zt)),
                          ja = a(Ze, !0);
                        t(Ze);
                        var et = s(Ze),
                          Ba = a(et, !0);
                        t(et);
                        var tt = s(et),
                          qa = a(tt, !0);
                        t(tt);
                        var at = s(tt),
                          Ua = a(at, !0);
                        t(at);
                        var Et = s(at),
                          Ha = a(Et, !0);
                        t(Et), t(zt), t(Xe);
                        var jt = s(Xe),
                          Bt = a(jt);
                        it(
                          Bt,
                          17,
                          () => e(n).members,
                          (g) => g.id,
                          (g, u) => {
                            var I = Dn(),
                              j = a(I),
                              O = a(j);
                            {
                              let ot = Pe(() => e(u).picture ?? void 0);
                              Gt(O, {
                                class: "size-8 border",
                                get userId() {
                                  return e(u).id;
                                },
                                get pictureUrl() {
                                  return e(ot);
                                },
                              });
                            }
                            t(j);
                            var G = s(j),
                              J = a(G);
                            J.__click = () => gt(e(u).id);
                            var re = a(J),
                              Ie = s(re),
                              rt = a(Ie);
                            t(Ie), t(J), t(G);
                            var ve = s(G),
                              nt = a(ve, !0);
                            t(ve);
                            var _e = s(ve),
                              ne = a(_e);
                            ne.__click = () => ua(e(u));
                            var Le = a(ne);
                            Jt(Le, { class: "size-4" });
                            var lt = s(Le);
                            t(ne), t(_e);
                            var be = s(_e),
                              qt = a(be),
                              Ne = a(qt);
                            Ne.__click = () => xt(e(u), "member");
                            var st = s(Ne, 2);
                            (st.__click = () => xt(e(u), "admin")),
                              t(qt),
                              t(be);
                            var Ut = s(be),
                              $e = a(Ut);
                            $e.__click = () => da(e(u));
                            var Ga = a($e, !0);
                            t($e),
                              t(Ut),
                              t(I),
                              C(
                                (ot, Ja, Ka, Va) => {
                                  se(J, 1, `link font-semibold ${ot ?? ""}`),
                                    i(re, `${e(u).name ?? ""} `),
                                    i(rt, `#${e(u).id ?? ""}`),
                                    i(nt, Ja),
                                    (ne.disabled =
                                      !e(u).lastPixelLatitude ||
                                      !e(u).lastPixelLongitude),
                                    i(lt, ` ${Ka ?? ""}`),
                                    se(
                                      Ne,
                                      1,
                                      `btn btn-xs join-item w-16 ${
                                        e(u).role === "member"
                                          ? "btn-primary"
                                          : "btn-outline"
                                      }`
                                    ),
                                    (Ne.disabled =
                                      e(_) || e(u).role === "member"),
                                    se(
                                      st,
                                      1,
                                      `btn btn-xs join-item w-16 ${
                                        e(u).role === "admin"
                                          ? "btn-primary"
                                          : "btn-outline"
                                      }`
                                    ),
                                    (st.disabled =
                                      e(_) || e(u).role === "admin"),
                                    ($e.disabled = e(_)),
                                    i(Ga, Va);
                                },
                                [
                                  () => Ce(e(u).id),
                                  () =>
                                    e(u).pixelsPainted.toLocaleString("en-US"),
                                  () => Vt(),
                                  () => cn(),
                                ]
                              ),
                              p(g, I);
                          }
                        );
                        var Oa = s(Bt);
                        {
                          var Qa = (g) => {
                            var u = Rn(),
                              I = a(u),
                              j = a(I, !0);
                            t(I),
                              t(u),
                              C((O) => i(j, O), [() => vn()]),
                              p(g, u);
                          };
                          q(Oa, (g) => {
                            e(n).members.length === 0 && g(Qa);
                          });
                        }
                        t(jt), t(Tt), t(Ve);
                        var Wa = s(Ve, 2);
                        {
                          var Ya = (g) => {
                            var u = Mn(),
                              I = a(u);
                            I.__click = () => mt();
                            var j = a(I, !0);
                            t(I),
                              t(u),
                              C(
                                (O) => {
                                  (I.disabled = e(_)), i(j, O);
                                },
                                [() => Nr()]
                              ),
                              p(g, u);
                          };
                          q(Wa, (g) => {
                            e(na) && g(Ya);
                          });
                        }
                        t(St),
                          t($),
                          C(
                            (
                              g,
                              u,
                              I,
                              j,
                              O,
                              G,
                              J,
                              re,
                              Ie,
                              rt,
                              ve,
                              nt,
                              _e,
                              ne,
                              Le,
                              lt,
                              be
                            ) => {
                              se(z, 1, `text-lg font-semibold ${g ?? ""}`),
                                i(Y, e(n).name),
                                se(
                                  Q,
                                  1,
                                  `badge badge-sm ml-1 border-0 ${u ?? ""} ${
                                    I ?? ""
                                  }`
                                ),
                                i(ae, `#${e(n).id ?? ""}`),
                                (P.disabled = e(_)),
                                i(U, j),
                                (A.disabled = e(_)),
                                i(Z, O),
                                (H.disabled = e(_)),
                                i(je, G),
                                i(Na, J),
                                i($a, e(n).description ?? "—"),
                                i(Pa, re),
                                i(Ca, e(n).ownerName ?? `#${e(n).ownerId}`),
                                i(Ma, Ie),
                                i(Fa, rt),
                                i(Ta, ve),
                                i(za, e(n).membersCount),
                                (Ae.disabled = e(_)),
                                i(Ea, ` ${nt ?? ""}`),
                                i(ja, _e),
                                i(Ba, ne),
                                i(qa, Le),
                                i(Ua, lt),
                                i(Ha, be);
                            },
                            [
                              () => Ce(e(n).id),
                              () => $r(e(n).id),
                              () => Ce(e(n).id),
                              () => Wr(),
                              () => ea(),
                              () => ta(),
                              () => fr(),
                              () => Zr(),
                              () => vt(),
                              () => e(n).pixelsPainted.toLocaleString("en-US"),
                              () => hr(),
                              () => xr(),
                              () => yr(),
                              () => vt(),
                              () => wr(),
                              () => Lr(),
                              () => ln(),
                            ]
                          ),
                          Qt(
                            1,
                            $,
                            () => Zt,
                            () => ({ duration: 120 })
                          ),
                          Qt(
                            2,
                            $,
                            () => Zt,
                            () => ({ duration: 80 })
                          ),
                          p(w, $);
                      }
                    ),
                      p(m, x);
                  };
                q(
                  N,
                  (m) => {
                    e(n) ? m(B, !1) : m(M);
                  },
                  !0
                );
              }
              p(f, y);
            };
          q(
            c,
            (f) => {
              e(ee) ? f(v) : f(T, !1);
            },
            !0
          );
        }
        p(r, l);
      };
    q(ha, (r) => {
      e(_) && !e(n) ? r(ya) : r(wa, !1);
    });
  }
  t(wt), t(De);
  var kt = s(De, 2);
  {
    var ka = (r) => {
      var l = Tn(),
        c = a(l),
        v = a(c),
        T = a(v, !0);
      t(v);
      var f = s(v, 2),
        y = a(f);
      ct(y), (y.__keydown = (w) => w.key === "Enter" && ft()), t(f);
      var N = s(f, 2),
        M = a(N);
      M.__click = () => o(ce, !1);
      var B = a(M, !0);
      t(M);
      var m = s(M, 2);
      m.__click = ft;
      var x = a(m, !0);
      t(m), t(N), t(c);
      var k = s(c, 2);
      (k.__click = () => o(ce, !1)),
        t(l),
        C(
          (w, $, S) => {
            i(T, w), (M.disabled = e(_)), i(B, $), (m.disabled = e(_)), i(x, S);
          },
          [() => mn(), () => _t(), () => Kt()]
        ),
        dt(
          y,
          () => e(pe),
          (w) => o(pe, w)
        ),
        p(r, l);
    };
    q(kt, (r) => {
      e(ce) && r(ka);
    });
  }
  var At = s(kt, 2);
  {
    var Aa = (r) => {
      var l = zn(),
        c = a(l),
        v = a(c),
        T = a(v, !0);
      t(v);
      var f = s(v, 2),
        y = a(f, !0);
      t(f);
      var N = s(f, 2),
        M = a(N);
      ct(M), (M.__keydown = (S) => S.key === "Enter" && pt()), t(N);
      var B = s(N, 2),
        m = a(B);
      m.__click = () => o(de, !1);
      var x = a(m, !0);
      t(m);
      var k = s(m, 2);
      k.__click = pt;
      var w = a(k, !0);
      t(k), t(B), t(c);
      var $ = s(c, 2);
      ($.__click = () => o(de, !1)),
        t(l),
        C(
          (S, E, z, Y) => {
            i(T, S),
              i(y, E),
              (m.disabled = e(_)),
              i(x, z),
              (k.disabled = e(_)),
              i(w, Y);
          },
          [() => ea(), () => xn(), () => _t(), () => Kt()]
        ),
        dt(
          M,
          () => e(xe),
          (S) => o(xe, S)
        ),
        p(r, l);
    };
    q(At, (r) => {
      e(de) && r(Aa);
    });
  }
  var Ia = s(At, 2);
  {
    var La = (r) => {
      var l = jn(),
        c = a(l),
        v = a(c),
        T = a(v, !0);
      t(v);
      var f = s(v, 2),
        y = a(f, !0);
      t(f);
      var N = s(f, 2),
        M = a(N),
        B = a(M),
        m = a(B, !0);
      t(B);
      var x = s(B, 2),
        k = a(x);
      k.value = k.__value = "";
      var w = s(k);
      it(
        w,
        17,
        () => aa,
        (P) => P.value,
        (P, U) => {
          var A = En(),
            Z = a(A, !0);
          t(A);
          var H = {};
          C(() => {
            i(Z, e(U).label),
              H !== (H = e(U).value) &&
                (A.value = (A.__value = e(U).value) ?? "");
          }),
            p(P, A);
        }
      ),
        t(x),
        t(M),
        t(N);
      var $ = s(N, 2),
        S = a($);
      {
        let P = Pe(() => mr()),
          U = Pe(() => (e(V) === "doxxing" ? 20 : 5));
        br(S, {
          class: "h-24 rounded-lg",
          name: "notes",
          get placeholder() {
            return e(P);
          },
          max: 2056,
          get min() {
            return e(U);
          },
          get value() {
            return e(ge);
          },
          set value(A) {
            o(ge, A, !0);
          },
          get validate() {
            return e(he);
          },
          set validate(A) {
            o(he, A, !0);
          },
        });
      }
      t($);
      var E = s($, 2),
        z = a(E);
      z.__click = () => o(te, !1);
      var Y = a(z, !0);
      t(z);
      var Q = s(z, 2);
      Q.__click = ca;
      var ae = a(Q, !0);
      t(Q), t(E), t(c);
      var X = s(c, 2);
      (X.__click = () => o(te, !1)),
        t(l),
        C(
          (P, U, A, Z, H, je) => {
            i(T, P),
              i(y, U),
              i(m, A),
              Ot(x, "aria-label", Z),
              (z.disabled = e(_)),
              i(Y, H),
              (Q.disabled = e(_) || !e(V)),
              i(ae, je);
          },
          [
            () => ta(),
            () => yn(),
            () => Yt(),
            () => Yt(),
            () => _t(),
            () => gr(),
          ]
        ),
        or(
          x,
          () => e(V),
          (P) => o(V, P)
        ),
        p(r, l);
    };
    q(Ia, (r) => {
      e(te) && r(La);
    });
  }
  t(Se),
    C(
      (r, l, c, v, T) => {
        i(_a, r),
          Ot(Te, "placeholder", l),
          (ue.disabled = e(fe)),
          i(ba, c),
          i(ma, v),
          i(fa, T);
      },
      [() => Sr(), () => Mr(), () => kr(), () => Ir(), () => zr()]
    ),
    tr("submit", ke, (r) => {
      r.preventDefault(), bt();
    }),
    dt(
      Te,
      () => e(h),
      (r) => o(h, r)
    ),
    p(b, Se),
    ar();
}
Xa(["click", "keydown"]);
export { fl as component };

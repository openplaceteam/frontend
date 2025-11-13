import "../chunks/ClL9a_Zs.js";
import { o as Ca } from "../chunks/Ba2x20r8.js";
import {
  k as Ga,
  p as Ha,
  m as ke,
  l as d,
  D as ue,
  g as a,
  o,
  f as x,
  a as L,
  d as s,
  s as l,
  t as h,
  b as v,
  c as Wa,
  e as Ya,
  $ as Fa,
  r,
  u as Ne,
  w as H,
  q as gt,
} from "../chunks/iK5FT0Sa.js";
import { s as u } from "../chunks/BHnQYZx5.js";
import { i as S } from "../chunks/6Mc7KQD2.js";
import { e as ce, i as xt } from "../chunks/DcUGKLlr.js";
import { h as Ja } from "../chunks/DDOVU0Bm.js";
import { b as Wt, s as Yt, r as W } from "../chunks/Cw1VVyw7.js";
import { b as de, a as Ka } from "../chunks/yt7z1efG.js";
import { g as Qa } from "../chunks/E8vEVpET.js";
import {
  a as O,
  t as w,
  i as Xa,
  h as Za,
  d as $a,
  e as er,
  g as tr,
} from "../chunks/BcevhAVP.js";
import { L as Ie, g as Y, s as Se, o as ar } from "../chunks/6G5adFH1.js";
import { R as rr } from "../chunks/DIrPyiFz.js";
import { g as I } from "../chunks/DQcFTXWv.js";
import { o as sr } from "../chunks/ignmDRGI.js";
import { c as nr } from "../chunks/Bv_KMhOk.js";
import { l as Ft } from "../chunks/D28eA48x.js";
import { a as lr, n as Jt } from "../chunks/CtNRy5kr.js";
import { e as or } from "../chunks/C5dbJ4r_.js";
import { u as ir, a as ur } from "../chunks/YoKKrauw.js";
(function () {
  try {
    var _ =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    _.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var _ =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      c = new _.Error().stack;
    c &&
      ((_._sentryDebugIds = _._sentryDebugIds || {}),
      (_._sentryDebugIds[c] = "0f4f927d-581d-4213-8b1f-241d67486257"),
      (_._sentryDebugIdIdentifier =
        "sentry-dbid-0f4f927d-581d-4213-8b1f-241d67486257"));
  })();
} catch {}
const cr = () => "Select all",
  dr = () => "Selecionar tudo",
  vr = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? cr() : dr()),
  _r = () => "Open reports",
  pr = () => "Reports abertos",
  mr = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? _r() : pr()),
  br = () => "An error occurred. Please try again later.",
  fr = () => "Ocorreu um erro. Por favor, tente novamente mais tarde.",
  ve = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? br() : fr()),
  gr = () => "User bulk modifications",
  xr = () => "Modificações em massa de usuários",
  hr = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? gr() : xr()),
  yr = () => "Ban users",
  wr = () => "Banir usuários",
  kr = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? yr() : wr()),
  Nr = () => "Type user IDs (separated by commas)",
  Ir = () => "ID dos usuários (separados por vírgulas)",
  De = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? Nr() : Ir()),
  Sr = () => "Invalid IDs",
  Dr = () => "IDs inválidos",
  Kt = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? Sr() : Dr()),
  Tr = () => "Timeout users",
  Ur = () => "Suspender usuários",
  Qt = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? Tr() : Ur()),
  Ar = () => "Increment/decrement droplets",
  Br = () => "Incrementar/decrementar droplets",
  Er = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? Ar() : Br()),
  Rr = () => "Please enter a valid non-zero number",
  zr = () => "Please enter a valid non-zero number",
  Lr = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? Rr() : zr()),
  Or = () => "Users droplets changed successfully",
  Pr = () => "Usuários com droplets alterados com sucesso",
  jr = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? Or() : Pr()),
  Mr = () => "Unban users",
  Vr = () => "Desbanir usuários",
  Xt = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? Mr() : Vr()),
  qr = () => "Users unbanned successfully",
  Cr = () => "Usuários desbanidos com sucesso",
  Gr = (_ = {}, c = {}) => ((c.locale ?? I()) === "en" ? qr() : Cr());
var Hr = x(
    '<label class="flex items-center gap-2"><input type="checkbox" class="checkbox checkbox-sm"/> <span class="text-sm"> </span></label>'
  ),
  Wr = x(
    '<div class="text-base-content/80 flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div>'
  ),
  Yr = x('<p class="text-error"> </p>'),
  Fr = x(
    '<div class="bg-base-200 border-base-200 rounded-xl border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-lg font-bold leading-none"> </div></div>'
  ),
  Jr = x(
    '<div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div class="bg-base-200 flex items-baseline gap-3 rounded-lg px-4 py-2"><div><div class="text-base-content/70 text-sm">Total</div> <div class="text-4xl font-extrabold leading-none"> </div></div> <div class="text-base-content/60 text-xs"> </div></div> <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"></div></div>'
  ),
  Kr = x('<p class="text-base-content/80"> </p>'),
  Qr = x(
    '<div class="text-base-content/80 flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div>'
  ),
  Xr = x('<p class="text-error"> </p>'),
  Zr = x(
    '<div class="bg-base-200 border-base-200 rounded-xl border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-lg font-bold leading-none"> </div></div>'
  ),
  $r = x(
    '<div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div class="bg-base-200 flex items-baseline gap-3 rounded-lg px-4 py-2"><div><div class="text-base-content/70 text-sm">Total</div> <div class="text-4xl font-extrabold leading-none"> </div></div> <div class="text-base-content/60 text-xs"> </div></div> <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"></div></div>'
  ),
  es = x('<p class="text-base-content/80"> </p>'),
  ts = x("<option> </option>"),
  as = x('<span class="loading loading-spinner loading-sm"></span>'),
  rs = x("<option> </option>"),
  ss = x('<span class="loading loading-spinner loading-sm"></span>'),
  ns = x('<span class="loading loading-spinner loading-sm"></span>'),
  ls = x(
    '<section class="rounded-box bg-base-100 border-base-300 m-3 border p-4 shadow"><div class="mb-3 flex items-center justify-between"><h2 class="text-xl font-semibold"> </h2> <div class="flex items-center gap-2"><button class="btn btn-sm" title="Selecionar tudo"> </button> <button class="btn btn-sm" title="Limpar seleção"> </button> <button class="btn btn-circle btn-sm" title="Atualizar"><!></button></div></div> <div class="mb-4 flex flex-wrap gap-3"></div> <div class="rounded-box bg-base-100 border-base-300 border p-4"><!></div> <div class="rounded-box bg-base-100 border-base-300 mt-4 border p-4"><div class="mb-2"><h3 class="text-lg font-semibold"> </h3></div> <!></div></section> <section class="rounded-box bg-base-100 border-base-300 m-3 border p-4 shadow"><h2 class="text-xl font-semibold"> </h2> <div class="rounded-box bg-base-100 border-base-300 mb-4 border p-4"><section id="ban-users" class="mb-6"><h3 class="text-lg font-semibold"> </h3> <div class="flex flex-col gap-3 sm:flex-row sm:items-start"><label class="form-control w-full max-w-xs" for="user-ids"><span class="label-text text-sm"> </span> <input id="user-ids" type="text" placeholder="12314, 4566544, 7897897" class="input input-bordered w-full" aria-describedby="user-ids-help" inputmode="numeric"/>  <section class="mt-2"><!></section></label> <section class="w-full max-w-xs sm:mt-0"><label class="form-control w-full" for="ban-reason"><span class="label-text text-sm"> </span> <select id="ban-reason" class="select select-bordered"><option disabled>Select</option><!></select></label></section> <button class="btn btn-primary sm:mt-5.5 w-full max-w-xs"><!></button></div></section> <section id="timeout-users" class="mb-6"><h3 class="text-lg font-semibold"> </h3> <div class="flex flex-col gap-3 sm:flex-row sm:items-start"><label class="form-control w-full max-w-xs" for="user-ids"><span class="label-text text-sm"> </span> <input id="user-ids" type="text" placeholder="12314, 4566544, 7897897" class="input input-bordered w-full" aria-describedby="user-ids-help" inputmode="numeric"/> <section class="mt-2"><!></section></label> <section class="w-full max-w-xs sm:mt-0"><label class="form-control w-full" for="ban-reason"><span class="label-text text-sm"> </span> <select id="ban-reason" class="select select-bordered"><option disabled>Select</option><!></select></label></section> <button class="btn btn-primary sm:mt-5.5 w-full max-w-xs"><!></button></div></section> <section id="unban-users" class="mt-6"><h3 class="text-lg font-semibold"> </h3> <div class="flex flex-col gap-3 sm:flex-row sm:items-start"><label class="form-control w-full max-w-xs" for="user-ids"><span class="label-text text-sm"> </span> <input id="user-ids" type="text" placeholder="12314, 4566544, 7897897" class="input input-bordered w-full" aria-describedby="user-ids-help" inputmode="numeric"/> <section class="mt-2"><!></section></label> <button class="btn btn-primary sm:mt-5.5 w-full max-w-xs"><!></button></div></section> <section id="change droplets"><h3 class="text-lg font-semibold"> </h3> <div class="flex flex-col gap-3 sm:flex-row sm:items-start"><label class="form-control w-full max-w-xs" for="user-ids"><span class="label-text text-sm"> </span> <input id="user-ids" type="text" placeholder="12314, 4566544, 7897897" class="input input-bordered w-full" aria-describedby="user-ids-help" inputmode="numeric"/> <section class="mt-2"><!></section></label> <input class="input input-bordered mt-5.5 w-24" type="number" placeholder="+/- valor"/> <button class="btn btn-primary mt-5.5 w-24"> </button></div></section></div></section>',
    1
  );
function Ds(_, c) {
  Ha(c, !0);
  let i = d(!0),
    P = d(null),
    j = d(null),
    M = d(""),
    F = d(""),
    V = d(""),
    J = d(""),
    K = d(""),
    Q = d(""),
    _e = d(""),
    pe = d(""),
    X = d(""),
    q = d(""),
    Z = d(""),
    Zt = d(!1),
    $t = d(null),
    ht = d(!1);
  const yt = new Date();
  ke(yt), ke(new Date(yt.getTime() + 10080 * 60 * 1e3));
  let wt = d(ke([])),
    Te = d(""),
    kt = d(null),
    C = d(null);
  function Ue() {
    return !(
      a(K).length < 5 ||
      a(M) == null ||
      a(M).trim().length === 0 ||
      a(F).length == 0
    );
  }
  function Ae() {
    return !(
      a(Q).length < 5 ||
      a(V) == null ||
      a(V).trim().length === 0 ||
      a(J).length == 0
    );
  }
  ue(() => {
    a(M), a(F), a(K), Ue();
  }),
    ue(() => {
      a(V), a(J), a(Q), Ae();
    });
  let Be = d(!0),
    Ee = d(!0);
  ue(() => {
    o(Be, !Ue()), o(Ee, !Ae());
  });
  const Nt = [
    { value: "inappropriate-content", label: Xa() },
    { value: "hate-speech", label: Za() },
    { value: "doxxing", label: $a() },
    { value: "bot", label: er() },
    { value: "griefing", label: tr() },
    { value: "other", label: ar() },
  ];
  let $ = d(null);
  const G = [
    { key: "doxxing", label: "Doxxing" },
    { key: "inappropriate_content", label: "Inappropriate" },
    { key: "hate_speech", label: "Hate Speech" },
    { key: "bot", label: "Bot" },
    { key: "other", label: "Other" },
    { key: "griefing", label: "Griefing" },
  ];
  let T = ke({
      doxxing: !0,
      inappropriate_content: !0,
      hate_speech: !0,
      bot: !0,
      other: !0,
      griefing: !0,
    }),
    Re = d(0),
    ze = d(0);
  ue(() => {
    const e = a(j);
    if (!e) {
      o(Re, 0);
      return;
    }
    let t = 0;
    for (const n of G) T[n.key] && (t += e[n.key]);
    o(Re, t, !0);
  }),
    ue(() => {
      const e = a($);
      if (!e) {
        o(ze, 0);
        return;
      }
      let t = 0;
      for (const n of G) T[n.key] && (t += e[n.key]);
      o(ze, t, !0);
    });
  async function It() {
    try {
      o(i, !0),
        o(P, null),
        o(j, await O.getOpenTicketsSummary(), !0),
        o($, await O.getOpenReportsSummary(), !0);
    } catch (e) {
      e.status === 403 || e.status === 401
        ? Qa("/404")
        : o(P, (e == null ? void 0 : e.message) ?? or(), !0),
        o(j, null);
    } finally {
      o(i, !1);
    }
    ra();
  }
  Ca(It);
  function St(e) {
    for (const t of G) T[t.key] = e;
  }
  async function ea() {
    if (a(Be)) return;
    let e = a(M)
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0 && !isNaN(Number(t)))
      .map((t) => Number(t));
    try {
      o(i, !0), await O.banUsers(e, a(F), a(K)), w.success(ir());
    } catch (t) {
      w.error((t == null ? void 0 : t.message) ?? ve());
    } finally {
      o(i, !1);
    }
  }
  async function ta() {
    if (a(Ee)) return;
    let e = a(V)
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0 && !isNaN(Number(t)))
      .map((t) => Number(t));
    try {
      o(i, !0), await O.timeoutUsers(e, a(J), a(Q)), w.success(ur());
    } catch (t) {
      w.error((t == null ? void 0 : t.message) ?? ve());
    } finally {
      o(i, !1);
    }
  }
  async function aa() {
    if (a(i)) return;
    if (a(q) == null || a(q).trim().length === 0) {
      w.error(Kt());
      return;
    }
    if (a(Z).length < 5) {
      w.error(Y());
      return;
    }
    let e = a(q)
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0 && !isNaN(Number(t)))
      .map((t) => Number(t));
    try {
      o(i, !0), await O.postUnbanUsers(e, a(Z)), w.success(Gr());
    } catch (t) {
      w.error((t == null ? void 0 : t.message) ?? ve());
    } finally {
      o(i, !1);
    }
  }
  async function Dt() {
    if (a(i)) return;
    const e = Number(a(pe));
    if (isNaN(e) || e === 0) {
      w.error(Lr());
      return;
    }
    if (a(X).length < 5) {
      w.error(Y());
      return;
    }
    let t = a(_e)
      .split(",")
      .map((n) => n.trim())
      .filter((n) => n.length > 0 && !isNaN(Number(n)))
      .map((n) => Number(n));
    if (t.length === 0) {
      w.error(Kt());
      return;
    }
    try {
      o(i, !0), await O.incrementUsersDroplets(t, e, a(X)), w.success(jr());
    } catch (n) {
      w.error((n == null ? void 0 : n.message) ?? ve());
    } finally {
      o(i, !1);
    }
  }
  async function ra() {
    try {
      o(ht, !0);
      const e = await O.getEventStatus();
      o(wt, e.events ?? [], !0);
      const t = a(wt).filter((n) => n.active);
      o(Zt, t.length > 0),
        o(
          $t,
          t.length === 1
            ? t[0].eventName
            : t.length > 1
            ? `${t.length} ativos`
            : null,
          !0
        ),
        (!a(Te) || a(Te) === "") && t.length > 0 && o(Te, t[0].eventName, !0);
    } catch (e) {
      w.error((e == null ? void 0 : e.message) ?? ve());
    } finally {
      o(ht, !1);
    }
  }
  var Tt = ls();
  Ja("169czl3", (e) => {
    Ya(() => {
      Fa.title = "openplace - Admin Dashboard";
    });
  });
  var Le = L(Tt),
    Oe = s(Le),
    Pe = s(Oe),
    sa = s(Pe, !0);
  r(Pe);
  var Ut = l(Pe, 2),
    me = s(Ut);
  me.__click = () => St(!0);
  var na = s(me, !0);
  r(me);
  var be = l(me, 2);
  be.__click = () => St(!1);
  var la = s(be, !0);
  r(be);
  var fe = l(be, 2);
  fe.__click = It;
  var oa = s(fe);
  rr(oa, { class: "size-4" }), r(fe), r(Ut), r(Oe);
  var je = l(Oe, 2);
  ce(
    je,
    21,
    () => G,
    xt,
    (e, t) => {
      var n = Hr(),
        m = s(n);
      W(m);
      var p = l(m, 2),
        b = s(p, !0);
      r(p),
        r(n),
        h(() => u(b, a(t).label)),
        Ka(
          m,
          () => T[a(t).key],
          (f) => (T[a(t).key] = f)
        ),
        v(e, n);
    }
  ),
    r(je);
  var Me = l(je, 2),
    ia = s(Me);
  {
    var ua = (e) => {
        var t = Wr(),
          n = l(s(t), 2),
          m = s(n, !0);
        r(n), r(t), h((p) => u(m, p), [() => Ft()]), v(e, t);
      },
      ca = (e) => {
        var t = H(),
          n = L(t);
        {
          var m = (b) => {
              var f = Yr(),
                D = s(f, !0);
              r(f), h(() => u(D, a(P))), v(b, f);
            },
            p = (b) => {
              var f = H(),
                D = L(f);
              {
                var ae = (y) => {
                    var g = Jr(),
                      k = s(g),
                      N = s(k),
                      U = l(s(N), 2),
                      se = s(U, !0);
                    r(U), r(N);
                    var A = l(N, 2),
                      ne = s(A);
                    r(A), r(k);
                    var le = l(k, 2);
                    ce(
                      le,
                      21,
                      () => G,
                      xt,
                      (_t, B) => {
                        var oe = H(),
                          pt = L(oe);
                        {
                          var mt = (E) => {
                            var R = Fr(),
                              z = s(R),
                              bt = s(z, !0);
                            r(z);
                            var ie = l(z, 2),
                              ft = s(ie, !0);
                            r(ie),
                              r(R),
                              h(() => {
                                u(bt, a(B).label), u(ft, a(j)[a(B).key]);
                              }),
                              v(E, R);
                          };
                          S(pt, (E) => {
                            T[a(B).key] && E(mt);
                          });
                        }
                        v(_t, oe);
                      }
                    ),
                      r(le),
                      r(g),
                      h(() => {
                        u(se, a(Re)),
                          u(ne, `Base: ${a(j).total_open_tickets ?? ""}`);
                      }),
                      v(y, g);
                  },
                  re = (y) => {
                    var g = Kr(),
                      k = s(g, !0);
                    r(g), h((N) => u(k, N), [() => Jt()]), v(y, g);
                  };
                S(
                  D,
                  (y) => {
                    a(j) ? y(ae) : y(re, !1);
                  },
                  !0
                );
              }
              v(b, f);
            };
          S(
            n,
            (b) => {
              a(P) ? b(m) : b(p, !1);
            },
            !0
          );
        }
        v(e, t);
      };
    S(ia, (e) => {
      a(i) ? e(ua) : e(ca, !1);
    });
  }
  r(Me);
  var At = l(Me, 2),
    Ve = s(At),
    Bt = s(Ve),
    da = s(Bt, !0);
  r(Bt), r(Ve);
  var va = l(Ve, 2);
  {
    var _a = (e) => {
        var t = Qr(),
          n = l(s(t), 2),
          m = s(n, !0);
        r(n), r(t), h((p) => u(m, p), [() => Ft()]), v(e, t);
      },
      pa = (e) => {
        var t = H(),
          n = L(t);
        {
          var m = (b) => {
              var f = Xr(),
                D = s(f, !0);
              r(f), h(() => u(D, a(P))), v(b, f);
            },
            p = (b) => {
              var f = H(),
                D = L(f);
              {
                var ae = (y) => {
                    var g = $r(),
                      k = s(g),
                      N = s(k),
                      U = l(s(N), 2),
                      se = s(U, !0);
                    r(U), r(N);
                    var A = l(N, 2),
                      ne = s(A);
                    r(A), r(k);
                    var le = l(k, 2);
                    ce(
                      le,
                      21,
                      () => G,
                      xt,
                      (_t, B) => {
                        var oe = H(),
                          pt = L(oe);
                        {
                          var mt = (E) => {
                            var R = Zr(),
                              z = s(R),
                              bt = s(z, !0);
                            r(z);
                            var ie = l(z, 2),
                              ft = s(ie, !0);
                            r(ie),
                              r(R),
                              h(() => {
                                u(bt, a(B).label), u(ft, a($)[a(B).key]);
                              }),
                              v(E, R);
                          };
                          S(pt, (E) => {
                            T[a(B).key] && E(mt);
                          });
                        }
                        v(_t, oe);
                      }
                    ),
                      r(le),
                      r(g),
                      h(() => {
                        u(se, a(ze)),
                          u(ne, `Base: ${a($).total_open_reports ?? ""}`);
                      }),
                      v(y, g);
                  },
                  re = (y) => {
                    var g = es(),
                      k = s(g, !0);
                    r(g), h((N) => u(k, N), [() => Jt()]), v(y, g);
                  };
                S(
                  D,
                  (y) => {
                    a($) ? y(ae) : y(re, !1);
                  },
                  !0
                );
              }
              v(b, f);
            };
          S(
            n,
            (b) => {
              a(P) ? b(m) : b(p, !1);
            },
            !0
          );
        }
        v(e, t);
      };
    S(va, (e) => {
      a(i) ? e(_a) : e(pa, !1);
    });
  }
  r(At), r(Le);
  var Et = l(Le, 2),
    qe = s(Et),
    ma = s(qe, !0);
  r(qe);
  var Rt = l(qe, 2),
    Ce = s(Rt),
    Ge = s(Ce),
    ba = s(Ge, !0);
  r(Ge);
  var zt = l(Ge, 2),
    He = s(zt),
    We = s(He),
    fa = s(We, !0);
  r(We);
  var Ye = l(We, 2);
  W(Ye);
  var Lt = l(Ye, 2),
    ga = s(Lt);
  {
    let e = Ne(() => Y());
    Ie(ga, {
      class: "h-24 rounded-lg",
      name: "notes",
      get placeholder() {
        return a(e);
      },
      max: 2056,
      min: 5,
      get value() {
        return a(K);
      },
      set value(t) {
        o(K, t, !0);
      },
      get validate() {
        return a(kt);
      },
      set validate(t) {
        o(kt, t, !0);
      },
    });
  }
  r(Lt), r(He);
  var Fe = l(He, 2),
    Ot = s(Fe),
    Je = s(Ot),
    xa = s(Je, !0);
  r(Je);
  var ee = l(Je, 2);
  ee.__change = () => {
    Ue();
  };
  var Ke = s(ee);
  Ke.value = Ke.__value = "";
  var ha = l(Ke);
  ce(
    ha,
    17,
    () => Nt,
    (e) => e.value,
    (e, t) => {
      var n = ts(),
        m = s(n, !0);
      r(n);
      var p = {};
      h(() => {
        u(m, a(t).label),
          p !== (p = a(t).value) && (n.value = (n.__value = a(t).value) ?? "");
      }),
        v(e, n);
    }
  ),
    r(ee),
    r(Ot),
    r(Fe);
  var ge = l(Fe, 2);
  ge.__click = ea;
  var ya = s(ge);
  {
    var wa = (e) => {
        var t = as();
        v(e, t);
      },
      ka = (e) => {
        var t = gt("Ban users");
        v(e, t);
      };
    S(ya, (e) => {
      a(i) ? e(wa) : e(ka, !1);
    });
  }
  r(ge), r(zt), r(Ce);
  var Qe = l(Ce, 2),
    Xe = s(Qe),
    Na = s(Xe, !0);
  r(Xe);
  var Pt = l(Xe, 2),
    Ze = s(Pt),
    $e = s(Ze),
    Ia = s($e, !0);
  r($e);
  var et = l($e, 2);
  W(et);
  var jt = l(et, 2),
    Sa = s(jt);
  {
    let e = Ne(() => Y());
    Ie(Sa, {
      class: "h-24 rounded-lg",
      name: "notes",
      get placeholder() {
        return a(e);
      },
      max: 2056,
      min: 5,
      get value() {
        return a(Q);
      },
      set value(t) {
        o(Q, t, !0);
      },
      get validate() {
        return a(C);
      },
      set validate(t) {
        o(C, t, !0);
      },
    });
  }
  r(jt), r(Ze);
  var tt = l(Ze, 2),
    Mt = s(tt),
    at = s(Mt),
    Da = s(at, !0);
  r(at);
  var te = l(at, 2);
  te.__change = () => {
    Ae();
  };
  var rt = s(te);
  rt.value = rt.__value = "";
  var Ta = l(rt);
  ce(
    Ta,
    17,
    () => Nt,
    (e) => e.value,
    (e, t) => {
      var n = rs(),
        m = s(n, !0);
      r(n);
      var p = {};
      h(() => {
        u(m, a(t).label),
          p !== (p = a(t).value) && (n.value = (n.__value = a(t).value) ?? "");
      }),
        v(e, n);
    }
  ),
    r(te),
    r(Mt),
    r(tt);
  var xe = l(tt, 2);
  xe.__click = ta;
  var Ua = s(xe);
  {
    var Aa = (e) => {
        var t = ss();
        v(e, t);
      },
      Ba = (e) => {
        var t = gt();
        h((n) => u(t, n), [() => Qt()]), v(e, t);
      };
    S(Ua, (e) => {
      a(i) ? e(Aa) : e(Ba, !1);
    });
  }
  r(xe), r(Pt), r(Qe);
  var st = l(Qe, 2),
    nt = s(st),
    Ea = s(nt, !0);
  r(nt);
  var Vt = l(nt, 2),
    lt = s(Vt),
    ot = s(lt),
    Ra = s(ot, !0);
  r(ot);
  var it = l(ot, 2);
  W(it);
  var qt = l(it, 2),
    za = s(qt);
  {
    let e = Ne(() => Y());
    Ie(za, {
      class: "h-24 rounded-lg",
      name: "notes",
      get placeholder() {
        return a(e);
      },
      max: 2056,
      min: 5,
      get value() {
        return a(Z);
      },
      set value(t) {
        o(Z, t, !0);
      },
      get validate() {
        return a(C);
      },
      set validate(t) {
        o(C, t, !0);
      },
    });
  }
  r(qt), r(lt);
  var he = l(lt, 2);
  he.__click = aa;
  var La = s(he);
  {
    var Oa = (e) => {
        var t = ns();
        v(e, t);
      },
      Pa = (e) => {
        var t = gt();
        h((n) => u(t, n), [() => Xt()]), v(e, t);
      };
    S(La, (e) => {
      a(i) ? e(Oa) : e(Pa, !1);
    });
  }
  r(he), r(Vt), r(st);
  var Ct = l(st, 2),
    ut = s(Ct),
    ja = s(ut, !0);
  r(ut);
  var Gt = l(ut, 2),
    ct = s(Gt),
    dt = s(ct),
    Ma = s(dt, !0);
  r(dt);
  var vt = l(dt, 2);
  W(vt);
  var Ht = l(vt, 2),
    Va = s(Ht);
  {
    let e = Ne(() => Y());
    Ie(Va, {
      class: "h-24 rounded-lg",
      name: "notes",
      get placeholder() {
        return a(e);
      },
      max: 2056,
      min: 5,
      get value() {
        return a(X);
      },
      set value(t) {
        o(X, t, !0);
      },
      get validate() {
        return a(C);
      },
      set validate(t) {
        o(C, t, !0);
      },
    });
  }
  r(Ht), r(ct);
  var ye = l(ct, 2);
  W(ye),
    (ye.__keydown = (e) => {
      e.key === "Enter" && Dt();
    });
  var we = l(ye, 2);
  we.__click = Dt;
  var qa = s(we, !0);
  r(we),
    r(Gt),
    r(Ct),
    r(Rt),
    r(Et),
    h(
      (e, t, n, m, p, b, f, D, ae, re, y, g, k, N, U, se, A, ne) => {
        u(sa, e),
          u(na, t),
          u(la, n),
          (fe.disabled = a(i)),
          u(da, m),
          u(ma, p),
          u(ba, b),
          u(fa, f),
          u(xa, D),
          Yt(ee, "aria-label", ae),
          (ge.disabled = a(Be) || a(i)),
          u(Na, re),
          u(Ia, y),
          u(Da, g),
          Yt(te, "aria-label", k),
          (xe.disabled = a(Ee) || a(i)),
          u(Ea, N),
          u(Ra, U),
          (he.disabled = a(q) == "" || a(Z).length < 5 || a(i)),
          u(ja, se),
          u(Ma, A),
          (we.disabled = a(_e) == "" || a(X).length < 5 || a(pe) == "" || a(i)),
          u(qa, ne);
      },
      [
        () => sr(),
        () => vr(),
        () => nr(),
        () => mr(),
        () => hr(),
        () => kr(),
        () => De(),
        () => {
          var e;
          return ((e = Se) == null ? void 0 : e()) ?? "Select the reason";
        },
        () => {
          var e;
          return ((e = Se) == null ? void 0 : e()) ?? "Select the reason";
        },
        () => Qt(),
        () => De(),
        () => {
          var e;
          return ((e = Se) == null ? void 0 : e()) ?? "Select the reason";
        },
        () => {
          var e;
          return ((e = Se) == null ? void 0 : e()) ?? "Select the reason";
        },
        () => Xt(),
        () => De(),
        () => Er(),
        () => De(),
        () => lr(),
      ]
    ),
    de(
      Ye,
      () => a(M),
      (e) => o(M, e)
    ),
    Wt(
      ee,
      () => a(F),
      (e) => o(F, e)
    ),
    de(
      et,
      () => a(V),
      (e) => o(V, e)
    ),
    Wt(
      te,
      () => a(J),
      (e) => o(J, e)
    ),
    de(
      it,
      () => a(q),
      (e) => o(q, e)
    ),
    de(
      vt,
      () => a(_e),
      (e) => o(_e, e)
    ),
    de(
      ye,
      () => a(pe),
      (e) => o(pe, e)
    ),
    v(_, Tt),
    Wa();
}
Ga(["click", "change", "keydown"]);
export { Ds as component };

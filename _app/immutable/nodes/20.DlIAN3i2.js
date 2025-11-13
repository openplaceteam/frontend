import "../chunks/ClL9a_Zs.js";
import {
  z as Ut,
  b as L,
  k as ra,
  p as sa,
  D as oa,
  g as e,
  l as $,
  o as u,
  w as bt,
  v as U,
  a as Ce,
  c as na,
  by as F,
  u as O,
  f as le,
  d as r,
  r as a,
  s,
  n as ht,
  t as Te,
} from "../chunks/iK5FT0Sa.js";
import { s as I } from "../chunks/BHnQYZx5.js";
import { i as Re } from "../chunks/6Mc7KQD2.js";
import { e as la } from "../chunks/DcUGKLlr.js";
import {
  d as zt,
  c as xt,
  a as W,
  s as ne,
  f as wt,
  r as ia,
} from "../chunks/Cw1VVyw7.js";
import { b as ca } from "../chunks/yt7z1efG.js";
import { b as Me } from "../chunks/DnZ5W6UV.js";
import { g as da } from "../chunks/E8vEVpET.js";
import { g as yt, P as ua } from "../chunks/B3m8Ax5i.js";
import { S as It, u as b, t as Pe, c as va } from "../chunks/BcevhAVP.js";
import {
  r as pa,
  P as Ee,
  D as _a,
  a as fa,
  I as ma,
  b as ga,
  e as ba,
  c as ha,
} from "../chunks/BptsAMEP.js";
import { P as X } from "../chunks/DUpX1e05.js";
import { A as xa, c as wa } from "../chunks/DpS0PshJ.js";
import { r as Ct } from "../chunks/ClBgBzqC.js";
import { g as z } from "../chunks/DQcFTXWv.js";
import { c as ya } from "../chunks/BRvsRNeX.js";
import { c as Ia } from "../chunks/y2OiVH5z.js";
import { a as ka } from "../chunks/D6qiv33a.js";
import { h as Da, r as $a } from "../chunks/UjG3PxiF.js";
(function () {
  try {
    var i =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    i.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var i =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      c = new i.Error().stack;
    c &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[c] = "28268fcd-cc5b-4bdc-aab5-a79d254f02e3"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-28268fcd-cc5b-4bdc-aab5-a79d254f02e3"));
  })();
} catch {}
const Ua = (i) => `unexpected url format: ${i.url}`,
  za = (i) => `formato da url inesperado: ${i.url}`,
  Ca = (i, c = {}) => ((c.locale ?? z()) === "en" ? Ua(i) : za(i)),
  Ta = () => "Canvas does not have 2d context",
  Ra = () => "A tela não tem contexto 2D",
  Ma = (i = {}, c = {}) => ((c.locale ?? z()) === "en" ? Ta() : Ra()),
  Pa = () => "Failed to upload the image. Check the file uploaded.",
  Ea = () => "Falha ao enviar a imagem. Verifique o arquivo enviado.",
  La = (i = {}, c = {}) => ((c.locale ?? z()) === "en" ? Pa() : Ea()),
  Sa = () =>
    "Disclaimer: inappropriate pictures may be removed without notice.",
  Aa = () =>
    "Aviso: Imagens inapropriadas podem ser removidas sem aviso prévio.",
  Ha = (i = {}, c = {}) => ((c.locale ?? z()) === "en" ? Sa() : Aa()),
  qa = () => "Failed to send image to the server.",
  Ba = () => "Falha ao enviar imagem para o servidor.",
  Ya = (i = {}, c = {}) => ((c.locale ?? z()) === "en" ? qa() : Ba()),
  Fa = () => "You are not logged in",
  Xa = () => "Você não está logado",
  Za = (i = {}, c = {}) => ((c.locale ?? z()) === "en" ? Fa() : Xa()),
  Oa = () => "Home",
  Wa = () => "Início",
  ja = (i = {}, c = {}) => ((c.locale ?? z()) === "en" ? Oa() : Wa()),
  Na = () => "Preferably, use a 16x16 image",
  Ka = () => "De preferência uma imagem 16x16",
  Va = (i = {}, c = {}) => ((c.locale ?? z()) === "en" ? Na() : Ka()),
  Ga = () => "Upload",
  Ja = () => "Upload",
  Qa = (i = {}, c = {}) => ((c.locale ?? z()) === "en" ? Ga() : Ja()),
  er = () => "Draw profile picture",
  tr = () => "Imagem de perfil",
  ar = (i = {}, c = {}) => ((c.locale ?? z()) === "en" ? er() : tr()),
  rr = () => "Preview",
  sr = () => "Prévia",
  kt = (i = {}, c = {}) => ((c.locale ?? z()) === "en" ? rr() : sr());
var or = Ut(
  '<svg><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>'
);
function Dt(i, c) {
  let h = Ct(c, ["$$slots", "$$events", "$$legacy"]);
  var T = or();
  zt(T, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...h,
  })),
    L(i, T);
}
var nr = Ut(
  '<svg><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>'
);
function $t(i, c) {
  let h = Ct(c, ["$$slots", "$$events", "$$legacy"]);
  var T = nr();
  zt(T, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...h,
  })),
    L(i, T);
}
var lr = le("<div><button></button></div>"),
  ir = le(
    '<span class="center-absolute loading loading-spinner absolute"></span>'
  ),
  cr = le(
    '<div class="relative mx-auto flex h-full max-w-[1920px] flex-col gap-2 p-4 max-sm:overflow-hidden sm:gap-4"><header class="relative flex items-center justify-between"><div class="flex items-center gap-2"><a href="/" class="btn btn-ghost btn-circle"><!></a> <h2 class="text-xl font-bold sm:text-2xl"> </h2> <div class="ml-2 max-sm:hidden"><div class="tooltip tooltip-bottom"><label class="btn"><!> <input class="hidden" type="file" accept="image/*"/></label></div></div> <button class="btn btn-circle max-sm:hidden"><!></button></div> <div class="absolute left-1/2 -translate-x-1/2 max-lg:pointer-events-none max-sm:hidden"><div class="flex items-center gap-2"><span class="text-base-content/80 mr-2 max-lg:invisible"> </span> <!> <!> <!></div></div> <!></header> <div class="grid grid-cols-1 gap-4 sm:grow sm:grid-cols-[auto_1fr] sm:gap-6"><section class="bg-base-200 border-base-content/30 relative aspect-square w-full touch-none border-2 sm:h-[min(50vw,85vh)]"><canvas width="16" height="16"></canvas> <canvas width="16" height="16"></canvas> <svg class="text-base-content/20 pointer-events-none absolute left-0 top-0 size-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><mask id="circleMask"><rect width="100%" height="100%" fill="white"></rect><circle cx="50" cy="50" r="50" fill="black"></circle></mask></defs><rect x="0" y="0" width="100" height="100" fill="currentColor" mask="url(#circleMask)"></rect></svg></section> <section class="flex items-center justify-between sm:hidden"><div class="flex items-center gap-2"><span class="text-base-content/80 mr-2"> </span> <!> <!> <!></div> <div class="flex gap-2"><button class="btn btn-circle"><!></button> <div class="tooltip tooltip-bottom before:-translate-x-1/3" data-tip="Preferably a 16x16 image"><label class="btn btn-circle"><!> <input class="hidden" type="file" accept="image/*"/></label></div></div></section> <section class="flex flex-col justify-between max-sm:absolute max-sm:bottom-4 max-sm:w-[calc(100%-2rem)]"><div class="grid grid-cols-8 gap-0.5 sm:grid-cols-6 sm:gap-1"></div> <div class="flex justify-between gap-2 max-sm:mt-4"><label class="btn btn-lg btn-square sm:btn-xl relative shadow-md"><span class="border-base-content/20 size-6 rounded-full border-2"></span> <input class="absolute left-0 top-0 size-0" type="color"/></label> <div data-tip="Not enough droplets"><button class="btn btn-primary btn-lg sm:btn-xl relative"> <span class="flex items-center gap-1 text-base"><!> </span></button></div> <div class="tooltip"><div class="tooltip-content not-touchscreen:-translate-x-[10%]"> <kbd class="kbd kbd-xs text-base-content touchscreen:hidden ml-0.5 rounded-md">E</kbd></div> <button><!></button></div></div></section></div></div> <!> <dialog class="modal"><div class="modal-box max-w-sm"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <h3 class="flex items-center gap-1.5 text-lg font-bold"> </h3> <div class="mt-2 flex items-center gap-2"><!> <!> <!> <!></div> <p class="text-base-content/80 mt-2 text-sm"> </p> <div class="mt-4 flex justify-end gap-2"><button class="btn btn-soft"> </button> <button class="btn btn-primary relative"> <!></button></div></div> <form method="dialog" class="modal-backdrop"><button> </button></form></dialog>',
    1
  ),
  dr = le(
    '<div class="flex size-full flex-col items-center justify-center gap-2"><span class="text-lg"> </span> <a class="btn btn-primary" href="/"> </a></div>'
  );
function Rr(i, c) {
  sa(c, !0);
  const h = It.products[120];
  let T = $(!1),
    ie = $(!1),
    ce = $(!1);
  const Le = O(() => e(T) || e(ie) || e(ce));
  let S = $("#000000"),
    de = $(!1),
    x = $(!1),
    y = $(""),
    D = [0, 0],
    j = $(!1);
  const Se = O(() => {
      var t;
      return (((t = b.data) == null ? void 0 : t.droplets) ?? 0) >= h.price;
    }),
    Tt = O(() => {
      if (e(x)) return [0, 0, 0, 0];
      const { r: t, g: l, b: n } = Da(e(S));
      return [t, l, n, 255];
    });
  let p = $(null),
    A = $(null),
    J = $(null);
  const Rt = new Set([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 52,
    ]),
    Mt = [
      1, 2, 3, 32, 4, 5, 6, 33, 7, 34, 35, 8, 36, 9, 10, 11, 37, 38, 39, 40, 41,
      42, 12, 13, 14, 15, 16, 17, 43, 20, 44, 18, 19, 45, 46, 21, 22, 47, 48,
      49, 23, 24, 25, 26, 27, 28, 53, 54, 55, 56, 57, 29, 30, 50, 51, 31, 52,
      61, 62, 63, 58, 59, 60,
    ].map((t) => ({ ...It.colors[t], idx: t }));
  oa(() => {
    e(p) && u(y, e(p).toDataURL("image/png"), !0);
  });
  function Z(t, l, n, d) {
    const _ = Math.floor((t / e(p).clientWidth) * e(p).width),
      f = Math.floor((l / e(p).clientHeight) * e(p).height),
      m = Math.floor((n / e(p).clientWidth) * e(p).width),
      g = Math.floor((d / e(p).clientHeight) * e(p).height),
      C = pa([_, f], [m, g]);
    for (const [R, H] of C) {
      const q = e(p).getContext("2d"),
        P = q.createImageData(1, 1),
        [Q, ve, N, pe] = e(Tt);
      (P.data[0] = Q),
        (P.data[1] = ve),
        (P.data[2] = N),
        (P.data[3] = pe),
        q.putImageData(P, R, H);
    }
    u(y, e(p).toDataURL("image/png"), !0);
  }
  function ue(t, l) {
    const n = e(A).width,
      d = e(A).height,
      _ = Math.floor((t / e(A).clientWidth) * n),
      f = Math.floor((l / e(A).clientHeight) * d);
    if (!isFinite(_) || !isFinite(f)) return;
    const m = e(A).getContext("2d"),
      g = m.createImageData(1, 1);
    (g.data[0] = 128),
      (g.data[1] = 128),
      (g.data[2] = 128),
      (g.data[3] = 60),
      m.clearRect(0, 0, n, d),
      m.putImageData(g, _, f);
  }
  async function Pt(t) {
    return new Promise((l, n) => {
      const d = new FileReader();
      (d.onload = (_) => {
        var g;
        const f = new Image();
        (f.onload = () => l(f)), (f.onerror = (C) => n(C));
        const m = (g = _.target) == null ? void 0 : g.result;
        m && typeof m == "string"
          ? (f.src = m)
          : n(new Error(Ca({ url: m ?? "" })));
      }),
        (d.onerror = (_) => n(_)),
        d.readAsDataURL(t);
    });
  }
  function Et(t, l) {
    const n = l.getContext("2d");
    if (!n) throw new Error(Ma());
    const d = l.width,
      _ = l.height;
    n.clearRect(0, 0, d, _);
    const f = Math.min(d / t.width, _ / t.height),
      m = t.width * f,
      g = t.height * f,
      C = (d - m) / 2,
      R = (_ - g) / 2;
    n.drawImage(t, C, R, m, g);
  }
  function Ae(t, l, n) {
    const d = t.getBoundingClientRect(),
      _ = l - d.left,
      f = n - d.top;
    return [_, f];
  }
  async function He(t) {
    var l;
    try {
      const n = (l = t.currentTarget.files) == null ? void 0 : l[0];
      if (n) {
        const d = await Pt(n);
        Et(d, e(p)), u(y, e(p).toDataURL("image/png"), !0), d.remove();
      }
    } catch (n) {
      console.error(n), Pe.error(La());
    }
  }
  function qe() {
    const t = e(p).getContext("2d");
    t == null || t.clearRect(0, 0, e(p).width, e(p).height),
      u(y, e(p).toDataURL("image/png"), !0);
  }
  var Be = bt();
  U("mousedown", F, (t) => {
    u(T, !0);
    const [l, n] = Ae(e(p), t.clientX, t.clientY);
    Z(l, n, l, n), (D = [l, n]);
  }),
    U("mouseup", F, () => {
      u(T, !1);
    }),
    U(
      "touchstart",
      F,
      (t) => {
        u(ce, !0);
        const l = t.touches.item(0),
          [n, d] = Ae(e(p), l.clientX, l.clientY);
        Z(n, d, n, d), (D = [n, d]);
      },
      void 0,
      !0
    ),
    U("touchend", F, () => {
      u(ce, !1);
    }),
    U("keypress", F, (t) => {
      t.code === "KeyE" && u(x, !e(x));
    }),
    U("keydown", F, (t) => {
      if (t.code === "Space") {
        u(ie, !0);
        const l = D[0],
          n = D[1];
        Z(l, n, l, n), t.preventDefault();
      }
    }),
    U("keyup", F, (t) => {
      t.code === "Space" && u(ie, !1);
    });
  var Lt = Ce(Be);
  {
    var St = (t) => {
        var l = cr(),
          n = Ce(l),
          d = r(n),
          _ = r(d),
          f = r(_),
          m = r(f);
        xa(m, { class: "size-5" }), a(f);
        var g = s(f, 2),
          C = r(g, !0);
        a(g);
        var R = s(g, 2),
          H = r(R),
          q = r(H),
          P = r(q);
        $t(P, { class: "size-5" });
        var Q = s(P),
          ve = s(Q);
        (ve.__change = He), a(q), a(H), a(R);
        var N = s(R, 2);
        N.__click = () => qe();
        var pe = r(N);
        Dt(pe, { class: "size-5" }), a(N), a(_);
        var _e = s(_, 2),
          Ye = r(_e),
          fe = r(Ye),
          Ht = r(fe);
        a(fe);
        var Fe = s(fe, 2);
        Ee(Fe, {
          get userId() {
            return b.data.id;
          },
          get level() {
            return b.data.level;
          },
          get pictureUrl() {
            return e(y);
          },
        });
        var Xe = s(Fe, 2);
        X(Xe, {
          class: "size-10 border",
          get userId() {
            return b.data.id;
          },
          get pictureUrl() {
            return e(y);
          },
        });
        var qt = s(Xe, 2);
        X(qt, {
          class: "size-5 border-0",
          get userId() {
            return b.data.id;
          },
          get pictureUrl() {
            return e(y);
          },
        }),
          a(Ye),
          a(_e);
        var Bt = s(_e, 2);
        _a(Bt, {
          get value() {
            return b.data.droplets;
          },
        }),
          a(d);
        var Ze = s(d, 2),
          me = r(Ze),
          B = r(me);
        let Oe;
        (B.__touchmove = (o) => {
          u(de, !0);
          const v = o.targetTouches.item(0),
            w = o.currentTarget.getBoundingClientRect(),
            k = v.clientX - w.left,
            M = v.clientY - w.top;
          e(Le) && Z(D[0], D[1], k, M), ue(k, M), (D = [k, M]);
        }),
          (B.__mousemove = (o) => {
            u(de, !1);
            const v = o.offsetX,
              w = o.offsetY;
            e(Le) && Z(D[0], D[1], v, w), ue(v, w), (D = [v, w]);
          }),
          (B.__click = (o) => {
            const v = o.offsetX,
              w = o.offsetY;
            Z(v, w, v, w);
          }),
          Me(
            B,
            (o) => u(p, o),
            () => e(p)
          );
        var We = s(B, 2);
        let je;
        Me(
          We,
          (o) => u(A, o),
          () => e(A)
        ),
          ht(2),
          a(me);
        var ge = s(me, 2),
          be = r(ge),
          he = r(be),
          Yt = r(he);
        a(he);
        var Ne = s(he, 2);
        Ee(Ne, {
          get userId() {
            return b.data.id;
          },
          get level() {
            return b.data.level;
          },
          get pictureUrl() {
            return e(y);
          },
        });
        var Ke = s(Ne, 2);
        X(Ke, {
          class: "size-10 border",
          get userId() {
            return b.data.id;
          },
          get pictureUrl() {
            return e(y);
          },
        });
        var Ft = s(Ke, 2);
        X(Ft, {
          class: "size-5 border-0",
          get userId() {
            return b.data.id;
          },
          get pictureUrl() {
            return e(y);
          },
        }),
          a(be);
        var Ve = s(be, 2),
          ee = r(Ve);
        ee.__click = () => qe();
        var Xt = r(ee);
        Dt(Xt, { class: "size-5" }), a(ee);
        var Ge = s(ee, 2),
          Je = r(Ge),
          Qe = r(Je);
        $t(Qe, { class: "size-5" });
        var Zt = s(Qe, 2);
        (Zt.__change = He), a(Je), a(Ge), a(Ve), a(ge);
        var et = s(ge, 2),
          xe = r(et);
        la(
          xe,
          23,
          () => Mt,
          (o) => o.idx,
          (o, v, w) => {
            const k = O(() => {
                const [G, Ue, ze] = e(v).rgb;
                return { r: G, g: Ue, b: ze };
              }),
              M = O(() => $a({ r: e(k).r, g: e(k).g, b: e(k).b })),
              oe = O(() => e(S) === e(M) && !e(x));
            var Y = lr(),
              E = r(Y);
            (E.__click = () => {
              u(S, e(M), !0), u(x, !1);
            }),
              a(Y),
              Te(
                (G) => {
                  W(Y, 1, G),
                    ne(Y, "data-tip", e(v).name),
                    W(
                      E,
                      1,
                      xt({
                        "btn relative aspect-square w-full rounded-xl": !0,
                        "border-primary ring-primary ring-2": e(oe),
                        "border-base-content/20": !e(oe),
                        "max-sm:h-6 max-sm:rounded-md": !0,
                      })
                    ),
                    wt(E, `background: rgb(${e(k).r} ${e(k).g} ${e(k).b})`),
                    ne(E, "aria-label", e(v).name),
                    ne(E, "id", `color-${e(v).idx ?? ""}`);
                },
                [
                  () =>
                    xt({
                      tooltip: !0,
                      "max-sm:hidden": !Rt.has(e(v).idx),
                      "max-sm:before:-translate-x-1/4":
                        e(w) % 8 === 0 && e(v).name.length > 7,
                      "max-sm:before:translate-x-1/4":
                        (e(w) - 7) % 8 === 0 && e(v).name.length > 7,
                    }),
                ]
              ),
              U("focus", E, () => {
                u(S, e(M), !0), u(x, !1);
              }),
              L(o, Y);
          }
        ),
          a(xe);
        var tt = s(xe, 2),
          K = r(tt);
        K.__click = () => {
          u(x, !1);
        };
        var at = r(K),
          rt = s(at, 2);
        ia(rt), a(K);
        var te = s(K, 2);
        let st;
        var ae = r(te);
        ae.__click = () => {
          e(J).show();
        };
        var ot = r(ae),
          nt = s(ot),
          lt = r(nt);
        fa(lt, { class: "size-4.5" });
        var Ot = s(lt);
        a(nt), a(ae), a(te);
        var it = s(te, 2),
          we = r(it),
          Wt = r(we);
        ht(), a(we);
        var V = s(we, 2);
        let ct;
        V.__click = () => {
          u(x, !e(x));
        };
        var jt = r(V);
        ma(jt, {
          class: "size-5",
          get filled() {
            return e(x);
          },
        }),
          a(V),
          a(it),
          a(tt),
          a(et),
          a(Ze),
          a(n);
        var dt = s(n, 2);
        ga(dt, {
          get open() {
            return yt.dropletsDialogOpen;
          },
          set open(o) {
            yt.dropletsDialogOpen = o;
          },
        });
        var ye = s(dt, 2),
          Ie = r(ye),
          ke = s(r(Ie), 2),
          Nt = r(ke, !0);
        a(ke);
        var De = s(ke, 2),
          ut = r(De);
        X(ut, {
          class: "size-20",
          get userId() {
            return b.data.id;
          },
          get pictureUrl() {
            return e(y);
          },
        });
        var vt = s(ut, 2);
        Ee(vt, {
          get userId() {
            return b.data.id;
          },
          get level() {
            return b.data.level;
          },
          get pictureUrl() {
            return e(y);
          },
        });
        var pt = s(vt, 2);
        X(pt, {
          class: "size-10 border",
          get userId() {
            return b.data.id;
          },
          get pictureUrl() {
            return e(y);
          },
        });
        var Kt = s(pt, 2);
        X(Kt, {
          class: "size-5 border-0",
          get userId() {
            return b.data.id;
          },
          get pictureUrl() {
            return e(y);
          },
        }),
          a(De);
        var $e = s(De, 2),
          Vt = r($e, !0);
        a($e);
        var _t = s($e, 2),
          re = r(_t);
        re.__click = () => {
          var o;
          (o = e(J)) == null || o.close();
        };
        var Gt = r(re, !0);
        a(re);
        var se = s(re, 2);
        se.__click = () => {
          u(j, !0),
            e(p).toBlob(async (o) => {
              try {
                if (!o) {
                  Pe.error(Ya());
                  return;
                }
                const v = new FormData();
                if (
                  (v.set("image", o),
                  (
                    await fetch(`${ua}/me/profile-picture`, {
                      method: "POST",
                      credentials: "include",
                      body: v,
                    })
                  ).status !== 200)
                ) {
                  Pe.error(va());
                  return;
                }
                await b.refresh(), da("/");
              } finally {
                u(j, !1);
              }
              u(j, !0);
            });
        };
        var ft = r(se),
          Jt = s(ft);
        {
          var Qt = (o) => {
            var v = ir();
            L(o, v);
          };
          Re(Jt, (o) => {
            e(j) && o(Qt);
          });
        }
        a(se), a(_t), a(Ie);
        var mt = s(Ie, 2),
          gt = r(mt),
          ea = r(gt, !0);
        a(gt),
          a(mt),
          a(ye),
          Me(
            ye,
            (o) => u(J, o),
            () => e(J)
          ),
          Te(
            (o, v, w, k, M, oe, Y, E, G, Ue, ze, ta, aa) => {
              I(C, o),
                ne(H, "data-tip", v),
                I(Q, `${w ?? ""} `),
                I(Ht, `${k ?? ""}:`),
                (Oe = W(B, 1, "pixelated size-full", null, Oe, {
                  "cursor-pencil": !e(x),
                  "cursor-eraser": e(x),
                })),
                (je = W(
                  We,
                  1,
                  "pixelated pointer-events-none absolute left-0 top-0 size-full",
                  null,
                  je,
                  { hidden: e(de) }
                )),
                I(Yt, `${M ?? ""}:`),
                wt(at, `background: ${e(S)}`),
                (st = W(te, 1, "", null, st, { tooltip: !e(Se) })),
                (ae.disabled = !e(Se)),
                I(ot, `${oe ?? ""} `),
                I(Ot, ` ${Y ?? ""}`),
                I(Wt, `${E ?? ""} `),
                (ct = W(
                  V,
                  1,
                  "btn btn-lg btn-square sm:btn-xl shadow-md",
                  null,
                  ct,
                  { "btn-primary": e(x) }
                )),
                I(Nt, G),
                I(Vt, Ue),
                I(Gt, ze),
                (se.disabled = e(j)),
                I(ft, `${ta ?? ""} `),
                I(ea, aa);
            },
            [
              () => ar(),
              () => Va(),
              () => Qa(),
              () => kt(),
              () => kt(),
              () => ka(),
              () => h.price.toLocaleString("en-US"),
              () => ba(),
              () => ha(),
              () => Ha(),
              () => ya(),
              () => Ia(),
              () => wa(),
            ]
          ),
          U("mouseleave", B, (o) => {
            ue(o.offsetX, o.offsetY), (D = [o.offsetX, o.offsetY]);
          }),
          U("focus", K, () => {
            u(x, !1);
          }),
          ca(
            rt,
            () => e(S),
            (o) => u(S, o)
          ),
          U("focus", V, () => {
            u(x, !0);
          }),
          L(t, l);
      },
      At = (t) => {
        var l = bt(),
          n = Ce(l);
        {
          var d = (_) => {
            var f = dr(),
              m = r(f),
              g = r(m, !0);
            a(m);
            var C = s(m, 2),
              R = r(C, !0);
            a(C),
              a(f),
              Te(
                (H, q) => {
                  I(g, H), I(R, q);
                },
                [() => Za(), () => ja()]
              ),
              L(_, f);
          };
          Re(
            n,
            (_) => {
              !b.data && !b.loading && _(d);
            },
            !0
          );
        }
        L(t, l);
      };
    Re(Lt, (t) => {
      b.data ? t(St) : t(At, !1);
    });
  }
  L(i, Be), na();
}
ra(["change", "click", "touchmove", "mousemove"]);
export { Rr as component };

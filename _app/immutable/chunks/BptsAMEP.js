import { g as Q } from "./DQcFTXWv.js";
import "./ClL9a_Zs.js";
import { o as bt } from "./Ba2x20r8.js";
import {
  z as Y,
  b as i,
  k as Ge,
  p as Je,
  w as $e,
  a as ke,
  c as et,
  f as y,
  d as e,
  r as t,
  s as r,
  n as j,
  t as w,
  v as he,
  D as _t,
  g as f,
  l as we,
  o as L,
  u as ye,
  q as ze,
} from "./iK5FT0Sa.js";
import { s as h } from "./BHnQYZx5.js";
import { i as M } from "./6Mc7KQD2.js";
import {
  d as N,
  e as gt,
  s as ce,
  r as De,
  g as Te,
  a as tt,
  f as xt,
} from "./Cw1VVyw7.js";
import { b as ht } from "./DnZ5W6UV.js";
import { r as pe, p as ot } from "./ClBgBzqC.js";
import { g as Xe } from "./E8vEVpET.js";
import { p as Oe } from "./D_G6cexA.js";
import { g as wt, P as je } from "./B3m8Ax5i.js";
import { u as ie, t as de, a as Ne, S as yt } from "./BcevhAVP.js";
import { c as kt } from "./DpS0PshJ.js";
import { a as Ct } from "./DUpX1e05.js";
(function () {
  try {
    var a =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    a.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var a =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      o = new a.Error().stack;
    o &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[o] = "9763b6df-d4e0-4825-9219-43230ba3f0c5"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-9763b6df-d4e0-4825-9219-43230ba3f0c5"));
  })();
} catch {}
const It = () => "Add profile picture",
  Lt = () => "Adicionar imagem de perfil",
  ho = (a = {}, o = {}) => ((o.locale ?? Q()) === "en" ? It() : Lt()),
  Pt = () => "You gain 1 droplet per pixel painted and 500 droplets per level",
  qt = () => "Você ganha 1 droplet por pixel pintado e 500 droplets por level",
  Qe = (a = {}, o = {}) => ((o.locale ?? Q()) === "en" ? Pt() : qt()),
  zt = () => "Eraser",
  Dt = () => "Borracha",
  wo = (a = {}, o = {}) => ((o.locale ?? Q()) === "en" ? zt() : Dt()),
  Tt = () => "Refund Policy",
  Mt = () => "Política de Reembolso",
  Ye = (a = {}, o = {}) => ((o.locale ?? Q()) === "en" ? Tt() : Mt()),
  St = () => "For refund requests and processing details, please see our",
  Et = () => "Para pedidos de reembolso, consulte nossa",
  Ke = (a = {}, o = {}) => ((o.locale ?? Q()) === "en" ? St() : Et());
var Bt = Y(
  '<svg><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>'
);
function Ht(a, o) {
  let n = pe(o, ["$$slots", "$$events", "$$legacy"]);
  var s = Bt();
  N(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...n,
  })),
    i(a, s);
}
function Ut() {
  return Q();
}
function Ve(a) {
  return `${a}/terms/return${Ut() === "pt" ? "/pt" : ""}`;
}
var Zt = Y(
  '<svg><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"></path></svg>'
);
function Me(a, o) {
  let n = pe(o, ["$$slots", "$$events", "$$legacy"]);
  var s = Zt();
  N(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...n,
  })),
    i(a, s);
}
var Rt = y(
    '<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>'
  ),
  At = y(
    '<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-sm:hidden">Droplets</span></span> <!></span>'
  ),
  Ft = y(
    '<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pl-1 pr-1"><!></button>'
  ),
  Xt = y(
    '<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pl-1 pr-2"><!></span>'
  );
function Ot(a, o) {
  Je(o, !0);
  const n = (c) => {
    var p = At(),
      u = e(p);
    Me(u, { class: "text-primary size-4.5" });
    var g = r(u, 2),
      S = e(g);
    j(), t(g);
    var C = r(g, 2);
    {
      var B = (E) => {
        var K = Rt(),
          Z = e(K);
        Ht(Z, { class: "size-4" }), t(K), i(E, K);
      };
      M(C, (E) => {
        s() && E(B);
      });
    }
    t(p),
      w((E) => h(S, `${E ?? ""} `), [() => o.value.toLocaleString("en-US")]),
      i(c, p);
  };
  let s = ot(o, "button", 3, !0);
  var k = $e(),
    x = ke(k);
  {
    var _ = (c) => {
        var p = Ft();
        p.__click = () => {
          wt.dropletsDialogOpen = !0;
        };
        var u = e(p);
        n(u), t(p), i(c, p);
      },
      d = (c) => {
        var p = Xt(),
          u = e(p);
        n(u), t(p), i(c, p);
      };
    M(x, (c) => {
      s() ? c(_) : c(d, !1);
    });
  }
  i(a, k), et();
}
Ge(["click"]);
var jt = Y(
  '<svg><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"></path></svg>'
);
function Nt(a, o) {
  let n = pe(o, ["$$slots", "$$events", "$$legacy"]);
  var s = jt();
  N(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "currentColor",
    ...n,
  })),
    i(a, s);
}
var Qt = Y(
  '<svg><path fill="#4db6ac" d="M11.9,12h-0.68l8.04-8.04c2.62-2.61,6.86-2.61,9.48,0L36.78,12H36.1c-1.6,0-3.11,0.62-4.24,1.76	l-6.8,6.77c-0.59,0.59-1.53,0.59-2.12,0l-6.8-6.77C15.01,12.62,13.5,12,11.9,12z"></path><path fill="#4db6ac" d="M36.1,36h0.68l-8.04,8.04c-2.62,2.61-6.86,2.61-9.48,0L11.22,36h0.68c1.6,0,3.11-0.62,4.24-1.76	l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36z"></path><path fill="#4db6ac" d="M44.04,28.74L38.78,34H36.1c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0	l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l-5.26-5.26c-2.61-2.62-2.61-6.86,0-9.48L9.22,14h2.68c1.07,0,2.07,0.42,2.83,1.17	l6.8,6.78c0.68,0.68,1.58,1.02,2.47,1.02s1.79-0.34,2.47-1.02l6.8-6.78C34.03,14.42,35.03,14,36.1,14h2.68l5.26,5.26	C46.65,21.88,46.65,26.12,44.04,28.74z"></path></svg>'
);
function We(a, o) {
  let n = pe(o, ["$$slots", "$$events", "$$legacy"]);
  var s = Qt();
  N(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "100",
    height: "100",
    viewBox: "0 0 48 48",
    ...n,
  })),
    i(a, s);
}
var Yt = y(
    '<div><div tabindex="0" class="btn btn-lg btn-primary h-10"> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 border-base-content/20 m-1 w-max rounded-xl border p-2 shadow"><li><form method="POST"><input type="hidden" name="lookup_key"/> <button class="flex items-center gap-1.5"><!> <span>Cartão ou Boleto</span></button></form></li> <li><button class="flex items-center gap-1.5"><!> <span>Pix</span></button></li></ul></div>'
  ),
  Kt = y(
    '<form method="POST"><input type="hidden" name="lookup_key"/> <button class="btn btn-lg btn-primary mt-3 h-10" type="submit"><!></button></form>'
  ),
  Vt = y(
    '<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl p-4"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal">Droplets</span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <!></div>'
  ),
  Wt = y(
    '<div class="flex flex-col gap-4"><section><div class="flex items-center gap-1"><!> <h3 class="text-xl font-bold">Droplets</h3> <div class="ml-auto mr-4"><!></div></div> <p class="text-base-content/80 mt-1 text-sm"> </p></section> <section><div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div> <p class="text-base-content/60 mt-4 text-center text-sm"> <a class="font-medium" target="_blank"> </a></p></section></div>'
  ),
  Gt = y(
    '<p class="text-base-content/80">Efetue o pagamento do PIX no valor de <span class="font-semibold"> </span></p> <section><div class="relative"><img class="pixelated w-70 aspect-square" alt="QR code PIX"/> <div class="center-absolute border-6 absolute size-[95%] border-black"></div></div></section> <section class="w-full"><span class="text-base-content/80 ml-4 text-sm font-semibold">Código</span> <div class="border-base-content/20 rounded-field flex w-full items-center gap-1 border-2 py-1.5 pl-4 pr-2.5"><input class="text-base-content/80 w-full min-w-10 grow text-sm font-medium" readonly=""/> <div class="h-10"><button class="btn btn-primary">Copiar</button></div></div></section> <section class="mt-2"><button class="btn btn-primary btn-lg">Fiz o pagamento</button></section>',
    1
  ),
  Jt = y(
    '<div class="flex h-96 items-center justify-center"><span class="loading loading-spinner loading-xl"></span></div>'
  ),
  $t = y(
    '<dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-2xl pb-4"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button> </button></form></dialog> <dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-lg"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <div class="flex h-full flex-col items-center gap-4"><section><div class="flex items-center gap-2"><!> <h3 class="text-4xl font-bold">PIX</h3></div></section> <!></div></div></dialog>',
    1
  );
function yo(a, o) {
  Je(o, !0);
  let n = ot(o, "open", 15),
    s = we(!1);
  bt(() => {
    const l = (m) => {
      m.key === "Escape" && n(!1);
    };
    return (
      document.addEventListener("keydown", l),
      () => document.removeEventListener("keydown", l)
    );
  });
  const k = ye(() => {
      var l, m;
      return (
        ((m = (l = ie.data) == null ? void 0 : l.country) == null
          ? void 0
          : m.toUpperCase()) === "BR"
      );
    }),
    x = ye(() => {
      var l, m;
      return (
        ((m = (l = ie.data) == null ? void 0 : l.country) == null
          ? void 0
          : m.toUpperCase()) === "MX"
      );
    });
  let _ = we(null),
    d = we(void 0),
    c = we(!1);
  var p = $t(),
    u = ke(p),
    g = e(u),
    S = r(e(g), 2);
  {
    var C = (l) => {
      var m = Wt(),
        H = e(m),
        R = e(H),
        ve = e(R);
      Me(ve, { class: "text-primary size-6" });
      var A = r(ve, 4),
        ue = e(A);
      {
        let q = ye(() => {
          var X;
          return ((X = ie.data) == null ? void 0 : X.droplets) ?? 0;
        });
        Ot(ue, {
          get value() {
            return f(q);
          },
          button: !1,
        });
      }
      t(A), t(R);
      var fe = r(R, 2),
        V = e(fe, !0);
      t(fe), t(H);
      var W = r(H, 2);
      {
        const q = (X, v) => {
          let oe = () => (v == null ? void 0 : v().droplets),
            ae = () => (v == null ? void 0 : v().bonus),
            Ie = () => (v == null ? void 0 : v().price),
            He = () => (v == null ? void 0 : v().stripeLookupkey),
            lt = () => (v == null ? void 0 : v().productId),
            it = () => (v == null ? void 0 : v().dropdownClass);
          var Le = Vt(),
            Pe = e(Le),
            Ue = e(Pe);
          Me(Ue, { class: "mb-1 inline size-7" });
          var Ze = r(Ue, 2),
            dt = e(Ze);
          j(), t(Ze), t(Pe);
          var qe = r(Pe, 2),
            Re = e(qe);
          {
            var ct = (I) => {
              var b = ze();
              w(
                (D) => h(b, `${D ?? ""} Droplets`),
                [() => oe().toLocaleString("en-US")]
              ),
                i(I, b);
            };
            M(Re, (I) => {
              ae() && I(ct);
            });
          }
          var Ae = r(Re, 2),
            pt = e(Ae);
          t(Ae), t(qe);
          var vt = r(qe, 2);
          {
            var ut = (I) => {
                var b = Yt(),
                  D = e(b),
                  se = e(D);
                t(D);
                var ge = r(D, 2),
                  re = e(ge),
                  O = e(re),
                  z = e(O);
                De(z);
                var T = r(z, 2),
                  ne = e(T);
                Nt(ne, { class: "inline size-5" }), j(2), t(T), t(O), t(re);
                var Fe = r(re, 2),
                  xe = e(Fe);
                xe.__click = () => {
                  f(_).show(),
                    L(s, !0),
                    Ne.generatePixQrCode(lt())
                      .then((le) => {
                        L(d, le, !0);
                      })
                      .catch((le) => {
                        de.error(le.message);
                      })
                      .finally(() => {
                        L(s, !1);
                      });
                };
                var mt = e(xe);
                We(mt, { class: "size-5" }),
                  j(2),
                  t(xe),
                  t(Fe),
                  t(ge),
                  t(b),
                  w(
                    (le) => {
                      tt(b, 1, `dropdown mt-3 ${it() ?? ""}`),
                        h(se, `R$${le ?? ""}`),
                        ce(
                          O,
                          "action",
                          `${je}/payment/create-checkout-session`
                        ),
                        Te(z, He()),
                        (T.disabled = f(s)),
                        (xe.disabled = f(s));
                    },
                    [() => (Ie() * 4).toFixed(2).replace(".", ",")]
                  ),
                  he("submit", O, () => {
                    L(s, !0), setTimeout(() => L(s, !1), 3e3);
                  }),
                  i(I, b);
              },
              ft = (I) => {
                var b = Kt(),
                  D = e(b);
                De(D);
                var se = r(D, 2),
                  ge = e(se);
                {
                  var re = (z) => {
                      var T = ze();
                      w(
                        (ne) => h(T, `MX$ ${ne ?? ""}`),
                        [() => (Ie() * 18).toFixed(2)]
                      ),
                        i(z, T);
                    },
                    O = (z) => {
                      var T = ze();
                      w((ne) => h(T, `$${ne ?? ""}`), [() => Ie().toFixed(2)]),
                        i(z, T);
                    };
                  M(ge, (z) => {
                    f(x) ? z(re) : z(O, !1);
                  });
                }
                t(se),
                  t(b),
                  w(() => {
                    ce(b, "action", `${je}/payment/create-checkout-session`),
                      Te(D, He()),
                      (se.disabled = f(s));
                  }),
                  he("submit", b, () => {
                    L(s, !0), setTimeout(() => L(s, !1), 3e3);
                  }),
                  i(I, b);
              };
            M(vt, (I) => {
              f(k) ? I(ut) : I(ft, !1);
            });
          }
          t(Le),
            w(
              (I, b) => {
                h(dt, `${I ?? ""} `), h(pt, `+${b ?? ""} bonus`);
              },
              [
                () => (oe() + ae()).toLocaleString("en-US"),
                () => ae().toLocaleString("en-US"),
              ]
            ),
            i(X, Le);
        };
        var U = e(W),
          G = e(U);
        q(G, () => ({
          price: 5,
          droplets: 25e3,
          bonus: 0,
          stripeLookupkey: "droplets_5",
          productId: 10,
          dropdownClass: "dropdown-center",
        }));
        var me = r(G, 2);
        q(me, () => ({
          price: 15,
          droplets: 75e3,
          bonus: 3750,
          stripeLookupkey: "droplets_15",
          productId: 20,
          dropdownClass: "dropdown-center",
        }));
        var J = r(me, 2);
        q(J, () => ({
          price: 30,
          droplets: 15e4,
          bonus: 15e3,
          stripeLookupkey: "droplets_30",
          productId: 30,
          dropdownClass: "dropdown-center",
        }));
        var $ = r(J, 2);
        q($, () => ({
          price: 50,
          droplets: 25e4,
          bonus: 37500,
          stripeLookupkey: "droplets_50",
          productId: 40,
          dropdownClass: "dropdown-center",
        }));
        var P = r($, 2);
        q(P, () => ({
          price: 75,
          droplets: 375e3,
          bonus: 75e3,
          stripeLookupkey: "droplets_75",
          productId: 50,
          dropdownClass: "dropdown-center",
        }));
        var be = r(P, 2);
        q(be, () => ({
          price: 100,
          droplets: 5e5,
          bonus: 125e3,
          stripeLookupkey: "droplets_100",
          productId: 60,
          dropdownClass: "max-sm:dropdown-top dropdown-center",
        })),
          t(U);
        var ee = r(U, 2),
          F = e(ee),
          te = r(F),
          _e = e(te, !0);
        t(te),
          t(ee),
          t(W),
          w(
            (X, v, oe, ae) => {
              h(F, `${v ?? ""} `), ce(te, "href", oe), h(_e, ae);
            },
            [() => Qe(), () => Ke(), () => Ve(Oe.url.origin), () => Ye()]
          );
      }
      t(m),
        w(
          (q, X, v, oe) => h(V, q),
          [() => Qe(), () => Ke(), () => Ve(Oe.url.origin), () => Ye()]
        ),
        i(l, m);
    };
    M(S, (l) => {
      ie.data && l(C);
    });
  }
  t(g);
  var B = r(g, 2),
    E = e(B),
    K = e(E, !0);
  t(E),
    t(B),
    t(u),
    gt(u, () => (l) => {
      _t(() => {
        n() ? l.show() : l.close();
      });
    });
  var Z = r(u, 2),
    Se = e(Z),
    Ee = r(e(Se), 2),
    Ce = e(Ee),
    Be = e(Ce),
    at = e(Be);
  We(at, { class: "size-10" }), j(2), t(Be), t(Ce);
  var st = r(Ce, 2);
  {
    var rt = (l) => {
        var m = Gt(),
          H = ke(m),
          R = r(e(H)),
          ve = e(R);
        t(R), t(H);
        var A = r(H, 2),
          ue = e(A),
          fe = e(ue);
        j(2), t(ue), t(A);
        var V = r(A, 2),
          W = r(e(V), 2),
          U = e(W);
        De(U);
        var G = r(U, 2),
          me = e(G);
        (me.__click = () => {
          var P;
          navigator.clipboard.writeText(
            ((P = f(d)) == null ? void 0 : P.pixCode) ?? ""
          ),
            de.success("Código PIX copiado");
        }),
          t(G),
          t(W),
          t(V);
        var J = r(V, 2),
          $ = e(J);
        ($.__click = async () => {
          var P, be, ee;
          if (!f(d)) {
            de.info("Espere 1 minuto e recarrege a pagina");
            return;
          }
          try {
            L(c, !0);
            const { paid: F } = await Ne.getPixStatus(f(d).pixId);
            if (F) {
              const te = f(d).productId.toString(),
                _e =
                  (ee =
                    (be = (P = yt.products[te]) == null ? void 0 : P.items) ==
                    null
                      ? void 0
                      : be[0]) == null
                    ? void 0
                    : ee.amount;
              await ie.refresh(),
                _e
                  ? Xe(`payment/success?droplets=${_e}`)
                  : Xe("payment/success");
            } else
              de.info(
                "Pagamento ainda não recebido. Desculpe a demora, tente novamente em instantes.",
                { duration: 1e5 }
              );
          } catch (F) {
            console.error(F),
              de.error(
                "Error ao atualizar o status do pix. Tente recarregar a página."
              );
          } finally {
            L(c, !1);
          }
        }),
          t(J),
          w(
            (P) => {
              h(ve, `R$${P ?? ""}`),
                ce(fe, "src", f(d).qrCode),
                Te(U, f(d).pixCode),
                ($.disabled = f(c));
            },
            [() => (f(d).price / 100).toFixed(2).replace(".", ",")]
          ),
          i(l, m);
      },
      nt = (l) => {
        var m = Jt();
        i(l, m);
      };
    M(st, (l) => {
      f(d) ? l(rt) : l(nt, !1);
    });
  }
  t(Ee),
    t(Se),
    t(Z),
    ht(
      Z,
      (l) => L(_, l),
      () => f(_)
    ),
    w((l) => h(K, l), [() => kt()]),
    he("close", u, () => {
      n(!1);
    }),
    he("close", Z, () => {
      setTimeout(() => {
        L(d, void 0);
      }, 300);
    }),
    i(a, p),
    et();
}
Ge(["click"]);
var eo = Y(
    '<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>'
  ),
  to = Y(
    '<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>'
  );
function ko(a, o) {
  let n = pe(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var s = $e(),
    k = ke(s);
  {
    var x = (d) => {
        var c = eo();
        N(c, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n,
        })),
          i(d, c);
      },
      _ = (d) => {
        var c = to();
        N(c, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n,
        })),
          i(d, c);
      };
    M(k, (d) => {
      o.filled ? d(x) : d(_, !1);
    });
  }
  i(a, s);
}
function Co([a, o], [n, s]) {
  (a = Math.floor(a)),
    (o = Math.floor(o)),
    (n = Math.floor(n)),
    (s = Math.floor(s));
  const k = [],
    x = Math.abs(n - a),
    _ = Math.abs(s - o),
    d = a < n ? 1 : -1,
    c = o < s ? 1 : -1;
  let p = x - _,
    u = a,
    g = o;
  for (; k.push([u, g]), !(u === n && g === s); ) {
    const S = 2 * p;
    S > -_ && ((p -= _), (u += d)), S < x && ((p += x), (g += c));
  }
  return k;
}
var oo = y('<img class="pixelated bg-base-200" alt="User profile"/>'),
  ao = y(
    '<div class="relative w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-12f880g"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <div> </div></div>'
  );
function Io(a, o) {
  const n = ye(() => (o.level % 1) * 360);
  var s = ao(),
    k = r(e(s), 2),
    x = r(k, 2),
    _ = e(x),
    d = e(_);
  {
    var c = (C) => {
        Ct(C, {
          get userId() {
            return o.userId;
          },
        });
      },
      p = (C) => {
        var B = oo();
        w(() => ce(B, "src", o.pictureUrl)), i(C, B);
      };
    M(d, (C) => {
      o.pictureUrl ? C(p, !1) : C(c);
    });
  }
  t(_), t(x);
  var u = r(x, 2);
  let g;
  var S = e(u, !0);
  t(u),
    t(s),
    w(
      (C) => {
        xt(k, `--angle: ${f(n) ?? ""}deg; --color: var(--color-secondary)`),
          (g = tt(
            u,
            1,
            "text-primary-content bg-secondary absolute bottom-0 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold",
            null,
            g,
            { "left-0": o.level > 99, "-left-1": o.level > 99 }
          )),
          h(S, C);
      },
      [() => Math.floor(o.level)]
    ),
    i(a, s);
}
export {
  Ht as A,
  Ot as D,
  ko as I,
  Io as P,
  Me as a,
  yo as b,
  ho as c,
  Ve as d,
  wo as e,
  Co as r,
};

import { g as j } from "./CV9xcpLq.js";
import "./Ch2Ub8FX.js";
import { o as _t } from "./DoL3ojdE.js";
import {
	v as N,
	b as d,
	at as Ye,
	p as Ke,
	ay as Ve,
	a as me,
	c as We,
	f as k,
	d as t,
	r as o,
	s as n,
	n as X,
	t as y,
	ax as fe,
	y as mt,
	g as _,
	au as be,
	aw as L,
	u as _e,
	b4 as Ce,
} from "./CMvZtFtm.js";
import { s as w } from "./DVA6u9-7.js";
import { r as ne, p as Ge, i as M } from "./BF50aS-j.js";
import {
	b as O,
	f as gt,
	s as ae,
	r as Ie,
	g as Le,
	a as Je,
	e as xt,
} from "./C5yqZvKC.js";
import { b as ht } from "./0wx1llIh.js";
import { g as Re } from "./CyB--sFG.js";
import { p as Ae } from "./B6ZK_HZO.js";
import {
	g as wt,
	u as se,
	t as re,
	a as $e,
	S as yt,
	P as Fe,
} from "./BRM3t761.js";
import { c as kt } from "./Dt3xBOvm.js";
import { a as Ct } from "./D3yaN7Zl.js";
(function () {
	try {
		var s =
			typeof window < "u"
				? window
				: typeof global < "u"
				? global
				: typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
				? self
				: {};
		s.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
	} catch {}
})();
try {
	(function () {
		var s =
				typeof window < "u"
					? window
					: typeof global < "u"
					? global
					: typeof globalThis < "u"
					? globalThis
					: typeof self < "u"
					? self
					: {},
			e = new s.Error().stack;
		e &&
			((s._sentryDebugIds = s._sentryDebugIds || {}),
			(s._sentryDebugIds[e] = "0fa0d6bf-0d42-46b8-b804-0b844b6532f6"),
			(s._sentryDebugIdIdentifier =
				"sentry-dbid-0fa0d6bf-0d42-46b8-b804-0b844b6532f6"));
	})();
} catch {}
const It = () => "Add profile picture",
	Lt = () => "Adicionar imagem de perfil",
	wo = (s = {}, e = {}) => ((e.locale ?? j()) === "en" ? It() : Lt()),
	zt = () => "You gain 1 droplet per pixel painted and 500 droplets per level",
	Pt = () => "Você ganha 1 droplet por pixel pintado e 500 droplets por level",
	Xe = (s = {}, e = {}) => ((e.locale ?? j()) === "en" ? zt() : Pt()),
	qt = () => "Eraser",
	Tt = () => "Borracha",
	yo = (s = {}, e = {}) => ((e.locale ?? j()) === "en" ? qt() : Tt()),
	Dt = () => "Refund Policy",
	Mt = () => "Política de Reembolso",
	Oe = (s = {}, e = {}) => ((e.locale ?? j()) === "en" ? Dt() : Mt()),
	St = () => "For refund requests and processing details, please see our",
	Et = () => "Para pedidos de reembolso, consulte nossa",
	je = (s = {}, e = {}) => ((e.locale ?? j()) === "en" ? St() : Et());
var Bt = N(
	'<svg><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>'
);
function Ht(s, e) {
	let r = ne(e, ["$$slots", "$$events", "$$legacy"]);
	var a = Bt();
	O(a, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 -960 960 960",
		fill: "currentColor",
		...r,
	})),
		d(s, a);
}
function Ut() {
	return j();
}
function Ne(s) {
	return `${s}/terms/return${Ut() === "pt" ? "/pt" : ""}`;
}
var Zt = N(
	'<svg><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"></path></svg>'
);
function ze(s, e) {
	let r = ne(e, ["$$slots", "$$events", "$$legacy"]);
	var a = Zt();
	O(a, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 -960 960 960",
		fill: "currentColor",
		...r,
	})),
		d(s, a);
}
var Rt = k(
		'<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>'
	),
	At = k(
		'<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-sm:hidden">Droplets</span></span> <!></span>'
	),
	Ft = k(
		'<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pl-1 pr-1"><!></button>'
	),
	Xt = k(
		'<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pl-1 pr-2"><!></span>'
	);
function Ot(s, e) {
	Ke(e, !0);
	const r = (i) => {
		var p = At(),
			f = t(p);
		ze(f, { class: "text-primary size-4.5" });
		var h = n(f, 2),
			S = t(h);
		X(), o(h);
		var C = n(h, 2);
		{
			var q = (E) => {
				var Q = Rt(),
					U = t(Q);
				Ht(U, { class: "size-4" }), o(Q), d(E, Q);
			};
			M(C, (E) => {
				a() && E(q);
			});
		}
		o(p),
			y((E) => w(S, `${E ?? ""} `), [() => e.value.toLocaleString("en-US")]),
			d(i, p);
	};
	let a = Ge(e, "button", 3, !0);
	var m = Ve(),
		u = me(m);
	{
		var b = (i) => {
				var p = Ft();
				p.__click = () => {
					wt.dropletsDialogOpen = !0;
				};
				var f = t(p);
				r(f), o(p), d(i, p);
			},
			c = (i) => {
				var p = Xt(),
					f = t(p);
				r(f), o(p), d(i, p);
			};
		M(u, (i) => {
			a() ? i(b) : i(c, !1);
		});
	}
	d(s, m), We();
}
Ye(["click"]);
var jt = N(
	'<svg><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"></path></svg>'
);
function Nt(s, e) {
	let r = ne(e, ["$$slots", "$$events", "$$legacy"]);
	var a = jt();
	O(a, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		height: "24px",
		viewBox: "0 -960 960 960",
		width: "24px",
		fill: "currentColor",
		...r,
	})),
		d(s, a);
}
var Qt = N(
	'<svg><path fill="#4db6ac" d="M11.9,12h-0.68l8.04-8.04c2.62-2.61,6.86-2.61,9.48,0L36.78,12H36.1c-1.6,0-3.11,0.62-4.24,1.76	l-6.8,6.77c-0.59,0.59-1.53,0.59-2.12,0l-6.8-6.77C15.01,12.62,13.5,12,11.9,12z"></path><path fill="#4db6ac" d="M36.1,36h0.68l-8.04,8.04c-2.62,2.61-6.86,2.61-9.48,0L11.22,36h0.68c1.6,0,3.11-0.62,4.24-1.76	l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36z"></path><path fill="#4db6ac" d="M44.04,28.74L38.78,34H36.1c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0	l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l-5.26-5.26c-2.61-2.62-2.61-6.86,0-9.48L9.22,14h2.68c1.07,0,2.07,0.42,2.83,1.17	l6.8,6.78c0.68,0.68,1.58,1.02,2.47,1.02s1.79-0.34,2.47-1.02l6.8-6.78C34.03,14.42,35.03,14,36.1,14h2.68l5.26,5.26	C46.65,21.88,46.65,26.12,44.04,28.74z"></path></svg>'
);
function Qe(s, e) {
	let r = ne(e, ["$$slots", "$$events", "$$legacy"]);
	var a = Qt();
	O(a, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		x: "0px",
		y: "0px",
		width: "100",
		height: "100",
		viewBox: "0 0 48 48",
		...r,
	})),
		d(s, a);
}
var Yt = (s, e, r, a, m) => {
		_(e).show(),
			L(r, !0),
			$e
				.generatePixQrCode(a())
				.then((u) => {
					L(m, u, !0);
				})
				.catch((u) => {
					re.error(u.message);
				})
				.finally(() => {
					L(r, !1);
				});
	},
	Kt = k(
		'<div><div tabindex="0" class="btn btn-lg btn-primary h-10"> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 border-base-content/20 m-1 w-max rounded-xl border p-2 shadow"><li><form method="POST"><input type="hidden" name="lookup_key"/> <button class="flex items-center gap-1.5"><!> <span>Cartão ou Boleto</span></button></form></li> <li><button class="flex items-center gap-1.5"><!> <span>Pix</span></button></li></ul></div>'
	),
	Vt = k(
		'<form method="POST"><input type="hidden" name="lookup_key"/> <button class="btn btn-lg btn-primary mt-3 h-10" type="submit"><!></button></form>'
	),
	Wt = k(
		'<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl p-4"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal">Droplets</span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <!></div>'
	),
	Gt = k(
		'<div class="flex flex-col gap-4"><section><div class="flex items-center gap-1"><!> <h3 class="text-xl font-bold">Droplets</h3> <div class="ml-auto mr-4"><!></div></div> <p class="text-base-content/80 mt-1 text-sm"> </p></section> <section><div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div> <p class="text-base-content/60 mt-4 text-center text-sm"> <a class="font-medium" target="_blank"> </a></p></section></div>'
	),
	Jt = (s, e) => {
		var r;
		navigator.clipboard.writeText(
			((r = _(e)) == null ? void 0 : r.pixCode) ?? ""
		),
			re.success("Código PIX copiado");
	},
	$t = async (s, e, r) => {
		var a, m, u;
		if (!_(e)) {
			re.info("Espere 1 minuto e recarrege a pagina");
			return;
		}
		try {
			L(r, !0);
			const { paid: b } = await $e.getPixStatus(_(e).pixId);
			if (b) {
				const c = _(e).productId.toString(),
					i =
						(u =
							(m = (a = yt.products[c]) == null ? void 0 : a.items) == null
								? void 0
								: m[0]) == null
							? void 0
							: u.amount;
				await se.refresh(),
					i ? Re(`payment/success?droplets=${i}`) : Re("payment/success");
			} else
				re.info(
					"Pagamento ainda não recebido. Desculpe a demora, tente novamente em instantes.",
					{ duration: 1e5 }
				);
		} catch (b) {
			console.error(b),
				re.error(
					"Error ao atualizar o status do pix. Tente recarregar a página."
				);
		} finally {
			L(r, !1);
		}
	},
	eo = k(
		'<p class="text-base-content/80">Efetue o pagamento do PIX no valor de <span class="font-semibold"> </span></p> <section><div class="relative"><img class="pixelated w-70 aspect-square" alt="QR code PIX"/> <div class="center-absolute border-6 absolute size-[95%] border-black"></div></div></section> <section class="w-full"><span class="text-base-content/80 ml-4 text-sm font-semibold">Código</span> <div class="border-base-content/20 rounded-field flex w-full items-center gap-1 border-2 py-1.5 pl-4 pr-2.5"><input class="text-base-content/80 w-full min-w-10 grow text-sm font-medium" readonly=""/> <div class="h-10"><button class="btn btn-primary">Copiar</button></div></div></section> <section class="mt-2"><button class="btn btn-primary btn-lg">Fiz o pagamento</button></section>',
		1
	),
	to = k(
		'<div class="flex h-96 items-center justify-center"><span class="loading loading-spinner loading-xl"></span></div>'
	),
	oo = k(
		'<dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-2xl pb-4"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button> </button></form></dialog> <dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-lg"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <div class="flex h-full flex-col items-center gap-4"><section><div class="flex items-center gap-2"><!> <h3 class="text-4xl font-bold">PIX</h3></div></section> <!></div></div></dialog>',
		1
	);
function ko(s, e) {
	Ke(e, !0);
	let r = Ge(e, "open", 15),
		a = be(!1);
	_t(() => {
		const l = (g) => {
			g.key === "Escape" && r(!1);
		};
		return (
			document.addEventListener("keydown", l),
			() => document.removeEventListener("keydown", l)
		);
	});
	const m = _e(() => {
			var l, g;
			return (
				((g = (l = se.data) == null ? void 0 : l.country) == null
					? void 0
					: g.toUpperCase()) === "BR"
			);
		}),
		u = _e(() => {
			var l, g;
			return (
				((g = (l = se.data) == null ? void 0 : l.country) == null
					? void 0
					: g.toUpperCase()) === "MX"
			);
		});
	let b = be(null),
		c = be(void 0),
		i = be(!1);
	var p = oo(),
		f = me(p),
		h = t(f),
		S = n(t(h), 2);
	{
		var C = (l) => {
			var g = Gt(),
				B = t(g),
				Z = t(B),
				le = t(Z);
			ze(le, { class: "text-primary size-6" });
			var R = n(le, 4),
				ie = t(R);
			{
				let z = _e(() => {
					var A;
					return ((A = se.data) == null ? void 0 : A.droplets) ?? 0;
				});
				Ot(ie, {
					get value() {
						return _(z);
					},
					button: !1,
				});
			}
			o(R), o(Z);
			var de = n(Z, 2),
				Y = t(de, !0);
			o(de), o(B);
			var K = n(B, 2);
			{
				const z = (A, v) => {
					let J = () => (v == null ? void 0 : v().droplets),
						$ = () => (v == null ? void 0 : v().bonus),
						he = () => (v == null ? void 0 : v().price),
						Se = () => (v == null ? void 0 : v().stripeLookupkey),
						nt = () => (v == null ? void 0 : v().productId),
						lt = () => (v == null ? void 0 : v().dropdownClass);
					var we = Wt(),
						ye = t(we),
						Ee = t(ye);
					ze(Ee, { class: "mb-1 inline size-7" });
					var Be = n(Ee, 2),
						it = t(Be);
					X(), o(Be), o(ye);
					var ke = n(ye, 2),
						He = t(ke);
					{
						var dt = (I) => {
							var x = Ce();
							y(
								(T) => w(x, `${T ?? ""} Droplets`),
								[() => J().toLocaleString("en-US")]
							),
								d(I, x);
						};
						M(He, (I) => {
							$() && I(dt);
						});
					}
					var Ue = n(He, 2),
						ct = t(Ue);
					o(Ue), o(ke);
					var pt = n(ke, 2);
					{
						var vt = (I) => {
								var x = Kt(),
									T = t(x),
									ee = t(T);
								o(T);
								var ve = n(T, 2),
									te = t(ve),
									F = t(te),
									P = t(F);
								Ie(P);
								var D = n(P, 2),
									oe = t(D);
								Nt(oe, { class: "inline size-5" }), X(2), o(D), o(F), o(te);
								var Ze = n(te, 2),
									ue = t(Ze);
								ue.__click = [Yt, b, a, nt, c];
								var ft = t(ue);
								Qe(ft, { class: "size-5" }),
									X(2),
									o(ue),
									o(Ze),
									o(ve),
									o(x),
									y(
										(bt) => {
											Je(x, 1, `dropdown mt-3 ${lt() ?? ""}`),
												w(ee, `R$${bt ?? ""}`),
												ae(
													F,
													"action",
													`${Fe}/payment/create-checkout-session`
												),
												Le(P, Se()),
												(D.disabled = _(a)),
												(ue.disabled = _(a));
										},
										[() => (he() * 4).toFixed(2).replace(".", ",")]
									),
									fe("submit", F, () => {
										L(a, !0), setTimeout(() => L(a, !1), 3e3);
									}),
									d(I, x);
							},
							ut = (I) => {
								var x = Vt(),
									T = t(x);
								Ie(T);
								var ee = n(T, 2),
									ve = t(ee);
								{
									var te = (P) => {
											var D = Ce();
											y(
												(oe) => w(D, `MX$ ${oe ?? ""}`),
												[() => (he() * 18).toFixed(2)]
											),
												d(P, D);
										},
										F = (P) => {
											var D = Ce();
											y((oe) => w(D, `$${oe ?? ""}`), [() => he().toFixed(2)]),
												d(P, D);
										};
									M(ve, (P) => {
										_(u) ? P(te) : P(F, !1);
									});
								}
								o(ee),
									o(x),
									y(() => {
										ae(x, "action", `${Fe}/payment/create-checkout-session`),
											Le(T, Se()),
											(ee.disabled = _(a));
									}),
									fe("submit", x, () => {
										L(a, !0), setTimeout(() => L(a, !1), 3e3);
									}),
									d(I, x);
							};
						M(pt, (I) => {
							_(m) ? I(vt) : I(ut, !1);
						});
					}
					o(we),
						y(
							(I, x) => {
								w(it, `${I ?? ""} `), w(ct, `+${x ?? ""} bonus`);
							},
							[
								() => (J() + $()).toLocaleString("en-US"),
								() => $().toLocaleString("en-US"),
							]
						),
						d(A, we);
				};
				var H = t(K),
					V = t(H);
				z(V, () => ({
					price: 5,
					droplets: 25e3,
					bonus: 0,
					stripeLookupkey: "droplets_5",
					productId: 10,
					dropdownClass: "dropdown-center",
				}));
				var ce = n(V, 2);
				z(ce, () => ({
					price: 15,
					droplets: 75e3,
					bonus: 3750,
					stripeLookupkey: "droplets_15",
					productId: 20,
					dropdownClass: "dropdown-center",
				}));
				var W = n(ce, 2);
				z(W, () => ({
					price: 30,
					droplets: 15e4,
					bonus: 15e3,
					stripeLookupkey: "droplets_30",
					productId: 30,
					dropdownClass: "dropdown-center",
				}));
				var G = n(W, 2);
				z(G, () => ({
					price: 50,
					droplets: 25e4,
					bonus: 37500,
					stripeLookupkey: "droplets_50",
					productId: 40,
					dropdownClass: "dropdown-center",
				}));
				var pe = n(G, 2);
				z(pe, () => ({
					price: 75,
					droplets: 375e3,
					bonus: 75e3,
					stripeLookupkey: "droplets_75",
					productId: 50,
					dropdownClass: "dropdown-center",
				}));
				var st = n(pe, 2);
				z(st, () => ({
					price: 100,
					droplets: 5e5,
					bonus: 125e3,
					stripeLookupkey: "droplets_100",
					productId: 60,
					dropdownClass: "max-sm:dropdown-top dropdown-center",
				})),
					o(H);
				var De = n(H, 2),
					Me = t(De),
					xe = n(Me),
					rt = t(xe, !0);
				o(xe),
					o(De),
					o(K),
					y(
						(A, v, J, $) => {
							w(Me, `${v ?? ""} `), ae(xe, "href", J), w(rt, $);
						},
						[() => Xe(), () => je(), () => Ne(Ae.url.origin), () => Oe()]
					);
			}
			o(g),
				y(
					(z, A, v, J) => w(Y, z),
					[() => Xe(), () => je(), () => Ne(Ae.url.origin), () => Oe()]
				),
				d(l, g);
		};
		M(S, (l) => {
			se.data && l(C);
		});
	}
	o(h);
	var q = n(h, 2),
		E = t(q),
		Q = t(E, !0);
	o(E),
		o(q),
		o(f),
		gt(f, () => (l) => {
			mt(() => {
				r() ? l.show() : l.close();
			});
		});
	var U = n(f, 2),
		Pe = t(U),
		qe = n(t(Pe), 2),
		ge = t(qe),
		Te = t(ge),
		et = t(Te);
	Qe(et, { class: "size-10" }), X(2), o(Te), o(ge);
	var tt = n(ge, 2);
	{
		var ot = (l) => {
				var g = eo(),
					B = me(g),
					Z = n(t(B)),
					le = t(Z);
				o(Z), o(B);
				var R = n(B, 2),
					ie = t(R),
					de = t(ie);
				X(2), o(ie), o(R);
				var Y = n(R, 2),
					K = n(t(Y), 2),
					H = t(K);
				Ie(H);
				var V = n(H, 2),
					ce = t(V);
				(ce.__click = [Jt, c]), o(V), o(K), o(Y);
				var W = n(Y, 2),
					G = t(W);
				(G.__click = [$t, c, i]),
					o(W),
					y(
						(pe) => {
							w(le, `R$${pe ?? ""}`),
								ae(de, "src", _(c).qrCode),
								Le(H, _(c).pixCode),
								(G.disabled = _(i));
						},
						[() => (_(c).price / 100).toFixed(2).replace(".", ",")]
					),
					d(l, g);
			},
			at = (l) => {
				var g = to();
				d(l, g);
			};
		M(tt, (l) => {
			_(c) ? l(ot) : l(at, !1);
		});
	}
	o(qe),
		o(Pe),
		o(U),
		ht(
			U,
			(l) => L(b, l),
			() => _(b)
		),
		y((l) => w(Q, l), [() => kt()]),
		fe("close", f, () => {
			r(!1);
		}),
		fe("close", U, () => {
			setTimeout(() => {
				L(c, void 0);
			}, 300);
		}),
		d(s, p),
		We();
}
Ye(["click"]);
var ao = N(
		'<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>'
	),
	so = N(
		'<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>'
	);
function Co(s, e) {
	let r = ne(e, ["$$slots", "$$events", "$$legacy", "filled"]);
	var a = Ve(),
		m = me(a);
	{
		var u = (c) => {
				var i = ao();
				O(i, () => ({
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 -960 960 960",
					fill: "currentColor",
					...r,
				})),
					d(c, i);
			},
			b = (c) => {
				var i = so();
				O(i, () => ({
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 -960 960 960",
					fill: "currentColor",
					...r,
				})),
					d(c, i);
			};
		M(m, (c) => {
			e.filled ? c(u) : c(b, !1);
		});
	}
	d(s, a);
}
function Io([s, e], [r, a]) {
	(s = Math.floor(s)),
		(e = Math.floor(e)),
		(r = Math.floor(r)),
		(a = Math.floor(a));
	const m = [],
		u = Math.abs(r - s),
		b = Math.abs(a - e),
		c = s < r ? 1 : -1,
		i = e < a ? 1 : -1;
	let p = u - b,
		f = s,
		h = e;
	for (; m.push([f, h]), !(f === r && h === a); ) {
		const S = 2 * p;
		S > -b && ((p -= b), (f += c)), S < u && ((p += u), (h += i));
	}
	return m;
}
var ro = k('<img class="pixelated bg-base-200" alt="User profile"/>'),
	no = k(
		'<div class="relative w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-zhy0pt"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <div> </div></div>'
	);
function Lo(s, e) {
	const r = _e(() => (e.level % 1) * 360);
	var a = no(),
		m = n(t(a), 2),
		u = n(m, 2),
		b = t(u),
		c = t(b);
	{
		var i = (C) => {
				Ct(C, {
					get userId() {
						return e.userId;
					},
				});
			},
			p = (C) => {
				var q = ro();
				y(() => ae(q, "src", e.pictureUrl)), d(C, q);
			};
		M(c, (C) => {
			e.pictureUrl ? C(p, !1) : C(i);
		});
	}
	o(b), o(u);
	var f = n(u, 2);
	let h;
	var S = t(f, !0);
	o(f),
		o(a),
		y(
			(C, q) => {
				xt(m, `--angle: ${_(r) ?? ""}deg; --color: var(--color-secondary)`),
					(h = Je(
						f,
						1,
						"text-primary-content bg-secondary absolute bottom-0 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold",
						null,
						h,
						C
					)),
					w(S, q);
			},
			[
				() => ({ "left-0": e.level > 99, "-left-1": e.level > 99 }),
				() => Math.floor(e.level),
			]
		),
		d(s, a);
}
export {
	Ht as A,
	Ot as D,
	Co as I,
	Lo as P,
	ze as a,
	ko as b,
	wo as c,
	Ne as d,
	yo as e,
	Io as r,
};

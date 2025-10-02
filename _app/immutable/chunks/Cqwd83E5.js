import { g as u } from "./CV9xcpLq.js";
import "./Ch2Ub8FX.js";
import { o as De } from "./DoL3ojdE.js";
import {
	at as Be,
	p as Te,
	y as ae,
	aw as h,
	au as R,
	f as X,
	d as o,
	s as c,
	r as n,
	n as Ee,
	ax as se,
	b,
	c as Le,
	t as k,
	g as s,
	u as ie,
	b4 as J,
	ay as le,
	a as ce,
	v as Ue,
} from "./CMvZtFtm.js";
import { s as _ } from "./DVA6u9-7.js";
import { p as Ie, i as C, r as Pe } from "./BF50aS-j.js";
import { e as Ce } from "./CXkjfmFU.js";
import {
	f as ze,
	r as D,
	s as ue,
	g as z,
	a as Me,
	b as Se,
} from "./C5yqZvKC.js";
import { t as Ae } from "./BBgyHb-Z.js";
import { c as Oe } from "./Dpga8uG-.js";
import { b as je } from "./0wx1llIh.js";
import {
	i as Ne,
	h as qe,
	f as Ze,
	j as Fe,
	k as He,
	P as Q,
	t as W,
} from "./BRM3t761.js";
import { o as Ke, L as Ve, s as Ye, a as Ge, g as Je } from "./CgCA7Awo.js";
import { P as Qe } from "./D3yaN7Zl.js";
import { c as We } from "./CHGjpGz-.js";
import { g as Xe } from "./lE0oaQc5.js";
import { f as $e } from "./wZ7b5CwQ.js";
(function () {
	try {
		var t =
			typeof window < "u"
				? window
				: typeof global < "u"
				? global
				: typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
				? self
				: {};
		t.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
	} catch {}
})();
try {
	(function () {
		var t =
				typeof window < "u"
					? window
					: typeof global < "u"
					? global
					: typeof globalThis < "u"
					? globalThis
					: typeof self < "u"
					? self
					: {},
			e = new t.Error().stack;
		e &&
			((t._sentryDebugIds = t._sentryDebugIds || {}),
			(t._sentryDebugIds[e] = "ec586f40-9abd-4bae-8453-2c8e973cd3d0"),
			(t._sentryDebugIdIdentifier =
				"sentry-dbid-ec586f40-9abd-4bae-8453-2c8e973cd3d0"));
	})();
} catch {}
const et = () => "Copy",
	tt = () => "Copiar",
	lr = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? et() : tt()),
	rt = () => "Report User",
	nt = () => "Reportar usuário",
	ot = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? rt() : nt()),
	at = () => "Timeout User",
	st = () => "Suspender usuário",
	it = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? at() : st()),
	lt = () => "Ban User",
	ct = () => "Banir usuário",
	ut = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? lt() : ct()),
	dt = () => "+18, inappropriate link, highly suggestive content, ...",
	pt = () => "+18, links inapropriados, conteúdo altamente sugestivo, ...",
	_t = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? dt() : pt()),
	ft = () => "Use of software to completely automate painting",
	mt = () => "Uso de software para pintar de forma completamente automatizada ",
	vt = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? ft() : mt()),
	gt = () => "Racism, homophobia, hate groups, ...",
	bt = () => "Racismo, homofobia, grupos de ódio, ...",
	ht = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? gt() : bt()),
	xt = () => "Messed up artworks for no reason",
	yt = () => "Estragar desenho dos outros sem motivo",
	wt = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? xt() : yt()),
	Rt = () => "Released other's personal information without their consent",
	kt = () => "Vazar informações pessoais de terceiros sem consentimento",
	Dt = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? Rt() : kt()),
	Bt = () => "Other reason not listed",
	Tt = () => "Outro motivo não listado",
	Et = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? Bt() : Tt()),
	Lt = () => "Report",
	Ut = () => "Reportar",
	It = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? Lt() : Ut()),
	Pt = () => "Report sent successfully",
	Ct = () => "Denúncia enviada com sucesso",
	zt = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? Pt() : Ct()),
	Mt = () => "Report failed. Please try again later",
	St = () => "Denúncia falhou. Por favor, tente novamente mais tarde",
	At = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? Mt() : St()),
	Ot = () => "Purchases",
	jt = () => "Compras",
	cr = (t = {}, e = {}) => ((e.locale ?? u()) === "en" ? Ot() : jt());
var Nt = X(
		'<label class="flex gap-3"><input name="reason" class="radio radio-sm mt-1" type="radio"/> <div><div class="font-semibold"> </div> <div class="text-base-content/80 text-sm"> </div></div></label>'
	),
	qt = (t, e) => {
		e(!1);
	},
	Zt = X(
		'<form method="POST"><input name="reportedUserId" hidden/> <input name="latitude" hidden/> <input name="longitude" hidden/> <input name="zoom" hidden/> <section class="flex gap-3"><!> <div><h2 class="text-xl font-semibold"><!></h2> <span><span> </span> <span> </span></span></div></section> <section class="mt-6"><h3 class="text-base-content/80 text-base"> </h3> <div class="mt-2 flex flex-col gap-3"></div></section> <section class="mt-6"><!></section> <section class="mt-3 flex justify-end gap-2"><button type="button" class="btn"> </button> <button class="btn btn-error"> </button></section></form>'
	),
	Ft = X(
		'<dialog class="modal"><div class="modal-box max-h-[97%] max-w-xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>'
	);
function ur(t, e) {
	Te(e, !0);
	const i = [];
	let p = Ie(e, "open", 15),
		B = R(!1),
		T = R(""),
		M = R(""),
		E = R(null),
		S = R(null);
	const de = [
		{ value: "inappropriate-content", label: Ne(), description: _t() },
		{ value: "hate-speech", label: qe(), description: ht() },
		{ value: "doxxing", label: Ze(), description: Dt() },
		{ value: "bot", label: Fe(), description: vt() },
		{ value: "griefing", label: He(), description: wt() },
		{ value: "other", label: Ke(), description: Et() },
	];
	De(() => {
		const f = (m) => {
			m.key === "Escape" && p(!1);
		};
		return (
			document.addEventListener("keydown", f),
			() => document.removeEventListener("keydown", f)
		);
	}),
		ae(() => {
			p() || (h(T, ""), h(M, ""));
		});
	const pe = {
		"report-user": `${Q}/report-user`,
		timeout: `${Q}/moderator/timeout-user`,
		ban: `${Q}/admin/ban-user`,
	};
	var x = Ft(),
		$ = o(x),
		_e = c(o($), 2);
	{
		var fe = (f) => {
			var m = Zt(),
				A = o(m);
			D(A);
			var O = c(A, 2);
			D(O);
			var j = c(O, 2);
			D(j);
			var N = c(j, 2);
			D(N);
			var q = c(N, 2),
				ee = o(q);
			Qe(ee, {
				get userId() {
					return e.paintedBy.id;
				},
				get pictureUrl() {
					return e.paintedBy.picture;
				},
				class: "size-14",
			});
			var te = c(ee, 2),
				Z = o(te),
				me = o(Z);
			{
				var ve = (a) => {
						var r = J();
						k((l) => _(r, l), [() => ot()]), b(a, r);
					},
					ge = (a) => {
						var r = le(),
							l = ce(r);
						{
							var d = (v) => {
									var g = J();
									k((y) => _(g, y), [() => it()]), b(v, g);
								},
								U = (v) => {
									var g = le(),
										y = ce(g);
									{
										var I = (w) => {
											var P = J();
											k((ke) => _(P, ke), [() => ut()]), b(w, P);
										};
										C(
											y,
											(w) => {
												e.action === "ban" && w(I);
											},
											!0
										);
									}
									b(v, g);
								};
							C(
								l,
								(v) => {
									e.action === "timeout" ? v(d) : v(U, !1);
								},
								!0
							);
						}
						b(a, r);
					};
				C(me, (a) => {
					e.action === "report-user" ? a(ve) : a(ge, !1);
				});
			}
			n(Z);
			var F = c(Z, 2),
				H = o(F),
				be = o(H, !0);
			n(H);
			var re = c(H, 2),
				he = o(re);
			n(re), n(F), n(te), n(q);
			var K = c(q, 2),
				V = o(K),
				xe = o(V);
			n(V);
			var ne = c(V, 2);
			Ce(
				ne,
				21,
				() => de,
				(a) => a.value,
				(a, r) => {
					var l = Nt(),
						d = o(l);
					D(d);
					var U,
						v = c(d, 2),
						g = o(v),
						y = o(g, !0);
					n(g);
					var I = c(g, 2),
						w = o(I, !0);
					n(I),
						n(v),
						n(l),
						k(() => {
							ue(d, "aria-label", s(r).label),
								U !== (U = s(r).value) &&
									(d.value = (d.__value = s(r).value) ?? ""),
								_(y, s(r).label),
								_(w, s(r).description);
						}),
						Oe(
							i,
							[],
							d,
							() => (s(r).value, s(T)),
							(P) => h(T, P)
						),
						b(a, l);
				}
			),
				n(ne),
				n(K);
			var Y = c(K, 2),
				ye = o(Y);
			{
				let a = ie(() => Je()),
					r = ie(() => (s(T) === "doxxing" ? 20 : 5));
				Ve(ye, {
					class: "h-20 rounded-lg",
					name: "notes",
					get placeholder() {
						return s(a);
					},
					max: 2056,
					get min() {
						return s(r);
					},
					get value() {
						return s(M);
					},
					set value(l) {
						h(M, l, !0);
					},
					get validate() {
						return s(S);
					},
					set validate(l) {
						h(S, l, !0);
					},
				});
			}
			n(Y);
			var oe = c(Y, 2),
				L = o(oe);
			L.__click = [qt, p];
			var we = o(L, !0);
			n(L);
			var G = c(L, 2),
				Re = o(G, !0);
			n(G),
				n(oe),
				n(m),
				je(
					m,
					(a) => h(E, a),
					() => s(E)
				),
				k(
					(a, r, l, d) => {
						ue(m, "action", pe[e.action]),
							z(A, e.paintedBy.id),
							z(O, e.latLon[0]),
							z(j, e.latLon[1]),
							z(N, e.zoom),
							Me(F, 1, `font-medium ${a ?? ""} flex gap-1.5`),
							_(be, e.paintedBy.name),
							_(he, `#${e.paintedBy.id ?? ""}`),
							_(xe, `${r ?? ""}:`),
							_(we, l),
							(G.disabled = s(B)),
							_(Re, d);
					},
					[() => Xe(e.paintedBy.id), () => Ye(), () => We(), () => It()]
				),
				se("submit", m, async (a) => {
					if ((a.preventDefault(), !s(B) && s(S)()))
						try {
							h(B, !0);
							const r = new FormData(s(E));
							if (!r.get("reason")) {
								W.error(Ge());
								return;
							}
							const l = await e.image;
							r.append("image", l, `report-${Date.now()}.jpeg`);
							const d = await fetch(s(E).action, {
								method: "POST",
								body: r,
								credentials: "include",
							});
							d.status === 200 || d.status === 409
								? (W.info(zt()), p(!1))
								: W.error(At());
						} finally {
							h(B, !1);
						}
				}),
				Ae(2, m, () => $e),
				b(f, m);
		};
		C(_e, (f) => {
			p() && f(fe);
		});
	}
	n($),
		Ee(2),
		n(x),
		ze(x, () => (f) => {
			ae(() => {
				p() ? f.show() : f.close();
			});
		}),
		se("close", x, () => p(!1)),
		b(t, x),
		Le();
}
Be(["click"]);
var Ht = Ue(
	'<svg><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>'
);
function dr(t, e) {
	let i = Pe(e, ["$$slots", "$$events", "$$legacy"]);
	var p = Ht();
	Se(p, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 -960 960 960",
		fill: "currentColor",
		...i,
	})),
		b(t, p);
}
export { dr as D, ur as R, ut as b, lr as c, cr as p, ot as r, it as t };

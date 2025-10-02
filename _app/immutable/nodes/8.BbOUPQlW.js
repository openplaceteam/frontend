import "../chunks/Ch2Ub8FX.js";
import { o as Oe } from "../chunks/DoL3ojdE.js";
import {
	at as je,
	p as Be,
	av as Le,
	y as be,
	g as s,
	au as B,
	aw as y,
	f as m,
	d as t,
	s as i,
	t as u,
	b as n,
	c as ze,
	$ as Me,
	r as e,
	ay as L,
	a as z,
} from "../chunks/CMvZtFtm.js";
import { s as l } from "../chunks/DVA6u9-7.js";
import { i as k } from "../chunks/BF50aS-j.js";
import { e as ne, i as de } from "../chunks/CXkjfmFU.js";
import { h as Ge } from "../chunks/P77cUGnY.js";
import { r as He } from "../chunks/C5yqZvKC.js";
import { a as Ne } from "../chunks/Dpga8uG-.js";
import { g as We } from "../chunks/CyB--sFG.js";
import { a as ue } from "../chunks/BRM3t761.js";
import { R as Ye } from "../chunks/m3o6lEf1.js";
import { g as ge } from "../chunks/CV9xcpLq.js";
import { o as qe } from "../chunks/BpoSU4rb.js";
import { c as Ce } from "../chunks/CVa8RI1g.js";
import { l as me } from "../chunks/BHI5vujT.js";
import { n as xe } from "../chunks/Blc0Ir5M.js";
import { e as Fe } from "../chunks/CmhsLcKe.js";
(function () {
	try {
		var f =
			typeof window < "u"
				? window
				: typeof global < "u"
				? global
				: typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
				? self
				: {};
		f.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
	} catch {}
})();
try {
	(function () {
		var f =
				typeof window < "u"
					? window
					: typeof global < "u"
					? global
					: typeof globalThis < "u"
					? globalThis
					: typeof self < "u"
					? self
					: {},
			p = new f.Error().stack;
		p &&
			((f._sentryDebugIds = f._sentryDebugIds || {}),
			(f._sentryDebugIds[p] = "e51441df-36bf-46a6-b46f-8e262c981114"),
			(f._sentryDebugIdIdentifier =
				"sentry-dbid-e51441df-36bf-46a6-b46f-8e262c981114"));
	})();
} catch {}
const Je = () => "Select all",
	Ke = () => "Selecionar tudo",
	Pe = (f = {}, p = {}) => ((p.locale ?? ge()) === "en" ? Je() : Ke()),
	Qe = () => "Open reports",
	Ue = () => "Reports abertos",
	Ve = (f = {}, p = {}) => ((p.locale ?? ge()) === "en" ? Qe() : Ue());
var Xe = (f, p) => p(!0),
	Ze = (f, p) => p(!1),
	$e = m(
		'<label class="flex items-center gap-2"><input type="checkbox" class="checkbox checkbox-sm"/> <span class="text-sm"> </span></label>'
	),
	et = m(
		'<div class="text-base-content/80 flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div>'
	),
	tt = m('<p class="text-error"> </p>'),
	at = m(
		'<div class="bg-base-200 border-base-200 rounded-xl border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-lg font-bold leading-none"> </div></div>'
	),
	rt = m(
		'<div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div class="bg-base-200 flex items-baseline gap-3 rounded-lg px-4 py-2"><div><div class="text-base-content/70 text-sm">Total</div> <div class="text-4xl font-extrabold leading-none"> </div></div> <div class="text-base-content/60 text-xs"> </div></div> <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"></div></div>'
	),
	st = m('<p class="text-base-content/80"> </p>'),
	ot = m(
		'<div class="text-base-content/80 flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div>'
	),
	lt = m('<p class="text-error"> </p>'),
	it = m(
		'<div class="bg-base-200 border-base-200 rounded-xl border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-lg font-bold leading-none"> </div></div>'
	),
	nt = m(
		'<div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div class="bg-base-200 flex items-baseline gap-3 rounded-lg px-4 py-2"><div><div class="text-base-content/70 text-sm">Total</div> <div class="text-4xl font-extrabold leading-none"> </div></div> <div class="text-base-content/60 text-xs"> </div></div> <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"></div></div>'
	),
	dt = m('<p class="text-base-content/80"> </p>'),
	vt = m(
		'<section class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div class="mb-3 flex items-center justify-between"><h2 class="text-xl font-semibold"> </h2> <div class="flex items-center gap-2"><button class="btn btn-sm" title="Selecionar tudo"> </button> <button class="btn btn-sm" title="Limpar seleção"> </button> <button class="btn btn-circle btn-sm" title="Atualizar"><!></button></div></div> <div class="mb-4 flex flex-wrap gap-3"></div> <div class="rounded-box bg-base-100 border-base-300 border p-4"><!></div> <div class="rounded-box bg-base-100 border-base-300 mt-4 border p-4"><div class="mb-2"><h3 class="text-lg font-semibold"> </h3></div> <!></div></section>'
	);
function Et(f, p) {
	Be(p, !0);
	let w = B(!0),
		A = B(null),
		O = B(null),
		M = B(null);
	const j = [
		{ key: "doxxing", label: "Doxxing" },
		{ key: "inappropriate_content", label: "Inappropriate" },
		{ key: "hate_speech", label: "Hate Speech" },
		{ key: "bot", label: "Bot" },
		{ key: "other", label: "Other" },
		{ key: "griefing", label: "Griefing" },
	];
	let T = Le({
			doxxing: !0,
			inappropriate_content: !0,
			hate_speech: !0,
			bot: !0,
			other: !0,
			griefing: !0,
		}),
		J = B(0),
		K = B(0);
	be(() => {
		const a = s(O);
		if (!a) {
			y(J, 0);
			return;
		}
		let r = 0;
		for (const o of j) T[o.key] && (r += a[o.key]);
		y(J, r, !0);
	}),
		be(() => {
			const a = s(M);
			if (!a) {
				y(K, 0);
				return;
			}
			let r = 0;
			for (const o of j) T[o.key] && (r += a[o.key]);
			y(K, r, !0);
		});
	async function ve() {
		try {
			y(w, !0),
				y(A, null),
				y(O, await ue.getOpenTicketsSummary(), !0),
				y(M, await ue.getOpenReportsSummary(), !0);
		} catch (a) {
			a.status === 403 || a.status === 401
				? We("/404")
				: y(A, (a == null ? void 0 : a.message) ?? Fe(), !0),
				y(O, null);
		} finally {
			y(w, !1);
		}
	}
	Oe(ve);
	function ce(a) {
		for (const r of j) T[r.key] = a;
	}
	var P = vt();
	Ge((a) => {
		Me.title = "openplace - Admin Dashboard";
	});
	var Q = t(P),
		U = t(Q),
		ye = t(U, !0);
	e(U);
	var fe = i(U, 2),
		q = t(fe);
	q.__click = [Xe, ce];
	var he = t(q, !0);
	e(q);
	var C = i(q, 2);
	C.__click = [Ze, ce];
	var ke = t(C, !0);
	e(C);
	var F = i(C, 2);
	F.__click = ve;
	var we = t(F);
	Ye(we, { class: "size-4" }), e(F), e(fe), e(Q);
	var V = i(Q, 2);
	ne(
		V,
		21,
		() => j,
		de,
		(a, r) => {
			var o = $e(),
				_ = t(o);
			He(_);
			var h = i(_, 2),
				d = t(h, !0);
			e(h),
				e(o),
				u(() => l(d, s(r).label)),
				Ne(
					_,
					() => T[s(r).key],
					(v) => (T[s(r).key] = v)
				),
				n(a, o);
		}
	),
		e(V);
	var X = i(V, 2),
		Te = t(X);
	{
		var Se = (a) => {
				var r = et(),
					o = i(t(r), 2),
					_ = t(o, !0);
				e(o), e(r), u((h) => l(_, h), [() => me()]), n(a, r);
			},
			De = (a) => {
				var r = L(),
					o = z(r);
				{
					var _ = (d) => {
							var v = tt(),
								S = t(v, !0);
							e(v), u(() => l(S, s(A))), n(d, v);
						},
						h = (d) => {
							var v = L(),
								S = z(v);
							{
								var $ = (b) => {
										var c = rt(),
											x = t(c),
											g = t(x),
											G = i(t(g), 2),
											te = t(G, !0);
										e(G), e(g);
										var H = i(g, 2),
											ae = t(H);
										e(H), e(x);
										var N = i(x, 2);
										ne(
											N,
											21,
											() => j,
											de,
											(re, D) => {
												var W = L(),
													se = z(W);
												{
													var oe = (I) => {
														var R = at(),
															E = t(R),
															le = t(E, !0);
														e(E);
														var Y = i(E, 2),
															ie = t(Y, !0);
														e(Y),
															e(R),
															u(() => {
																l(le, s(D).label), l(ie, s(O)[s(D).key]);
															}),
															n(I, R);
													};
													k(se, (I) => {
														T[s(D).key] && I(oe);
													});
												}
												n(re, W);
											}
										),
											e(N),
											e(c),
											u(() => {
												l(te, s(J)),
													l(ae, `Base: ${s(O).total_open_tickets ?? ""}`);
											}),
											n(b, c);
									},
									ee = (b) => {
										var c = st(),
											x = t(c, !0);
										e(c), u((g) => l(x, g), [() => xe()]), n(b, c);
									};
								k(
									S,
									(b) => {
										s(O) ? b($) : b(ee, !1);
									},
									!0
								);
							}
							n(d, v);
						};
					k(
						o,
						(d) => {
							s(A) ? d(_) : d(h, !1);
						},
						!0
					);
				}
				n(a, r);
			};
		k(Te, (a) => {
			s(w) ? a(Se) : a(De, !1);
		});
	}
	e(X);
	var pe = i(X, 2),
		Z = t(pe),
		_e = t(Z),
		Ie = t(_e, !0);
	e(_e), e(Z);
	var Re = i(Z, 2);
	{
		var Ee = (a) => {
				var r = ot(),
					o = i(t(r), 2),
					_ = t(o, !0);
				e(o), e(r), u((h) => l(_, h), [() => me()]), n(a, r);
			},
			Ae = (a) => {
				var r = L(),
					o = z(r);
				{
					var _ = (d) => {
							var v = lt(),
								S = t(v, !0);
							e(v), u(() => l(S, s(A))), n(d, v);
						},
						h = (d) => {
							var v = L(),
								S = z(v);
							{
								var $ = (b) => {
										var c = nt(),
											x = t(c),
											g = t(x),
											G = i(t(g), 2),
											te = t(G, !0);
										e(G), e(g);
										var H = i(g, 2),
											ae = t(H);
										e(H), e(x);
										var N = i(x, 2);
										ne(
											N,
											21,
											() => j,
											de,
											(re, D) => {
												var W = L(),
													se = z(W);
												{
													var oe = (I) => {
														var R = it(),
															E = t(R),
															le = t(E, !0);
														e(E);
														var Y = i(E, 2),
															ie = t(Y, !0);
														e(Y),
															e(R),
															u(() => {
																l(le, s(D).label), l(ie, s(M)[s(D).key]);
															}),
															n(I, R);
													};
													k(se, (I) => {
														T[s(D).key] && I(oe);
													});
												}
												n(re, W);
											}
										),
											e(N),
											e(c),
											u(() => {
												l(te, s(K)),
													l(ae, `Base: ${s(M).total_open_reports ?? ""}`);
											}),
											n(b, c);
									},
									ee = (b) => {
										var c = dt(),
											x = t(c, !0);
										e(c), u((g) => l(x, g), [() => xe()]), n(b, c);
									};
								k(
									S,
									(b) => {
										s(M) ? b($) : b(ee, !1);
									},
									!0
								);
							}
							n(d, v);
						};
					k(
						o,
						(d) => {
							s(A) ? d(_) : d(h, !1);
						},
						!0
					);
				}
				n(a, r);
			};
		k(Re, (a) => {
			s(w) ? a(Ee) : a(Ae, !1);
		});
	}
	e(pe),
		e(P),
		u(
			(a, r, o, _) => {
				l(ye, a), l(he, r), l(ke, o), (F.disabled = s(w)), l(Ie, _);
			},
			[() => qe(), () => Pe(), () => Ce(), () => Ve()]
		),
		n(f, P),
		ze();
}
je(["click"]);
export { Et as component };

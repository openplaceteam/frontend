import "../chunks/Ch2Ub8FX.js";
import { o as je } from "../chunks/DoL3ojdE.js";
import {
	at as Ae,
	p as Me,
	au as g,
	av as L,
	y as Ue,
	g as r,
	aw as b,
	f as E,
	s as n,
	d as t,
	t as T,
	ax as ze,
	b as h,
	c as Ne,
	$ as Oe,
	r as e,
	ay as wt,
	a as kt,
} from "../chunks/CMvZtFtm.js";
import { s as d } from "../chunks/DVA6u9-7.js";
import { i as Rt } from "../chunks/BF50aS-j.js";
import { e as Be } from "../chunks/CXkjfmFU.js";
import { h as Ce } from "../chunks/P77cUGnY.js";
import { r as Wt, s as Fe, a as Pe } from "../chunks/C5yqZvKC.js";
import { b as Yt } from "../chunks/Dpga8uG-.js";
import { g as Ve } from "../chunks/CyB--sFG.js";
import { a as Ke } from "../chunks/BRM3t761.js";
import { P as Qe } from "../chunks/D3yaN7Zl.js";
import { R as We } from "../chunks/m3o6lEf1.js";
import { g as qt } from "../chunks/CV9xcpLq.js";
import { l as Ye } from "../chunks/BHI5vujT.js";
import { n as qe } from "../chunks/Blc0Ir5M.js";
import {
	a as Ge,
	m as He,
	b as Je,
	c as Xe,
	d as Ze,
} from "../chunks/g9MKNE1A.js";
import { e as tr } from "../chunks/LGRbXsL1.js";
import { e as er } from "../chunks/CmhsLcKe.js";
(function () {
	try {
		var v =
			typeof window < "u"
				? window
				: typeof global < "u"
				? global
				: typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
				? self
				: {};
		v.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
	} catch {}
})();
try {
	(function () {
		var v =
				typeof window < "u"
					? window
					: typeof global < "u"
					? global
					: typeof globalThis < "u"
					? globalThis
					: typeof self < "u"
					? self
					: {},
			u = new v.Error().stack;
		u &&
			((v._sentryDebugIds = v._sentryDebugIds || {}),
			(v._sentryDebugIds[u] = "c0720b76-8acb-4662-837b-1ac310dfea18"),
			(v._sentryDebugIdIdentifier =
				"sentry-dbid-c0720b76-8acb-4662-837b-1ac310dfea18"));
	})();
} catch {}
const rr = () => "Number of reports treated per moderator in the period",
	ar = () => "Quantidade de reports tratados por moderador no período",
	sr = (v = {}, u = {}) => ((u.locale ?? qt()) === "en" ? rr() : ar()),
	or = () => "Treated reports",
	nr = () => "Reports tratados",
	dr = (v = {}, u = {}) => ((u.locale ?? qt()) === "en" ? or() : nr());
var lr = (v, u) => u("mod"),
	ir = (v, u) => u("suspensionRate"),
	cr = (v, u) => u("ignored"),
	ur = (v, u) => u("timeout"),
	vr = (v, u) => u("ban"),
	_r = (v, u) => u("total"),
	br = E(
		'<tr><td colspan="9"><div class="text-base-content/80 flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div></td></tr>'
	),
	mr = E('<tr><td colspan="9" class="text-error"> </td></tr>'),
	pr = E('<tr><td colspan="9" class="text-base-content/70"> </td></tr>'),
	fr = E(
		'<tr class="hover"><td><a class="link hover:text-primary"><div class="flex items-center gap-2"><!> </div></a></td><td> </td><td> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td></tr>'
	),
	xr = E(
		'<section class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div class="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><h2 class="text-xl font-semibold"> </h2> <p class="text-base-content/80 mt-1"> </p></div> <form class="grid grid-cols-1 gap-2 sm:auto-cols-max sm:grid-flow-col sm:items-end"><label class="form-control"><span class="label-text text-sm">Início</span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <label class="form-control"><span class="label-text text-sm">Fim</span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <div class="flex gap-2"><button type="submit" class="btn btn-primary btn-sm"> </button> <button type="button" class="btn btn-outline btn-sm"> </button> <button type="button" class="btn btn-circle btn-sm" title="Atualizar"><!></button></div></form></div> <div class="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div></div> <div class="overflow-x-auto"><table class="table"><thead><tr><th><button class="btn btn-ghost btn-xs"> </button></th><th>Role</th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th></tr></thead><tbody><!></tbody></table></div></section>'
	);
function Or(v, u) {
	Me(u, !0);
	let x = g(!1),
		j = g(null),
		y = g(L([]));
	L({});
	function It(a) {
		return a.toISOString().slice(0, 16);
	}
	const Dt = new Date(),
		Gt = new Date(Dt.getTime() - 10080 * 60 * 1e3);
	let A = g(L(It(Gt))),
		M = g(L(It(Dt)));
	function U(a) {
		const l = new Date(a);
		return isNaN(l.getTime()) ? null : l.toISOString();
	}
	let f = g("total"),
		p = g("desc");
	function w(a) {
		r(f) === a
			? b(p, r(p) === "asc" ? "desc" : "asc", !0)
			: (b(f, a, !0), b(p, a === "mod" ? "asc" : "desc", !0));
	}
	function St(a) {
		const l = [...a];
		return (
			l.sort((i, c) => {
				let s, o;
				switch (r(f)) {
					case "mod":
						return (
							(s = i.user.id.toString()),
							(o = c.user.id.toString()),
							r(p) === "asc"
								? s < o
									? -1
									: s > o
									? 1
									: 0
								: s > o
								? -1
								: s < o
								? 1
								: 0
						);
					case "total":
						(s = i.total), (o = c.total);
						break;
					case "ban":
						(s = i.ban), (o = c.ban);
						break;
					case "ignored":
						(s = i.ignored), (o = c.ignored);
						break;
					case "timeout":
						(s = i.timeout), (o = c.timeout);
						break;
					case "suspensionRate":
						(s = i.suspensionRate ?? 0), (o = c.suspensionRate ?? 0);
						break;
					default:
						(s = 0), (o = 0);
				}
				return r(p) === "asc" ? s - o : o - s;
			}),
			l
		);
	}
	function Ht(a, l = 1) {
		return `${((a ?? 0) * 100).toFixed(l)}%`;
	}
	async function C() {
		try {
			b(x, !0), b(j, null);
			const a = U(r(A)),
				l = U(r(M));
			if (!a || !l) throw new Error("Datas inválidas");
			const i = await Ke.getClosedReportsByMod(a, l);
			b(y, i ?? [], !0);
		} catch (a) {
			a.status === 403 || a.status === 401
				? Ve("/404")
				: b(j, (a == null ? void 0 : a.message) ?? er(), !0),
				b(y, [], !0);
		} finally {
			b(x, !1);
		}
	}
	je(C);
	function Jt(a) {
		a.preventDefault(), C();
	}
	let k = g(L({ total: 0, ban: 0, ignored: 0, timeout: 0 }));
	Ue(() => {
		const a = r(y);
		if (!a || a.length === 0) {
			b(k, { total: 0, ban: 0, ignored: 0, timeout: 0 }, !0);
			return;
		}
		const l = a.length,
			i = a.reduce(
				(s, o) => (
					(s.total += o.total),
					(s.ban += o.ban),
					(s.ignored += o.ignored),
					(s.timeout += o.timeout),
					s
				),
				{ total: 0, ban: 0, ignored: 0, timeout: 0 }
			),
			c = (s) => Math.round(s * 100) / 100;
		b(
			k,
			{
				total: c(i.total / l),
				ban: c(i.ban / l),
				ignored: c(i.ignored / l),
				timeout: c(i.timeout / l),
			},
			!0
		);
	});
	function Xt(a, l) {
		const i = [
				"assigned_mod_id",
				"name",
				"alliance_id",
				"role",
				"total_reports_closed",
				"ban",
				"ignored",
				"timeout",
				"suspension_rate",
			].join(","),
			c = a.map((s) =>
				[
					s.user.id,
					s.user.name,
					s.user.allianceId,
					s.user.role,
					s.total,
					s.ban,
					s.ignored,
					s.timeout,
					(s.suspensionRate ?? 0).toFixed(4),
				].join(",")
			);
		return [i, ...c].join(`
`);
	}
	function Zt() {
		const a = St(r(y)),
			l = Xt(a),
			i = new Blob([l], { type: "text/csv;charset=utf-8;" }),
			c = URL.createObjectURL(i),
			s = document.createElement("a"),
			o = U(r(A)) ?? "start",
			m = U(r(M)) ?? "end";
		(s.href = c),
			(s.download = `reports_leaderboard_${o}_${m}.csv`),
			s.click(),
			URL.revokeObjectURL(c);
	}
	var F = xr();
	Ce((a) => {
		Oe.title = "Wplace - Admin - Reports - Leaderboard";
	});
	var P = t(F),
		V = t(P),
		K = t(V),
		te = t(K);
	e(K);
	var $t = n(K, 2),
		ee = t($t, !0);
	e($t), e(V);
	var Q = n(V, 2),
		W = t(Q),
		Lt = n(t(W), 2);
	Wt(Lt), e(W);
	var Y = n(W, 2),
		Tt = n(t(Y), 2);
	Wt(Tt), e(Y);
	var Et = n(Y, 2),
		z = t(Et),
		re = t(z, !0);
	e(z);
	var S = n(z, 2);
	S.__click = Zt;
	var ae = t(S, !0);
	e(S);
	var N = n(S, 2);
	N.__click = C;
	var se = t(N);
	We(se, { class: "size-4" }), e(N), e(Et), e(Q), e(P);
	var q = n(P, 2),
		G = t(q),
		H = t(G),
		oe = t(H, !0);
	e(H);
	var jt = n(H, 2),
		ne = t(jt, !0);
	e(jt), e(G);
	var J = n(G, 2),
		X = t(J),
		de = t(X, !0);
	e(X);
	var At = n(X, 2),
		le = t(At, !0);
	e(At), e(J);
	var Z = n(J, 2),
		tt = t(Z),
		ie = t(tt, !0);
	e(tt);
	var Mt = n(tt, 2),
		ce = t(Mt, !0);
	e(Mt), e(Z);
	var Ut = n(Z, 2),
		et = t(Ut),
		ue = t(et, !0);
	e(et);
	var zt = n(et, 2),
		ve = t(zt, !0);
	e(zt), e(Ut), e(q);
	var Nt = n(q, 2),
		Ot = t(Nt),
		rt = t(Ot),
		Bt = t(rt),
		at = t(Bt),
		st = t(at);
	st.__click = [lr, w];
	var _e = t(st);
	e(st), e(at);
	var ot = n(at, 2),
		nt = t(ot);
	nt.__click = [ir, w];
	var be = t(nt);
	e(nt), e(ot);
	var dt = n(ot),
		lt = t(dt);
	lt.__click = [cr, w];
	var me = t(lt);
	e(lt), e(dt);
	var it = n(dt),
		ct = t(it);
	ct.__click = [ur, w];
	var pe = t(ct);
	e(ct), e(it);
	var ut = n(it),
		vt = t(ut);
	vt.__click = [vr, w];
	var fe = t(vt);
	e(vt), e(ut);
	var Ct = n(ut),
		_t = t(Ct);
	_t.__click = [_r, w];
	var xe = t(_t);
	e(_t), e(Ct), e(Bt), e(rt);
	var Ft = n(rt),
		ge = t(Ft);
	{
		var he = (a) => {
				var l = br(),
					i = t(l),
					c = t(i),
					s = n(t(c), 2),
					o = t(s, !0);
				e(s), e(c), e(i), e(l), T((m) => d(o, m), [() => Ye()]), h(a, l);
			},
			ye = (a) => {
				var l = wt(),
					i = kt(l);
				{
					var c = (o) => {
							var m = mr(),
								R = t(m),
								bt = t(R, !0);
							e(R), e(m), T(() => d(bt, r(j))), h(o, m);
						},
						s = (o) => {
							var m = wt(),
								R = kt(m);
							{
								var bt = (I) => {
										var D = pr(),
											O = t(D),
											$ = t(O, !0);
										e(O), e(D), T((_) => d($, _), [() => qe()]), h(I, D);
									},
									we = (I) => {
										var D = wt(),
											O = kt(D);
										Be(
											O,
											17,
											() => St(r(y)),
											($) => $.user.id,
											($, _) => {
												var mt = fr(),
													pt = t(mt),
													ft = t(pt),
													Pt = t(ft),
													Vt = t(Pt);
												Qe(Vt, {
													class: "size-8 border sm:size-10",
													get userId() {
														return r(_).user.id;
													},
													get pictureUrl() {
														return r(_).user.picture;
													},
												});
												var ke = n(Vt);
												e(Pt), e(ft), e(pt);
												var xt = n(pt),
													Re = t(xt, !0);
												e(xt);
												var B = n(xt);
												let Kt;
												var Ie = t(B, !0);
												e(B);
												var gt = n(B),
													De = t(gt, !0);
												e(gt);
												var ht = n(gt),
													Se = t(ht, !0);
												e(ht);
												var yt = n(ht),
													$e = t(yt, !0);
												e(yt);
												var Qt = n(yt),
													Le = t(Qt, !0);
												e(Qt),
													e(mt),
													T(
														(Te, Ee) => {
															Fe(
																ft,
																"href",
																`/admin/users?id=${r(_).user.id ?? ""}`
															),
																d(
																	ke,
																	` ${r(_).user.name ?? ""} #${
																		r(_).user.id ?? ""
																	}`
																),
																d(Re, r(_).user.role),
																(Kt = Pe(B, 1, "text-error", null, Kt, Te)),
																d(Ie, Ee),
																d(De, r(_).ignored),
																d(Se, r(_).timeout),
																d($e, r(_).ban),
																d(Le, r(_).total);
														},
														[
															() => ({
																"text-error":
																	r(_).suspensionRate > 0.7 && r(_).total > 50,
															}),
															() => Ht(r(_).suspensionRate, 1),
														]
													),
													h($, mt);
											}
										),
											h(I, D);
									};
								Rt(
									R,
									(I) => {
										r(y).length === 0 ? I(bt) : I(we, !1);
									},
									!0
								);
							}
							h(o, m);
						};
					Rt(
						i,
						(o) => {
							r(j) ? o(c) : o(s, !1);
						},
						!0
					);
				}
				h(a, l);
			};
		Rt(ge, (a) => {
			r(x) ? a(he) : a(ye, !1);
		});
	}
	e(Ft),
		e(Ot),
		e(Nt),
		e(F),
		T(
			(a, l, i, c, s, o, m, R) => {
				d(te, `Leaderboard (${a ?? ""})`),
					d(ee, l),
					(z.disabled = r(x)),
					d(re, i),
					(S.disabled = r(x) || r(y).length === 0),
					d(ae, c),
					(N.disabled = r(x)),
					d(oe, s),
					d(ne, r(k).total),
					d(de, o),
					d(le, r(k).ban),
					d(ie, m),
					d(ce, r(k).ignored),
					d(ue, R),
					d(ve, r(k).timeout),
					d(_e, `Mod ${r(f) === "mod" ? (r(p) === "asc" ? "▲" : "▼") : ""}`),
					d(
						be,
						`Suspension rate ${
							r(f) === "suspensionRate" ? (r(p) === "asc" ? "▲" : "▼") : ""
						}`
					),
					d(
						me,
						`Ignored ${r(f) === "ignored" ? (r(p) === "asc" ? "▲" : "▼") : ""}`
					),
					d(
						pe,
						`Timeout ${r(f) === "timeout" ? (r(p) === "asc" ? "▲" : "▼") : ""}`
					),
					d(fe, `Ban ${r(f) === "ban" ? (r(p) === "asc" ? "▲" : "▼") : ""}`),
					d(
						xe,
						`Total ${r(f) === "total" ? (r(p) === "asc" ? "▲" : "▼") : ""}`
					);
			},
			[
				() => dr(),
				() => sr(),
				() => Ge(),
				() => tr(),
				() => He(),
				() => Je(),
				() => Xe(),
				() => Ze(),
			]
		),
		ze("submit", Q, Jt),
		Yt(
			Lt,
			() => r(A),
			(a) => b(A, a)
		),
		Yt(
			Tt,
			() => r(M),
			(a) => b(M, a)
		),
		h(v, F),
		Ne();
}
Ae(["click"]);
export { Or as component };

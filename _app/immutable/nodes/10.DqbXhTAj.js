import "../chunks/Ch2Ub8FX.js";
import { o as Me } from "../chunks/DoL3ojdE.js";
import {
	at as Ee,
	p as je,
	au as x,
	av as T,
	y as Ae,
	g as a,
	aw as _,
	f as M,
	s as o,
	d as t,
	t as $,
	ax as Ue,
	b as g,
	c as ze,
	$ as Oe,
	r as e,
	ay as wt,
	a as kt,
} from "../chunks/CMvZtFtm.js";
import { s as d } from "../chunks/DVA6u9-7.js";
import { i as It } from "../chunks/BF50aS-j.js";
import { e as Be } from "../chunks/CXkjfmFU.js";
import { h as Ce } from "../chunks/P77cUGnY.js";
import { r as Yt, s as Ne, a as Pe } from "../chunks/C5yqZvKC.js";
import { b as qt } from "../chunks/Dpga8uG-.js";
import { g as Fe } from "../chunks/CyB--sFG.js";
import { a as Ve } from "../chunks/BRM3t761.js";
import { P as Ke } from "../chunks/D3yaN7Zl.js";
import { R as We } from "../chunks/m3o6lEf1.js";
import { g as Ye } from "../chunks/CV9xcpLq.js";
import { l as qe } from "../chunks/BHI5vujT.js";
import { n as Ge } from "../chunks/Blc0Ir5M.js";
import {
	a as He,
	m as Je,
	b as Qe,
	c as Xe,
	d as Ze,
} from "../chunks/g9MKNE1A.js";
import { e as ta } from "../chunks/LGRbXsL1.js";
import { e as ea } from "../chunks/CmhsLcKe.js";
import { r as aa } from "../chunks/DouSnzU9.js";
(function () {
	try {
		var u =
			typeof window < "u"
				? window
				: typeof global < "u"
				? global
				: typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
				? self
				: {};
		u.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
	} catch {}
})();
try {
	(function () {
		var u =
				typeof window < "u"
					? window
					: typeof global < "u"
					? global
					: typeof globalThis < "u"
					? globalThis
					: typeof self < "u"
					? self
					: {},
			v = new u.Error().stack;
		v &&
			((u._sentryDebugIds = u._sentryDebugIds || {}),
			(u._sentryDebugIds[v] = "88b4314f-84d1-4dfd-bc7e-6d4107a18a40"),
			(u._sentryDebugIdIdentifier =
				"sentry-dbid-88b4314f-84d1-4dfd-bc7e-6d4107a18a40"));
	})();
} catch {}
const ra = () => "Mod metrics",
	sa = () => "Métricas dos mods",
	oa = (u = {}, v = {}) => ((v.locale ?? Ye()) === "en" ? ra() : sa());
var na = (u, v) => v("mod"),
	da = (u, v) => v("suspensionRate"),
	ia = (u, v) => v("ignored"),
	la = (u, v) => v("timeout"),
	ca = (u, v) => v("ban"),
	va = (u, v) => v("total"),
	ua = M(
		'<tr><td colspan="9"><div class="text-base-content/80 flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div></td></tr>'
	),
	ba = M('<tr><td colspan="9" class="text-error"> </td></tr>'),
	_a = M('<tr><td colspan="9" class="text-base-content/70"> </td></tr>'),
	ma = M(
		'<tr class="hover"><td><a class="link hover:text-primary"><div class="flex items-center gap-2"><!> </div></a></td><td> </td><td> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td></tr>'
	),
	fa = M(
		'<section class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div class="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><h2 class="text-xl font-semibold">Leaderboard (Mods)</h2> <p class="text-base-content/80 mt-1"> </p></div> <form class="grid grid-cols-1 gap-2 sm:auto-cols-max sm:grid-flow-col sm:items-end"><label class="form-control"><span class="label-text text-sm">Início</span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <label class="form-control"><span class="label-text text-sm">Fim</span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <div class="flex gap-2"><button type="submit" class="btn btn-primary btn-sm"> </button> <button type="button" class="btn btn-outline btn-sm"> </button> <button type="button" class="btn btn-circle btn-sm" title="Atualizar"><!></button></div></form></div> <div class="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div></div> <div class="overflow-x-auto"><table class="table"><thead><tr><th><button class="btn btn-ghost btn-xs"> </button></th><th> </th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th></tr></thead><tbody><!></tbody></table></div></section>'
	);
function Oa(u, v) {
	je(v, !0);
	let h = x(!1),
		E = x(null),
		y = x(T([]));
	T({});
	function Rt(r) {
		return r.toISOString().slice(0, 16);
	}
	const Dt = new Date(),
		Gt = new Date(Dt.getTime() - 10080 * 60 * 1e3);
	let j = x(T(Rt(Gt))),
		A = x(T(Rt(Dt)));
	function U(r) {
		const i = new Date(r);
		return isNaN(i.getTime()) ? null : i.toISOString();
	}
	let p = x("total"),
		f = x("desc");
	function w(r) {
		a(p) === r
			? _(f, a(f) === "asc" ? "desc" : "asc", !0)
			: (_(p, r, !0), _(f, r === "mod" ? "asc" : "desc", !0));
	}
	function St(r) {
		const i = [...r];
		return (
			i.sort((l, c) => {
				let s, n;
				switch (a(p)) {
					case "mod":
						return (
							(s = l.user.id.toString()),
							(n = c.user.id.toString()),
							a(f) === "asc"
								? s < n
									? -1
									: s > n
									? 1
									: 0
								: s > n
								? -1
								: s < n
								? 1
								: 0
						);
					case "total":
						(s = l.total), (n = c.total);
						break;
					case "ban":
						(s = l.ban), (n = c.ban);
						break;
					case "ignored":
						(s = l.ignored), (n = c.ignored);
						break;
					case "timeout":
						(s = l.timeout), (n = c.timeout);
						break;
					case "suspensionRate":
						(s = l.suspensionRate), (n = c.suspensionRate);
						break;
					default:
						(s = 0), (n = 0);
				}
				return a(f) === "asc" ? s - n : n - s;
			}),
			i
		);
	}
	function Ht(r, i = 1) {
		return `${(r * 100).toFixed(i)}%`;
	}
	async function N() {
		try {
			_(h, !0), _(E, null);
			const r = U(a(j)),
				i = U(a(A));
			if (!r || !i) throw new Error("Datas inválidas");
			const l = await Ve.getClosedTicketsByMod(r, i);
			_(y, l ?? [], !0);
		} catch (r) {
			r.status === 403 || r.status === 401
				? Fe("/404")
				: _(E, (r == null ? void 0 : r.message) ?? ea(), !0),
				_(y, [], !0);
		} finally {
			_(h, !1);
		}
	}
	Me(N);
	function Jt(r) {
		r.preventDefault(), N();
	}
	let k = x(T({ total: 0, ban: 0, ignored: 0, timeout: 0 }));
	Ae(() => {
		const r = a(y);
		if (!r || r.length === 0) {
			_(k, { total: 0, ban: 0, ignored: 0, timeout: 0 }, !0);
			return;
		}
		const i = r.length,
			l = r.reduce(
				(s, n) => (
					(s.total += n.total),
					(s.ban += n.ban),
					(s.ignored += n.ignored),
					(s.timeout += n.timeout),
					s
				),
				{ total: 0, ban: 0, ignored: 0, timeout: 0 }
			),
			c = (s) => Math.round(s * 100) / 100;
		_(
			k,
			{
				total: c(l.total / i),
				ban: c(l.ban / i),
				ignored: c(l.ignored / i),
				timeout: c(l.timeout / i),
			},
			!0
		);
	});
	function Qt(r, i) {
		const l = [
				"assigned_mod_id",
				"name",
				"alliance_id",
				"role",
				"total",
				"ban",
				"ignored",
				"timeout",
			].join(","),
			c = r.map((s) =>
				[
					s.user.id,
					s.user.name,
					s.user.allianceId,
					s.user.role,
					s.total,
					s.ban,
					s.ignored,
					s.timeout,
				].join(",")
			);
		return [l, ...c].join(`
`);
	}
	function Xt() {
		const r = St(a(y)),
			i = Qt(r),
			l = new Blob([i], { type: "text/csv;charset=utf-8;" }),
			c = URL.createObjectURL(l),
			s = document.createElement("a"),
			n = U(a(j)) ?? "start",
			m = U(a(A)) ?? "end";
		(s.href = c),
			(s.download = `mods_leaderboard_${n}_${m}.csv`),
			s.click(),
			URL.revokeObjectURL(c);
	}
	var P = fa();
	Ce((r) => {
		Oe.title = "Wplace - Admin - Mods - Leaderboard";
	});
	var F = t(P),
		V = t(F),
		Lt = o(t(V), 2),
		Zt = t(Lt, !0);
	e(Lt), e(V);
	var K = o(V, 2),
		W = t(K),
		Tt = o(t(W), 2);
	Yt(Tt), e(W);
	var Y = o(W, 2),
		$t = o(t(Y), 2);
	Yt($t), e(Y);
	var Mt = o(Y, 2),
		z = t(Mt),
		te = t(z, !0);
	e(z);
	var S = o(z, 2);
	S.__click = Xt;
	var ee = t(S, !0);
	e(S);
	var O = o(S, 2);
	O.__click = N;
	var ae = t(O);
	We(ae, { class: "size-4" }), e(O), e(Mt), e(K), e(F);
	var q = o(F, 2),
		G = t(q),
		H = t(G),
		re = t(H, !0);
	e(H);
	var Et = o(H, 2),
		se = t(Et, !0);
	e(Et), e(G);
	var J = o(G, 2),
		Q = t(J),
		oe = t(Q, !0);
	e(Q);
	var jt = o(Q, 2),
		ne = t(jt, !0);
	e(jt), e(J);
	var X = o(J, 2),
		Z = t(X),
		de = t(Z, !0);
	e(Z);
	var At = o(Z, 2),
		ie = t(At, !0);
	e(At), e(X);
	var Ut = o(X, 2),
		tt = t(Ut),
		le = t(tt, !0);
	e(tt);
	var zt = o(tt, 2),
		ce = t(zt, !0);
	e(zt), e(Ut), e(q);
	var Ot = o(q, 2),
		Bt = t(Ot),
		et = t(Bt),
		Ct = t(et),
		at = t(Ct),
		rt = t(at);
	rt.__click = [na, w];
	var ve = t(rt);
	e(rt), e(at);
	var st = o(at),
		ue = t(st, !0);
	e(st);
	var ot = o(st),
		nt = t(ot);
	nt.__click = [da, w];
	var be = t(nt);
	e(nt), e(ot);
	var dt = o(ot),
		it = t(dt);
	it.__click = [ia, w];
	var _e = t(it);
	e(it), e(dt);
	var lt = o(dt),
		ct = t(lt);
	ct.__click = [la, w];
	var me = t(ct);
	e(ct), e(lt);
	var vt = o(lt),
		ut = t(vt);
	ut.__click = [ca, w];
	var fe = t(ut);
	e(ut), e(vt);
	var Nt = o(vt),
		bt = t(Nt);
	bt.__click = [va, w];
	var pe = t(bt);
	e(bt), e(Nt), e(Ct), e(et);
	var Pt = o(et),
		xe = t(Pt);
	{
		var ge = (r) => {
				var i = ua(),
					l = t(i),
					c = t(l),
					s = o(t(c), 2),
					n = t(s, !0);
				e(s), e(c), e(l), e(i), $((m) => d(n, m), [() => qe()]), g(r, i);
			},
			he = (r) => {
				var i = wt(),
					l = kt(i);
				{
					var c = (n) => {
							var m = ba(),
								I = t(m),
								_t = t(I, !0);
							e(I), e(m), $(() => d(_t, a(E))), g(n, m);
						},
						s = (n) => {
							var m = wt(),
								I = kt(m);
							{
								var _t = (R) => {
										var D = _a(),
											B = t(D),
											L = t(B, !0);
										e(B), e(D), $((b) => d(L, b), [() => Ge()]), g(R, D);
									},
									ye = (R) => {
										var D = wt(),
											B = kt(D);
										Be(
											B,
											17,
											() => St(a(y)),
											(L) => L.user.id,
											(L, b) => {
												var mt = ma(),
													ft = t(mt),
													pt = t(ft),
													Ft = t(pt),
													Vt = t(Ft);
												Ke(Vt, {
													class: "size-8 border sm:size-10",
													get userId() {
														return a(b).user.id;
													},
													get pictureUrl() {
														return a(b).user.picture;
													},
												});
												var we = o(Vt);
												e(Ft), e(pt), e(ft);
												var xt = o(ft),
													ke = t(xt, !0);
												e(xt);
												var C = o(xt);
												let Kt;
												var Ie = t(C, !0);
												e(C);
												var gt = o(C),
													Re = t(gt, !0);
												e(gt);
												var ht = o(gt),
													De = t(ht, !0);
												e(ht);
												var yt = o(ht),
													Se = t(yt, !0);
												e(yt);
												var Wt = o(yt),
													Le = t(Wt, !0);
												e(Wt),
													e(mt),
													$(
														(Te, $e) => {
															Ne(
																pt,
																"href",
																`/admin/users?id=${a(b).user.id ?? ""}`
															),
																d(
																	we,
																	` ${a(b).user.name ?? ""} #${
																		a(b).user.id ?? ""
																	}`
																),
																d(ke, a(b).user.role),
																(Kt = Pe(C, 1, "text-error", null, Kt, Te)),
																d(Ie, $e),
																d(Re, a(b).ignored),
																d(De, a(b).timeout),
																d(Se, a(b).ban),
																d(Le, a(b).total);
														},
														[
															() => ({
																"text-error":
																	a(b).suspensionRate > 0.7 && a(b).total > 50,
															}),
															() => Ht(a(b).suspensionRate, 1),
														]
													),
													g(L, mt);
											}
										),
											g(R, D);
									};
								It(
									I,
									(R) => {
										a(y).length === 0 ? R(_t) : R(ye, !1);
									},
									!0
								);
							}
							g(n, m);
						};
					It(
						l,
						(n) => {
							a(E) ? n(c) : n(s, !1);
						},
						!0
					);
				}
				g(r, i);
			};
		It(xe, (r) => {
			a(h) ? r(ge) : r(he, !1);
		});
	}
	e(Pt),
		e(Bt),
		e(Ot),
		e(P),
		$(
			(r, i, l, c, s, n, m, I) => {
				d(Zt, r),
					(z.disabled = a(h)),
					d(te, i),
					(S.disabled = a(h) || a(y).length === 0),
					d(ee, l),
					(O.disabled = a(h)),
					d(re, c),
					d(se, a(k).total),
					d(oe, s),
					d(ne, a(k).ban),
					d(de, n),
					d(ie, a(k).ignored),
					d(le, m),
					d(ce, a(k).timeout),
					d(ve, `Mod ${a(p) === "mod" ? (a(f) === "asc" ? "▲" : "▼") : ""}`),
					d(ue, I),
					d(
						be,
						`Suspension rate ${
							a(p) === "suspensionRate" ? (a(f) === "asc" ? "▲" : "▼") : ""
						}`
					),
					d(
						_e,
						`Ignored ${a(p) === "ignored" ? (a(f) === "asc" ? "▲" : "▼") : ""}`
					),
					d(
						me,
						`Timeout ${a(p) === "timeout" ? (a(f) === "asc" ? "▲" : "▼") : ""}`
					),
					d(fe, `Ban ${a(p) === "ban" ? (a(f) === "asc" ? "▲" : "▼") : ""}`),
					d(
						pe,
						`Total ${a(p) === "total" ? (a(f) === "asc" ? "▲" : "▼") : ""}`
					);
			},
			[
				() => oa(),
				() => He(),
				() => ta(),
				() => Je(),
				() => Qe(),
				() => Xe(),
				() => Ze(),
				() => aa(),
			]
		),
		Ue("submit", K, Jt),
		qt(
			Tt,
			() => a(j),
			(r) => _(j, r)
		),
		qt(
			$t,
			() => a(A),
			(r) => _(A, r)
		),
		g(u, P),
		ze();
}
Ee(["click"]);
export { Oa as component };

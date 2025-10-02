import "../chunks/Ch2Ub8FX.js";
import { o as as } from "../chunks/DoL3ojdE.js";
import {
	at as ts,
	p as ss,
	au as B,
	av as ta,
	f as w,
	a as K,
	s,
	d as t,
	t as U,
	ax as rs,
	b as g,
	c as os,
	g as e,
	aw as b,
	$ as ns,
	r as a,
	u as ae,
	az as is,
	ay as ia,
	n as Ka,
	b4 as sa,
} from "../chunks/CMvZtFtm.js";
import { s as i } from "../chunks/DVA6u9-7.js";
import { i as $ } from "../chunks/BF50aS-j.js";
import { a as ls, k as cs } from "../chunks/BBgyHb-Z.js";
import { e as ra, i as ds } from "../chunks/CXkjfmFU.js";
import { h as vs } from "../chunks/P77cUGnY.js";
import { s as Y, a as F, c as _s, d as ps } from "../chunks/C5yqZvKC.js";
import { b as us } from "../chunks/0wx1llIh.js";
import { g as fs } from "../chunks/CyB--sFG.js";
import { p as oa } from "../chunks/B6ZK_HZO.js";
import {
	a as pe,
	t as G,
	u as ue,
	s as q,
	b as bs,
} from "../chunks/BRM3t761.js";
import { P as na } from "../chunks/D3yaN7Zl.js";
import { A as ms, c as gs } from "../chunks/Dt3xBOvm.js";
import { T as Qa, C as Va, G as Xa, c as xs } from "../chunks/DLfdYhzo.js";
import { L as Za, d as hs, p as ys } from "../chunks/BKioTOWR.js";
import {
	r as et,
	a as at,
	n as ks,
	M as ws,
	b as $s,
	c as Ts,
	t as Us,
	d as Is,
	l as zs,
	e as As,
	f as Rs,
	g as Ls,
	h as Cs,
	m as Bs,
	i as Ds,
	j as Ms,
	u as Ss,
	k as js,
} from "../chunks/DTFgqBF9.js";
import { R as tt } from "../chunks/m3o6lEf1.js";
import { g as Te } from "../chunks/CV9xcpLq.js";
import { r as Ps } from "../chunks/C3E1P42D.js";
import { t as st, f as Ns } from "../chunks/DBSOMMI_.js";
import { o as Es } from "../chunks/BpoSU4rb.js";
import { g as $e, a as Os } from "../chunks/lE0oaQc5.js";
(function () {
	try {
		var p =
			typeof window < "u"
				? window
				: typeof global < "u"
				? global
				: typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
				? self
				: {};
		p.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
	} catch {}
})();
try {
	(function () {
		var p =
				typeof window < "u"
					? window
					: typeof global < "u"
					? global
					: typeof globalThis < "u"
					? globalThis
					: typeof self < "u"
					? self
					: {},
			c = new p.Error().stack;
		c &&
			((p._sentryDebugIds = p._sentryDebugIds || {}),
			(p._sentryDebugIds[c] = "84791c29-68a7-479d-acd2-06e603b3dfe6"),
			(p._sentryDebugIdIdentifier =
				"sentry-dbid-84791c29-68a7-479d-acd2-06e603b3dfe6"));
	})();
} catch {}
const Gs = () => "Ignore",
	Ws = () => "Ignorar",
	rt = (p = {}, c = {}) => ((c.locale ?? Te()) === "en" ? Gs() : Ws()),
	Ys = () => "Ignore all",
	qs = () => "Ignorar todos",
	Fs = (p = {}, c = {}) => ((c.locale ?? Te()) === "en" ? Ys() : qs()),
	it = () => "Ban",
	Hs = it,
	ot = (p = {}, c = {}) => ((c.locale ?? Te()) === "en" ? it() : Hs()),
	Js = () => "Closed tickets",
	Ks = () => "Tickets fechados",
	Qs = (p = {}, c = {}) => ((c.locale ?? Te()) === "en" ? Js() : Ks()),
	nt = (p, c = is) => {
		var d = Vs();
		let u;
		var _ = t(d);
		{
			var Q = (m) => {
					var T = sa("MOD");
					g(m, T);
				},
				D = (m) => {
					var T = ia(),
						Ue = K(T);
					{
						var fe = (R) => {
								var V = sa("GM");
								g(R, V);
							},
							be = (R) => {
								var V = sa("ADMIN");
								g(R, V);
							};
						$(
							Ue,
							(R) => {
								c() === "global_moderator" ? R(fe) : R(be, !1);
							},
							!0
						);
					}
					g(m, T);
				};
			$(_, (m) => {
				c() === "moderator" ? m(Q) : m(D, !1);
			});
		}
		a(d),
			U(
				(m) => (u = F(d, 1, "badge badge-sm ml-0.5 font-semibold", null, u, m)),
				[
					() => ({
						"badge-secondary": c() === "moderator" || c() == "global_moderator",
						"badge-warning": c() === "admin",
					}),
				]
			),
			g(p, d);
	};
var Vs = w("<span><!></span>"),
	Xs = (p, c) => {
		c();
	},
	Zs = (p, c, d) => {
		b(c, e(d), !0);
	},
	er = w('<div class="absolute bottom-5 right-5"><!></div>'),
	ar = w(
		'<button><!> <div class="flex flex-col text-start"><span><span> </span> <span> </span></span> <span class="text-base-content/80 text-sm font-medium"> </span></div> <!></button>'
	),
	tr = async (p, c, d, u) => {
		await c(), b(d, e(u)[0], !0);
	},
	sr = w(
		'<p class="text-base-content/80"> </p> <button class="btn btn-primary btn-sm"><!> </button>',
		1
	),
	rr = w('<span class="loading loading-spinner loading-md"></span>'),
	or = (p, c) => {
		navigator.clipboard.writeText(e(c).reportedUser.id.toString()),
			G.success(Ss());
	},
	nr = (p, c) => {
		navigator.clipboard.writeText(e(c).toString()), G.success(js());
	},
	ir = w("<button> <!></button>"),
	lr = w(
		'<span class="tooltip tooltip-bottom badge bg-green-600 text-green-100" data-tip="User has spent money on Wplace">💰 PAID</span>'
	),
	cr = w(
		'<span> <span class="font-semibold"> </span></span> <span> <span class="font-semibold"> </span></span>',
		1
	),
	dr = (p, c, d) => {
		c(e(d).id);
	},
	vr = w('<button class="btn ml-auto"> </button>'),
	_r = (p, c, d, u) => {
		c(e(d).id, e(u).id);
	},
	pr = (p, c, d, u) => {
		c(e(d).id, e(u));
	},
	ur = (p, c, d, u) => {
		c(e(d).id, e(u));
	},
	fr = w('<button class="btn btn-error"><!> </button>'),
	br = w("<option> </option>"),
	mr = w(
		'<div><h4 class="font-semibold"> </h4> <p class="text-base-content/80 text-sm"> </p></div>'
	),
	gr = (p, c, d, u, _, Q, D, m) => {
		b(c, e(d)), b(u, e(_), !0), b(Q, e(D), !0), e(m).showModal();
	},
	xr = w(
		'<div class="flex flex-col gap-3"><h4 class="text-primary flex items-center justify-between text-xl font-semibold"> <div class="flex gap-2"><button class="btn"> </button> <button class="btn btn-error"><!> </button> <!></div></h4> <div class="flex gap-3"><!> <div><span class="text-lg"> <span><span> </span> <span> </span></span></span> <div class="flex flex-col text-sm"><div class="mt-1 flex items-center gap-2"><span class="text-base"> </span> <select></select></div> <span class="mt-1"> <span class="font-semibold"> </span></span> <span> <a target="_blank"><!> <span class="link">Link</span></a></span> <span> <a target="_blank"><!> <span class="link">Link</span></a></span></div></div></div> <!> <div class="flex flex-col items-center justify-center gap-4"><button class="relative h-max w-max" title="Report location"><img class="border-base-content/20 mx-auto max-h-[70vh] w-max border" alt="Report location"/> <!></button></div></div>'
	),
	hr = w(
		'<header class="bg-base-100 sticky top-0 z-10 flex items-center justify-between px-6 pb-4 pt-6"><h3 class="text-xl font-semibold"> </h3></header> <div class="px-6 pb-8"><section class="flex gap-3"><!> <div><span class="text-lg"><span> </span>: <span><span> </span> <span> </span> <button><!></button> <!> <!></span> <!></span> <div class="flex flex-col text-sm"><span> <span class="font-semibold"> </span></span> <!> <span> <span class="font-semibold"> </span></span> <span> <span> </span></span></div></div> <!></section> <span class="divider"></span> <section class="mt-6 flex flex-col gap-4"></section></div>',
		1
	),
	yr = async (p, c, d, u, _) => {
		await c(e(d).id, e(u).id), e(_).close();
	},
	kr = async (p, c, d, u, _) => {
		await c(e(d).id, e(u)), e(_).close();
	},
	wr = async (p, c, d, u, _) => {
		await c(e(d).id, e(u)), e(_).close();
	},
	$r = w('<button class="btn btn-error"><!> </button>'),
	Tr = w(
		'<iframe class="border-base-content/20 w-full grow border" title="Report location"></iframe>'
	),
	Ur = w(
		'<div class="bg-base-200 grid h-full grid-cols-[350px_1fr] gap-4 p-4"><section class="flex flex-col gap-3 overflow-auto px-1 pb-1"><div class="mb-4 flex items-center justify-between"><div class="flex items-center gap-1"><a class="btn btn-ghost btn-circle"><!></a> <span class="relative flex flex-col items-start"><h2 class="text-xl font-semibold"> </h2> <span class="text-base-content/80 -bottom-4.5 absolute text-sm"> </span> <span class="tooltip tooltip-bottom text-base-content/80 text-sm before:translate-x-1/4"><div class="tooltip-content rounded-xl text-left"> <br/> <br/> <br/> </div> </span></span></div> <button class="btn btn-circle btn-sm"><!></button></div> <!> <div class="mt-10 flex flex-col items-center justify-center gap-2"><!></div></section> <section class="rounded-box bg-base-100 overflow-auto shadow"><!></section></div> <dialog class="modal"><div class="modal-box h-11/12 max-w-11/12 w-11/12 pb-4"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <div class="flex h-full flex-col gap-4"><div class="flex items-center justify-between"><h4 class="text-primary text-xl font-semibold"> </h4> <div class="mr-4 flex gap-2"><button class="btn"> </button> <button class="btn btn-error"><!> </button> <!></div></div> <!></div></div> <form method="dialog" class="modal-backdrop"><button> </button></form></dialog>',
		1
	);
function Vr(p, c) {
	ss(c, !0);
	let d = B(!0),
		u = B(!1),
		_ = B(ta([])),
		Q = B(void 0),
		D = B(
			ta({
				closedTotal: 0,
				bans: 0,
				ignored: 0,
				timeouts: 0,
				rclosedTotal: 0,
				rignored: 0,
				rtimeouts: 0,
				rbans: 0,
			})
		),
		m = B(void 0),
		T = B(ta({}));
	const Ue = [
		{ value: "griefing", label: q.griefing },
		{ value: "inappropriate-content", label: q["inappropriate-content"] },
		{ value: "hate-speech", label: q["hate-speech"] },
		{ value: "doxxing", label: q.doxxing },
		{ value: "multi-accounting", label: q["multi-accounting"] },
		{ value: "bot", label: q.bot },
		{ value: "other", label: q.other },
	];
	as(() => {
		fe();
	});
	async function fe() {
		await be(), e(_).length <= 1 && (await R()), e(m) || b(m, e(_)[0], !0);
	}
	async function be() {
		try {
			b(d, !0);
			const n = await pe.getModeratorTickets();
			b(_, n.tickets, !0), V();
			try {
				b(D, await pe.countMyTicketsClosedToday(), !0);
			} catch (r) {
				return (
					G.error(r.message),
					{
						closedTotal: 0,
						ignored: 0,
						timeouts: 0,
						bans: 0,
						rclosedTotal: 0,
						rignored: 0,
						rtimeouts: 0,
						rbans: 0,
					}
				);
			}
			b(T, {}, !0);
			for (const r of e(_))
				for (const v of r.reports) e(T)[v.id] = v.assignedReason ?? v.reason;
		} catch (n) {
			n.status === 403 || n.status === 401 ? fs("/404") : G.error(n.message);
		} finally {
			b(d, !1);
		}
	}
	async function R() {
		try {
			b(d, !0);
			const { newTicketsIds: n } = await pe.assignNewTickets();
			n.length > 0 && (await be()), await V();
		} catch (n) {
			G.error(n.message);
		} finally {
			b(d, !1);
		}
	}
	async function V() {
		try {
			b(Q, await pe.getNonPaidUserOpenTicketsCount(), !0);
		} catch (n) {
			G.error(n.message);
		}
	}
	async function me(n, r, v, x) {
		try {
			b(u, !0),
				await pe.setTicketStatus(n, r, v, x),
				r !== "open" &&
					!(r === "ignore" && v) &&
					(b(
						_,
						e(_).filter((o) => o.id !== n),
						!0
					),
					e(_).length <= 1 && (await R()),
					b(m, e(_)[0], !0));
		} catch (o) {
			G.error(o.message);
		} finally {
			b(u, !1);
		}
	}
	function lt(n) {
		return me(n, "ignore", 0, "other")
			.then(() => {
				b(
					_,
					e(_).filter((r) => r.id !== n),
					!0
				),
					b(m, e(_)[0], !0),
					e(_).length <= 1 && R();
			})
			.catch((r) => {
				G.error(r.message);
			});
	}
	function la(n, r) {
		return me(n, "ignore", r, e(T)[r] ?? "other")
			.then(() => {
				const v = e(_).findIndex((o) => o.id === n);
				if (v === -1) return;
				const x = e(_)[v];
				if (
					((x.reports = x.reports.filter((o) => o.id !== r)),
					delete e(T)[r],
					x.reports.length === 0)
				) {
					b(
						_,
						e(_).filter((o) => o.id !== n),
						!0
					),
						b(m, e(_)[0], !0),
						e(_).length <= 1 && R();
					return;
				}
				b(m, { ...x }, !0);
			})
			.catch((v) => {
				G.error(v.message);
			});
	}
	function ca(n, r) {
		const v = e(T)[r.id] ?? r.assignedReason ?? r.reason;
		return me(n, "timeout", r.id, v);
	}
	function da(n, r) {
		const v = e(T)[r.id] ?? r.assignedReason ?? r.reason;
		return me(n, "ban", r.id, v);
	}
	let X = B(null),
		ge = B(""),
		te = B(void 0),
		Z = B(void 0);
	var va = Ur();
	vs((n) => {
		ns.title = "openplace - Moderation";
	});
	var Ie = K(va),
		ze = t(Ie),
		Ae = t(ze),
		Re = t(Ae),
		xe = t(Re),
		ct = t(xe);
	ms(ct, { class: "size-5" }), a(xe);
	var _a = s(xe, 2),
		Le = t(_a),
		dt = t(Le, !0);
	a(Le);
	var Ce = s(Le, 2),
		vt = t(Ce);
	a(Ce);
	var pa = s(Ce, 2),
		Be = t(pa),
		ua = t(Be),
		fa = s(ua, 2),
		ba = s(fa, 2),
		_t = s(ba, 2);
	a(Be);
	var pt = s(Be);
	a(pa), a(_a), a(Re);
	var he = s(Re, 2);
	he.__click = [Xs, fe];
	var ut = t(he);
	tt(ut, { class: "size-4" }), a(he), a(Ae);
	var ma = s(Ae, 2);
	ra(
		ma,
		25,
		() => e(_),
		(n) => n.id,
		(n, r) => {
			const v = ae(() => new Date(e(r).createdAt)),
				x = ae(() => {
					var S;
					return ((S = e(m)) == null ? void 0 : S.id) === e(r).id;
				});
			var o = ar();
			o.__click = [Zs, m, r];
			var L = t(o);
			na(L, {
				class: "size-13",
				get userId() {
					return e(r).reportedUser.id;
				},
				get pictureUrl() {
					return e(r).reportedUser.picture;
				},
			});
			var M = s(L, 2),
				I = t(M),
				N = t(I),
				je = t(N, !0);
			a(N);
			var oe = s(N, 2),
				ne = t(oe);
			a(oe), a(I);
			var ie = s(I, 2),
				le = t(ie, !0);
			a(ie), a(M);
			var ce = s(M, 2);
			{
				var de = (S) => {
					var j = er(),
						ve = t(j);
					nt(ve, () => e(r).reportedUser.role), a(j), g(S, j);
				};
				$(ce, (S) => {
					e(r).reportedUser.role !== "user" && S(de);
				});
			}
			a(o),
				U(
					(S, j) => {
						F(
							o,
							1,
							_s({
								"bg-base-100 ring-primary relative flex gap-2 rounded-2xl p-4 shadow":
									!0,
								"bg-primary/10 ring-2": e(x),
							})
						),
							F(I, 1, `text-lg font-semibold ${S ?? ""} flex gap-1.5`),
							i(je, e(r).reportedUser.name),
							i(ne, `#${e(r).reportedUser.id ?? ""}`),
							i(le, j);
					},
					[() => $e(e(r).reportedUser.id), () => e(v).toLocaleString()]
				),
				ls(
					o,
					() => Ns,
					() => ({ duration: 250 })
				),
				g(n, o);
		}
	);
	var ga = s(ma, 2),
		ft = t(ga);
	{
		var bt = (n) => {
				var r = sr(),
					v = K(r),
					x = t(v, !0);
				a(v);
				var o = s(v, 2);
				o.__click = [tr, R, m, _];
				var L = t(o);
				tt(L, { class: "size-5" });
				var M = s(L);
				a(o),
					U(
						(I, N) => {
							i(x, I), i(M, ` ${N ?? ""}`);
						},
						[() => ks(), () => Ps()]
					),
					g(n, r);
			},
			mt = (n) => {
				var r = ia(),
					v = K(r);
				{
					var x = (o) => {
						var L = rr();
						g(o, L);
					};
					$(
						v,
						(o) => {
							e(d) && e(_).length === 0 && o(x);
						},
						!0
					);
				}
				g(n, r);
			};
		$(ft, (n) => {
			!e(d) && e(_).length === 0 ? n(bt) : n(mt, !1);
		});
	}
	a(ga), a(ze);
	var xa = s(ze, 2),
		gt = t(xa);
	{
		var xt = (n) => {
			var r = ia(),
				v = K(r);
			cs(
				v,
				() => e(m).id,
				(x) => {
					const o = ae(() => e(m)),
						L = ae(() => {
							var f;
							return (f = Bs(e(o).reports, (l) => l.sameIpAccounts)) == null
								? void 0
								: f.sameIpAccounts;
						});
					var M = hr(),
						I = K(M),
						N = t(I),
						je = t(N);
					a(N), a(I);
					var oe = s(I, 2),
						ne = t(oe),
						ie = t(ne);
					na(ie, {
						class: "size-15",
						get userId() {
							return e(o).reportedUser.id;
						},
						get pictureUrl() {
							return e(o).reportedUser.picture;
						},
					});
					var le = s(ie, 2),
						ce = t(le),
						de = t(ce),
						S = t(de, !0);
					a(de);
					var j = s(de, 2),
						ve = t(j),
						zt = t(ve, !0);
					a(ve);
					var Pe = s(ve, 2),
						At = t(Pe);
					a(Pe);
					var _e = s(Pe, 2);
					_e.__click = [or, o];
					var Rt = t(_e);
					Va(Rt, { class: "inline size-4" }), a(_e);
					var Ta = s(_e, 2);
					{
						var Lt = (f) => {
							const l = ae(() => e(o).reportedUser.allianceId);
							var y = ir();
							y.__click = [nr, l];
							var z = t(y),
								P = s(z);
							Va(P, { class: "size-3" }),
								a(y),
								U(
									(W, E, C) => {
										F(
											y,
											1,
											`tooltip badge badge-sm ml-0.5 border-0 ${W ?? ""} ${
												E ?? ""
											}`
										),
											Y(y, "title", C),
											i(z, `${e(o).reportedUser.allianceName ?? ""} `);
									},
									[
										() => Os(e(l)),
										() => $e(e(l)),
										() => xs({ allianceId: e(l) }),
									]
								),
								g(f, y);
						};
						$(Ta, (f) => {
							e(o).reportedUser.allianceId && f(Lt);
						});
					}
					var Ct = s(Ta, 2);
					{
						var Bt = (f) => {
							var l = lr();
							g(f, l);
						};
						$(Ct, (f) => {
							e(o).reportedUser.paid && f(Bt);
						});
					}
					a(j);
					var Dt = s(j, 2);
					{
						var Mt = (f) => {
							nt(f, () => e(o).reportedUser.role);
						};
						$(Dt, (f) => {
							e(o).reportedUser.role !== "user" && f(Mt);
						});
					}
					a(ce);
					var Ua = s(ce, 2),
						Ne = t(Ua),
						Ia = t(Ne),
						za = s(Ia),
						St = t(za, !0);
					a(za), a(Ne);
					var Aa = s(Ne, 2);
					{
						var jt = (f) => {
							var l = cr(),
								y = K(l),
								z = t(y),
								P = s(z),
								W = t(P, !0);
							a(P), a(y);
							var E = s(y, 2),
								C = t(E),
								ee = s(C),
								H = t(ee, !0);
							a(ee),
								a(E),
								U(
									(ke, Ge) => {
										i(z, `${ke ?? ""}: `),
											i(W, e(o).reportedUser.timeoutCount),
											i(C, `${Ge ?? ""}: `),
											i(
												H,
												q[e(o).reportedUser.lastTimeoutReason] ??
													e(o).reportedUser.lastTimeoutReason
											);
									},
									[() => Ds(), () => Ms()]
								),
								g(f, l);
						};
						$(Aa, (f) => {
							e(o).reportedUser.lastTimeoutReason && f(jt);
						});
					}
					var Ee = s(Aa, 2),
						Ra = t(Ee),
						La = s(Ra),
						Pt = t(La, !0);
					a(La), a(Ee);
					var Ca = s(Ee, 2),
						Ba = t(Ca),
						Oe = s(Ba);
					let Da;
					var Nt = t(Oe, !0);
					a(Oe), a(Ca), a(Ua), a(le);
					var Et = s(le, 2);
					{
						var Ot = (f) => {
							var l = vr();
							l.__click = [dr, lt, o];
							var y = t(l, !0);
							a(l),
								U(
									(z) => {
										(l.disabled = e(u)), i(y, z);
									},
									[() => Fs()]
								),
								g(f, l);
						};
						$(Et, (f) => {
							var l;
							((l = ue.data) == null ? void 0 : l.role) === "admin" && f(Ot);
						});
					}
					a(ne);
					var Ma = s(ne, 4);
					ra(
						Ma,
						21,
						() => e(o).reports,
						(f) => f.id,
						(f, l) => {
							const y = ae(
								() =>
									`${oa.url.origin}/?lat=${e(l).reportedLatitude}&lng=${
										e(l).reportedLongitude
									}&select=true${e(l).zoom ? `&zoom=${e(l).zoom}` : ""}`
							);
							var z = xr(),
								P = t(z),
								W = t(P),
								E = s(W),
								C = t(E);
							C.__click = [_r, la, o, l];
							var ee = t(C, !0);
							a(C);
							var H = s(C, 2);
							H.__click = [pr, ca, o, l];
							var ke = t(H);
							Qa(ke, { class: "size-5" });
							var Ge = s(ke);
							a(H);
							var Gt = s(H, 2);
							{
								var Wt = (A) => {
									var h = fr();
									h.__click = [ur, da, o, l];
									var k = t(h);
									Xa(k, { class: "size-5" });
									var J = s(k);
									a(h),
										U(
											(O) => {
												(h.disabled = e(u)), i(J, ` ${O ?? ""}`);
											},
											[() => ot()]
										),
										g(A, h);
								};
								$(Gt, (A) => {
									var h, k;
									(((h = ue.data) == null ? void 0 : h.role) === "admin" ||
										((k = ue.data) == null ? void 0 : k.role) ===
											"global_moderator") &&
										A(Wt);
								});
							}
							a(E), a(P);
							var We = s(P, 2),
								Sa = t(We);
							na(Sa, {
								class: "size-15",
								get userId() {
									return e(l).reportedBy;
								},
								get pictureUrl() {
									return e(l).reportedByPicture;
								},
							});
							var ja = s(Sa, 2),
								Ye = t(ja),
								Pa = t(Ye),
								qe = s(Pa),
								Fe = t(qe),
								Yt = t(Fe, !0);
							a(Fe);
							var Na = s(Fe, 2),
								qt = t(Na);
							a(Na), a(qe), a(Ye);
							var Ea = s(Ye, 2),
								He = t(Ea),
								Je = t(He),
								Ft = t(Je);
							a(Je);
							var we = s(Je, 2);
							ra(
								we,
								21,
								() => Ue,
								ds,
								(A, h) => {
									var k = br(),
										J = t(k, !0);
									a(k);
									var O = {};
									U(() => {
										i(J, e(h).label),
											O !== (O = e(h).value) &&
												(k.value = (k.__value = e(h).value) ?? "");
									}),
										g(A, k);
								}
							),
								a(we),
								a(He);
							var Ke = s(He, 2),
								Oa = t(Ke),
								Ga = s(Oa),
								Ht = t(Ga, !0);
							a(Ga), a(Ke);
							var Qe = s(Ke, 2),
								Wa = t(Qe),
								Ve = s(Wa),
								Jt = t(Ve);
							Za(Jt, { class: "inline size-4" }), Ka(2), a(Ve), a(Qe);
							var Ya = s(Qe, 2),
								qa = t(Ya),
								Xe = s(qa),
								Kt = t(Xe);
							Za(Kt, { class: "inline size-4" }),
								Ka(2),
								a(Xe),
								a(Ya),
								a(Ea),
								a(ja),
								a(We);
							var Fa = s(We, 2);
							{
								var Qt = (A) => {
									var h = mr(),
										k = t(h),
										J = t(k, !0);
									a(k);
									var O = s(k, 2),
										ea = t(O, !0);
									a(O),
										a(h),
										U(
											(aa) => {
												i(J, aa), i(ea, e(l).notes);
											},
											[() => hs()]
										),
										g(A, h);
								};
								$(Fa, (A) => {
									e(l).notes && A(Qt);
								});
							}
							var Ha = s(Fa, 2),
								Ze = t(Ha);
							Ze.__click = [gr, ge, y, te, o, Z, l, X];
							var Ja = t(Ze),
								Vt = s(Ja, 2);
							ws(Vt, {
								class:
									"absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-[87%]",
							}),
								a(Ze),
								a(Ha),
								a(z),
								U(
									(A, h, k, J, O, ea, aa, Xt, Zt, es) => {
										i(W, `${A ?? ""} #${e(l).id ?? ""} `),
											(C.disabled = e(u)),
											i(ee, h),
											(H.disabled = e(u)),
											i(Ge, ` ${k ?? ""}`),
											i(Pa, `${J ?? ""}: `),
											F(qe, 1, `font-semibold ${O ?? ""}`),
											i(Yt, e(l).reportedByName),
											i(qt, `#${e(l).reportedBy ?? ""}`),
											i(Ft, `${ea ?? ""}:`),
											F(
												we,
												1,
												`select select-bordered select-sm font-semibold ${
													bs[e(T)[e(l).id]] ?? ""
												}`
											),
											i(Oa, `${aa ?? ""}: `),
											i(Ht, Xt),
											i(Wa, `${Zt ?? ""}: `),
											Y(Ve, "href", e(y)),
											i(qa, `${es ?? ""}: `),
											Y(
												Xe,
												"href",
												`${oa.url.origin ?? ""}/?lat=${
													e(l).lastPixelLatitude ?? ""
												}&lng=${e(l).lastPixelLongitude ?? ""}&select=true`
											),
											Y(Ja, "src", e(l).imageUrl);
									},
									[
										() => at(),
										() => rt(),
										() => st(),
										() => $s(),
										() => $e(e(l).reportedBy),
										() => Ts(),
										() => Us(),
										() => new Date(e(l).createdAt).toLocaleString(),
										() => Is(),
										() => zs(),
									]
								),
								ps(
									we,
									() => e(T)[e(l).id],
									(A) => (e(T)[e(l).id] = A)
								),
								g(f, z);
						}
					),
						a(Ma),
						a(oe),
						U(
							(f, l, y, z, P, W, E, C, ee) => {
								Y(N, "title", e(o).id),
									i(je, `${f ?? ""}: ${l ?? ""}`),
									i(S, y),
									F(j, 1, `text-lg font-semibold ${z ?? ""}`),
									i(zt, e(o).reportedUser.name),
									i(At, `#${e(o).reportedUser.id ?? ""}`),
									Y(_e, "title", P),
									i(Ia, `${W ?? ""}: `),
									i(St, e(o).reportedUser.reportedCount),
									i(Ra, `${E ?? ""}: `),
									i(Pt, e(o).reportedUser.pixelsPainted),
									i(Ba, `${C ?? ""}: `),
									(Da = F(Oe, 1, "font-semibold", null, Da, ee)),
									i(Nt, e(L));
							},
							[
								() => As(),
								() => e(o).id.split("-").at(-1),
								() => et(),
								() => $e(e(o).reportedUser.id),
								() => Rs({ userId: e(o).reportedUser.id }),
								() => Ls(),
								() => ys(),
								() => Cs(),
								() => ({ "text-red-600": e(L) >= 7 }),
							]
						),
						g(x, M);
				}
			),
				g(n, r);
		};
		$(gt, (n) => {
			e(m) && n(xt);
		});
	}
	a(xa), a(Ie);
	var ye = s(Ie, 2),
		De = t(ye),
		ha = s(t(De), 2),
		Me = t(ha),
		Se = t(Me),
		ht = t(Se);
	a(Se);
	var ya = s(Se, 2),
		se = t(ya);
	se.__click = [yr, la, te, Z, X];
	var yt = t(se, !0);
	a(se);
	var re = s(se, 2);
	re.__click = [kr, ca, te, Z, X];
	var ka = t(re);
	Qa(ka, { class: "size-5" });
	var kt = s(ka);
	a(re);
	var wt = s(re, 2);
	{
		var $t = (n) => {
			var r = $r();
			r.__click = [wr, da, te, Z, X];
			var v = t(r);
			Xa(v, { class: "size-5" });
			var x = s(v);
			a(r),
				U(
					(o) => {
						(r.disabled = e(u)), i(x, ` ${o ?? ""}`);
					},
					[() => ot()]
				),
				g(n, r);
		};
		$(wt, (n) => {
			var r, v;
			(((r = ue.data) == null ? void 0 : r.role) === "admin" ||
				((v = ue.data) == null ? void 0 : v.role) === "global_moderator") &&
				n($t);
		});
	}
	a(ya), a(Me);
	var Tt = s(Me, 2);
	{
		var Ut = (n) => {
			var r = Tr();
			U(() => Y(r, "src", e(ge))), g(n, r);
		};
		$(Tt, (n) => {
			e(ge) && n(Ut);
		});
	}
	a(ha), a(De);
	var wa = s(De, 2),
		$a = t(wa),
		It = t($a, !0);
	a($a),
		a(wa),
		a(ye),
		us(
			ye,
			(n) => b(X, n),
			() => e(X)
		),
		U(
			(n, r, v, x, o, L, M) => {
				var I;
				Y(xe, "href", oa.url.origin),
					i(dt, n),
					i(vt, `${r ?? ""}: ${e(Q) ?? "" ?? ""}`),
					i(ua, `Closed reports: ${e(D).rclosedTotal ?? ""}`),
					i(fa, ` Ignored: ${e(D).ignored ?? ""}`),
					i(ba, ` Timeouts: ${e(D).timeouts ?? ""}`),
					i(_t, ` Bans: ${e(D).bans ?? ""}`),
					i(pt, ` ${v ?? ""}: ${e(D).closedTotal ?? ""}`),
					(he.disabled = e(d)),
					i(ht, `${x ?? ""} #${((I = e(Z)) == null ? void 0 : I.id) ?? ""}`),
					(se.disabled = e(u)),
					i(yt, o),
					(re.disabled = e(u)),
					i(kt, ` ${L ?? ""}`),
					i(It, M);
			},
			[
				() => et(),
				() => Es(),
				() => Qs(),
				() => at(),
				() => rt(),
				() => st(),
				() => gs(),
			]
		),
		rs("close", ye, () => {
			b(ge, ""), b(te, void 0), b(Z, void 0);
		}),
		g(p, va),
		os();
}
ts(["click"]);
export { Vr as component };

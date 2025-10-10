import "../chunks/Ch2Ub8FX.js";
import {
	at as As,
	p as Ls,
	au as B,
	av as ze,
	y as Ps,
	g as e,
	aw as _,
	f as x,
	d as a,
	s as r,
	t as f,
	ax as Rs,
	b as v,
	c as zs,
	$ as Ss,
	r as t,
	ay as Ve,
	a as ue,
	u as ne,
	az as Bs,
	b4 as Se,
	n as Mt,
} from "../chunks/CMvZtFtm.js";
import { s } from "../chunks/DVA6u9-7.js";
import { i as h } from "../chunks/BF50aS-j.js";
import { k as Ms } from "../chunks/BBgyHb-Z.js";
import { e as jt } from "../chunks/CXkjfmFU.js";
import { h as js } from "../chunks/P77cUGnY.js";
import { r as $a, a as W, c as ka, s as xe } from "../chunks/C5yqZvKC.js";
import { b as Da } from "../chunks/Dpga8uG-.js";
import { g as Es } from "../chunks/CyB--sFG.js";
import { p as Ta } from "../chunks/B6ZK_HZO.js";
import {
	a as ge,
	t as oe,
	b as Cs,
	s as gr,
	u as Fs,
} from "../chunks/BRM3t761.js";
import { D as Os, p as Gs, R as Vs, c as qs } from "../chunks/Cqwd83E5.js";
import { P as Et } from "../chunks/D3yaN7Zl.js";
import { C as Ia, c as Hs, G as Ks, T as Qs } from "../chunks/DLfdYhzo.js";
import { p as hr, L as yr, d as Ws } from "../chunks/BKioTOWR.js";
import {
	g as wr,
	h as Ur,
	n as $r,
	a as Ys,
	b as Zs,
	c as Js,
	t as Xs,
	d as en,
	l as tn,
	M as an,
	e as rn,
	r as sn,
	f as nn,
	m as on,
	i as dn,
	j as ln,
	u as cn,
	k as vn,
} from "../chunks/DTFgqBF9.js";
import { R as kr } from "../chunks/m3o6lEf1.js";
import { g as j } from "../chunks/CV9xcpLq.js";
import { r as Dr } from "../chunks/C3E1P42D.js";
import { a as _n } from "../chunks/CZlv7MYe.js";
import { l as un } from "../chunks/BHI5vujT.js";
import { n as Tr } from "../chunks/Blc0Ir5M.js";
import { e as pn } from "../chunks/LGRbXsL1.js";
import { s as bn, l as mn } from "../chunks/BFFUopoM.js";
import { g as Ct, a as fn } from "../chunks/lE0oaQc5.js";
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
			o = new u.Error().stack;
		o &&
			((u._sentryDebugIds = u._sentryDebugIds || {}),
			(u._sentryDebugIds[o] = "bf5b26c3-5495-4e0a-8ea0-a651975fe366"),
			(u._sentryDebugIdIdentifier =
				"sentry-dbid-bf5b26c3-5495-4e0a-8ea0-a651975fe366"));
	})();
} catch {}
const xn = () => "Search user",
	gn = () => "Buscar usuário",
	Na = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? xn() : gn()),
	hn = () => "Verifications",
	yn = () => "Verificações",
	wn = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? hn() : yn()),
	Un = () => "Notes",
	$n = () => "Notas",
	kn = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? Un() : $n()),
	Dn = () => "No notes yet.",
	Tn = () => "Sem notas ainda.",
	In = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? Dn() : Tn()),
	Nn = () => "Add a note...",
	An = () => "Adicionar uma nota...",
	Ln = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? Nn() : An()),
	Pn = () => "Product",
	Rn = () => "Produto",
	zn = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? Pn() : Rn()),
	Sn = () => "Price",
	Bn = () => "Preço",
	Mn = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? Sn() : Bn()),
	jn = () => "Amount",
	En = () => "Quantidade",
	Cn = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? jn() : En()),
	Fn = () => "Date",
	On = () => "Data",
	Gn = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? Fn() : On()),
	Vn = () => "No purchases",
	qn = () => "Sem compras",
	Hn = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? Vn() : qn()),
	Kn = () => "Received reports",
	Qn = () => "Reportes recebidos",
	Wn = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? Kn() : Qn()),
	Yn = () => "Sent reports",
	Zn = () => "Reportes enviados",
	Jn = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? Yn() : Zn()),
	Xn = () => "Handled reports",
	eo = () => "Reportes tratados",
	to = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? Xn() : eo()),
	ao = () => "Received",
	ro = () => "Recebidos",
	so = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? ao() : ro()),
	no = () => "Sent",
	oo = () => "Enviados",
	io = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? no() : oo()),
	lo = () => "Handled",
	co = () => "Tratados",
	vo = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? lo() : co()),
	_o = () => "Associated tickets",
	uo = () => "Tickets atrelados",
	po = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? _o() : uo()),
	bo = () => "Moderator performance",
	mo = () => "Desempenho do moderador",
	fo = (u = {}, o = {}) => ((o.locale ?? j()) === "en" ? bo() : mo()),
	Ir = (u, o = Bs) => {
		var c = wo();
		let y;
		var z = a(c);
		{
			var Y = (V) => {
					var he = Se("MOD");
					v(V, he);
				},
				l = (V) => {
					var he = Ve(),
						Be = ue(he);
					{
						var Ft = (P) => {
								var q = Se("GM");
								v(P, q);
							},
							Ot = (P) => {
								var q = Se("ADMIN");
								v(P, q);
							};
						h(
							Be,
							(P) => {
								o() === "global_moderator" ? P(Ft) : P(Ot, !1);
							},
							!0
						);
					}
					v(V, he);
				};
			h(z, (V) => {
				o() === "moderator" ? V(Y) : V(l, !1);
			});
		}
		t(c),
			f(
				(V) => (y = W(c, 1, "badge badge-sm ml-0.5 font-semibold", null, y, V)),
				[
					() => ({
						"badge-secondary": o() === "moderator" || o() == "global_moderator",
						"badge-warning": o() === "admin",
					}),
				]
			),
			v(u, c);
	};
function xo(u, o, c, y, z, Y) {
	e(o) && (_(c, "timeout"), _(y, z(e(o)), !0), _(Y, !0));
}
function go(u, o, c, y, z, Y) {
	e(o) && (_(c, "ban"), _(y, z(e(o)), !0), _(Y, !0));
}
async function ho(u, o, c) {
	if (e(o))
		try {
			_(c, !0),
				await ge.removeBan(e(o).id),
				(e(o).ban_reason = null),
				oe.success("Ban removed");
		} catch (y) {
			oe.error((y == null ? void 0 : y.message) ?? "Failed to remove ban");
		} finally {
			_(c, !1);
		}
}
async function yo(u, o, c) {
	if (e(o))
		try {
			_(c, !0),
				await ge.removeTimeout(e(o).id),
				(e(o).timeout_until = null),
				oe.success("Timeout removed");
		} catch (y) {
			oe.error((y == null ? void 0 : y.message) ?? "Failed to remove timeout");
		} finally {
			_(c, !1);
		}
}
var wo = x("<span><!></span>"),
	Uo = x(
		'<div class="flex items-center gap-3"><span class="loading loading-spinner loading-sm"></span> <span> </span></div>'
	),
	$o = x('<div class="text-error"> </div>'),
	ko = x('<div class="text-base-content/70"> </div>'),
	Do = (u, o, c) => {
		var y;
		return o(String((y = e(c)) == null ? void 0 : y.id), "User ID copied");
	},
	To = x('<span class="badge badge-sm"> </span>'),
	Io = x('<span class="badge badge-error badge-outline"> </span>'),
	No = x('<span class="badge badge-warning badge-outline"> </span>'),
	Ao = x('<span class="badge badge-success badge-outline">OK</span>'),
	Lo = x('<button class="btn btn-outline btn-sm"><!> Timeout</button>'),
	Po = x('<!> <button class="btn btn-error btn-sm"><!> Ban</button>', 1),
	Ro = x(
		'<div class="flex flex-col gap-4 md:flex-row md:justify-between"><div class="flex items-center gap-4"><!> <div class="flex flex-col"><div class="flex items-center gap-2 text-lg font-semibold"><span> </span> <span> </span> <button class="btn btn-ghost btn-xs"><!> </button> <!></div> <div class="text-base-content/80 flex flex-wrap items-center gap-2 text-sm"><span>Alliance: <b> </b> <!></span> <span>•</span> <span>Role: <b> </b></span></div></div></div> <div class="flex flex-col items-start gap-2 md:items-end"><div class="flex items-center gap-2"><!></div> <div class="flex gap-2"><!> <button class="btn btn-outline btn-sm">Remove Timeout</button> <button class="btn btn-outline btn-sm">Unban</button></div></div></div>'
	),
	zo = (u, o) => {
		u.key === "Enter" && o();
	},
	So = (u, o, c) => o(e(c)),
	Bo = x(
		'<div class="rounded-box border-base-300 border p-3"><div class="flex justify-between text-sm"><span class="font-medium"> <span class="badge badge-xs"> </span></span> <span class="text-base-content/80"> </span></div> <div class="mt-1 whitespace-pre-wrap break-words"> </div></div>'
	),
	Mo = x('<div class="text-base-content/70 text-sm"> </div>'),
	jo = x(
		'<tr><td> </td><td class="text-right"> </td><td> </td><td class="text-right"> </td></tr>'
	),
	Eo = x('<tr><td colspan="4" class="text-base-content/70"> </td></tr>'),
	Co = x('<div class="text-base-content/70 text-sm"> </div>'),
	Fo = x(
		'<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><div class="rounded-box border-base-300 border p-3"><div class="text-base-content/70 text-xs">Closed tickets</div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box border-base-300 border p-3"><div class="text-base-content/70 text-xs">Bans</div> <div class="text-xl font-bold"> <span class="text-base-content/70 text-sm"> </span></div></div> <div class="rounded-box border-base-300 border p-3"><div class="text-base-content/70 text-xs">Ignored</div> <div class="text-xl font-bold"> <span class="text-base-content/70 text-sm"> </span></div></div> <div class="rounded-box border-base-300 border p-3"><div class="text-base-content/70 text-xs">Timeouts</div> <div class="text-xl font-bold"> <span class="text-base-content/70 text-sm"> </span></div></div></div>'
	),
	Oo = x(
		'<div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><h3 class="mb-3 text-lg font-semibold"> </h3> <!></div>'
	),
	Go = async (u, o, c, y) => {
		_(o, "received"), c.has("received") || (await y("received", !0));
	},
	Vo = async (u, o, c, y) => {
		_(o, "sent"), c.has("sent") || (await y("sent", !0));
	},
	qo = async (u, o, c, y) => {
		_(o, "handled"), c.has("handled") || (await y("handled", !0));
	},
	Ho = async (u, o, c) => {
		await o(e(c), !0);
	},
	Ko = x(
		'<div class="flex items-center justify-center py-6"><span class="loading loading-spinner loading-md"></span></div>'
	),
	Qo = (u, o, c) => {
		_(o, e(c), !0);
	},
	Wo = x("<span> </span>"),
	Yo = x('<div class="absolute bottom-3 right-3"><!></div>'),
	Zo = x(
		'<button><!> <div class="flex flex-col text-start"><span><span> </span> <span> </span> <!></span> <div class="flex items-center gap-2"><span class="text-base-content/80 text-xs font-medium"> </span></div></div> <!></button>'
	),
	Jo = x('<div class="text-base-content/70 mt-4 text-center"> </div>'),
	Xo = async (u, o, c, y) => {
		(o[e(c)] += 1), await y(e(c));
	},
	ei = (u, o) => {
		navigator.clipboard.writeText(e(o).reportedUser.id.toString()),
			oe.success(cn());
	},
	ti = (u, o) => {
		navigator.clipboard.writeText(String(e(o))), oe.success(vn());
	},
	ai = x("<button> <!></button>"),
	ri = x(
		'<span> <span class="font-semibold"> </span></span> <span> <span class="font-semibold"> </span></span>',
		1
	),
	si = x(
		'<span> <a target="_blank"><!> <span class="link">Link</span></a></span>'
	),
	ni = x(
		'<span> <a target="_blank"><!> <span class="link">Link</span></a></span>'
	),
	oi = x(
		'<div><h5 class="font-semibold"> </h5> <p class="text-base-content/80 text-sm"> </p></div>'
	),
	ii = x(
		'<img class="border-base-content/20 mx-auto max-h-[70vh] w-max border" alt="Report location"/>'
	),
	di = x(
		'<div class="grid grid-cols-1 items-center gap-2"><a class="relative h-max rounded-md" title="Report location" target="_blank"><!> <!></a></div>'
	),
	li = x(
		'<div class="mt-2"><img class="border-base-content/20 mx-auto max-h-[70vh] w-max border" alt="Report image"/></div>'
	),
	ci = x(
		'<div class="flex flex-col gap-3"><h5 class="text-primary text-base font-semibold"> </h5> <div class="flex gap-3"><!> <div><span class="text-base"> <span><span> </span> <span> </span></span></span> <div class="flex flex-col text-sm"><span class="text-base"> <span> </span></span> <span class="mt-1"> <span class="font-semibold"> </span></span> <!> <!></div></div></div> <!> <!></div>'
	),
	vi = x(
		'<header class="bg-base-100 sticky top-0 z-10 flex items-center justify-between px-4 pb-3 pt-4"><h4 class="text-lg font-semibold"> </h4></header> <div class="px-4 pb-6"><section class="flex gap-3"><!> <div><span class="text-base"><span> </span> <span><span> </span> <span> </span> <button><!></button> <!></span> <!></span> <div class="flex flex-col text-sm"><span> <span class="font-semibold"> </span></span> <!> <span> <span class="font-semibold"> </span></span> <span> <span> </span></span></div></div></section> <span class="divider"></span> <section class="mt-4 flex flex-col gap-4"></section></div>',
		1
	),
	_i = x('<span class="loading loading-spinner loading-md"></span>'),
	ui = x(
		'<div class="text-base-content/70 flex h-full items-center justify-center"><!></div>'
	),
	pi = x(
		'<div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"><div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs">Timeouts</div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3 sm:col-span-2 xl:col-span-1"><div class="text-base-content/70 text-xs">Droplets</div> <div class="flex items-center gap-2"><div class="text-xl font-bold"> </div> <div class="flex items-center gap-2"><input class="input input-bordered input-xs w-24" type="number" placeholder="+/- value"/> <button class="btn btn-primary btn-xs">Apply</button></div></div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3 sm:col-span-2 xl:col-span-1"><div class="text-base-content/70 text-xs"> </div> <div class="text-sm"><div>Email: <b class="text-success"> </b></div> <div>Phone: <b> </b></div> <div>Discord: <b> </b></div></div></div></div> <div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div class="mb-2 flex items-center justify-between"><h3 class="text-lg font-semibold"> </h3></div> <div class="mb-3 flex gap-2"><input class="input input-bordered input-sm w-full"/> <button class="btn btn-primary btn-sm"> </button></div> <div class="flex flex-col gap-3"><!> <!></div></div> <div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div class="mb-2 flex items-center justify-between"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-outline btn-sm"><!> </button></div> <div class="max-h-80 overflow-auto"><table class="table-sm table"><thead><tr><th> </th><th class="text-right"> </th><th> </th><th class="text-right"> </th></tr></thead><tbody><!><!></tbody></table></div></div> <!> <div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><h3 class="mb-3 text-lg font-semibold"> </h3> <div class="tabs tabs-boxed gap-2"><button> </button> <button> </button> <button> </button></div> <div class="bg-base-200 rounded-box mt-3 grid min-h-[420px] grid-cols-1 gap-4 p-3 md:grid-cols-[320px_1fr]"><section class="flex flex-col gap-3 overflow-auto px-1 pb-1"><div class="mb-2 flex items-center justify-between"><div class="flex items-center gap-2"><h3 class="text-lg font-semibold"><!></h3></div> <button class="btn btn-circle btn-sm"><!></button></div> <!> <!> <!> <div class="mt-2 flex justify-end"><button class="btn btn-sm"> </button></div></section> <section class="rounded-box bg-base-100 overflow-auto shadow"><!></section></div></div>',
		1
	),
	bi = x(
		'<section class="flex flex-col gap-4 p-4"><div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><form class="flex flex-col gap-2 sm:flex-row sm:items-end"><label class="form-control w-full sm:max-w-xs"><span class="label-text text-sm"> </span> <input class="input input-bordered input-sm" placeholder="User ID"/></label> <div class="flex gap-2"><button class="btn btn-primary btn-sm"> </button> <button class="btn btn-outline btn-sm"><!> </button></div></form></div> <div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><!></div> <!> <!></section>'
	);
function Oi(u, o) {
	Ls(o, !0);
	let c = B(""),
		y = B(null),
		z = B(!1),
		Y = B(null),
		l = B(null),
		V = B(ze([])),
		he = B(""),
		Be = B(ze([])),
		Ft = B(0),
		Ot = B(!0),
		P = B(null),
		q = B("received");
	ze([]), ze([]), ze([]);
	let xt = B(!1),
		Gt = B("timeout"),
		gt = B(null);
	const Nr = [-23.551814832869923, -46.63379610146964],
		Ar = 1;
	let ht = B(""),
		Me = B(!1),
		De = B(ze([])),
		Te = B(void 0),
		Vt = ze({ received: 0, sent: 0, handled: 0 });
	const Lr = 20;
	let Je = ze(new Set());
	function Aa() {
		const n = Number(e(ht));
		if (!Number.isFinite(n) || n === 0) {
			oe.error("Enter a number other than 0.");
			return;
		}
		zr(n), _(ht, "");
	}
	function Pr() {
		const n = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="256">
      <rect width="100%" height="100%" fill="#111827"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
            font-family="sans-serif" font-size="28" fill="#F9FAFB">
        Action from Admin Panel
      </text>
    </svg>`;
		return Promise.resolve(new Blob([n], { type: "image/svg+xml" }));
	}
	function La(n) {
		return {
			id: n.id,
			name: n.name ?? `#${n.id}`,
			picture: n.picture ?? void 0,
			allianceId: 0,
			allianceName: "",
			equippedFlag: 0,
		};
	}
	Ps(() => {
		const n = Ta.url.searchParams.get("id"),
			b = n ? Number(n) : null;
		b !== e(y) && (_(y, b, !0), n && _(c, n, !0)),
			e(y) != null && !isNaN(e(y)) ? Ra() : (_(l, null), _(Y, null));
	});
	function Pa(n) {
		if (!n) return "—";
		const b = new Date(n);
		return isNaN(b.getTime()) ? "—" : b.toLocaleString();
	}
	function qt(n, b) {
		if (!b) return "0.00%";
		const g = (n / b) * 100;
		return `${(Math.round(g * 100) / 100).toFixed(2)}%`;
	}
	function Rr(n, b = "Copied!") {
		navigator.clipboard.writeText(n), oe.success(b);
	}
	function Ht(n) {
		if (!n) return !1;
		const b = new Date(n).getTime();
		return !isNaN(b) && b > Date.now();
	}
	async function qe(n, b = !1) {
		if (e(l))
			try {
				_(Me, !0),
					b && ((Vt[n] = 0), _(De, [], !0), _(Te, void 0), Je.delete(n));
				const g = Vt[n],
					H = await ge.getUserTickets({
						userId: e(l).id,
						kind: n,
						page: g,
						pageSize: Lr,
					});
				_(De, g === 0 ? H : [...e(De), ...H], !0),
					!e(Te) && e(De).length > 0 && _(Te, e(De)[0], !0),
					Je.add(n);
			} catch (g) {
				console.error("Error loading mini moderation", n, g),
					oe.error(
						(g == null ? void 0 : g.message) ?? "Failed to load tickets"
					);
			} finally {
				_(Me, !1);
			}
	}
	async function Ra() {
		if (!e(y) || isNaN(e(y))) {
			_(l, null), _(Y, null);
			return;
		}
		try {
			_(z, !0), _(Y, null);
			const n = await ge.getUserInfoFull(e(y));
			if (!n) {
				_(l, null), _(Y, "User not found");
				return;
			}
			n.timeout_until && !Ht(n.timeout_until) && (n.timeout_until = null),
				_(l, n, !0),
				Sr(),
				_(Ft, 0);
			try {
				const b = await ge.getUserPurchases(n.id);
				_(
					Be,
					b.sort(
						(g, H) =>
							new Date(H.createdAt).getTime() - new Date(g.createdAt).getTime()
					),
					!0
				);
			} catch (b) {
				console.error("Error loading purchases", b), _(Be, [], !0), _(Ot, !1);
			}
			if ((_(P, null), n.role !== "user"))
				try {
					const b = await ge.getModeratorClosedTicketStats(n.id);
					_(P, b, !0);
				} catch (b) {
					console.error("Moderator stats error", b), _(P, null);
				}
			await qe("received", !0);
		} catch (n) {
			_(Y, (n == null ? void 0 : n.message) ?? "Error loading user", !0);
		} finally {
			_(z, !1);
		}
	}
	async function za() {
		const n = Number(e(c).trim());
		if (!n || isNaN(n)) {
			oe.error("Enter a numeric user ID");
			return;
		}
		Es(`/admin/users?id=${n}`);
	}
	async function zr(n) {
		e(l) &&
			(await ge.postSetUserDroplets(e(l).id, n),
			(e(l).droplets = Math.max(0, (e(l).droplets ?? 0) + n)),
			Sa(
				`${n >= 0 ? "Added " : "Removed "}${Math.abs(n)} Droplets, now ${e(l).droplets}`
			));
	}
	async function Sr() {
		if (e(l) && e(l))
			try {
				const n = await ge.getUserNotes(e(l).id);
				_(V, n.notes, !0);
			} catch (n) {
				console.error("Error loading notes", n), _(V, [], !0);
			}
	}
	async function Sa(n) {
		if (!e(l)) return;
		const b = n.trim();
		if (b)
			try {
				_(z, !0),
					await ge.addUserNote(e(l).id, b),
					(n = ""),
					oe.success("Note added");
				try {
					const g = await ge.getUserNotes(e(l).id);
					_(V, g.notes, !0);
				} catch (g) {
					console.error("Error reloading notes", g);
				}
			} catch (g) {
				oe.error((g == null ? void 0 : g.message) ?? "Failed to add note");
			} finally {
				_(z, !1);
			}
	}
	function Br() {
		var ae;
		const n = ["id", "product_name", "price", "amount", "createdAt"].join(","),
			b = e(Be).map((ie) =>
				[ie.id, ie.product_name, ie.price, ie.amount, ie.createdAt].join(",")
			),
			g = [n, ...b].join(`
`),
			H = new Blob([g], { type: "text/csv;charset=utf-8;" }),
			Z = URL.createObjectURL(H),
			te = document.createElement("a");
		(te.href = Z),
			(te.download = `purchases_user_${
				((ae = e(l)) == null ? void 0 : ae.id) ?? "unknown"
			}.csv`),
			te.click(),
			URL.revokeObjectURL(Z);
	}
	var Kt = bi();
	js((n) => {
		Ss.title = "openplace - Admin - Users";
	});
	var Qt = a(Kt),
		Wt = a(Qt),
		Yt = a(Wt),
		Zt = a(Yt),
		Mr = a(Zt, !0);
	t(Zt);
	var Ba = r(Zt, 2);
	$a(Ba), t(Yt);
	var Ma = r(Yt, 2),
		Xe = a(Ma);
	Xe.__click = za;
	var jr = a(Xe, !0);
	t(Xe);
	var yt = r(Xe, 2);
	yt.__click = Ra;
	var ja = a(yt);
	kr(ja, { class: "size-4" });
	var Er = r(ja);
	t(yt), t(Ma), t(Wt), t(Qt);
	var Jt = r(Qt, 2),
		Cr = a(Jt);
	{
		var Fr = (n) => {
				var b = Uo(),
					g = r(a(b), 2),
					H = a(g, !0);
				t(g),
					t(b),
					f(
						(Z) => s(H, Z),
						[
							() => {
								var Z;
								return ((Z = un) == null ? void 0 : Z()) ?? "Loading...";
							},
						]
					),
					v(n, b);
			},
			Or = (n) => {
				var b = Ve(),
					g = ue(b);
				{
					var H = (te) => {
							var ae = $o(),
								ie = a(ae, !0);
							t(ae), f(() => s(ie, e(Y))), v(te, ae);
						},
						Z = (te) => {
							var ae = Ve(),
								ie = ue(ae);
							{
								var et = (Ie) => {
										var de = ko(),
											ye = a(de, !0);
										t(de),
											f(
												(we) => s(ye, we),
												[
													() => {
														var we;
														return (
															((we = Tr) == null ? void 0 : we()) ??
															"No user selected"
														);
													},
												]
											),
											v(Ie, de);
									},
									wt = (Ie) => {
										var de = Ro(),
											ye = a(de),
											we = a(ye);
										{
											let T = ne(() => e(l).picture ?? void 0);
											Et(we, {
												class: "size-16 border",
												get userId() {
													return e(l).id;
												},
												get pictureUrl() {
													return e(T);
												},
											});
										}
										var tt = r(we, 2),
											at = a(tt),
											je = a(at),
											rt = a(je, !0);
										t(je);
										var st = r(je, 2),
											Ut = a(st);
										t(st);
										var He = r(st, 2);
										He.__click = [Do, Rr, l];
										var Ke = a(He);
										Ia(Ke, { class: "size-3.5" });
										var $t = r(Ke);
										t(He);
										var nt = r(He, 2);
										{
											var Xt = (T) => {
												var I = To(),
													J = a(I, !0);
												t(I), f(() => s(J, e(l).role)), v(T, I);
											};
											h(nt, (T) => {
												e(l).role !== "user" && T(Xt);
											});
										}
										t(at);
										var ot = r(at, 2),
											Ne = a(ot),
											Qe = r(a(Ne)),
											kt = a(Qe, !0);
										t(Qe);
										var it = r(Qe, 2);
										{
											var ea = (T) => {
												var I = Se();
												f(() => s(I, `(#${e(l).alliance_id ?? ""})`)), v(T, I);
											};
											h(it, (T) => {
												e(l).alliance_id && T(ea);
											});
										}
										t(Ne);
										var dt = r(Ne, 4),
											We = r(a(dt)),
											Dt = a(We, !0);
										t(We), t(dt), t(ot), t(tt), t(ye);
										var Tt = r(ye, 2),
											Ee = a(Tt),
											lt = a(Ee);
										{
											var ta = (T) => {
													var I = Io(),
														J = a(I);
													t(I),
														f(() =>
															s(
																J,
																`BANNED${
																	e(l).ban_reason ? ` (${e(l).ban_reason})` : ""
																}`
															)
														),
														v(T, I);
												},
												It = (T) => {
													var I = Ve(),
														J = ue(I);
													{
														var Ae = (le) => {
																var re = No(),
																	Ue = a(re);
																t(re),
																	f(
																		(_t) => s(Ue, `TIMEOUT until ${_t ?? ""}`),
																		[() => Pa(e(l).timeout_until)]
																	),
																	v(le, re);
															},
															Le = (le) => {
																var re = Ao();
																v(le, re);
															};
														h(
															J,
															(le) => {
																Ht(e(l).timeout_until) ? le(Ae) : le(Le, !1);
															},
															!0
														);
													}
													v(T, I);
												};
											h(lt, (T) => {
												e(l).ban_reason ? T(ta) : T(It, !1);
											});
										}
										t(Ee);
										var Ye = r(Ee, 2),
											Nt = a(Ye);
										{
											var ct = (T) => {
												var I = Po(),
													J = ue(I);
												{
													var Ae = (re) => {
														var Ue = Lo();
														Ue.__click = [xo, l, Gt, gt, La, xt];
														var _t = a(Ue);
														Qs(_t, { class: "size-4" }),
															Mt(),
															t(Ue),
															f(() => (Ue.disabled = e(z))),
															v(re, Ue);
													};
													h(J, (re) => {
														Ht(e(l).timeout_until) || re(Ae);
													});
												}
												var Le = r(J, 2);
												Le.__click = [go, l, Gt, gt, La, xt];
												var le = a(Le);
												Ks(le, { class: "size-4" }),
													Mt(),
													t(Le),
													f(() => (Le.disabled = e(z))),
													v(T, I);
											};
											h(Nt, (T) => {
												var I;
												((I = Fs.data) == null ? void 0 : I.id) !== e(l).id &&
													!e(l).ban_reason &&
													T(ct);
											});
										}
										var Ce = r(Nt, 2);
										Ce.__click = [yo, l, z];
										var vt = r(Ce, 2);
										(vt.__click = [ho, l, z]),
											t(Ye),
											t(Tt),
											t(de),
											f(
												(T) => {
													s(rt, e(l).name),
														s(Ut, `#${e(l).id ?? ""}`),
														s($t, ` ${T ?? ""} ID`),
														s(kt, e(l).alliance_name ?? "—"),
														s(Dt, e(l).role),
														(Ce.disabled = e(z)),
														(vt.disabled = e(z));
												},
												[() => qs()]
											),
											v(Ie, de);
									};
								h(
									ie,
									(Ie) => {
										e(l) ? Ie(wt, !1) : Ie(et);
									},
									!0
								);
							}
							v(te, ae);
						};
					h(
						g,
						(te) => {
							e(Y) ? te(H) : te(Z, !1);
						},
						!0
					);
				}
				v(n, b);
			};
		h(Cr, (n) => {
			e(z) ? n(Fr) : n(Or, !1);
		});
	}
	t(Jt);
	var Ea = r(Jt, 2);
	{
		var Gr = (n) => {
			var b = pi(),
				g = ue(b),
				H = a(g),
				Z = a(H),
				te = a(Z, !0);
			t(Z);
			var ae = r(Z, 2),
				ie = a(ae, !0);
			t(ae), t(H);
			var et = r(H, 2),
				wt = r(a(et), 2),
				Ie = a(wt, !0);
			t(wt), t(et);
			var de = r(et, 2),
				ye = a(de),
				we = a(ye, !0);
			t(ye);
			var tt = r(ye, 2),
				at = a(tt, !0);
			t(tt), t(de);
			var je = r(de, 2),
				rt = a(je),
				st = a(rt, !0);
			t(rt);
			var Ut = r(rt, 2),
				He = a(Ut, !0);
			t(Ut), t(je);
			var Ke = r(je, 2),
				$t = r(a(Ke), 2),
				nt = a($t),
				Xt = a(nt, !0);
			t(nt);
			var ot = r(nt, 2),
				Ne = a(ot);
			$a(Ne), (Ne.__keydown = [zo, Aa]);
			var Qe = r(Ne, 2);
			(Qe.__click = Aa), t(ot), t($t), t(Ke);
			var kt = r(Ke, 2),
				it = a(kt),
				ea = a(it, !0);
			t(it);
			var dt = r(it, 2),
				We = a(dt),
				Dt = r(a(We)),
				Tt = a(Dt, !0);
			t(Dt), t(We);
			var Ee = r(We, 2),
				lt = r(a(Ee)),
				ta = a(lt, !0);
			t(lt), t(Ee);
			var It = r(Ee, 2),
				Ye = r(a(It)),
				Nt = a(Ye, !0);
			t(Ye), t(It), t(dt), t(kt), t(g);
			var ct = r(g, 2),
				Ce = a(ct),
				vt = a(Ce),
				T = a(vt, !0);
			t(vt), t(Ce);
			var I = r(Ce, 2),
				J = a(I);
			$a(J);
			var Ae = r(J, 2);
			Ae.__click = [So, Sa, he];
			var Le = a(Ae, !0);
			t(Ae), t(I);
			var le = r(I, 2),
				re = a(le);
			jt(
				re,
				17,
				() => e(V),
				(d) => `${d.author.id}-${d.createdAt}`,
				(d, i) => {
					var U = Bo(),
						D = a(U),
						p = a(D),
						$ = a(p),
						k = r($),
						w = a(k, !0);
					t(k), t(p);
					var N = r(p, 2),
						F = a(N, !0);
					t(N), t(D);
					var M = r(D, 2),
						X = a(M, !0);
					t(M),
						t(U),
						f(
							(K) => {
								s($, `${e(i).author.name ?? ""} #${e(i).author.id ?? ""} `),
									s(w, e(i).author.role),
									s(F, K),
									s(X, e(i).note);
							},
							[() => new Date(e(i).createdAt).toLocaleString()]
						),
						v(d, U);
				}
			);
			var Ue = r(re, 2);
			{
				var _t = (d) => {
					var i = Mo(),
						U = a(i, !0);
					t(i), f((D) => s(U, D), [() => In()]), v(d, i);
				};
				h(Ue, (d) => {
					e(V).length === 0 && d(_t);
				});
			}
			t(le), t(ct);
			var aa = r(ct, 2),
				ra = a(aa),
				sa = a(ra),
				Hr = a(sa, !0);
			t(sa);
			var na = r(sa, 2);
			na.__click = Br;
			var Ca = a(na);
			Os(Ca, { class: "size-4" });
			var Kr = r(Ca);
			t(na), t(ra);
			var Fa = r(ra, 2),
				Oa = a(Fa),
				oa = a(Oa),
				Ga = a(oa),
				ia = a(Ga),
				Qr = a(ia, !0);
			t(ia);
			var da = r(ia),
				Wr = a(da, !0);
			t(da);
			var la = r(da),
				Yr = a(la, !0);
			t(la);
			var Va = r(la),
				Zr = a(Va, !0);
			t(Va), t(Ga), t(oa);
			var qa = r(oa),
				Ha = a(qa);
			jt(
				Ha,
				17,
				() => e(Be),
				(d) => d.id,
				(d, i) => {
					var U = jo(),
						D = a(U),
						p = a(D, !0);
					t(D);
					var $ = r(D),
						k = a($);
					t($);
					var w = r($),
						N = a(w, !0);
					t(w);
					var F = r(w),
						M = a(F, !0);
					t(F),
						t(U),
						f(
							(X, K) => {
								s(p, e(i).product_name),
									s(k, `US$ ${X ?? ""}`),
									s(N, e(i).amount),
									s(M, K);
							},
							[() => (e(i).price / 100).toFixed(2), () => Pa(e(i).createdAt)]
						),
						v(d, U);
				}
			);
			var Jr = r(Ha);
			{
				var Xr = (d) => {
					var i = Eo(),
						U = a(i),
						D = a(U, !0);
					t(U), t(i), f((p) => s(D, p), [() => Hn()]), v(d, i);
				};
				h(Jr, (d) => {
					e(Be).length === 0 && d(Xr);
				});
			}
			t(qa), t(Oa), t(Fa), t(aa);
			var Ka = r(aa, 2);
			{
				var es = (d) => {
					var i = Oo(),
						U = a(i),
						D = a(U, !0);
					t(U);
					var p = r(U, 2);
					{
						var $ = (w) => {
								var N = Co(),
									F = a(N, !0);
								t(N), f((M) => s(F, M), [() => Tr()]), v(w, N);
							},
							k = (w) => {
								var N = Fo(),
									F = a(N),
									M = r(a(F), 2),
									X = a(M, !0);
								t(M), t(F);
								var K = r(F, 2),
									$e = r(a(K), 2),
									ce = a($e),
									ve = r(ce),
									Fe = a(ve);
								t(ve), t($e), t(K);
								var se = r(K, 2),
									pe = r(a(se), 2),
									R = a(pe),
									E = r(R),
									Pe = a(E);
								t(E), t(pe), t(se);
								var be = r(se, 2),
									Ze = r(a(be), 2),
									Pt = a(Ze),
									Rt = r(Pt),
									ba = a(Rt);
								t(Rt),
									t(Ze),
									t(be),
									t(N),
									f(
										(ma, zt, mt) => {
											s(X, e(P).closedTotal),
												s(ce, `${e(P).bans ?? ""} `),
												s(Fe, `(${ma ?? ""})`),
												s(R, `${e(P).ignored ?? ""} `),
												s(Pe, `(${zt ?? ""})`),
												s(Pt, `${e(P).timeouts ?? ""} `),
												s(ba, `(${mt ?? ""})`);
										},
										[
											() => qt(e(P).bans, e(P).closedTotal),
											() => qt(e(P).ignored, e(P).closedTotal),
											() => qt(e(P).timeouts, e(P).closedTotal),
										]
									),
									v(w, N);
							};
						h(p, (w) => {
							e(P) ? w(k, !1) : w($);
						});
					}
					t(i), f((w) => s(D, w), [() => fo()]), v(d, i);
				};
				h(Ka, (d) => {
					e(l).role !== "user" && d(es);
				});
			}
			var Qa = r(Ka, 2),
				ca = a(Qa),
				ts = a(ca, !0);
			t(ca);
			var va = r(ca, 2),
				ut = a(va);
			ut.__click = [Go, q, Je, qe];
			var as = a(ut, !0);
			t(ut);
			var pt = r(ut, 2);
			pt.__click = [Vo, q, Je, qe];
			var rs = a(pt, !0);
			t(pt);
			var At = r(pt, 2);
			At.__click = [qo, q, Je, qe];
			var ss = a(At, !0);
			t(At), t(va);
			var Wa = r(va, 2),
				_a = a(Wa),
				ua = a(_a),
				pa = a(ua),
				Ya = a(pa),
				ns = a(Ya);
			{
				var os = (d) => {
						var i = Se();
						f((U) => s(i, U), [() => Wn()]), v(d, i);
					},
					is = (d) => {
						var i = Ve(),
							U = ue(i);
						{
							var D = ($) => {
									var k = Se();
									f((w) => s(k, w), [() => Jn()]), v($, k);
								},
								p = ($) => {
									var k = Se();
									f((w) => s(k, w), [() => to()]), v($, k);
								};
							h(
								U,
								($) => {
									e(q) === "sent" ? $(D) : $(p, !1);
								},
								!0
							);
						}
						v(d, i);
					};
				h(ns, (d) => {
					e(q) === "received" ? d(os) : d(is, !1);
				});
			}
			t(Ya), t(pa);
			var bt = r(pa, 2);
			bt.__click = [Ho, qe, q];
			var ds = a(bt);
			kr(ds, { class: "size-4" }), t(bt), t(ua);
			var Za = r(ua, 2);
			{
				var ls = (d) => {
					var i = Ko();
					v(d, i);
				};
				h(Za, (d) => {
					e(Me) && e(De).length === 0 && d(ls);
				});
			}
			var Ja = r(Za, 2);
			jt(
				Ja,
				17,
				() => e(De),
				(d) => d.id,
				(d, i) => {
					const U = ne(() => new Date(e(i).createdAt)),
						D = ne(() => {
							var R;
							return ((R = e(Te)) == null ? void 0 : R.id) === e(i).id;
						});
					var p = Zo();
					p.__click = [Qo, Te, i];
					var $ = a(p);
					{
						let R = ne(() => e(i).reportedUser.picture ?? void 0);
						Et($, {
							class: "size-12",
							get userId() {
								return e(i).reportedUser.id;
							},
							get pictureUrl() {
								return e(R);
							},
						});
					}
					var k = r($, 2),
						w = a(k),
						N = a(w),
						F = a(N, !0);
					t(N);
					var M = r(N, 2),
						X = a(M);
					t(M);
					var K = r(M, 2);
					{
						var $e = (R) => {
							var E = Wo();
							let Pe;
							var be = a(E, !0);
							t(E),
								f(
									(Ze) => {
										(Pe = W(
											E,
											1,
											"badge badge-xs font-semibold",
											null,
											Pe,
											Ze
										)),
											s(be, e(i).status);
									},
									[
										() => ({
											"badge-ghost":
												e(i).status === "open" || e(i).status === "ignore",
											"badge-warning": e(i).status === "timeout",
											"badge-error": e(i).status === "ban",
										}),
									]
								),
								v(R, E);
						};
						h(K, (R) => {
							e(i).status && R($e);
						});
					}
					t(w);
					var ce = r(w, 2),
						ve = a(ce),
						Fe = a(ve, !0);
					t(ve), t(ce), t(k);
					var se = r(k, 2);
					{
						var pe = (R) => {
							var E = Yo(),
								Pe = a(E);
							Ir(Pe, () => e(i).reportedUser.role), t(E), v(R, E);
						};
						h(se, (R) => {
							e(i).reportedUser.role !== "user" && R(pe);
						});
					}
					t(p),
						f(
							(R, E) => {
								W(
									p,
									1,
									ka({
										"bg-base-100 ring-primary relative flex gap-2 rounded-2xl p-3 shadow":
											!0,
										"bg-primary/10 ring-2": e(D),
									})
								),
									W(w, 1, `text-base font-semibold ${R ?? ""} flex gap-1.5`),
									s(F, e(i).reportedUser.name),
									s(X, `#${e(i).reportedUser.id ?? ""}`),
									s(Fe, E);
							},
							[() => Ct(e(i).reportedUser.id), () => e(U).toLocaleString()]
						),
						v(d, p);
				}
			);
			var Xa = r(Ja, 2);
			{
				var cs = (d) => {
					var i = Jo(),
						U = a(i, !0);
					t(i), f((D) => s(U, D), [() => $r()]), v(d, i);
				};
				h(Xa, (d) => {
					!e(Me) && e(De).length === 0 && d(cs);
				});
			}
			var er = r(Xa, 2),
				Lt = a(er);
			Lt.__click = [Xo, Vt, q, qe];
			var vs = a(Lt, !0);
			t(Lt), t(er), t(_a);
			var tr = r(_a, 2),
				_s = a(tr);
			{
				var us = (d) => {
						var i = Ve(),
							U = ue(i);
						Ms(
							U,
							() => e(Te).id,
							(D) => {
								const p = ne(() => e(Te)),
									$ = ne(() => {
										var A;
										return (
											((A = on(e(p).reports, (m) => m.sameIpAccounts ?? 0)) ==
											null
												? void 0
												: A.sameIpAccounts) ?? 0
										);
									});
								var k = vi(),
									w = ue(k),
									N = a(w),
									F = a(N);
								t(N), t(w);
								var M = r(w, 2),
									X = a(M),
									K = a(X);
								{
									let A = ne(() => e(p).reportedUser.picture ?? void 0);
									Et(K, {
										class: "size-14",
										get userId() {
											return e(p).reportedUser.id;
										},
										get pictureUrl() {
											return e(A);
										},
									});
								}
								var $e = r(K, 2),
									ce = a($e),
									ve = a(ce),
									Fe = a(ve);
								t(ve);
								var se = r(ve, 2),
									pe = a(se),
									R = a(pe, !0);
								t(pe);
								var E = r(pe, 2),
									Pe = a(E);
								t(E);
								var be = r(E, 2);
								be.__click = [ei, p];
								var Ze = a(be);
								Ia(Ze, { class: "inline size-4" }), t(be);
								var Pt = r(be, 2);
								{
									var Rt = (A) => {
										const m = ne(() => e(p).reportedUser.allianceId);
										var G = ai();
										G.__click = [ti, m];
										var _e = a(G),
											me = r(_e);
										Ia(me, { class: "size-3" }),
											t(G),
											f(
												(ke, Re, fe) => {
													W(
														G,
														1,
														`tooltip badge badge-sm ml-0.5 border-0 ${
															ke ?? ""
														} ${Re ?? ""}`
													),
														xe(G, "title", fe),
														s(
															_e,
															`${e(p).reportedUser.allianceName ?? "—" ?? ""} `
														);
												},
												[
													() => fn(e(m)),
													() => Ct(e(m)),
													() => Hs({ allianceId: e(m) }),
												]
											),
											v(A, G);
									};
									h(Pt, (A) => {
										e(p).reportedUser.allianceId != null && A(Rt);
									});
								}
								t(se);
								var ba = r(se, 2);
								{
									var ma = (A) => {
										Ir(A, () => e(p).reportedUser.role);
									};
									h(ba, (A) => {
										e(p).reportedUser.role !== "user" && A(ma);
									});
								}
								t(ce);
								var zt = r(ce, 2),
									mt = a(zt),
									ar = a(mt),
									rr = r(ar),
									bs = a(rr, !0);
								t(rr), t(mt);
								var sr = r(mt, 2);
								{
									var ms = (A) => {
										var m = ri(),
											G = ue(m),
											_e = a(G),
											me = r(_e),
											ke = a(me, !0);
										t(me), t(G);
										var Re = r(G, 2),
											fe = a(Re),
											Oe = r(fe),
											St = a(Oe, !0);
										t(Oe),
											t(Re),
											f(
												(ft, Bt) => {
													s(_e, `${ft ?? ""}: `),
														s(ke, e(p).reportedUser.timeoutCount ?? 0),
														s(fe, `${Bt ?? ""}: `),
														s(
															St,
															gr[e(p).reportedUser.lastTimeoutReason] ??
																e(p).reportedUser.lastTimeoutReason
														);
												},
												[() => dn(), () => ln()]
											),
											v(A, m);
									};
									h(sr, (A) => {
										e(p).reportedUser.lastTimeoutReason && A(ms);
									});
								}
								var fa = r(sr, 2),
									nr = a(fa),
									or = r(nr),
									fs = a(or, !0);
								t(or), t(fa);
								var ir = r(fa, 2),
									dr = a(ir),
									xa = r(dr);
								let lr;
								var xs = a(xa, !0);
								t(xa), t(ir), t(zt), t($e), t(X);
								var cr = r(X, 4);
								jt(
									cr,
									21,
									() => e(p).reports,
									(A) => A.id,
									(A, m) => {
										const G = ne(
												() =>
													e(m).reportedLatitude != null &&
													e(m).reportedLongitude != null
											),
											_e = ne(() =>
												e(G)
													? `${Ta.url.origin}/?lat=${
															e(m).reportedLatitude
													  }&lng=${e(m).reportedLongitude}&select=true${
															e(m).zoom ? `&zoom=${e(m).zoom}` : ""
													  }`
													: null
											);
										var me = ci(),
											ke = a(me),
											Re = a(ke);
										t(ke);
										var fe = r(ke, 2),
											Oe = a(fe);
										{
											let L = ne(() => e(m).reportedByPicture ?? void 0);
											Et(Oe, {
												class: "size-14",
												get userId() {
													return e(m).reportedBy;
												},
												get pictureUrl() {
													return e(L);
												},
											});
										}
										var St = r(Oe, 2),
											ft = a(St),
											Bt = a(ft),
											ga = r(Bt),
											ha = a(ga),
											gs = a(ha, !0);
										t(ha);
										var vr = r(ha, 2),
											hs = a(vr);
										t(vr), t(ga), t(ft);
										var _r = r(ft, 2),
											ya = a(_r),
											ur = a(ya),
											wa = r(ur),
											ys = a(wa, !0);
										t(wa), t(ya);
										var Ua = r(ya, 2),
											pr = a(Ua),
											br = r(pr),
											ws = a(br, !0);
										t(br), t(Ua);
										var mr = r(Ua, 2);
										{
											var Us = (L) => {
												var S = si(),
													C = a(S),
													O = r(C),
													Q = a(O);
												yr(Q, { class: "inline size-4" }),
													Mt(2),
													t(O),
													t(S),
													f(
														(ee) => {
															s(C, `${ee ?? ""}: `), xe(O, "href", e(_e));
														},
														[() => en()]
													),
													v(L, S);
											};
											h(mr, (L) => {
												e(G) && L(Us);
											});
										}
										var $s = r(mr, 2);
										{
											var ks = (L) => {
												var S = ni(),
													C = a(S),
													O = r(C),
													Q = a(O);
												yr(Q, { class: "inline size-4" }),
													Mt(2),
													t(O),
													t(S),
													f(
														(ee) => {
															s(C, `${ee ?? ""}: `),
																xe(
																	O,
																	"href",
																	`${Ta.url.origin}/?lat=${
																		e(m).lastPixelLatitude
																	}&lng=${e(m).lastPixelLongitude}&select=true`
																);
														},
														[() => tn()]
													),
													v(L, S);
											};
											h($s, (L) => {
												e(m).lastPixelLatitude != null &&
													e(m).lastPixelLongitude != null &&
													L(ks);
											});
										}
										t(_r), t(St), t(fe);
										var fr = r(fe, 2);
										{
											var Ds = (L) => {
												var S = oi(),
													C = a(S),
													O = a(C, !0);
												t(C);
												var Q = r(C, 2),
													ee = a(Q, !0);
												t(Q),
													t(S),
													f(
														(Ge) => {
															s(O, Ge), s(ee, e(m).notes);
														},
														[() => Ws()]
													),
													v(L, S);
											};
											h(fr, (L) => {
												e(m).notes && L(Ds);
											});
										}
										var Ts = r(fr, 2);
										{
											var Is = (L) => {
													var S = di(),
														C = a(S),
														O = a(C);
													{
														var Q = (Ge) => {
															var xr = ii();
															f(() => xe(xr, "src", e(m).imageUrl)), v(Ge, xr);
														};
														h(O, (Ge) => {
															e(m).imageUrl && Ge(Q);
														});
													}
													var ee = r(O, 2);
													an(ee, {
														class:
															"absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-[87%]",
													}),
														t(C),
														t(S),
														f(() => xe(C, "href", e(_e))),
														v(L, S);
												},
												Ns = (L) => {
													var S = Ve(),
														C = ue(S);
													{
														var O = (Q) => {
															var ee = li(),
																Ge = a(ee);
															t(ee),
																f(() => xe(Ge, "src", e(m).imageUrl)),
																v(Q, ee);
														};
														h(
															C,
															(Q) => {
																e(m).imageUrl && Q(O);
															},
															!0
														);
													}
													v(L, S);
												};
											h(Ts, (L) => {
												e(_e) ? L(Is) : L(Ns, !1);
											});
										}
										t(me),
											f(
												(L, S, C, O, Q, ee) => {
													s(Re, `${L ?? ""} #${e(m).id ?? ""}`),
														s(Bt, `${S ?? ""}: `),
														W(ga, 1, `font-semibold ${C ?? ""}`),
														s(gs, e(m).reportedByName),
														s(hs, `#${e(m).reportedBy ?? ""}`),
														s(ur, `${O ?? ""}: `),
														W(wa, 1, `font-bold ${Cs[e(m).reason] ?? ""}`),
														s(ys, gr[e(m).reason] ?? e(m).reason),
														s(pr, `${Q ?? ""}: `),
														s(ws, ee);
												},
												[
													() => Ys(),
													() => Zs(),
													() => Ct(e(m).reportedBy),
													() => Js(),
													() => Xs(),
													() => new Date(e(m).createdAt).toLocaleString(),
												]
											),
											v(A, me);
									}
								),
									t(cr),
									t(M),
									f(
										(A, m, G, _e, me, ke, Re, fe, Oe) => {
											xe(N, "title", e(p).id),
												s(F, `${A ?? ""}: ${m ?? ""}`),
												s(Fe, `${G ?? ""}:`),
												W(se, 1, `text-base font-semibold ${_e ?? ""}`),
												s(R, e(p).reportedUser.name),
												s(Pe, `#${e(p).reportedUser.id ?? ""}`),
												xe(be, "title", me),
												s(ar, `${ke ?? ""}: `),
												s(bs, e(p).reportedUser.reportedCount ?? 0),
												s(nr, `${Re ?? ""}: `),
												s(fs, e(p).reportedUser.pixelsPainted ?? 0),
												s(dr, `${fe ?? ""}: `),
												(lr = W(xa, 1, "font-semibold", null, lr, Oe)),
												s(xs, e($));
										},
										[
											() => rn(),
											() => String(e(p).id).split("-").at(-1),
											() => sn(),
											() => Ct(e(p).reportedUser.id),
											() => nn({ userId: e(p).reportedUser.id }),
											() => wr(),
											() => hr(),
											() => Ur(),
											() => ({ "text-red-600": e($) >= 7 }),
										]
									),
									v(D, k);
							}
						),
							v(d, i);
					},
					ps = (d) => {
						var i = ui(),
							U = a(i);
						{
							var D = ($) => {
									var k = _i();
									v($, k);
								},
								p = ($) => {
									var k = Se();
									f((w) => s(k, w), [() => $r()]), v($, k);
								};
							h(U, ($) => {
								e(Me) ? $(D) : $(p, !1);
							});
						}
						t(i), v(d, i);
					};
				h(_s, (d) => {
					e(Te) ? d(us) : d(ps, !1);
				});
			}
			t(tr),
				t(Wa),
				t(Qa),
				f(
					(
						d,
						i,
						U,
						D,
						p,
						$,
						k,
						w,
						N,
						F,
						M,
						X,
						K,
						$e,
						ce,
						ve,
						Fe,
						se,
						pe,
						R
					) => {
						s(te, d),
							s(ie, e(l).reported_times),
							s(Ie, e(l).timeouts_count),
							s(we, i),
							s(at, e(l).same_ip_accounts),
							s(st, U),
							s(He, e(l).pixels_painted),
							s(Xt, e(l).droplets),
							(Qe.disabled = e(z)),
							s(ea, D),
							s(Tt, e(l).email),
							W(
								lt,
								1,
								ka(e(l).phone_validated ? "text-success" : "text-error")
							),
							s(ta, e(l).phone_validated ? "Validated" : "Not validated"),
							W(Ye, 1, ka(e(l).discord ? "text-success" : "text-error")),
							s(Nt, e(l).discord ? "Connected" : "Not connected"),
							s(T, p),
							xe(J, "placeholder", $),
							(Ae.disabled = k),
							s(Le, w),
							s(Hr, N),
							s(Kr, ` ${F ?? ""}`),
							s(Qr, M),
							s(Wr, X),
							s(Yr, K),
							s(Zr, $e),
							s(ts, ce),
							W(
								ut,
								1,
								`tab transition-all ${
									e(q) === "received"
										? "tab-active !bg-primary !text-primary-content !border-primary/60 btn btn-primary btn-sm scale-[1.02] !border !shadow-md"
										: "hover:brightness-105"
								}`
							),
							s(as, ve),
							W(
								pt,
								1,
								`tab transition-all ${
									e(q) === "sent"
										? "tab-active !bg-primary !text-primary-content !border-primary/60 btn btn-primary btn-sm scale-[1.02] !border !shadow-md"
										: "hover:brightness-105"
								}`
							),
							s(rs, Fe),
							W(
								At,
								1,
								`tab transition-all ${
									e(q) === "handled"
										? "tab-active !bg-primary !text-primary-content !border-primary/60 btn btn-primary btn-sm scale-[1.02] !border !shadow-md"
										: "hover:brightness-105"
								}`
							),
							s(ss, se),
							(bt.disabled = e(Me)),
							xe(bt, "title", pe),
							(Lt.disabled = e(Me)),
							s(vs, R);
					},
					[
						() => wr(),
						() => Ur(),
						() => hr(),
						() => wn(),
						() => kn(),
						() => Ln(),
						() => !e(he).trim(),
						() => _n(),
						() => Gs(),
						() => pn(),
						() => zn(),
						() => Mn(),
						() => Cn(),
						() => Gn(),
						() => po(),
						() => so(),
						() => io(),
						() => vo(),
						() => {
							var d;
							return ((d = Dr) == null ? void 0 : d()) ?? "Refresh";
						},
						() => {
							var d;
							return ((d = mn) == null ? void 0 : d()) ?? "Load more";
						},
					]
				),
				Da(
					Ne,
					() => e(ht),
					(d) => _(ht, d)
				),
				Da(
					J,
					() => e(he),
					(d) => _(he, d)
				),
				v(n, b);
		};
		h(Ea, (n) => {
			e(l) && n(Gr);
		});
	}
	var Vr = r(Ea, 2);
	{
		var qr = (n) => {
			{
				let b = ne(Pr);
				Vs(n, {
					get action() {
						return e(Gt);
					},
					get paintedBy() {
						return e(gt);
					},
					get image() {
						return e(b);
					},
					get latLon() {
						return Nr;
					},
					zoom: Ar,
					get open() {
						return e(xt);
					},
					set open(g) {
						_(xt, g, !0);
					},
				});
			}
		};
		h(Vr, (n) => {
			e(gt) && n(qr);
		});
	}
	t(Kt),
		f(
			(n, b, g) => {
				s(Mr, n),
					(Xe.disabled = e(z)),
					s(jr, b),
					(yt.disabled = e(z)),
					s(Er, ` ${g ?? ""}`);
			},
			[
				() => (Na == null ? void 0 : Na()) ?? "Search user (ID)",
				() => {
					var n;
					return ((n = bn) == null ? void 0 : n()) ?? "Search";
				},
				() => {
					var n;
					return ((n = Dr) == null ? void 0 : n()) ?? "Refresh";
				},
			]
		),
		Rs("submit", Wt, (n) => {
			n.preventDefault(), za();
		}),
		Da(
			Ba,
			() => e(c),
			(n) => _(c, n)
		),
		v(u, Kt),
		zs();
}
As(["click", "keydown"]);
export { Oi as component };

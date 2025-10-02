import "../chunks/Ch2Ub8FX.js";
import { o as re } from "../chunks/DoL3ojdE.js";
import {
	at as oe,
	p as ie,
	y as le,
	g as t,
	au as b,
	u as z,
	aw as o,
	f as _,
	b as l,
	c as se,
	t as w,
	$ as ce,
	n as ue,
	d as s,
	r as c,
	ay as F,
	a as E,
	s as Y,
} from "../chunks/CMvZtFtm.js";
import { s as x } from "../chunks/DVA6u9-7.js";
import { i as j } from "../chunks/BF50aS-j.js";
import { h as fe } from "../chunks/P77cUGnY.js";
import { g as M } from "../chunks/CyB--sFG.js";
import { p as N } from "../chunks/B6ZK_HZO.js";
import { c as de, a as P, t as ve } from "../chunks/BRM3t761.js";
import { L as pe } from "../chunks/Bn0Xcwmn.js";
import { L as _e } from "../chunks/D3yDgRbd.js";
import { g as m } from "../chunks/CV9xcpLq.js";
import { g as me } from "../chunks/BSXXHLQ0.js";
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
		a.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
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
			e = new a.Error().stack;
		e &&
			((a._sentryDebugIds = a._sentryDebugIds || {}),
			(a._sentryDebugIds[e] = "c1586dac-f5e8-440e-b93d-4bbd5586913c"),
			(a._sentryDebugIdIdentifier =
				"sentry-dbid-c1586dac-f5e8-440e-b93d-4bbd5586913c"));
	})();
} catch {}
const ge = () => "You have been banned from this alliance. You cannot join it.",
	be = () => "Você foi banido desta aliança. Você não pode entrar.",
	he = (a = {}, e = {}) => ((e.locale ?? m()) === "en" ? ge() : be()),
	ye = () => `You are already in an alliance.
Do you want to leave your current alliance to join?`,
	we = () => "Você já está em uma aliança. Deseja sair da sua aliança atual?",
	xe = (a = {}, e = {}) => ((e.locale ?? m()) === "en" ? ye() : we()),
	je = () => "Invalid invite. It might be expired.",
	Ie = () => "Convite inválido. Pode estar expirado.",
	Le = (a = {}, e = {}) => ((e.locale ?? m()) === "en" ? je() : Ie()),
	De = () => "Alliance invite",
	Te = () => "Convite de aliança",
	ke = (a = {}, e = {}) => ((e.locale ?? m()) === "en" ? De() : Te()),
	Ae = () => "Leave",
	Ee = () => "Sair",
	Ye = (a = {}, e = {}) => ((e.locale ?? m()) === "en" ? Ae() : Ee()),
	Ne = () => "No",
	Pe = () => "Não",
	Se = (a = {}, e = {}) => ((e.locale ?? m()) === "en" ? Ne() : Pe());
var Ve = _(
		'<meta property="og:title" content="Join the alliance"/> <meta name="twitter:title" content="Join the allince"/> <meta name="robots" content="noindex"/>',
		1
	),
	Ce = _('<span class="loading loading-xl loading-spinner"></span>'),
	Je = async (a, e, i, n) => {
		o(e, !0);
		try {
			await P.leaveAlliance(), o(i, await P.joinAlliance(t(n)), !0);
		} catch (h) {
			ve.error(h.message);
		} finally {
			o(e, !1);
		}
	},
	Re = _(
		'<div class="flex items-center gap-2"><a class="btn w-32" href="/"> </a> <button class="btn btn-warning w-32"> </button></div>'
	),
	ze = _('<a class="btn btn-primary btn-lg" href="/"> </a>'),
	Fe = _(
		'<div class="flex justify-center"><a href="/"><!></a></div> <p class="my-6 max-w-2xl whitespace-pre-line text-center text-lg"> </p> <!>',
		1
	),
	Me = _(
		'<div class="mx-auto flex h-full w-max flex-col items-center justify-center px-4"><!></div>'
	);
function aa(a, e) {
	ie(e, !0);
	let i = b(!0),
		n = b(void 0),
		h = b(!1),
		u = b(""),
		S = b(!1);
	const V = z(() => N.url.searchParams.get("id") ?? ""),
		U = z(() => N.url.searchParams.get("new-user"));
	re(async () => {
		try {
			o(n, await P.joinAlliance(t(V)), !0);
		} catch (r) {
			console.error(r.message), o(u, r.message, !0);
		} finally {
			o(i, !1);
		}
	}),
		le(() => {
			t(n) === "success"
				? t(U)
					? M("/?new-user=1")
					: M("/?alliance=1")
				: t(n) === "not-logged-in"
				? o(h, !0)
				: t(n) === "banned"
				? o(u, he(), !0)
				: t(n) === "in-another-alliance"
				? o(u, xe(), !0)
				: t(n) === "invalid-invite"
				? o(u, Le(), !0)
				: t(n) === "error" && o(u, de(), !0);
		});
	var I = Me();
	fe((r) => {
		var d = Ve();
		ue(4), w((L) => (ce.title = `Wplace - ${L ?? ""}`), [() => ke()]), l(r, d);
	});
	var W = s(I);
	{
		var q = (r) => {
				var d = Ce();
				l(r, d);
			},
			B = (r) => {
				var d = F(),
					L = E(d);
				{
					var G = (v) => {
							pe(v, {
								get redirect() {
									return N.url.pathname;
								},
							});
						},
						H = (v) => {
							var C = F(),
								K = E(C);
							{
								var O = (D) => {
									var J = Fe(),
										T = E(J),
										R = s(T),
										Q = s(R);
									_e(Q, { size: "lg", hasText: !0 }), c(R), c(T);
									var k = Y(T, 2),
										X = s(k, !0);
									c(k);
									var Z = Y(k, 2);
									{
										var $ = (p) => {
												var f = Re(),
													g = s(f),
													A = s(g, !0);
												c(g);
												var y = Y(g, 2);
												y.__click = [Je, S, n, V];
												var ae = s(y, !0);
												c(y),
													c(f),
													w(
														(te, ne) => {
															x(A, te), (y.disabled = t(S)), x(ae, ne);
														},
														[() => Se(), () => Ye()]
													),
													l(p, f);
											},
											ee = (p) => {
												var f = ze(),
													g = s(f, !0);
												c(f), w((A) => x(g, A), [() => me()]), l(p, f);
											};
										j(Z, (p) => {
											t(n) === "in-another-alliance" ? p($) : p(ee, !1);
										});
									}
									w(() => x(X, t(u))), l(D, J);
								};
								j(
									K,
									(D) => {
										t(u) && D(O);
									},
									!0
								);
							}
							l(v, C);
						};
					j(
						L,
						(v) => {
							t(h) ? v(G) : v(H, !1);
						},
						!0
					);
				}
				l(r, d);
			};
		j(W, (r) => {
			t(i) ? r(q) : r(B, !1);
		});
	}
	c(I), l(a, I), se();
}
oe(["click"]);
export { aa as component };

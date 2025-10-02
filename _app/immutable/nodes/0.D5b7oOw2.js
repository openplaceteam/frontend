var He = (n) => {
	throw TypeError(n);
};
var Re = (n, t, i) => t.has(n) || He("Cannot " + i);
var gt = (n, t, i) => (
		Re(n, t, "read from private field"), i ? i.call(n) : t.get(n)
	),
	qt = (n, t, i) =>
		t.has(n)
			? He("Cannot add the same private member more than once")
			: t instanceof WeakSet
			? t.add(n)
			: t.set(n, i),
	Jt = (n, t, i, h) => (
		Re(n, t, "write to private field"), h ? h.call(n, i) : t.set(n, i), i
	);
import "../chunks/Ch2Ub8FX.js";
import { o as pt, s as it, v as en } from "../chunks/DoL3ojdE.js";
import {
	p as de,
	f as et,
	d as ot,
	b as a,
	r as p,
	t as Q,
	c as ue,
	bn as le,
	aI as nn,
	aH as Ne,
	aJ as an,
	au as H,
	av as Ve,
	y as _t,
	aw as u,
	g as e,
	u as w,
	z as $t,
	s as At,
	ax as We,
	az as ht,
	ay as g,
	a as v,
	at as on,
	b4 as Fe,
	v as ne,
	bm as sn,
} from "../chunks/CMvZtFtm.js";
import { s as Qt } from "../chunks/DVA6u9-7.js";
import {
	l as G,
	m as xt,
	n as rn,
	o as ln,
	u as Pe,
	_ as cn,
	p as dn,
	a as un,
	r as fn,
	g as Ue,
	q as vn,
	P as mn,
} from "../chunks/BRM3t761.js";
import { c as gn, A as hn, s as _n, a as bn } from "../chunks/C0GlPMrk.js";
import "../chunks/CV9xcpLq.js";
import { p as O, i as T, s as Ae, r as wn } from "../chunks/BF50aS-j.js";
import { e as Le } from "../chunks/CXkjfmFU.js";
import {
	c as It,
	a as Tt,
	s as M,
	e as Me,
	b as yn,
	S as xn,
} from "../chunks/C5yqZvKC.js";
import { b as Ke } from "../chunks/0wx1llIh.js";
import { c as Pt } from "../chunks/CdTXrPIO.js";
import "../chunks/BOREeBzQ.js";
(function () {
	try {
		var n =
			typeof window < "u"
				? window
				: typeof global < "u"
				? global
				: typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
				? self
				: {};
		n.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
	} catch {}
})();
try {
	(function () {
		var n =
				typeof window < "u"
					? window
					: typeof global < "u"
					? global
					: typeof globalThis < "u"
					? globalThis
					: typeof self < "u"
					? self
					: {},
			t = new n.Error().stack;
		t &&
			((n._sentryDebugIds = n._sentryDebugIds || {}),
			(n._sentryDebugIds[t] = "8646eece-6508-48d5-bb48-54d5c2d58aca"),
			(n._sentryDebugIdIdentifier =
				"sentry-dbid-8646eece-6508-48d5-bb48-54d5c2d58aca"));
	})();
} catch {}
const In = !0,
	ka = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, prerender: In },
			Symbol.toStringTag,
			{ value: "Module" }
		)
	),
	Tn = Array(12).fill(0);
var Sn = et('<div class="sonner-loading-bar"></div>'),
	Bn = et('<div><div class="sonner-spinner"></div></div>');
function En(n, t) {
	de(t, !0);
	var i = Bn(),
		h = ot(i);
	Le(
		h,
		23,
		() => Tn,
		(D, k) => `spinner-bar-${k}`,
		(D, k) => {
			var V = Sn();
			a(D, V);
		}
	),
		p(h),
		p(i),
		Q(
			(D) => {
				Tt(i, 1, D), M(i, "data-visible", t.visible);
			},
			[() => It(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]
		),
		a(n, i),
		ue();
}
const Dn = typeof window < "u" ? window : void 0;
function An(n) {
	let t = n.activeElement;
	for (; t != null && t.shadowRoot; ) {
		const i = t.shadowRoot.activeElement;
		if (i === t) break;
		t = i;
	}
	return t;
}
var Ut, te;
class Mn {
	constructor(t = {}) {
		qt(this, Ut);
		qt(this, te);
		const { window: i = Dn, document: h = i == null ? void 0 : i.document } = t;
		i !== void 0 &&
			(Jt(this, Ut, h),
			Jt(
				this,
				te,
				gn((D) => {
					const k = le(i, "focusin", D),
						V = le(i, "focusout", D);
					return () => {
						k(), V();
					};
				})
			));
	}
	get current() {
		var t;
		return (
			(t = gt(this, te)) == null || t.call(this),
			gt(this, Ut) ? An(gt(this, Ut)) : null
		);
	}
}
(Ut = new WeakMap()), (te = new WeakMap());
new Mn();
var ee, St;
class Cn {
	constructor(t) {
		qt(this, ee);
		qt(this, St);
		Jt(this, ee, t), Jt(this, St, Symbol(t));
	}
	get key() {
		return gt(this, St);
	}
	exists() {
		return nn(gt(this, St));
	}
	get() {
		const t = Ne(gt(this, St));
		if (t === void 0) throw new Error(`Context "${gt(this, ee)}" not found`);
		return t;
	}
	getOr(t) {
		const i = Ne(gt(this, St));
		return i === void 0 ? t : i;
	}
	set(t) {
		return an(gt(this, St), t);
	}
}
(ee = new WeakMap()), (St = new WeakMap());
const Ln = new Cn("<Toaster/>");
function ce(n) {
	return n.label !== void 0;
}
function Pn() {
	let n = H(Ve(typeof document < "u" ? document.hidden : !1));
	return (
		_t(() =>
			le(document, "visibilitychange", () => {
				u(n, document.hidden, !0);
			})
		),
		{
			get current() {
				return e(n);
			},
		}
	);
}
const je = 4e3,
	On = 14,
	kn = 45,
	Hn = 200,
	Rn = 0.05,
	Nn = {
		toast: "",
		title: "",
		description: "",
		loader: "",
		closeButton: "",
		cancelButton: "",
		actionButton: "",
		action: "",
		warning: "",
		error: "",
		success: "",
		default: "",
		info: "",
		loading: "",
	};
function Fn(n) {
	const [t, i] = n.split("-"),
		h = [];
	return t && h.push(t), i && h.push(i), h;
}
function ze(n) {
	return 1 / (1.5 + Math.abs(n) / 20);
}
var Un = et("<div><!></div>"),
	jn = (n, t, i, h, D) => {
		var k, V;
		e(t) ||
			!e(i) ||
			(h(), (V = (k = D.toast).onDismiss) == null || V.call(k, D.toast));
	},
	zn = et('<button data-close-button=""><!></button>'),
	Vn = et('<div data-icon=""><!> <!></div>'),
	Wn = et('<div data-description=""><!></div>'),
	Kn = (n, t, i, h) => {
		var D, k;
		ce(t.toast.cancel) &&
			e(i) &&
			((k = (D = t.toast.cancel) == null ? void 0 : D.onClick) == null ||
				k.call(D, n),
			h());
	},
	Yn = et('<button data-button="" data-cancel=""> </button>'),
	Zn = (n, t, i) => {
		var h;
		ce(t.toast.action) &&
			((h = t.toast.action) == null || h.onClick(n),
			!n.defaultPrevented && i());
	},
	Gn = et('<button data-button=""> </button>'),
	Xn = et(
		'<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>',
		1
	),
	qn = et('<li data-sonner-toast=""><!> <!></li>');
function Jn(n, t) {
	de(t, !0);
	const i = (r) => {
		var c = g(),
			I = v(c);
		{
			var S = (_) => {
					var K = Un(),
						tt = ot(K);
					it(tt, () => t.loadingIcon),
						p(K),
						Q(
							(Y) => {
								Tt(K, 1, Y), M(K, "data-visible", e(A) === "loading");
							},
							[
								() => {
									var Y, U, m;
									return It(
										xt(
											(Y = e(at)) == null ? void 0 : Y.loader,
											(m = (U = t.toast) == null ? void 0 : U.classes) == null
												? void 0
												: m.loader,
											"sonner-loader"
										)
									);
								},
							]
						),
						a(_, K);
				},
				B = (_) => {
					{
						let K = w(() => {
								var Y, U;
								return xt(
									(Y = e(at)) == null ? void 0 : Y.loader,
									(U = t.toast.classes) == null ? void 0 : U.loader
								);
							}),
							tt = w(() => e(A) === "loading");
						En(_, {
							get class() {
								return e(K);
							},
							get visible() {
								return e(tt);
							},
						});
					}
				};
			T(I, (_) => {
				t.loadingIcon ? _(S) : _(B, !1);
			});
		}
		a(r, c);
	};
	let h = O(t, "cancelButtonStyle", 3, ""),
		D = O(t, "actionButtonStyle", 3, ""),
		k = O(t, "descriptionClass", 3, ""),
		V = O(t, "unstyled", 3, !1),
		Bt = O(t, "defaultRichColors", 3, !1);
	const $ = { ...Nn };
	let L = H(!1),
		q = H(!1),
		Ot = H(!1),
		jt = H(!1),
		zt = H(!1),
		J = H(0),
		bt = H(0),
		kt = t.toast.duration || t.duration || je,
		nt = H(void 0),
		ut = H(null),
		Vt = H(null);
	const fe = w(() => t.index === 0),
		ve = w(() => t.index + 1 <= t.visibleToasts),
		A = w(() => t.toast.type),
		ft = w(() => t.toast.dismissable !== !1),
		Mt = w(() => t.toast.class || ""),
		Et = w(() => t.toast.descriptionClass || ""),
		vt = w(() => G.heights.findIndex((r) => r.toastId === t.toast.id) || 0),
		Ct = w(() => t.toast.closeButton ?? t.closeButton),
		me = w(() => t.toast.duration ?? t.duration ?? je);
	let Dt = null;
	const ae = w(() => t.position.split("-")),
		ge = w(() =>
			G.heights.reduce((r, c, I) => (I >= e(vt) ? r : r + c.height), 0)
		),
		he = Pn(),
		_e = w(() => t.toast.invert || t.invert),
		Wt = w(() => e(A) === "loading"),
		at = w(() => ({ ...$, ...t.classes })),
		be = w(() => t.toast.title),
		Lt = w(() => t.toast.description);
	let Kt = H(0),
		oe = H(0);
	const l = w(() => Math.round(e(vt) * On + e(ge)));
	_t(() => {
		e(be), e(Lt);
		let r;
		t.expanded || t.expandByDefault ? (r = 1) : (r = 1 - t.index * Rn);
		const c = $t(() => e(nt));
		if (c === void 0) return;
		c.style.setProperty("height", "auto");
		const I = c.offsetHeight,
			S = c.getBoundingClientRect().height,
			B = Math.round((S / r + Number.EPSILON) & 100) / 100;
		c.style.removeProperty("height");
		let _;
		Math.abs(B - I) < 1 ? (_ = B) : (_ = I),
			u(bt, _, !0),
			$t(() => {
				G.setHeight({ toastId: t.toast.id, height: _ });
			});
	});
	function f() {
		u(q, !0),
			u(J, e(l), !0),
			G.removeHeight(t.toast.id),
			setTimeout(() => {
				G.remove(t.toast.id);
			}, Hn);
	}
	let F;
	const wt = w(
		() =>
			(t.toast.promise && e(A) === "loading") ||
			t.toast.duration === Number.POSITIVE_INFINITY
	);
	function st() {
		u(Kt, new Date().getTime(), !0),
			(F = setTimeout(() => {
				var r, c;
				(c = (r = t.toast).onAutoClose) == null || c.call(r, t.toast), f();
			}, kt));
	}
	function Ht() {
		if (e(oe) < e(Kt)) {
			const r = new Date().getTime() - e(Kt);
			kt = kt - r;
		}
		u(oe, new Date().getTime(), !0);
	}
	_t(() => {
		t.toast.updated && (clearTimeout(F), (kt = e(me)), st());
	}),
		_t(
			() => (
				e(wt) || (t.expanded || t.interacting || he.current ? Ht() : st()),
				() => clearTimeout(F)
			)
		),
		pt(() => {
			var c;
			u(L, !0);
			const r = (c = e(nt)) == null ? void 0 : c.getBoundingClientRect().height;
			return (
				u(bt, r, !0),
				G.setHeight({ toastId: t.toast.id, height: r }),
				() => {
					G.removeHeight(t.toast.id);
				}
			);
		}),
		_t(() => {
			t.toast.delete &&
				$t(() => {
					var r, c;
					f(), (c = (r = t.toast).onDismiss) == null || c.call(r, t.toast);
				});
		});
	const Oe = (r) => {
			if (e(Wt)) return;
			u(J, e(l), !0);
			const c = r.target;
			c.setPointerCapture(r.pointerId),
				c.tagName !== "BUTTON" &&
					(u(Ot, !0), (Dt = { x: r.clientX, y: r.clientY }));
		},
		ie = () => {
			var _, K, tt, Y, U, m;
			if (e(jt) || !e(ft)) return;
			Dt = null;
			const r = Number(
					((_ = e(nt)) == null
						? void 0
						: _.style.getPropertyValue("--swipe-amount-x").replace("px", "")) ||
						0
				),
				c = Number(
					((K = e(nt)) == null
						? void 0
						: K.style.getPropertyValue("--swipe-amount-y").replace("px", "")) ||
						0
				),
				I = new Date().getTime() - 0,
				S = e(ut) === "x" ? r : c,
				B = Math.abs(S) / I;
			if (Math.abs(S) >= kn || B > 0.11) {
				u(J, e(l), !0),
					(Y = (tt = t.toast).onDismiss) == null || Y.call(tt, t.toast),
					e(ut) === "x"
						? u(Vt, r > 0 ? "right" : "left", !0)
						: u(Vt, c > 0 ? "down" : "up", !0),
					f(),
					u(jt, !0);
				return;
			} else
				(U = e(nt)) == null || U.style.setProperty("--swipe-amount-x", "0px"),
					(m = e(nt)) == null || m.style.setProperty("--swipe-amount-y", "0px");
			u(zt, !1), u(Ot, !1), u(ut, null);
		},
		mt = (r) => {
			var K, tt, Y;
			if (
				!Dt ||
				!e(ft) ||
				(((K = window.getSelection()) == null ? void 0 : K.toString().length) ??
					-1) > 0
			)
				return;
			const I = r.clientY - Dt.y,
				S = r.clientX - Dt.x,
				B = t.swipeDirections ?? Fn(t.position);
			!e(ut) &&
				(Math.abs(S) > 1 || Math.abs(I) > 1) &&
				u(ut, Math.abs(S) > Math.abs(I) ? "x" : "y", !0);
			let _ = { x: 0, y: 0 };
			if (e(ut) === "y") {
				if (B.includes("top") || B.includes("bottom"))
					if ((B.includes("top") && I < 0) || (B.includes("bottom") && I > 0))
						_.y = I;
					else {
						const U = I * ze(I);
						_.y = Math.abs(U) < Math.abs(I) ? U : I;
					}
			} else if (e(ut) === "x" && (B.includes("left") || B.includes("right")))
				if ((B.includes("left") && S < 0) || (B.includes("right") && S > 0))
					_.x = S;
				else {
					const U = S * ze(S);
					_.x = Math.abs(U) < Math.abs(S) ? U : S;
				}
			(Math.abs(_.x) > 0 || Math.abs(_.y) > 0) && u(zt, !0),
				(tt = e(nt)) == null ||
					tt.style.setProperty("--swipe-amount-x", `${_.x}px`),
				(Y = e(nt)) == null ||
					Y.style.setProperty("--swipe-amount-y", `${_.y}px`);
		},
		yt = () => {
			u(Ot, !1), u(ut, null), (Dt = null);
		},
		W = w(() =>
			t.toast.icon
				? t.toast.icon
				: e(A) === "success"
				? t.successIcon
				: e(A) === "error"
				? t.errorIcon
				: e(A) === "warning"
				? t.warningIcon
				: e(A) === "info"
				? t.infoIcon
				: e(A) === "loading"
				? t.loadingIcon
				: null
		);
	var y = qn();
	M(y, "tabindex", 0);
	let se;
	(y.__pointermove = mt), (y.__pointerup = ie), (y.__pointerdown = Oe);
	var we = ot(y);
	{
		var ye = (r) => {
			var c = zn();
			c.__click = [jn, Wt, ft, f, t];
			var I = ot(c);
			it(I, () => t.closeIcon ?? ht),
				p(c),
				Q(
					(S) => {
						M(c, "aria-label", t.closeButtonAriaLabel),
							M(c, "data-disabled", e(Wt)),
							Tt(c, 1, S);
					},
					[
						() => {
							var S, B, _;
							return It(
								xt(
									(S = e(at)) == null ? void 0 : S.closeButton,
									(_ = (B = t.toast) == null ? void 0 : B.classes) == null
										? void 0
										: _.closeButton
								)
							);
						},
					]
				),
				a(r, c);
		};
		T(we, (r) => {
			e(Ct) &&
				!t.toast.component &&
				e(A) !== "loading" &&
				t.closeIcon !== null &&
				r(ye);
		});
	}
	var xe = At(we, 2);
	{
		var Ie = (r) => {
				const c = w(() => t.toast.component);
				var I = g(),
					S = v(I);
				Pt(
					S,
					() => e(c),
					(B, _) => {
						_(
							B,
							Ae(() => t.toast.componentProps, { closeToast: f })
						);
					}
				),
					a(r, I);
			},
			Te = (r) => {
				var c = Xn(),
					I = v(c);
				{
					var S = (x) => {
						var o = Vn(),
							d = ot(o);
						{
							var E = (b) => {
								var C = g(),
									j = v(C);
								{
									var N = (Z) => {
											var z = g(),
												ct = v(z);
											Pt(
												ct,
												() => t.toast.icon,
												(dt, Yt) => {
													Yt(dt, {});
												}
											),
												a(Z, z);
										},
										P = (Z) => {
											i(Z);
										};
									T(j, (Z) => {
										t.toast.icon ? Z(N) : Z(P, !1);
									});
								}
								a(b, C);
							};
							T(d, (b) => {
								(t.toast.promise || e(A) === "loading") && b(E);
							});
						}
						var R = At(d, 2);
						{
							var s = (b) => {
								var C = g(),
									j = v(C);
								{
									var N = (Z) => {
											var z = g(),
												ct = v(z);
											Pt(
												ct,
												() => t.toast.icon,
												(dt, Yt) => {
													Yt(dt, {});
												}
											),
												a(Z, z);
										},
										P = (Z) => {
											var z = g(),
												ct = v(z);
											{
												var dt = (Rt) => {
														var Zt = g(),
															Se = v(Zt);
														it(Se, () => t.successIcon ?? ht), a(Rt, Zt);
													},
													Yt = (Rt) => {
														var Zt = g(),
															Se = v(Zt);
														{
															var qe = (Nt) => {
																	var Gt = g(),
																		Be = v(Gt);
																	it(Be, () => t.errorIcon ?? ht), a(Nt, Gt);
																},
																Je = (Nt) => {
																	var Gt = g(),
																		Be = v(Gt);
																	{
																		var Qe = (Ft) => {
																				var Xt = g(),
																					Ee = v(Xt);
																				it(Ee, () => t.warningIcon ?? ht),
																					a(Ft, Xt);
																			},
																			pe = (Ft) => {
																				var Xt = g(),
																					Ee = v(Xt);
																				{
																					var $e = (De) => {
																						var ke = g(),
																							tn = v(ke);
																						it(tn, () => t.infoIcon ?? ht),
																							a(De, ke);
																					};
																					T(
																						Ee,
																						(De) => {
																							e(A) === "info" && De($e);
																						},
																						!0
																					);
																				}
																				a(Ft, Xt);
																			};
																		T(
																			Be,
																			(Ft) => {
																				e(A) === "warning"
																					? Ft(Qe)
																					: Ft(pe, !1);
																			},
																			!0
																		);
																	}
																	a(Nt, Gt);
																};
															T(
																Se,
																(Nt) => {
																	e(A) === "error" ? Nt(qe) : Nt(Je, !1);
																},
																!0
															);
														}
														a(Rt, Zt);
													};
												T(
													ct,
													(Rt) => {
														e(A) === "success" ? Rt(dt) : Rt(Yt, !1);
													},
													!0
												);
											}
											a(Z, z);
										};
									T(j, (Z) => {
										t.toast.icon ? Z(N) : Z(P, !1);
									});
								}
								a(b, C);
							};
							T(R, (b) => {
								t.toast.type !== "loading" && b(s);
							});
						}
						p(o),
							Q(
								(b) => Tt(o, 1, b),
								[
									() => {
										var b, C, j;
										return It(
											xt(
												(b = e(at)) == null ? void 0 : b.icon,
												(j = (C = t.toast) == null ? void 0 : C.classes) == null
													? void 0
													: j.icon
											)
										);
									},
								]
							),
							a(x, o);
					};
					T(I, (x) => {
						(e(A) || t.toast.icon || t.toast.promise) &&
							t.toast.icon !== null &&
							(e(W) !== null || t.toast.icon) &&
							x(S);
					});
				}
				var B = At(I, 2),
					_ = ot(B),
					K = ot(_);
				{
					var tt = (x) => {
						var o = g(),
							d = v(o);
						{
							var E = (s) => {
									const b = w(() => t.toast.title);
									var C = g(),
										j = v(C);
									Pt(
										j,
										() => e(b),
										(N, P) => {
											P(
												N,
												Ae(() => t.toast.componentProps)
											);
										}
									),
										a(s, C);
								},
								R = (s) => {
									var b = Fe();
									Q(() => Qt(b, t.toast.title)), a(s, b);
								};
							T(d, (s) => {
								typeof t.toast.title != "string" ? s(E) : s(R, !1);
							});
						}
						a(x, o);
					};
					T(K, (x) => {
						t.toast.title && x(tt);
					});
				}
				p(_);
				var Y = At(_, 2);
				{
					var U = (x) => {
						var o = Wn(),
							d = ot(o);
						{
							var E = (s) => {
									const b = w(() => t.toast.description);
									var C = g(),
										j = v(C);
									Pt(
										j,
										() => e(b),
										(N, P) => {
											P(
												N,
												Ae(() => t.toast.componentProps)
											);
										}
									),
										a(s, C);
								},
								R = (s) => {
									var b = Fe();
									Q(() => Qt(b, t.toast.description)), a(s, b);
								};
							T(d, (s) => {
								typeof t.toast.description != "string" ? s(E) : s(R, !1);
							});
						}
						p(o),
							Q(
								(s) => Tt(o, 1, s),
								[
									() => {
										var s, b;
										return It(
											xt(
												k(),
												e(Et),
												(s = e(at)) == null ? void 0 : s.description,
												(b = t.toast.classes) == null ? void 0 : b.description
											)
										);
									},
								]
							),
							a(x, o);
					};
					T(Y, (x) => {
						t.toast.description && x(U);
					});
				}
				p(B);
				var m = At(B, 2);
				{
					var X = (x) => {
						var o = g(),
							d = v(o);
						{
							var E = (s) => {
									var b = g(),
										C = v(b);
									Pt(
										C,
										() => t.toast.cancel,
										(j, N) => {
											N(j, {});
										}
									),
										a(s, b);
								},
								R = (s) => {
									var b = g(),
										C = v(b);
									{
										var j = (N) => {
											var P = Yn();
											P.__click = [Kn, t, ft, f];
											var Z = ot(P, !0);
											p(P),
												Q(
													(z) => {
														Me(P, t.toast.cancelButtonStyle ?? h()),
															Tt(P, 1, z),
															Qt(Z, t.toast.cancel.label);
													},
													[
														() => {
															var z, ct, dt;
															return It(
																xt(
																	(z = e(at)) == null ? void 0 : z.cancelButton,
																	(dt =
																		(ct = t.toast) == null
																			? void 0
																			: ct.classes) == null
																		? void 0
																		: dt.cancelButton
																)
															);
														},
													]
												),
												a(N, P);
										};
										T(
											C,
											(N) => {
												ce(t.toast.cancel) && N(j);
											},
											!0
										);
									}
									a(s, b);
								};
							T(d, (s) => {
								typeof t.toast.cancel == "function" ? s(E) : s(R, !1);
							});
						}
						a(x, o);
					};
					T(m, (x) => {
						t.toast.cancel && x(X);
					});
				}
				var rt = At(m, 2);
				{
					var lt = (x) => {
						var o = g(),
							d = v(o);
						{
							var E = (s) => {
									var b = g(),
										C = v(b);
									Pt(
										C,
										() => t.toast.action,
										(j, N) => {
											N(j, {});
										}
									),
										a(s, b);
								},
								R = (s) => {
									var b = g(),
										C = v(b);
									{
										var j = (N) => {
											var P = Gn();
											P.__click = [Zn, t, f];
											var Z = ot(P, !0);
											p(P),
												Q(
													(z) => {
														Me(P, t.toast.actionButtonStyle ?? D()),
															Tt(P, 1, z),
															Qt(Z, t.toast.action.label);
													},
													[
														() => {
															var z, ct, dt;
															return It(
																xt(
																	(z = e(at)) == null ? void 0 : z.actionButton,
																	(dt =
																		(ct = t.toast) == null
																			? void 0
																			: ct.classes) == null
																		? void 0
																		: dt.actionButton
																)
															);
														},
													]
												),
												a(N, P);
										};
										T(
											C,
											(N) => {
												ce(t.toast.action) && N(j);
											},
											!0
										);
									}
									a(s, b);
								};
							T(d, (s) => {
								typeof t.toast.action == "function" ? s(E) : s(R, !1);
							});
						}
						a(x, o);
					};
					T(rt, (x) => {
						t.toast.action && x(lt);
					});
				}
				Q(
					(x) => Tt(_, 1, x),
					[
						() => {
							var x, o, d;
							return It(
								xt(
									(x = e(at)) == null ? void 0 : x.title,
									(d = (o = t.toast) == null ? void 0 : o.classes) == null
										? void 0
										: d.title
								)
							);
						},
					]
				),
					a(r, c);
			};
		T(xe, (r) => {
			t.toast.component ? r(Ie) : r(Te, !1);
		});
	}
	p(y),
		Ke(
			y,
			(r) => u(nt, r),
			() => e(nt)
		),
		Q(
			(r, c, I, S) => {
				Tt(y, 1, r),
					M(y, "data-rich-colors", t.toast.richColors ?? Bt()),
					M(y, "data-styled", !(t.toast.component || t.toast.unstyled || V())),
					M(y, "data-mounted", e(L)),
					M(y, "data-promise", c),
					M(y, "data-swiped", e(zt)),
					M(y, "data-removed", e(q)),
					M(y, "data-visible", e(ve)),
					M(y, "data-y-position", e(ae)[0]),
					M(y, "data-x-position", e(ae)[1]),
					M(y, "data-index", t.index),
					M(y, "data-front", e(fe)),
					M(y, "data-swiping", e(Ot)),
					M(y, "data-dismissable", e(ft)),
					M(y, "data-type", e(A)),
					M(y, "data-invert", e(_e)),
					M(y, "data-swipe-out", e(jt)),
					M(y, "data-swipe-direction", e(Vt)),
					M(y, "data-expanded", I),
					(se = Me(y, `${t.style} ${t.toast.style}`, se, S));
			},
			[
				() => {
					var r, c, I, S, B, _;
					return It(
						xt(
							t.class,
							e(Mt),
							(r = e(at)) == null ? void 0 : r.toast,
							(I = (c = t.toast) == null ? void 0 : c.classes) == null
								? void 0
								: I.toast,
							(S = e(at)) == null ? void 0 : S[e(A)],
							(_ = (B = t.toast) == null ? void 0 : B.classes) == null
								? void 0
								: _[e(A)]
						)
					);
				},
				() => !!t.toast.promise,
				() => !!(t.expanded || (t.expandByDefault && e(L))),
				() => ({
					"--index": t.index,
					"--toasts-before": t.index,
					"--z-index": G.toasts.length - t.index,
					"--offset": `${e(q) ? e(J) : e(l)}px`,
					"--initial-height": t.expandByDefault ? "auto" : `${e(bt)}px`,
				}),
			]
		),
		We("dragend", y, yt),
		a(n, y),
		ue();
}
on(["pointermove", "pointerup", "pointerdown", "click"]);
var Qn = ne(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>'
);
function pn(n) {
	var t = Qn();
	a(n, t);
}
var $n = ne(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>'
);
function ta(n) {
	var t = $n();
	a(n, t);
}
var ea = ne(
	'<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>'
);
function na(n) {
	var t = ea();
	a(n, t);
}
var aa = ne(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>'
);
function oa(n) {
	var t = aa();
	a(n, t);
}
var ia = ne(
	'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
);
function sa(n) {
	var t = ia();
	a(n, t);
}
const ra = 3,
	Ye = "24px",
	Ze = "16px",
	la = 4e3,
	ca = 356,
	da = 14,
	Ce = "dark",
	re = "light";
function ua(n, t) {
	const i = {};
	return (
		[n, t].forEach((h, D) => {
			const k = D === 1,
				V = k ? "--mobile-offset" : "--offset",
				Bt = k ? Ze : Ye;
			function $(L) {
				["top", "right", "bottom", "left"].forEach((q) => {
					i[`${V}-${q}`] = typeof L == "number" ? `${L}px` : L;
				});
			}
			typeof h == "number" || typeof h == "string"
				? $(h)
				: typeof h == "object"
				? ["top", "right", "bottom", "left"].forEach((L) => {
						const q = h[L];
						q === void 0
							? (i[`${V}-${L}`] = Bt)
							: (i[`${V}-${L}`] = typeof q == "number" ? `${q}px` : q);
				  })
				: $(Bt);
		}),
		i
	);
}
var fa = et("<ol></ol>"),
	va = et(
		'<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-tppj9g"><!></section>'
	);
function ma(n, t) {
	de(t, !0);
	function i(l) {
		return l !== "system"
			? l
			: typeof window < "u" &&
			  window.matchMedia &&
			  window.matchMedia("(prefers-color-scheme: dark)").matches
			? Ce
			: re;
	}
	let h = O(t, "invert", 3, !1),
		D = O(t, "position", 3, "bottom-right"),
		k = O(t, "hotkey", 19, () => ["altKey", "KeyT"]),
		V = O(t, "expand", 3, !1),
		Bt = O(t, "closeButton", 3, !1),
		$ = O(t, "offset", 3, Ye),
		L = O(t, "mobileOffset", 3, Ze),
		q = O(t, "theme", 3, "light"),
		Ot = O(t, "richColors", 3, !1),
		jt = O(t, "duration", 3, la),
		zt = O(t, "visibleToasts", 3, ra),
		J = O(t, "toastOptions", 19, () => ({})),
		bt = O(t, "dir", 7, "auto"),
		kt = O(t, "gap", 3, da),
		nt = O(t, "containerAriaLabel", 3, "Notifications"),
		ut = O(t, "closeButtonAriaLabel", 3, "Close toast"),
		Vt = wn(t, [
			"$$slots",
			"$$events",
			"$$legacy",
			"invert",
			"position",
			"hotkey",
			"expand",
			"closeButton",
			"offset",
			"mobileOffset",
			"theme",
			"richColors",
			"duration",
			"visibleToasts",
			"toastOptions",
			"dir",
			"gap",
			"loadingIcon",
			"successIcon",
			"errorIcon",
			"warningIcon",
			"closeIcon",
			"infoIcon",
			"containerAriaLabel",
			"class",
			"closeButtonAriaLabel",
			"onblur",
			"onfocus",
			"onmouseenter",
			"onmousemove",
			"onmouseleave",
			"ondragend",
			"onpointerdown",
			"onpointerup",
		]);
	function fe() {
		if (bt() !== "auto") return bt();
		if (typeof window > "u" || typeof document > "u") return "ltr";
		const l = document.documentElement.getAttribute("dir");
		return l === "auto" || !l
			? ($t(() =>
					bt(
						window.getComputedStyle(document.documentElement).direction ?? "ltr"
					)
			  ),
			  bt())
			: ($t(() => bt(l)), l);
	}
	const ve = w(() =>
		Array.from(
			new Set(
				[
					D(),
					...G.toasts.filter((l) => l.position).map((l) => l.position),
				].filter(Boolean)
			)
		)
	);
	let A = H(!1),
		ft = H(!1),
		Mt = H(Ve(i(q()))),
		Et = H(void 0),
		vt = H(null),
		Ct = H(!1);
	const me = w(() => k().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
	_t(() => {
		G.toasts.length <= 1 && u(A, !1);
	}),
		_t(() => {
			const l = G.toasts.filter((f) => f.dismiss && !f.delete);
			if (l.length > 0) {
				const f = G.toasts.map((F) =>
					l.find((st) => st.id === F.id) ? { ...F, delete: !0 } : F
				);
				G.toasts = f;
			}
		}),
		_t(() => () => {
			e(Et) &&
				e(vt) &&
				(e(vt).focus({ preventScroll: !0 }), u(vt, null), u(Ct, !1));
		}),
		pt(
			() => (
				G.reset(),
				le(document, "keydown", (f) => {
					var wt, st;
					k().every((Ht) => f[Ht] || f.code === Ht) &&
						(u(A, !0), (wt = e(Et)) == null || wt.focus()),
						f.code === "Escape" &&
							(document.activeElement === e(Et) ||
								((st = e(Et)) != null &&
									st.contains(document.activeElement))) &&
							u(A, !1);
				})
			)
		),
		_t(() => {
			if ((q() !== "system" && u(Mt, q()), typeof window < "u")) {
				q() === "system" &&
					(window.matchMedia &&
					window.matchMedia("(prefers-color-scheme: dark)").matches
						? u(Mt, Ce)
						: u(Mt, re));
				const l = window.matchMedia("(prefers-color-scheme: dark)"),
					f = ({ matches: F }) => {
						u(Mt, F ? Ce : re, !0);
					};
				"addEventListener" in l
					? l.addEventListener("change", f)
					: l.addListener(f);
			}
		});
	const Dt = (l) => {
			var f;
			(f = t.onblur) == null || f.call(t, l),
				e(Ct) &&
					!l.currentTarget.contains(l.relatedTarget) &&
					(u(Ct, !1),
					e(vt) && (e(vt).focus({ preventScroll: !0 }), u(vt, null)));
		},
		ae = (l) => {
			var F;
			(F = t.onfocus) == null || F.call(t, l),
				!(
					l.target instanceof HTMLElement &&
					l.target.dataset.dismissable === "false"
				) &&
					(e(Ct) || (u(Ct, !0), u(vt, l.relatedTarget, !0)));
		},
		ge = (l) => {
			var F;
			(F = t.onpointerdown) == null || F.call(t, l),
				!(
					l.target instanceof HTMLElement &&
					l.target.dataset.dismissable === "false"
				) && u(ft, !0);
		},
		he = (l) => {
			var f;
			(f = t.onmouseenter) == null || f.call(t, l), u(A, !0);
		},
		_e = (l) => {
			var f;
			(f = t.onmouseleave) == null || f.call(t, l), e(ft) || u(A, !1);
		},
		Wt = (l) => {
			var f;
			(f = t.onmousemove) == null || f.call(t, l), u(A, !0);
		},
		at = (l) => {
			var f;
			(f = t.ondragend) == null || f.call(t, l), u(A, !1);
		},
		be = (l) => {
			var f;
			(f = t.onpointerup) == null || f.call(t, l), u(ft, !1);
		};
	Ln.set(new rn());
	var Lt = va();
	M(Lt, "tabindex", -1);
	var Kt = ot(Lt);
	{
		var oe = (l) => {
			var f = g(),
				F = v(f);
			Le(
				F,
				18,
				() => e(ve),
				(wt) => wt,
				(wt, st, Ht, Oe) => {
					const ie = w(() => {
							const [W, y] = st.split("-");
							return { y: W, x: y };
						}),
						mt = w(() => ua($(), L()));
					var yt = fa();
					yn(
						yt,
						(W, y) => ({
							tabindex: -1,
							dir: W,
							class: t.class,
							"data-sonner-toaster": !0,
							"data-sonner-theme": e(Mt),
							"data-y-position": e(ie).y,
							"data-x-position": e(ie).x,
							style: t.style,
							onblur: Dt,
							onfocus: ae,
							onmouseenter: he,
							onmousemove: Wt,
							onmouseleave: _e,
							ondragend: at,
							onpointerdown: ge,
							onpointerup: be,
							...Vt,
							[xn]: y,
						}),
						[
							fe,
							() => {
								var W;
								return {
									"--front-toast-height": `${
										(W = G.heights[0]) == null ? void 0 : W.height
									}px`,
									"--width": `${ca}px`,
									"--gap": `${kt()}px`,
									"--offset-top": e(mt)["--offset-top"],
									"--offset-right": e(mt)["--offset-right"],
									"--offset-bottom": e(mt)["--offset-bottom"],
									"--offset-left": e(mt)["--offset-left"],
									"--mobile-offset-top": e(mt)["--mobile-offset-top"],
									"--mobile-offset-right": e(mt)["--mobile-offset-right"],
									"--mobile-offset-bottom": e(mt)["--mobile-offset-bottom"],
									"--mobile-offset-left": e(mt)["--mobile-offset-left"],
								};
							},
						],
						void 0,
						"svelte-tppj9g"
					),
						Le(
							yt,
							23,
							() =>
								G.toasts.filter(
									(W) => (!W.position && e(Ht) === 0) || W.position === st
								),
							(W) => W.id,
							(W, y, se, we) => {
								{
									const ye = (m) => {
											var X = g(),
												rt = v(X);
											{
												var lt = (o) => {
														var d = g(),
															E = v(d);
														it(E, () => t.successIcon ?? ht), a(o, d);
													},
													x = (o) => {
														var d = g(),
															E = v(d);
														{
															var R = (s) => {
																pn(s);
															};
															T(
																E,
																(s) => {
																	t.successIcon !== null && s(R);
																},
																!0
															);
														}
														a(o, d);
													};
												T(rt, (o) => {
													t.successIcon ? o(lt) : o(x, !1);
												});
											}
											a(m, X);
										},
										xe = (m) => {
											var X = g(),
												rt = v(X);
											{
												var lt = (o) => {
														var d = g(),
															E = v(d);
														it(E, () => t.errorIcon ?? ht), a(o, d);
													},
													x = (o) => {
														var d = g(),
															E = v(d);
														{
															var R = (s) => {
																ta(s);
															};
															T(
																E,
																(s) => {
																	t.errorIcon !== null && s(R);
																},
																!0
															);
														}
														a(o, d);
													};
												T(rt, (o) => {
													t.errorIcon ? o(lt) : o(x, !1);
												});
											}
											a(m, X);
										},
										Ie = (m) => {
											var X = g(),
												rt = v(X);
											{
												var lt = (o) => {
														var d = g(),
															E = v(d);
														it(E, () => t.warningIcon ?? ht), a(o, d);
													},
													x = (o) => {
														var d = g(),
															E = v(d);
														{
															var R = (s) => {
																na(s);
															};
															T(
																E,
																(s) => {
																	t.warningIcon !== null && s(R);
																},
																!0
															);
														}
														a(o, d);
													};
												T(rt, (o) => {
													t.warningIcon ? o(lt) : o(x, !1);
												});
											}
											a(m, X);
										},
										Te = (m) => {
											var X = g(),
												rt = v(X);
											{
												var lt = (o) => {
														var d = g(),
															E = v(d);
														it(E, () => t.infoIcon ?? ht), a(o, d);
													},
													x = (o) => {
														var d = g(),
															E = v(d);
														{
															var R = (s) => {
																oa(s);
															};
															T(
																E,
																(s) => {
																	t.infoIcon !== null && s(R);
																},
																!0
															);
														}
														a(o, d);
													};
												T(rt, (o) => {
													t.infoIcon ? o(lt) : o(x, !1);
												});
											}
											a(m, X);
										},
										r = (m) => {
											var X = g(),
												rt = v(X);
											{
												var lt = (o) => {
														var d = g(),
															E = v(d);
														it(E, () => t.closeIcon ?? ht), a(o, d);
													},
													x = (o) => {
														var d = g(),
															E = v(d);
														{
															var R = (s) => {
																sa(s);
															};
															T(
																E,
																(s) => {
																	t.closeIcon !== null && s(R);
																},
																!0
															);
														}
														a(o, d);
													};
												T(rt, (o) => {
													t.closeIcon ? o(lt) : o(x, !1);
												});
											}
											a(m, X);
										};
									let c = w(() => {
											var m;
											return ((m = J()) == null ? void 0 : m.duration) ?? jt();
										}),
										I = w(() => {
											var m;
											return ((m = J()) == null ? void 0 : m.class) ?? "";
										}),
										S = w(() => {
											var m;
											return (
												((m = J()) == null ? void 0 : m.descriptionClass) || ""
											);
										}),
										B = w(() => {
											var m;
											return ((m = J()) == null ? void 0 : m.style) ?? "";
										}),
										_ = w(() => J().classes || {}),
										K = w(() => J().unstyled ?? !1),
										tt = w(() => {
											var m;
											return (
												((m = J()) == null ? void 0 : m.cancelButtonStyle) ?? ""
											);
										}),
										Y = w(() => {
											var m;
											return (
												((m = J()) == null ? void 0 : m.actionButtonStyle) ?? ""
											);
										}),
										U = w(() => {
											var m;
											return (
												((m = J()) == null ? void 0 : m.closeButtonAriaLabel) ??
												ut()
											);
										});
									Jn(W, {
										get index() {
											return e(se);
										},
										get toast() {
											return e(y);
										},
										get defaultRichColors() {
											return Ot();
										},
										get duration() {
											return e(c);
										},
										get class() {
											return e(I);
										},
										get descriptionClass() {
											return e(S);
										},
										get invert() {
											return h();
										},
										get visibleToasts() {
											return zt();
										},
										get closeButton() {
											return Bt();
										},
										get interacting() {
											return e(ft);
										},
										get position() {
											return st;
										},
										get style() {
											return e(B);
										},
										get classes() {
											return e(_);
										},
										get unstyled() {
											return e(K);
										},
										get cancelButtonStyle() {
											return e(tt);
										},
										get actionButtonStyle() {
											return e(Y);
										},
										get closeButtonAriaLabel() {
											return e(U);
										},
										get expandByDefault() {
											return V();
										},
										get expanded() {
											return e(A);
										},
										get loadingIcon() {
											return t.loadingIcon;
										},
										successIcon: ye,
										errorIcon: xe,
										warningIcon: Ie,
										infoIcon: Te,
										closeIcon: r,
										$$slots: {
											successIcon: !0,
											errorIcon: !0,
											warningIcon: !0,
											infoIcon: !0,
											closeIcon: !0,
										},
									});
								}
							}
						),
						p(yt),
						Ke(
							yt,
							(W) => u(Et, W),
							() => e(Et)
						),
						Q(() => (yt.dir = yt.dir)),
						a(wt, yt);
				}
			),
				a(l, f);
		};
		T(Kt, (l) => {
			G.toasts.length > 0 && l(oe);
		});
	}
	p(Lt),
		Q(() => M(Lt, "aria-label", `${nt() ?? ""} ${e(me) ?? ""}`)),
		a(n, Lt),
		ue();
}
const ga =
	"" + new URL("../assets/pawtect_wasm_bg.BvxCe1S1.wasm", import.meta.url).href;
let Ge = H(!1);
function ha() {
	const n = ln("2025-09_pawtect");
	if (!n) throw new Error("pawtect experiment not found on load");
	n.variant !== "disabled" && (e(Ge) || (Pe.data && cn(ga).then(_a)));
}
function _a() {
	dn(Pe.data.id), un.postPawtectLoad();
	const n = fetch;
	Object.assign(window, {
		fetch: Xe((t, i) => {
			let h = null;
			return (
				t instanceof Request ? (h = t.url) : (h = t),
				h.startsWith("/") || fn(h),
				n.call(window, t, i)
			);
		}),
	}),
		u(Ge, !0);
}
function Xe(n) {
	return n.bind().bind();
}
function ba(n, t, i) {
	const h = {
		[n.name](...D) {
			return i(...D), t(...D);
		},
	}[n.name];
	return Xe(h);
}
var wa = et('<span class="hidden"> </span> <!> <!>', 1);
function Ha(n, t) {
	de(t, !0),
		pt(() => {
			vn(),
				Pe.refresh().then((L) => {
					L && ha();
				}),
				Object.assign(window, {
					eval: ba(
						eval,
						function () {},
						async () => {
							await fetch(mn + "/me", {
								credentials: "include",
								headers: { Authorization: "Bearer " + crypto.randomUUID() },
							});
						}
					),
				});
			let $ = setInterval(() => {
				_n();
			}, 5e3);
			return () => {
				clearTimeout($);
			};
		});
	const i = "muted";
	pt(() => {
		Ue.muted = localStorage.getItem(i) === "1";
	}),
		_t(() => {
			{
				const $ = Ue.muted;
				document.querySelectorAll("audio").forEach((L) => {
					L.muted = $;
				});
				for (const L of Object.values(hn)) (L.muted = $), $ || (L.volume = 0.3);
				localStorage.setItem(i, Number($).toString());
			}
		}),
		pt(() => {});
	var h = wa();
	We("beforeunload", sn, () => {
		bn();
	});
	var D = v(h),
		k = ot(D);
	p(D);
	var V = At(D, 2);
	it(V, () => t.children);
	var Bt = At(V, 2);
	ma(Bt, {
		closeButton: !0,
		richColors: !0,
		position: "top-right",
		class: "!top-15",
		duration: 3e3,
	}),
		Q(() => Qt(k, `Version: ${en}`)),
		a(n, h),
		ue();
}
export { Ha as component, ka as universal };

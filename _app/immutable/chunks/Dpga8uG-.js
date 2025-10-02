import {
	F as E,
	G as _,
	l as v,
	z as g,
	H as i,
	I as S,
	h as k,
	J as I,
	K as D,
	L as y,
} from "./CMvZtFtm.js";
(function () {
	try {
		var e =
			typeof window < "u"
				? window
				: typeof global < "u"
				? global
				: typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
				? self
				: {};
		e.SENTRY_RELEASE = { id: "9ccec90dcd6b8d85831cf2b37643f1564d033383" };
	} catch {}
})();
try {
	(function () {
		var e =
				typeof window < "u"
					? window
					: typeof global < "u"
					? global
					: typeof globalThis < "u"
					? globalThis
					: typeof self < "u"
					? self
					: {},
			d = new e.Error().stack;
		d &&
			((e._sentryDebugIds = e._sentryDebugIds || {}),
			(e._sentryDebugIds[d] = "6fc49d13-f7d8-42d1-9723-e4fb7b109694"),
			(e._sentryDebugIdIdentifier =
				"sentry-dbid-6fc49d13-f7d8-42d1-9723-e4fb7b109694"));
	})();
} catch {}
function A(e, d, l = d) {
	var r = E(),
		f = new WeakSet();
	_(e, "input", (s) => {
		var a = s ? e.defaultValue : e.value;
		if (
			((a = h(e) ? b(a) : a),
			l(a),
			v !== null && f.add(v),
			r && a !== (a = d()))
		) {
			var t = e.selectionStart,
				n = e.selectionEnd;
			(e.value = a ?? ""),
				n !== null &&
					((e.selectionStart = t),
					(e.selectionEnd = Math.min(n, e.value.length)));
		}
	}),
		((k && e.defaultValue !== e.value) || (g(d) == null && e.value)) &&
			(l(h(e) ? b(e.value) : e.value), v !== null && f.add(v)),
		i(() => {
			var s = d();
			if (e === document.activeElement) {
				var a = S ?? v;
				if (f.has(a)) return;
			}
			(h(e) && s === b(e.value)) ||
				(e.type === "date" && !s && !e.value) ||
				(s !== e.value && (e.value = s ?? ""));
		});
}
const u = new Set();
function C(e, d, l, r, f = r) {
	var s = l.getAttribute("type") === "checkbox",
		a = e;
	let t = !1;
	if (d !== null) for (var n of d) a = a[n] ?? (a[n] = []);
	a.push(l),
		_(
			l,
			"change",
			() => {
				var c = l.__value;
				s && (c = m(a, c, l.checked)), f(c);
			},
			() => f(s ? [] : null)
		),
		i(() => {
			var c = r();
			if (k && l.defaultChecked !== l.checked) {
				t = !0;
				return;
			}
			s
				? ((c = c || []), (l.checked = c.includes(l.__value)))
				: (l.checked = I(l.__value, c));
		}),
		D(() => {
			var c = a.indexOf(l);
			c !== -1 && a.splice(c, 1);
		}),
		u.has(a) ||
			(u.add(a),
			y(() => {
				a.sort((c, o) => (c.compareDocumentPosition(o) === 4 ? -1 : 1)),
					u.delete(a);
			})),
		y(() => {
			if (t) {
				var c;
				if (s) c = m(a, c, l.checked);
				else {
					var o = a.find((w) => w.checked);
					c = o == null ? void 0 : o.__value;
				}
				f(c);
			}
		});
}
function L(e, d, l = d) {
	_(e, "change", (r) => {
		var f = r ? e.defaultChecked : e.checked;
		l(f);
	}),
		((k && e.defaultChecked !== e.checked) || g(d) == null) && l(e.checked),
		i(() => {
			var r = d();
			e.checked = !!r;
		});
}
function m(e, d, l) {
	for (var r = new Set(), f = 0; f < e.length; f += 1)
		e[f].checked && r.add(e[f].__value);
	return l || r.delete(d), Array.from(r);
}
function h(e) {
	var d = e.type;
	return d === "number" || d === "range";
}
function b(e) {
	return e === "" ? null : +e;
}
export { L as a, A as b, C as c };

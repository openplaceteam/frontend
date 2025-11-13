import {
  K as _,
  L as t,
  M as E,
  F as w,
  N as i,
  O as S,
  h as k,
  P as D,
  Q as I,
  R as y,
} from "./iK5FT0Sa.js";
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
    e.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
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
      c = new e.Error().stack;
    c &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[c] = "8b856484-ca94-4eff-bdc2-dd6a265020d9"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-8b856484-ca94-4eff-bdc2-dd6a265020d9"));
  })();
} catch {}
function A(e, c, l = c) {
  var r = new WeakSet();
  _(e, "input", async (d) => {
    var o = d ? e.defaultValue : e.value;
    if (
      ((o = h(e) ? u(o) : o),
      l(o),
      t !== null && r.add(t),
      await E(),
      o !== (o = c()))
    ) {
      var f = e.selectionStart,
        s = e.selectionEnd,
        v = e.value.length;
      if (((e.value = o ?? ""), s !== null)) {
        var a = e.value.length;
        f === s && s === v && a > v
          ? ((e.selectionStart = a), (e.selectionEnd = a))
          : ((e.selectionStart = f), (e.selectionEnd = Math.min(s, a)));
      }
    }
  }),
    ((k && e.defaultValue !== e.value) || (w(c) == null && e.value)) &&
      (l(h(e) ? u(e.value) : e.value), t !== null && r.add(t)),
    i(() => {
      var d = c();
      if (e === document.activeElement) {
        var o = S ?? t;
        if (r.has(o)) return;
      }
      (h(e) && d === u(e.value)) ||
        (e.type === "date" && !d && !e.value) ||
        (d !== e.value && (e.value = d ?? ""));
    });
}
const b = new Set();
function C(e, c, l, r, d = r) {
  var o = l.getAttribute("type") === "checkbox",
    f = e;
  let s = !1;
  if (c !== null) for (var v of c) f = f[v] ?? (f[v] = []);
  f.push(l),
    _(
      l,
      "change",
      () => {
        var a = l.__value;
        o && (a = m(f, a, l.checked)), d(a);
      },
      () => d(o ? [] : null)
    ),
    i(() => {
      var a = r();
      if (k && l.defaultChecked !== l.checked) {
        s = !0;
        return;
      }
      o
        ? ((a = a || []), (l.checked = a.includes(l.__value)))
        : (l.checked = D(l.__value, a));
    }),
    I(() => {
      var a = f.indexOf(l);
      a !== -1 && f.splice(a, 1);
    }),
    b.has(f) ||
      (b.add(f),
      y(() => {
        f.sort((a, n) => (a.compareDocumentPosition(n) === 4 ? -1 : 1)),
          b.delete(f);
      })),
    y(() => {
      if (s) {
        var a;
        if (o) a = m(f, a, l.checked);
        else {
          var n = f.find((g) => g.checked);
          a = n == null ? void 0 : n.__value;
        }
        d(a);
      }
    });
}
function R(e, c, l = c) {
  _(e, "change", (r) => {
    var d = r ? e.defaultChecked : e.checked;
    l(d);
  }),
    ((k && e.defaultChecked !== e.checked) || w(c) == null) && l(e.checked),
    i(() => {
      var r = c();
      e.checked = !!r;
    });
}
function m(e, c, l) {
  for (var r = new Set(), d = 0; d < e.length; d += 1)
    e[d].checked && r.add(e[d].__value);
  return l || r.delete(c), Array.from(r);
}
function h(e) {
  var c = e.type;
  return c === "number" || c === "range";
}
function u(e) {
  return e === "" ? null : +e;
}
export { R as a, A as b, C as c };

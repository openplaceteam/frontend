import {
  j as p,
  E as g,
  B as h,
  h as m,
  i as v,
  at as w,
  as as E,
  Q as x,
  a1 as C,
  W as T,
  av as c,
  D as A,
  A as a,
  aw as D,
  F as u,
  ax as _,
  ay as S,
  ac as k,
  az as b,
  aA as I,
  aB as R,
  aC as F,
  aD as M,
  aE as j,
  aF as B,
  aG as N,
  aH as P,
  M as z,
} from "./iK5FT0Sa.js";
import { h as O, m as U, u as $ } from "./BHnQYZx5.js";
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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "74d7dda5-da14-43b5-9c29-a6d5d78c885c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-74d7dda5-da14-43b5-9c29-a6d5d78c885c"));
  })();
} catch {}
function V(e, n, ...s) {
  var o = new h(e);
  p(() => {
    const t = n() ?? null;
    o.ensure(t, t && ((r) => t(r, ...s)));
  }, g);
}
function G(e) {
  return (n, ...s) => {
    var i;
    var o = e(...s),
      t;
    if (m) (t = C), v();
    else {
      var r = o.render().trim(),
        f = w(r);
      (t = T(f)), n.before(t);
    }
    const l = (i = o.setup) == null ? void 0 : i.call(o, t);
    E(t, t), typeof l == "function" && x(l);
  };
}
function H() {
  var e;
  return (
    _ === null && S(), ((e = _).ac ?? (e.ac = new AbortController())).signal
  );
}
function y(e) {
  a === null && c(),
    D && a.l !== null
      ? d(a).m.push(e)
      : A(() => {
          const n = u(e);
          if (typeof n == "function") return n;
        });
}
function L(e) {
  a === null && c(), y(() => () => u(e));
}
function Q(e, n, { bubbles: s = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(e, { detail: n, bubbles: s, cancelable: o });
}
function W() {
  const e = a;
  return (
    e === null && c(),
    (n, s, o) => {
      var r;
      const t = (r = e.s.$$events) == null ? void 0 : r[n];
      if (t) {
        const f = k(t) ? t.slice() : [t],
          l = Q(n, s, o);
        for (const i of f) i.call(e.x, l);
        return !l.defaultPrevented;
      }
      return !0;
    }
  );
}
function Y(e) {
  a === null && c(), a.l === null && b(), d(a).b.push(e);
}
function q(e) {
  a === null && c(), a.l === null && b(), d(a).a.push(e);
}
function d(e) {
  var n = e.l;
  return n.u ?? (n.u = { a: [], b: [], m: [] });
}
const X = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterUpdate: q,
      beforeUpdate: Y,
      createContext: I,
      createEventDispatcher: W,
      createRawSnippet: G,
      flushSync: R,
      fork: F,
      getAbortSignal: H,
      getAllContexts: M,
      getContext: j,
      hasContext: B,
      hydrate: O,
      mount: U,
      onDestroy: L,
      onMount: y,
      setContext: N,
      settled: P,
      tick: z,
      unmount: $,
      untrack: u,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { X as a, y as o, V as s };

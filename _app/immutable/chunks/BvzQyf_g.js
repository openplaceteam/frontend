var L = (e) => {
  throw TypeError(e);
};
var W = (e, t, n) => t.has(e) || L("Cannot " + n);
var a = (e, t, n) => (
    W(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  f = (e, t, n) =>
    t.has(e)
      ? L("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n);
import { o as O } from "./Ba2x20r8.js";
import { x as I, bx as X, l as d, g as h, o as g } from "./iK5FT0Sa.js";
import { v as J } from "./IsOmSjXL.js";
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
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "3ecad107-9481-408a-aca8-82670f35d8f5"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-3ecad107-9481-408a-aca8-82670f35d8f5"));
  })();
} catch {}
const b = [];
function z(e, t = I) {
  let n = null;
  const s = new Set();
  function r(o) {
    if (X(e, o) && ((e = o), n)) {
      const u = !b.length;
      for (const c of s) c[1](), b.push(c, e);
      if (u) {
        for (let c = 0; c < b.length; c += 2) b[c][0](b[c + 1]);
        b.length = 0;
      }
    }
  }
  function l(o) {
    r(o(e));
  }
  function i(o, u = I) {
    const c = [o, u];
    return (
      s.add(c),
      s.size === 1 && (n = t(r, l) || I),
      o(e),
      () => {
        s.delete(c), s.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return { set: r, update: l, subscribe: i };
}
new URL("sveltekit-internal://");
function le(e, t) {
  return e === "/" || t === "ignore"
    ? e
    : t === "never"
    ? e.endsWith("/")
      ? e.slice(0, -1)
      : e
    : t === "always" && !e.endsWith("/")
    ? e + "/"
    : e;
}
function ce(e) {
  return e.split("%25").map(decodeURI).join("%25");
}
function ue(e) {
  for (const t in e) e[t] = decodeURIComponent(e[t]);
  return e;
}
function fe({ href: e }) {
  return e.split("#")[0];
}
function M(...e) {
  let t = 5381;
  for (const n of e)
    if (typeof n == "string") {
      let s = n.length;
      for (; s; ) t = (t * 33) ^ n.charCodeAt(--s);
    } else if (ArrayBuffer.isView(n)) {
      const s = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
      let r = s.length;
      for (; r; ) t = (t * 33) ^ s[--r];
    } else throw new TypeError("value must be a string or TypedArray");
  return (t >>> 0).toString(36);
}
new TextEncoder();
new TextDecoder();
function F(e) {
  const t = atob(e),
    n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s++) n[s] = t.charCodeAt(s);
  return n;
}
const Q = window.fetch;
window.fetch = (e, t) => (
  (e instanceof Request
    ? e.method
    : (t == null ? void 0 : t.method) || "GET") !== "GET" && p.delete(N(e)),
  Q(e, t)
);
const p = new Map();
function de(e, t) {
  const n = N(e, t),
    s = document.querySelector(n);
  if (s != null && s.textContent) {
    s.remove();
    let { body: r, ...l } = JSON.parse(s.textContent);
    const i = s.getAttribute("data-ttl");
    return (
      i && p.set(n, { body: r, init: l, ttl: 1e3 * Number(i) }),
      s.getAttribute("data-b64") !== null && (r = F(r)),
      Promise.resolve(new Response(r, l))
    );
  }
  return window.fetch(e, t);
}
function he(e, t, n) {
  if (p.size > 0) {
    const s = N(e, n),
      r = p.get(s);
    if (r) {
      if (
        performance.now() < r.ttl &&
        ["default", "force-cache", "only-if-cached", void 0].includes(
          n == null ? void 0 : n.cache
        )
      )
        return new Response(r.body, r.init);
      p.delete(s);
    }
  }
  return window.fetch(t, n);
}
function N(e, t) {
  let s = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
    e instanceof Request ? e.url : e
  )}]`;
  if ((t != null && t.headers) || (t != null && t.body)) {
    const r = [];
    t.headers && r.push([...new Headers(t.headers)].join(",")),
      t.body &&
        (typeof t.body == "string" || ArrayBuffer.isView(t.body)) &&
        r.push(t.body),
      (s += `[data-hash="${M(...r)}"]`);
  }
  return s;
}
var C;
const Z = ((C = globalThis.__sveltekit_5mbzg3) == null ? void 0 : C.base) ?? "";
var P;
const ee =
    ((P = globalThis.__sveltekit_5mbzg3) == null ? void 0 : P.assets) ??
    Z ??
    "",
  ge = "sveltekit:snapshot",
  be = "sveltekit:scroll",
  _e = "sveltekit:states",
  pe = "sveltekit:pageurl",
  we = "sveltekit:history",
  ye = "sveltekit:navigation",
  $ = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
  G = location.origin;
function me(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const n = document.getElementsByTagName("base");
    t = n.length ? n[0].href : document.URL;
  }
  return new URL(e, t);
}
function ve() {
  return { x: pageXOffset, y: pageYOffset };
}
function _(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const q = { ...$, "": $.hover };
function H(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function Se(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = H(e);
  }
}
function Re(e, t, n) {
  let s;
  try {
    if (
      ((s = new URL(
        e instanceof SVGAElement ? e.href.baseVal : e.href,
        document.baseURI
      )),
      n && s.hash.match(/^#[^/]/))
    ) {
      const o = location.hash.split("#")[1] || "/";
      s.hash = `#${o}${s.hash}`;
    }
  } catch {}
  const r = e instanceof SVGAElement ? e.target.baseVal : e.target,
    l =
      !s ||
      !!r ||
      te(s, t, n) ||
      (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
    i = (s == null ? void 0 : s.origin) === G && e.hasAttribute("download");
  return { url: s, external: l, target: r, download: i };
}
function Te(e) {
  let t = null,
    n = null,
    s = null,
    r = null,
    l = null,
    i = null,
    o = e;
  for (; o && o !== document.documentElement; )
    s === null && (s = _(o, "preload-code")),
      r === null && (r = _(o, "preload-data")),
      t === null && (t = _(o, "keepfocus")),
      n === null && (n = _(o, "noscroll")),
      l === null && (l = _(o, "reload")),
      i === null && (i = _(o, "replacestate")),
      (o = H(o));
  function u(c) {
    switch (c) {
      case "":
      case "true":
        return !0;
      case "off":
      case "false":
        return !1;
      default:
        return;
    }
  }
  return {
    preload_code: q[s ?? "off"],
    preload_data: q[r ?? "off"],
    keepfocus: u(t),
    noscroll: u(n),
    reload: u(l),
    replace_state: u(i),
  };
}
function Ae(e) {
  const t = z(e);
  let n = !0;
  function s() {
    (n = !0), t.update((i) => i);
  }
  function r(i) {
    (n = !1), t.set(i);
  }
  function l(i) {
    let o;
    return t.subscribe((u) => {
      (o === void 0 || (n && u !== o)) && i((o = u));
    });
  }
  return { notify: s, set: r, subscribe: l };
}
const K = { v: () => {} };
function Ee() {
  const { set: e, subscribe: t } = z(!1);
  let n;
  async function s() {
    clearTimeout(n);
    try {
      const r = await fetch(`${ee}/_app/version.json`, {
        headers: { pragma: "no-cache", "cache-control": "no-cache" },
      });
      if (!r.ok) return !1;
      const i = (await r.json()).version !== J;
      return i && (e(!0), K.v(), clearTimeout(n)), i;
    } catch {
      return !1;
    }
  }
  return { subscribe: t, check: s };
}
function te(e, t, n) {
  return e.origin !== G || !e.pathname.startsWith(t)
    ? !0
    : n
    ? !(
        e.pathname === t + "/" ||
        e.pathname === t + "/index.html" ||
        (e.protocol === "file:" &&
          e.pathname.replace(/\/[^/]+\.html?$/, "") === t)
      )
    : !1;
}
function ke(e) {}
const B = new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config",
]);
[...B];
const ne = new Set([...B]);
[...ne];
let U, D, x;
const se =
  O.toString().includes("$$") || /function \w+\(\) \{\}/.test(O.toString());
var w, y, m, v, S, R, T, A, V, E, Y, k, j;
se
  ? ((U = {
      data: {},
      form: null,
      error: null,
      params: {},
      route: { id: null },
      state: {},
      status: -1,
      url: new URL("https://example.com"),
    }),
    (D = { current: null }),
    (x = { current: !1 }))
  : ((U = new ((V = class {
      constructor() {
        f(this, w, d({}));
        f(this, y, d(null));
        f(this, m, d(null));
        f(this, v, d({}));
        f(this, S, d({ id: null }));
        f(this, R, d({}));
        f(this, T, d(-1));
        f(this, A, d(new URL("https://example.com")));
      }
      get data() {
        return h(a(this, w));
      }
      set data(t) {
        g(a(this, w), t);
      }
      get form() {
        return h(a(this, y));
      }
      set form(t) {
        g(a(this, y), t);
      }
      get error() {
        return h(a(this, m));
      }
      set error(t) {
        g(a(this, m), t);
      }
      get params() {
        return h(a(this, v));
      }
      set params(t) {
        g(a(this, v), t);
      }
      get route() {
        return h(a(this, S));
      }
      set route(t) {
        g(a(this, S), t);
      }
      get state() {
        return h(a(this, R));
      }
      set state(t) {
        g(a(this, R), t);
      }
      get status() {
        return h(a(this, T));
      }
      set status(t) {
        g(a(this, T), t);
      }
      get url() {
        return h(a(this, A));
      }
      set url(t) {
        g(a(this, A), t);
      }
    }),
    (w = new WeakMap()),
    (y = new WeakMap()),
    (m = new WeakMap()),
    (v = new WeakMap()),
    (S = new WeakMap()),
    (R = new WeakMap()),
    (T = new WeakMap()),
    (A = new WeakMap()),
    V)()),
    (D = new ((Y = class {
      constructor() {
        f(this, E, d(null));
      }
      get current() {
        return h(a(this, E));
      }
      set current(t) {
        g(a(this, E), t);
      }
    }),
    (E = new WeakMap()),
    Y)()),
    (x = new ((j = class {
      constructor() {
        f(this, k, d(!1));
      }
      get current() {
        return h(a(this, k));
      }
      set current(t) {
        g(a(this, k), t);
      }
    }),
    (k = new WeakMap()),
    j)()),
    (K.v = () => (x.current = !0)));
function Ne(e) {
  Object.assign(U, e);
}
export {
  we as H,
  ye as N,
  pe as P,
  _e as S,
  D as a,
  Z as b,
  Ee as c,
  Te as d,
  fe as e,
  Se as f,
  Re as g,
  ue as h,
  te as i,
  le as j,
  ce as k,
  ge as l,
  $ as m,
  Ae as n,
  G as o,
  U as p,
  he as q,
  me as r,
  ve as s,
  de as t,
  Ne as u,
  be as v,
  z as w,
  ke as x,
};

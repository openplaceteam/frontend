import { a as ne } from "./Ba2x20r8.js";
import {
  c as re,
  w as oe,
  n as Ut,
  H as N,
  N as F,
  r as gt,
  o as $t,
  i as mt,
  b as L,
  s as rt,
  p as x,
  a as ft,
  f as qt,
  g as ut,
  d as G,
  e as it,
  S as Kt,
  P as se,
  h as ie,
  j as ce,
  k as le,
  l as Mt,
  m as q,
  u as Ft,
  q as fe,
  t as ue,
  v as Yt,
} from "./BvzQyf_g.js";
import { M as J, aC as Pt, aH as de } from "./iK5FT0Sa.js";
(function () {
  try {
    var t =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      a = new t.Error().stack;
    a &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[a] = "4866896d-0cdf-4e81-b6f8-3e9e41d12532"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-4866896d-0cdf-4e81-b6f8-3e9e41d12532"));
  })();
} catch {}
class _t {
  constructor(a, e) {
    (this.status = a),
      typeof e == "string"
        ? (this.body = { message: e })
        : e
        ? (this.body = e)
        : (this.body = { message: `Error: ${a}` });
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class wt {
  constructor(a, e) {
    (this.status = a), (this.location = e);
  }
}
class yt extends Error {
  constructor(a, e, r) {
    super(r), (this.status = a), (this.text = e);
  }
}
const he = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function pe(t) {
  const a = [];
  return {
    pattern:
      t === "/"
        ? /^\/$/
        : new RegExp(
            `^${me(t)
              .map((r) => {
                const n = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
                if (n)
                  return (
                    a.push({
                      name: n[1],
                      matcher: n[2],
                      optional: !1,
                      rest: !0,
                      chained: !0,
                    }),
                    "(?:/([^]*))?"
                  );
                const o = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
                if (o)
                  return (
                    a.push({
                      name: o[1],
                      matcher: o[2],
                      optional: !0,
                      rest: !1,
                      chained: !0,
                    }),
                    "(?:/([^/]+))?"
                  );
                if (!r) return;
                const s = r.split(/\[(.+?)\](?!\])/);
                return (
                  "/" +
                  s
                    .map((c, l) => {
                      if (l % 2) {
                        if (c.startsWith("x+"))
                          return ct(
                            String.fromCharCode(parseInt(c.slice(2), 16))
                          );
                        if (c.startsWith("u+"))
                          return ct(
                            String.fromCharCode(
                              ...c
                                .slice(2)
                                .split("-")
                                .map((_) => parseInt(_, 16))
                            )
                          );
                        const d = he.exec(c),
                          [, u, y, f, h] = d;
                        return (
                          a.push({
                            name: f,
                            matcher: h,
                            optional: !!u,
                            rest: !!y,
                            chained: y ? l === 1 && s[0] === "" : !1,
                          }),
                          y ? "([^]*?)" : u ? "([^/]*)?" : "([^/]+?)"
                        );
                      }
                      return ct(c);
                    })
                    .join("")
                );
              })
              .join("")}/?$`
          ),
    params: a,
  };
}
function ge(t) {
  return t !== "" && !/^\([^)]+\)$/.test(t);
}
function me(t) {
  return t.slice(1).split("/").filter(ge);
}
function _e(t, a, e) {
  const r = {},
    n = t.slice(1),
    o = n.filter((i) => i !== void 0);
  let s = 0;
  for (let i = 0; i < a.length; i += 1) {
    const c = a[i];
    let l = n[i - s];
    if (
      (c.chained &&
        c.rest &&
        s &&
        ((l = n
          .slice(i - s, i + 1)
          .filter((d) => d)
          .join("/")),
        (s = 0)),
      l === void 0)
    ) {
      c.rest && (r[c.name] = "");
      continue;
    }
    if (!c.matcher || e[c.matcher](l)) {
      r[c.name] = l;
      const d = a[i + 1],
        u = n[i + 1];
      d && !d.rest && d.optional && u && c.chained && (s = 0),
        !d && !u && Object.keys(r).length === o.length && (s = 0);
      continue;
    }
    if (c.optional && c.chained) {
      s++;
      continue;
    }
    return;
  }
  if (!s) return r;
}
function ct(t) {
  return t
    .normalize()
    .replace(/[[\]]/g, "\\$&")
    .replace(/%/g, "%25")
    .replace(/\//g, "%2[Ff]")
    .replace(/\?/g, "%3[Ff]")
    .replace(/#/g, "%23")
    .replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function we({ nodes: t, server_loads: a, dictionary: e, matchers: r }) {
  const n = new Set(a);
  return Object.entries(e).map(([i, [c, l, d]]) => {
    const { pattern: u, params: y } = pe(i),
      f = {
        id: i,
        exec: (h) => {
          const _ = u.exec(h);
          if (_) return _e(_, y, r);
        },
        errors: [1, ...(d || [])].map((h) => t[h]),
        layouts: [0, ...(l || [])].map(s),
        leaf: o(c),
      };
    return (
      (f.errors.length = f.layouts.length =
        Math.max(f.errors.length, f.layouts.length)),
      f
    );
  });
  function o(i) {
    const c = i < 0;
    return c && (i = ~i), [c, t[i]];
  }
  function s(i) {
    return i === void 0 ? i : [n.has(i), t[i]];
  }
}
function zt(t, a = JSON.parse) {
  try {
    return a(sessionStorage[t]);
  } catch {}
}
function Ot(t, a, e = JSON.stringify) {
  const r = e(a);
  try {
    sessionStorage[t] = r;
  } catch {}
}
function ye(t) {
  return t.filter((a) => a != null);
}
function vt(t) {
  return t instanceof _t || t instanceof yt ? t.status : 500;
}
function ve(t) {
  return t instanceof yt ? t.text : "Internal Error";
}
const { onMount: be } = ne,
  Ee = new Set(["icon", "shortcut icon", "apple-touch-icon"]),
  C = zt(Yt) ?? {},
  Y = zt(Mt) ?? {},
  P = { url: Ut({}), page: Ut({}), navigating: oe(null), updated: re() };
function bt(t) {
  C[t] = rt();
}
function ke(t, a) {
  let e = t + 1;
  for (; C[e]; ) delete C[e], (e += 1);
  for (e = a + 1; Y[e]; ) delete Y[e], (e += 1);
}
function z(t, a = !1) {
  return (
    a ? location.replace(t.href) : (location.href = t.href),
    new Promise(() => {})
  );
}
async function Bt() {
  if ("serviceWorker" in navigator) {
    const t = await navigator.serviceWorker.getRegistration(L || "/");
    t && (await t.update());
  }
}
function Ct() {}
let Et, dt, X, T, ht, v;
const Q = [],
  Z = [];
let w = null;
function Ht() {
  var t;
  (t = w == null ? void 0 : w.fork) == null ||
    t.then((a) => (a == null ? void 0 : a.discard())),
    (w = null);
}
const W = new Map(),
  kt = new Set(),
  Se = new Set(),
  M = new Set();
let m = { branch: [], error: null, url: null },
  Vt = !1,
  tt = !1,
  jt = !0,
  B = !1,
  K = !1,
  Wt = !1,
  St = !1,
  Rt,
  E,
  R,
  O;
const et = new Set(),
  Dt = new Map();
async function Be(t, a, e) {
  var o, s, i, c, l;
  (o = globalThis.__sveltekit_5mbzg3) != null &&
    o.data &&
    globalThis.__sveltekit_5mbzg3.data,
    document.URL !== location.href && (location.href = location.href),
    (v = t),
    await ((i = (s = t.hooks).init) == null ? void 0 : i.call(s)),
    (Et = we(t)),
    (T = document.documentElement),
    (ht = a),
    (dt = t.nodes[0]),
    (X = t.nodes[1]),
    dt(),
    X(),
    (E = (c = history.state) == null ? void 0 : c[N]),
    (R = (l = history.state) == null ? void 0 : l[F]),
    E ||
      ((E = R = Date.now()),
      history.replaceState({ ...history.state, [N]: E, [F]: R }, ""));
  const r = C[E];
  function n() {
    r && ((history.scrollRestoration = "manual"), scrollTo(r.x, r.y));
  }
  e
    ? (n(), await $e(ht, e))
    : (await $({
        type: "enter",
        url: gt(v.hash ? Me(new URL(location.href)) : location.href),
        replace_state: !0,
      }),
      n()),
    Ne();
}
function Re() {
  (Q.length = 0), (St = !1);
}
function Gt(t) {
  Z.some((a) => (a == null ? void 0 : a.snapshot)) &&
    (Y[t] = Z.map((a) => {
      var e;
      return (e = a == null ? void 0 : a.snapshot) == null
        ? void 0
        : e.capture();
    }));
}
function Jt(t) {
  var a;
  (a = Y[t]) == null ||
    a.forEach((e, r) => {
      var n, o;
      (o = (n = Z[r]) == null ? void 0 : n.snapshot) == null || o.restore(e);
    });
}
function Nt() {
  bt(E), Ot(Yt, C), Gt(R), Ot(Mt, Y);
}
async function Xt(t, a, e, r) {
  let n;
  a.invalidateAll && Ht(),
    await $({
      type: "goto",
      url: gt(t),
      keepfocus: a.keepFocus,
      noscroll: a.noScroll,
      replace_state: a.replaceState,
      state: a.state,
      redirect_count: e,
      nav_token: r,
      accept: () => {
        a.invalidateAll && ((St = !0), (n = [...Dt.keys()])),
          a.invalidate && a.invalidate.forEach(De);
      },
    }),
    a.invalidateAll &&
      J()
        .then(J)
        .then(() => {
          Dt.forEach(({ resource: o }, s) => {
            var i;
            n != null &&
              n.includes(s) &&
              ((i = o.refresh) == null || i.call(o));
          });
        });
}
async function xe(t) {
  if (t.id !== (w == null ? void 0 : w.id)) {
    const a = {};
    if (
      (et.add(a),
      (w = {
        id: t.id,
        token: a,
        promise: Zt({ ...t, preload: a }).then(
          (e) => (et.delete(a), e.type === "loaded" && e.state.error && Ht(), e)
        ),
        fork: null,
      }),
      Pt)
    ) {
      const e = w;
      e.fork = e.promise.then((r) => {
        if (e === w && r.type === "loaded")
          try {
            return Pt(() => {
              Rt.$set(r.props), Ft(r.props.page);
            });
          } catch {}
        return null;
      });
    }
  }
  return w.promise;
}
async function lt(t) {
  var e;
  const a = (e = await ot(t, !1)) == null ? void 0 : e.route;
  a &&
    (await Promise.all(
      [...a.layouts, a.leaf].map((r) => (r == null ? void 0 : r[1]()))
    ));
}
async function Qt(t, a, e) {
  var n;
  m = t.state;
  const r = document.querySelector("style[data-sveltekit]");
  if (
    (r && r.remove(),
    Object.assign(x, t.props.page),
    (Rt = new v.root({
      target: a,
      props: { ...t.props, stores: P, components: Z },
      hydrate: e,
      sync: !1,
    })),
    await Promise.resolve(),
    Jt(R),
    e)
  ) {
    const o = {
      from: null,
      to: {
        params: m.params,
        route: { id: ((n = m.route) == null ? void 0 : n.id) ?? null },
        url: new URL(location.href),
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve(),
    };
    M.forEach((s) => s(o));
  }
  tt = !0;
}
function at({
  url: t,
  params: a,
  branch: e,
  status: r,
  error: n,
  route: o,
  form: s,
}) {
  let i = "never";
  if (L && (t.pathname === L || t.pathname === L + "/")) i = "always";
  else
    for (const f of e)
      (f == null ? void 0 : f.slash) !== void 0 && (i = f.slash);
  (t.pathname = ce(t.pathname, i)), (t.search = t.search);
  const c = {
    type: "loaded",
    state: { url: t, params: a, branch: e, error: n, route: o },
    props: { constructors: ye(e).map((f) => f.node.component), page: At(x) },
  };
  s !== void 0 && (c.props.form = s);
  let l = {},
    d = !x,
    u = 0;
  for (let f = 0; f < Math.max(e.length, m.branch.length); f += 1) {
    const h = e[f],
      _ = m.branch[f];
    (h == null ? void 0 : h.data) !== (_ == null ? void 0 : _.data) && (d = !0),
      h &&
        ((l = { ...l, ...h.data }), d && (c.props[`data_${u}`] = l), (u += 1));
  }
  return (
    (!m.url ||
      t.href !== m.url.href ||
      m.error !== n ||
      (s !== void 0 && s !== x.form) ||
      d) &&
      (c.props.page = {
        error: n,
        params: a,
        route: { id: (o == null ? void 0 : o.id) ?? null },
        state: {},
        status: r,
        url: new URL(t),
        form: s ?? null,
        data: d ? l : x.data,
      }),
    c
  );
}
async function xt({
  loader: t,
  parent: a,
  url: e,
  params: r,
  route: n,
  server_data_node: o,
}) {
  var l, d;
  let s = null;
  const i = {
      dependencies: new Set(),
      params: new Set(),
      parent: !1,
      route: !1,
      url: !1,
      search_params: new Set(),
    },
    c = await t();
  return {
    node: c,
    loader: t,
    server: o,
    universal:
      (l = c.universal) != null && l.load
        ? { type: "data", data: s, uses: i }
        : null,
    data: s ?? (o == null ? void 0 : o.data) ?? null,
    slash:
      ((d = c.universal) == null ? void 0 : d.trailingSlash) ??
      (o == null ? void 0 : o.slash),
  };
}
function Le(t, a, e) {
  let r = t instanceof Request ? t.url : t;
  const n = new URL(r, e);
  n.origin === e.origin && (r = n.href.slice(e.origin.length));
  const o = tt ? fe(r, n.href, a) : ue(r, a);
  return { resolved: n, promise: o };
}
function Ie(t, a, e, r, n, o) {
  if (St) return !0;
  if (!n) return !1;
  if ((n.parent && t) || (n.route && a) || (n.url && e)) return !0;
  for (const s of n.search_params) if (r.has(s)) return !0;
  for (const s of n.params) if (o[s] !== m.params[s]) return !0;
  for (const s of n.dependencies) if (Q.some((i) => i(new URL(s)))) return !0;
  return !1;
}
function Lt(t, a) {
  return (t == null ? void 0 : t.type) === "data"
    ? t
    : (t == null ? void 0 : t.type) === "skip"
    ? a ?? null
    : null;
}
function Te(t, a) {
  if (!t) return new Set(a.searchParams.keys());
  const e = new Set([...t.searchParams.keys(), ...a.searchParams.keys()]);
  for (const r of e) {
    const n = t.searchParams.getAll(r),
      o = a.searchParams.getAll(r);
    n.every((s) => o.includes(s)) &&
      o.every((s) => n.includes(s)) &&
      e.delete(r);
  }
  return e;
}
function Ae({ error: t, url: a, route: e, params: r }) {
  return {
    type: "loaded",
    state: { error: t, url: a, route: e, params: r, branch: [] },
    props: { page: At(x), constructors: [] },
  };
}
async function Zt({
  id: t,
  invalidating: a,
  url: e,
  params: r,
  route: n,
  preload: o,
}) {
  if ((w == null ? void 0 : w.id) === t) return et.delete(w.token), w.promise;
  const { errors: s, layouts: i, leaf: c } = n,
    l = [...i, c];
  s.forEach((g) => (g == null ? void 0 : g().catch(() => {}))),
    l.forEach((g) => (g == null ? void 0 : g[1]().catch(() => {})));
  const d = m.url ? t !== nt(m.url) : !1,
    u = m.route ? n.id !== m.route.id : !1,
    y = Te(m.url, e);
  let f = !1;
  const h = l.map(async (g, p) => {
    var A;
    if (!g) return;
    const b = m.branch[p];
    return g[1] === (b == null ? void 0 : b.loader) &&
      !Ie(f, u, d, y, (A = b.universal) == null ? void 0 : A.uses, r)
      ? b
      : ((f = !0),
        xt({
          loader: g[1],
          url: e,
          params: r,
          route: n,
          parent: async () => {
            var V;
            const I = {};
            for (let j = 0; j < p; j += 1)
              Object.assign(I, (V = await h[j]) == null ? void 0 : V.data);
            return I;
          },
          server_data_node: Lt(
            g[0] ? { type: "skip" } : null,
            g[0] ? (b == null ? void 0 : b.server) : void 0
          ),
        }));
  });
  for (const g of h) g.catch(() => {});
  const _ = [];
  for (let g = 0; g < l.length; g += 1)
    if (l[g])
      try {
        _.push(await h[g]);
      } catch (p) {
        if (p instanceof wt) return { type: "redirect", location: p.location };
        if (et.has(o))
          return Ae({
            error: await H(p, { params: r, url: e, route: { id: n.id } }),
            url: e,
            params: r,
            route: n,
          });
        let b = vt(p),
          S;
        if (p instanceof _t) S = p.body;
        else {
          if (await P.updated.check()) return await Bt(), await z(e);
          S = await H(p, { params: r, url: e, route: { id: n.id } });
        }
        const A = await Ue(g, _, s);
        return A
          ? at({
              url: e,
              params: r,
              branch: _.slice(0, A.idx).concat(A.node),
              status: b,
              error: S,
              route: n,
            })
          : await ee(e, { id: n.id }, S, b);
      }
    else _.push(void 0);
  return at({
    url: e,
    params: r,
    branch: _,
    status: 200,
    error: null,
    route: n,
    form: a ? void 0 : null,
  });
}
async function Ue(t, a, e) {
  for (; t--; )
    if (e[t]) {
      let r = t;
      for (; !a[r]; ) r -= 1;
      try {
        return {
          idx: r + 1,
          node: {
            node: await e[t](),
            loader: e[t],
            data: {},
            server: null,
            universal: null,
          },
        };
      } catch {
        continue;
      }
    }
}
async function It({ status: t, error: a, url: e, route: r }) {
  const n = {};
  let o = null;
  try {
    const s = await xt({
        loader: dt,
        url: e,
        params: n,
        route: r,
        parent: () => Promise.resolve({}),
        server_data_node: Lt(o),
      }),
      i = {
        node: await X(),
        loader: X,
        universal: null,
        server: null,
        data: null,
      };
    return at({
      url: e,
      params: n,
      branch: [s, i],
      status: t,
      error: a,
      route: null,
    });
  } catch (s) {
    if (s instanceof wt) return Xt(new URL(s.location, location.href), {}, 0);
    throw s;
  }
}
async function Pe(t) {
  const a = t.href;
  if (W.has(a)) return W.get(a);
  let e;
  try {
    const r = (async () => {
      let n =
        (await v.hooks.reroute({
          url: new URL(t),
          fetch: async (o, s) => Le(o, s, t).promise,
        })) ?? t;
      if (typeof n == "string") {
        const o = new URL(t);
        v.hash ? (o.hash = n) : (o.pathname = n), (n = o);
      }
      return n;
    })();
    W.set(a, r), (e = await r);
  } catch {
    W.delete(a);
    return;
  }
  return e;
}
async function ot(t, a) {
  if (t && !mt(t, L, v.hash)) {
    const e = await Pe(t);
    if (!e) return;
    const r = Oe(e);
    for (const n of Et) {
      const o = n.exec(r);
      if (o)
        return { id: nt(t), invalidating: a, route: n, params: ie(o), url: t };
    }
  }
}
function Oe(t) {
  return (
    le(
      v.hash
        ? t.hash.replace(/^#/, "").replace(/[?#].+/, "")
        : t.pathname.slice(L.length)
    ) || "/"
  );
}
function nt(t) {
  return (v.hash ? t.hash.replace(/^#/, "") : t.pathname) + t.search;
}
function te({ url: t, type: a, intent: e, delta: r, event: n }) {
  let o = !1;
  const s = Tt(m, e, t, a);
  r !== void 0 && (s.navigation.delta = r),
    n !== void 0 && (s.navigation.event = n);
  const i = {
    ...s.navigation,
    cancel: () => {
      (o = !0), s.reject(new Error("navigation cancelled"));
    },
  };
  return B || kt.forEach((c) => c(i)), o ? null : s;
}
async function $({
  type: t,
  url: a,
  popped: e,
  keepfocus: r,
  noscroll: n,
  replace_state: o,
  state: s = {},
  redirect_count: i = 0,
  nav_token: c = {},
  accept: l = Ct,
  block: d = Ct,
  event: u,
}) {
  var j;
  const y = O;
  O = c;
  const f = await ot(a, !1),
    h =
      t === "enter"
        ? Tt(m, f, a, t)
        : te({
            url: a,
            type: t,
            delta: e == null ? void 0 : e.delta,
            intent: f,
            event: u,
          });
  if (!h) {
    d(), O === c && (O = y);
    return;
  }
  const _ = E,
    g = R;
  l(),
    (B = !0),
    tt &&
      h.navigation.type !== "enter" &&
      P.navigating.set((ft.current = h.navigation));
  let p = f && (await Zt(f));
  if (!p) {
    if (mt(a, L, v.hash)) return await z(a, o);
    p = await ee(
      a,
      { id: null },
      await H(new yt(404, "Not Found", `Not found: ${a.pathname}`), {
        url: a,
        params: {},
        route: { id: null },
      }),
      404,
      o
    );
  }
  if (((a = (f == null ? void 0 : f.url) || a), O !== c))
    return h.reject(new Error("navigation aborted")), !1;
  if (p.type === "redirect") {
    if (i < 20) {
      await $({
        type: t,
        url: new URL(p.location, a),
        popped: e,
        keepfocus: r,
        noscroll: n,
        replace_state: o,
        state: s,
        redirect_count: i + 1,
        nav_token: c,
      }),
        h.fulfil(void 0);
      return;
    }
    p = await It({
      status: 500,
      error: await H(new Error("Redirect loop"), {
        url: a,
        params: {},
        route: { id: null },
      }),
      url: a,
      route: { id: null },
    });
  } else
    p.props.page.status >= 400 &&
      (await P.updated.check()) &&
      (await Bt(), await z(a, o));
  if (
    (Re(),
    bt(_),
    Gt(g),
    p.props.page.url.pathname !== a.pathname &&
      (a.pathname = p.props.page.url.pathname),
    (s = e ? e.state : s),
    !e)
  ) {
    const k = o ? 0 : 1,
      D = { [N]: (E += k), [F]: (R += k), [Kt]: s };
    (o ? history.replaceState : history.pushState).call(history, D, "", a),
      o || ke(E, R);
  }
  const b = w == null ? void 0 : w.fork;
  (w = null), (p.props.page.state = s);
  let S;
  if (tt) {
    const k = (
      await Promise.all(Array.from(Se, (U) => U(h.navigation)))
    ).filter((U) => typeof U == "function");
    if (k.length > 0) {
      let U = function () {
        k.forEach((st) => {
          M.delete(st);
        });
      };
      k.push(U),
        k.forEach((st) => {
          M.add(st);
        });
    }
    (m = p.state), p.props.page && (p.props.page.url = a);
    const D = b && (await b);
    D
      ? (S = D.commit())
      : (Rt.$set(p.props),
        Ft(p.props.page),
        (S = (j = de) == null ? void 0 : j())),
      (Wt = !0);
  } else await Qt(p, ht, !1);
  const { activeElement: A } = document;
  await S, await J(), await J();
  let I = e ? e.scroll : n ? rt() : null;
  if (jt) {
    const k = a.hash && document.getElementById(ae(a));
    if (I) scrollTo(I.x, I.y);
    else if (k) {
      k.scrollIntoView();
      const { top: D, left: U } = k.getBoundingClientRect();
      I = { x: pageXOffset + U, y: pageYOffset + D };
    } else scrollTo(0, 0);
  }
  const V =
    document.activeElement !== A && document.activeElement !== document.body;
  !r && !V && Ke(a, I),
    (jt = !0),
    p.props.page && Object.assign(x, p.props.page),
    (B = !1),
    t === "popstate" && Jt(R),
    h.fulfil(void 0),
    M.forEach((k) => k(h.navigation)),
    P.navigating.set((ft.current = null));
}
async function ee(t, a, e, r, n) {
  return t.origin === $t && t.pathname === location.pathname && !Vt
    ? await It({ status: r, error: e, url: t, route: a })
    : await z(t, n);
}
function Ce() {
  let t, a, e;
  T.addEventListener("mousemove", (i) => {
    const c = i.target;
    clearTimeout(t),
      (t = setTimeout(() => {
        o(c, q.hover);
      }, 20));
  });
  function r(i) {
    i.defaultPrevented || o(i.composedPath()[0], q.tap);
  }
  T.addEventListener("mousedown", r),
    T.addEventListener("touchstart", r, { passive: !0 });
  const n = new IntersectionObserver(
    (i) => {
      for (const c of i)
        c.isIntersecting && (lt(new URL(c.target.href)), n.unobserve(c.target));
    },
    { threshold: 0 }
  );
  async function o(i, c) {
    const l = qt(i, T),
      d = l === a && c >= e;
    if (!l || d) return;
    const { url: u, external: y, download: f } = ut(l, L, v.hash);
    if (y || f) return;
    const h = G(l),
      _ = u && nt(m.url) === nt(u);
    if (!(h.reload || _))
      if (c <= h.preload_data) {
        (a = l), (e = q.tap);
        const g = await ot(u, !1);
        if (!g) return;
        xe(g);
      } else c <= h.preload_code && ((a = l), (e = c), lt(u));
  }
  function s() {
    n.disconnect();
    for (const i of T.querySelectorAll("a")) {
      const { url: c, external: l, download: d } = ut(i, L, v.hash);
      if (l || d) continue;
      const u = G(i);
      u.reload ||
        (u.preload_code === q.viewport && n.observe(i),
        u.preload_code === q.eager && lt(c));
    }
  }
  M.add(s), s();
}
function H(t, a) {
  if (t instanceof _t) return t.body;
  const e = vt(t),
    r = ve(t);
  return (
    v.hooks.handleError({ error: t, event: a, status: e, message: r }) ?? {
      message: r,
    }
  );
}
function je(t, a) {
  be(
    () => (
      t.add(a),
      () => {
        t.delete(a);
      }
    )
  );
}
function He(t) {
  je(kt, t);
}
function Ve(t, a = {}) {
  return (
    (t = new URL(gt(t))),
    t.origin !== $t
      ? Promise.reject(new Error("goto: invalid URL"))
      : Xt(t, a, 0)
  );
}
function De(t) {
  if (typeof t == "function") Q.push(t);
  else {
    const { href: a } = new URL(t, location.href);
    Q.push((e) => e.href === a);
  }
}
function Ne() {
  var a;
  (history.scrollRestoration = "manual"),
    addEventListener("beforeunload", (e) => {
      let r = !1;
      if ((Nt(), !B)) {
        const n = Tt(m, void 0, null, "leave"),
          o = {
            ...n.navigation,
            cancel: () => {
              (r = !0), n.reject(new Error("navigation cancelled"));
            },
          };
        kt.forEach((s) => s(o));
      }
      r
        ? (e.preventDefault(), (e.returnValue = ""))
        : (history.scrollRestoration = "auto");
    }),
    addEventListener("visibilitychange", () => {
      document.visibilityState === "hidden" && Nt();
    }),
    ((a = navigator.connection) != null && a.saveData) || Ce(),
    T.addEventListener("click", async (e) => {
      if (
        e.button ||
        e.which !== 1 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.defaultPrevented
      )
        return;
      const r = qt(e.composedPath()[0], T);
      if (!r) return;
      const { url: n, external: o, target: s, download: i } = ut(r, L, v.hash);
      if (!n) return;
      if (s === "_parent" || s === "_top") {
        if (window.parent !== window) return;
      } else if (s && s !== "_self") return;
      const c = G(r);
      if (
        (!(r instanceof SVGAElement) &&
          n.protocol !== location.protocol &&
          !(n.protocol === "https:" || n.protocol === "http:")) ||
        i
      )
        return;
      const [d, u] = (v.hash ? n.hash.replace(/^#/, "") : n.href).split("#"),
        y = d === it(location);
      if (o || (c.reload && (!y || !u))) {
        te({ url: n, type: "link", event: e }) ? (B = !0) : e.preventDefault();
        return;
      }
      if (u !== void 0 && y) {
        const [, f] = m.url.href.split("#");
        if (f === u) {
          if (
            (e.preventDefault(),
            u === "" ||
              (u === "top" && r.ownerDocument.getElementById("top") === null))
          )
            scrollTo({ top: 0 });
          else {
            const h = r.ownerDocument.getElementById(decodeURIComponent(u));
            h && (h.scrollIntoView(), h.focus());
          }
          return;
        }
        if (((K = !0), bt(E), t(n), !c.replace_state)) return;
        K = !1;
      }
      e.preventDefault(),
        await new Promise((f) => {
          requestAnimationFrame(() => {
            setTimeout(f, 0);
          }),
            setTimeout(f, 100);
        }),
        await $({
          type: "link",
          url: n,
          keepfocus: c.keepfocus,
          noscroll: c.noscroll,
          replace_state: c.replace_state ?? n.href === location.href,
          event: e,
        });
    }),
    T.addEventListener("submit", (e) => {
      if (e.defaultPrevented) return;
      const r = HTMLFormElement.prototype.cloneNode.call(e.target),
        n = e.submitter;
      if (
        ((n == null ? void 0 : n.formTarget) || r.target) === "_blank" ||
        ((n == null ? void 0 : n.formMethod) || r.method) !== "get"
      )
        return;
      const i = new URL(
        ((n == null ? void 0 : n.hasAttribute("formaction")) &&
          (n == null ? void 0 : n.formAction)) ||
          r.action
      );
      if (mt(i, L, !1)) return;
      const c = e.target,
        l = G(c);
      if (l.reload) return;
      e.preventDefault(), e.stopPropagation();
      const d = new FormData(c, n);
      (i.search = new URLSearchParams(d).toString()),
        $({
          type: "form",
          url: i,
          keepfocus: l.keepfocus,
          noscroll: l.noscroll,
          replace_state: l.replace_state ?? i.href === location.href,
          event: e,
        });
    }),
    addEventListener("popstate", async (e) => {
      var r;
      if (!pt) {
        if ((r = e.state) != null && r[N]) {
          const n = e.state[N];
          if (((O = {}), n === E)) return;
          const o = C[n],
            s = e.state[Kt] ?? {},
            i = new URL(e.state[se] ?? location.href),
            c = e.state[F],
            l = m.url ? it(location) === it(m.url) : !1;
          if (c === R && (Wt || l)) {
            s !== x.state && (x.state = s),
              t(i),
              (C[E] = rt()),
              o && scrollTo(o.x, o.y),
              (E = n);
            return;
          }
          const u = n - E;
          await $({
            type: "popstate",
            url: i,
            popped: { state: s, scroll: o, delta: u },
            accept: () => {
              (E = n), (R = c);
            },
            block: () => {
              history.go(-u);
            },
            nav_token: O,
            event: e,
          });
        } else if (!K) {
          const n = new URL(location.href);
          t(n), v.hash && location.reload();
        }
      }
    }),
    addEventListener("hashchange", () => {
      K &&
        ((K = !1),
        history.replaceState(
          { ...history.state, [N]: ++E, [F]: R },
          "",
          location.href
        ));
    });
  for (const e of document.querySelectorAll("link"))
    Ee.has(e.rel) && (e.href = e.href);
  addEventListener("pageshow", (e) => {
    e.persisted && P.navigating.set((ft.current = null));
  });
  function t(e) {
    (m.url = x.url = e), P.page.set(At(x)), P.page.notify();
  }
}
async function $e(
  t,
  {
    status: a = 200,
    error: e,
    node_ids: r,
    params: n,
    route: o,
    server_route: s,
    data: i,
    form: c,
  }
) {
  Vt = !0;
  const l = new URL(location.href);
  let d;
  ({ params: n = {}, route: o = { id: null } } = (await ot(l, !1)) || {}),
    (d = Et.find(({ id: f }) => f === o.id));
  let u,
    y = !0;
  try {
    const f = r.map(async (_, g) => {
        const p = i[g];
        return (
          p != null && p.uses && (p.uses = qe(p.uses)),
          xt({
            loader: v.nodes[_],
            url: l,
            params: n,
            route: o,
            parent: async () => {
              const b = {};
              for (let S = 0; S < g; S += 1)
                Object.assign(b, (await f[S]).data);
              return b;
            },
            server_data_node: Lt(p),
          })
        );
      }),
      h = await Promise.all(f);
    if (d) {
      const _ = d.layouts;
      for (let g = 0; g < _.length; g++) _[g] || h.splice(g, 0, void 0);
    }
    u = at({
      url: l,
      params: n,
      branch: h,
      status: a,
      error: e,
      form: c,
      route: d ?? null,
    });
  } catch (f) {
    if (f instanceof wt) {
      await z(new URL(f.location, location.href));
      return;
    }
    (u = await It({
      status: vt(f),
      error: await H(f, { url: l, params: n, route: o }),
      url: l,
      route: o,
    })),
      (t.textContent = ""),
      (y = !1);
  }
  u.props.page && (u.props.page.state = {}), await Qt(u, t, y);
}
function qe(t) {
  return {
    dependencies: new Set((t == null ? void 0 : t.dependencies) ?? []),
    params: new Set((t == null ? void 0 : t.params) ?? []),
    parent: !!(t != null && t.parent),
    route: !!(t != null && t.route),
    url: !!(t != null && t.url),
    search_params: new Set((t == null ? void 0 : t.search_params) ?? []),
  };
}
let pt = !1;
function Ke(t, a = null) {
  const e = document.querySelector("[autofocus]");
  if (e) e.focus();
  else {
    const r = ae(t);
    if (r && document.getElementById(r)) {
      const { x: o, y: s } = a ?? rt();
      setTimeout(() => {
        const i = history.state;
        (pt = !0),
          location.replace(`#${r}`),
          v.hash && location.replace(t.hash),
          history.replaceState(i, "", t.hash),
          scrollTo(o, s),
          (pt = !1);
      });
    } else {
      const o = document.body,
        s = o.getAttribute("tabindex");
      (o.tabIndex = -1),
        o.focus({ preventScroll: !0, focusVisible: !1 }),
        s !== null
          ? o.setAttribute("tabindex", s)
          : o.removeAttribute("tabindex");
    }
    const n = getSelection();
    if (n && n.type !== "None") {
      const o = [];
      for (let s = 0; s < n.rangeCount; s += 1) o.push(n.getRangeAt(s));
      setTimeout(() => {
        if (n.rangeCount === o.length) {
          for (let s = 0; s < n.rangeCount; s += 1) {
            const i = o[s],
              c = n.getRangeAt(s);
            if (
              i.commonAncestorContainer !== c.commonAncestorContainer ||
              i.startContainer !== c.startContainer ||
              i.endContainer !== c.endContainer ||
              i.startOffset !== c.startOffset ||
              i.endOffset !== c.endOffset
            )
              return;
          }
          n.removeAllRanges();
        }
      });
    }
  }
}
function Tt(t, a, e, r) {
  var c, l;
  let n, o;
  const s = new Promise((d, u) => {
    (n = d), (o = u);
  });
  return (
    s.catch(() => {}),
    {
      navigation: {
        from: {
          params: t.params,
          route: { id: ((c = t.route) == null ? void 0 : c.id) ?? null },
          url: t.url,
        },
        to: e && {
          params: (a == null ? void 0 : a.params) ?? null,
          route: {
            id:
              ((l = a == null ? void 0 : a.route) == null ? void 0 : l.id) ??
              null,
          },
          url: e,
        },
        willUnload: !a,
        type: r,
        complete: s,
      },
      fulfil: n,
      reject: o,
    }
  );
}
function At(t) {
  return {
    data: t.data,
    error: t.error,
    form: t.form,
    params: t.params,
    route: t.route,
    state: t.state,
    status: t.status,
    url: t.url,
  };
}
function Me(t) {
  const a = new URL(t);
  return (a.hash = decodeURIComponent(t.hash)), a;
}
function ae(t) {
  let a;
  if (v.hash) {
    const [, , e] = t.hash.split("#", 3);
    a = e ?? "";
  } else a = t.hash.slice(1);
  return decodeURIComponent(a);
}
export { Be as a, He as b, Ve as g, P as s };

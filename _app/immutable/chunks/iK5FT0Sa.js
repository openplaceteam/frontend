var An = Object.defineProperty;
var St = (e) => {
  throw TypeError(e);
};
var kn = (e, t, n) =>
  t in e
    ? An(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var K = (e, t, n) => kn(e, typeof t != "symbol" ? t + "" : t, n),
  st = (e, t, n) => t.has(e) || St("Cannot " + n);
var u = (e, t, n) => (
    st(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  S = (e, t, n) =>
    t.has(e)
      ? St("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  z = (e, t, n, r) => (
    st(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  L = (e, t, n) => (st(e, t, "access private method"), n);
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
      (e._sentryDebugIds[t] = "865f3493-b08e-4bc4-8a45-d00e4316d699"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-865f3493-b08e-4bc4-8a45-d00e4316d699"));
  })();
} catch {}
const jt = !1;
var xn = Array.isArray,
  Sn = Array.prototype.indexOf,
  Pr = Array.from,
  Rn = Object.defineProperty,
  Ne = Object.getOwnPropertyDescriptor,
  In = Object.getOwnPropertyDescriptors,
  Nn = Object.prototype,
  On = Array.prototype,
  qt = Object.getPrototypeOf,
  Rt = Object.isExtensible;
function Mr(e) {
  return typeof e == "function";
}
const Lr = () => {};
function Fr(e) {
  return e();
}
function Cn(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function Yt() {
  var e,
    t,
    n = new Promise((r, s) => {
      (e = r), (t = s);
    });
  return { promise: n, resolve: e, reject: t };
}
function jr(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if ((n.push(r), n.length === t)) break;
  return n;
}
const T = 2,
  ze = 4,
  Xe = 8,
  J = 16,
  Q = 32,
  ge = 64,
  ht = 128,
  q = 512,
  x = 1024,
  N = 2048,
  ee = 4096,
  U = 8192,
  ve = 16384,
  Ze = 32768,
  Be = 65536,
  ft = 1 << 17,
  Bt = 1 << 18,
  je = 1 << 19,
  Ht = 1 << 20,
  Ce = 32768,
  ot = 1 << 21,
  pt = 1 << 22,
  ne = 1 << 23,
  he = Symbol("$state"),
  qr = Symbol("legacy props"),
  Yr = Symbol(""),
  Ee = new (class extends Error {
    constructor() {
      super(...arguments);
      K(this, "name", "StaleReactionError");
      K(
        this,
        "message",
        "The reaction that called `getAbortSignal()` was re-run or destroyed"
      );
    }
  })(),
  Je = 3,
  wt = 8;
function Dn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Pn() {
  throw new Error("https://svelte.dev/e/missing_context");
}
function Mn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ln(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function jn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function qn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yn() {
  throw new Error("https://svelte.dev/e/experimental_async_fork");
}
function Bn() {
  throw new Error("https://svelte.dev/e/fork_discarded");
}
function Hn() {
  throw new Error("https://svelte.dev/e/fork_timing");
}
function Hr() {
  throw new Error("https://svelte.dev/e/get_abort_signal_outside_reaction");
}
function Ur() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Vr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_legacy_only");
}
function $r(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Un() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Vn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $n() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Gr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Wr = 1,
  Kr = 2,
  zr = 4,
  Xr = 8,
  Zr = 16,
  Jr = 1,
  Qr = 2,
  es = 4,
  ts = 8,
  ns = 16,
  rs = 1,
  ss = 2,
  is = 4,
  Gn = 1,
  Wn = 2,
  Kn = "[",
  zn = "[!",
  Xn = "]",
  yt = {},
  A = Symbol(),
  as = "http://www.w3.org/1999/xhtml",
  fs = "@attach";
function mt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function os() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function ls() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let O = !1;
function us(e) {
  O = e;
}
let p;
function ye(e) {
  if (e === null) throw (mt(), yt);
  return (p = e);
}
function Ut() {
  return ye(ae(p));
}
function cs(e) {
  if (O) {
    if (ae(p) !== null) throw (mt(), yt);
    p = e;
  }
}
function _s(e = 1) {
  if (O) {
    for (var t = e, n = p; t--; ) n = ae(n);
    p = n;
  }
}
function ds(e = !0) {
  for (var t = 0, n = p; ; ) {
    if (n.nodeType === wt) {
      var r = n.data;
      if (r === Xn) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Kn || r === zn) && (t += 1);
    }
    var s = ae(n);
    e && n.remove(), (n = s);
  }
}
function vs(e) {
  if (!e || e.nodeType !== wt) throw (mt(), yt);
  return e.data;
}
function Vt(e) {
  return e === this.v;
}
function Zn(e, t) {
  return e != e
    ? t == t
    : e !== t || (e !== null && typeof e == "object") || typeof e == "function";
}
function $t(e) {
  return !Zn(e, this.v);
}
let Qe = !1,
  Jn = !1;
function hs() {
  Qe = !0;
}
let b = null;
function He(e) {
  b = e;
}
function ps() {
  const e = {};
  return [() => (tr(e) || Pn(), Qn(e)), (t) => er(e, t)];
}
function Qn(e) {
  return et().get(e);
}
function er(e, t) {
  return et().set(e, t), t;
}
function tr(e) {
  return et().has(e);
}
function ws() {
  return et();
}
function ys(e, t = !1, n) {
  b = {
    p: b,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Qe && !t ? { s: null, u: null, $: [] } : null,
  };
}
function ms(e) {
  var t = b,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) on(r);
  }
  return e !== void 0 && (t.x = e), (t.i = !0), (b = t.p), e ?? {};
}
function qe() {
  return !Qe || (b !== null && b.l === null);
}
function et(e) {
  return b === null && Dn(), b.c ?? (b.c = new Map(nr(b) || void 0));
}
function nr(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null) return n;
    t = t.p;
  }
  return null;
}
let ue = [];
function Gt() {
  var e = ue;
  (ue = []), Cn(e);
}
function bt(e) {
  if (ue.length === 0 && !Oe) {
    var t = ue;
    queueMicrotask(() => {
      t === ue && Gt();
    });
  }
  ue.push(e);
}
function rr() {
  for (; ue.length > 0; ) Gt();
}
function sr(e) {
  var t = w;
  if (t === null) return (v.f |= ne), e;
  if ((t.f & Ze) === 0) {
    if ((t.f & ht) === 0) throw e;
    t.b.error(e);
  } else Ue(e, t);
}
function Ue(e, t) {
  for (; t !== null; ) {
    if ((t.f & ht) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const ce = new Set();
let y = null,
  it = null,
  m = null,
  B = [],
  tt = null,
  lt = !1,
  Oe = !1;
var Te, Ae, _e, de, Me, ke, xe, k, ut, oe, Wt, Kt;
const We = class We {
  constructor() {
    S(this, k);
    K(this, "committed", !1);
    K(this, "current", new Map());
    K(this, "previous", new Map());
    S(this, Te, new Set());
    S(this, Ae, new Set());
    S(this, _e, 0);
    S(this, de, 0);
    S(this, Me, null);
    S(this, ke, []);
    S(this, xe, []);
    K(this, "skipped_effects", new Set());
    K(this, "is_fork", !1);
  }
  process(t) {
    var r;
    (B = []), (it = null), this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: [],
    };
    for (const s of t) L(this, k, ut).call(this, s, n);
    this.is_fork || L(this, k, Wt).call(this),
      u(this, de) > 0 || this.is_fork
        ? (L(this, k, oe).call(this, n.effects),
          L(this, k, oe).call(this, n.render_effects),
          L(this, k, oe).call(this, n.block_effects))
        : ((it = this),
          (y = null),
          It(n.render_effects),
          It(n.effects),
          (it = null),
          (r = u(this, Me)) == null || r.resolve()),
      (m = null);
  }
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n),
      (t.f & ne) === 0 &&
        (this.current.set(t, t.v), m == null || m.set(t, t.v));
  }
  activate() {
    (y = this), this.apply();
  }
  deactivate() {
    y === this && ((y = null), (m = null));
  }
  flush() {
    if ((this.activate(), B.length > 0)) {
      if ((_t(), y !== null && y !== this)) return;
    } else u(this, _e) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of u(this, Ae)) t(this);
    u(this, Ae).clear();
  }
  increment(t) {
    z(this, _e, u(this, _e) + 1), t && z(this, de, u(this, de) + 1);
  }
  decrement(t) {
    z(this, _e, u(this, _e) - 1),
      t && z(this, de, u(this, de) - 1),
      this.revive();
  }
  revive() {
    for (const t of u(this, ke)) E(t, N), be(t);
    for (const t of u(this, xe)) E(t, ee), be(t);
    z(this, ke, []), z(this, xe, []), this.flush();
  }
  oncommit(t) {
    u(this, Te).add(t);
  }
  ondiscard(t) {
    u(this, Ae).add(t);
  }
  settled() {
    return (u(this, Me) ?? z(this, Me, Yt())).promise;
  }
  static ensure() {
    if (y === null) {
      const t = (y = new We());
      ce.add(y),
        Oe ||
          We.enqueue(() => {
            y === t && t.flush();
          });
    }
    return y;
  }
  static enqueue(t) {
    bt(t);
  }
  apply() {}
};
(Te = new WeakMap()),
  (Ae = new WeakMap()),
  (_e = new WeakMap()),
  (de = new WeakMap()),
  (Me = new WeakMap()),
  (ke = new WeakMap()),
  (xe = new WeakMap()),
  (k = new WeakSet()),
  (ut = function (t, n) {
    var c;
    t.f ^= x;
    for (var r = t.first; r !== null; ) {
      var s = r.f,
        i = (s & (Q | ge)) !== 0,
        a = i && (s & x) !== 0,
        l = a || (s & U) !== 0 || this.skipped_effects.has(r);
      if (
        ((r.f & ht) !== 0 &&
          (c = r.b) != null &&
          c.is_pending() &&
          (n = {
            parent: n,
            effect: r,
            effects: [],
            render_effects: [],
            block_effects: [],
          }),
        !l && r.fn !== null)
      ) {
        i
          ? (r.f ^= x)
          : (s & ze) !== 0
          ? n.effects.push(r)
          : Ye(r) && ((r.f & J) !== 0 && n.block_effects.push(r), Pe(r));
        var f = r.first;
        if (f !== null) {
          r = f;
          continue;
        }
      }
      var o = r.parent;
      for (r = r.next; r === null && o !== null; )
        o === n.effect &&
          (L(this, k, oe).call(this, n.effects),
          L(this, k, oe).call(this, n.render_effects),
          L(this, k, oe).call(this, n.block_effects),
          (n = n.parent)),
          (r = o.next),
          (o = o.parent);
    }
  }),
  (oe = function (t) {
    for (const n of t)
      ((n.f & N) !== 0 ? u(this, ke) : u(this, xe)).push(n), E(n, x);
  }),
  (Wt = function () {
    if (u(this, de) === 0) {
      for (const t of u(this, Te)) t();
      u(this, Te).clear();
    }
    u(this, _e) === 0 && L(this, k, Kt).call(this);
  }),
  (Kt = function () {
    var s;
    if (ce.size > 1) {
      this.previous.clear();
      var t = m,
        n = !0,
        r = {
          parent: null,
          effect: null,
          effects: [],
          render_effects: [],
          block_effects: [],
        };
      for (const i of ce) {
        if (i === this) {
          n = !1;
          continue;
        }
        const a = [];
        for (const [f, o] of this.current) {
          if (i.current.has(f))
            if (n && o !== i.current.get(f)) i.current.set(f, o);
            else continue;
          a.push(f);
        }
        if (a.length === 0) continue;
        const l = [...i.current.keys()].filter((f) => !this.current.has(f));
        if (l.length > 0) {
          const f = new Set(),
            o = new Map();
          for (const c of a) zt(c, l, f, o);
          if (B.length > 0) {
            (y = i), i.apply();
            for (const c of B) L((s = i), k, ut).call(s, c, r);
            (B = []), i.deactivate();
          }
        }
      }
      (y = null), (m = t);
    }
    (this.committed = !0), ce.delete(this);
  });
let me = We;
function ct(e) {
  var t = Oe;
  Oe = !0;
  try {
    var n;
    for (e && (y !== null && _t(), (n = e())); ; ) {
      if ((rr(), B.length === 0 && (y == null || y.flush(), B.length === 0)))
        return (tt = null), n;
      _t();
    }
  } finally {
    Oe = t;
  }
}
function _t() {
  var e = pe;
  lt = !0;
  try {
    var t = 0;
    for (Pt(!0); B.length > 0; ) {
      var n = me.ensure();
      if (t++ > 1e3) {
        var r, s;
        ir();
      }
      n.process(B), re.clear();
    }
  } finally {
    (lt = !1), Pt(e), (tt = null);
  }
}
function ir() {
  try {
    qn();
  } catch (e) {
    Ue(e, tt);
  }
}
let F = null;
function It(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (
        (r.f & (ve | U)) === 0 &&
        Ye(r) &&
        ((F = new Set()),
        Pe(r),
        r.deps === null &&
          r.first === null &&
          r.nodes_start === null &&
          (r.teardown === null && r.ac === null ? cn(r) : (r.fn = null)),
        (F == null ? void 0 : F.size) > 0)
      ) {
        re.clear();
        for (const s of F) {
          if ((s.f & (ve | U)) !== 0) continue;
          const i = [s];
          let a = s.parent;
          for (; a !== null; )
            F.has(a) && (F.delete(a), i.push(a)), (a = a.parent);
          for (let l = i.length - 1; l >= 0; l--) {
            const f = i[l];
            (f.f & (ve | U)) === 0 && Pe(f);
          }
        }
        F.clear();
      }
    }
    F = null;
  }
}
function zt(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & T) !== 0
        ? zt(s, t, n, r)
        : (i & (pt | J)) !== 0 &&
          (i & N) === 0 &&
          Zt(s, t, r) &&
          (E(s, N), be(s));
    }
}
function Xt(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      (r & T) !== 0 ? Xt(n, t) : (r & ft) !== 0 && (E(n, N), t.add(n));
    }
}
function Zt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (t.includes(s)) return !0;
      if ((s.f & T) !== 0 && Zt(s, t, n)) return n.set(s, !0), !0;
    }
  return n.set(e, !1), !1;
}
function be(e) {
  for (var t = (tt = e); t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (lt && t === w && (n & J) !== 0 && (n & Bt) === 0) return;
    if ((n & (ge | Q)) !== 0) {
      if ((n & x) === 0) return;
      t.f ^= x;
    }
  }
  B.push(t);
}
function bs(e) {
  Yn(), y !== null && Hn();
  var t = me.ensure();
  t.is_fork = !0;
  var n = !1,
    r = t.settled();
  ct(e);
  for (var [s, i] of t.previous) s.v = i;
  return {
    commit: async () => {
      if (n) {
        await r;
        return;
      }
      ce.has(t) || Bn(), (n = !0), (t.is_fork = !1);
      for (var [a, l] of t.current) a.v = l;
      ct(() => {
        var f = new Set();
        for (var o of t.current.keys()) Xt(o, f);
        cr(f), tn();
      }),
        t.revive(),
        await r;
    },
    discard: () => {
      !n && ce.has(t) && (ce.delete(t), t.discard());
    },
  };
}
function ar(e, t, n, r) {
  const s = qe() ? gt : lr;
  if (n.length === 0 && e.length === 0) {
    r(t.map(s));
    return;
  }
  var i = y,
    a = w,
    l = fr();
  function f() {
    Promise.all(n.map((o) => or(o)))
      .then((o) => {
        l();
        try {
          r([...t.map(s), ...o]);
        } catch (c) {
          (a.f & ve) === 0 && Ue(c, a);
        }
        i == null || i.deactivate(), Ve();
      })
      .catch((o) => {
        Ue(o, a);
      });
  }
  e.length > 0
    ? Promise.all(e).then(() => {
        l();
        try {
          return f();
        } finally {
          i == null || i.deactivate(), Ve();
        }
      })
    : f();
}
function fr() {
  var e = w,
    t = v,
    n = b,
    r = y;
  return function (i = !0) {
    ie(e), $(t), He(n), i && (r == null || r.activate());
  };
}
function Ve() {
  ie(null), $(null), He(null);
}
function gt(e) {
  var t = T | N,
    n = v !== null && (v.f & T) !== 0 ? v : null;
  return (
    w !== null && (w.f |= je),
    {
      ctx: b,
      deps: null,
      effects: null,
      equals: Vt,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: A,
      wv: 0,
      parent: n ?? w,
      ac: null,
    }
  );
}
function or(e, t) {
  let n = w;
  n === null && Mn();
  var r = n.b,
    s = void 0,
    i = Tt(A),
    a = !v,
    l = new Map();
  return (
    wr(() => {
      var _;
      var f = Yt();
      s = f.promise;
      try {
        Promise.resolve(e())
          .then(f.resolve, f.reject)
          .then(() => {
            o === y && o.committed && o.deactivate(), Ve();
          });
      } catch (d) {
        f.reject(d), Ve();
      }
      var o = y;
      if (a) {
        var c = !r.is_pending();
        r.update_pending_count(1),
          o.increment(c),
          (_ = l.get(o)) == null || _.reject(Ee),
          l.delete(o),
          l.set(o, f);
      }
      const h = (d, g = void 0) => {
        if ((o.activate(), g)) g !== Ee && ((i.f |= ne), dt(i, g));
        else {
          (i.f & ne) !== 0 && (i.f ^= ne), dt(i, d);
          for (const [M, W] of l) {
            if ((l.delete(M), M === o)) break;
            W.reject(Ee);
          }
        }
        a && (r.update_pending_count(-1), o.decrement(c));
      };
      f.promise.then(h, (d) => h(null, d || "unknown"));
    }),
    kt(() => {
      for (const f of l.values()) f.reject(Ee);
    }),
    new Promise((f) => {
      function o(c) {
        function h() {
          c === s ? f(i) : o(s);
        }
        c.then(h, h);
      }
      o(s);
    })
  );
}
function gs(e) {
  const t = gt(e);
  return hn(t), t;
}
function lr(e) {
  const t = gt(e);
  return (t.equals = $t), t;
}
function Jt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) V(t[n]);
  }
}
function ur(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & T) === 0) return t;
    t = t.parent;
  }
  return null;
}
function Et(e) {
  var t,
    n = w;
  ie(ur(e));
  try {
    (e.f &= ~Ce), Jt(e), (t = mn(e));
  } finally {
    ie(n);
  }
  return t;
}
function Qt(e) {
  var t = Et(e);
  if ((e.equals(t) || ((e.v = t), (e.wv = wn())), !Se))
    if (m !== null) At() && m.set(e, e.v);
    else {
      var n = (e.f & q) === 0 ? ee : x;
      E(e, n);
    }
}
let $e = new Set();
const re = new Map();
function cr(e) {
  $e = e;
}
let en = !1;
function Tt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: Vt, rv: 0, wv: 0 };
  return n;
}
function te(e, t) {
  const n = Tt(e);
  return hn(n), n;
}
function Es(e, t = !1, n = !0) {
  var s;
  const r = Tt(e);
  return (
    t || (r.equals = $t),
    Qe &&
      n &&
      b !== null &&
      b.l !== null &&
      ((s = b.l).s ?? (s.s = [])).push(r),
    r
  );
}
function le(e, t, n = !1) {
  v !== null &&
    (!H || (v.f & ft) !== 0) &&
    qe() &&
    (v.f & (T | J | pt | ft)) !== 0 &&
    !(I != null && I.includes(e)) &&
    $n();
  let r = n ? Re(t) : t;
  return dt(e, r);
}
function dt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Se ? re.set(e, t) : re.set(e, n), (e.v = t);
    var r = me.ensure();
    r.capture(e, n),
      (e.f & T) !== 0 &&
        ((e.f & N) !== 0 && Et(e), E(e, (e.f & q) !== 0 ? x : ee)),
      (e.wv = wn()),
      nn(e, N),
      qe() &&
        w !== null &&
        (w.f & x) !== 0 &&
        (w.f & (Q | ge)) === 0 &&
        (P === null ? Tr([e]) : P.push(e)),
      !r.is_fork && $e.size > 0 && !en && tn();
  }
  return t;
}
function tn() {
  en = !1;
  const e = Array.from($e);
  for (const t of e) (t.f & x) !== 0 && E(t, ee), Ye(t) && Pe(t);
  $e.clear();
}
function at(e) {
  le(e, e.v + 1);
}
function nn(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = qe(), s = n.length, i = 0; i < s; i++) {
      var a = n[i],
        l = a.f;
      if (!(!r && a === w)) {
        var f = (l & N) === 0;
        if ((f && E(a, t), (l & T) !== 0)) {
          var o = a;
          m == null || m.delete(o),
            (l & Ce) === 0 && (l & q && (a.f |= Ce), nn(o, ee));
        } else f && ((l & J) !== 0 && F !== null && F.add(a), be(a));
      }
    }
}
function Re(e) {
  if (typeof e != "object" || e === null || he in e) return e;
  const t = qt(e);
  if (t !== Nn && t !== On) return e;
  var n = new Map(),
    r = xn(e),
    s = te(0),
    i = we,
    a = (l) => {
      if (we === i) return l();
      var f = v,
        o = we;
      $(null), Lt(i);
      var c = l();
      return $(f), Lt(o), c;
    };
  return (
    r && n.set("length", te(e.length)),
    new Proxy(e, {
      defineProperty(l, f, o) {
        (!("value" in o) ||
          o.configurable === !1 ||
          o.enumerable === !1 ||
          o.writable === !1) &&
          Un();
        var c = n.get(f);
        return (
          c === void 0
            ? (c = a(() => {
                var h = te(o.value);
                return n.set(f, h), h;
              }))
            : le(c, o.value, !0),
          !0
        );
      },
      deleteProperty(l, f) {
        var o = n.get(f);
        if (o === void 0) {
          if (f in l) {
            const c = a(() => te(A));
            n.set(f, c), at(s);
          }
        } else le(o, A), at(s);
        return !0;
      },
      get(l, f, o) {
        var d;
        if (f === he) return e;
        var c = n.get(f),
          h = f in l;
        if (
          (c === void 0 &&
            (!h || ((d = Ne(l, f)) != null && d.writable)) &&
            ((c = a(() => {
              var g = Re(h ? l[f] : A),
                M = te(g);
              return M;
            })),
            n.set(f, c)),
          c !== void 0)
        ) {
          var _ = Ie(c);
          return _ === A ? void 0 : _;
        }
        return Reflect.get(l, f, o);
      },
      getOwnPropertyDescriptor(l, f) {
        var o = Reflect.getOwnPropertyDescriptor(l, f);
        if (o && "value" in o) {
          var c = n.get(f);
          c && (o.value = Ie(c));
        } else if (o === void 0) {
          var h = n.get(f),
            _ = h == null ? void 0 : h.v;
          if (h !== void 0 && _ !== A)
            return { enumerable: !0, configurable: !0, value: _, writable: !0 };
        }
        return o;
      },
      has(l, f) {
        var _;
        if (f === he) return !0;
        var o = n.get(f),
          c = (o !== void 0 && o.v !== A) || Reflect.has(l, f);
        if (
          o !== void 0 ||
          (w !== null && (!c || ((_ = Ne(l, f)) != null && _.writable)))
        ) {
          o === void 0 &&
            ((o = a(() => {
              var d = c ? Re(l[f]) : A,
                g = te(d);
              return g;
            })),
            n.set(f, o));
          var h = Ie(o);
          if (h === A) return !1;
        }
        return c;
      },
      set(l, f, o, c) {
        var xt;
        var h = n.get(f),
          _ = f in l;
        if (r && f === "length")
          for (var d = o; d < h.v; d += 1) {
            var g = n.get(d + "");
            g !== void 0
              ? le(g, A)
              : d in l && ((g = a(() => te(A))), n.set(d + "", g));
          }
        if (h === void 0)
          (!_ || ((xt = Ne(l, f)) != null && xt.writable)) &&
            ((h = a(() => te(void 0))), le(h, Re(o)), n.set(f, h));
        else {
          _ = h.v !== A;
          var M = a(() => Re(o));
          le(h, M);
        }
        var W = Reflect.getOwnPropertyDescriptor(l, f);
        if ((W != null && W.set && W.set.call(c, o), !_)) {
          if (r && typeof f == "string") {
            var fe = n.get("length"),
              rt = Number(f);
            Number.isInteger(rt) && rt >= fe.v && le(fe, rt + 1);
          }
          at(s);
        }
        return !0;
      },
      ownKeys(l) {
        Ie(s);
        var f = Reflect.ownKeys(l).filter((h) => {
          var _ = n.get(h);
          return _ === void 0 || _.v !== A;
        });
        for (var [o, c] of n) c.v !== A && !(o in l) && f.push(o);
        return f;
      },
      setPrototypeOf() {
        Vn();
      },
    })
  );
}
function Nt(e) {
  try {
    if (e !== null && typeof e == "object" && he in e) return e[he];
  } catch {}
  return e;
}
function Ts(e, t) {
  return Object.is(Nt(e), Nt(t));
}
var Ot, _r, rn, sn, an;
function As() {
  if (Ot === void 0) {
    (Ot = window), (_r = document), (rn = /Firefox/.test(navigator.userAgent));
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    (sn = Ne(t, "firstChild").get),
      (an = Ne(t, "nextSibling").get),
      Rt(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      Rt(n) && (n.__t = void 0);
  }
}
function Z(e = "") {
  return document.createTextNode(e);
}
function se(e) {
  return sn.call(e);
}
function ae(e) {
  return an.call(e);
}
function ks(e, t) {
  if (!O) return se(e);
  var n = se(p);
  if (n === null) n = p.appendChild(Z());
  else if (t && n.nodeType !== Je) {
    var r = Z();
    return n == null || n.before(r), ye(r), r;
  }
  return ye(n), n;
}
function xs(e, t = !1) {
  if (!O) {
    var n = se(e);
    return n instanceof Comment && n.data === "" ? ae(n) : n;
  }
  if (t && (p == null ? void 0 : p.nodeType) !== Je) {
    var r = Z();
    return p == null || p.before(r), ye(r), r;
  }
  return p;
}
function Ss(e, t = 1, n = !1) {
  let r = O ? p : e;
  for (var s; t--; ) (s = r), (r = ae(r));
  if (!O) return r;
  if (n && (r == null ? void 0 : r.nodeType) !== Je) {
    var i = Z();
    return r === null ? s == null || s.after(i) : r.before(i), ye(i), i;
  }
  return ye(r), r;
}
function dr(e) {
  e.textContent = "";
}
function vr() {
  return !1;
}
function Rs(e, t) {
  if (t) {
    const n = document.body;
    (e.autofocus = !0),
      bt(() => {
        document.activeElement === n && e.focus();
      });
  }
}
function Is(e) {
  O && se(e) !== null && dr(e);
}
let Ct = !1;
function hr() {
  Ct ||
    ((Ct = !0),
    document.addEventListener(
      "reset",
      (e) => {
        Promise.resolve().then(() => {
          var t;
          if (!e.defaultPrevented)
            for (const n of e.target.elements)
              (t = n.__on_r) == null || t.call(n);
        });
      },
      { capture: !0 }
    ));
}
function Ns(e, t, n, r = !0) {
  r && n();
  for (var s of t) e.addEventListener(s, n);
  kt(() => {
    for (var i of t) e.removeEventListener(i, n);
  });
}
function nt(e) {
  var t = v,
    n = w;
  $(null), ie(null);
  try {
    return e();
  } finally {
    $(t), ie(n);
  }
}
function Os(e, t, n, r = n) {
  e.addEventListener(t, () => nt(n));
  const s = e.__on_r;
  s
    ? (e.__on_r = () => {
        s(), r(!0);
      })
    : (e.__on_r = () => r(!0)),
    hr();
}
function fn(e) {
  w === null && (v === null && jn(), Fn()), Se && Ln();
}
function pr(e, t) {
  var n = t.last;
  n === null
    ? (t.last = t.first = e)
    : ((n.next = e), (e.prev = n), (t.last = e));
}
function G(e, t, n, r = !0) {
  var s = w;
  s !== null && (s.f & U) !== 0 && (e |= U);
  var i = {
    ctx: b,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | N | q,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s,
    b: s && s.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null,
  };
  if (n)
    try {
      Pe(i), (i.f |= Ze);
    } catch (f) {
      throw (V(i), f);
    }
  else t !== null && be(i);
  if (r) {
    var a = i;
    if (
      (n &&
        a.deps === null &&
        a.teardown === null &&
        a.nodes_start === null &&
        a.first === a.last &&
        (a.f & je) === 0 &&
        ((a = a.first),
        (e & J) !== 0 && (e & Be) !== 0 && a !== null && (a.f |= Be)),
      a !== null &&
        ((a.parent = s),
        s !== null && pr(a, s),
        v !== null && (v.f & T) !== 0 && (e & ge) === 0))
    ) {
      var l = v;
      (l.effects ?? (l.effects = [])).push(a);
    }
  }
  return i;
}
function At() {
  return v !== null && !H;
}
function kt(e) {
  const t = G(Xe, null, !1);
  return E(t, x), (t.teardown = e), t;
}
function Cs(e) {
  fn();
  var t = w.f,
    n = !v && (t & Q) !== 0 && (t & Ze) === 0;
  if (n) {
    var r = b;
    (r.e ?? (r.e = [])).push(e);
  } else return on(e);
}
function on(e) {
  return G(ze | Ht, e, !1);
}
function Ds(e) {
  return fn(), G(Xe | Ht, e, !0);
}
function Ps(e) {
  me.ensure();
  const t = G(ge | je, e, !0);
  return (n = {}) =>
    new Promise((r) => {
      n.outro
        ? _n(t, () => {
            V(t), r(void 0);
          })
        : (V(t), r(void 0));
    });
}
function Ms(e) {
  return G(ze, e, !1);
}
function wr(e) {
  return G(pt | je, e, !0);
}
function Ls(e, t = 0) {
  return G(Xe | t, e, !0);
}
function Fs(e, t = [], n = [], r = [], s = !1) {
  ar(r, t, n, (i) => {
    G(s ? ze : Xe, () => e(...i.map(Ie)), !0);
  });
}
function js(e, t = 0) {
  var n = G(J | t, e, !0);
  return n;
}
function Dt(e, t = !0) {
  return G(Q | je, e, !0, t);
}
function ln(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Se,
      r = v;
    Mt(!0), $(null);
    try {
      t.call(null);
    } finally {
      Mt(n), $(r);
    }
  }
}
function un(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null &&
      nt(() => {
        s.abort(Ee);
      });
    var r = n.next;
    (n.f & ge) !== 0 ? (n.parent = null) : V(n, t), (n = r);
  }
}
function yr(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Q) === 0 && V(t), (t = n);
  }
}
function V(e, t = !0) {
  var n = !1;
  (t || (e.f & Bt) !== 0) &&
    e.nodes_start !== null &&
    e.nodes_end !== null &&
    (mr(e.nodes_start, e.nodes_end), (n = !0)),
    un(e, t && !n),
    Ge(e, 0),
    E(e, ve);
  var r = e.transitions;
  if (r !== null) for (const i of r) i.stop();
  ln(e);
  var s = e.parent;
  s !== null && s.first !== null && cn(e),
    (e.next =
      e.prev =
      e.teardown =
      e.ctx =
      e.deps =
      e.fn =
      e.nodes_start =
      e.nodes_end =
      e.ac =
        null);
}
function mr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : ae(e);
    e.remove(), (e = n);
  }
}
function cn(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  n !== null && (n.next = r),
    r !== null && (r.prev = n),
    t !== null &&
      (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function _n(e, t, n = !0) {
  var r = [];
  dn(e, r, !0),
    br(r, () => {
      n && V(e), t && t();
    });
}
function br(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var s of e) s.out(r);
  } else t();
}
function dn(e, t, n) {
  if ((e.f & U) === 0) {
    if (((e.f ^= U), e.transitions !== null))
      for (const a of e.transitions) (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var s = r.next,
        i = (r.f & Be) !== 0 || ((r.f & Q) !== 0 && (e.f & J) !== 0);
      dn(r, t, i ? n : !1), (r = s);
    }
  }
}
function gr(e) {
  vn(e, !0);
}
function vn(e, t) {
  if ((e.f & U) !== 0) {
    (e.f ^= U), (e.f & x) === 0 && (E(e, N), be(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next,
        s = (n.f & Be) !== 0 || (n.f & Q) !== 0;
      vn(n, s ? t : !1), (n = r);
    }
    if (e.transitions !== null)
      for (const i of e.transitions) (i.is_global || t) && i.in();
  }
}
function Er(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var s = n === r ? null : ae(n);
    t.append(n), (n = s);
  }
}
let pe = !1;
function Pt(e) {
  pe = e;
}
let Se = !1;
function Mt(e) {
  Se = e;
}
let v = null,
  H = !1;
function $(e) {
  v = e;
}
let w = null;
function ie(e) {
  w = e;
}
let I = null;
function hn(e) {
  v !== null && (I === null ? (I = [e]) : I.push(e));
}
let R = null,
  C = 0,
  P = null;
function Tr(e) {
  P = e;
}
let pn = 1,
  De = 0,
  we = De;
function Lt(e) {
  we = e;
}
function wn() {
  return ++pn;
}
function Ye(e) {
  var t = e.f;
  if ((t & N) !== 0) return !0;
  if ((t & T && (e.f &= ~Ce), (t & ee) !== 0)) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, s = 0; s < r; s++) {
        var i = n[s];
        if ((Ye(i) && Qt(i), i.wv > e.wv)) return !0;
      }
    (t & q) !== 0 && m === null && E(e, x);
  }
  return !1;
}
function yn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(I != null && I.includes(e)))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & T) !== 0
        ? yn(i, t, !1)
        : t === i && (n ? E(i, N) : (i.f & x) !== 0 && E(i, ee), be(i));
    }
}
function mn(e) {
  var g;
  var t = R,
    n = C,
    r = P,
    s = v,
    i = I,
    a = b,
    l = H,
    f = we,
    o = e.f;
  (R = null),
    (C = 0),
    (P = null),
    (v = (o & (Q | ge)) === 0 ? e : null),
    (I = null),
    He(e.ctx),
    (H = !1),
    (we = ++De),
    e.ac !== null &&
      (nt(() => {
        e.ac.abort(Ee);
      }),
      (e.ac = null));
  try {
    e.f |= ot;
    var c = e.fn,
      h = c(),
      _ = e.deps;
    if (R !== null) {
      var d;
      if ((Ge(e, C), _ !== null && C > 0))
        for (_.length = C + R.length, d = 0; d < R.length; d++) _[C + d] = R[d];
      else e.deps = _ = R;
      if (pe && At() && (e.f & q) !== 0)
        for (d = C; d < _.length; d++)
          ((g = _[d]).reactions ?? (g.reactions = [])).push(e);
    } else _ !== null && C < _.length && (Ge(e, C), (_.length = C));
    if (qe() && P !== null && !H && _ !== null && (e.f & (T | ee | N)) === 0)
      for (d = 0; d < P.length; d++) yn(P[d], e);
    return (
      s !== null &&
        s !== e &&
        (De++, P !== null && (r === null ? (r = P) : r.push(...P))),
      (e.f & ne) !== 0 && (e.f ^= ne),
      h
    );
  } catch (M) {
    return sr(M);
  } finally {
    (e.f ^= ot),
      (R = t),
      (C = n),
      (P = r),
      (v = s),
      (I = i),
      He(a),
      (H = l),
      (we = f);
  }
}
function Ar(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Sn.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? (n = t.reactions = null) : ((n[r] = n[s]), n.pop());
    }
  }
  n === null &&
    (t.f & T) !== 0 &&
    (R === null || !R.includes(t)) &&
    (E(t, ee), (t.f & q) !== 0 && ((t.f ^= q), (t.f &= ~Ce)), Jt(t), Ge(t, 0));
}
function Ge(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) Ar(e, n[r]);
}
function Pe(e) {
  var t = e.f;
  if ((t & ve) === 0) {
    E(e, x);
    var n = w,
      r = pe;
    (w = e), (pe = !0);
    try {
      (t & J) !== 0 ? yr(e) : un(e), ln(e);
      var s = mn(e);
      (e.teardown = typeof s == "function" ? s : null), (e.wv = pn);
      var i;
      jt && Jn && (e.f & N) !== 0 && e.deps;
    } finally {
      (pe = r), (w = n);
    }
  }
}
async function qs() {
  await Promise.resolve(), ct();
}
function Ys() {
  return me.ensure().settled();
}
function Ie(e) {
  var t = e.f,
    n = (t & T) !== 0;
  if (v !== null && !H) {
    var r = w !== null && (w.f & ve) !== 0;
    if (!r && !(I != null && I.includes(e))) {
      var s = v.deps;
      if ((v.f & ot) !== 0)
        e.rv < De &&
          ((e.rv = De),
          R === null && s !== null && s[C] === e
            ? C++
            : R === null
            ? (R = [e])
            : R.includes(e) || R.push(e));
      else {
        (v.deps ?? (v.deps = [])).push(e);
        var i = e.reactions;
        i === null ? (e.reactions = [v]) : i.includes(v) || i.push(v);
      }
    }
  }
  if (Se) {
    if (re.has(e)) return re.get(e);
    if (n) {
      var a = e,
        l = a.v;
      return (
        (((a.f & x) === 0 && a.reactions !== null) || gn(a)) && (l = Et(a)),
        re.set(a, l),
        l
      );
    }
  } else if (n) {
    if (((a = e), m != null && m.has(a))) return m.get(a);
    Ye(a) && Qt(a), pe && At() && (a.f & q) === 0 && bn(a);
  } else if (m != null && m.has(e)) return m.get(e);
  if ((e.f & ne) !== 0) throw e.v;
  return e.v;
}
function bn(e) {
  if (e.deps !== null) {
    e.f ^= q;
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e),
        (t.f & T) !== 0 && (t.f & q) === 0 && bn(t);
  }
}
function gn(e) {
  if (e.v === A) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (re.has(t) || ((t.f & T) !== 0 && gn(t))) return !0;
  return !1;
}
function Bs(e) {
  var t = H;
  try {
    return (H = !0), e();
  } finally {
    H = t;
  }
}
const kr = -7169;
function E(e, t) {
  e.f = (e.f & kr) | t;
}
function Hs(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (he in e) vt(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && he in n && vt(n);
      }
  }
}
function vt(e, t = new Set()) {
  if (
    typeof e == "object" &&
    e !== null &&
    !(e instanceof EventTarget) &&
    !t.has(e)
  ) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        vt(e[r], t);
      } catch {}
    const n = qt(e);
    if (
      n !== Object.prototype &&
      n !== Array.prototype &&
      n !== Map.prototype &&
      n !== Set.prototype &&
      n !== Date.prototype
    ) {
      const r = In(n);
      for (let s in r) {
        const i = r[s].get;
        if (i)
          try {
            i.call(e);
          } catch {}
      }
    }
  }
}
function Us(e) {
  return (
    e.endsWith("capture") &&
    e !== "gotpointercapture" &&
    e !== "lostpointercapture"
  );
}
const xr = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart",
];
function Vs(e) {
  return xr.includes(e);
}
const Sr = {
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback",
};
function $s(e) {
  return (e = e.toLowerCase()), Sr[e] ?? e;
}
const Rr = ["touchstart", "touchmove"];
function Gs(e) {
  return Rr.includes(e);
}
const Ir = new Set(),
  Nr = new Set();
function En(e, t, n, r = {}) {
  function s(i) {
    if ((r.capture || Or.call(t, i), !i.cancelBubble))
      return nt(() => (n == null ? void 0 : n.call(this, i)));
  }
  return (
    e.startsWith("pointer") || e.startsWith("touch") || e === "wheel"
      ? bt(() => {
          t.addEventListener(e, s, r);
        })
      : t.addEventListener(e, s, r),
    s
  );
}
function Ws(e, t, n, r = {}) {
  var s = En(t, e, n, r);
  return () => {
    e.removeEventListener(t, s, r);
  };
}
function Ks(e, t, n, r, s) {
  var i = { capture: r, passive: s },
    a = En(e, t, n, i);
  (t === document.body ||
    t === window ||
    t === document ||
    t instanceof HTMLMediaElement) &&
    kt(() => {
      t.removeEventListener(e, a, i);
    });
}
function zs(e) {
  for (var t = 0; t < e.length; t++) Ir.add(e[t]);
  for (var n of Nr) n(e);
}
let Ft = null;
function Or(e) {
  var W;
  var t = this,
    n = t.ownerDocument,
    r = e.type,
    s = ((W = e.composedPath) == null ? void 0 : W.call(e)) || [],
    i = s[0] || e.target;
  Ft = e;
  var a = 0,
    l = Ft === e && e.__root;
  if (l) {
    var f = s.indexOf(l);
    if (f !== -1 && (t === document || t === window)) {
      e.__root = t;
      return;
    }
    var o = s.indexOf(t);
    if (o === -1) return;
    f <= o && (a = f);
  }
  if (((i = s[a] || e.target), i !== t)) {
    Rn(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      },
    });
    var c = v,
      h = w;
    $(null), ie(null);
    try {
      for (var _, d = []; i !== null; ) {
        var g = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var M = i["__" + r];
          M != null && (!i.disabled || e.target === i) && M.call(i, e);
        } catch (fe) {
          _ ? d.push(fe) : (_ = fe);
        }
        if (e.cancelBubble || g === t || g === null) break;
        i = g;
      }
      if (_) {
        for (let fe of d)
          queueMicrotask(() => {
            throw fe;
          });
        throw _;
      }
    } finally {
      (e.__root = t), delete e.currentTarget, $(c), ie(h);
    }
  }
}
function Tn(e) {
  var t = document.createElement("template");
  return (t.innerHTML = e.replaceAll("<!>", "<!---->")), t.content;
}
function X(e, t) {
  var n = w;
  n.nodes_start === null && ((n.nodes_start = e), (n.nodes_end = t));
}
function Xs(e, t) {
  var n = (t & Gn) !== 0,
    r = (t & Wn) !== 0,
    s,
    i = !e.startsWith("<!>");
  return () => {
    if (O) return X(p, null), p;
    s === void 0 && ((s = Tn(i ? e : "<!>" + e)), n || (s = se(s)));
    var a = r || rn ? document.importNode(s, !0) : s.cloneNode(!0);
    if (n) {
      var l = se(a),
        f = a.lastChild;
      X(l, f);
    } else X(a, a);
    return a;
  };
}
function Cr(e, t, n = "svg") {
  var r = !e.startsWith("<!>"),
    s = `<${n}>${r ? e : "<!>" + e}</${n}>`,
    i;
  return () => {
    if (O) return X(p, null), p;
    if (!i) {
      var a = Tn(s),
        l = se(a);
      i = se(l);
    }
    var f = i.cloneNode(!0);
    return X(f, f), f;
  };
}
function Zs(e, t) {
  return Cr(e, t, "svg");
}
function Js(e = "") {
  if (!O) {
    var t = Z(e + "");
    return X(t, t), t;
  }
  var n = p;
  return n.nodeType !== Je && (n.before((n = Z())), ye(n)), X(n, n), n;
}
function Qs() {
  if (O) return X(p, null), p;
  var e = document.createDocumentFragment(),
    t = document.createComment(""),
    n = Z();
  return e.append(t, n), X(t, n), e;
}
function ei(e, t) {
  if (O) {
    var n = w;
    ((n.f & Ze) === 0 || n.nodes_end === null) && (n.nodes_end = p), Ut();
    return;
  }
  e !== null && e.before(t);
}
function ti() {
  var e, t;
  if (
    O &&
    p &&
    p.nodeType === wt &&
    (e = p.textContent) != null &&
    e.startsWith("$")
  ) {
    const n = p.textContent.substring(1);
    return Ut(), n;
  }
  return (
    (t = window.__svelte ?? (window.__svelte = {})).uid ?? (t.uid = 1),
    `c${window.__svelte.uid++}`
  );
}
var j, Y, D, Le, Fe, Ke;
class ni {
  constructor(t, n = !0) {
    K(this, "anchor");
    S(this, j, new Map());
    S(this, Y, new Map());
    S(this, D, new Map());
    S(this, Le, !0);
    S(this, Fe, () => {
      var t = y;
      if (u(this, j).has(t)) {
        var n = u(this, j).get(t),
          r = u(this, Y).get(n);
        if (r) gr(r);
        else {
          var s = u(this, D).get(n);
          s &&
            (u(this, Y).set(n, s.effect),
            u(this, D).delete(n),
            s.fragment.lastChild.remove(),
            this.anchor.before(s.fragment),
            (r = s.effect));
        }
        for (const [i, a] of u(this, j)) {
          if ((u(this, j).delete(i), i === t)) break;
          const l = u(this, D).get(a);
          l && (V(l.effect), u(this, D).delete(a));
        }
        for (const [i, a] of u(this, Y)) {
          if (i === n) continue;
          const l = () => {
            if (Array.from(u(this, j).values()).includes(i)) {
              var o = document.createDocumentFragment();
              Er(a, o),
                o.append(Z()),
                u(this, D).set(i, { effect: a, fragment: o });
            } else V(a);
            u(this, Y).delete(i);
          };
          u(this, Le) || !r ? _n(a, l, !1) : l();
        }
      }
    });
    S(this, Ke, (t) => {
      u(this, j).delete(t);
      const n = Array.from(u(this, j).values());
      for (const [r, s] of u(this, D))
        n.includes(r) || (V(s.effect), u(this, D).delete(r));
    });
    (this.anchor = t), z(this, Le, n);
  }
  ensure(t, n) {
    var r = y,
      s = vr();
    if (n && !u(this, Y).has(t) && !u(this, D).has(t))
      if (s) {
        var i = document.createDocumentFragment(),
          a = Z();
        i.append(a), u(this, D).set(t, { effect: Dt(() => n(a)), fragment: i });
      } else
        u(this, Y).set(
          t,
          Dt(() => n(this.anchor))
        );
    if ((u(this, j).set(r, t), s)) {
      for (const [l, f] of u(this, Y))
        l === t ? r.skipped_effects.delete(f) : r.skipped_effects.add(f);
      for (const [l, f] of u(this, D))
        l === t
          ? r.skipped_effects.delete(f.effect)
          : r.skipped_effects.add(f.effect);
      r.oncommit(u(this, Fe)), r.ondiscard(u(this, Ke));
    } else O && (this.anchor = p), u(this, Fe).call(this);
  }
}
(j = new WeakMap()),
  (Y = new WeakMap()),
  (D = new WeakMap()),
  (Le = new WeakMap()),
  (Fe = new WeakMap()),
  (Ke = new WeakMap());
export {
  _r as $,
  b as A,
  ni as B,
  Ds as C,
  Cs as D,
  Be as E,
  Bs as F,
  Fr as G,
  Cn as H,
  Hs as I,
  gt as J,
  Os as K,
  y as L,
  qs as M,
  Ls as N,
  it as O,
  Ts as P,
  kt as Q,
  bt as R,
  he as S,
  Z as T,
  zr as U,
  ye as V,
  se as W,
  lr as X,
  vs as Y,
  zn as Z,
  ds as _,
  xs as a,
  me as a$,
  us as a0,
  p as a1,
  wt as a2,
  Xn as a3,
  Dt as a4,
  vr as a5,
  Wr as a6,
  Kr as a7,
  dt as a8,
  Es as a9,
  ps as aA,
  ct as aB,
  bs as aC,
  ws as aD,
  Qn as aE,
  tr as aF,
  er as aG,
  Ys as aH,
  Ne as aI,
  $r as aJ,
  es as aK,
  Se as aL,
  ve as aM,
  ts as aN,
  Qr as aO,
  Jr as aP,
  ns as aQ,
  qr as aR,
  Mr as aS,
  J as aT,
  Ze as aU,
  is as aV,
  rs as aW,
  ss as aX,
  nt as aY,
  At as aZ,
  at as a_,
  Tt as aa,
  Pr as ab,
  xn as ac,
  gr as ad,
  _n as ae,
  Zr as af,
  U as ag,
  V as ah,
  Xr as ai,
  ae as aj,
  dn as ak,
  dr as al,
  br as am,
  w as an,
  hs as ao,
  mr as ap,
  mt as aq,
  yt as ar,
  X as as,
  Tn as at,
  Bt as au,
  Dn as av,
  Qe as aw,
  v as ax,
  Hr as ay,
  Vr as az,
  ei as b,
  ie as b0,
  $ as b1,
  He as b2,
  sr as b3,
  Er as b4,
  Ue as b5,
  Gr as b6,
  je as b7,
  ht as b8,
  ls as b9,
  Rn as bA,
  Nn as bB,
  Ns as bC,
  jt as bD,
  we as bE,
  ti as bF,
  jr as bG,
  As as ba,
  Kn as bb,
  Ur as bc,
  Ir as bd,
  Nr as be,
  Ps as bf,
  Or as bg,
  Gs as bh,
  Is as bi,
  os as bj,
  ar as bk,
  as as bl,
  qt as bm,
  Yr as bn,
  fs as bo,
  In as bp,
  Us as bq,
  En as br,
  Rs as bs,
  $s as bt,
  A as bu,
  hr as bv,
  Vs as bw,
  Zn as bx,
  Ot as by,
  Ws as bz,
  ms as c,
  ks as d,
  Ms as e,
  Xs as f,
  Ie as g,
  O as h,
  Ut as i,
  js as j,
  zs as k,
  te as l,
  Re as m,
  _s as n,
  le as o,
  ys as p,
  Js as q,
  cs as r,
  Ss as s,
  Fs as t,
  gs as u,
  Ks as v,
  Qs as w,
  Lr as x,
  qe as y,
  Zs as z,
};

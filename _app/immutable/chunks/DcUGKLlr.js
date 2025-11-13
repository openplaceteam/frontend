import {
  T as ee,
  j as se,
  U as ae,
  V as q,
  h as N,
  W as ue,
  i as de,
  g as P,
  X as ve,
  Y as oe,
  Z as ce,
  _ as Q,
  a0 as U,
  a1 as S,
  a2 as _e,
  a3 as he,
  a4 as W,
  a5 as pe,
  a6 as L,
  a7 as O,
  L as be,
  a8 as $,
  a9 as Ee,
  aa as j,
  ab as re,
  ac as me,
  ad as ne,
  ae as Te,
  af as we,
  ag as X,
  R as Ie,
  ah as fe,
  ai as ge,
  aj as Ae,
  ak as ye,
  al as De,
  am as Ne,
  an as xe,
} from "./iK5FT0Sa.js";
(function () {
  try {
    var f =
      typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : {};
    f.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
  } catch {}
})();
try {
  (function () {
    var f =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof globalThis < "u"
          ? globalThis
          : typeof self < "u"
          ? self
          : {},
      r = new f.Error().stack;
    r &&
      ((f._sentryDebugIds = f._sentryDebugIds || {}),
      (f._sentryDebugIds[r] = "c7eca4e6-8a3e-4f5b-9b4e-e5cdb57b6fc3"),
      (f._sentryDebugIdIdentifier =
        "sentry-dbid-c7eca4e6-8a3e-4f5b-9b4e-e5cdb57b6fc3"));
  })();
} catch {}
let B = null;
function Me(f, r) {
  return r;
}
function Ce(f, r, e) {
  for (var s = f.items, u = [], d = r.length, t = 0; t < d; t++)
    ye(r[t].e, u, !0);
  var _ = d > 0 && u.length === 0 && e !== null;
  if (_) {
    var m = e.parentNode;
    De(m), m.append(e), s.clear(), g(f, r[0].prev, r[d - 1].next);
  }
  Ne(u, () => {
    for (var E = 0; E < d; E++) {
      var o = r[E];
      _ || (s.delete(o.k), g(f, o.prev, o.next)), fe(o.e, !_);
    }
  });
}
function He(f, r, e, s, u, d = null) {
  var t = f,
    _ = { flags: r, items: new Map(), first: null },
    m = (r & ae) !== 0;
  if (m) {
    var E = f;
    t = N ? q(ue(E)) : E.appendChild(ee());
  }
  N && de();
  var o = null,
    y = !1,
    T = new Map(),
    x = ve(() => {
      var v = e();
      return me(v) ? v : v == null ? [] : re(v);
    }),
    i,
    p;
  function n() {
    Re(p, i, _, T, t, u, r, s, e),
      d !== null &&
        (i.length === 0
          ? o
            ? ne(o)
            : (o = W(() => d(t)))
          : o !== null &&
            Te(o, () => {
              o = null;
            }));
  }
  se(() => {
    p ?? (p = xe), (i = P(x));
    var v = i.length;
    if (y && v === 0) return;
    y = v === 0;
    let b = !1;
    if (N) {
      var w = oe(t) === ce;
      w !== (v === 0) && ((t = Q()), q(t), U(!1), (b = !0));
    }
    if (N) {
      for (var A = null, c, a = 0; a < v; a++) {
        if (S.nodeType === _e && S.data === he) {
          (t = S), (b = !0), U(!1);
          break;
        }
        var l = i[a],
          h = s(l, a);
        (c = Z(S, _, A, null, l, h, a, u, r, e)), _.items.set(h, c), (A = c);
      }
      v > 0 && q(Q());
    }
    if (N) v === 0 && d && (o = W(() => d(t)));
    else if (pe()) {
      var C = new Set(),
        M = be;
      for (a = 0; a < v; a += 1) {
        (l = i[a]), (h = s(l, a));
        var D = _.items.get(h) ?? T.get(h);
        D
          ? (r & (L | O)) !== 0 && ie(D, l, a, r)
          : ((c = Z(null, _, null, null, l, h, a, u, r, e, !0)), T.set(h, c)),
          C.add(h);
      }
      for (const [I, H] of _.items) C.has(I) || M.skipped_effects.add(H.e);
      M.oncommit(n);
    } else n();
    b && U(!0), P(x);
  }),
    N && (t = S);
}
function Re(f, r, e, s, u, d, t, _, m) {
  var k, z, G, J;
  var E = (t & ge) !== 0,
    o = (t & (L | O)) !== 0,
    y = r.length,
    T = e.items,
    x = e.first,
    i = x,
    p,
    n = null,
    v,
    b = [],
    w = [],
    A,
    c,
    a,
    l;
  if (E)
    for (l = 0; l < y; l += 1)
      (A = r[l]),
        (c = _(A, l)),
        (a = T.get(c)),
        a !== void 0 &&
          ((k = a.a) == null || k.measure(), (v ?? (v = new Set())).add(a));
  for (l = 0; l < y; l += 1) {
    if (((A = r[l]), (c = _(A, l)), (a = T.get(c)), a === void 0)) {
      var h = s.get(c);
      if (h !== void 0) {
        s.delete(c), T.set(c, h);
        var C = n ? n.next : i;
        g(e, n, h), g(e, h, C), F(h, C, u), (n = h);
      } else {
        var M = i ? i.e.nodes_start : u;
        n = Z(M, e, n, n === null ? e.first : n.next, A, c, l, d, t, m);
      }
      T.set(c, n), (b = []), (w = []), (i = n.next);
      continue;
    }
    if (
      (o && ie(a, A, l, t),
      (a.e.f & X) !== 0 &&
        (ne(a.e),
        E &&
          ((z = a.a) == null || z.unfix(), (v ?? (v = new Set())).delete(a))),
      a !== i)
    ) {
      if (p !== void 0 && p.has(a)) {
        if (b.length < w.length) {
          var D = w[0],
            I;
          n = D.prev;
          var H = b[0],
            Y = b[b.length - 1];
          for (I = 0; I < b.length; I += 1) F(b[I], D, u);
          for (I = 0; I < w.length; I += 1) p.delete(w[I]);
          g(e, H.prev, Y.next),
            g(e, n, H),
            g(e, Y, D),
            (i = D),
            (n = Y),
            (l -= 1),
            (b = []),
            (w = []);
        } else
          p.delete(a),
            F(a, i, u),
            g(e, a.prev, a.next),
            g(e, a, n === null ? e.first : n.next),
            g(e, n, a),
            (n = a);
        continue;
      }
      for (b = [], w = []; i !== null && i.k !== c; )
        (i.e.f & X) === 0 && (p ?? (p = new Set())).add(i),
          w.push(i),
          (i = i.next);
      if (i === null) continue;
      a = i;
    }
    b.push(a), (n = a), (i = a.next);
  }
  if (i !== null || p !== void 0) {
    for (var R = p === void 0 ? [] : re(p); i !== null; )
      (i.e.f & X) === 0 && R.push(i), (i = i.next);
    var V = R.length;
    if (V > 0) {
      var le = (t & ae) !== 0 && y === 0 ? u : null;
      if (E) {
        for (l = 0; l < V; l += 1) (G = R[l].a) == null || G.measure();
        for (l = 0; l < V; l += 1) (J = R[l].a) == null || J.fix();
      }
      Ce(e, R, le);
    }
  }
  E &&
    Ie(() => {
      var K;
      if (v !== void 0) for (a of v) (K = a.a) == null || K.apply();
    }),
    (f.first = e.first && e.first.e),
    (f.last = n && n.e);
  for (var te of s.values()) fe(te.e);
  s.clear();
}
function ie(f, r, e, s) {
  (s & L) !== 0 && $(f.v, r), (s & O) !== 0 ? $(f.i, e) : (f.i = e);
}
function Z(f, r, e, s, u, d, t, _, m, E, o) {
  var y = B,
    T = (m & L) !== 0,
    x = (m & we) === 0,
    i = T ? (x ? Ee(u, !1, !1) : j(u)) : u,
    p = (m & O) === 0 ? t : j(t),
    n = { i: p, v: i, k: d, a: null, e: null, prev: e, next: s };
  B = n;
  try {
    if (f === null) {
      var v = document.createDocumentFragment();
      v.append((f = ee()));
    }
    return (
      (n.e = W(() => _(f, i, p, E), N)),
      (n.e.prev = e && e.e),
      (n.e.next = s && s.e),
      e === null ? o || (r.first = n) : ((e.next = n), (e.e.next = n.e)),
      s !== null && ((s.prev = n), (s.e.prev = n.e)),
      n
    );
  } finally {
    B = y;
  }
}
function F(f, r, e) {
  for (
    var s = f.next ? f.next.e.nodes_start : e,
      u = r ? r.e.nodes_start : e,
      d = f.e.nodes_start;
    d !== null && d !== s;

  ) {
    var t = Ae(d);
    u.before(d), (d = t);
  }
}
function g(f, r, e) {
  r === null ? (f.first = e) : ((r.next = e), (r.e.next = e && e.e)),
    e !== null && ((e.prev = r), (e.e.prev = r && r.e));
}
export { B as c, He as e, Me as i };

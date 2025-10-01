var ee = (t) => {
    throw TypeError(t);
};
var Be = (t, e, n) => e.has(t) || ee("Cannot " + n);
var b = (t, e, n) => (Be(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
    P = (t, e, n) => (e.has(t) ? ee("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n));
import { v as Ve, o as ne, a as Me } from "./4WsUhDWi.js";
import { az as Tt, aZ as Ge, au as C, g as N, aw as O, aL as re } from "./BDALf20I.js";
(function () {
    try {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        t.SENTRY_RELEASE = { id: "35111e7039e8c68cc677344b7f7c6971567f6820" };
    } catch {}
})();
try {
    (function () {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new t.Error().stack;
        e && ((t._sentryDebugIds = t._sentryDebugIds || {}), (t._sentryDebugIds[e] = "d63279e9-2fab-4f68-a61f-2ff92c94d1bc"), (t._sentryDebugIdIdentifier = "sentry-dbid-d63279e9-2fab-4f68-a61f-2ff92c94d1bc"));
    })();
} catch {}
const V = [];
function Dt(t, e = Tt) {
    let n = null;
    const a = new Set();
    function r(o) {
        if (Ge(t, o) && ((t = o), n)) {
            const c = !V.length;
            for (const l of a) l[1](), V.push(l, t);
            if (c) {
                for (let l = 0; l < V.length; l += 2) V[l][0](V[l + 1]);
                V.length = 0;
            }
        }
    }
    function s(o) {
        r(o(t));
    }
    function i(o, c = Tt) {
        const l = [o, c];
        return (
            a.add(l),
            a.size === 1 && (n = e(r, s) || Tt),
            o(t),
            () => {
                a.delete(l), a.size === 0 && n && (n(), (n = null));
            }
        );
    }
    return { set: r, update: s, subscribe: i };
}
class Et {
    constructor(e, n) {
        (this.status = e), typeof n == "string" ? (this.body = { message: n }) : n ? (this.body = n) : (this.body = { message: `Error: ${e}` });
    }
    toString() {
        return JSON.stringify(this.body);
    }
}
class qt {
    constructor(e, n) {
        (this.status = e), (this.location = n);
    }
}
class Ft extends Error {
    constructor(e, n, a) {
        super(a), (this.status = e), (this.text = n);
    }
}
new URL("sveltekit-internal://");
function He(t, e) {
    return t === "/" || e === "ignore" ? t : e === "never" ? (t.endsWith("/") ? t.slice(0, -1) : t) : e === "always" && !t.endsWith("/") ? t + "/" : t;
}
function Ke(t) {
    return t.split("%25").map(decodeURI).join("%25");
}
function Ye(t) {
    for (const e in t) t[e] = decodeURIComponent(t[e]);
    return t;
}
function Ut({ href: t }) {
    return t.split("#")[0];
}
function ze(t, e, n, a = !1) {
    const r = new URL(t);
    Object.defineProperty(r, "searchParams", {
        value: new Proxy(r.searchParams, {
            get(i, o) {
                if (o === "get" || o === "getAll" || o === "has") return (l) => (n(l), i[o](l));
                e();
                const c = Reflect.get(i, o);
                return typeof c == "function" ? c.bind(i) : c;
            },
        }),
        enumerable: !0,
        configurable: !0,
    });
    const s = ["href", "pathname", "search", "toString", "toJSON"];
    a && s.push("hash");
    for (const i of s)
        Object.defineProperty(r, i, {
            get() {
                return e(), t[i];
            },
            enumerable: !0,
            configurable: !0,
        });
    return r;
}
function We(...t) {
    let e = 5381;
    for (const n of t)
        if (typeof n == "string") {
            let a = n.length;
            for (; a; ) e = (e * 33) ^ n.charCodeAt(--a);
        } else if (ArrayBuffer.isView(n)) {
            const a = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
            let r = a.length;
            for (; r; ) e = (e * 33) ^ a[--r];
        } else throw new TypeError("value must be a string or TypedArray");
    return (e >>> 0).toString(36);
}
new TextEncoder();
const Je = new TextDecoder();
function Xe(t) {
    const e = atob(t),
        n = new Uint8Array(e.length);
    for (let a = 0; a < e.length; a++) n[a] = e.charCodeAt(a);
    return n;
}
const Ze = window.fetch;
window.fetch = (t, e) => ((t instanceof Request ? t.method : (e == null ? void 0 : e.method) || "GET") !== "GET" && z.delete(Bt(t)), Ze(t, e));
const z = new Map();
function Qe(t, e) {
    const n = Bt(t, e),
        a = document.querySelector(n);
    if (a != null && a.textContent) {
        a.remove();
        let { body: r, ...s } = JSON.parse(a.textContent);
        const i = a.getAttribute("data-ttl");
        return i && z.set(n, { body: r, init: s, ttl: 1e3 * Number(i) }), a.getAttribute("data-b64") !== null && (r = Xe(r)), Promise.resolve(new Response(r, s));
    }
    return window.fetch(t, e);
}
function tn(t, e, n) {
    if (z.size > 0) {
        const a = Bt(t, n),
            r = z.get(a);
        if (r) {
            if (performance.now() < r.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(r.body, r.init);
            z.delete(a);
        }
    }
    return window.fetch(e, n);
}
function Bt(t, e) {
    let a = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request ? t.url : t)}]`;
    if ((e != null && e.headers) || (e != null && e.body)) {
        const r = [];
        e.headers && r.push([...new Headers(e.headers)].join(",")), e.body && (typeof e.body == "string" || ArrayBuffer.isView(e.body)) && r.push(e.body), (a += `[data-hash="${We(...r)}"]`);
    }
    return a;
}
const en = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function nn(t) {
    const e = [];
    return {
        pattern:
            t === "/"
                ? /^\/$/
                : new RegExp(
                      `^${an(t)
                          .map((a) => {
                              const r = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);
                              if (r) return e.push({ name: r[1], matcher: r[2], optional: !1, rest: !0, chained: !0 }), "(?:/([^]*))?";
                              const s = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);
                              if (s) return e.push({ name: s[1], matcher: s[2], optional: !0, rest: !1, chained: !0 }), "(?:/([^/]+))?";
                              if (!a) return;
                              const i = a.split(/\[(.+?)\](?!\])/);
                              return (
                                  "/" +
                                  i
                                      .map((c, l) => {
                                          if (l % 2) {
                                              if (c.startsWith("x+")) return xt(String.fromCharCode(parseInt(c.slice(2), 16)));
                                              if (c.startsWith("u+"))
                                                  return xt(
                                                      String.fromCharCode(
                                                          ...c
                                                              .slice(2)
                                                              .split("-")
                                                              .map((u) => parseInt(u, 16))
                                                      )
                                                  );
                                              const d = en.exec(c),
                                                  [, p, y, f, m] = d;
                                              return e.push({ name: f, matcher: m, optional: !!p, rest: !!y, chained: y ? l === 1 && i[0] === "" : !1 }), y ? "([^]*?)" : p ? "([^/]*)?" : "([^/]+?)";
                                          }
                                          return xt(c);
                                      })
                                      .join("")
                              );
                          })
                          .join("")}/?$`
                  ),
        params: e,
    };
}
function rn(t) {
    return t !== "" && !/^\([^)]+\)$/.test(t);
}
function an(t) {
    return t.slice(1).split("/").filter(rn);
}
function on(t, e, n) {
    const a = {},
        r = t.slice(1),
        s = r.filter((o) => o !== void 0);
    let i = 0;
    for (let o = 0; o < e.length; o += 1) {
        const c = e[o];
        let l = r[o - i];
        if (
            (c.chained &&
                c.rest &&
                i &&
                ((l = r
                    .slice(o - i, o + 1)
                    .filter((d) => d)
                    .join("/")),
                (i = 0)),
            l === void 0)
        ) {
            c.rest && (a[c.name] = "");
            continue;
        }
        if (!c.matcher || n[c.matcher](l)) {
            a[c.name] = l;
            const d = e[o + 1],
                p = r[o + 1];
            d && !d.rest && d.optional && p && c.chained && (i = 0), !d && !p && Object.keys(a).length === s.length && (i = 0);
            continue;
        }
        if (c.optional && c.chained) {
            i++;
            continue;
        }
        return;
    }
    if (!i) return a;
}
function xt(t) {
    return t
        .normalize()
        .replace(/[[\]]/g, "\\$&")
        .replace(/%/g, "%25")
        .replace(/\//g, "%2[Ff]")
        .replace(/\?/g, "%3[Ff]")
        .replace(/#/g, "%23")
        .replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function sn({ nodes: t, server_loads: e, dictionary: n, matchers: a }) {
    const r = new Set(e);
    return Object.entries(n).map(([o, [c, l, d]]) => {
        const { pattern: p, params: y } = nn(o),
            f = {
                id: o,
                exec: (m) => {
                    const u = p.exec(m);
                    if (u) return on(u, y, a);
                },
                errors: [1, ...(d || [])].map((m) => t[m]),
                layouts: [0, ...(l || [])].map(i),
                leaf: s(c),
            };
        return (f.errors.length = f.layouts.length = Math.max(f.errors.length, f.layouts.length)), f;
    });
    function s(o) {
        const c = o < 0;
        return c && (o = ~o), [c, t[o]];
    }
    function i(o) {
        return o === void 0 ? o : [r.has(o), t[o]];
    }
}
function ve(t, e = JSON.parse) {
    try {
        return e(sessionStorage[t]);
    } catch {}
}
function ae(t, e, n = JSON.stringify) {
    const a = n(e);
    try {
        sessionStorage[t] = a;
    } catch {}
}
var ge;
const x = ((ge = globalThis.__sveltekit_1jtafcq) == null ? void 0 : ge.base) ?? "";
var me;
const cn = ((me = globalThis.__sveltekit_1jtafcq) == null ? void 0 : me.assets) ?? x,
    be = "sveltekit:snapshot",
    Ee = "sveltekit:scroll",
    Ae = "sveltekit:states",
    ln = "sveltekit:pageurl",
    G = "sveltekit:history",
    Z = "sveltekit:navigation",
    q = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
    dt = location.origin;
function Vt(t) {
    if (t instanceof URL) return t;
    let e = document.baseURI;
    if (!e) {
        const n = document.getElementsByTagName("base");
        e = n.length ? n[0].href : document.URL;
    }
    return new URL(t, e);
}
function At() {
    return { x: pageXOffset, y: pageYOffset };
}
function M(t, e) {
    return t.getAttribute(`data-sveltekit-${e}`);
}
const oe = { ...q, "": q.hover };
function ke(t) {
    let e = t.assignedSlot ?? t.parentNode;
    return (e == null ? void 0 : e.nodeType) === 11 && (e = e.host), e;
}
function Se(t, e) {
    for (; t && t !== e; ) {
        if (t.nodeName.toUpperCase() === "A" && t.hasAttribute("href")) return t;
        t = ke(t);
    }
}
function Nt(t, e, n) {
    let a;
    try {
        if (((a = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href, document.baseURI)), n && a.hash.match(/^#[^/]/))) {
            const o = location.hash.split("#")[1] || "/";
            a.hash = `#${o}${a.hash}`;
        }
    } catch {}
    const r = t instanceof SVGAElement ? t.target.baseVal : t.target,
        s = !a || !!r || kt(a, e, n) || (t.getAttribute("rel") || "").split(/\s+/).includes("external"),
        i = (a == null ? void 0 : a.origin) === dt && t.hasAttribute("download");
    return { url: a, external: s, target: r, download: i };
}
function pt(t) {
    let e = null,
        n = null,
        a = null,
        r = null,
        s = null,
        i = null,
        o = t;
    for (; o && o !== document.documentElement; )
        a === null && (a = M(o, "preload-code")),
            r === null && (r = M(o, "preload-data")),
            e === null && (e = M(o, "keepfocus")),
            n === null && (n = M(o, "noscroll")),
            s === null && (s = M(o, "reload")),
            i === null && (i = M(o, "replacestate")),
            (o = ke(o));
    function c(l) {
        switch (l) {
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
    return { preload_code: oe[a ?? "off"], preload_data: oe[r ?? "off"], keepfocus: c(e), noscroll: c(n), reload: c(s), replace_state: c(i) };
}
function se(t) {
    const e = Dt(t);
    let n = !0;
    function a() {
        (n = !0), e.update((i) => i);
    }
    function r(i) {
        (n = !1), e.set(i);
    }
    function s(i) {
        let o;
        return e.subscribe((c) => {
            (o === void 0 || (n && c !== o)) && i((o = c));
        });
    }
    return { notify: a, set: r, subscribe: s };
}
const Re = { v: () => {} };
function fn() {
    const { set: t, subscribe: e } = Dt(!1);
    let n;
    async function a() {
        clearTimeout(n);
        try {
            const r = await fetch(`${cn}/_app/version.json`, { headers: { pragma: "no-cache", "cache-control": "no-cache" } });
            if (!r.ok) return !1;
            const i = (await r.json()).version !== Ve;
            return i && (t(!0), Re.v(), clearTimeout(n)), i;
        } catch {
            return !1;
        }
    }
    return { subscribe: e, check: a };
}
function kt(t, e, n) {
    return t.origin !== dt || !t.pathname.startsWith(e) ? !0 : n ? !(t.pathname === e + "/" || t.pathname === e + "/index.html" || (t.protocol === "file:" && t.pathname.replace(/\/[^/]+\.html?$/, "") === e)) : !1;
}
function Zn(t) {}
function ie(t) {
    const e = dn(t),
        n = new ArrayBuffer(e.length),
        a = new DataView(n);
    for (let r = 0; r < n.byteLength; r++) a.setUint8(r, e.charCodeAt(r));
    return n;
}
const un = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function dn(t) {
    t.length % 4 === 0 && (t = t.replace(/==?$/, ""));
    let e = "",
        n = 0,
        a = 0;
    for (let r = 0; r < t.length; r++)
        (n <<= 6), (n |= un.indexOf(t[r])), (a += 6), a === 24 && ((e += String.fromCharCode((n & 16711680) >> 16)), (e += String.fromCharCode((n & 65280) >> 8)), (e += String.fromCharCode(n & 255)), (n = a = 0));
    return a === 12 ? ((n >>= 4), (e += String.fromCharCode(n))) : a === 18 && ((n >>= 2), (e += String.fromCharCode((n & 65280) >> 8)), (e += String.fromCharCode(n & 255))), e;
}
const hn = -1,
    pn = -2,
    gn = -3,
    mn = -4,
    yn = -5,
    _n = -6;
function wn(t, e) {
    if (typeof t == "number") return r(t, !0);
    if (!Array.isArray(t) || t.length === 0) throw new Error("Invalid input");
    const n = t,
        a = Array(n.length);
    function r(s, i = !1) {
        if (s === hn) return;
        if (s === gn) return NaN;
        if (s === mn) return 1 / 0;
        if (s === yn) return -1 / 0;
        if (s === _n) return -0;
        if (i) throw new Error("Invalid input");
        if (s in a) return a[s];
        const o = n[s];
        if (!o || typeof o != "object") a[s] = o;
        else if (Array.isArray(o))
            if (typeof o[0] == "string") {
                const c = o[0],
                    l = e == null ? void 0 : e[c];
                if (l) return (a[s] = l(r(o[1])));
                switch (c) {
                    case "Date":
                        a[s] = new Date(o[1]);
                        break;
                    case "Set":
                        const d = new Set();
                        a[s] = d;
                        for (let f = 1; f < o.length; f += 1) d.add(r(o[f]));
                        break;
                    case "Map":
                        const p = new Map();
                        a[s] = p;
                        for (let f = 1; f < o.length; f += 2) p.set(r(o[f]), r(o[f + 1]));
                        break;
                    case "RegExp":
                        a[s] = new RegExp(o[1], o[2]);
                        break;
                    case "Object":
                        a[s] = Object(o[1]);
                        break;
                    case "BigInt":
                        a[s] = BigInt(o[1]);
                        break;
                    case "null":
                        const y = Object.create(null);
                        a[s] = y;
                        for (let f = 1; f < o.length; f += 2) y[o[f]] = r(o[f + 1]);
                        break;
                    case "Int8Array":
                    case "Uint8Array":
                    case "Uint8ClampedArray":
                    case "Int16Array":
                    case "Uint16Array":
                    case "Int32Array":
                    case "Uint32Array":
                    case "Float32Array":
                    case "Float64Array":
                    case "BigInt64Array":
                    case "BigUint64Array": {
                        const f = globalThis[c],
                            m = o[1],
                            u = ie(m),
                            h = new f(u);
                        a[s] = h;
                        break;
                    }
                    case "ArrayBuffer": {
                        const f = o[1],
                            m = ie(f);
                        a[s] = m;
                        break;
                    }
                    default:
                        throw new Error(`Unknown type ${c}`);
                }
            } else {
                const c = new Array(o.length);
                a[s] = c;
                for (let l = 0; l < o.length; l += 1) {
                    const d = o[l];
                    d !== pn && (c[l] = r(d));
                }
            }
        else {
            const c = {};
            a[s] = c;
            for (const l in o) {
                const d = o[l];
                c[l] = r(d);
            }
        }
        return a[s];
    }
    return r(0);
}
const Ie = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...Ie];
const vn = new Set([...Ie]);
[...vn];
function bn(t) {
    return t.filter((e) => e != null);
}
const En = "x-sveltekit-invalidated",
    An = "x-sveltekit-trailing-slash";
function gt(t) {
    return t instanceof Et || t instanceof Ft ? t.status : 500;
}
function kn(t) {
    return t instanceof Ft ? t.text : "Internal Error";
}
let L, Q, Pt;
const Sn = ne.toString().includes("$$") || /function \w+\(\) \{\}/.test(ne.toString());
var nt, rt, at, ot, st, it, ct, lt, ye, ft, _e, ut, we;
Sn
    ? ((L = { data: {}, form: null, error: null, params: {}, route: { id: null }, state: {}, status: -1, url: new URL("https://example.com") }), (Q = { current: null }), (Pt = { current: !1 }))
    : ((L = new ((ye = class {
          constructor() {
              P(this, nt, C({}));
              P(this, rt, C(null));
              P(this, at, C(null));
              P(this, ot, C({}));
              P(this, st, C({ id: null }));
              P(this, it, C({}));
              P(this, ct, C(-1));
              P(this, lt, C(new URL("https://example.com")));
          }
          get data() {
              return N(b(this, nt));
          }
          set data(e) {
              O(b(this, nt), e);
          }
          get form() {
              return N(b(this, rt));
          }
          set form(e) {
              O(b(this, rt), e);
          }
          get error() {
              return N(b(this, at));
          }
          set error(e) {
              O(b(this, at), e);
          }
          get params() {
              return N(b(this, ot));
          }
          set params(e) {
              O(b(this, ot), e);
          }
          get route() {
              return N(b(this, st));
          }
          set route(e) {
              O(b(this, st), e);
          }
          get state() {
              return N(b(this, it));
          }
          set state(e) {
              O(b(this, it), e);
          }
          get status() {
              return N(b(this, ct));
          }
          set status(e) {
              O(b(this, ct), e);
          }
          get url() {
              return N(b(this, lt));
          }
          set url(e) {
              O(b(this, lt), e);
          }
      }),
      (nt = new WeakMap()),
      (rt = new WeakMap()),
      (at = new WeakMap()),
      (ot = new WeakMap()),
      (st = new WeakMap()),
      (it = new WeakMap()),
      (ct = new WeakMap()),
      (lt = new WeakMap()),
      ye)()),
      (Q = new ((_e = class {
          constructor() {
              P(this, ft, C(null));
          }
          get current() {
              return N(b(this, ft));
          }
          set current(e) {
              O(b(this, ft), e);
          }
      }),
      (ft = new WeakMap()),
      _e)()),
      (Pt = new ((we = class {
          constructor() {
              P(this, ut, C(!1));
          }
          get current() {
              return N(b(this, ut));
          }
          set current(e) {
              O(b(this, ut), e);
          }
      }),
      (ut = new WeakMap()),
      we)()),
      (Re.v = () => (Pt.current = !0)));
function Rn(t) {
    Object.assign(L, t);
}
const In = "/__data.json",
    Ln = ".html__data.json";
function Tn(t) {
    return t.endsWith(".html") ? t.replace(/\.html$/, Ln) : t.replace(/\/$/, "") + In;
}
const ce = {
        spanContext() {
            return Un;
        },
        setAttribute() {
            return this;
        },
        setAttributes() {
            return this;
        },
        addEvent() {
            return this;
        },
        setStatus() {
            return this;
        },
        updateName() {
            return this;
        },
        end() {
            return this;
        },
        isRecording() {
            return !1;
        },
        recordException() {
            return this;
        },
        addLink() {
            return this;
        },
        addLinks() {
            return this;
        },
    },
    Un = { traceId: "", spanId: "", traceFlags: 0 },
    { onMount: xn, tick: Pn } = Me,
    Cn = new Set(["icon", "shortcut icon", "apple-touch-icon"]),
    B = ve(Ee) ?? {},
    tt = ve(be) ?? {},
    $ = { url: se({}), page: se({}), navigating: Dt(null), updated: fn() };
function Mt(t) {
    B[t] = At();
}
function Nn(t, e) {
    let n = t + 1;
    for (; B[n]; ) delete B[n], (n += 1);
    for (n = e + 1; tt[n]; ) delete tt[n], (n += 1);
}
function K(t) {
    return (location.href = t.href), new Promise(() => {});
}
async function Le() {
    if ("serviceWorker" in navigator) {
        const t = await navigator.serviceWorker.getRegistration(x || "/");
        t && (await t.update());
    }
}
function le() {}
let Gt, Ot, mt, j, jt, E;
globalThis.__sveltekit_1jtafcq.data;
const yt = [],
    _t = [];
let T = null;
const ht = new Map(),
    Ht = new Set(),
    On = new Set(),
    W = new Set();
let w = { branch: [], error: null, url: null },
    Kt = !1,
    wt = !1,
    fe = !0,
    et = !1,
    Y = !1,
    Te = !1,
    Yt = !1,
    Ue,
    S,
    U,
    F;
const J = new Set(),
    ue = new Map();
async function nr(t, e, n) {
    var s, i, o, c;
    document.URL !== location.href && (location.href = location.href),
        (E = t),
        await ((i = (s = t.hooks).init) == null ? void 0 : i.call(s)),
        (Gt = sn(t)),
        (j = document.documentElement),
        (jt = e),
        (Ot = t.nodes[0]),
        (mt = t.nodes[1]),
        Ot(),
        mt(),
        (S = (o = history.state) == null ? void 0 : o[G]),
        (U = (c = history.state) == null ? void 0 : c[Z]),
        S || ((S = U = Date.now()), history.replaceState({ ...history.state, [G]: S, [Z]: U }, ""));
    const a = B[S];
    function r() {
        a && ((history.scrollRestoration = "manual"), scrollTo(a.x, a.y));
    }
    n ? (r(), await Kn(jt, n)) : (await X({ type: "enter", url: Vt(E.hash ? zn(new URL(location.href)) : location.href), replace_state: !0 }), r()), Hn();
}
function jn() {
    (yt.length = 0), (Yt = !1);
}
function xe(t) {
    _t.some((e) => (e == null ? void 0 : e.snapshot)) &&
        (tt[t] = _t.map((e) => {
            var n;
            return (n = e == null ? void 0 : e.snapshot) == null ? void 0 : n.capture();
        }));
}
function Pe(t) {
    var e;
    (e = tt[t]) == null ||
        e.forEach((n, a) => {
            var r, s;
            (s = (r = _t[a]) == null ? void 0 : r.snapshot) == null || s.restore(n);
        });
}
function de() {
    Mt(S), ae(Ee, B), xe(U), ae(be, tt);
}
async function zt(t, e, n, a) {
    let r;
    const s = await X({
        type: "goto",
        url: Vt(t),
        keepfocus: e.keepFocus,
        noscroll: e.noScroll,
        replace_state: e.replaceState,
        state: e.state,
        redirect_count: n,
        nav_token: a,
        accept: () => {
            e.invalidateAll && ((Yt = !0), (r = [...ue.keys()])), e.invalidate && e.invalidate.forEach(Gn);
        },
    });
    return (
        e.invalidateAll &&
            re()
                .then(re)
                .then(() => {
                    ue.forEach(({ resource: i }, o) => {
                        var c;
                        r != null && r.includes(o) && ((c = i.refresh) == null || c.call(i));
                    });
                }),
        s
    );
}
async function $n(t) {
    if (t.id !== (T == null ? void 0 : T.id)) {
        const e = {};
        J.add(e), (T = { id: t.id, token: e, promise: Oe({ ...t, preload: e }).then((n) => (J.delete(e), n.type === "loaded" && n.state.error && (T = null), n)) });
    }
    return T.promise;
}
async function Ct(t) {
    var n;
    const e = (n = await Rt(t, !1)) == null ? void 0 : n.route;
    e && (await Promise.all([...e.layouts, e.leaf].map((a) => (a == null ? void 0 : a[1]()))));
}
function Ce(t, e, n) {
    var r;
    w = t.state;
    const a = document.querySelector("style[data-sveltekit]");
    if ((a && a.remove(), Object.assign(L, t.props.page), (Ue = new E.root({ target: e, props: { ...t.props, stores: $, components: _t }, hydrate: n, sync: !1 })), Pe(U), n)) {
        const s = { from: null, to: { params: w.params, route: { id: ((r = w.route) == null ? void 0 : r.id) ?? null }, url: new URL(location.href) }, willUnload: !1, type: "enter", complete: Promise.resolve() };
        W.forEach((i) => i(s));
    }
    wt = !0;
}
function vt({ url: t, params: e, branch: n, status: a, error: r, route: s, form: i }) {
    let o = "never";
    if (x && (t.pathname === x || t.pathname === x + "/")) o = "always";
    else for (const f of n) (f == null ? void 0 : f.slash) !== void 0 && (o = f.slash);
    (t.pathname = He(t.pathname, o)), (t.search = t.search);
    const c = { type: "loaded", state: { url: t, params: e, branch: n, error: r, route: s }, props: { constructors: bn(n).map((f) => f.node.component), page: Zt(L) } };
    i !== void 0 && (c.props.form = i);
    let l = {},
        d = !L,
        p = 0;
    for (let f = 0; f < Math.max(n.length, w.branch.length); f += 1) {
        const m = n[f],
            u = w.branch[f];
        (m == null ? void 0 : m.data) !== (u == null ? void 0 : u.data) && (d = !0), m && ((l = { ...l, ...m.data }), d && (c.props[`data_${p}`] = l), (p += 1));
    }
    return (
        (!w.url || t.href !== w.url.href || w.error !== r || (i !== void 0 && i !== L.form) || d) &&
            (c.props.page = { error: r, params: e, route: { id: (s == null ? void 0 : s.id) ?? null }, state: {}, status: a, url: new URL(t), form: i ?? null, data: d ? l : L.data }),
        c
    );
}
async function Wt({ loader: t, parent: e, url: n, params: a, route: r, server_data_node: s }) {
    var d, p, y;
    let i = null,
        o = !0;
    const c = { dependencies: new Set(), params: new Set(), parent: !1, route: !1, url: !1, search_params: new Set() },
        l = await t();
    if ((d = l.universal) != null && d.load) {
        let f = function (...u) {
            for (const h of u) {
                const { href: A } = new URL(h, n);
                c.dependencies.add(A);
            }
        };
        const m = {
            tracing: { enabled: !1, root: ce, current: ce },
            route: new Proxy(r, { get: (u, h) => (o && (c.route = !0), u[h]) }),
            params: new Proxy(a, { get: (u, h) => (o && c.params.add(h), u[h]) }),
            data: (s == null ? void 0 : s.data) ?? null,
            url: ze(
                n,
                () => {
                    o && (c.url = !0);
                },
                (u) => {
                    o && c.search_params.add(u);
                },
                E.hash
            ),
            async fetch(u, h) {
                u instanceof Request &&
                    (h = {
                        body: u.method === "GET" || u.method === "HEAD" ? void 0 : await u.blob(),
                        cache: u.cache,
                        credentials: u.credentials,
                        headers: [...u.headers].length > 0 ? (u == null ? void 0 : u.headers) : void 0,
                        integrity: u.integrity,
                        keepalive: u.keepalive,
                        method: u.method,
                        mode: u.mode,
                        redirect: u.redirect,
                        referrer: u.referrer,
                        referrerPolicy: u.referrerPolicy,
                        signal: u.signal,
                        ...h,
                    });
                const { resolved: A, promise: R } = Ne(u, h, n);
                return o && f(A.href), R;
            },
            setHeaders: () => {},
            depends: f,
            parent() {
                return o && (c.parent = !0), e();
            },
            untrack(u) {
                o = !1;
                try {
                    return u();
                } finally {
                    o = !0;
                }
            },
        };
        i = (await l.universal.load.call(null, m)) ?? null;
    }
    return {
        node: l,
        loader: t,
        server: s,
        universal: (p = l.universal) != null && p.load ? { type: "data", data: i, uses: c } : null,
        data: i ?? (s == null ? void 0 : s.data) ?? null,
        slash: ((y = l.universal) == null ? void 0 : y.trailingSlash) ?? (s == null ? void 0 : s.slash),
    };
}
function Ne(t, e, n) {
    let a = t instanceof Request ? t.url : t;
    const r = new URL(a, n);
    r.origin === n.origin && (a = r.href.slice(n.origin.length));
    const s = wt ? tn(a, r.href, e) : Qe(a, e);
    return { resolved: r, promise: s };
}
function he(t, e, n, a, r, s) {
    if (Yt) return !0;
    if (!r) return !1;
    if ((r.parent && t) || (r.route && e) || (r.url && n)) return !0;
    for (const i of r.search_params) if (a.has(i)) return !0;
    for (const i of r.params) if (s[i] !== w.params[i]) return !0;
    for (const i of r.dependencies) if (yt.some((o) => o(new URL(i)))) return !0;
    return !1;
}
function Jt(t, e) {
    return (t == null ? void 0 : t.type) === "data" ? t : (t == null ? void 0 : t.type) === "skip" ? e ?? null : null;
}
function Dn(t, e) {
    if (!t) return new Set(e.searchParams.keys());
    const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
    for (const a of n) {
        const r = t.searchParams.getAll(a),
            s = e.searchParams.getAll(a);
        r.every((i) => s.includes(i)) && s.every((i) => r.includes(i)) && n.delete(a);
    }
    return n;
}
function pe({ error: t, url: e, route: n, params: a }) {
    return { type: "loaded", state: { error: t, url: e, route: n, params: a, branch: [] }, props: { page: Zt(L), constructors: [] } };
}
async function Oe({ id: t, invalidating: e, url: n, params: a, route: r, preload: s }) {
    if ((T == null ? void 0 : T.id) === t) return J.delete(T.token), T.promise;
    const { errors: i, layouts: o, leaf: c } = r,
        l = [...o, c];
    i.forEach((g) => (g == null ? void 0 : g().catch(() => {}))), l.forEach((g) => (g == null ? void 0 : g[1]().catch(() => {})));
    let d = null;
    const p = w.url ? t !== bt(w.url) : !1,
        y = w.route ? r.id !== w.route.id : !1,
        f = Dn(w.url, n);
    let m = !1;
    const u = l.map((g, _) => {
        var D;
        const v = w.branch[_],
            k = !!(g != null && g[0]) && ((v == null ? void 0 : v.loader) !== g[1] || he(m, y, p, f, (D = v.server) == null ? void 0 : D.uses, a));
        return k && (m = !0), k;
    });
    if (u.some(Boolean)) {
        try {
            d = await De(n, u);
        } catch (g) {
            const _ = await H(g, { url: n, params: a, route: { id: t } });
            return J.has(s) ? pe({ error: _, url: n, params: a, route: r }) : St({ status: gt(g), error: _, url: n, route: r });
        }
        if (d.type === "redirect") return d;
    }
    const h = d == null ? void 0 : d.nodes;
    let A = !1;
    const R = l.map(async (g, _) => {
        var It;
        if (!g) return;
        const v = w.branch[_],
            k = h == null ? void 0 : h[_];
        if ((!k || k.type === "skip") && g[1] === (v == null ? void 0 : v.loader) && !he(A, y, p, f, (It = v.universal) == null ? void 0 : It.uses, a)) return v;
        if (((A = !0), (k == null ? void 0 : k.type) === "error")) throw k;
        return Wt({
            loader: g[1],
            url: n,
            params: a,
            route: r,
            parent: async () => {
                var te;
                const Qt = {};
                for (let Lt = 0; Lt < _; Lt += 1) Object.assign(Qt, (te = await R[Lt]) == null ? void 0 : te.data);
                return Qt;
            },
            server_data_node: Jt(k === void 0 && g[0] ? { type: "skip" } : k ?? null, g[0] ? (v == null ? void 0 : v.server) : void 0),
        });
    });
    for (const g of R) g.catch(() => {});
    const I = [];
    for (let g = 0; g < l.length; g += 1)
        if (l[g])
            try {
                I.push(await R[g]);
            } catch (_) {
                if (_ instanceof qt) return { type: "redirect", location: _.location };
                if (J.has(s)) return pe({ error: await H(_, { params: a, url: n, route: { id: r.id } }), url: n, params: a, route: r });
                let v = gt(_),
                    k;
                if (h != null && h.includes(_)) (v = _.status ?? v), (k = _.error);
                else if (_ instanceof Et) k = _.body;
                else {
                    if (await $.updated.check()) return await Le(), await K(n);
                    k = await H(_, { params: a, url: n, route: { id: r.id } });
                }
                const D = await qn(g, I, i);
                return D ? vt({ url: n, params: a, branch: I.slice(0, D.idx).concat(D.node), status: v, error: k, route: r }) : await $e(n, { id: r.id }, k, v);
            }
        else I.push(void 0);
    return vt({ url: n, params: a, branch: I, status: 200, error: null, route: r, form: e ? void 0 : null });
}
async function qn(t, e, n) {
    for (; t--; )
        if (n[t]) {
            let a = t;
            for (; !e[a]; ) a -= 1;
            try {
                return { idx: a + 1, node: { node: await n[t](), loader: n[t], data: {}, server: null, universal: null } };
            } catch {
                continue;
            }
        }
}
async function St({ status: t, error: e, url: n, route: a }) {
    const r = {};
    let s = null;
    if (E.server_loads[0] === 0)
        try {
            const o = await De(n, [!0]);
            if (o.type !== "data" || (o.nodes[0] && o.nodes[0].type !== "data")) throw 0;
            s = o.nodes[0] ?? null;
        } catch {
            (n.origin !== dt || n.pathname !== location.pathname || Kt) && (await K(n));
        }
    try {
        const o = await Wt({ loader: Ot, url: n, params: r, route: a, parent: () => Promise.resolve({}), server_data_node: Jt(s) }),
            c = { node: await mt(), loader: mt, universal: null, server: null, data: null };
        return vt({ url: n, params: r, branch: [o, c], status: t, error: e, route: null });
    } catch (o) {
        if (o instanceof qt) return zt(new URL(o.location, location.href), {}, 0);
        throw o;
    }
}
async function Fn(t) {
    const e = t.href;
    if (ht.has(e)) return ht.get(e);
    let n;
    try {
        const a = (async () => {
            let r = (await E.hooks.reroute({ url: new URL(t), fetch: async (s, i) => Ne(s, i, t).promise })) ?? t;
            if (typeof r == "string") {
                const s = new URL(t);
                E.hash ? (s.hash = r) : (s.pathname = r), (r = s);
            }
            return r;
        })();
        ht.set(e, a), (n = await a);
    } catch {
        ht.delete(e);
        return;
    }
    return n;
}
async function Rt(t, e) {
    if (t && !kt(t, x, E.hash)) {
        const n = await Fn(t);
        if (!n) return;
        const a = Bn(n);
        for (const r of Gt) {
            const s = r.exec(a);
            if (s) return { id: bt(t), invalidating: e, route: r, params: Ye(s), url: t };
        }
    }
}
function Bn(t) {
    return Ke(E.hash ? t.hash.replace(/^#/, "").replace(/[?#].+/, "") : t.pathname.slice(x.length)) || "/";
}
function bt(t) {
    return (E.hash ? t.hash.replace(/^#/, "") : t.pathname) + t.search;
}
function je({ url: t, type: e, intent: n, delta: a }) {
    let r = !1;
    const s = Xt(w, n, t, e);
    a !== void 0 && (s.navigation.delta = a);
    const i = {
        ...s.navigation,
        cancel: () => {
            (r = !0), s.reject(new Error("navigation cancelled"));
        },
    };
    return et || Ht.forEach((o) => o(i)), r ? null : s;
}
async function X({ type: t, url: e, popped: n, keepfocus: a, noscroll: r, replace_state: s, state: i = {}, redirect_count: o = 0, nav_token: c = {}, accept: l = le, block: d = le }) {
    const p = F;
    F = c;
    const y = await Rt(e, !1),
        f = t === "enter" ? Xt(w, y, e, t) : je({ url: e, type: t, delta: n == null ? void 0 : n.delta, intent: y });
    if (!f) {
        d(), F === c && (F = p);
        return;
    }
    const m = S,
        u = U;
    l(), (et = !0), wt && f.navigation.type !== "enter" && $.navigating.set((Q.current = f.navigation));
    let h = y && (await Oe(y));
    if (!h) {
        if (kt(e, x, E.hash)) return await K(e);
        h = await $e(e, { id: null }, await H(new Ft(404, "Not Found", `Not found: ${e.pathname}`), { url: e, params: {}, route: { id: null } }), 404);
    }
    if (((e = (y == null ? void 0 : y.url) || e), F !== c)) return f.reject(new Error("navigation aborted")), !1;
    if (h.type === "redirect")
        if (o >= 20) h = await St({ status: 500, error: await H(new Error("Redirect loop"), { url: e, params: {}, route: { id: null } }), url: e, route: { id: null } });
        else return await zt(new URL(h.location, e).href, {}, o + 1, c), !1;
    else h.props.page.status >= 400 && (await $.updated.check()) && (await Le(), await K(e));
    if ((jn(), Mt(m), xe(u), h.props.page.url.pathname !== e.pathname && (e.pathname = h.props.page.url.pathname), (i = n ? n.state : i), !n)) {
        const g = s ? 0 : 1,
            _ = { [G]: (S += g), [Z]: (U += g), [Ae]: i };
        (s ? history.replaceState : history.pushState).call(history, _, "", e), s || Nn(S, U);
    }
    if (((T = null), (h.props.page.state = i), wt)) {
        const g = (await Promise.all(Array.from(On, (_) => _(f.navigation)))).filter((_) => typeof _ == "function");
        if (g.length > 0) {
            let _ = function () {
                g.forEach((v) => {
                    W.delete(v);
                });
            };
            g.push(_),
                g.forEach((v) => {
                    W.add(v);
                });
        }
        (w = h.state), h.props.page && (h.props.page.url = e), Ue.$set(h.props), Rn(h.props.page), (Te = !0);
    } else Ce(h, jt, !1);
    const { activeElement: A } = document;
    await Pn();
    const R = n ? n.scroll : r ? At() : null;
    if (fe) {
        const g = e.hash && document.getElementById(Fe(e));
        R ? scrollTo(R.x, R.y) : g ? g.scrollIntoView() : scrollTo(0, 0);
    }
    const I = document.activeElement !== A && document.activeElement !== document.body;
    !a && !I && Yn(e), (fe = !0), h.props.page && Object.assign(L, h.props.page), (et = !1), t === "popstate" && Pe(U), f.fulfil(void 0), W.forEach((g) => g(f.navigation)), $.navigating.set((Q.current = null));
}
async function $e(t, e, n, a) {
    return t.origin === dt && t.pathname === location.pathname && !Kt ? await St({ status: a, error: n, url: t, route: e }) : await K(t);
}
function Vn() {
    let t, e, n;
    j.addEventListener("mousemove", (o) => {
        const c = o.target;
        clearTimeout(t),
            (t = setTimeout(() => {
                s(c, q.hover);
            }, 20));
    });
    function a(o) {
        o.defaultPrevented || s(o.composedPath()[0], q.tap);
    }
    j.addEventListener("mousedown", a), j.addEventListener("touchstart", a, { passive: !0 });
    const r = new IntersectionObserver(
        (o) => {
            for (const c of o) c.isIntersecting && (Ct(new URL(c.target.href)), r.unobserve(c.target));
        },
        { threshold: 0 }
    );
    async function s(o, c) {
        const l = Se(o, j),
            d = l === e && c >= n;
        if (!l || d) return;
        const { url: p, external: y, download: f } = Nt(l, x, E.hash);
        if (y || f) return;
        const m = pt(l),
            u = p && bt(w.url) === bt(p);
        if (!(m.reload || u))
            if (c <= m.preload_data) {
                (e = l), (n = q.tap);
                const h = await Rt(p, !1);
                if (!h) return;
                $n(h);
            } else c <= m.preload_code && ((e = l), (n = c), Ct(p));
    }
    function i() {
        r.disconnect();
        for (const o of j.querySelectorAll("a")) {
            const { url: c, external: l, download: d } = Nt(o, x, E.hash);
            if (l || d) continue;
            const p = pt(o);
            p.reload || (p.preload_code === q.viewport && r.observe(o), p.preload_code === q.eager && Ct(c));
        }
    }
    W.add(i), i();
}
function H(t, e) {
    if (t instanceof Et) return t.body;
    const n = gt(t),
        a = kn(t);
    return E.hooks.handleError({ error: t, event: e, status: n, message: a }) ?? { message: a };
}
function Mn(t, e) {
    xn(
        () => (
            t.add(e),
            () => {
                t.delete(e);
            }
        )
    );
}
function rr(t) {
    Mn(Ht, t);
}
function ar(t, e = {}) {
    return (t = new URL(Vt(t))), t.origin !== dt ? Promise.reject(new Error("goto: invalid URL")) : zt(t, e, 0);
}
function Gn(t) {
    if (typeof t == "function") yt.push(t);
    else {
        const { href: e } = new URL(t, location.href);
        yt.push((n) => n.href === e);
    }
}
function Hn() {
    var e;
    (history.scrollRestoration = "manual"),
        addEventListener("beforeunload", (n) => {
            let a = !1;
            if ((de(), !et)) {
                const r = Xt(w, void 0, null, "leave"),
                    s = {
                        ...r.navigation,
                        cancel: () => {
                            (a = !0), r.reject(new Error("navigation cancelled"));
                        },
                    };
                Ht.forEach((i) => i(s));
            }
            a ? (n.preventDefault(), (n.returnValue = "")) : (history.scrollRestoration = "auto");
        }),
        addEventListener("visibilitychange", () => {
            document.visibilityState === "hidden" && de();
        }),
        ((e = navigator.connection) != null && e.saveData) || Vn(),
        j.addEventListener("click", async (n) => {
            if (n.button || n.which !== 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.defaultPrevented) return;
            const a = Se(n.composedPath()[0], j);
            if (!a) return;
            const { url: r, external: s, target: i, download: o } = Nt(a, x, E.hash);
            if (!r) return;
            if (i === "_parent" || i === "_top") {
                if (window.parent !== window) return;
            } else if (i && i !== "_self") return;
            const c = pt(a);
            if ((!(a instanceof SVGAElement) && r.protocol !== location.protocol && !(r.protocol === "https:" || r.protocol === "http:")) || o) return;
            const [d, p] = (E.hash ? r.hash.replace(/^#/, "") : r.href).split("#"),
                y = d === Ut(location);
            if (s || (c.reload && (!y || !p))) {
                je({ url: r, type: "link" }) ? (et = !0) : n.preventDefault();
                return;
            }
            if (p !== void 0 && y) {
                const [, f] = w.url.href.split("#");
                if (f === p) {
                    if ((n.preventDefault(), p === "" || (p === "top" && a.ownerDocument.getElementById("top") === null))) window.scrollTo({ top: 0 });
                    else {
                        const m = a.ownerDocument.getElementById(decodeURIComponent(p));
                        m && (m.scrollIntoView(), m.focus());
                    }
                    return;
                }
                if (((Y = !0), Mt(S), t(r), !c.replace_state)) return;
                Y = !1;
            }
            n.preventDefault(),
                await new Promise((f) => {
                    requestAnimationFrame(() => {
                        setTimeout(f, 0);
                    }),
                        setTimeout(f, 100);
                }),
                await X({ type: "link", url: r, keepfocus: c.keepfocus, noscroll: c.noscroll, replace_state: c.replace_state ?? r.href === location.href });
        }),
        j.addEventListener("submit", (n) => {
            if (n.defaultPrevented) return;
            const a = HTMLFormElement.prototype.cloneNode.call(n.target),
                r = n.submitter;
            if (((r == null ? void 0 : r.formTarget) || a.target) === "_blank" || ((r == null ? void 0 : r.formMethod) || a.method) !== "get") return;
            const o = new URL(((r == null ? void 0 : r.hasAttribute("formaction")) && (r == null ? void 0 : r.formAction)) || a.action);
            if (kt(o, x, !1)) return;
            const c = n.target,
                l = pt(c);
            if (l.reload) return;
            n.preventDefault(), n.stopPropagation();
            const d = new FormData(c),
                p = r == null ? void 0 : r.getAttribute("name");
            p && d.append(p, (r == null ? void 0 : r.getAttribute("value")) ?? ""),
                (o.search = new URLSearchParams(d).toString()),
                X({ type: "form", url: o, keepfocus: l.keepfocus, noscroll: l.noscroll, replace_state: l.replace_state ?? o.href === location.href });
        }),
        addEventListener("popstate", async (n) => {
            var a;
            if (!$t) {
                if ((a = n.state) != null && a[G]) {
                    const r = n.state[G];
                    if (((F = {}), r === S)) return;
                    const s = B[r],
                        i = n.state[Ae] ?? {},
                        o = new URL(n.state[ln] ?? location.href),
                        c = n.state[Z],
                        l = w.url ? Ut(location) === Ut(w.url) : !1;
                    if (c === U && (Te || l)) {
                        i !== L.state && (L.state = i), t(o), (B[S] = At()), s && scrollTo(s.x, s.y), (S = r);
                        return;
                    }
                    const p = r - S;
                    await X({
                        type: "popstate",
                        url: o,
                        popped: { state: i, scroll: s, delta: p },
                        accept: () => {
                            (S = r), (U = c);
                        },
                        block: () => {
                            history.go(-p);
                        },
                        nav_token: F,
                    });
                } else if (!Y) {
                    const r = new URL(location.href);
                    t(r), E.hash && location.reload();
                }
            }
        }),
        addEventListener("hashchange", () => {
            Y && ((Y = !1), history.replaceState({ ...history.state, [G]: ++S, [Z]: U }, "", location.href));
        });
    for (const n of document.querySelectorAll("link")) Cn.has(n.rel) && (n.href = n.href);
    addEventListener("pageshow", (n) => {
        n.persisted && $.navigating.set((Q.current = null));
    });
    function t(n) {
        (w.url = L.url = n), $.page.set(Zt(L)), $.page.notify();
    }
}
async function Kn(t, { status: e = 200, error: n, node_ids: a, params: r, route: s, server_route: i, data: o, form: c }) {
    Kt = !0;
    const l = new URL(location.href);
    let d;
    ({ params: r = {}, route: s = { id: null } } = (await Rt(l, !1)) || {}), (d = Gt.find(({ id: f }) => f === s.id));
    let p,
        y = !0;
    try {
        const f = a.map(async (u, h) => {
                const A = o[h];
                return (
                    A != null && A.uses && (A.uses = qe(A.uses)),
                    Wt({
                        loader: E.nodes[u],
                        url: l,
                        params: r,
                        route: s,
                        parent: async () => {
                            const R = {};
                            for (let I = 0; I < h; I += 1) Object.assign(R, (await f[I]).data);
                            return R;
                        },
                        server_data_node: Jt(A),
                    })
                );
            }),
            m = await Promise.all(f);
        if (d) {
            const u = d.layouts;
            for (let h = 0; h < u.length; h++) u[h] || m.splice(h, 0, void 0);
        }
        p = vt({ url: l, params: r, branch: m, status: e, error: n, form: c, route: d ?? null });
    } catch (f) {
        if (f instanceof qt) {
            await K(new URL(f.location, location.href));
            return;
        }
        (p = await St({ status: gt(f), error: await H(f, { url: l, params: r, route: s }), url: l, route: s })), (t.textContent = ""), (y = !1);
    }
    p.props.page && (p.props.page.state = {}), Ce(p, t, y);
}
async function De(t, e) {
    var s;
    const n = new URL(t);
    (n.pathname = Tn(t.pathname)), t.pathname.endsWith("/") && n.searchParams.append(An, "1"), n.searchParams.append(En, e.map((i) => (i ? "1" : "0")).join(""));
    const a = window.fetch,
        r = await a(n.href, {});
    if (!r.ok) {
        let i;
        throw ((s = r.headers.get("content-type")) != null && s.includes("application/json") ? (i = await r.json()) : r.status === 404 ? (i = "Not Found") : r.status === 500 && (i = "Internal Error"), new Et(r.status, i));
    }
    return new Promise(async (i) => {
        var p;
        const o = new Map(),
            c = r.body.getReader();
        function l(y) {
            return wn(y, {
                ...E.decoders,
                Promise: (f) =>
                    new Promise((m, u) => {
                        o.set(f, { fulfil: m, reject: u });
                    }),
            });
        }
        let d = "";
        for (;;) {
            const { done: y, value: f } = await c.read();
            if (y && !d) break;
            for (
                d +=
                    !f && d
                        ? `
`
                        : Je.decode(f, { stream: !0 });
                ;

            ) {
                const m = d.indexOf(`
`);
                if (m === -1) break;
                const u = JSON.parse(d.slice(0, m));
                if (((d = d.slice(m + 1)), u.type === "redirect")) return i(u);
                if (u.type === "data")
                    (p = u.nodes) == null ||
                        p.forEach((h) => {
                            (h == null ? void 0 : h.type) === "data" && ((h.uses = qe(h.uses)), (h.data = l(h.data)));
                        }),
                        i(u);
                else if (u.type === "chunk") {
                    const { id: h, data: A, error: R } = u,
                        I = o.get(h);
                    o.delete(h), R ? I.reject(l(R)) : I.fulfil(l(A));
                }
            }
        }
    });
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
let $t = !1;
function Yn(t) {
    const e = document.querySelector("[autofocus]");
    if (e) e.focus();
    else {
        const n = Fe(t);
        if (n && document.getElementById(n)) {
            const { x: r, y: s } = At();
            setTimeout(() => {
                const i = history.state;
                ($t = !0), location.replace(`#${n}`), E.hash && location.replace(t.hash), history.replaceState(i, "", t.hash), scrollTo(r, s), ($t = !1);
            });
        } else {
            const r = document.body,
                s = r.getAttribute("tabindex");
            (r.tabIndex = -1), r.focus({ preventScroll: !0, focusVisible: !1 }), s !== null ? r.setAttribute("tabindex", s) : r.removeAttribute("tabindex");
        }
        const a = getSelection();
        if (a && a.type !== "None") {
            const r = [];
            for (let s = 0; s < a.rangeCount; s += 1) r.push(a.getRangeAt(s));
            setTimeout(() => {
                if (a.rangeCount === r.length) {
                    for (let s = 0; s < a.rangeCount; s += 1) {
                        const i = r[s],
                            o = a.getRangeAt(s);
                        if (i.commonAncestorContainer !== o.commonAncestorContainer || i.startContainer !== o.startContainer || i.endContainer !== o.endContainer || i.startOffset !== o.startOffset || i.endOffset !== o.endOffset) return;
                    }
                    a.removeAllRanges();
                }
            });
        }
    }
}
function Xt(t, e, n, a) {
    var c, l;
    let r, s;
    const i = new Promise((d, p) => {
        (r = d), (s = p);
    });
    return (
        i.catch(() => {}),
        {
            navigation: {
                from: { params: t.params, route: { id: ((c = t.route) == null ? void 0 : c.id) ?? null }, url: t.url },
                to: n && { params: (e == null ? void 0 : e.params) ?? null, route: { id: ((l = e == null ? void 0 : e.route) == null ? void 0 : l.id) ?? null }, url: n },
                willUnload: !e,
                type: a,
                complete: i,
            },
            fulfil: r,
            reject: s,
        }
    );
}
function Zt(t) {
    return { data: t.data, error: t.error, form: t.form, params: t.params, route: t.route, state: t.state, status: t.status, url: t.url };
}
function zn(t) {
    const e = new URL(t);
    return (e.hash = decodeURIComponent(t.hash)), e;
}
function Fe(t) {
    let e;
    if (E.hash) {
        const [, , n] = t.hash.split("#", 3);
        e = n ?? "";
    } else e = t.hash.slice(1);
    return decodeURIComponent(e);
}
export { nr as a, rr as b, ar as g, Zn as l, L as p, $ as s };

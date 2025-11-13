var fe = Object.defineProperty;
var Q = (a) => {
  throw TypeError(a);
};
var ge = (a, e, t) =>
  e in a
    ? fe(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (a[e] = t);
var h = (a, e, t) => ge(a, typeof e != "symbol" ? e + "" : e, t),
  me = (a, e, t) => e.has(a) || Q("Cannot " + t);
var g = (a, e, t) => (
    me(a, e, "read from private field"), t ? t.call(a) : e.get(a)
  ),
  p = (a, e, t) =>
    e.has(a)
      ? Q("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(a)
      : e.set(a, t);
import { l as T, m as X, g as y, o as S, F as ee, u as A } from "./iK5FT0Sa.js";
import { P as re, g as he } from "./B3m8Ax5i.js";
import { g as u } from "./DQcFTXWv.js";
import { s as _e } from "./CAgnzvmt.js";
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
    a.SENTRY_RELEASE = { id: "0fdca126ca32380ac4e95a0011d2b66881dfb9e6" };
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
      (a._sentryDebugIds[e] = "0554fa3c-5b32-4da9-bc2c-afc81ac67e65"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-0554fa3c-5b32-4da9-bc2c-afc81ac67e65"));
  })();
} catch {}
function ra(...a) {
  return a.filter(Boolean).join(" ");
}
const pe = typeof document < "u";
let te = 0;
var I, N, C;
class we {
  constructor() {
    p(this, I, T(X([])));
    p(this, N, T(X([])));
    p(this, C, (e) => {
      const t = this.toasts.findIndex((n) => n.id === e);
      return t === -1 ? null : t;
    });
    h(this, "addToast", (e) => {
      pe && this.toasts.unshift(e);
    });
    h(this, "updateToast", ({ id: e, data: t, type: n, message: r }) => {
      const s = this.toasts.findIndex((i) => i.id === e),
        d = this.toasts[s];
      this.toasts[s] = { ...d, ...t, id: e, title: r, type: n, updated: !0 };
    });
    h(this, "create", (e) => {
      var i;
      const { message: t, ...n } = e,
        r =
          typeof (e == null ? void 0 : e.id) == "number" ||
          (e.id && ((i = e.id) == null ? void 0 : i.length) > 0)
            ? e.id
            : te++,
        s = e.dismissable === void 0 ? !0 : e.dismissable,
        d = e.type === void 0 ? "default" : e.type;
      return (
        ee(() => {
          this.toasts.find((f) => f.id === r)
            ? this.updateToast({
                id: r,
                data: e,
                type: d,
                message: t,
                dismissable: s,
              })
            : this.addToast({ ...n, id: r, title: t, dismissable: s, type: d });
        }),
        r
      );
    });
    h(
      this,
      "dismiss",
      (e) => (
        ee(() => {
          if (e === void 0) {
            this.toasts = this.toasts.map((n) => ({ ...n, dismiss: !0 }));
            return;
          }
          const t = this.toasts.findIndex((n) => n.id === e);
          this.toasts[t] &&
            (this.toasts[t] = { ...this.toasts[t], dismiss: !0 });
        }),
        e
      )
    );
    h(this, "remove", (e) => {
      if (e === void 0) {
        this.toasts = [];
        return;
      }
      const t = g(this, C).call(this, e);
      if (t !== null) return this.toasts.splice(t, 1), e;
    });
    h(this, "message", (e, t) =>
      this.create({ ...t, type: "default", message: e })
    );
    h(this, "error", (e, t) =>
      this.create({ ...t, type: "error", message: e })
    );
    h(this, "success", (e, t) =>
      this.create({ ...t, type: "success", message: e })
    );
    h(this, "info", (e, t) => this.create({ ...t, type: "info", message: e }));
    h(this, "warning", (e, t) =>
      this.create({ ...t, type: "warning", message: e })
    );
    h(this, "loading", (e, t) =>
      this.create({ ...t, type: "loading", message: e })
    );
    h(this, "promise", (e, t) => {
      if (!t) return;
      let n;
      t.loading !== void 0 &&
        (n = this.create({
          ...t,
          promise: e,
          type: "loading",
          message: typeof t.loading == "string" ? t.loading : t.loading(),
        }));
      const r = e instanceof Promise ? e : e();
      let s = n !== void 0;
      return (
        r
          .then((d) => {
            if (
              typeof d == "object" &&
              d &&
              "ok" in d &&
              typeof d.ok == "boolean" &&
              !d.ok
            ) {
              s = !1;
              const i = ye(d);
              this.create({ id: n, type: "error", message: i });
            } else if (t.success !== void 0) {
              s = !1;
              const i =
                typeof t.success == "function" ? t.success(d) : t.success;
              this.create({ id: n, type: "success", message: i });
            }
          })
          .catch((d) => {
            if (t.error !== void 0) {
              s = !1;
              const i = typeof t.error == "function" ? t.error(d) : t.error;
              this.create({ id: n, type: "error", message: i });
            }
          })
          .finally(() => {
            var d;
            s && (this.dismiss(n), (n = void 0)),
              (d = t.finally) == null || d.call(t);
          }),
        n
      );
    });
    h(this, "custom", (e, t) => {
      const n = (t == null ? void 0 : t.id) || te++;
      return this.create({ component: e, id: n, ...t }), n;
    });
    h(this, "removeHeight", (e) => {
      this.heights = this.heights.filter((t) => t.toastId !== e);
    });
    h(this, "setHeight", (e) => {
      const t = g(this, C).call(this, e.toastId);
      if (t === null) {
        this.heights.push(e);
        return;
      }
      this.heights[t] = e;
    });
    h(this, "reset", () => {
      (this.toasts = []), (this.heights = []);
    });
  }
  get toasts() {
    return y(g(this, I));
  }
  set toasts(e) {
    S(g(this, I), e, !0);
  }
  get heights() {
    return y(g(this, N));
  }
  set heights(e) {
    S(g(this, N), e, !0);
  }
}
(I = new WeakMap()), (N = new WeakMap()), (C = new WeakMap());
function ye(a) {
  return a && typeof a == "object" && "status" in a
    ? `HTTP error! Status: ${a.status}`
    : `Error! ${a}`;
}
const b = new we();
function be(a, e) {
  return b.create({ message: a, ...e });
}
var W;
class sa {
  constructor() {
    p(
      this,
      W,
      A(() => b.toasts.filter((e) => !e.dismiss))
    );
  }
  get toasts() {
    return y(g(this, W));
  }
}
W = new WeakMap();
const Se = be,
  se = Object.assign(Se, {
    success: b.success,
    info: b.info,
    warning: b.warning,
    error: b.error,
    custom: b.custom,
    message: b.message,
    promise: b.promise,
    dismiss: b.dismiss,
    loading: b.loading,
    getActiveToasts: () => b.toasts.filter((a) => !a.dismiss),
  });
let oe = T(void 0);
const ie = () => y(oe),
  oa = (a) => {
    const e = new URL(a, re),
      t = ie();
    return t && e.searchParams.set("override", t.token), e.toString();
  };
function ia() {
  try {
    Te();
  } catch (a) {
    console.error("failed to load override", a);
  }
}
function Te() {
  const e = new URL(location.href).searchParams.get("override");
  if (!e) return;
  const t = e.split(".");
  if (t.length !== 2) throw new Error("override token wrong amount of parts");
  const [n] = t,
    r = JSON.parse(atob(n));
  if (Date.now() / 1e3 > r.expiresAt) throw new Error("override token expired");
  se.info(
    `Currently using the ${r.id} override. Bugs may occur, go back to ${location.protocol}//${location.host} to clear this override.`,
    { duration: 6e4 }
  ),
    S(oe, { token: e, payload: r }, !0);
}
let m;
function O(a) {
  const e = m.__externref_table_alloc();
  return m.__wbindgen_export_2.set(e, a), e;
}
function P(a, e) {
  try {
    return a.apply(this, e);
  } catch (t) {
    const n = O(t);
    m.__wbindgen_exn_store(n);
  }
}
const ce =
  typeof TextDecoder < "u"
    ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
    : {
        decode: () => {
          throw Error("TextDecoder not available");
        },
      };
typeof TextDecoder < "u" && ce.decode();
let x = null;
function F() {
  return (
    (x === null || x.byteLength === 0) && (x = new Uint8Array(m.memory.buffer)),
    x
  );
}
function q(a, e) {
  return (a = a >>> 0), ce.decode(F().subarray(a, a + e));
}
function J(a) {
  return a == null;
}
function ca(a) {
  m.set_user_id(a);
}
let V = 0;
const K =
    typeof TextEncoder < "u"
      ? new TextEncoder("utf-8")
      : {
          encode: () => {
            throw Error("TextEncoder not available");
          },
        },
  ve =
    typeof K.encodeInto == "function"
      ? function (a, e) {
          return K.encodeInto(a, e);
        }
      : function (a, e) {
          const t = K.encode(a);
          return e.set(t), { read: a.length, written: t.length };
        };
function de(a, e, t) {
  if (t === void 0) {
    const i = K.encode(a),
      l = e(i.length, 1) >>> 0;
    return (
      F()
        .subarray(l, l + i.length)
        .set(i),
      (V = i.length),
      l
    );
  }
  let n = a.length,
    r = e(n, 1) >>> 0;
  const s = F();
  let d = 0;
  for (; d < n; d++) {
    const i = a.charCodeAt(d);
    if (i > 127) break;
    s[r + d] = i;
  }
  if (d !== n) {
    d !== 0 && (a = a.slice(d)), (r = t(r, n, (n = d + a.length * 3), 1) >>> 0);
    const i = F().subarray(r + d, r + n),
      l = ve(a, i);
    (d += l.written), (r = t(r, n, d, 1) >>> 0);
  }
  return (V = d), r;
}
function da(a) {
  const e = de(a, m.__wbindgen_malloc, m.__wbindgen_realloc),
    t = V;
  m.request_url(e, t);
}
function Ee() {
  let a, e;
  try {
    const t = m.get_load_payload();
    return (a = t[0]), (e = t[1]), q(t[0], t[1]);
  } finally {
    m.__wbindgen_free(a, e, 1);
  }
}
function Pe(a) {
  let e, t;
  try {
    const n = de(a, m.__wbindgen_malloc, m.__wbindgen_realloc),
      r = V,
      s = m.get_pawtected_endpoint_payload(n, r);
    return (e = s[0]), (t = s[1]), q(s[0], s[1]);
  } finally {
    m.__wbindgen_free(e, t, 1);
  }
}
async function Ae(a, e) {
  if (typeof Response == "function" && a instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function")
      try {
        return await WebAssembly.instantiateStreaming(a, e);
      } catch (n) {
        if (a.headers.get("Content-Type") != "application/wasm")
          console.warn(
            "`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
            n
          );
        else throw n;
      }
    const t = await a.arrayBuffer();
    return await WebAssembly.instantiate(t, e);
  } else {
    const t = await WebAssembly.instantiate(a, e);
    return t instanceof WebAssembly.Instance ? { instance: t, module: a } : t;
  }
}
function Oe() {
  const a = {};
  return (
    (a.wbg = {}),
    (a.wbg.__wbg_buffer_609cc3eee51ed158 = function (e) {
      return e.buffer;
    }),
    (a.wbg.__wbg_call_672a4d21634d4a24 = function () {
      return P(function (e, t) {
        return e.call(t);
      }, arguments);
    }),
    (a.wbg.__wbg_call_7cccdd69e0791ae2 = function () {
      return P(function (e, t, n) {
        return e.call(t, n);
      }, arguments);
    }),
    (a.wbg.__wbg_crypto_574e78ad8b13b65f = function (e) {
      return e.crypto;
    }),
    (a.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function () {
      return P(function (e, t) {
        e.getRandomValues(t);
      }, arguments);
    }),
    (a.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function (e) {
      return e.msCrypto;
    }),
    (a.wbg.__wbg_new_a12002a7f91c75be = function (e) {
      return new Uint8Array(e);
    }),
    (a.wbg.__wbg_newnoargs_105ed471475aaf50 = function (e, t) {
      return new Function(q(e, t));
    }),
    (a.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function (
      e,
      t,
      n
    ) {
      return new Uint8Array(e, t >>> 0, n >>> 0);
    }),
    (a.wbg.__wbg_newwithlength_a381634e90c276d4 = function (e) {
      return new Uint8Array(e >>> 0);
    }),
    (a.wbg.__wbg_node_905d3e251edff8a2 = function (e) {
      return e.node;
    }),
    (a.wbg.__wbg_process_dc0fbacc7c1c06f7 = function (e) {
      return e.process;
    }),
    (a.wbg.__wbg_randomFillSync_ac0988aba3254290 = function () {
      return P(function (e, t) {
        e.randomFillSync(t);
      }, arguments);
    }),
    (a.wbg.__wbg_require_60cc747a6bc5215a = function () {
      return P(function () {
        return module.require;
      }, arguments);
    }),
    (a.wbg.__wbg_set_65595bdd868b3009 = function (e, t, n) {
      e.set(t, n >>> 0);
    }),
    (a.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function () {
      const e = typeof global > "u" ? null : global;
      return J(e) ? 0 : O(e);
    }),
    (a.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function () {
      const e = typeof globalThis > "u" ? null : globalThis;
      return J(e) ? 0 : O(e);
    }),
    (a.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function () {
      const e = typeof self > "u" ? null : self;
      return J(e) ? 0 : O(e);
    }),
    (a.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function () {
      const e = typeof window > "u" ? null : window;
      return J(e) ? 0 : O(e);
    }),
    (a.wbg.__wbg_subarray_aa9065fa9dc5df96 = function (e, t, n) {
      return e.subarray(t >>> 0, n >>> 0);
    }),
    (a.wbg.__wbg_versions_c01dfd4722a88165 = function (e) {
      return e.versions;
    }),
    (a.wbg.__wbindgen_init_externref_table = function () {
      const e = m.__wbindgen_export_2,
        t = e.grow(4);
      e.set(0, void 0),
        e.set(t + 0, void 0),
        e.set(t + 1, null),
        e.set(t + 2, !0),
        e.set(t + 3, !1);
    }),
    (a.wbg.__wbindgen_is_function = function (e) {
      return typeof e == "function";
    }),
    (a.wbg.__wbindgen_is_object = function (e) {
      const t = e;
      return typeof t == "object" && t !== null;
    }),
    (a.wbg.__wbindgen_is_string = function (e) {
      return typeof e == "string";
    }),
    (a.wbg.__wbindgen_is_undefined = function (e) {
      return e === void 0;
    }),
    (a.wbg.__wbindgen_memory = function () {
      return m.memory;
    }),
    (a.wbg.__wbindgen_string_new = function (e, t) {
      return q(e, t);
    }),
    (a.wbg.__wbindgen_throw = function (e, t) {
      throw new Error(q(e, t));
    }),
    a
  );
}
function xe(a, e) {
  return (
    (m = a.exports),
    (qe.__wbindgen_wasm_module = e),
    (x = null),
    m.__wbindgen_start(),
    m
  );
}
async function qe(a) {
  if (m !== void 0) return m;
  typeof a < "u" &&
    (Object.getPrototypeOf(a) === Object.prototype
      ? ({ module_or_path: a } = a)
      : console.warn(
          "using deprecated parameters for the initialization function; pass a single object instead"
        )),
    typeof a > "u" && (a = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const e = Oe();
  (typeof a == "string" ||
    (typeof Request == "function" && a instanceof Request) ||
    (typeof URL == "function" && a instanceof URL)) &&
    (a = fetch(a));
  const { instance: t, module: n } = await Ae(await a, e);
  return xe(t, n);
}
const Ie = () => "Unexpected server error. Try again later.",
  Ne = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  o = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Ie() : Ne()),
  Ce = () => "You need to be logged in to paint",
  ke = () => "Você precisa estar conectado para pintar",
  Me = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Ce() : ke()),
  Le = (a) => `Error while painting: ${a.err}`,
  Be = (a) => `Erro enquanto pinta: ${a.err}`,
  De = (a, e = {}) => ((e.locale ?? u()) === "en" ? Le(a) : Be(a)),
  Ue = () => "Invalid phone number",
  Ge = () => "Número de telefone inválido",
  Re = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Ue() : Ge()),
  $e = () => "Phone already used",
  je = () => "Telefone já usado",
  Je = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? $e() : je()),
  Fe = () => "You have to wait to resend a code",
  Ke = () => "Você tem de esperar para reenviar um código",
  Ve = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Fe() : Ke()),
  ze = () => "Invalid code",
  We = () => "Código inválido",
  He = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? ze() : We()),
  Ye = () =>
    "Operation not allowed. Maybe you have too many favorite locations.",
  Ze = () =>
    "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Qe = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Ye() : Ze()),
  Xe = () => "Location name is too big (max. 128 characters)",
  et = () => "Nome da localização é grande demais (max. 128 caracteres)",
  tt = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Xe() : et()),
  nt = () => "Couldn't complete the purchase. This item does not exist.",
  at = () => "Não foi possível concluir a compra. Este item não existe.",
  rt = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? nt() : at()),
  st = () => "You do not have enough droplets to buy this item.",
  ot = () => "Você não tem gotas suficientes para comprar este item.",
  it = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? st() : ot()),
  ct = () => "You already have this item. Please refresh the page.",
  dt = () => "Você já possui este item. Atualize a página.",
  lt = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? ct() : dt()),
  ut = () => "Alliance name exceeded the maximum number of characters",
  ft = () => "O nome da aliança excedeu o número máximo de caracteres",
  gt = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? ut() : ft()),
  mt = () => "Alliance name already taken",
  ht = () => "Já possui uma aliança com esse nome",
  _t = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? mt() : ht()),
  pt = () => "Alliance with empty name",
  wt = () => "Aliança com nome vazio",
  yt = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? pt() : wt()),
  bt = () => "You are already in an alliance",
  St = () => "Você já está em uma aliança",
  Tt = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? bt() : St()),
  vt = () => "You are not allowed to do this",
  Et = () => "Você não tem permissão para fazer isso",
  v = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? vt() : Et()),
  Pt = () =>
    "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  At = () =>
    "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Ot = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Pt() : At()),
  xt = () =>
    "You or someone in your network is making a lot of requests to the server. Try again later.",
  qt = () =>
    "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  ne = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? xt() : qt()),
  It = () => "No internet access or the servers are offline. Try again later.",
  Nt = () =>
    "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Ct = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? It() : Nt()),
  kt = () =>
    "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Mt = () =>
    "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Lt = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? kt() : Mt()),
  Bt = () => "Refresh your page to get the latest update",
  Dt = () => "Recarregue sua página para obter as últimas atualizações",
  Ut = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Bt() : Dt()),
  Gt = () => "Inappropriate content",
  Rt = () => "Conteúdo inapropriado",
  $t = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Gt() : Rt()),
  jt = () => "Botting",
  Jt = () => "Uso de bots",
  Ft = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? jt() : Jt()),
  Kt = () => "Hate speech",
  Vt = () => "Discurso de Ódio",
  zt = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Kt() : Vt()),
  Wt = () => "Griefing",
  Ht = () => "Griefing",
  Yt = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Wt() : Ht()),
  Zt = () => "Doxxing",
  Qt = () => "Doxxing",
  Xt = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Zt() : Qt()),
  en = () => "Leaderboard is temporarily disabled",
  tn = () => "O ranking está temporariamente desativado",
  E = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? en() : tn()),
  nn = () => "Multi-accounting",
  an = () => "Múltiplas contas",
  rn = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? nn() : an()),
  sn = () => "Breaking the rules",
  on = () => "Quebrar as regras",
  cn = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? sn() : on()),
  dn = () => "Your account has been suspended for breaking the rules",
  ln = () => "Sua conta foi suspensa por quebrar as regras",
  un = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? dn() : ln()),
  fn = () => "Your account has been banned for violating the rules",
  gn = () => "A sua conta foi banida por quebrar as regras",
  mn = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? fn() : gn()),
  hn = (a) => `Your account has been suspended out until ${a.until}`,
  _n = (a) => `A sua conta está suspensa até ${a.until}`,
  pn = (a, e = {}) => ((e.locale ?? u()) === "en" ? hn(a) : _n(a)),
  wn = () => "You are trying to paint with a color you do not own",
  yn = () => "Você está tentando pintar com uma cor que não possui",
  bn = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? wn() : yn()),
  Sn = () => "The new leader must be a member of the alliance",
  Tn = () => "O novo líder deve ser um membro da aliança",
  vn = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? Sn() : Tn()),
  En = () =>
    "The name contains disallowed characters or words. Please choose a different name.",
  Pn = () =>
    "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  An = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? En() : Pn()),
  On = () => "Invalid discord.",
  xn = () => "Discord inválido.",
  qn = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? On() : xn()),
  In = () => "The typed username does not match your current username.",
  Nn = () =>
    "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Cn = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? In() : Nn()),
  kn = (a) => `You can change your name again in ${a.days} days`,
  Mn = (a) => `Você pode alterar seu nome novamente em ${a.days} dias.`,
  Ln = (a, e = {}) => ((e.locale ?? u()) === "en" ? kn(a) : Mn(a)),
  le = () => "You cannot paint over event pixels",
  Bn = le,
  Dn = (a = {}, e = {}) => ((e.locale ?? u()) === "en" ? le() : Bn()),
  la = {
    griefing: Yt(),
    "multi-accounting": rn(),
    "hate-speech": zt(),
    bot: Ft(),
    doxxing: Xt(),
    "inappropriate-content": $t(),
    other: cn(),
  },
  ua = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-600",
    "inappropriate-content": "text-amber-600",
    "multi-accounting": "text-amber-600",
    bot: "text-amber-600",
    griefing: "text-amber-600",
    other: "text-blue-600",
  },
  ae = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6,
  };
function Un(a) {
  const e = atob(a),
    t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
  return t;
}
class Gn {
  constructor(e) {
    h(this, "bytes");
    this.bytes = e ?? new Uint8Array();
  }
  set(e, t) {
    const n = Math.floor(e / 8),
      r = e % 8;
    if (n >= this.bytes.length) {
      const d = new Uint8Array(n + 1),
        i = d.length - this.bytes.length;
      for (let l = 0; l < this.bytes.length; l++) d[l + i] = this.bytes[l];
      this.bytes = d;
    }
    const s = this.bytes.length - 1 - n;
    t
      ? (this.bytes[s] = this.bytes[s] | (1 << r))
      : (this.bytes[s] = this.bytes[s] & ~(1 << r));
  }
  get(e) {
    const t = Math.floor(e / 8),
      n = e % 8,
      r = this.bytes.length;
    return t > r ? !1 : (this.bytes[r - 1 - t] & (1 << n)) !== 0;
  }
}
function fa(a) {
  return new Promise((e, t) => {
    const n = new FileReader();
    (n.onload = () => {
      const r = n.result;
      if (!r || typeof r != "string") {
        t(new Error("Could not read blob as data URL"));
        return;
      }
      e(r.substring(r.indexOf(",") + 1));
    }),
      n.readAsDataURL(a);
  });
}
var k, M, L, B, D, U, G, R;
class Rn {
  constructor() {
    h(this, "channel", new BroadcastChannel("user-channel"));
    p(this, k, T());
    p(this, M, T(!0));
    p(this, L, T());
    p(this, B, T(Date.now()));
    p(
      this,
      D,
      A(() => {
        if (!this.data) return;
        const e = this.data.charges;
        if (e.count > e.max) return e.count;
        const t =
          e.count + Math.max((he.now - this.lastFetch) / e.cooldownMs, 0);
        return Math.min(e.max, t);
      })
    );
    p(
      this,
      U,
      A(() =>
        this.charges !== void 0 && this.data
          ? (1 - (this.charges % 1)) * this.data.charges.cooldownMs
          : void 0
      )
    );
    p(
      this,
      G,
      A(() => {
        var e;
        return new Gn(
          Un(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? "AA==")
        );
      })
    );
    p(
      this,
      R,
      A(() => {
        var t;
        if (!((t = this.data) != null && t.timeoutUntil)) return;
        const e = new Date(this.data.timeoutUntil);
        if (!(e.getTime() < Date.now())) return e;
      })
    );
    this.channel.onmessage = (e) => {
      const t = JSON.parse(e.data);
      t.type === "refresh"
        ? ((this.data = t.data), (this.lastFetch = Date.now()))
        : t.type === "logout" && (this.data = void 0);
    };
  }
  get data() {
    return y(g(this, k));
  }
  set data(e) {
    S(g(this, k), e, !0);
  }
  get loading() {
    return y(g(this, M));
  }
  set loading(e) {
    S(g(this, M), e, !0);
  }
  get notificiationCount() {
    return y(g(this, L));
  }
  set notificiationCount(e) {
    S(g(this, L), e, !0);
  }
  get lastFetch() {
    return y(g(this, B));
  }
  set lastFetch(e) {
    S(g(this, B), e);
  }
  get charges() {
    return y(g(this, D));
  }
  set charges(e) {
    S(g(this, D), e);
  }
  get cooldown() {
    return y(g(this, U));
  }
  set cooldown(e) {
    S(g(this, U), e);
  }
  get flagsBitmap() {
    return y(g(this, G));
  }
  set flagsBitmap(e) {
    S(g(this, G), e);
  }
  get timeoutUntil() {
    return y(g(this, R));
  }
  set timeoutUntil(e) {
    S(g(this, R), e);
  }
  async refresh() {
    var e;
    try {
      return (
        (this.loading = !0),
        (this.data = await Z.me()),
        (this.lastFetch = Date.now()),
        this.channel.postMessage(
          JSON.stringify({ type: "refresh", data: this.data })
        ),
        this.data &&
          this.notificiationCount === void 0 &&
          Z.getNotificationCount().then((t) => {
            this.notificiationCount = t;
          }),
        (e = this.data) != null && e.id && _e("userId", { id: this.data.id }),
        !!this.data
      );
    } catch (t) {
      return console.error(t), se.warning(Ct(), { duration: 1e4 }), !1;
    } finally {
      this.loading = !1;
    }
  }
  async logout() {
    await Z.logout(),
      this.channel.postMessage(JSON.stringify({ type: "logout" })),
      (this.data = void 0);
  }
  hasColor(e) {
    var n;
    return e < 32
      ? !0
      : ((((n = this.data) == null ? void 0 : n.extraColorsBitmap) ?? 0) &
          (1 << (e - 32))) !==
          0;
  }
}
(k = new WeakMap()),
  (M = new WeakMap()),
  (L = new WeakMap()),
  (B = new WeakMap()),
  (D = new WeakMap()),
  (U = new WeakMap()),
  (G = new WeakMap()),
  (R = new WeakMap());
const z = new Rn();
class c extends Error {
  constructor(e, t) {
    super(e), (this.message = e), (this.status = t);
  }
}
function $n(a, e) {
  const t = {};
  for (const n of a) {
    const r = e(n);
    let s = t[r];
    s ? s.push(n) : (t[r] = [n]);
  }
  return t;
}
function ga(a, e) {
  const t = {};
  for (const n of a) {
    const r = e(n);
    t[r] = n;
  }
  return t;
}
const jn = [{ tileSize: 1e3, zoom: 11 }],
  Jn = 4,
  Fn = 6e3,
  Kn = [
    { name: "Transparent", rgb: [0, 0, 0] },
    { name: "Black", rgb: [0, 0, 0] },
    { name: "Dark Gray", rgb: [60, 60, 60] },
    { name: "Gray", rgb: [120, 120, 120] },
    { name: "Light Gray", rgb: [210, 210, 210] },
    { name: "White", rgb: [255, 255, 255] },
    { name: "Deep Red", rgb: [96, 0, 24] },
    { name: "Red", rgb: [237, 28, 36] },
    { name: "Orange", rgb: [255, 127, 39] },
    { name: "Gold", rgb: [246, 170, 9] },
    { name: "Yellow", rgb: [249, 221, 59] },
    { name: "Light Yellow", rgb: [255, 250, 188] },
    { name: "Dark Green", rgb: [14, 185, 104] },
    { name: "Green", rgb: [19, 230, 123] },
    { name: "Light Green", rgb: [135, 255, 94] },
    { name: "Dark Teal", rgb: [12, 129, 110] },
    { name: "Teal", rgb: [16, 174, 166] },
    { name: "Light Teal", rgb: [19, 225, 190] },
    { name: "Dark Blue", rgb: [40, 80, 158] },
    { name: "Blue", rgb: [64, 147, 228] },
    { name: "Cyan", rgb: [96, 247, 242] },
    { name: "Indigo", rgb: [107, 80, 246] },
    { name: "Light Indigo", rgb: [153, 177, 251] },
    { name: "Dark Purple", rgb: [120, 12, 153] },
    { name: "Purple", rgb: [170, 56, 185] },
    { name: "Light Purple", rgb: [224, 159, 249] },
    { name: "Dark Pink", rgb: [203, 0, 122] },
    { name: "Pink", rgb: [236, 31, 128] },
    { name: "Light Pink", rgb: [243, 141, 169] },
    { name: "Dark Brown", rgb: [104, 70, 52] },
    { name: "Brown", rgb: [149, 104, 42] },
    { name: "Beige", rgb: [248, 178, 119] },
    { name: "Medium Gray", rgb: [170, 170, 170] },
    { name: "Dark Red", rgb: [165, 14, 30] },
    { name: "Light Red", rgb: [250, 128, 114] },
    { name: "Dark Orange", rgb: [228, 92, 26] },
    { name: "Light Tan", rgb: [214, 181, 148] },
    { name: "Dark Goldenrod", rgb: [156, 132, 49] },
    { name: "Goldenrod", rgb: [197, 173, 49] },
    { name: "Light Goldenrod", rgb: [232, 212, 95] },
    { name: "Dark Olive", rgb: [74, 107, 58] },
    { name: "Olive", rgb: [90, 148, 74] },
    { name: "Light Olive", rgb: [132, 197, 115] },
    { name: "Dark Cyan", rgb: [15, 121, 159] },
    { name: "Light Cyan", rgb: [187, 250, 242] },
    { name: "Light Blue", rgb: [125, 199, 255] },
    { name: "Dark Indigo", rgb: [77, 49, 184] },
    { name: "Dark Slate Blue", rgb: [74, 66, 132] },
    { name: "Slate Blue", rgb: [122, 113, 196] },
    { name: "Light Slate Blue", rgb: [181, 174, 241] },
    { name: "Light Brown", rgb: [219, 164, 99] },
    { name: "Dark Beige", rgb: [209, 128, 81] },
    { name: "Light Beige", rgb: [255, 197, 165] },
    { name: "Dark Peach", rgb: [155, 82, 73] },
    { name: "Peach", rgb: [209, 128, 120] },
    { name: "Light Peach", rgb: [250, 182, 164] },
    { name: "Dark Tan", rgb: [123, 99, 82] },
    { name: "Tan", rgb: [156, 132, 107] },
    { name: "Dark Slate", rgb: [51, 57, 65] },
    { name: "Slate", rgb: [109, 117, 141] },
    { name: "Light Slate", rgb: [179, 185, 209] },
    { name: "Dark Stone", rgb: [109, 100, 63] },
    { name: "Stone", rgb: [148, 140, 107] },
    { name: "Light Stone", rgb: [205, 197, 158] },
  ],
  Vn = { needsPhoneVerification: "needs_phone_verification" },
  zn = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {},
  },
  Wn = {
    10: {
      name: "25,000 Droplets",
      price: 500,
      isDollar: !0,
      lookupKey: "droplets_5",
      items: [{ name: "Droplet", amount: 25e3 }],
    },
    20: {
      name: "78,750 Droplets",
      price: 1500,
      isDollar: !0,
      lookupKey: "droplets_15",
      items: [{ name: "Droplet", amount: 76750 }],
    },
    30: {
      name: "165,000 Droplets",
      price: 3e3,
      isDollar: !0,
      lookupKey: "droplets_30",
      items: [{ name: "Droplet", amount: 165e3 }],
    },
    40: {
      name: "287,500 Droplets",
      price: 5e3,
      isDollar: !0,
      lookupKey: "droplets_50",
      items: [{ name: "Droplet", amount: 287500 }],
    },
    50: {
      name: "450,000 Droplets",
      price: 7500,
      isDollar: !0,
      lookupKey: "droplets_75",
      items: [{ name: "Droplet", amount: 45e4 }],
    },
    60: {
      name: "625,000 Droplets",
      price: 1e4,
      isDollar: !0,
      lookupKey: "droplets_100",
      items: [{ name: "Droplet", amount: 625e3 }],
    },
    70: {
      name: "+5 Max. Charges",
      price: 500,
      isDollar: !1,
      items: [{ name: "Max. Charge", amount: 5 }],
    },
    80: {
      name: "+30 Paint Charges",
      price: 500,
      isDollar: !1,
      items: [{ name: "Paint Charge", amount: 30 }],
    },
    100: {
      name: "Unlock Color",
      price: 2e3,
      isDollar: !1,
      items: [{ name: "Color", amount: 1 }],
    },
    110: {
      name: "Flag",
      price: 2e4,
      isDollar: !1,
      items: [{ name: "Flag", amount: 1 }],
    },
    120: {
      name: "Profile Picture",
      price: 2e4,
      isDollar: !1,
      items: [{ name: "Profile Picture", amount: 1 }],
    },
  },
  Hn = JSON.parse(
    `[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`
  ),
  H = {
    seasons: jn,
    regionSize: Jn,
    refreshIntervalMs: Fn,
    colors: Kn,
    errors: Vn,
    items: zn,
    products: Wn,
    countries: Hn,
  },
  Yn = H,
  ue = H.seasons.length - 1,
  ma = H.seasons[ue].zoom,
  ha = H.seasons[ue].tileSize;
function _a(a) {
  return Yn.countries[a - 1];
}
function Zn(a) {
  return z.data ? z.data.experiments[a] ?? null : null;
}
function pa(a) {
  var e, t;
  return (
    ((t = (e = z.data) == null ? void 0 : e.experiments[a]) == null
      ? void 0
      : t.enabled) ?? !0
  );
}
var $;
class Qn {
  constructor(e) {
    p(this, $, T(!0));
    this.url = e;
  }
  get online() {
    return y(g(this, $));
  }
  set online(e) {
    S(g(this, $), e, !0);
  }
  async paint(e, t) {
    const n = $n(e, (i) => `t=(${i.tile[0]},${i.tile[1]}),s=${i.season}`),
      r = Zn("2025-09_pawtect");
    if (!r) throw new Error("paint request while pawtect experiment not found");
    const d = (
      await Promise.all(
        Object.values(n).map((i) => {
          const [l, f] = i[0].tile,
            w = i[0].season,
            _ = {
              colors: i.map((Y) => Y.colorIdx),
              coords: i.flatMap((Y) => Y.pixel),
              fp: t,
            },
            j = JSON.stringify(_);
          return this.request(`/s${w}/pixel/${l}/${f}`, {
            method: "POST",
            body: j,
            headers: {
              "x-pawtect-token": r.variant !== "disabled" ? Pe(j) : "",
              "x-pawtect-variant": r.variant,
            },
            credentials: "include",
          });
        })
      )
    ).filter((i) => i.status !== 200);
    if (d.length) {
      const i = d[0];
      if (i.status === 401) throw new Error(Me());
      if (i.status === 403) {
        if (i.headers.get("cf-mitigated") === "challenge")
          throw new Error(Lt());
        const l = await i.json();
        if ((l == null ? void 0 : l.error) === "refresh") throw new Error(Ut());
        if ((l == null ? void 0 : l.error) === "color-not-owned")
          throw new Error(bn());
        if ((l == null ? void 0 : l.error) === "event-pixel-present")
          throw new Error(Dn());
        z.refresh();
      } else if (i.status === 451) {
        const l = await d[0].json();
        l == null || l.err;
        const f = l == null ? void 0 : l.suspension;
        if (f === "ban") throw new Error(mn());
        if (f === "timeout") {
          const w = new Date(
            Date.now() + ((l == null ? void 0 : l.durationMs) ?? 0)
          );
          throw new Error(pn({ until: w.toLocaleString() }));
        } else throw new Error(o());
      } else throw new Error(o());
    }
  }
  async getPixelInfo({
    season: e,
    tile: [t, n],
    pixel: [r, s],
    isModerator: d = !1,
  }) {
    const i = new URLSearchParams();
    i.set("x", String(r)), i.set("y", String(s));
    const l = await this.request(
      `${d ? "/moderator" : ""}/s${e}/pixel/${t}/${n}?${i.toString()}`,
      { credentials: "include" }
    );
    if (l.status !== 200) {
      const f = await l.text();
      throw new Error(De({ err: f }));
    }
    return l.json();
  }
  async getPixelAreaInfo({ season: e, tile: [t, n], p0: [r, s], p1: [d, i] }) {
    const l = await this.request(
      `/moderator/pixel-area/s${e}/${t}/${n}?x0=${r}&y0=${s}&x1=${d}&y1=${i}`,
      { credentials: "include" }
    );
    if (l.status !== 200) {
      const _ = await l.text();
      throw (
        (console.error("Error while fetching pixel area info", _),
        new Error(o()))
      );
    }
    const f = await l.arrayBuffer(),
      w = new DataView(f);
    return {
      paintedBy: Array.from({ length: f.byteLength / 4 }, (_, j) =>
        w.getUint32(j * 4, !0)
      ),
    };
  }
  async me() {
    const e = await this.request("/me", { credentials: "include" });
    if (e.status === 200) return await e.json();
  }
  async logout() {
    const e = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    if (e.status !== 200) throw new Error(await e.text());
    return await e.json();
  }
  async refreshPaymentSession(e) {
    return (
      (
        await this.request(
          `/payment/refresh-session/${encodeURIComponent(e)}`,
          { method: "POST", credentials: "include" }
        )
      ).status === 200
    );
  }
  async getOtpCooldown() {
    const e = await this.request("/otp/cooldown", { credentials: "include" });
    if (e.status !== 200) throw new Error(o());
    return await e.json();
  }
  async sendOtp(e) {
    const t = await this.request("/otp/send", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ phone: e }),
    });
    if (t.status === 400) throw new Error(Re());
    if (t.status === 403) throw new Error(Je());
    if (t.status === 429) throw new Error(Ve());
    if (t.status !== 200) throw new Error(o());
    return await t.json();
  }
  async verifyOtp(e) {
    const t = await this.request("/otp/verify", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ code: e }),
    });
    if (t.status === 400) throw new Error(He());
    if (t.status !== 200) throw new Error(o());
    return await t.json();
  }
  async updateMe(e) {
    const t = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e),
    });
    if (t.status === 400) {
      const n = await t.json(),
        r = (n == null ? void 0 : n.error) ?? "";
      if (r === "invalid_name") throw new Error(An());
      if (r === "invalid_discord") throw new Error(qn());
      if (typeof r == "string" && r.startsWith("name_change_cooldown:")) {
        const s = parseInt(r.split(":")[1] ?? "0", 10);
        throw new Error(Ln({ days: s }));
      }
      throw new Error(n == null ? void 0 : n.error);
    } else if (t.status !== 200) throw new Error(o());
  }
  async deleteMe(e) {
    const t = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({ confirmText: e }),
    });
    if (t.status === 400) throw new Error(Cn());
    if (t.status !== 200) throw new Error(o());
  }
  async favoriteLocation(e) {
    const t = await this.request("/favorite-location", {
      method: "POST",
      body: JSON.stringify({ latitude: e[0], longitude: e[1] }),
      credentials: "include",
    });
    if (t.status === 403) throw new Error(Qe());
    if (t.status !== 200) throw new Error(o());
  }
  async deleteFavoriteLocation(e) {
    if (
      (
        await this.request("/favorite-location/delete", {
          method: "POST",
          body: JSON.stringify({ id: e }),
          credentials: "include",
        })
      ).status !== 200
    )
      throw new Error(o());
  }
  async updateFavoriteLocation(e, t) {
    const n = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({ id: e, name: t }),
      credentials: "include",
    });
    if (n.status === 400) throw new Error(tt());
    if (n.status !== 200) throw new Error(o());
  }
  async leaderboardPlayers(e) {
    const t = await this.request(`/leaderboard/player/${e}`);
    if (t.status !== 200) throw new Error(E());
    return t.json();
  }
  async leaderboardAlliances(e) {
    const t = await this.request(`/leaderboard/alliance/${e}`);
    if (t.status !== 200) throw new Error(E());
    return t.json();
  }
  async leaderboardRegions(e, t = 0) {
    const n = await this.request(`/leaderboard/region/${e}/${t}`);
    if (n.status === 200) return n.json();
    throw new Error(E());
  }
  async leaderboardRegionPlayers(e, t) {
    const n = await this.request(`/leaderboard/region/players/${e}/${t}`);
    if (n.status === 200) return n.json();
    throw new Error(E());
  }
  async leaderboardRegionAlliances(e, t) {
    const n = await this.request(`/leaderboard/region/alliances/${e}/${t}`);
    if (n.status === 200) return n.json();
    throw new Error(E());
  }
  async leaderboardCountries(e) {
    const t = await this.request(`/leaderboard/country/${e}`, {
      credentials: "include",
    });
    if (t.status === 200) return t.json();
    throw new Error(E());
  }
  async getRandomTile(e) {
    const t = await this.request(`/s${e}/tile/random`);
    if (t.status !== 200) throw new Error(o());
    return t.json();
  }
  async purchase(e) {
    const t = await this.request("/purchase", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ product: e }),
    });
    if (t.status !== 200)
      throw t.status === 404
        ? new Error(rt())
        : t.status === 403
        ? new Error(it())
        : t.status === 409
        ? new Error(lt())
        : new Error(o());
  }
  async getAlliance() {
    const e = await this.request("/alliance", { credentials: "include" });
    if (e.status === 200) return e.json();
    if (e.status === 404) return;
    throw new Error(o());
  }
  async createAlliance(e) {
    const t = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ name: e }),
    });
    if (t.status === 200) return t.json();
    if (t.status === 400) {
      const n = await t.json();
      throw n.error === "max_characters"
        ? new Error(gt())
        : n.error === "name_taken"
        ? new Error(_t())
        : n.error == "empty_name"
        ? new Error(yt())
        : new Error(o());
    } else throw t.status === 403 ? new Error(Tt()) : new Error(o());
  }
  async leaveAlliance() {
    if (
      (
        await this.request("/alliance/leave", {
          method: "POST",
          credentials: "include",
        })
      ).status !== 200
    )
      throw new Error(o());
  }
  async updateAllianceDescription(e) {
    const t = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ description: e }),
    });
    if (t.status !== 200)
      throw t.status === 403 ? new Error(v()) : new Error(o());
  }
  async updateAllianceHeadquarters(e, t) {
    const n = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ latitude: e, longitude: t }),
    });
    if (n.status !== 200)
      throw n.status === 403 ? new Error(v()) : new Error(o());
  }
  async allianceLeaderboard(e) {
    const t = await this.request(`/alliance/leaderboard/${e}`, {
      credentials: "include",
    });
    if (t.status === 200) return t.json();
    throw t.status === 403 ? new Error(v()) : new Error(E());
  }
  async getAllianceInvites() {
    const e = await this.request("/alliance/invites", {
      credentials: "include",
    });
    if (e.status === 200) return e.json();
    throw e.status === 403 ? new Error(v()) : new Error(o());
  }
  async joinAlliance(e) {
    switch (
      (await this.request(`/alliance/join/${e}`, { credentials: "include" }))
        .status
    ) {
      case 200:
        return "success";
      case 208:
        return "in-another-alliance";
      case 401:
        return "not-logged-in";
      case 403:
        return "banned";
      case 400:
      case 404:
        return "invalid-invite";
      default:
        return "error";
    }
  }
  async getAllianceMembers(e) {
    const t = await this.request(`/alliance/members/${e}`, {
      credentials: "include",
    });
    if (t.status === 200) return t.json();
    throw new Error(o());
  }
  async getAllianceBannedMembers(e) {
    const t = await this.request(`/alliance/members/banned/${e}`, {
      credentials: "include",
    });
    if (t.status === 200) return t.json();
    throw new Error(o());
  }
  async getAllianceById(e) {
    const t = await this.request(`/admin/alliances/${e}`, {
      method: "GET",
      credentials: "include",
    });
    if (t.status === 404) return;
    if (t.status !== 200) throw new c(o(), t.status);
    const n = await t.json();
    return {
      id: Number(n.id),
      name: String(n.name),
      pixelsPainted: Number((n == null ? void 0 : n.pixels_painted) ?? 0),
    };
  }
  async searchAlliance(e) {
    const t = new URLSearchParams({ q: e }),
      n = await this.request(`/admin/alliances/search?${t.toString()}`, {
        method: "GET",
        credentials: "include",
      });
    if (n.status !== 200) throw new c(o(), n.status);
    const r = await n.json();
    return (Array.isArray(r) ? r : []).map((s) => ({
      id: Number(s.id),
      name: String(s.name ?? ""),
      pixelsPainted: Number((s == null ? void 0 : s.pixels_painted) ?? 0),
    }));
  }
  async searchAlliances(e) {
    return this.searchAlliance(e);
  }
  async getAllianceFull(e) {
    const t = await this.request(`/admin/alliances/${e}/full`, {
      method: "GET",
      credentials: "include",
    });
    if (t.status === 404) return null;
    if (t.status !== 200) throw new c(o(), t.status);
    const n = await t.json(),
      r = Array.isArray(n == null ? void 0 : n.members) ? n.members : [];
    return {
      id: Number(n == null ? void 0 : n.id),
      name: String((n == null ? void 0 : n.name) ?? ""),
      description: (n == null ? void 0 : n.description) ?? null,
      ownerId: Number(
        (n == null ? void 0 : n.ownerId) ?? (n == null ? void 0 : n.created_by)
      ),
      ownerName: (n == null ? void 0 : n.ownerName) ?? null,
      hqName: (n == null ? void 0 : n.hqName) ?? null,
      hqLatitude:
        (n == null ? void 0 : n.hqLatitude) ??
        (n == null ? void 0 : n.hq_latitude) ??
        null,
      hqLongitude:
        (n == null ? void 0 : n.hqLongitude) ??
        (n == null ? void 0 : n.hq_longitude) ??
        null,
      pixelsPainted: Number(
        (n == null ? void 0 : n.pixelsPainted) ??
          (n == null ? void 0 : n.pixels_painted) ??
          0
      ),
      membersCount: Number((n == null ? void 0 : n.membersCount) ?? r.length),
      members: r.map((s) => ({
        id: Number(s == null ? void 0 : s.id),
        name: String(
          (s == null ? void 0 : s.name) ?? `#${s == null ? void 0 : s.id}`
        ),
        picture: (s == null ? void 0 : s.picture) ?? null,
        pixelsPainted: Number(
          (s == null ? void 0 : s.pixelsPainted) ??
            (s == null ? void 0 : s.pixels_painted) ??
            0
        ),
        lastPixelLatitude: (s == null ? void 0 : s.lastPixelLatitude) ?? null,
        lastPixelLongitude: (s == null ? void 0 : s.lastPixelLongitude) ?? null,
        role:
          (s == null ? void 0 : s.alliance_role) === "admin" ||
          (s == null ? void 0 : s.role) === "admin"
            ? "admin"
            : "member",
      })),
    };
  }
  async getAdminAllianceMembers(e, t) {
    const n = new URLSearchParams({
        page: String(t.page),
        pageSize: String(t.pageSize),
      }),
      r = await this.request(`/admin/alliances/${e}/members?${n.toString()}`, {
        method: "GET",
        credentials: "include",
      });
    if (r.status === 404) return { members: [], total: 0 };
    if (r.status !== 200) throw new c(o(), r.status);
    const s = await r.json(),
      d = Array.isArray(s == null ? void 0 : s.members) ? s.members : [];
    return {
      members: d.map((i) => ({
        id: Number(i == null ? void 0 : i.id),
        name: String(
          (i == null ? void 0 : i.name) ?? `#${i == null ? void 0 : i.id}`
        ),
        picture: (i == null ? void 0 : i.picture) ?? null,
        pixelsPainted: Number(
          (i == null ? void 0 : i.pixelsPainted) ??
            (i == null ? void 0 : i.pixels_painted) ??
            0
        ),
        lastPixelLatitude: (i == null ? void 0 : i.lastPixelLatitude) ?? null,
        lastPixelLongitude: (i == null ? void 0 : i.lastPixelLongitude) ?? null,
        role:
          (i == null ? void 0 : i.alliance_role) === "admin" ||
          (i == null ? void 0 : i.role) === "admin"
            ? "admin"
            : "member",
      })),
      total: Number((s == null ? void 0 : s.total) ?? d.length),
    };
  }
  async renameAlliance(e, t) {
    const n = await this.request(`/admin/alliances/${e}/rename`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ name: t }),
    });
    if (n.status === 400) {
      const r = await n.json().catch(() => ({}));
      throw new Error((r == null ? void 0 : r.error) ?? o());
    } else if (n.status !== 200) throw new c(o(), n.status);
  }
  async changeAllianceLeader(e, t) {
    const n = await this.request(`/admin/alliances/${e}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ newLeaderUserId: t }),
    });
    if (n.status === 400) {
      const r = await n.json();
      throw (r == null ? void 0 : r.error) === "user_not_in_alliance"
        ? new Error(vn())
        : new Error(o());
    } else if (n.status !== 200) throw new c(o(), n.status);
  }
  async banAllAllianceMembers(e, t, n) {
    const r = await this.request(`/admin/alliances/${e}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ reason: t, notes: n }),
    });
    if (r.status !== 200) throw new c(o(), r.status);
  }
  async setAllianceMemberRole(e, t, n) {
    const r = await this.request(`/admin/alliances/${e}/members/${t}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ role: n }),
    });
    if (r.status !== 200) throw new c(o(), r.status);
  }
  async removeAllianceMember(e, t) {
    const n = await this.request(`/admin/alliances/${e}/members/${t}/remove`, {
      method: "POST",
      credentials: "include",
    });
    if (n.status !== 200) throw new c(o(), n.status);
  }
  async giveAllianceAdmin(e) {
    const t = await this.request("/alliance/give-admin", {
      body: JSON.stringify({ promotedUserId: e }),
      method: "POST",
      credentials: "include",
    });
    if (t.status !== 200)
      throw t.status === 403 ? new Error(v()) : new Error(o());
  }
  async banAllianceUser(e) {
    const t = await this.request("/alliance/ban", {
      body: JSON.stringify({ bannedUserId: e }),
      method: "POST",
      credentials: "include",
    });
    if (t.status !== 200)
      throw t.status === 403 ? new Error(v()) : new Error(o());
  }
  async equipFlag(e) {
    if (
      (
        await this.request(`/flag/equip/${e}`, {
          method: "POST",
          credentials: "include",
        })
      ).status !== 200
    )
      throw new Error(o());
  }
  async getMyProfilePictures() {
    const e = await this.request("/me/profile-pictures", {
      credentials: "include",
    });
    if (e.status !== 200) throw new Error(o());
    return e.json();
  }
  async changeProfilePicture(e) {
    if (
      (
        await this.request("/me/profile-picture/change", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({ pictureId: e }),
        })
      ).status !== 200
    )
      throw new Error(o());
  }
  async unbanAllianceUser(e) {
    const t = await this.request("/alliance/unban", {
      body: JSON.stringify({ unbannedUserId: e }),
      method: "POST",
      credentials: "include",
    });
    if (t.status !== 200)
      throw t.status === 403 ? new Error(v()) : new Error(o());
  }
  async health() {
    return (await this.request("/health")).json();
  }
  async generatePixQrCode(e) {
    const t = await this.request(`/payment/abacatepay/create/pix/${e}`, {
      method: "POST",
      credentials: "include",
    });
    if (t.status === 400) {
      const r = await t.json();
      throw new Error(r == null ? void 0 : r.error);
    } else {
      if (t.status === 451) throw new Error(un());
      if (t.status !== 200) throw new Error(o());
    }
    return await t.json();
  }
  async refreshPixPayment(e) {
    const t = await this.request(`/payment/abacatepay/refresh/pix/${e}`, {
      method: "POST",
      credentials: "include",
    });
    if (t.status === 400) {
      const n = await t.json();
      throw new Error(n == null ? void 0 : n.error);
    } else if (t.status !== 200)
      throw new Error("Unexpected error on the server. Try again later");
    return t.json();
  }
  async getPixStatus(e) {
    const t = await this.request(`/payment/abacatepay/status/pix/${e}`, {
      method: "GET",
      credentials: "include",
    });
    if (t.status !== 200)
      throw new Error("Erro inesperado. Tente atualizar a página.");
    return t.json();
  }
  async getModeratorTickets() {
    const e = await this.request("/moderator/tickets", {
      method: "GET",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    const t = await e.json();
    for (const n of t.tickets)
      n.reports.sort((r, s) => ae[r.reason] - ae[s.reason]);
    return t;
  }
  async countMyTicketsClosedToday() {
    const e = await this.request("/moderator/count-my-tickets", {
      method: "GET",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    return e.json();
  }
  async getNonPaidUserOpenTicketsCount() {
    const e = await this.request("/moderator/open-tickets-count", {
      method: "GET",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    const { tickets: t } = await e.json();
    return t;
  }
  async assignNewTickets() {
    const e = await this.request("/moderator/assign-new-tickets", {
      method: "POST",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    return e.json();
  }
  async setTicketStatus(e, t, n, r) {
    const s = await this.request("/moderator/set-ticket-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: e,
        status: t,
        selectedReportId: n,
        assignedReason: r,
      }),
    });
    if (s.status !== 200) throw new c(o(), s.status);
  }
  async request(e, t) {
    let n;
    const r = ie();
    if (r) {
      const s = new Headers(t == null ? void 0 : t.headers);
      s.set("x-alien-override", r.token), (t = { ...(t ?? {}), headers: s });
    }
    try {
      (n = await fetch(`${this.url}${e}`, t)), (this.online = !0);
    } catch (s) {
      throw (
        (console.error("Fetch error:", s),
        (this.online = !1),
        new Error(Ot(), { cause: s }))
      );
    }
    if (n.status === 429) throw new Error(ne());
    if (n.status === 503 || n.status === 408) throw new Error(ne());
    return n;
  }
  async getOpenTicketsSummary() {
    const e = await this.request("/admin/count-all-tickets", {
      method: "GET",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    return e.json();
  }
  async getOpenReportsSummary() {
    const e = await this.request("/admin/count-all-reports", {
      method: "GET",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    return e.json();
  }
  async getClosedTicketsByMod(e, t) {
    const n = await this.request(
      `/admin/closed-tickets?start=${encodeURIComponent(
        e
      )}&end=${encodeURIComponent(t)}`,
      { method: "GET", credentials: "include" }
    );
    if (n.status !== 200) throw new c(o(), n.status);
    return (await n.json()).items.map((s) => ({
      ...s,
      suspensionRate: (s.ban + s.timeout) / s.total,
    }));
  }
  async getClosedReportsByMod(e, t) {
    const n = await this.request(
      `/admin/closed-reports?start=${encodeURIComponent(
        e
      )}&end=${encodeURIComponent(t)}`,
      { method: "GET", credentials: "include" }
    );
    if (n.status !== 200) throw new c(o(), n.status);
    return (await n.json()).items.map((s) => ({
      ...s,
      suspensionRate: (s.ban + s.timeout) / s.total,
    }));
  }
  async getUserInfoById(e) {
    const t = await this.request(
      `/moderator/user-info/${encodeURIComponent(e)}`,
      { method: "GET", credentials: "include" }
    );
    if (t.status !== 404) {
      if (t.status !== 200) throw new c(o(), t.status);
      return t.json();
    }
  }
  async getMultipleUsersInfoById(e) {
    const t = await this.request("/moderator/users", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ userIds: e }),
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json();
  }
  async getUserInfoFull(e) {
    const t = await this.request(`/admin/users?id=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include",
    });
    if (t.status !== 404) {
      if (t.status !== 200) throw new c(o(), t.status);
      return t.json();
    }
  }
  async removeTimeout(e) {
    const t = await this.request("/admin/remove-timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ userId: e }),
    });
    if (t.status !== 200) throw new c(o(), t.status);
  }
  async removeBan(e) {
    const t = await this.request("/admin/remove-ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ userId: e }),
    });
    if (t.status !== 200) throw new c(o(), t.status);
  }
  async getUserNotes(e) {
    const t = await this.request(
      `/moderator/users/notes?userId=${encodeURIComponent(e)}`,
      { method: "GET", credentials: "include" }
    );
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json();
  }
  async addUserNote(e, t) {
    const n = await this.request("/moderator/users/notes", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ userId: e, note: t }),
    });
    if (n.status !== 200) throw new c(o(), n.status);
  }
  async getUserPurchases(e) {
    const t = await this.request(
      `/admin/users/purchases?userId=${encodeURIComponent(e)}`,
      { method: "GET", credentials: "include" }
    );
    if (t.status !== 200) throw new c(o(), t.status);
    const n = await t.json();
    return (
      Array.isArray(n == null ? void 0 : n.purchases) ? n.purchases : []
    ).map((s) => ({
      id: String(s.id ?? ""),
      product_name: String(s.productName ?? s.product_name ?? ""),
      price: Number(s.price ?? 0),
      amount: Number(s.amount ?? 0),
      createdAt:
        typeof s.createdAt == "string"
          ? s.createdAt
          : s.CreatedAt
          ? new Date(s.CreatedAt).toISOString()
          : "",
    }));
  }
  async postSetUserDroplets(e, t) {
    const n = await this.request("/admin/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ userId: e, droplets: t }),
    });
    if (n.status !== 200) throw new c(o(), n.status);
  }
  async getUserTickets(e) {
    const { userId: t, kind: n, page: r = 0, pageSize: s = 20 } = e,
      d = new URLSearchParams({
        userId: String(t),
        kind: n,
        page: String(r),
        pageSize: String(s),
      }),
      i = await this.request(`/moderator/users/tickets?${d.toString()}`, {
        method: "GET",
        credentials: "include",
      });
    if (i.status !== 200) throw new c(o(), i.status);
    const l = await i.json(),
      f = Array.isArray(l == null ? void 0 : l.tickets) ? l.tickets : [];
    return (
      f.sort(
        (w, _) =>
          new Date(_.createdAt).getTime() - new Date(w.createdAt).getTime()
      ),
      f
    );
  }
  async getModerationTranslate(e) {
    const t = await this.request("/moderator/ticket/translate", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ text: e }),
    });
    if (t.status !== 200) throw new c(o(), t.status);
    const n = await t.json();
    return n == null ? void 0 : n.translation;
  }
  mapTicketsToReportRows(e, t) {
    var r, s, d, i, l;
    const n = [];
    for (const f of e) {
      const w = f.status ?? "open";
      if (t === "received") {
        for (const _ of f.reports)
          n.push({
            id: String(_.id),
            ticketId: String(f.id),
            createdAt: _.createdAt ?? f.createdAt,
            byUser: {
              id: Number(_.reportedBy),
              name: String(_.reportedByName ?? _.reportedBy),
              picture: _.reportedByPicture ?? null,
            },
            reason: String(_.reason),
            status: w,
          });
        continue;
      }
      if (t === "sent") {
        for (const _ of f.reports)
          n.push({
            id: String(_.id),
            ticketId: String(f.id),
            createdAt: _.createdAt ?? f.createdAt,
            toUser: {
              id: Number(f.reportedUser.id),
              name: String(f.reportedUser.name),
              picture: f.reportedUser.picture ?? null,
            },
            reason: String(_.reason),
            status: w,
          });
        continue;
      }
      n.push({
        id: String(f.id),
        ticketId: String(f.id),
        createdAt: f.createdAt,
        handledBy:
          f.status && f.status !== "open"
            ? {
                id: ((r = f.handledBy) == null ? void 0 : r.id) ?? 0,
                name:
                  ((s = f.handledBy) == null ? void 0 : s.name) ?? "Moderator",
                picture:
                  ((d = f.handledBy) == null ? void 0 : d.picture) ?? null,
              }
            : { id: 0, name: "—", picture: null },
        reason: String(
          ((l = (i = f.reports) == null ? void 0 : i[0]) == null
            ? void 0
            : l.reason) ?? "other"
        ),
        status: w,
      });
    }
    return (
      n.sort(
        (f, w) =>
          new Date(w.createdAt).getTime() - new Date(f.createdAt).getTime()
      ),
      n
    );
  }
  async getModeratorClosedTicketStats(e) {
    const t = new URLSearchParams({ id: String(e) }).toString(),
      n = await this.request(`/admin/users/tickets?${t}`, {
        method: "GET",
        credentials: "include",
      });
    if (n.status !== 200) throw new c(o(), n.status);
    return n.json();
  }
  async postPawtectLoad() {
    const e = await this.request("/pawtect/load", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        pawtectMe: Ee(),
        "paint-the": "world",
        "but-not": "using-bots",
        security: "/.well-known/security.txt",
      }),
    });
    if (e.status !== 204) throw new c(o(), e.status);
  }
  async unlinkDiscord() {
    const e = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include",
    });
    if (e.status !== 204) throw new c(o(), e.status);
  }
  async deleteSessions() {
    const e = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
  }
  async deleteAllUserSessions(e) {
    const t = await this.request(`/admin/users/${e}/sessions`, {
      method: "DELETE",
      credentials: "include",
    });
    if (t.status !== 200) throw new c(o(), t.status);
  }
  async banUsers(e, t, n) {
    const r = await this.request("/admin/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ userIds: e, reason: t, notes: n }),
    });
    if (r.status !== 200) throw new c(o(), r.status);
  }
  async timeoutUsers(e, t, n) {
    const r = await this.request("/admin/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ userIds: e, reason: t, notes: n }),
    });
    if (r.status !== 200) throw new c(o(), r.status);
  }
  async incrementUsersDroplets(e, t, n) {
    const r = await this.request("/admin/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ userIds: e, delta: t, notes: n }),
    });
    if (r.status !== 200) throw new c(o(), r.status);
  }
  async postUnbanUsers(e, t) {
    const n = await this.request("/admin/users/unban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ userIds: e, notes: t }),
    });
    if (n.status !== 200) throw new c(o(), n.status);
  }
  async getAuditLogs(e) {
    const t = new URLSearchParams();
    e.actorUserId !== void 0 && t.set("actorUserId", String(e.actorUserId)),
      e.targetUserId !== void 0 &&
        t.set("targetUserId", String(e.targetUserId)),
      e.action && t.set("action", e.action),
      e.startIso && t.set("start", e.startIso),
      e.endIso && t.set("end", e.endIso),
      t.set("limit", String(e.limit)),
      t.set("offset", String(e.offset));
    const n = await this.request(`/admin/audit-logs?${t.toString()}`, {
      method: "GET",
      credentials: "include",
    });
    if (n.status !== 200) throw new c(o(), n.status);
    return n.json();
  }
  async postUsersSuspend(e) {
    if (
      (
        await this.request("/moderator/users/suspend", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(e),
        })
      ).status !== 200
    )
      throw new Error(o());
  }
  async postReportUserName(e) {
    const t = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ userId: e }),
    });
    if (t.status !== 200) throw new c(o(), t.status);
  }
  async postReportAllianceName(e) {
    const t = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ allianceId: e }),
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json();
  }
  async submitBanAppeal(e) {
    const t = await this.request("/report/appeal", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ message: e }),
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return await t.json();
  }
  async getOpenAppeals() {
    const e = await this.request("/moderator/report/appeal", {
      method: "GET",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    return e.json();
  }
  async postResponseAppeal(e, t, n) {
    const r = await this.request(`/moderator/report/appeal/${e}/handle`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ approved: t, appealType: n }),
    });
    if (r.status !== 200) throw new c(o(), r.status);
    return await r.json();
  }
  async getUserLastAppeal() {
    const e = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    const t = await e.json();
    return (t == null ? void 0 : t.appealDate) ?? null;
  }
  async assignAppeals() {
    const e = await this.request("/moderator/report/appeal/assign", {
      method: "POST",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    return await e.json();
  }
  async getNotificationCount() {
    const e = await this.request("/notification/count", {
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    const { count: t } = await e.json();
    return t;
  }
  async getNotificationPage(e) {
    const n = `/notification/page${
        e !== void 0 ? `?cursor=${encodeURIComponent(e)}` : ""
      }`,
      r = await this.request(n, { credentials: "include" });
    if (r.status !== 200) throw new c(o(), r.status);
    return r.json();
  }
  async postNotificationMarkRead(e) {
    const t = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ notificationIds: e }),
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json();
  }
  async postNotificationMarkReadAll() {
    const e = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    return e.json();
  }
  async getAdminBanWave() {
    const e = await this.request("/admin/ban-wave", {
      method: "GET",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    return e.json();
  }
  async postAdminBanWave() {
    const e = await this.request("/admin/ban-wave/execute", {
      method: "POST",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    return e.json();
  }
  async getPendingAppealsCount() {
    const e = await this.request("/moderator/report/appeals/count", {
      method: "GET",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    const t = await e.json();
    return (t == null ? void 0 : t.appeals) ?? 0;
  }
  async claimEventPixel({ season: e, tile: [t, n], pixel: [r, s] }) {
    const d = await this.request(`/s${e}/event/pixel/claim`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ event: "halloween", tx: t, ty: n, px: r, py: s }),
    });
    if (d.status !== 200) throw new c(o(), d.status);
  }
  async getEventStatus() {
    const e = await this.request("/admin/event/status", {
      method: "GET",
      credentials: "include",
    });
    if (e.status !== 200) throw new c(o(), e.status);
    return e.json();
  }
  async postEventStart(e, t, n, r) {
    const s = await this.request("/admin/event/start", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        eventName: e,
        quantity: t,
        startEventDate: n,
        endEventDate: r,
      }),
    });
    if (s.status !== 200) throw new c(o(), s.status);
    return s.json();
  }
  async postEventStop(e) {
    const t = await this.request("/admin/event/stop", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ event: e }),
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json();
  }
  async getEventAnchors(e) {
    const t = await this.request(
      `/admin/event/anchors?event=${encodeURIComponent(e)}`,
      { method: "GET", credentials: "include" }
    );
    if (t.status !== 200) throw new Error("Falha ao buscar anchors do evento");
    return t.json();
  }
}
$ = new WeakMap();
let Z = new Qn(re);
export {
  ga as A,
  ha as B,
  ue as C,
  ma as P,
  Yn as S,
  qe as _,
  Z as a,
  la as b,
  o as c,
  Xt as d,
  Ft as e,
  b as f,
  Yt as g,
  zt as h,
  $t as i,
  ra as j,
  sa as k,
  Zn as l,
  ca as m,
  ia as n,
  fa as o,
  _a as p,
  Cn as q,
  da as r,
  ua as s,
  se as t,
  z as u,
  pa as v,
  oa as w,
  pn as x,
  mn as y,
  rn as z,
};

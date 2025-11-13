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
      a = new e.Error().stack;
    a &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[a] = "138d49da-a363-498b-a700-aea1b9f4af0d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-138d49da-a363-498b-a700-aea1b9f4af0d"));
  })();
} catch {}
const y = "en",
  c = ["en", "pt"],
  d = "PARAGLIDE_LOCALE",
  g = ["localStorage", "preferredLanguage", "baseLocale"];
globalThis.__paraglide = {};
let f = !1,
  w = () => {
    let e;
    for (const a of g) {
      if (a === "baseLocale") e = y;
      else if (a === "preferredLanguage") e = L();
      else if (a === "localStorage") e = localStorage.getItem(d) ?? void 0;
      else if (u(a) && l.has(a)) {
        const o = l.get(a);
        if (o) {
          const t = o.getLocale();
          if (t instanceof Promise) continue;
          e = t;
        }
      }
      if (e !== void 0) {
        const o = h(e);
        return f || ((f = !0), p(o, { reload: !1 })), o;
      }
    }
    throw new Error(
      "No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found"
    );
  },
  p = (e, a) => {
    const o = { reload: !0, ...a };
    let t;
    try {
      t = w();
    } catch {}
    for (const n of g)
      if (n !== "baseLocale") {
        if (n === "localStorage" && typeof window < "u")
          localStorage.setItem(d, e);
        else if (u(n) && l.has(n)) {
          const s = l.get(n);
          if (s) {
            const i = s.setLocale(e);
            i instanceof Promise &&
              i.catch((b) => {
                console.warn(`Custom strategy "${n}" setLocale failed:`, b);
              });
          }
        }
      }
    o.reload && window.location && e !== t && window.location.reload();
  };
function r(e) {
  return e ? c.includes(e) : !1;
}
function h(e) {
  if (r(e) === !1)
    throw new Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
  return e;
}
function L() {
  var a;
  if (
    !(
      (a = navigator == null ? void 0 : navigator.languages) != null && a.length
    )
  )
    return;
  const e = navigator.languages.map((o) => {
    var t;
    return {
      fullTag: o.toLowerCase(),
      baseTag: (t = o.split("-")[0]) == null ? void 0 : t.toLowerCase(),
    };
  });
  for (const o of e) {
    if (r(o.fullTag)) return o.fullTag;
    if (r(o.baseTag)) return o.baseTag;
  }
}
const l = new Map();
function u(e) {
  return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
export { w as g, d as l };

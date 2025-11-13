import "./ClL9a_Zs.js";
import { z as n, b as d } from "./iK5FT0Sa.js";
import { d as a } from "./Cw1VVyw7.js";
import { r } from "./ClBgBzqC.js";
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
      o = new e.Error().stack;
    o &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[o] = "47ae6350-92c3-4ff9-a6f7-82046d4e3af1"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-47ae6350-92c3-4ff9-a6f7-82046d4e3af1"));
  })();
} catch {}
var s = n(
  '<svg><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"></path></svg>'
);
function g(e, o) {
  let t = r(o, ["$$slots", "$$events", "$$legacy"]);
  var f = s();
  a(f, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...t,
  })),
    d(e, f);
}
export { g as C };

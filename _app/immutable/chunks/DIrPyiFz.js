import "./ClL9a_Zs.js";
import { z as n, b as f } from "./iK5FT0Sa.js";
import { d as r } from "./Cw1VVyw7.js";
import { r as s } from "./ClBgBzqC.js";
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
      (e._sentryDebugIds[t] = "d6a2881c-9254-4bf9-bda0-d13fbc877665"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d6a2881c-9254-4bf9-bda0-d13fbc877665"));
  })();
} catch {}
var a = n(
  '<svg><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>'
);
function c(e, t) {
  let d = s(t, ["$$slots", "$$events", "$$legacy"]);
  var o = a();
  r(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...d,
  })),
    f(e, o);
}
export { c as R };

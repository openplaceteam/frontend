import { g as t } from "./DQcFTXWv.js";
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
      (e._sentryDebugIds[n] = "f9c9e773-1792-42bf-be2a-016f1b57703c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-f9c9e773-1792-42bf-be2a-016f1b57703c"));
  })();
} catch {}
const a = () => "Notes",
  s = () => "Notas",
  i = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? a() : s()),
  l = () => "No notes yet.",
  d = () => "Sem notas ainda.",
  u = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? l() : d()),
  r = () => "Add a note...",
  c = () => "Adicionar uma nota...",
  _ = (e = {}, n = {}) => ((n.locale ?? t()) === "en" ? r() : c());
export { _ as a, u as b, i as n };

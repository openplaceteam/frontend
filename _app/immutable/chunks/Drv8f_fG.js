import { g as f } from "./DklPLC_x.js";
(function () {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        e.SENTRY_RELEASE = { id: "35111e7039e8c68cc677344b7f7c6971567f6820" };
    } catch {}
})();
try {
    (function () {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && ((e._sentryDebugIds = e._sentryDebugIds || {}), (e._sentryDebugIds[n] = "b6fedc18-c426-4b17-bf09-8644b91cab4b"), (e._sentryDebugIdIdentifier = "sentry-dbid-b6fedc18-c426-4b17-bf09-8644b91cab4b"));
    })();
} catch {}
const t = () => "Refresh",
    o = () => "Atualizar",
    l = (e = {}, n = {}) => ((n.locale ?? f()) === "en" ? t() : o());
export { l as r };

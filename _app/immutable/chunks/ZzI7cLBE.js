import { g as p } from "./DklPLC_x.js";
import "./B2cHk4HI.js";
import { ay as g, a as h, b as r, v } from "./BDALf20I.js";
import { i as w, r as i } from "./Bke_korE.js";
import { b as s } from "./BNZUboE0.js";
(function () {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        e.SENTRY_RELEASE = { id: "35111e7039e8c68cc677344b7f7c6971567f6820" };
    } catch {}
})();
try {
    (function () {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            o = new e.Error().stack;
        o && ((e._sentryDebugIds = e._sentryDebugIds || {}), (e._sentryDebugIds[o] = "3298bbfa-10df-4888-8ec0-1b806457f64a"), (e._sentryDebugIdIdentifier = "sentry-dbid-3298bbfa-10df-4888-8ec0-1b806457f64a"));
    })();
} catch {}
const m = (e) => `Copy alliance ID: #${e.allianceId}`,
    u = (e) => `Copiar ID da aliança: #${e.allianceId}`,
    C = (e, o = {}) => ((o.locale ?? p()) === "en" ? m(e) : u(e));
var b = v('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
    y = v(
        '<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>'
    );
function H(e, o) {
    let a = i(o, ["$$slots", "$$events", "$$legacy", "filled"]);
    var t = g(),
        f = h(t);
    {
        var c = (l) => {
                var n = b();
                s(n, () => ({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -960 960 960", fill: "currentColor", ...a })), r(l, n);
            },
            d = (l) => {
                var n = y();
                s(n, () => ({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -960 960 960", fill: "currentColor", ...a })), r(l, n);
            };
        w(f, (l) => {
            o.filled ? l(c) : l(d, !1);
        });
    }
    r(e, t);
}
var T = v('<svg><path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"></path></svg>');
function D(e, o) {
    let a = i(o, ["$$slots", "$$events", "$$legacy"]);
    var t = T();
    s(t, () => ({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -960 960 960", fill: "currentColor", ...a })), r(e, t);
}
var q = v(
    '<svg><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"></path></svg>'
);
function M(e, o) {
    let a = i(o, ["$$slots", "$$events", "$$legacy"]);
    var t = q();
    s(t, () => ({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -960 960 960", fill: "currentColor", ...a })), r(e, t);
}
export { H as C, D as G, M as T, C as c };

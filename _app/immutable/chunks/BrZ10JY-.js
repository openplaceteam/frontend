import { M as n, H as t, z as a, L as b, S as c } from "./BDALf20I.js";
(function () {
    try {
        var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        f.SENTRY_RELEASE = { id: "35111e7039e8c68cc677344b7f7c6971567f6820" };
    } catch {}
})();
try {
    (function () {
        var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            i = new f.Error().stack;
        i && ((f._sentryDebugIds = f._sentryDebugIds || {}), (f._sentryDebugIds[i] = "b6ca37b8-1ecd-490a-80c1-a7d85598b3d9"), (f._sentryDebugIdIdentifier = "sentry-dbid-b6ca37b8-1ecd-490a-80c1-a7d85598b3d9"));
    })();
} catch {}
function r(f, i) {
    return f === i || (f == null ? void 0 : f[c]) === i;
}
function g(f = {}, i, e, y) {
    return (
        n(() => {
            var s, d;
            return (
                t(() => {
                    (s = d),
                        (d = []),
                        a(() => {
                            f !== e(...d) && (i(f, ...d), s && r(e(...s), f) && i(null, ...s));
                        });
                }),
                () => {
                    b(() => {
                        d && r(e(...d), f) && i(null, ...d);
                    });
                }
            );
        }),
        f
    );
}
export { g as b };

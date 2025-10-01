import "./Bzak7iHL.js";
import {
    D as ce,
    x as se,
    F as oe,
    B as ve,
    ba as de,
    p as W,
    aH as H,
    aR as P,
    aS as ue,
    a as X,
    A as o,
    b as w,
    c as Z,
    f as D,
    t as S,
    aT as p,
    q as $,
    d as v,
    r as d,
    s as m
} from "./DUoKDNpf.js";
import {
    s as x
} from "./g8c1BvYP.js";
import {
    p as u,
    i as A,
    r as ee
} from "./5NasrULQ.js";
import {
    s as G,
    c as R,
    a as te,
    b as J
} from "./B1GmkH4o.js";
import {
    b as fe
} from "./CMs8vKjq.js";
import {
    g as j,
    P as me,
    c as _e
} from "./1lh-LSvX.js";
import {
    o as he
} from "./ByKBPM-D.js";
import {
    g as z
} from "./C5GsJ62f.js";
import {
    L as ge
} from "./07L1R_bo.js";

function be(r, e, a) {
    ce(() => {
        var l = se(() => e(r, a == null ? void 0 : a()) || {});
        if (a && (l != null && l.update)) {
            var s = !1,
                _ = {};
            oe(() => {
                var f = a();
                ve(f), s && de(_, f) && (_ = f, l.update(f))
            }), s = !0
        }
        if (l != null && l.destroy) return () => l.destroy()
    })
}
const xe = r => `Login with ${r.name}`,
    we = r => `Entrar com ${r.name}`,
    Q = (r, e = {}) => (e.locale ?? z()) === "en" ? xe(r) : we(r),
    ye = () => "By continuing, you agree to our",
    ke = () => "注册即代表同意我们的",
    Le = (r = {}, e = {}) => (e.locale ?? z()) === "en" ? ye() : ke(),
    Ce = () => "Terms of Service",
    Ie = () => "服务条款",
    Te = (r = {}, e = {}) => (e.locale ?? z()) === "en" ? Ce() : Ie(),
    ze = () => "and",
    Be = () => "和",
    Ee = (r = {}, e = {}) => (e.locale ?? z()) === "en" ? ze() : Be(),
    Me = () => "Privacy Policy",
    Fe = () => "隐私政策",
    Pe = (r = {}, e = {}) => (e.locale ?? z()) === "en" ? Me() : Fe();
var Se = D("<div></div>");

function He(r, e) {
    W(e, !0);
    let a = u(e, "widgetId", 15),
        l = u(e, "appearance", 3, "always"),
        s = u(e, "language", 3, "auto"),
        _ = u(e, "execution", 3, "render"),
        f = u(e, "retryInterval", 3, 8e3),
        C = u(e, "retry", 3, "auto"),
        K = u(e, "refreshExpired", 3, "auto"),
        y = u(e, "theme", 3, "auto"),
        I = u(e, "size", 3, "normal"),
        N = u(e, "tabIndex", 3, 0);
    u(e, "reset", 15)(() => {
        var t;
        a() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(a()))
    });
    const B = p(() => ({
            sitekey: e.siteKey,
            callback: (t, n) => {
                var i;
                (i = e.callback) == null || i.call(e, t, n)
            },
            "error-callback": t => {
                var n;
                (n = e.errorCallback) == null || n.call(e, t)
            },
            "timeout-callback": () => {
                var t;
                (t = e.timeoutCallback) == null || t.call(e)
            },
            "expired-callback": () => {
                var t;
                (t = e.expiredCallback) == null || t.call(e)
            },
            "before-interactive-callback": () => {
                var t;
                (t = e.beforeInteractiveCallback) == null || t.call(e)
            },
            "after-interactive-callback": () => {
                var t;
                (t = e.afterInteractiveCallback) == null || t.call(e)
            },
            "unsupported-callback": () => {
                var t;
                return (t = e.unsupportedCallback) == null ? void 0 : t.call(e)
            },
            "response-field-name": e.responseFieldName ?? e.formsField ?? "cf-turnstile-response",
            "response-field": e.responseField ?? e.forms ?? !0,
            "refresh-expired": K(),
            "retry-interval": f(),
            tabindex: N(),
            appearance: l(),
            execution: _(),
            language: s(),
            action: e.action,
            retry: C(),
            theme: y(),
            cData: e.cData,
            size: I()
        })),
        k = (t, n) => {
            let i = window.turnstile.render(t, n);
            return a(i), {
                destroy() {
                    window.turnstile.remove(i)
                },
                update(c) {
                    window.turnstile.remove(i), i = window.turnstile.render(t, c), a(i)
                }
            }
        };
    let h = P(!1);
    he(() => {
        return () => {
            H(h, !1)
        }
    });
    var E = ue(),
        M = X(E);
    {
        var F = t => {
            var n = Se();
            let i;
            be(n, (c, L) => k == null ? void 0 : k(c, L), () => o(B)), S(c => i = G(n, 1, R(e.class), "svelte-1gvfki5", i, c), [() => ({
                flexible: I() == "flexible"
            })]), w(t, n)
        };
        A(M, t => {
            j.turnstatileLoaded && o(h) && t(F)
        })
    }
    w(r, E), Z()
}
var De = $('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function Ke(r, e) {
    let a = ee(e, ["$$slots", "$$events", "$$legacy"]);
    var l = De();
    te(l, () => ({
        viewBox: "0 0 256 262",
        xmlns: "http://www.w3.org/2000/svg",
        ...a
    })), w(r, l)
}
var Ne = $('<svg><path fill="#fff" d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z"></path><g fill="#9146ff"><path d="M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z"></path><path d="M1700 550h200v600h-200zm-550 0h200v600h-200z"></path></g></svg>');

function Ue(r, e) {
    let a = ee(e, ["$$slots", "$$events", "$$legacy"]);
    var l = Ne();
    te(l, () => ({
        xmlns: "http://www.w3.org/2000/svg",
        "xml:space": "preserve",
        viewBox: "0 0 2400 2800",
        ...a
    })), w(r, l)
}
var je = D('<div class="text-error text-sm"> </div>'),
    Ae = D('<a><!> </a> <a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
    Ge = D('<div><div class="flex justify-center"><!></div> <form><div class="mt-6 flex flex-col items-center gap-2"><!></div></form> <p class="text-base-content/60 mt-2 text-center text-sm"> <a class="font-medium" href="/terms/terms-of-service" target="_blank"> </a> <a class="font-medium" href="/terms/privacy" target="_blank"> </a></p></div>');

function pe(r, e) {
    W(e, !0);
    let a = P(""),
        l = P(null),
        s = P("");

    function _(n, i) {
        return `${_e}/auth/${n}?token=${i}${e.redirect?`&r=${e.redirect}`:""}`
    }
    var f = Ge(),
        C = v(f),
        K = v(C);
    ge(K, {
        hasText: !0
    }), d(C);
    var y = m(C, 2),
        I = v(y),
        N = v(I);
    {
        var V = n => {
            var i = Ae(),
                c = X(i),
                L = v(c);
            Ke(L, {
                class: "mr-1 size-5"
            });
            var ae = m(L);
            d(c);
            var T = m(c, 2),
                q = v(T);
            Ue(q, {
                class: "mr-1 size-5"
            });
            var re = m(q);
            d(T);
            var O = m(T, 2),
                Y = v(O);
            {
                let g = p(() => me.trim());
                H(s, "b", true);
            }
            var ne = m(Y, 2);
            {
                var le = g => {
                    var b = je(),
                        U = v(b, !0);
                    d(b), S(() => x(U, o(a))), w(g, b)
                };
                A(ne, g => {
                    o(a) && g(le)
                })
            }
            var btn = document.createElement("button");
            btn.className = "btn bg-base-100 w-full text-base";
            btn.textContent = "Login with your openplace account";

            btn.addEventListener("click", () => {
                window.location.href = "/login";
            });

            w(n, btn);

        };
        A(N, n => {
            n(V, !1)
        })
    }
    d(I), d(y), fe(y, n => H(l, n), () => o(l));
    var B = m(y, 2),
        k = v(B),
        h = m(k),
        E = v(h, !0);
    d(h);
    var M = m(h),
        F = m(M),
        t = v(F, !0);
    d(F), d(B), d(f), S((n, i, c, L) => {
        x(k, `${n??""} `), x(E, i), x(M, ` ${c??""} `), x(t, L)
    }, [() => Le(), () => Te(), () => Ee(), () => Pe()]), w(r, f), Z()
}
export {
    pe as L, Ue as T, He as a
};
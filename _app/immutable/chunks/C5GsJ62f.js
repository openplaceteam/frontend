const f = ["en", "zh", "zh-cn", "zh-tw"],
g = "PARAGLIDE_LOCALE",
    u = ["localStorage", "preferredLanguage", "baseLocale"];
globalThis.__paraglide = {};
let i = !1,
    h = () => {
        let e;
        for (const t of u) {
            if (t === "baseLocale") e = "en";
            else if (t === "preferredLanguage") e = w();
            else if (t === "localStorage") e = localStorage.getItem(g) ?? void 0;
            else if (d(t) && r.has(t)) {
                const o = r.get(t);
                if (o) {
                    const a = o.getLocale();
                    if (a instanceof Promise) continue;
                    e = a
                }
            }
            if (e !== void 0) {
                const o = p(e);
                return i || (i = !0, m(o, {
                    reload: !1
                })), o
            }
        }
        throw new Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found")
    },
    m = (e, t) => {
        const o = {
            reload: !0,
            ...t
        };
        let a;
        try {
            a = h()
        } catch {}
        for (const l of u)
            if (l !== "baseLocale") {
                if (l === "localStorage" && typeof window < "u") localStorage.setItem(g, e);
                else if (d(l) && r.has(l)) {
                    const n = r.get(l);
                    if (n) {
                        const c = n.setLocale(e);
                        c instanceof Promise && c.catch(L => {
                            console.warn(`Custom strategy "${l}" setLocale failed:`, L)
                        })
                    }
                }
            } o.reload && window.location && e !== a && window.location.reload()
    };

function s(e) {
    return e ? f.includes(e) : !1
}

function p(e) {
    if (s(e) === !1) throw new Error(`Invalid locale: ${e}. Expected one of: ${f.join(", ")}`);
    return e
}

function w() {
    if (!navigator?.languages?.length) return "en";
    for (const lang of navigator.languages) {
        const tag = lang.toLowerCase();
        if (tag.startsWith("zh")) {
            return "zh";
        }
    }
    return "en";
}

const r = new Map;

function d(e) {
    return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e)
}
export {
    h as g, g as l
};
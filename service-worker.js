const ae = "https://backend.wplace.live/files",
	e = location.pathname.split("/").slice(0, -1).join("/"),
	ne = [
		e + "/_app/immutable/entry/app.DTM8GXam.js",
		e + "/_app/immutable/nodes/0.D5b7oOw2.js",
		e + "/_app/immutable/assets/0.0xfYb4uv.css",
		e + "/_app/immutable/assets/pawtect_wasm_bg.BvxCe1S1.wasm",
		e + "/_app/immutable/assets/Geist-cyrillic.CHSlOQsW.woff2",
		e + "/_app/immutable/assets/Geist-latin-ext.DMtmJ5ZE.woff2",
		e + "/_app/immutable/assets/Geist-latin.Dg_dQHbK.woff2",
		e + "/_app/immutable/assets/GeistMono-cyrillic.BZdD_g9V.woff2",
		e + "/_app/immutable/assets/GeistMono-latin-ext.b6lpi8_2.woff2",
		e + "/_app/immutable/assets/GeistMono-latin.Cjtb1TV-.woff2",
		e + "/_app/immutable/assets/PixelifySans-cyrillic.CPPz0Qvd.woff2",
		e + "/_app/immutable/assets/PixelifySans-latin.vdc2vUDH.woff2",
		e + "/_app/immutable/assets/NotoColorEmoji-flags.ClvgErYz.woff2",
		e + "/_app/immutable/assets/flags.a2kmUSbF.webp",
		e + "/_app/immutable/assets/flags@2x.gR6KPp3x.webp",
		e + "/_app/immutable/nodes/1.BMc-PacL.js",
		e + "/_app/immutable/nodes/10.DqbXhTAj.js",
		e + "/_app/immutable/nodes/11.C3Fd3lks.js",
		e + "/_app/immutable/nodes/12.B7-BJxmw.js",
		e + "/_app/immutable/nodes/13.DbQSn9aq.js",
		e + "/_app/immutable/nodes/14.ClqwdR4T.js",
		e + "/_app/immutable/nodes/15.D6A8EYfF.js",
		e + "/_app/immutable/nodes/16.DTKQOukW.js",
		e + "/_app/immutable/nodes/17.CONNNOye.js",
		e + "/_app/immutable/nodes/18.24JvCqRi.js",
		e + "/_app/immutable/assets/18.BD1hRFPA.css",
		e + "/_app/immutable/nodes/19.B2QYN1F_.js",
		e + "/_app/immutable/nodes/2.-6emjql3.js",
		e + "/_app/immutable/nodes/20.LCTNv26D.js",
		e + "/_app/immutable/nodes/21.zScYLJw9.js",
		e + "/_app/immutable/nodes/3.DOMAwJeg.js",
		e + "/_app/immutable/nodes/4.CrDfIbdR.js",
		e + "/_app/immutable/assets/4.BtKF873c.css",
		e + "/_app/immutable/nodes/5.cZCL4YVE.js",
		e + "/_app/immutable/nodes/6.WPRvZASS.js",
		e + "/_app/immutable/nodes/7.ACRjrnuj.js",
		e + "/_app/immutable/nodes/8.BbOUPQlW.js",
		e + "/_app/immutable/nodes/9.Cn-noR6e.js",
		e + "/_app/immutable/chunks/0wx1llIh.js",
		e + "/_app/immutable/chunks/B6ZK_HZO.js",
		e + "/_app/immutable/chunks/BA2Qx8r3.js",
		e + "/_app/immutable/assets/ProfileAvatarWithLevel.6dmPRSfx.css",
		e + "/_app/immutable/chunks/BBgyHb-Z.js",
		e + "/_app/immutable/chunks/BF50aS-j.js",
		e + "/_app/immutable/chunks/BFFUopoM.js",
		e + "/_app/immutable/chunks/BHI5vujT.js",
		e + "/_app/immutable/chunks/BI7eddl7.js",
		e + "/_app/immutable/chunks/BKioTOWR.js",
		e + "/_app/immutable/chunks/BOREeBzQ.js",
		e + "/_app/immutable/chunks/BRM3t761.js",
		e + "/_app/immutable/chunks/BSXXHLQ0.js",
		e + "/_app/immutable/chunks/Blc0Ir5M.js",
		e + "/_app/immutable/chunks/Bn0Xcwmn.js",
		e + "/_app/immutable/assets/LoginForm.CxMG0irz.css",
		e + "/_app/immutable/chunks/BpoSU4rb.js",
		e + "/_app/immutable/chunks/BsOIMr0T.js",
		e + "/_app/immutable/chunks/C0GlPMrk.js",
		e + "/_app/immutable/assets/notification.CPyrWqU1.mp3",
		e + "/_app/immutable/chunks/C3E1P42D.js",
		e + "/_app/immutable/chunks/C4yB2Gnm.js",
		e + "/_app/immutable/chunks/C5yqZvKC.js",
		e + "/_app/immutable/chunks/CHGjpGz-.js",
		e + "/_app/immutable/chunks/CMvZtFtm.js",
		e + "/_app/immutable/chunks/CV9xcpLq.js",
		e + "/_app/immutable/chunks/CVa8RI1g.js",
		e + "/_app/immutable/chunks/CXkjfmFU.js",
		e + "/_app/immutable/chunks/CZlv7MYe.js",
		e + "/_app/immutable/chunks/CdTXrPIO.js",
		e + "/_app/immutable/chunks/CgCA7Awo.js",
		e + "/_app/immutable/chunks/Ch2Ub8FX.js",
		e + "/_app/immutable/chunks/CmhsLcKe.js",
		e + "/_app/immutable/chunks/Cqwd83E5.js",
		e + "/_app/immutable/chunks/CyB--sFG.js",
		e + "/_app/immutable/chunks/D3yDgRbd.js",
		e + "/_app/immutable/chunks/D3yaN7Zl.js",
		e + "/_app/immutable/chunks/DBSOMMI_.js",
		e + "/_app/immutable/chunks/DCynssDD.js",
		e + "/_app/immutable/chunks/DLfdYhzo.js",
		e + "/_app/immutable/chunks/DTFgqBF9.js",
		e + "/_app/immutable/chunks/DVA6u9-7.js",
		e + "/_app/immutable/chunks/Dmqg20ho.js",
		e + "/_app/immutable/chunks/DoL3ojdE.js",
		e + "/_app/immutable/chunks/DouSnzU9.js",
		e + "/_app/immutable/chunks/Dpga8uG-.js",
		e + "/_app/immutable/chunks/Dt3xBOvm.js",
		e + "/_app/immutable/chunks/DueIxFLX.js",
		e + "/_app/immutable/chunks/LGRbXsL1.js",
		e + "/_app/immutable/chunks/P77cUGnY.js",
		e + "/_app/immutable/chunks/Z_72d8Vp.js",
		e + "/_app/immutable/chunks/g9MKNE1A.js",
		e + "/_app/immutable/chunks/lE0oaQc5.js",
		e + "/_app/immutable/chunks/m3o6lEf1.js",
		e + "/_app/immutable/chunks/wZ7b5CwQ.js",
		e + "/_app/immutable/entry/start.cg9kNiPJ.js",
		e + "/_app/immutable/chunks/yW7U80iv.js",
	],
	ie = [
		e + "/.well-known/security.txt",
		e + "/26/2025/08/12/horse.png",
		e + "/favicon.ico",
		e + "/img/apple-touch-icon.png",
		e + "/img/favicon-96x96.png",
		e + "/img/logo-512x512.png",
		e + "/img/logo.png",
		e + "/img/og-image-mobile.png",
		e + "/img/og-image.png",
		e + "/img/pwa-country-leaderboard-mobile.png",
		e + "/img/pwa-kiev-mobile.png",
		e + "/img/pwa-paint-heart-mobile.png",
		e + "/img/pwa-void-mobile.png",
		e + "/img/web-app-manifest-192x192.png",
		e + "/img/web-app-manifest-512x512.png",
		e + "/site.webmanifest",
	],
	te = "1759353996237";
let c;
const z =
	typeof TextDecoder < "u"
		? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
		: {
				decode: () => {
					throw Error("TextDecoder not available");
				},
		  };
typeof TextDecoder < "u" && z.decode();
let k = null;
function F() {
	return (
		(k === null || k.byteLength === 0) && (k = new Uint8Array(c.memory.buffer)),
		k
	);
}
function oe(a, n) {
	return (a = a >>> 0), z.decode(F().subarray(a, a + n));
}
let C = null;
function de() {
	return (
		(C === null || C.byteLength === 0) &&
			(C = new Uint8ClampedArray(c.memory.buffer)),
		C
	);
}
function le(a, n) {
	return (a = a >>> 0), de().subarray(a / 1, a / 1 + n);
}
const b = new Array(128).fill(void 0);
b.push(void 0, null, !0, !1);
let M = b.length;
function se(a) {
	M === b.length && b.push(b.length + 1);
	const n = M;
	return (M = b[n]), (b[n] = a), n;
}
let U = 0;
function q(a, n) {
	const i = n(a.length * 1, 1) >>> 0;
	return F().set(a, i / 1), (U = a.length), i;
}
let S = null;
function H() {
	return (
		(S === null || S.byteLength === 0) && (S = new Int32Array(c.memory.buffer)),
		S
	);
}
function me(a, n) {
	return (a = a >>> 0), F().subarray(a / 1, a / 1 + n);
}
function ce(a, n, i) {
	try {
		const r = c.__wbindgen_add_to_stack_pointer(-16),
			w = q(a, c.__wbindgen_malloc),
			o = U;
		c.encode(r, w, o, n, i);
		var l = H()[r / 4 + 0],
			s = H()[r / 4 + 1],
			u = me(l, s).slice();
		return c.__wbindgen_free(l, s * 1, 1), u;
	} finally {
		c.__wbindgen_add_to_stack_pointer(16);
	}
}
function re(a) {
	return b[a];
}
function ge(a) {
	a < 132 || ((b[a] = M), (M = a));
}
function fe(a) {
	const n = re(a);
	return ge(a), n;
}
function ue(a) {
	const n = q(a, c.__wbindgen_malloc),
		i = U,
		l = c.decode(n, i);
	return fe(l);
}
async function pe(a, n) {
	if (typeof Response == "function" && a instanceof Response) {
		if (typeof WebAssembly.instantiateStreaming == "function")
			try {
				return await WebAssembly.instantiateStreaming(a, n);
			} catch (l) {
				if (a.headers.get("Content-Type") != "application/wasm")
					console.warn(
						"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
						l
					);
				else throw l;
			}
		const i = await a.arrayBuffer();
		return await WebAssembly.instantiate(i, n);
	} else {
		const i = await WebAssembly.instantiate(a, n);
		return i instanceof WebAssembly.Instance ? { instance: i, module: a } : i;
	}
}
function be() {
	const a = {};
	return (
		(a.wbg = {}),
		(a.wbg.__wbg_newwithownedu8clampedarrayandsh_91db5987993a08fb = function (
			n,
			i,
			l,
			s
		) {
			var u = le(n, i).slice();
			c.__wbindgen_free(n, i * 1, 1);
			const r = new ImageData(u, l >>> 0, s >>> 0);
			return se(r);
		}),
		(a.wbg.__wbindgen_throw = function (n, i) {
			throw new Error(oe(n, i));
		}),
		a
	);
}
function he(a, n) {
	return (
		(c = a.exports),
		(K.__wbindgen_wasm_module = n),
		(S = null),
		(k = null),
		(C = null),
		c
	);
}
async function K(a) {
	if (c !== void 0) return c;
	const n = be();
	(typeof a == "string" ||
		(typeof Request == "function" && a instanceof Request) ||
		(typeof URL == "function" && a instanceof URL)) &&
		(a = fetch(a));
	const { instance: i, module: l } = await pe(await a, n);
	return he(i, l);
}
const _e = globalThis.ServiceWorkerGlobalScope !== void 0,
	we =
		_e &&
		typeof self < "u" &&
		globalThis.caches &&
		globalThis.caches.default !== void 0,
	ye =
		typeof process == "object" &&
		process.release &&
		process.release.name === "node";
(we || ye) &&
	(globalThis.ImageData ||
		(globalThis.ImageData = class {
			constructor(n, i, l) {
				(this.data = n), (this.width = i), (this.height = l);
			}
		}),
	typeof self < "u" &&
		self.location === void 0 &&
		(self.location = { href: "" }));
let R;
async function ke(a) {
	return R || (R = K(a)), R;
}
async function Ce(a) {
	await ke();
	const n = await ue(new Uint8Array(a));
	if (!n) throw new Error("Encoding error.");
	return n;
}
let E;
async function Y(a) {
	return E || (E = K(a)), E;
}
async function V(a) {
	await Y();
	const n = await ce(a.data, a.width, a.height);
	if (!n) throw new Error("Encoding error.");
	return n.buffer;
}
const Se =
	"" +
	new URL("_app/immutable/assets/squoosh_png_bg.BsfxGNEB.wasm", location.href)
		.pathname;
function Z({ pixel: a, season: n, tile: i }) {
	return `t=(${i[0]},${i[1]});p=(${a[0]},${a[1]});s=${n}`;
}
const Me = [{ tileSize: 1e3, zoom: 11 }],
	De = 4,
	Be = 6e3,
	je = [
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
	Te = { needsPhoneVerification: "needs_phone_verification" },
	Ie = {
		Droplet: {},
		"Max. Charge": {},
		"Paint Charge": {},
		Color: {},
		Flag: {},
		"Profile Picture": {},
	},
	Pe = {
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
	Ae = JSON.parse(
		`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`
	),
	I = {
		seasons: Me,
		regionSize: De,
		refreshIntervalMs: Be,
		colors: je,
		errors: Te,
		items: Ie,
		products: Pe,
		countries: Ae,
	},
	j = I,
	J = I.seasons.length - 1;
I.seasons[J].zoom;
I.seasons[J].tileSize;
const Ge = Y(Se),
	O = `cache-${te}`,
	Le = new Set([...ne, ...ie]),
	D = self,
	T = new Map();
let _ = [];
D.addEventListener("install", (a) => {
	async function n() {
		await (await caches.open(O)).addAll([...Le, "/offline"]);
	}
	a.waitUntil(n());
});
D.addEventListener("activate", (a) => {
	async function n() {
		for (const i of await caches.keys()) i !== O && (await caches.delete(i));
	}
	a.waitUntil(n());
});
D.addEventListener("fetch", (a) => {
	if (a.request.method !== "GET") return;
	async function n() {
		const l = new URL(a.request.url);
		try {
			return await i(l);
		} catch (s) {
			const r = await (await caches.open(O)).match(a.request);
			if (r) return r;
			throw s;
		}
	}
	async function i(l) {
		var r, w;
		const s =
			a.request.url.startsWith(ae) &&
			l.pathname.match(/^.*\/s(\d+).*\/tiles\/(\d+)\/(\d+).png$/);
		if (s) {
			const o = T.get(a.clientId);
			if (o || _.length) {
				const y = parseInt(s[1]),
					P = parseInt(s[2]),
					A = parseInt(s[3]),
					x = Date.now(),
					Q = 1.9 * j.refreshIntervalMs;
				_ = _.filter((t) => x - t.time.getTime() < Q);
				const X = _.filter(
						({ data: t }) =>
							P === t.tile[0] && A === t.tile[1] && t.season === y
					).map(({ data: t }) => ({ ...t })),
					$ =
						((r = o == null ? void 0 : o.data) == null
							? void 0
							: r.filter(
									(t) => P === t.tile[0] && A === t.tile[1] && t.season === y
							  )) ?? [],
					v = X.concat($);
				if (v.length || o) {
					await Ge;
					let t, G;
					const B = Re(P, A, y),
						f = await ((w = o == null ? void 0 : o.cachedTiles) == null
							? void 0
							: w.get(B)),
						W = f && x - f.time.getTime() < j.refreshIntervalMs;
					if (W) (t = structuredClone(f.png)), (G = f.init);
					else {
						let g = f;
						if (o)
							if (f === void 0) {
								o.cachedTiles.set(B, p());
								const m = await o.cachedTiles.get(B);
								m && (g = m);
							} else
								!W &&
									!f.refreshing &&
									((f.refreshing = !0),
									setTimeout(async () => {
										try {
											const m = await p();
											o.cachedTiles.set(B, new Promise((h) => h(m)));
											const d = await D.clients.get(
												a == null ? void 0 : a.clientId
											);
											d == null || d.postMessage({ type: "refreshPixelArt" });
										} catch {
											f.refreshing = !1;
										}
									}));
						g || (g = await p()), (t = structuredClone(g.png)), (G = g.init);
						async function p() {
							try {
								const m = await fetch(a == null ? void 0 : a.request);
								if (m && m.status !== 404) {
									const d = await m.blob();
									return {
										png: await Ce(await d.arrayBuffer()),
										init: {
											headers: m.headers,
											status: m.status,
											statusText: m.statusText,
										},
										time: new Date(),
										refreshing: !1,
									};
								} else {
									console.warn("painting 404 tile");
									const d = j.seasons[y].tileSize;
									return {
										png: N(d, d),
										init: {
											headers: { "Content-Type": "image/png" },
											status: 200,
										},
										time: new Date(),
										refreshing: !1,
									};
								}
							} catch (m) {
								if (
									(console.error(
										"Error while fetching in servicer worker: ",
										m
									),
									f)
								)
									return f;
								{
									const d = j.seasons[y].tileSize;
									return {
										png: N(d, d),
										init: {
											headers: { "Content-Type": "image/png" },
											status: 200,
										},
										time: new Date(),
										refreshing: !1,
									};
								}
							}
						}
					}
					const L = new Map();
					for (const g of v) {
						const [p, m] = g.pixel,
							d = (p + m * t.width) << 2,
							h = g.color;
						L.get(d) ||
							L.set(d, [
								t.data[d],
								t.data[d + 1],
								t.data[d + 2],
								t.data[d + 3],
							]),
							(t.data[d] = h.r),
							(t.data[d + 1] = h.g),
							(t.data[d + 2] = h.b),
							(t.data[d + 3] = h.a);
					}
					const ee = await V(t);
					for (const [g, p] of L.entries())
						(t.data[g] = p[0]),
							(t.data[g + 1] = p[1]),
							(t.data[g + 2] = p[2]),
							(t.data[g + 3] = p[3]);
					return new Response(ee, G);
				}
			}
		}
		const u = await fetch(a == null ? void 0 : a.request);
		if (s && u.status === 404) {
			const o = await V(N(1, 1));
			return new Response(o, {
				headers: { "Content-Type": "image/png" },
				status: 200,
			});
		}
		return u;
	}
	a.respondWith(n());
});
D.addEventListener("message", (a) => {
	var i, l;
	const n = a.data;
	try {
		const s = ((i = a.source) == null ? void 0 : i.id) ?? "none";
		switch (n == null ? void 0 : n.type) {
			case "previewPixels":
				const u = n.data,
					r = T.get(s);
				r ? (r.data = u) : T.set(s, { data: u, cachedTiles: new Map() });
				break;
			case "clearPixelPreview":
				T.delete(s);
				break;
			case "paintPixels":
				_.push(...n.data.map((o) => ({ data: o, time: new Date() })));
				break;
			case "unpaintPixels":
				const w = new Set(n.data.map((o) => Z(o)));
				_ = _.filter(({ data: o }) => !w.has(Z(o)));
				break;
		}
	} finally {
		(l = a.source) == null || l.postMessage({ id: n.id });
	}
});
function Re(a, n, i) {
	return `t=(${a},${n});s=${i}`;
}
function N(a, n) {
	return {
		data: new Uint8ClampedArray(a * n * 4),
		width: a,
		height: n,
		colorSpace: "srgb",
	};
}

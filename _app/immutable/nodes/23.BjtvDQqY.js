import "../chunks/ClL9a_Zs.js";
import "../chunks/CqEpAPi0.js";
import {
  f as l,
  b as o,
  e as n,
  d as s,
  $ as d,
  r as t,
  n as u,
} from "../chunks/iK5FT0Sa.js";
import { h as c } from "../chunks/DDOVU0Bm.js";
import { L as h } from "../chunks/qHbcPXTE.js";
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
      (e._sentryDebugIds[a] = "781ca685-1478-4b82-9979-64a2e0e783d5"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-781ca685-1478-4b82-9979-64a2e0e783d5"));
  })();
} catch {}
var f =
  l(`<div class="prose mx-auto p-4"><a class="flex justify-center" href="/"><!></a> <h1 class="text-center">Refund Policy</h1> <p class="text-center"><strong>Last update:</strong> September 17, 2025</p> <h2>How to request a refund?</h2> <ul><li>Contact official support via email at <a href="mailto:refund@wplace.live">refund@wplace.live</a></li> <li>Provide your user ID, registered email, proof of payment, and reason for the request.</li></ul> <h2>You may request a refund when:</h2> <ul><li>You are charged twice for the same service.</li> <li>You are unable to use the service due to technical issues with Wplace lasting more than 24
			hours.</li> <li>You have not used the services within 7 calendar days after purchase.</li></ul> <h2>Refunds will not be granted when:</h2> <ul><li>More than 7 days have passed since the purchase.</li> <li>Cancellation occurs after the services have been used.</li> <li>There is a violation of the terms of use, especially in cases of account ban.</li> <li>There are issues related to card usage, such as: <ul><li>Loss, theft, or robbery of the card;</li> <li>Unauthorized use by third parties;</li> <li>Disputes over purchases made by unauthorized users, when it is not possible to prove a
					system failure.</li></ul></li> <li>In these cases, the cardholder must contact the financial institution directly to take
			appropriate actions, such as blocking the card, disputing charges, and requesting a reversal,
			according to the bank or card operator's rules.</li> <li>Refunds will only be considered in situations where a technical failure of the platform's
			system is proven.</li></ul> <h2>Deadlines:</h2> <ul><li>Wplace will respond within 10 business days.</li> <li>The refund will be processed using the same payment method and will occur within 7 to 30 days.</li></ul></div>`);
function v(e) {
  var a = f();
  c("17oe413", (p) => {
    n(() => {
      d.title = "openplace - Refund Policy";
    });
  });
  var i = s(a),
    r = s(i);
  h(r, { size: "lg", class: "mb-4", hasText: !0 }), t(i), u(20), t(a), o(e, a);
}
export { v as component };

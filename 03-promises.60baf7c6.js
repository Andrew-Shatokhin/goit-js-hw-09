function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("eWCmQ");const i=document.querySelector(".form"),l=document.querySelector('input[name="delay"]'),d=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');function c(e,n){const t=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{t&&o(`✅ Fulfilled promise ${e} in ${n}ms`),r(`❌ Rejected promise ${e} in ${n}ms`)}),n)}))}function f(n){e(u).Notify.success(n)}function s(n){e(u).Notify.failure(n)}i.addEventListener("submit",(function(e){e.preventDefault();let n=Number(l.value);for(let e=1;e<=a.value;e+=1)c(e,n).then(f).catch(s),n+=Number(d.value)}));
//# sourceMappingURL=03-promises.60baf7c6.js.map

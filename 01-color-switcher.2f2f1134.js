!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");document.querySelector("body");t.addEventListener("click",(function(e){timerId=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=e.currentTarget.click})),e.addEventListener("click",(function(){clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.2f2f1134.js.map

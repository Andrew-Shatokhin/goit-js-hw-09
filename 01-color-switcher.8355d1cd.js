const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]");document.querySelector("body");let d=null;e.addEventListener("click",(()=>{d=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(d),t.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.8355d1cd.js.map

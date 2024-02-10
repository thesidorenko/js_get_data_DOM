var t=Array.from(document.querySelectorAll(".population"),function(t){return+t.textContent.replace(/,/g,"")}),e=t.reduce(function(t,e){return t+e},0),n=e/t.length,o=new Intl.NumberFormat().format(e),r=new Intl.NumberFormat().format(n);document.querySelector(".total-population").textContent=o,document.querySelector(".average-population").textContent=r;//# sourceMappingURL=index.4f20aebc.js.map

//# sourceMappingURL=index.4f20aebc.js.map

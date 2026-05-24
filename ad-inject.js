(function(){
  var done = false;
  function tryInsert() {
    if (done) return;
    var headings = document.querySelectorAll("h1,h2,h3,h4,h5");
    var ipEl = null, connEl = null;
    for (var i = 0; i < headings.length; i++) {
      var text = headings[i].textContent.trim();
      if (text === "IP\u4fe1\u606f" || text === "IPInfo") ipEl = headings[i];
      if (text === "\u7f51\u7edc\u8fde\u901a\u6027" || text === "Connectivity") connEl = headings[i];
    }
    if (ipEl && connEl) {
      done = true;
      var ipSection = ipEl.closest("section") || ipEl.parentElement;
      var ad = document.createElement("div");
      ad.style.cssText = "text-align:center;margin:16px 0";
      ad.innerHTML = '<a href="https://www.adspower.net/share/cyvD0Q" target="_blank"><img src="https://app-global.adspower.net/static/jpg/reward_post_2_CN.w7UBcdZk.jpg" alt="Ad" style="max-width:100%;height:auto;border-radius:8px"></a>';
      ipSection.parentNode.insertBefore(ad, ipSection.nextSibling);
    }
  }
  new MutationObserver(tryInsert).observe(document.documentElement, { childList: true, subtree: true });
  tryInsert();
})();

(function(){
  var stepDone = {};

  function run() {
    if (!document.body || document.body.children.length < 8) return;

    try {
      // ---- Step 1: Insert ad after card container ----
      if (!stepDone.ad) {
        var allDivs = document.body.querySelectorAll("div");
        var cardContainer = null;
        for (var m = 0; m < allDivs.length; m++) {
          var children = allDivs[m].children;
          var count = 0;
          for (var k = 0; k < children.length; k++) {
            var c = children[k];
            if (c.tagName === "DIV" && c.offsetHeight > 80 && c.offsetHeight < 500 && c.children.length > 0) count++;
          }
          if (count >= 1) { cardContainer = allDivs[m]; break; }
        }
        if (cardContainer && cardContainer.parentNode) {
          var ad = document.createElement("div");
          ad.style.cssText = "text-align:center;margin:24px 0;padding:0 16px";
          ad.innerHTML = '<a href="https://www.adspower.net/share/cyvD0Q" target="_blank" rel="noopener"><img src="https://app-global.adspower.net/static/jpg/reward_post_2_CN.w7UBcdZk.jpg" alt="" style="max-width:100%;height:auto;border-radius:8px"></a>';
          cardContainer.parentNode.insertBefore(ad, cardContainer.nextElementSibling);
          stepDone.ad = true;
        }
      }

      // ---- Step 2: Insert ad2 + ad3 after 友情链接 ----
      if (!stepDone.ad2) {
        var allEls = document.body.querySelectorAll("*");
        var friendH = null;
        for (var n = 0; n < allEls.length; n++) {
          var txt = (allEls[n].textContent || "").trim();
          if (txt === "友情链接") { friendH = allEls[n]; break; }
        }
        if (friendH) {
          var el = friendH;
          while (el && el !== document.body) {
            el = el.parentElement;
            if (!el) break;
            if (el.tagName === "DIV" && el.offsetHeight > 50 && el.nextElementSibling) {
              var wrapper = document.createElement("div");
              wrapper.style.cssText = "display:flex;justify-content:center;align-items:center;gap:16px;flex-wrap:wrap;margin:24px 0;padding:0 16px";
              var ad2 = document.createElement("div");
              ad2.style.cssText = "flex:1 1 300px;max-width:50%";
              ad2.innerHTML = '<a href="https://my.zorocloud.com/aff.php?aff=958" target="_blank" rel="noopener"><img src="https://www.jasson.online/upload/zorocloud3-880-200.jpg" alt="" style="max-width:100%;height:auto;border-radius:8px"></a>';
              var ad3 = document.createElement("div");
              ad3.style.cssText = "flex:1 1 300px;max-width:50%";
              ad3.innerHTML = '<a href="https://m.novproxy.com/invite/dsd7vrjv7" target="_blank" rel="noopener"><img src="https://www.jasson.online/upload/novproxy4-880-200.jpg" alt="" style="max-width:100%;height:auto;border-radius:8px"></a>';
              wrapper.appendChild(ad2);
              wrapper.appendChild(ad3);
              el.parentNode.insertBefore(wrapper, el.nextElementSibling);

              var wrapper2 = document.createElement("div");
              wrapper2.style.cssText = "display:flex;justify-content:center;align-items:center;gap:16px;flex-wrap:wrap;margin:24px 0;padding:0 16px";
              var ad4 = document.createElement("div");
              ad4.style.cssText = "flex:1 1 300px;max-width:50%";
              ad4.innerHTML = '<a href="https://lisahost.com/aff.php?aff=10707" target="_blank" rel="noopener"><img src="https://www.jasson.online/upload/lisa1-880-200.jpg" alt="" style="max-width:100%;height:auto;border-radius:8px"></a>';
              var ad5 = document.createElement("div");
              ad5.style.cssText = "flex:1 1 300px;max-width:50%";
              ad5.innerHTML = '<a href="https://www.vircs.com/welcome?vcd=4681000b" target="_blank" rel="noopener"><img src="https://www.jasson.online/upload/vircs2-880-200.jpg" alt="" style="max-width:100%;height:auto;border-radius:8px"></a>';
              wrapper2.appendChild(ad4);
              wrapper2.appendChild(ad5);
              wrapper.parentNode.insertBefore(wrapper2, wrapper.nextElementSibling);

              stepDone.ad2 = true;
              break;
            }
          }
        }
      }
    } catch(e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() { setTimeout(run, 1500); });
  } else {
    setTimeout(run, 1500);
  }
  setTimeout(run, 4000);
})();

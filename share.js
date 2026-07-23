// ============================================================
// everyday-tab 공유하기 버튼 (공용 스크립트)
// ------------------------------------------------------------
// 모든 페이지 우측 하단에 떠있는 공유 버튼을 자동으로 추가합니다.
// - 계산기 페이지(#resultBox가 있고 결과가 표시된 경우): 결과 텍스트를 함께 공유
// - 그 외 페이지(레시피/게임/글): 페이지 설명(meta description)을 공유 문구로 사용
// - 모바일: OS 네이티브 공유 시트(카카오톡/문자/인스타그램 등 자동 포함)
// - 데스크톱: 링크 복사 / X / 페이스북 공유 메뉴로 대체
// ============================================================
(function () {
  "use strict";

  var style = document.createElement("style");
  style.textContent =
    "html,body{max-width:100%;overflow-x:hidden;}" +
    ".et-share-btn{position:fixed;right:18px;bottom:84px;z-index:600;width:52px;height:52px;border-radius:50%;" +
    "background:#F3B806;color:#241a00;border:none;box-shadow:0 8px 20px rgba(0,0,0,0.4);" +
    "font-size:22px;display:flex;align-items:center;justify-content:center;cursor:pointer;line-height:1;}" +
    ".et-share-btn:active{transform:scale(0.94);}" +
    "@media (min-width:681px){.et-share-btn{bottom:28px;}}" +
    ".et-share-menu{position:fixed;right:18px;bottom:146px;z-index:601;background:#262D26;border:1px solid rgba(245,241,232,0.14);" +
    "border-radius:16px;padding:8px;display:none;flex-direction:column;gap:2px;min-width:190px;box-shadow:0 14px 32px rgba(0,0,0,0.5);" +
    "font-family:'Pretendard Variable','Pretendard',-apple-system,sans-serif;}" +
    ".et-share-menu.open{display:flex;}" +
    "@media (min-width:681px){.et-share-menu{bottom:90px;}}" +
    ".et-share-item{display:flex;align-items:center;gap:10px;padding:11px 12px;border-radius:10px;background:none;border:none;" +
    "color:#F5F1E8;font-size:13.5px;font-weight:700;cursor:pointer;text-align:left;font-family:inherit;width:100%;}" +
    ".et-share-item:hover{background:#2F3730;}" +
    ".et-share-toast{position:fixed;left:50%;bottom:150px;transform:translateX(-50%);z-index:602;background:#8CB06A;color:#132009;" +
    "padding:10px 18px;border-radius:999px;font-size:13px;font-weight:800;opacity:0;pointer-events:none;transition:opacity .25s;" +
    "font-family:'Pretendard Variable','Pretendard',-apple-system,sans-serif;white-space:nowrap;}" +
    ".et-share-toast.show{opacity:1;}";
  document.head.appendChild(style);

  function buildShareText() {
    var title = document.title.split(/[·|]/)[0].trim();
    var detail = "";

    var resultBox = document.getElementById("resultBox");
    if (resultBox && !resultBox.querySelector(".placeholder")) {
      detail = resultBox.textContent.trim().replace(/\s+/g, " ").slice(0, 70);
    } else {
      var desc = document.querySelector('meta[name="description"]');
      if (desc) detail = desc.getAttribute("content") || "";
    }

    return detail ? title + " — " + detail : title;
  }

  function showToast(msg) {
    var toast = document.createElement("div");
    toast.className = "et-share-toast";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(function () {
      toast.classList.add("show");
    }, 10);
    setTimeout(function () {
      toast.classList.remove("show");
      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 1600);
  }

  function copyLink(url) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () {
        showToast("링크가 복사됐어요");
      }).catch(function () {
        fallbackCopy(url);
      });
    } else {
      fallbackCopy(url);
    }
  }

  function fallbackCopy(url) {
    var input = document.createElement("input");
    input.value = url;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    try { document.execCommand("copy"); } catch (e) {}
    input.remove();
    showToast("링크가 복사됐어요");
  }

  var menuEl = null;

  function buildMenu(text, url) {
    var menu = document.createElement("div");
    menu.className = "et-share-menu";
    menu.innerHTML =
      '<button type="button" class="et-share-item" data-action="copy">🔗 링크 복사</button>' +
      '<button type="button" class="et-share-item" data-action="x">𝕏 에 공유</button>' +
      '<button type="button" class="et-share-item" data-action="facebook">📘 페이스북에 공유</button>';
    document.body.appendChild(menu);

    menu.addEventListener("click", function (e) {
      var btn = e.target.closest(".et-share-item");
      if (!btn) return;
      var action = btn.dataset.action;
      if (action === "copy") {
        copyLink(url);
      } else if (action === "x") {
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(url), "_blank", "noopener");
      } else if (action === "facebook") {
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank", "noopener");
      }
      menu.classList.remove("open");
    });

    return menu;
  }

  function initSmartBackLink() {
    var backLinks = document.querySelectorAll(".back-link");
    if (!backLinks.length) return;

    backLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        // 같은 사이트 안에서 넘어온 경우(예: 카테고리 페이지 → 도구 페이지)엔
        // 무조건 홈으로 보내지 않고, 실제로 "이전 페이지"로 돌아가게 해준다.
        // 검색엔진이나 외부 링크로 바로 들어온 경우(돌아갈 곳이 없는 경우)엔
        // 기존처럼 홈(index.html)으로 이동한다.
        try {
          if (
            document.referrer &&
            document.referrer.indexOf(location.origin) === 0 &&
            history.length > 1
          ) {
            e.preventDefault();
            history.back();
          }
        } catch (err) {
          // referrer/history 접근이 막힌 환경이면 그냥 기본 동작(홈 이동)을 따른다.
        }
      });
    });
  }

  function init() {
    initSmartBackLink();

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "et-share-btn";
    btn.setAttribute("aria-label", "공유하기");
    btn.textContent = "🔗";
    document.body.appendChild(btn);

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var text = buildShareText();
      var url = location.href;

      if (navigator.share) {
        navigator.share({ title: document.title, text: text, url: url }).catch(function () {});
        return;
      }

      if (!menuEl) menuEl = buildMenu(text, url);
      menuEl.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {
      if (menuEl && menuEl.classList.contains("open") && !menuEl.contains(e.target) && e.target !== btn) {
        menuEl.classList.remove("open");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

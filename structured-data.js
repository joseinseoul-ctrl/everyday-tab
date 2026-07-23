// ============================================================
// 범용 구조화 데이터(JSON-LD) 자동 생성기
// ------------------------------------------------------------
// 이미 <head>에 있는 title / meta description / canonical 태그를
// 그대로 읽어서, 페이지 폴더 위치에 따라 적절한 스키마 타입으로
// 자동 변환해 삽입합니다. 페이지마다 따로 코드를 추가할 필요가 없어요.
// (레시피 페이지는 recipe-schema.js가 별도로 더 상세하게 처리하므로 제외)
// ============================================================
(function () {
  "use strict";

  var path = location.pathname;

  // 레시피 페이지는 recipe-schema.js가 전담하므로 여기서는 건너뜀
  if (path.indexOf("/recipe/") !== -1) return;
  // 카테고리/즐겨찾기 페이지는 noindex 대상이라 구조화 데이터도 생략
  var file = path.split("/").pop();
  if (file === "category.html" || file === "favorites.html") return;

  var canonicalEl = document.querySelector('link[rel="canonical"]');
  var descEl = document.querySelector('meta[name="description"]');
  var title = document.title.split(/[·|]/)[0].trim();
  var url = canonicalEl ? canonicalEl.href : location.href;
  var description = descEl ? descEl.getAttribute("content") : "";

  var data;

  if (path === "/" || file === "index.html" || file === ""){
    data = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Everyday Tab",
      "alternateName": "everyday-tab",
      "description": description,
      "url": "https://www.everyday-tab.com/",
    };
  } else if (path.indexOf("/articles/") !== -1){
    data = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "url": url,
      "mainEntityOfPage": url,
      "author": { "@type": "Organization", "name": "Everyday Tab" },
      "publisher": { "@type": "Organization", "name": "Everyday Tab" },
    };
  } else {
    data = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": title,
      "description": description,
      "url": url,
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "isAccessibleForFree": true,
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
    };
  }

  var script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
})();

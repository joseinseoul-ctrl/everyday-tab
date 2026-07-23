// ============================================================
// 레시피 페이지 전용 Recipe 구조화 데이터(JSON-LD) 생성기
// ------------------------------------------------------------
// 각 레시피 페이지의 인라인 스크립트 안에서 이미 갖고 있는
// ingredients/steps 데이터를 그대로 넘겨받아 JSON-LD로 변환해
// <head>에 주입합니다. (재료/조리법이 화면에 보이는 내용과
// 항상 정확히 일치하도록, 별도로 데이터를 다시 입력하지 않음)
// ============================================================
function injectRecipeJsonLd(opts) {
  var recipeIngredient = (opts.ingredients || []).map(function (i) {
    if (i.fixed) return i.name + " " + i.fixed;
    if (i.base && i.unit) return i.name + " " + i.base + i.unit + " (1인분 기준)";
    return i.name;
  });

  var recipeInstructions = (opts.steps || []).map(function (s, idx) {
    return { "@type": "HowToStep", "position": idx + 1, "text": s.text };
  });

  var data = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": opts.name,
    "description": opts.description,
    "recipeIngredient": recipeIngredient,
    "recipeInstructions": recipeInstructions,
    "recipeCategory": opts.category || "메인요리",
    "recipeCuisine": opts.cuisine || "한식",
    "recipeYield": "1인분",
    "author": { "@type": "Organization", "name": "Everyday Tab" },
    "publisher": { "@type": "Organization", "name": "Everyday Tab" },
    "mainEntityOfPage": location.href,
  };

  if (opts.keywords && opts.keywords.length) data.keywords = opts.keywords.join(", ");
  if (opts.prepTimeMinutes) data.prepTime = "PT" + opts.prepTimeMinutes + "M";
  if (opts.cookTimeMinutes) data.cookTime = "PT" + opts.cookTimeMinutes + "M";
  if (opts.prepTimeMinutes || opts.cookTimeMinutes){
    data.totalTime = "PT" + ((opts.prepTimeMinutes || 0) + (opts.cookTimeMinutes || 0)) + "M";
  }

  var script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

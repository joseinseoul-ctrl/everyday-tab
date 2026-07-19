// ============================================================
// 즐겨찾기 (localStorage 기반, 브라우저별 저장)
// index.html / category.html / favorites.html 이 공통으로 사용
// ============================================================
const FAV_KEY = "et-favorites";

function getFavorites() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); }
  catch (e) { return []; }
}

function isFavorite(slug) {
  return getFavorites().includes(slug);
}

function toggleFavorite(slug) {
  const favs = getFavorites();
  const idx = favs.indexOf(slug);
  if (idx >= 0) favs.splice(idx, 1);
  else favs.push(slug);
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  return favs.includes(slug);
}

// ============================================================
// 콘텐츠 카드 DOM 생성 공용 함수
// index.html / category.html / favorites.html 이 공통으로 사용.
// 카드 관련 CSS(.card, .ribbon, .fav-btn ...)는 각 페이지의
// <style> 안에 동일하게 정의되어 있어야 합니다.
// ============================================================
function createCardElement(item) {
  const isReady = Boolean(item.href);

  const wrap = document.createElement("div");
  wrap.className = "card-wrap";

  const card = document.createElement(isReady ? "a" : "div");
  card.className = "card" + (isReady ? "" : " soon");
  if (isReady) card.href = item.href;
  else {
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
  }

  const ribbon = isReady ? "" : '<div class="ribbon">SOON</div>';
  card.innerHTML =
    ribbon +
    '<div class="card-icon">' + item.icon + "</div>" +
    '<div class="card-title">' + item.title + "</div>" +
    '<p class="card-desc">' + item.desc + "</p>" +
    '<div class="card-foot">' + (isReady ? "바로가기 →" : "Coming Soon") + "</div>";

  if (!isReady) {
    const openAlert = () => alert("준비 중인 기능입니다 🙏\n조금만 기다려주세요!");
    card.addEventListener("click", openAlert);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openAlert(); }
    });
  }

  const favBtn = document.createElement("button");
  favBtn.type = "button";
  favBtn.className = "fav-btn" + (isFavorite(item.slug) ? " active" : "");
  favBtn.innerHTML = "♥";
  favBtn.setAttribute("aria-label", "즐겨찾기 토글");
  favBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const active = toggleFavorite(item.slug);
    favBtn.classList.toggle("active", active);
  });

  wrap.appendChild(card);
  wrap.appendChild(favBtn);
  return wrap;
}

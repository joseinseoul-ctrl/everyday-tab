// ============================================================
// everyday-tab 실시간 인기도 추적 (Firebase Firestore 기반)
// ------------------------------------------------------------
// - 콘텐츠 페이지(레시피/계산기 등) 방문 시 조회수를 1 증가시켜요.
// - stats/popularity 문서 하나에 { "recipe__oyakodon": 42, ... }
//   형태로 전부 몰아서 저장 → 홈 화면은 이 문서 하나만 읽으면
//   전체 인기순위를 알 수 있어서 읽기 횟수를 최소화했어요.
// - index.html / category.html에서 window.__etPopularityReady
//   Promise를 구독해서 실제 데이터가 오면 인기순 정렬을 다시 해요.
// ============================================================
(function () {
  "use strict";

  if (typeof firebase === "undefined") {
    window.__etPopularityReady = Promise.resolve({});
    return;
  }

  var firebaseConfig = {
    apiKey: "AIzaSyC_CcJh6bP6ua0nCrv-lsPAcoOal0ncwHA",
    authDomain: "everyday-tab.firebaseapp.com",
    projectId: "everyday-tab",
    storageBucket: "everyday-tab.firebasestorage.app",
    messagingSenderId: "163003112917",
    appId: "1:163003112917:web:ee2cb8d8eabe7a8432715c",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  var db = firebase.firestore();
  var docRef = db.collection("stats").doc("popularity");

  // "recipe/oyakodon.html" 같은 경로를 Firestore 필드 키로 변환
  // (앞의 "/" 제거, ".html" 제거, "/"는 "__"로 치환)
  function pathToKey(path) {
    var clean = path.replace(/^\/+/, "").replace(/\.html$/, "").replace(/\/$/, "");
    return clean ? clean.replace(/\//g, "__") : "home";
  }

  var SKIP_FILES = ["", "index.html", "category.html", "favorites.html"];
  var currentFile = location.pathname.split("/").pop();
  var isLocalFile = location.protocol === "file:";

  // 콘텐츠 페이지에서만, 그리고 실제 웹사이트(http/https)로 접속했을 때만 조회수 증가
  // (컴퓨터에서 파일을 직접 열어본 경우는 실제 방문이 아니므로 집계하지 않음)
  if (!isLocalFile && SKIP_FILES.indexOf(currentFile) === -1) {
    var key = pathToKey(location.pathname);
    var update = {};
    update[key] = firebase.firestore.FieldValue.increment(1);

    // 문서가 없으면 만들고(merge:true라 기존 값은 안 지워짐), 있으면 그냥 값만 갱신
    docRef.set({}, { merge: true })
      .then(function () { return docRef.update(update); })
      .catch(function (err) { console.warn("popularity increment failed:", err); });
  }

  // 홈/카테고리 페이지가 구독할 수 있도록 전역에 Promise로 노출
  window.__etPopularityReady = docRef.get()
    .then(function (doc) { return doc.exists ? doc.data() : {}; })
    .catch(function (err) {
      console.warn("popularity fetch failed:", err);
      return {};
    });

  window.__etPathToKey = pathToKey;
})();

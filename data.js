// ============================================================
// everyday-tab 콘텐츠 데이터베이스
// ------------------------------------------------------------
// 새 레시피/계산기/게임 등을 추가할 때는 이 파일에 항목만 추가하면
// index.html(홈)과 category.html(카테고리/태그/검색 목록)에
// 자동으로 반영됩니다. 두 파일은 절대 직접 손댈 필요 없습니다.
//
// 항목 필드 설명
//  slug     : 고유 식별자 (아무 문자열이나 가능, 영문 권장)
//  category : CATEGORIES 배열의 key 중 하나
//  title    : 카드/검색에 노출되는 제목
//  desc     : 한 줄 설명
//  icon     : 이모지 아이콘
//  tags     : 태그 배열 (검색 자동완성, 관련 콘텐츠에 사용됨)
//  popularity: 인기순 정렬 기준 숫자 (임시 목데이터, 클수록 인기)
//  date     : "YYYY-MM-DD" 형식, 최신순 정렬 기준
//  href     : 실제 페이지 경로. 없으면 "준비 중" 카드로 표시되고
//             클릭 시 안내 팝업이 뜸.
// ============================================================

const CATEGORIES = [
  { key: "baby", label: "육아", icon: "👶" },
  { key: "calculator", label: "계산기", icon: "🧮" },
  { key: "recipe", label: "레시피", icon: "🍳" },
  { key: "game", label: "게임", icon: "🎮" },
  { key: "finance", label: "금융", icon: "💰" },
  { key: "life", label: "생활", icon: "🏠" },
  { key: "car", label: "자동차", icon: "🚗" },
  { key: "study", label: "공부", icon: "📚" },
  { key: "travel", label: "여행", icon: "✈️" },
];

const ITEMS = [
  // ---------------- 레시피 (전부 실제 작동) ----------------
  { slug: "oyakodon", category: "recipe", title: "오야코동 실전 레시피", desc: "인원수 맞춤 계량과 단계별 타이머로 만드는 일본식 닭고기 달걀덮밥", icon: "🍚", tags: ["일식", "덮밥", "닭고기"], popularity: 980, date: "2026-06-09", href: "recipe/oyakodon.html" },
  { slug: "gyudon", category: "recipe", title: "규동(소고기덮밥) 레시피", desc: "10분이면 완성되는 일본식 소고기덮밥, 인원수 맞춤 계량 지원", icon: "🐄", tags: ["일식", "덮밥", "소고기"], popularity: 860, date: "2026-06-14", href: "recipe/gyudon.html" },
  { slug: "aglio-olio", category: "recipe", title: "알리오 올리오 레시피", desc: "마늘 향 내는 불 조절과 유화 타이밍까지 잡아주는 오일 파스타", icon: "🍝", tags: ["양식", "파스타"], popularity: 740, date: "2026-06-20", href: "recipe/aglio-olio.html" },
  { slug: "steak", category: "recipe", title: "부채살 스테이크 굽기", desc: "두께별 굽는 시간과 레스팅 타이머로 완성하는 코스트코 부채살 스테이크", icon: "🥩", tags: ["양식", "스테이크", "고기"], popularity: 690, date: "2026-06-24", href: "recipe/steak.html" },
  { slug: "geunwi-garlic", category: "recipe", title: "닭근위(똥집) 마늘볶음", desc: "데친 근위를 마늘 향 가득한 팬에 바삭하게 볶아내는 술안주", icon: "🍗", tags: ["한식", "안주", "볶음"], popularity: 420, date: "2026-07-01", href: "recipe/geunwi-garlic.html" },
  { slug: "gambas", category: "recipe", title: "감바스 알 아히요", desc: "마늘·페페론치노 오일에 새우를 익히는 스페인식 타파스", icon: "🍤", tags: ["양식", "스페인", "안주"], popularity: 610, date: "2026-07-01", href: "recipe/gambas.html" },
  { slug: "kimchi-jjigae", category: "recipe", title: "돼지고기 김치찌개", desc: "신김치와 돼지고기를 볶아 끓여내는 한국인의 소울푸드", icon: "🥘", tags: ["한식", "찌개", "돼지고기"], popularity: 1120, date: "2026-07-01", href: "recipe/kimchi-jjigae.html" },
  { slug: "sundubu-jjigae", category: "recipe", title: "순두부찌개", desc: "고추기름부터 내어 얼큰하고 뽀얗게 끓이는 순두부찌개", icon: "🌶", tags: ["한식", "찌개", "매운맛"], popularity: 930, date: "2026-07-01", href: "recipe/sundubu-jjigae.html" },
  { slug: "jeyuk-bokkeum", category: "recipe", title: "백종원풍 제육볶음", desc: "양념에 재웠다가 센 불에 볶아 불맛을 살리는 매콤 제육볶음", icon: "🔥", tags: ["한식", "볶음", "돼지고기"], popularity: 1340, date: "2026-07-01", href: "recipe/jeyuk-bokkeum.html" },
  { slug: "spam-dubu-jorim", category: "recipe", title: "스팸 두부조림", desc: "노릇하게 지진 두부와 스팸을 자작하게 조리는 밥도둑 반찬", icon: "🥫", tags: ["한식", "밑반찬", "스팸"], popularity: 580, date: "2026-07-01", href: "recipe/spam-dubu-jorim.html" },
  { slug: "gyeranmari", category: "recipe", title: "계란말이", desc: "층층이 말아내는 도시락·술상 필수 기본기 반찬", icon: "🍳", tags: ["한식", "밑반찬", "달걀"], popularity: 470, date: "2026-07-01", href: "recipe/gyeranmari.html" },

  // ---------------- 게임 ----------------
  { slug: "reaction-time", category: "game", title: "반응 속도 테스트", desc: "초록불이 켜지는 순간 클릭! 나의 반응 속도를 측정해보세요.", icon: "⚡", tags: ["반사신경", "테스트"], popularity: 540, date: "2026-07-13", href: "game/reaction-time.html" },
  { slug: "2048", category: "game", title: "2048", desc: "같은 숫자 타일을 합쳐 2048을 만드는 퍼즐 게임", icon: "🔢", tags: ["퍼즐"], popularity: 310, date: "2026-07-19", href: "game/2048.html" },
  { slug: "minesweeper", category: "game", title: "지뢰찾기", desc: "숫자 힌트로 지뢰를 피해가는 클래식 퍼즐 게임", icon: "💣", tags: ["퍼즐", "클래식"], popularity: 260, date: "2026-07-19", href: "game/minesweeper.html" },

  // ---------------- 계산기 ----------------
  { slug: "bmi", category: "calculator", title: "BMI 계산기", desc: "키와 몸무게로 체질량지수(BMI)와 비만도를 바로 확인하세요.", icon: "⚖️", tags: ["건강", "체중"], popularity: 1250, date: "2026-07-19", href: "calculator/bmi.html" },
  { slug: "d-day", category: "calculator", title: "D-Day 계산기", desc: "기념일, 시험일까지 남은 날짜를 D-Day로 계산해보세요.", icon: "📅", tags: ["날짜", "기념일"], popularity: 980, date: "2026-07-19", href: "calculator/d-day.html" },
  { slug: "loan-interest", category: "calculator", title: "대출이자 계산기", desc: "상환 방식별 월 상환액을 계산합니다", icon: "🏦", tags: ["대출", "이자"], popularity: 720, date: "2026-07-19", href: "calculator/loan-interest.html" },
  { slug: "net-salary", category: "calculator", title: "연봉 실수령액 계산기", desc: "4대보험과 세금을 제외한 실제 월 수령액을 계산합니다", icon: "💵", tags: ["연봉", "세금"], popularity: 1430, date: "2026-07-19", href: "calculator/net-salary.html" },

  // ---------------- 육아 ----------------
  { slug: "baby-days", category: "baby", title: "생후일수 계산기", desc: "태어난 날짜만 입력하면 오늘까지 생후 며칠인지 계산해요.", icon: "👶", tags: ["생후일수", "신생아"], popularity: 1560, date: "2026-07-19", href: "baby/baby-days.html" },
  { slug: "vaccination", category: "baby", title: "예방접종 스케줄", desc: "월령별 국가 예방접종 일정을 한눈에 확인하세요", icon: "💉", tags: ["예방접종", "건강"], popularity: 640, date: "2026-07-19", href: "baby/vaccination.html" },
  { slug: "milk-amount", category: "baby", title: "분유량 계산기", desc: "월령과 체중에 맞는 1회 분유량을 계산합니다", icon: "🍼", tags: ["분유", "수유"], popularity: 710, date: "2026-07-19", href: "baby/milk-amount.html" },

  // ---------------- 금융 ----------------
  { slug: "severance-pay", category: "finance", title: "퇴직금 계산기", desc: "근속기간과 평균임금으로 예상 퇴직금을 계산합니다", icon: "💰", tags: ["퇴직금", "근로"], popularity: 1180, date: "2026-07-19", href: "finance/severance-pay.html" },
  { slug: "year-end-tax", category: "finance", title: "연말정산 미리보기", desc: "예상 환급액 또는 추가 납부액을 미리 계산합니다", icon: "🧾", tags: ["연말정산", "세금"], popularity: 990, date: "2026-07-19", href: "finance/year-end-tax.html" },
  { slug: "savings-interest", category: "finance", title: "적금이자 계산기", desc: "월 납입액과 금리로 만기 수령액을 계산합니다", icon: "🐖", tags: ["적금", "이자"], popularity: 650, date: "2026-07-19", href: "finance/savings-interest.html" },
  { slug: "exchange-rate", category: "finance", title: "환율 계산기", desc: "실시간 환율로 원화와 외화를 빠르게 변환합니다", icon: "💱", tags: ["환율", "외화"], popularity: 840, date: "2026-07-19", href: "finance/exchange-rate.html" },

  // ---------------- 생활 ----------------
  { slug: "jeonse-deposit", category: "life", title: "전세보증금 계산기", desc: "전세를 월세로, 월세를 전세로 환산해 비교합니다", icon: "🏠", tags: ["전세", "월세"], popularity: 780, date: "2026-07-19", href: "life/jeonse-deposit.html" },
  { slug: "management-fee-split", category: "life", title: "관리비 분담 계산기", desc: "인원과 사용량 기준으로 관리비를 나눕니다", icon: "🧮", tags: ["관리비", "정산"], popularity: 380, date: "2026-07-19", href: "life/management-fee-split.html" },
  { slug: "moving-cost", category: "life", title: "이사비용 계산기", desc: "짐의 양과 이동 거리로 예상 이사비용을 계산합니다", icon: "📦", tags: ["이사", "비용"], popularity: 520, date: "2026-07-19", href: "life/moving-cost.html" },

  // ---------------- 자동차 ----------------
  { slug: "car-tax", category: "car", title: "자동차세 계산기", desc: "배기량과 차령으로 자동차세를 계산합니다", icon: "🚗", tags: ["자동차세", "세금"], popularity: 720, date: "2026-07-19", href: "car/car-tax.html" },
  { slug: "fuel-cost", category: "car", title: "유류비 계산기", desc: "주행 거리와 연비로 예상 유류비를 계산합니다", icon: "⛽", tags: ["유류비", "연비"], popularity: 610, date: "2026-07-19", href: "car/fuel-cost.html" },
  { slug: "lease-vs-loan", category: "car", title: "리스 vs 할부 비교", desc: "차량 구매 시 리스와 할부 중 유리한 쪽을 비교합니다", icon: "📊", tags: ["리스", "할부"], popularity: 430, date: "2026-07-19", href: "car/lease-vs-loan.html" },

  // ---------------- 공부 ----------------
  { slug: "pomodoro", category: "study", title: "포모도로 타이머", desc: "25분 집중 + 5분 휴식으로 집중력을 관리하세요", icon: "🍅", tags: ["집중", "타이머"], popularity: 900, date: "2026-07-19", href: "study/pomodoro.html" },
  { slug: "gpa-calculator", category: "study", title: "학점 계산기", desc: "과목별 학점과 등급으로 평점평균(GPA)을 계산합니다", icon: "🎓", tags: ["학점", "GPA"], popularity: 560, date: "2026-07-19", href: "study/gpa-calculator.html" },
  { slug: "typing-practice", category: "study", title: "타자 연습", desc: "짧은 문장으로 타자 속도(타/분)를 측정합니다", icon: "⌨️", tags: ["타자", "연습"], popularity: 410, date: "2026-07-19", href: "study/typing-practice.html" },

  // ---------------- 여행 ----------------
  { slug: "packing-checklist", category: "travel", title: "짐싸기 체크리스트", desc: "여행 기간과 목적지에 맞는 준비물 체크리스트", icon: "🧳", tags: ["체크리스트", "준비물"], popularity: 460, date: "2026-07-19", href: "travel/packing-checklist.html" },
  { slug: "time-difference", category: "travel", title: "시차 계산기", desc: "여행지와 한국의 시차를 바로 계산합니다", icon: "🕐", tags: ["시차", "해외"], popularity: 390, date: "2026-07-19", href: "travel/time-difference.html" },
  { slug: "travel-budget", category: "travel", title: "여행 예산 계산기", desc: "일정과 인원에 맞는 예상 여행 경비를 계산합니다", icon: "💳", tags: ["예산", "경비"], popularity: 340, date: "2026-07-19", href: "travel/travel-budget.html" },
];

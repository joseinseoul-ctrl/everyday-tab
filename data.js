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
  { key: "recipe", label: "레시피", icon: "🍳" },
  { key: "realestate", label: "부동산", icon: "🏢" },
  { key: "redevelopment", label: "재개발재건축", icon: "🏗️" },
  { key: "finance", label: "금융", icon: "💰" },
  { key: "calculator", label: "계산기", icon: "🧮" },
  { key: "life", label: "생활", icon: "🏠" },
  { key: "baby", label: "육아", icon: "👶" },
  { key: "car", label: "자동차", icon: "🚗" },
  { key: "travel", label: "여행", icon: "✈️" },
  { key: "study", label: "공부", icon: "📚" },
  { key: "game", label: "게임", icon: "🎮" },
];

const ITEMS = [
  // ---------------- 레시피 (전부 실제 작동) ----------------
  { slug: "oyakodon", category: "recipe", title: "오야코동 실전 레시피", desc: "치킨너겟 활용법과 가쓰오부시 육수 우려내는 법까지 담은 오야코동 레시피", icon: "🍚", tags: ["일식", "덮밥", "닭고기"], popularity: 980, date: "2026-07-22", href: "recipe/oyakodon.html" },
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
  { slug: "taco", category: "recipe", title: "타코", desc: "다진 소고기와 아삭한 야채를 또띠아에 싸 먹는 멕시칸 타코", icon: "🌮", tags: ["멕시칸", "타코", "소고기"], popularity: 560, date: "2026-07-24", href: "recipe/taco.html" },
  { slug: "chimichanga", category: "recipe", title: "치미창가", desc: "속을 채운 또띠아를 바삭하게 튀겨내는 멕시칸 치미창가", icon: "🌯", tags: ["멕시칸", "치미창가", "튀김"], popularity: 380, date: "2026-07-24", href: "recipe/chimichanga.html" },
  { slug: "butadon", category: "recipe", title: "부타동", desc: "달콤짭짤한 소스에 졸인 돼지고기와 양파를 밥 위에 올리는 일본식 덮밥", icon: "🍚", tags: ["일식", "덮밥", "돼지고기"], popularity: 610, date: "2026-07-24", href: "recipe/butadon.html" },
  { slug: "sakedon", category: "recipe", title: "사케동", desc: "신선한 연어를 간장 소스에 살짝 절여 밥 위에 올리는 일본식 회덮밥", icon: "🍣", tags: ["일식", "덮밥", "연어"], popularity: 640, date: "2026-07-24", href: "recipe/sakedon.html" },
  { slug: "chawanmushi", category: "recipe", title: "일본식 계란찜", desc: "가쓰오부시 육수로 부드럽게 쪄내는 일본식 계란찜", icon: "🥚", tags: ["일식", "계란찜", "가쓰오부시"], popularity: 430, date: "2026-07-24", href: "recipe/chawanmushi.html" },
  { slug: "kkanpunggi", category: "recipe", title: "깐풍기", desc: "바삭하게 튀긴 닭고기를 새콤달콤한 소스에 버무리는 중화요리", icon: "🍗", tags: ["중화요리", "닭고기", "튀김"], popularity: 720, date: "2026-07-24", href: "recipe/kkanpunggi.html" },
  { slug: "mapo-tofu", category: "recipe", title: "마파두부", desc: "두반장의 감칠맛과 매콤함이 어우러진 사천식 두부 요리", icon: "🌶️", tags: ["중화요리", "두부", "돼지고기"], popularity: 650, date: "2026-07-24", href: "recipe/mapo-tofu.html" },
  { slug: "sushi", category: "recipe", title: "스시", desc: "스시라이스부터 직접 만드는 기본 니기리·마키 스시", icon: "🍱", tags: ["일식", "스시", "초밥"], popularity: 590, date: "2026-07-24", href: "recipe/sushi.html" },

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
  { slug: "growth-percentile", category: "baby", title: "성장 백분위 계산기", desc: "아기 몸무게와 키가 또래 중 몇 백분위인지 참고용으로 계산합니다", icon: "📊", tags: ["성장", "백분위"], popularity: 880, date: "2026-07-24", href: "baby/growth-percentile.html" },
  { slug: "weaning-stage", category: "baby", title: "이유식 단계 계산기", desc: "개월수로 이유식 초기·중기·후기·완료기 단계와 급여 가이드를 확인합니다", icon: "🥄", tags: ["이유식", "월령"], popularity: 760, date: "2026-07-24", href: "baby/weaning-stage.html" },
  { slug: "sleep-guide", category: "baby", title: "월령별 수면시간 가이드", desc: "개월수별 권장 총 수면시간과 낮잠 횟수를 참고 가이드로 보여줍니다", icon: "😴", tags: ["수면", "월령"], popularity: 640, date: "2026-07-24", href: "baby/sleep-guide.html" },
  { slug: "milestone-checklist", category: "baby", title: "월령별 발달단계 체크리스트", desc: "월령 구간별로 흔히 나타나는 발달 이정표를 참고용 체크리스트로 확인합니다", icon: "✅", tags: ["발달", "체크리스트"], popularity: 700, date: "2026-07-24", href: "baby/milestone-checklist.html" },

  // ---------------- 금융 ----------------
  { slug: "severance-pay", category: "finance", title: "퇴직금 계산기", desc: "근속기간과 평균임금으로 예상 퇴직금을 계산합니다", icon: "💰", tags: ["퇴직금", "근로"], popularity: 1180, date: "2026-07-19", href: "finance/severance-pay.html" },
  { slug: "year-end-tax", category: "finance", title: "연말정산 미리보기", desc: "예상 환급액 또는 추가 납부액을 미리 계산합니다", icon: "🧾", tags: ["연말정산", "세금"], popularity: 990, date: "2026-07-19", href: "finance/year-end-tax.html" },
  { slug: "savings-interest", category: "finance", title: "적금이자 계산기", desc: "월 납입액과 금리로 만기 수령액을 계산합니다", icon: "🐖", tags: ["적금", "이자"], popularity: 650, date: "2026-07-19", href: "finance/savings-interest.html" },
  { slug: "exchange-rate", category: "finance", title: "환율 계산기", desc: "실시간 환율로 원화와 외화를 빠르게 변환합니다", icon: "💱", tags: ["환율", "외화"], popularity: 840, date: "2026-07-19", href: "finance/exchange-rate.html" },

  // ---------------- 생활 ----------------
  { slug: "jeonse-deposit", category: "life", title: "전세보증금 계산기", desc: "전세를 월세로, 월세를 전세로 환산해 비교합니다", icon: "🏠", tags: ["전세", "월세"], popularity: 780, date: "2026-07-19", href: "life/jeonse-deposit.html" },
  { slug: "management-fee-split", category: "life", title: "관리비 분담 계산기", desc: "인원과 사용량 기준으로 관리비를 나눕니다", icon: "🧮", tags: ["관리비", "정산"], popularity: 380, date: "2026-07-19", href: "life/management-fee-split.html" },
  { slug: "moving-cost", category: "life", title: "이사비용 계산기", desc: "짐의 양과 이동 거리로 예상 이사비용을 계산합니다", icon: "📦", tags: ["이사", "비용"], popularity: 520, date: "2026-07-19", href: "life/moving-cost.html" },
  { slug: "lotto-generator", category: "life", title: "로또 번호 생성기", desc: "1~45 중 6개 번호를 무작위로 뽑아주는 로또 번호 생성기입니다", icon: "🎱", tags: ["로또", "번호생성"], popularity: 700, date: "2026-07-23", href: "life/lotto-generator.html" },

  // ---------------- 자동차 ----------------
  { slug: "car-tax", category: "car", title: "자동차세 계산기", desc: "배기량과 차령으로 자동차세를 계산합니다", icon: "🚗", tags: ["자동차세", "세금"], popularity: 720, date: "2026-07-19", href: "car/car-tax.html" },
  { slug: "fuel-cost", category: "car", title: "유류비 계산기", desc: "주행 거리와 연비로 예상 유류비를 계산합니다", icon: "⛽", tags: ["유류비", "연비"], popularity: 610, date: "2026-07-19", href: "car/fuel-cost.html" },
  { slug: "lease-vs-loan", category: "car", title: "리스 vs 할부 비교", desc: "차량 구매 시 리스와 할부 중 유리한 쪽을 비교합니다", icon: "📊", tags: ["리스", "할부"], popularity: 430, date: "2026-07-19", href: "car/lease-vs-loan.html" },

  // ---------------- 공부 ----------------
  { slug: "pomodoro", category: "study", title: "포모도로 타이머", desc: "25분 집중 + 5분 휴식으로 집중력을 관리하세요", icon: "🍅", tags: ["집중", "타이머"], popularity: 900, date: "2026-07-19", href: "study/pomodoro.html" },
  { slug: "gpa-calculator", category: "study", title: "학점 계산기", desc: "과목별 학점과 등급으로 평점평균(GPA)을 계산합니다", icon: "🎓", tags: ["학점", "GPA"], popularity: 560, date: "2026-07-19", href: "study/gpa-calculator.html" },
  { slug: "typing-practice", category: "study", title: "타자 연습", desc: "짧은 문장으로 타자 속도(타/분)를 측정합니다", icon: "⌨️", tags: ["타자", "연습"], popularity: 410, date: "2026-07-19", href: "study/typing-practice.html" },

  // ---------------- 여행 ----------------
  { slug: "packing-checklist", category: "travel", title: "나라별 여행 체크리스트", desc: "일본·미국·중국·태국·유럽 등 나라별 전압·비자·준비물 체크리스트", icon: "🧳", tags: ["체크리스트", "해외여행"], popularity: 620, date: "2026-07-22", href: "travel/packing-checklist.html" },
  { slug: "time-difference", category: "travel", title: "시차 계산기", desc: "여행지와 한국의 시차를 바로 계산합니다", icon: "🕐", tags: ["시차", "해외"], popularity: 390, date: "2026-07-19", href: "travel/time-difference.html" },
  { slug: "travel-budget", category: "travel", title: "여행 예산 계산기", desc: "일정과 인원에 맞는 예상 여행 경비를 계산합니다", icon: "💳", tags: ["예산", "경비"], popularity: 340, date: "2026-07-19", href: "travel/travel-budget.html" },

  // ---------------- 부동산투자 ----------------
  { slug: "brokerage-fee", category: "realestate", title: "부동산 중개수수료 계산기", desc: "매매·전세·월세 거래금액에 따른 공인중개사 중개수수료 상한액을 계산합니다", icon: "🤝", tags: ["중개수수료", "복비"], popularity: 810, date: "2026-07-23", href: "realestate/brokerage-fee.html" },
  { slug: "real-estate-yield", category: "realestate", title: "부동산 수익률 계산기", desc: "매매가·보증금·월세·대출로 표면·실질 수익률을 계산합니다", icon: "🏢", tags: ["수익률", "임대"], popularity: 720, date: "2026-07-20", href: "realestate/real-estate-yield.html" },
  { slug: "compound-yield", category: "realestate", title: "부동산 복리 수익률 계산기", desc: "매입가·대출·월세·매각가로 임대수익과 시세차익을 합친 연복리 수익률을 계산합니다", icon: "📐", tags: ["복리수익률", "매각차익"], popularity: 560, date: "2026-07-21", href: "realestate/compound-yield.html" },
  { slug: "gap-investment", category: "realestate", title: "갭투자 수익률 계산기", desc: "매매가와 전세보증금 차이로 실투자금과 예상 수익률을 계산합니다", icon: "📈", tags: ["갭투자", "시세차익"], popularity: 680, date: "2026-07-20", href: "realestate/gap-investment.html" },
  { slug: "officetel-investment", category: "realestate", title: "오피스텔 실투자금 계산기", desc: "취득세·중개수수료까지 포함한 실제 투자금을 계산합니다", icon: "🏙️", tags: ["오피스텔", "실투자금"], popularity: 540, date: "2026-07-20", href: "realestate/officetel-investment.html" },
  { slug: "wolse-vs-jeonse-yield", category: "realestate", title: "월세 vs 전세 수익비교", desc: "임대인 입장에서 전세와 월세 중 어느 쪽이 유리한지 비교합니다", icon: "⚖️", tags: ["월세", "전세"], popularity: 470, date: "2026-07-20", href: "realestate/wolse-vs-jeonse-yield.html" },
  { slug: "cash-flow", category: "realestate", title: "현금흐름(Cash Flow) 계산기", desc: "월세 수입에서 대출상환·관리비를 뺀 실제 월 현금흐름을 계산합니다", icon: "💵", tags: ["현금흐름", "임대수익"], popularity: 610, date: "2026-07-20", href: "realestate/cash-flow.html" },
  { slug: "jeonse-ratio-risk", category: "realestate", title: "전세가율 위험도 계산기", desc: "매매가 대비 전세가율로 깡통전세 위험도를 확인합니다", icon: "🚨", tags: ["전세가율", "깡통전세"], popularity: 590, date: "2026-07-20", href: "realestate/jeonse-ratio-risk.html" },
  { slug: "reverse-jeonse-risk", category: "realestate", title: "역전세 위험 계산기", desc: "계약 당시 전세금과 현재 시세를 비교해 반환 위험을 계산합니다", icon: "📉", tags: ["역전세", "전세반환"], popularity: 520, date: "2026-07-20", href: "realestate/reverse-jeonse-risk.html" },
  { slug: "rate-stress-test", category: "realestate", title: "금리 상승 스트레스 계산기", desc: "금리가 오르면 월 대출상환액이 얼마나 늘어나는지 계산합니다", icon: "📊", tags: ["금리", "대출"], popularity: 560, date: "2026-07-20", href: "realestate/rate-stress-test.html" },
  { slug: "dsr-calculator", category: "realestate", title: "DSR 한도 초과 경고 계산기", desc: "소득 대비 총부채원리금상환비율(DSR)이 한도를 넘는지 확인합니다", icon: "⚠️", tags: ["DSR", "대출한도"], popularity: 630, date: "2026-07-20", href: "realestate/dsr-calculator.html" },
  { slug: "vacancy-risk", category: "realestate", title: "공실 위험 계산기", desc: "공실 기간 동안 발생하는 손실과 버틸 수 있는 기간을 계산합니다", icon: "🏚️", tags: ["공실", "임대리스크"], popularity: 440, date: "2026-07-20", href: "realestate/vacancy-risk.html" },
  { slug: "property-tax-simulator", category: "realestate", title: "보유세 증가 시뮬레이터", desc: "공시가격 상승에 따른 재산세 증가를 연도별로 시뮬레이션합니다", icon: "🧾", tags: ["재산세", "보유세"], popularity: 500, date: "2026-07-20", href: "realestate/property-tax-simulator.html" },
  { slug: "upgrade-calculator", category: "realestate", title: "갈아타기 계산기", desc: "새 집으로 갈아탈 때 필요한 현금과 월 상환액 변화를 계산합니다", icon: "🔁", tags: ["갈아타기", "이사"], popularity: 590, date: "2026-07-21", href: "realestate/upgrade-calculator.html" },

  // ---------------- 부동산투자 글(SEO) ----------------
  { slug: "jeonse-ratio-2026", category: "realestate", title: "2026년, 전세가율 몇 %부터 위험할까?", desc: "전세가율이 몇 %부터 위험한지, 구간별 해석과 계약 전 확인해야 할 것들을 정리했습니다.", icon: "📰", tags: ["전세가율", "깡통전세"], popularity: 610, date: "2026-07-21", href: "realestate/articles/jeonse-ratio-2026.html" },
  { slug: "reverse-jeonse-guide", category: "realestate", title: "역전세가 발생하면 집주인은 얼마를 준비해야 하나?", desc: "역전세가 왜 생기는지, 집주인이 준비해야 할 반환 자금은 어떻게 계산하는지 정리했습니다.", icon: "📰", tags: ["역전세", "전세반환"], popularity: 580, date: "2026-07-21", href: "realestate/articles/reverse-jeonse-guide.html" },
  { slug: "officetel-1eok-guide", category: "realestate", title: "오피스텔 실투자금 1억으로 가능한 지역은?", desc: "오피스텔 투자 시 실투자금을 구성하는 요소와, 1억 원대 투자 시 확인해야 할 조건을 정리했습니다.", icon: "📰", tags: ["오피스텔", "실투자금"], popularity: 540, date: "2026-07-21", href: "realestate/articles/officetel-1eok-guide.html" },
  { slug: "villa-land-share", category: "realestate", title: "빌라 대지지분이 중요한 진짜 이유", desc: "빌라의 대지지분이 왜 중요한지, 확인 방법과 재개발 사업성과의 관계를 설명합니다.", icon: "📰", tags: ["빌라", "대지지분", "재개발"], popularity: 470, date: "2026-07-21", href: "realestate/articles/villa-land-share.html" },
  { slug: "rate-increase-2percent", category: "realestate", title: "금리가 2% 오르면 월 상환액이 얼마나 늘어날까?", desc: "대출 금리가 2%p 오르면 월 상환액이 실제로 얼마나 늘어나는지 예시로 계산해봤습니다.", icon: "📰", tags: ["금리", "대출"], popularity: 600, date: "2026-07-21", href: "realestate/articles/rate-increase-2percent.html" },
  { slug: "dsr-rejection-reason", category: "realestate", title: "DSR 때문에 대출이 거절되는 핵심 원인", desc: "DSR 규제로 대출이 거절되는 대표적인 이유와, 한도를 확보하는 방법을 정리했습니다.", icon: "📰", tags: ["DSR", "대출한도"], popularity: 650, date: "2026-07-21", href: "realestate/articles/dsr-rejection-reason.html" },
  { slug: "apartment-upgrade-cash", category: "realestate", title: "아파트 갈아타기, 현금이 얼마나 필요할까?", desc: "아파트를 갈아탈 때 필요한 현금을 계산하는 방법과, 미리 확인해야 할 것들을 정리했습니다.", icon: "📰", tags: ["갈아타기", "이사"], popularity: 560, date: "2026-07-21", href: "realestate/articles/apartment-upgrade-cash.html" },
  { slug: "redevelopment-villa-guide", category: "realestate", title: "재개발 사업성 좋은 빌라 고르는 법", desc: "재개발 사업성이 좋은 빌라를 고를 때 확인해야 할 기준과, 초기 투자 시 주의할 점을 설명합니다.", icon: "📰", tags: ["재개발", "빌라"], popularity: 450, date: "2026-07-21", href: "realestate/articles/redevelopment-villa-guide.html" },
  { slug: "vacancy-3months-guide", category: "realestate", title: "공실 3개월이면 손해? 임대 공실 대비하는 법", desc: "임대 공실이 발생했을 때 실제 손실 규모를 계산하는 법과, 공실을 줄이는 방법을 정리했습니다.", icon: "📰", tags: ["공실", "임대리스크"], popularity: 420, date: "2026-07-21", href: "realestate/articles/vacancy-3months-guide.html" },
  { slug: "property-tax-by-house-count", category: "realestate", title: "보유세, 1주택자와 다주택자는 이렇게 다르다", desc: "1주택자와 다주택자의 재산세·종합부동산세 차이를 설명하고, 확인해야 할 기준을 정리했습니다.", icon: "📰", tags: ["재산세", "종합부동산세", "다주택자"], popularity: 490, date: "2026-07-21", href: "realestate/articles/property-tax-by-house-count.html" },

  // ---------------- 재개발재건축 ----------------
  { slug: "consent-rate", category: "redevelopment", title: "동의율 계산기", desc: "소유자 수·토지면적 기준 동의율을 계산해 조합설립 요건 충족 여부를 확인합니다", icon: "✅", tags: ["동의율", "조합설립"], popularity: 560, date: "2026-07-22", href: "redevelopment/consent-rate.html" },
  { slug: "rights-base-date-check", category: "redevelopment", title: "권리산정기준일 체크", desc: "취득일과 권리산정기준일을 비교해 현금청산 위험 여부를 참고용으로 확인합니다", icon: "📅", tags: ["권리산정기준일", "현금청산"], popularity: 620, date: "2026-07-22", href: "redevelopment/rights-base-date-check.html" },
  { slug: "proportion-rate-estimator", category: "redevelopment", title: "추정 비례율 계산기", desc: "종전자산평가액 기반으로 추정 비례율과 예상 권리가액을 계산합니다", icon: "📐", tags: ["비례율", "종전자산"], popularity: 480, date: "2026-07-22", href: "redevelopment/proportion-rate-estimator.html" },
  { slug: "additional-contribution", category: "redevelopment", title: "추가분담금 계산기", desc: "평형 변경 시 예상 추가분담금(또는 환급금)을 계산합니다", icon: "💸", tags: ["추가분담금", "권리가액"], popularity: 540, date: "2026-07-22", href: "redevelopment/additional-contribution.html" },
  { slug: "move-in-right-yield", category: "redevelopment", title: "입주권 수익률 계산기", desc: "매입가와 예상 권리가액 대비 입주권 예상 수익률을 계산합니다", icon: "📈", tags: ["입주권", "수익률"], popularity: 570, date: "2026-07-22", href: "redevelopment/move-in-right-yield.html" },
  { slug: "feasibility-score", category: "redevelopment", title: "사업성 점수 계산기", desc: "노후도, 용적률, 역세권 등을 종합해 사업성 점수를 계산합니다", icon: "📋", tags: ["사업성", "노후도"], popularity: 500, date: "2026-07-22", href: "redevelopment/feasibility-score.html" },
  { slug: "urban-complex-diagnosis", category: "redevelopment", title: "민간도심복합개발 가능성 진단", desc: "접도, 면적, 노후도를 입력해 민간도심복합개발 검토 가능성을 진단합니다", icon: "🏙️", tags: ["도심복합개발"], popularity: 380, date: "2026-07-22", href: "redevelopment/urban-complex-diagnosis.html" },
  { slug: "move-in-eligibility-check", category: "redevelopment", title: "입주권 가능 여부 진단", desc: "취득 시점과 지분쪼개기 여부 등을 체크해 입주권 가능 여부를 진단합니다", icon: "🔍", tags: ["입주권", "현금청산"], popularity: 530, date: "2026-07-22", href: "redevelopment/move-in-eligibility-check.html" },
  { slug: "redevelopment-fair-price", category: "redevelopment", title: "재개발 적정 매수가 계산기", desc: "목표 수익률 기준으로 적정 매수가 상한선을 계산합니다", icon: "🎯", tags: ["적정매수가", "재개발"], popularity: 460, date: "2026-07-22", href: "redevelopment/redevelopment-fair-price.html" },
  { slug: "feasibility-speed-score", category: "redevelopment", title: "사업성+추진속도 점수", desc: "사업성 점수와 진행 단계(추진속도)를 합쳐 종합 참고 점수를 계산합니다", icon: "🚀", tags: ["사업성", "추진속도"], popularity: 410, date: "2026-07-22", href: "redevelopment/feasibility-speed-score.html" },
];

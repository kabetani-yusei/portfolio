export type Account = {
  name: string;
  url: string;
  handle?: string;
};

export type Achievement = {
  title: string;
  date?: string;
  tags?: string[];
};

export type TimelineEntry = {
  period: string;
  detail: string;
};

export const profile = {
  name: "壁谷 悠成",
  englishName: "KABETANI Yusei",
  role: "名古屋大学大学院 情報学研究科 数理情報学専攻 修士1年",
  research: "組合せ最適化",
  intro:
    "組合せ最適化を研究しています。競技プログラミング、機械学習コンペ、ハッカソンに参加しています。",
  affiliations: [
    "アプリ開発団体 jack",
    "競技プログラミングサークル NUCODER",
  ],
  accounts: [
    { name: "GitHub", url: "https://github.com/kabetani-yusei", handle: "kabetani-yusei" },
    { name: "X", url: "https://x.com/melo_atc", handle: "@melo_atc" },
    { name: "AtCoder", url: "https://atcoder.jp/users/melo25", handle: "melo25" },
    { name: "atmaCup", url: "https://www.guruguru.science/wally0593", handle: "wally0593" },
    {
      name: "SIGNATE",
      url: "https://user.competition.signate.jp/ja/user/?user=5a67c126a1d648f88ce4b580c4abf31a",
    },
    { name: "Qiita", url: "https://qiita.com/melo_atc", handle: "@melo_atc" },
    {
      name: "jackブログ",
      url: "https://www.jackapp.jp/blog/writer/%E3%82%81%E3%82%8D",
    },
  ] satisfies Account[],
  email: "yuusei0565(at)gmail.com",
  skills: ["Python", "TypeScript", "Ruby", "C++", "FastAPI", "React"],
  certifications: [
    "応用情報技術者",
    "基本情報技術者",
    "E資格（JDLA）",
    "G検定（JDLA）",
    "TOEIC 805点",
    "数学検定準1級",
    "普通自動車第一種運転免許（AT限定）",
  ],
};

export const achievements: Achievement[] = [
  { title: "令和6年度情報学部成績優秀者", tags: ["Academic"] },
  {
    title:
      "JPHACKS2025 AwardDay進出、審査員特別賞、PASONAスポンサー賞、サイバーエージェント賞、株式会社ハウテレビジョン賞",
    date: "2025年11月",
    tags: ["Hackathon"],
  },
  {
    title: "JPHACKS2024 AwardDay進出、三菱重工スポンサー賞、NTTドコモスポンサー賞",
    date: "2024年",
    tags: ["Hackathon"],
  },
  {
    title: "技育博2025 Vol.5 CARTA HOLDINGS賞 / ウイングアーク１ｓｔ賞",
    tags: ["Hackathon"],
  },
  {
    title: "atmaCup #16 in collaboration with RECRUIT 学生10位 / 全体43位",
    tags: ["Data Science"],
  },
  {
    title: "atmaCup #20 in collaboration with Udemy 初心者枠2位 / 全体10位",
    tags: ["Data Science"],
  },
  {
    title: "#21 atmaCup in collaboration with Elith 学生8位 / 全体41位",
    tags: ["Data Science"],
  },
  { title: "SIGNATE MUFG DATA Science Basic Camp 1位", tags: ["Data Science"] },
  { title: "SIGNATE × TECH OCEAN Student Cup 2025 3位", tags: ["Data Science"] },
  {
    title: "第4回空戦AIチャレンジ オープン部門10位 / ユース部門5位",
    tags: ["Data Science"],
  },
  {
    title:
      "リヴァンプ×Nishika LLMコンペティション 大手グローバル小売メーカーの商品PR文生成 5位",
    tags: ["Data Science"],
  },
  {
    title: "AtCoder Heuristic Contest 055 学生26位 / 総合82位",
    tags: ["Programming"],
  },
  { title: "Fixstars高速化コンテスト2026 18位", tags: ["Programming"] },
  { title: "DECC2025 本戦22位", tags: ["Programming"] },
];

export const experiences: Achievement[] = [
  { title: "KOSENセキュリティコンテスト2022 12位", tags: ["Security"] },
  { title: "KOSENセキュリティコンテスト2023 9位", tags: ["Security"] },
  { title: "ALGORI2024 戦略賞ノミネート", tags: ["Programming"] },
  { title: "東大松尾研 GCI Winter 修了", tags: ["Data Science"] },
  { title: "DL基礎講座 修了", tags: ["Data Science"] },
  { title: "将棋ウォーズ 3段", tags: ["Shogi"] },
  { title: "全国高専大会 3位（将棋・3年冬）", tags: ["Shogi"] },
  { title: "令和5年度 中部近畿高専将棋大会 Aリーグ4位", tags: ["Shogi"] },
  { title: "全国高専大会 優勝（ハンドボール・4年夏）", tags: ["Handball"] },
  { title: "全国高専大会 準優勝（ハンドボール・5年夏）", tags: ["Handball"] },
  {
    title: "第10回デンソーコードコンテスト 学生3位 / 全体4位",
    tags: ["Programming"],
  },
  {
    title: "第5回デンソークラウドコンテスト 全体3位（チーム）",
    tags: ["Programming"],
  },
  { title: "jackHack2024 優勝", tags: ["Hackathon"] },
  {
    title:
      "jACK (jack AI competition for Koikoi) 一発部門最優秀賞 / 総当たり部門優秀賞 / スポンサー特別賞",
    tags: ["Data Science"],
  },
  { title: "jackHack2025 優勝", tags: ["Hackathon"] },
  {
    title: "コヨーテAI大会 総合優勝、複数回対戦部門優勝、jack賞、c0de賞",
    tags: ["Data Science"],
  },
  { title: "技育CAMP 2025 vol.7 努力賞", date: "2025年8月", tags: ["Hackathon"] },
  {
    title: "Track AIが書いたコード vs 人間が書いたコード 学生5位",
    tags: ["Data Science"],
  },
];

export const timeline: TimelineEntry[] = [
  { period: "2025年春", detail: "DL基礎講座 2025年春 修了" },
  {
    period: "2024年冬",
    detail: "GCI 2024 Winter 修了",
  },
  {
    period: "2024年2月〜",
    detail: "株式会社マップフォー Sensing & Perception アルバイト",
  },
  {
    period: "2026年4月",
    detail: "名古屋大学大学院 情報学研究科 数理情報学専攻 入学",
  },
  {
    period: "2026年3月",
    detail: "名古屋大学 情報学部 自然情報学科 卒業",
  },
  { period: "2024年4月", detail: "名古屋大学 情報学部 自然情報学科 編入学" },
  { period: "2024年3月", detail: "豊田高専 情報工学科 卒業" },
  { period: "2019年4月", detail: "豊田高専 情報工学科 入学" },
];

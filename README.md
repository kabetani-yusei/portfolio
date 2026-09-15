# Portfolio — 壁谷 悠成 / KABETANI Yusei

ポートフォリオサイトです

🔗 **https://portfolio-kabetani-yusei.vercel.app/**

## Tech Stack

| 領域 | 使用技術 |
| --- | --- |
| フレームワーク | Next.js 16（App Router） / React 19 |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 |
| アニメーション | Framer Motion |
| アイコン | lucide-react / react-icons |
| ホスティング | Vercel |
| パッケージ管理 | pnpm |

## Getting Started

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

その他のコマンド:

```bash
pnpm build    # 本番ビルド
pnpm start    # ビルド成果物を起動
pnpm lint     # ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # メタデータ・OGP・JSON-LD（Person）
│   ├── page.tsx        # セクションの組み立て
│   ├── sitemap.ts      # sitemap.xml
│   └── robots.ts       # robots.txt
├── components/         # Hero / About / Skills / Achievements / Experience / Timeline / Accounts / Footer
└── data/
    └── profile.ts      # サイトに表示する全データ（唯一の情報源）
content/
└── portfolio.md        # プロフィール原稿（profile.ts のもと）
```

## 内容の更新方法

表示されるテキストはすべて `src/data/profile.ts` に集約されています。
実績やアカウントを足すときは、まず `content/portfolio.md` に原稿を追記し、
同じ内容を `src/data/profile.ts` の各配列に反映してください。

| 更新したいもの | 編集場所 |
| --- | --- |
| プロフィール・所属・資格 | `profile` |
| 各種アカウント（JSON-LD の `sameAs` にも自動反映） | `profile.accounts` |
| 受賞・実績 | `achievements` |
| 活動・経験 | `experiences` |
| 学歴・職歴 | `timeline` |

`achievements` / `experiences` の `tags` は、そのままセクション内の絞り込みボタンになります。

## SEO

- `layout.tsx` に title / description / keywords / OpenGraph / Twitter Card を定義
- `schema.org` の `Person` を JSON-LD で出力（`sameAs` は `profile.accounts` から生成）
- `sitemap.xml` と `robots.txt` を App Router で生成

## Deploy

`main` への push で Vercel が自動デプロイします。

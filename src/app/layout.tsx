import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const heading = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const siteUrl = "https://portfolio-kabetani-yusei.vercel.app";
const siteName = "壁谷悠成（かべたにゆうせい）ポートフォリオ";
const description =
  "壁谷悠成（かべたに ゆうせい / Yusei Kabetani）のポートフォリオサイト。名古屋大学大学院で組合せ最適化を研究。競技プログラミング（AtCoder 黄）、機械学習コンペ（SIGNATE Grandmaster）、ハッカソンでの実績を紹介します。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "壁谷悠成（かべたにゆうせい）| ポートフォリオ",
    template: "%s | 壁谷悠成（かべたにゆうせい）",
  },
  description,
  keywords: [
    "壁谷悠成",
    "壁谷 悠成",
    "かべたにゆうせい",
    "かべたに ゆうせい",
    "Yusei Kabetani",
    "KABETANI Yusei",
    "壁谷",
    "かべたに",
  ],
  authors: [{ name: "壁谷悠成" }],
  creator: "壁谷悠成",
  verification: {
    google: "kiHl5opK3b3FtQT7KL4OeEg3z6oQgI2SHIB8odJFbtM",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    locale: "ja_JP",
    url: siteUrl,
    siteName,
    title: "壁谷悠成（かべたにゆうせい）| ポートフォリオ",
    description,
    images: [
      {
        url: "/user.jpg",
        width: 400,
        height: 400,
        alt: "壁谷悠成（かべたにゆうせい）",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "壁谷悠成（かべたにゆうせい）| ポートフォリオ",
    description,
    images: ["/user.jpg"],
    creator: "@melo_atc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "壁谷 悠成",
  alternateName: [
    "壁谷悠成",
    "かべたに ゆうせい",
    "かべたにゆうせい",
    "Yusei Kabetani",
    "KABETANI Yusei",
  ],
  url: siteUrl,
  image: `${siteUrl}/user.jpg`,
  jobTitle: profile.role,
  description: profile.intro,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "名古屋大学大学院 情報学研究科",
  },
  knowsAbout: [
    "組合せ最適化",
    "競技プログラミング",
    "機械学習",
    "データサイエンス",
  ],
  sameAs: profile.accounts.map((account) => account.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${heading.variable} ${body.variable} bg-white antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

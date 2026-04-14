import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Yusei Kabetani | Portfolio",
  description:
    "壁谷悠成のポートフォリオサイト。組合せ最適化の研究、ハッカソン・コンペティションでの実績を紹介します。",
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
        {children}
      </body>
    </html>
  );
}

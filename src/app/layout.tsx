import type { Metadata } from "next";
import { Noto_Sans_JP, Space_Grotesk } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import "./globals.css";

const heading = Space_Grotesk({
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
    "壁谷悠成 (Kabetani Yusei) のポートフォリオ。組合せ最適化を軸にした研究、ハッカソンやコンテストでの実績、タイムラインを紹介します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <div className="min-h-screen bg-slate-950 text-slate-50">
          <div className="mx-auto max-w-5xl px-5 pb-14">
            <NavBar />
            <main className="flex flex-col gap-10">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

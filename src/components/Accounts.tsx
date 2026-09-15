import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";
import { SiGithub, SiKaggle, SiQiita, SiX } from "react-icons/si";
import { profile } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

/** Simple Icons に収録されているサービスはベクターアイコンを使う */
const accountIcons: Record<string, IconType> = {
  GitHub: SiGithub,
  X: SiX,
  Kaggle: SiKaggle,
  Qiita: SiQiita,
};

/**
 * Simple Icons に無いサービスは各公式サイトのファビコンを public/icons に取り込んで使う。
 * fullBleed: ロゴが背景色込みの正方形で、タイル全面に敷いた方が自然なもの
 */
const accountLogos: Record<string, { src: string; fullBleed?: boolean }> = {
  AtCoder: { src: "/icons/atcoder.png" },
  atmaCup: { src: "/icons/atmacup.png", fullBleed: true },
  SIGNATE: { src: "/icons/signate.png" },
  "jackブログ": { src: "/icons/jack.png", fullBleed: true },
};

export function Accounts() {
  return (
    <section id="accounts" className="scroll-mt-20 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading label="Accounts" title="各種アカウント" />
        </FadeIn>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profile.accounts.map((account, i) => {
            const Icon = accountIcons[account.name];
            const logo = accountLogos[account.name];
            return (
              <FadeIn key={account.name} delay={0.03 * (i % 6)}>
                <a
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                >
                  {Icon ? (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-slate-900 group-hover:text-white">
                      <Icon size={18} />
                    </span>
                  ) : (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white">
                      <Image
                        src={logo.src}
                        alt=""
                        width={40}
                        height={40}
                        className={
                          logo.fullBleed
                            ? "h-full w-full object-cover"
                            : "h-6 w-6 object-contain"
                        }
                      />
                    </span>
                  )}

                  <span className="min-w-0 grow">
                    <span className="block text-sm font-semibold text-slate-800">
                      {account.name}
                    </span>
                    {account.handle && (
                      <span className="block truncate text-xs text-slate-400">
                        {account.handle}
                      </span>
                    )}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-600"
                  />
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

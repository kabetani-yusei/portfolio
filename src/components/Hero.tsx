import Image from "next/image";
import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import { FadeIn } from "./FadeIn";

/** レーティングバッジ。dot には各サービスの称号カラーをそのまま使う */
function RatingBadge({ dot, children }: { dot: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
      {dot}
      {children}
    </span>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      className="h-2 w-2 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.08),transparent)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-1.5 text-lg font-medium text-slate-400">
                {profile.englishName}
                <span className="ml-2 text-base text-slate-400/80">
                  {profile.nameKana}
                </span>
              </p>
            </div>

            <p className="text-base leading-relaxed text-slate-600">
              {profile.role}
              <br />
              {profile.intro}
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* AtCoder は公式のレーティング色、Kaggle は公式ティア色（Expert: #96508E） */}
              <RatingBadge
                dot={
                  <span className="flex items-center gap-1">
                    <Dot color="#00C0C0" />
                    <Dot color="#C0C000" />
                  </span>
                }
              >
                AtCoder 水 / 黄
              </RatingBadge>
              <RatingBadge dot={<Dot color="#96508E" />}>
                Kaggle Expert
              </RatingBadge>
              <RatingBadge dot={<Dot color="#D4A017" />}>
                SIGNATE Grandmaster
              </RatingBadge>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 opacity-60" />
              <Image
                src="/user.jpg"
                alt={profile.name}
                width={400}
                height={400}
                className="relative h-auto w-auto rounded-2xl object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

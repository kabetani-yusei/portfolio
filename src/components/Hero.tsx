import Image from "next/image";
import { profile } from "@/data/profile";
import { FadeIn } from "./FadeIn";

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
              <p className="mt-1 text-lg font-medium text-slate-400">
                {profile.englishName}
              </p>
            </div>

            <p className="text-base leading-relaxed text-slate-600">
              {profile.role}
              <br />
              {profile.intro}
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                AtCoder 水 / 青
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                SIGNATE Grandmaster
              </span>
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

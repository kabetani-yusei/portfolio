import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { achievements, profile } from "@/data/profile";

const featured = achievements.slice(0, 4);

export default function Home() {
  return (
    <div className="flex flex-col gap-9">
      <section className="panel grid gap-8 p-7 md:grid-cols-[1.05fr_0.95fr] md:p-9">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-300">
            combinatorial optimization
          </p>
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              {profile.name}
            </h1>
            <p className="text-lg font-medium text-slate-200/90">
              {profile.englishName}
            </p>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-200/90 md:text-base">
            {profile.role}。競技プログラミング、機械学習コンペ、ハッカソンに参加しています。
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/achievements"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:-translate-y-0.5 hover:shadow-md"
            >
              Awards
            </Link>
            <Link
              href="/experience"
              className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Experience
            </Link>
            <Link
              href="/timeline"
              className="text-sm font-medium text-cyan-200 hover:text-white"
            >
              Timeline →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.affiliations.map((item) => (
              <Tag key={item} label={item} />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="panel overflow-hidden rounded-2xl border border-white/15 p-3">
            <Image
              src="/icon.jpg"
              alt="Portrait"
              width={620}
              height={620}
              className="h-full w-full rounded-xl object-cover object-center"
              priority
            />
            <div className="mt-3 flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-sm text-white">
              <span className="text-xs uppercase tracking-[0.18em] text-cyan-100/80">
                research
              </span>
              <span className="font-semibold">{profile.research}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <div className="panel rounded-2xl p-6">
          <SectionHeader
            title="技術スタック"
            kicker="skills"
          />
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div className="panel rounded-2xl p-6">
          <SectionHeader
            title="アカウント"
            kicker="accounts"
          />
          <div className="mt-5 grid gap-3">
            {profile.accounts.map((account) => (
              <Link
                key={account.name}
                href={account.url}
                target="_blank"
                className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
              >
                <div className="flex flex-col">
                  <span className="font-semibold">{account.name}</span>
                  {account.handle ? (
                    <span className="text-xs text-slate-200/70">
                      {account.handle}
                    </span>
                  ) : null}
                </div>
                <span className="text-xs text-cyan-200">open</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="panel rounded-3xl p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <SectionHeader
            title="最新のトピック"
            kicker="highlight"
          />
          <Link
            href="/achievements"
            className="hidden text-sm font-semibold text-cyan-200 hover:text-white md:inline"
          >
            see all →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {featured.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200/80">
                  {item.tags?.[0] ?? "highlight"}
                </p>
                <span className="text-xs text-slate-200/70">
                  {item.date ?? "recent"}
                </span>
              </div>
              <p className="mt-3 text-base font-semibold text-white">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

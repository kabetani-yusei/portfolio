import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { experiences, profile } from "@/data/profile";

const ongoing = [
  {
    title: "Sensing & Perception アルバイト",
    period: "2024年2月〜",
    detail: "株式会社マップフォーでの実装・実験",
  },
  {
    title: "GCI 2024 Winter 修了",
    period: "2024年冬",
    detail: "東京大学松尾研のプログラムでAIの実践を深掘り",
  },
  {
    title: "DL基礎講座 2025年春 修了",
    period: "2025年春",
    detail: "深層学習の基礎を体系的に体系化",
  },
];

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="panel rounded-3xl p-6 md:p-8">
        <SectionHeader
          title="Experience Highlights"
          kicker="journey"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {experiences.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/16"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((tag) => <Tag key={tag} label={tag} />)}
                </div>
                <span className="text-xs text-slate-200/70">
                  {item.date ?? "challenge"}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold leading-relaxed text-white">
                {item.title}
              </h3>
              {item.description ? (
                <p className="mt-2 text-sm text-slate-200/80">{item.description}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
        <div className="panel rounded-3xl p-6 md:p-8">
        <SectionHeader
          title="コミュニティと研究"
          kicker="research / community"
        />
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">
                research
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                {profile.research}
              </p>
              <p className="mt-1 text-sm text-slate-200/80">
                現実の制約を扱うための数理計画やヒューリスティクスに注目。
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">
                affiliations
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {profile.affiliations.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="panel rounded-3xl p-6 md:p-8">
        <SectionHeader
          title="いま取り組んでいること"
          kicker="ongoing"
        />
          <div className="mt-5 space-y-3">
            {ongoing.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <span className="text-xs text-cyan-200/90">{item.period}</span>
                </div>
                <p className="text-xs text-slate-200/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

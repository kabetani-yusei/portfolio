import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { achievements, profile } from "@/data/profile";

export default function AchievementsPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="panel rounded-3xl p-6 md:p-8">
        <SectionHeader
          title="Awards & Honors"
          kicker="achievement"
        />
        <div className="mt-6 space-y-4">
          {achievements.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/12 bg-white/10 p-5 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/16"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((tag) => <Tag key={tag} label={tag} />)}
                </div>
                <span className="text-xs text-slate-200/70">
                  {item.date ?? "recent"}
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

      <section className="panel rounded-3xl p-6 md:p-8">
        <SectionHeader
          title="Certifications"
          kicker="資格"
        />
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {profile.certifications.map((cert) => (
            <div
              key={cert}
              className="flex items-center justify-between rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/16"
            >
              <span>{cert}</span>
              <span className="text-xs text-cyan-200">certified</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

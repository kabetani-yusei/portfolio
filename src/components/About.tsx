import { BookOpen, Users } from "lucide-react";
import { profile } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="About"
            title="研究・所属"
            description="組合せ最適化を軸に、アルゴリズムとAIの両面からアプローチしています。"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3">
                <BookOpen size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                研究分野
              </h3>
              <p className="mt-2 text-2xl font-bold text-blue-600">
                {profile.research}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                現実の制約を扱うための数理計画やヒューリスティクスに注目し、実社会の問題に取り組んでいます。
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3">
                <Users size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">所属</h3>
              <ul className="mt-3 space-y-2">
                {profile.affiliations.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

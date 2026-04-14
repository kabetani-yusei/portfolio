import { profile } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading label="About" title="研究・所属" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <dl className="mt-10 grid gap-y-6 gap-x-12 sm:grid-cols-[auto_1fr]">
            <dt className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              研究分野
            </dt>
            <dd>
              <span className="text-sm font-bold text-slate-900">
                {profile.research}
              </span>
              <span className="ml-2 text-sm text-slate-500">
                — {profile.lab}
              </span>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">
                実社会の問題に対して、数理最適化によるアプローチをする研究をしています。
              </p>
            </dd>

            <dt className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              所属
            </dt>
            <dd className="flex flex-col gap-1">
              {profile.affiliations.map((a) => (
                <span key={a} className="text-sm font-medium text-slate-700">
                  {a}
                </span>
              ))}
            </dd>
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}

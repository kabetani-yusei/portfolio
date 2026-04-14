import { Code, Award } from "lucide-react";
import { profile } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { Tag } from "./Tag";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading label="Skills" title="技術スタック・資格" />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex rounded-xl bg-blue-50 p-3">
                  <Code size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  技術スタック
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex rounded-xl bg-blue-50 p-3">
                  <Award size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">資格</h3>
              </div>
              <ul className="space-y-2.5">
                {profile.certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    {cert}
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

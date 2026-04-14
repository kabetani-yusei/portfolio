import type { IconType } from "react-icons";
import {
  SiPython,
  SiTypescript,
  SiRuby,
  SiCplusplus,
  SiFastapi,
  SiReact,
} from "react-icons/si";
import { profile } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  Python: { icon: SiPython, color: "#3776AB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Ruby: { icon: SiRuby, color: "#CC342D" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  React: { icon: SiReact, color: "#61DAFB" },
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading label="Skills" title="技術スタック・資格" />
        </FadeIn>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr]">
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                技術スタック
              </h3>
              <ul className="mt-4 space-y-2">
                {profile.skills.map((skill) => {
                  const entry = skillIcons[skill];
                  const Icon = entry?.icon;
                  return (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 border-b border-slate-100 pb-2 text-sm last:border-0"
                    >
                      {Icon && (
                        <Icon
                          size={16}
                          style={{ color: entry.color }}
                          className="shrink-0"
                        />
                      )}
                      <span className="text-slate-700">{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                資格
              </h3>
              <ul className="mt-4 space-y-2">
                {profile.certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-center justify-between border-b border-slate-100 pb-2 text-sm last:border-0"
                  >
                    <span className="text-slate-700">{cert.name}</span>
                    <span className="shrink-0 text-xs text-slate-400">
                      {cert.date}
                    </span>
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

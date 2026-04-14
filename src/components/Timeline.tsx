import { timeline } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  return (
    <section id="timeline" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading label="Timeline" title="経歴" />
        </FadeIn>

        <div className="relative mt-12 ml-4 border-l-2 border-slate-200 pl-8 md:ml-8">
          {timeline.map((item, i) => (
            <FadeIn key={`${item.period}-${i}`} delay={0.08 * i}>
              <div className="relative mb-10 last:mb-0">
                <div className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-blue-500 bg-white" />
                <p className="text-sm font-semibold text-blue-600">
                  {item.period}
                </p>
                <p className="mt-1 text-base font-medium text-slate-800">
                  {item.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import { experiences } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { FilterableList } from "./FilterableList";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading label="Experience" title="活動・経験" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <FilterableList
            items={experiences}
            dotClassName="bg-slate-400"
            dividerClassName="border-slate-200"
            hoverClassName="hover:bg-slate-200"
          />
        </FadeIn>
      </div>
    </section>
  );
}

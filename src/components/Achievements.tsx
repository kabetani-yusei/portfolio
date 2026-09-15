import { achievements } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { FilterableList } from "./FilterableList";
import { SectionHeading } from "./SectionHeading";

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading label="Achievements" title="受賞・実績" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <FilterableList
            items={achievements}
            dotClassName="bg-blue-500"
            dividerClassName="border-slate-100"
            hoverClassName="hover:bg-slate-100"
          />
        </FadeIn>
      </div>
    </section>
  );
}

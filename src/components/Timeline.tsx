import { timeline } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  // Work item index (branch point)
  const workIdx = timeline.findIndex((t) => t.category === "work");

  return (
    <section id="timeline" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading label="Timeline" title="経歴" />
        </FadeIn>

        <div className="mt-12 font-mono text-sm">
          {timeline.map((item, i) => {
            const isWork = item.category === "work";
            // Show the second branch line from work item upward to top
            const showBranch = workIdx !== -1 && i <= workIdx && !isWork;

            return (
              <FadeIn key={`${item.period}-${i}`} delay={0.08 * i}>
                <div className="flex h-16">
                  {/* Graph column */}
                  <div className="relative mr-4 flex w-16 shrink-0">
                    {/* Main branch vertical line */}
                    <div
                      className={`absolute left-[5px] w-0.5 bg-blue-200 ${
                        i === 0
                          ? "top-1/2 bottom-0"
                          : i === timeline.length - 1
                            ? "top-0 bottom-1/2"
                            : "top-0 bottom-0"
                      }`}
                    />

                    {/* Main dot */}
                    {!isWork && (
                      <div className="absolute top-1/2 left-0 z-10 h-3 w-3 -translate-y-1/2 rounded-full bg-blue-500 ring-4 ring-white" />
                    )}

                    {/* Branch line running up from work node */}
                    {showBranch && (
                      <>
                        <div
                          className={`absolute right-4 w-0.5 bg-orange-200 ${
                            i === 0 ? "top-1/2 bottom-0" : "top-0 bottom-0"
                          }`}
                        />
                        {i === 0 && (
                          <div className="absolute top-1/2 right-[11px] z-10 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-orange-400 bg-white" />
                        )}
                      </>
                    )}

                    {/* Work row: branch curve + dot */}
                    {isWork && (
                      <>
                        {/* Branch line above work dot going up */}
                        <div className="absolute right-4 top-0 bottom-1/2 w-0.5 bg-orange-200" />
                        {/* Horizontal connector from main to branch */}
                        <div className="absolute top-1/2 left-[5px] right-4 h-0.5 -translate-y-1/2 bg-orange-200" />
                        {/* Work dot on branch */}
                        <div className="absolute top-1/2 right-[11px] z-10 h-3 w-3 -translate-y-1/2 rounded-full bg-orange-500 ring-4 ring-white" />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex grow items-center gap-4">
                    <span className="w-24 shrink-0 text-xs font-bold text-slate-500">
                      {item.period}
                    </span>
                    <span className="text-sm text-slate-700">
                      {item.detail}
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

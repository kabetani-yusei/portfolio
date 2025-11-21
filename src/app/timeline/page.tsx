import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { timeline } from "@/data/profile";

export default function TimelinePage() {
  return (
    <div className="panel rounded-3xl p-6 md:p-8">
      <div className="flex items-start justify-between gap-3">
        <SectionHeader
          title="Timeline"
          kicker="story"
        />
        <Link
          href="/"
          className="hidden text-sm font-semibold text-cyan-200 hover:text-white md:inline"
        >
          Home →
        </Link>
      </div>

      <div className="relative mt-8">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300/60 via-white/20 to-transparent" />
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={`${item.period}-${index}`} className="relative pl-12">
              <div className="absolute left-1 top-2 flex items-center">
                <span className="h-5 w-5 rounded-full border border-cyan-200/60 bg-slate-950" />
                {index < timeline.length - 1 ? (
                  <span className="ml-[7px] h-12 w-px bg-white/10" />
                ) : null}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md shadow-slate-900/40">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">
                  {item.period}
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

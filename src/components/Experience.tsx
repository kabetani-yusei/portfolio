"use client";

import { useState, useMemo } from "react";
import { experiences } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

const ALL = "All";

export function Experience() {
  const categories = useMemo(() => {
    const set = new Set<string>();
    experiences.forEach((a) => a.tags?.forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set)];
  }, []);

  const [filter, setFilter] = useState(ALL);

  const filtered =
    filter === ALL
      ? experiences
      : experiences.filter((a) => a.tags?.includes(filter));

  return (
    <section id="experience" className="scroll-mt-20 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading label="Experience" title="活動・経験" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-3.5 py-1 text-sm font-medium transition ${
                  filter === cat
                    ? "bg-slate-900 text-white"
                    : "text-slate-500 hover:bg-slate-200 hover:text-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-8">
          {filtered.map((item, i) => (
            <FadeIn key={item.title} delay={0.03 * (i % 6)}>
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 py-4 last:border-0">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <div>
                    <p className="text-sm font-medium leading-relaxed text-slate-800">
                      {item.title}
                    </p>
                    {item.tags && (
                      <p className="mt-1 text-xs text-slate-400">
                        {item.tags.join(" / ")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

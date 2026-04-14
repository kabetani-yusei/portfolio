"use client";

import { useState, useMemo } from "react";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { Tag } from "./Tag";

const ALL = "All";

export function Achievements() {
  const categories = useMemo(() => {
    const set = new Set<string>();
    achievements.forEach((a) => a.tags?.forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set)];
  }, []);

  const [filter, setFilter] = useState(ALL);

  const filtered =
    filter === ALL
      ? achievements
      : achievements.filter((a) => a.tags?.includes(filter));

  return (
    <section id="achievements" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="flex items-start justify-between gap-4">
            <SectionHeading label="Achievements" title="実績" />
            <div className="mt-1 inline-flex rounded-xl bg-blue-50 p-3">
              <Trophy size={24} className="text-blue-600" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  filter === cat
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {filtered.map((item, i) => (
            <FadeIn key={item.title} delay={0.05 * (i % 4)}>
              <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags?.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                  {item.date && (
                    <span className="shrink-0 text-xs text-slate-400">
                      {item.date}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-sm font-semibold leading-relaxed text-slate-800">
                  {item.title}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

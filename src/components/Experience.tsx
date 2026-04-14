"use client";

import { useState, useMemo } from "react";
import { Zap } from "lucide-react";
import { experiences } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { Tag } from "./Tag";

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
          <div className="flex items-start justify-between gap-4">
            <SectionHeading label="Experience" title="経験・活動" />
            <div className="mt-1 inline-flex rounded-xl bg-blue-50 p-3">
              <Zap size={24} className="text-blue-600" />
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

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <FadeIn key={item.title} delay={0.05 * (i % 6)}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags?.map((tag) => (
                    <Tag key={tag} label={tag} variant="outline" />
                  ))}
                </div>
                <h3 className="mt-3 text-sm font-semibold leading-relaxed text-slate-800">
                  {item.title}
                </h3>
                {item.date && (
                  <p className="mt-1 text-xs text-slate-400">{item.date}</p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

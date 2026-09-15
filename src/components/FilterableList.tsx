"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Achievement } from "@/data/profile";

const ALL = "All";

type Props = {
  items: Achievement[];
  /** 箇条書きのドットの色（セクションごとに変える） */
  dotClassName: string;
  dividerClassName: string;
  hoverClassName: string;
};

export function FilterableList({
  items,
  dotClassName,
  dividerClassName,
  hoverClassName,
}: Props) {
  const categories = useMemo(() => {
    const counts = new Map<string, number>([[ALL, items.length]]);
    items.forEach((item) =>
      item.tags?.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1)),
    );
    return Array.from(counts, ([name, count]) => ({ name, count }));
  }, [items]);

  const [filter, setFilter] = useState(ALL);

  const filtered =
    filter === ALL ? items : items.filter((a) => a.tags?.includes(filter));

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setFilter(cat.name)}
            aria-pressed={filter === cat.name}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1 text-sm font-medium transition ${
              filter === cat.name
                ? "bg-slate-900 text-white"
                : `text-slate-500 ${hoverClassName} hover:text-slate-700`
            }`}
          >
            {cat.name}
            <span
              className={`text-xs tabular-nums ${
                filter === cat.name ? "text-white/60" : "text-slate-400"
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <AnimatePresence initial={false} mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex items-start gap-3 border-b py-4 last:border-0 ${dividerClassName}`}
            >
              <span
                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dotClassName}`}
              />
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
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

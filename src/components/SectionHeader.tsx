type Props = {
  title: string;
  kicker?: string;
  description?: string;
};

export function SectionHeader({ title, kicker, description }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {kicker ? (
        <span className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
          {kicker}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-3xl text-sm text-slate-200/80 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

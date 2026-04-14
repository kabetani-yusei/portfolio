type Props = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
        {label}
      </span>
      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-slate-500">{description}</p>
      )}
    </div>
  );
}

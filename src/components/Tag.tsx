type Props = {
  label: string;
};

export function Tag({ label }: Props) {
  return (
    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100 shadow-inner shadow-white/10">
      {label}
    </span>
  );
}

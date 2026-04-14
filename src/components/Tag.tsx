type Props = {
  label: string;
  variant?: "filled" | "outline";
};

export function Tag({ label, variant = "filled" }: Props) {
  const styles =
    variant === "filled"
      ? "bg-blue-50 text-blue-700 border-blue-200"
      : "bg-white text-slate-600 border-slate-200";

  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${styles}`}
    >
      {label}
    </span>
  );
}

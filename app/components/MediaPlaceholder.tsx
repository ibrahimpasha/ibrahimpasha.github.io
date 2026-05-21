type Props = {
  label: string;
  ratio?: "16/9" | "4/3" | "1/1";
  tone?: "dark" | "light";
};

export function MediaPlaceholder({
  label,
  ratio = "16/9",
  tone = "dark",
}: Props) {
  const bg = tone === "dark" ? "bg-ink" : "bg-paper-2";
  const fg = tone === "dark" ? "text-paper/70" : "text-ink/60";
  const aspect =
    ratio === "16/9"
      ? "aspect-video"
      : ratio === "4/3"
      ? "aspect-[4/3]"
      : "aspect-square";

  return (
    <div
      className={`${bg} ${fg} ${aspect} flex w-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.18em] sm:text-xs`}
    >
      [ {label} ]
    </div>
  );
}

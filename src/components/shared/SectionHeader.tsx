type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-magenta">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}

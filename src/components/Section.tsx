type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  tone?: "white" | "surface";
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  tone = "white",
}: SectionProps) {
  return (
    <section className={tone === "surface" ? "bg-surface" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-bold tracking-normal text-slate-950 sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

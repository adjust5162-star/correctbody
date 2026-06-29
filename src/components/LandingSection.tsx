type LandingSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "white" | "blue" | "dark";
  children: React.ReactNode;
};

export function LandingSection({
  id,
  eyebrow,
  title,
  description,
  tone = "white",
  children,
}: LandingSectionProps) {
  const toneClass = {
    white: "bg-white text-slate-950",
    blue: "bg-[linear-gradient(180deg,#eef6ff_0%,#f8fafc_100%)] text-slate-950",
    dark: "bg-slate-950 text-white",
  };

  return (
    <section id={id} className={toneClass[tone]}>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-12 max-w-3xl">
          <p className={tone === "dark" ? "text-sm font-black uppercase tracking-[0.16em] text-emerald-300" : "text-sm font-black uppercase tracking-[0.16em] text-primary"}>
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className={tone === "dark" ? "mt-5 text-lg leading-8 text-slate-300" : "mt-5 text-lg leading-8 text-slate-600"}>
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

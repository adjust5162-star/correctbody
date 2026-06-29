type ExerciseCardProps = {
  title: string;
  area: string;
  level: string;
  minutes: string;
  description: string;
};

export function ExerciseCard({
  title,
  area,
  level,
  minutes,
  description,
}: ExerciseCardProps) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap gap-2 text-xs font-semibold">
        <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-emerald-700">{area}</span>
        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-700">{level}</span>
        <span className="rounded-md bg-orange-50 px-2.5 py-1 text-orange-700">{minutes}</span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

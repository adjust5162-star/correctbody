type ProgramCardProps = {
  title: string;
  summary: string;
  tags: string[];
};

export function ProgramCard({ title, summary, tags }: ProgramCardProps) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-primary">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

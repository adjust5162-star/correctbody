type BlogCardProps = {
  title: string;
  excerpt: string;
  category: string;
};

export function BlogCard({ title, excerpt, category }: BlogCardProps) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-bold text-secondary">{category}</p>
      <h3 className="mt-3 text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{excerpt}</p>
    </article>
  );
}

import Image from "next/image";

type ConditionCardProps = {
  title: string;
  description: string;
  image: string;
};

export function ConditionCard({ title, description, image }: ConditionCardProps) {
  return (
    <article className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={`${title} 관련 재활운동 이미지`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      </div>
    </article>
  );
}

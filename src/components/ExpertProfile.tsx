import Image from "next/image";

export function ExpertProfile() {
  return (
    <article className="grid gap-6 rounded-md border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[220px_1fr]">
      <div className="relative h-64 w-full overflow-hidden rounded-md md:h-full">
        <Image
          src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=700&q=80"
          alt="재활운동 전문가 프로필 사진"
          fill
          sizes="(min-width: 768px) 220px, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-bold text-primary">대표 전문가</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">김도윤 운동전문가</h2>
        <p className="mt-4 leading-7 text-slate-600">
          움직임 평가, 재활운동 지도, 시니어 운동 교육 경험을 바탕으로 개인의 생활 동작과
          목표를 함께 살핍니다. 운동은 무리하지 않는 범위에서 진행하도록 안내합니다.
        </p>
        <dl className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
          <div className="rounded-md bg-surface p-4">
            <dt className="font-bold text-slate-950">분야</dt>
            <dd className="mt-1">재활운동</dd>
          </div>
          <div className="rounded-md bg-surface p-4">
            <dt className="font-bold text-slate-950">상담</dt>
            <dd className="mt-1">방문/온라인</dd>
          </div>
          <div className="rounded-md bg-surface p-4">
            <dt className="font-bold text-slate-950">방향</dt>
            <dd className="mt-1">단계별 운동</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { LandingSection } from "./LandingSection";

const conditions = ["목·어깨 긴장", "허리 부담", "무릎 불편감", "수술 후 회복", "시니어 균형", "체형·자세 관리"];

export function ConditionSection() {
  return (
    <LandingSection
      id="conditions"
      eyebrow="Condition Finder"
      title="내 증상에 가까운 콘텐츠를 빠르게 찾도록 설계했습니다"
      description="랜딩페이지 안에서 관심 부위를 발견하고 상담 문의까지 자연스럽게 이어집니다."
      tone="blue"
    >
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white bg-slate-100 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
            alt="재활운동 매트에서 움직임을 연습하는 모습"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {conditions.map((condition) => (
            <div key={condition} className="rounded-lg border border-white bg-white/82 p-5 shadow-sm">
              <CheckCircle2 aria-hidden="true" className="text-secondary" size={22} />
              <p className="mt-4 text-lg font-black text-slate-950">{condition}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                움직임 평가와 상담을 통해 운동 방향을 제시합니다.
              </p>
            </div>
          ))}
        </div>
      </div>
    </LandingSection>
  );
}

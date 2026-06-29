import Image from "next/image";
import { Quote, Sparkles } from "lucide-react";
import { LandingSection } from "./LandingSection";

export function ExpertSection() {
  return (
    <LandingSection
      id="expert"
      eyebrow="Expert"
      title="통증 부위만 보는 것이 아니라 움직임 전체를 평가합니다"
      description="전문가는 현재 상태, 생활 패턴, 목표를 함께 살피고 무리하지 않는 운동 방향을 제시합니다."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
        <div className="relative min-h-[500px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=80"
            alt="재활운동 전문가 프로필"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:p-10">
          <Sparkles aria-hidden="true" className="text-accent" size={28} />
          <h3 className="mt-6 text-3xl font-black text-slate-950">움직임 중심 재활운동 접근</h3>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            목, 어깨, 허리, 무릎처럼 불편한 부위는 출발점입니다. 실제 상담에서는 일상 동작,
            균형, 호흡, 관절 가동성, 근력 사용 방식을 함께 확인합니다.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["상담", "평가", "운동 계획"].map((item) => (
              <div key={item} className="rounded-lg bg-surface p-4">
                <p className="text-sm font-bold text-slate-500">Focus</p>
                <p className="mt-2 text-lg font-black text-slate-950">{item}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-8 rounded-lg bg-blue-surface p-5">
            <Quote aria-hidden="true" className="text-primary" size={24} />
            <p className="mt-4 text-lg font-bold leading-8 text-slate-900">
              통증이 반복된다면 부위만 볼 것이 아니라, 몸이 어떻게 움직이는지부터 확인해야 합니다.
            </p>
          </blockquote>
        </div>
      </div>
    </LandingSection>
  );
}

import { ArrowUpRight, Footprints, HeartPulse, Move3D, ShieldPlus, Waves, Waypoints } from "lucide-react";
import { LandingSection } from "./LandingSection";

const programs = [
  { title: "목 통증 / 거북목", text: "목과 어깨의 긴장, 자세 습관, 시선 높이를 함께 점검합니다.", icon: Waypoints },
  { title: "라운드 숄더 / 어깨", text: "견갑 움직임과 흉추 사용을 살피며 어깨 부담 완화에 도움을 줄 수 있습니다.", icon: Waves },
  { title: "허리 통증 재활", text: "호흡, 골반 조절, 코어 안정성을 단계적으로 확인합니다.", icon: Move3D },
  { title: "무릎 통증 재활", text: "앉았다 일어서기, 계단, 보행 동작에서 필요한 힘을 다룹니다.", icon: Footprints },
  { title: "수술 후 회복 운동", text: "의료진 안내 이후 필요한 범위에서 일상 복귀 운동을 구성합니다.", icon: ShieldPlus },
  { title: "시니어 낙상 예방", text: "균형, 하체 근력, 보행 자신감에 도움을 줄 수 있는 루틴입니다.", icon: HeartPulse },
];

export function ProgramSection() {
  return (
    <LandingSection
      id="programs"
      eyebrow="Programs"
      title="증상과 목표에 따라 세분화한 대표 프로그램"
      description="각 프로그램은 상담과 움직임 확인을 바탕으로 개인 상태에 따라 조정됩니다."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => {
          const Icon = program.icon;
          return (
            <article key={program.title} className="hover-lift group rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-surface text-primary">
                  <Icon aria-hidden="true" size={23} />
                </span>
                <ArrowUpRight aria-hidden="true" className="text-slate-300 transition group-hover:text-primary" size={22} />
              </div>
              <h3 className="mt-8 text-xl font-black text-slate-950">{program.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{program.text}</p>
            </article>
          );
        })}
      </div>
    </LandingSection>
  );
}

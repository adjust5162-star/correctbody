import { AlertCircle, Armchair, Bone, MoveRight } from "lucide-react";
import { LandingSection } from "./LandingSection";

const painPoints = [
  {
    title: "목과 어깨가 자주 뻐근한가요?",
    text: "반복되는 긴장과 자세 습관은 움직임 전체를 함께 살펴볼 필요가 있습니다.",
    icon: AlertCircle,
  },
  {
    title: "허리 부담이 일상 동작을 막나요?",
    text: "앉기, 걷기, 일어서기처럼 자주 쓰는 동작에서 원인을 확인합니다.",
    icon: Armchair,
  },
  {
    title: "무릎과 보행이 불안한가요?",
    text: "근력, 균형, 보행 패턴을 단계적으로 살펴 안정적인 움직임을 돕습니다.",
    icon: Bone,
  },
];

export function PainPointSection() {
  return (
    <LandingSection
      eyebrow="Pain Point"
      title="통증 부위만 풀어도 다시 반복된다면, 움직임 전체를 봐야 합니다."
      description="불편한 부위만 보는 접근을 넘어 생활 동작과 자세 패턴까지 함께 확인합니다."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {painPoints.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="hover-lift rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-surface text-primary">
                <Icon aria-hidden="true" size={22} />
              </div>
              <h3 className="mt-6 text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              <MoveRight aria-hidden="true" className="mt-6 text-secondary" size={22} />
            </article>
          );
        })}
      </div>
    </LandingSection>
  );
}

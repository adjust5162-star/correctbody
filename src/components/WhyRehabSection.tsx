import { Gauge, LineChart, ShieldCheck, StretchHorizontal } from "lucide-react";
import { LandingSection } from "./LandingSection";

const steps = [
  { title: "평가", text: "불편한 동작과 움직임 제한을 확인합니다.", icon: Gauge },
  { title: "안정화", text: "무리하지 않는 범위에서 몸의 기준을 만듭니다.", icon: ShieldCheck },
  { title: "가동성", text: "필요한 움직임 범위를 천천히 회복하도록 돕습니다.", icon: StretchHorizontal },
  { title: "근력", text: "일상에 필요한 힘과 조절 능력을 단계적으로 다룹니다.", icon: LineChart },
];

export function WhyRehabSection() {
  return (
    <LandingSection
      eyebrow="Why Rehab Exercise"
      title="재활운동은 단순히 근육을 키우는 운동이 아닙니다."
      description="통증의 원인이 되는 움직임 패턴을 확인하고, 안정성·가동성·근력을 단계적으로 회복하는 과정입니다."
      tone="blue"
    >
      <div className="grid gap-4 lg:grid-cols-4">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="rounded-lg border border-white bg-white/78 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-black text-primary">0{index + 1}</p>
              <Icon aria-hidden="true" className="mt-6 text-secondary" size={28} />
              <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          );
        })}
      </div>
    </LandingSection>
  );
}

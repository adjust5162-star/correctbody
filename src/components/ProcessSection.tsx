import { ClipboardList, ListChecks, MessageCircle, Route, Settings2 } from "lucide-react";
import { LandingSection } from "./LandingSection";

const process = [
  { title: "현재 상태 상담", text: "불편한 부위와 생활 동작을 정리합니다.", icon: MessageCircle },
  { title: "움직임 평가", text: "자세, 균형, 가동성, 힘 사용을 확인합니다.", icon: ClipboardList },
  { title: "맞춤 운동 계획", text: "개인 상태에 따라 운동 방향을 구성합니다.", icon: Settings2 },
  { title: "단계별 운동 진행", text: "강도와 범위를 천천히 조절합니다.", icon: Route },
  { title: "생활 관리 안내", text: "일상에서 무리하지 않는 방법을 안내합니다.", icon: ListChecks },
];

export function ProcessSection() {
  return (
    <LandingSection
      id="process"
      eyebrow="Process"
      title="상담부터 운동 진행까지 한눈에 이해되는 5단계"
      description="불안한 첫 방문을 줄이기 위해 과정은 명확하고 단순하게 설계했습니다."
      tone="dark"
    >
      <div className="grid gap-4 md:grid-cols-5">
        {process.map((item, index) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
              <p className="font-mono text-sm font-black text-emerald-300">0{index + 1}</p>
              <Icon aria-hidden="true" className="mt-6 text-white" size={26} />
              <h3 className="mt-5 text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
            </article>
          );
        })}
      </div>
    </LandingSection>
  );
}

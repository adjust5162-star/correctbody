import { BookOpen, PlayCircle, Search } from "lucide-react";
import { LandingSection } from "./LandingSection";

const contents = [
  {
    title: "상담 전 체크리스트",
    text: "통증 시점, 불편한 동작, 이전 검사 내용을 정리하면 상담이 더 명확해집니다.",
    icon: BookOpen,
  },
  {
    title: "모바일 운동 가이드",
    text: "집에서도 확인하기 쉬운 짧은 루틴과 주의사항을 콘텐츠로 제공합니다.",
    icon: PlayCircle,
  },
  {
    title: "증상별 검색 콘텐츠",
    text: "허리, 무릎, 어깨, 거북목 등 관심 키워드로 유입될 수 있는 구조입니다.",
    icon: Search,
  },
];

export function ContentPreviewSection() {
  return (
    <LandingSection
      eyebrow="Content Preview"
      title="상담 전후로 이어지는 콘텐츠 경험"
      description="정보 탐색에서 상담 문의까지 끊기지 않도록 콘텐츠 흐름을 구성했습니다."
      tone="blue"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {contents.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="hover-lift rounded-lg border border-white bg-white/82 p-6 shadow-sm">
              <Icon aria-hidden="true" className="text-primary" size={28} />
              <h3 className="mt-6 text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </article>
          );
        })}
      </div>
    </LandingSection>
  );
}

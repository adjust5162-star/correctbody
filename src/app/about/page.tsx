import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { medicalNotice } from "@/data/site";

export const metadata: Metadata = {
  title: "재활운동 소개",
  description: "바른몸체형관리센터의 재활운동 상담 방식과 안전 원칙을 소개합니다.",
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="재활운동은 현재 상태를 살피는 것에서 시작합니다"
        description="바른몸체형관리센터는 통증 부위, 생활 동작, 운동 경험을 함께 확인하고 무리하지 않는 범위의 운동 방향을 안내합니다."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {["상태 확인", "단계별 운동", "생활 적용"].map((item, index) => (
            <article key={item} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-primary">0{index + 1}</p>
              <h2 className="mt-3 text-xl font-bold text-slate-950">{item}</h2>
              <p className="mt-3 leading-7 text-slate-600">
                개인 상태에 따라 다를 수 있어 상담과 반응 확인을 바탕으로 운동 방향을 정합니다.
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-md bg-surface p-5 text-sm leading-7 text-slate-700">
          {medicalNotice}
        </p>
      </Section>
      <CTASection />
    </>
  );
}

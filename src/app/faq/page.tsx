import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description: "재활운동 상담과 프로그램 진행에 관한 자주 묻는 질문입니다.",
};

export default function FAQPage() {
  return (
    <>
      <Section
        eyebrow="FAQ"
        title="자주 묻는 질문"
        description="상담 전 많이 묻는 내용을 정리했습니다."
        tone="surface"
      >
        <FAQAccordion />
      </Section>
      <CTASection />
    </>
  );
}

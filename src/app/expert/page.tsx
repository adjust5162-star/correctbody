import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ExpertProfile } from "@/components/ExpertProfile";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "전문가 소개",
  description: "재활운동 상담과 운동 지도를 담당하는 전문가를 소개합니다.",
};

export default function ExpertPage() {
  return (
    <>
      <Section
        eyebrow="Expert"
        title="신뢰할 수 있는 상담을 위한 전문가 소개"
        description="운동 목표와 현재 상태를 함께 확인하고 안전한 진행 방향을 안내합니다."
      >
        <ExpertProfile />
      </Section>
      <CTASection />
    </>
  );
}

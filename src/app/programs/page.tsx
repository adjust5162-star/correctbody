import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProgramCard } from "@/components/ProgramCard";
import { Section } from "@/components/Section";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "질환별 운동 프로그램",
  description: "수술 후 회복, 시니어 낙상 예방, 체형 교정 등 프로그램을 소개합니다.",
};

export default function ProgramsPage() {
  return (
    <>
      <Section
        eyebrow="Programs"
        title="질환과 목적에 따라 살펴보는 운동 프로그램"
        description="운동 강도와 내용은 상담 후 개인 상태에 따라 조정될 수 있습니다."
        tone="surface"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}

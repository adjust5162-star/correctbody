import { ConditionSection } from "@/components/ConditionSection";
import { ContentPreviewSection } from "@/components/ContentPreviewSection";
import { CTASection } from "@/components/CTASection";
import { ExpertSection } from "@/components/ExpertSection";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { PainPointSection } from "@/components/PainPointSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProgramSection } from "@/components/ProgramSection";
import { TrustSection } from "@/components/TrustSection";
import { WhyRehabSection } from "@/components/WhyRehabSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointSection />
      <WhyRehabSection />
      <ProgramSection />
      <ConditionSection />
      <ExpertSection />
      <ProcessSection />
      <ContentPreviewSection />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

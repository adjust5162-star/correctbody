import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { medicalNotice } from "@/data/site";

export const metadata: Metadata = {
  title: "상담 문의",
  description: "재활운동 상담을 위한 문의 폼입니다.",
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="상담 문의"
      description="이름, 연락처, 불편한 부위와 상담 방식을 남겨주시면 확인 후 연락드립니다."
      tone="surface"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <ContactForm />
        <aside className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">상담 전 안내</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
            <li>불편한 동작과 지속 기간을 함께 적어 주세요.</li>
            <li>검사 결과나 의료진 안내가 있다면 상담 시 공유해 주세요.</li>
            <li>통증이 심한 경우 전문가 상담을 권장합니다.</li>
          </ul>
          <p className="mt-6 rounded-md bg-surface p-4 text-sm leading-7 text-slate-700">
            {medicalNotice}
          </p>
        </aside>
      </div>
    </Section>
  );
}

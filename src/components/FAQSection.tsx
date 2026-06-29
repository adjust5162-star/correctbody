"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { LandingSection } from "./LandingSection";

const faqs = [
  {
    question: "통증이 있어도 운동을 시작해도 되나요?",
    answer:
      "통증이 심하거나 증상이 지속되는 경우 전문가 상담을 권장합니다. 운동은 무리하지 않는 범위에서 진행해야 합니다.",
  },
  {
    question: "일반 스트레칭과 무엇이 다른가요?",
    answer:
      "재활운동은 움직임 평가를 바탕으로 안정성, 가동성, 근력을 단계적으로 확인하는 과정입니다.",
  },
  {
    question: "수술 후에도 상담할 수 있나요?",
    answer:
      "의료진 안내를 받은 이후 현재 상태와 제한 사항을 기준으로 가능한 운동 방향을 상담할 수 있습니다.",
  },
  {
    question: "온라인 상담도 가능한가요?",
    answer:
      "가능합니다. 다만 정확한 확인이 필요한 경우 방문 상담이나 의료기관 상담이 함께 권장될 수 있습니다.",
  },
];

export function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <LandingSection
      id="faq"
      eyebrow="FAQ"
      title="상담 전 불안을 줄이는 질문과 답변"
      description="처음 문의하는 사용자가 가장 자주 묻는 내용을 정리했습니다."
    >
      <div className="grid gap-3">
        {faqs.map((item, index) => {
          const isOpen = active === index;
          return (
            <div key={item.question} className="rounded-lg border border-slate-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setActive(isOpen ? -1 : index)}
                className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg px-5 py-5 text-left text-lg font-black text-slate-950"
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`shrink-0 text-primary transition ${isOpen ? "rotate-180" : ""}`}
                  size={22}
                />
              </button>
              {isOpen ? <p className="px-5 pb-5 leading-7 text-slate-600">{item.answer}</p> : null}
            </div>
          );
        })}
      </div>
    </LandingSection>
  );
}

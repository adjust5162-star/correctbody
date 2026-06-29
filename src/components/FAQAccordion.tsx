"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

export function FAQAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-3">
      {faqs.map((item, index) => {
        const isOpen = active === index;
        return (
          <div key={item.question} className="rounded-md border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => setActive(isOpen ? -1 : index)}
              className="focus-ring flex w-full items-center justify-between gap-4 rounded-md px-5 py-4 text-left font-bold text-slate-950"
            >
              <span>{item.question}</span>
              <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <p className="px-5 pb-5 leading-7 text-slate-600">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

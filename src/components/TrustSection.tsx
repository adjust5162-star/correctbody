import { ShieldCheck, Star, Users } from "lucide-react";
import { medicalNotice } from "@/data/site";

export function TrustSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { label: "의료 표현 안전 검토", icon: ShieldCheck },
            { label: "시니어도 읽기 쉬운 UI", icon: Users },
            { label: "프리미엄 랜딩 흐름", icon: Star },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <Icon aria-hidden="true" className="text-secondary" size={24} />
                <p className="mt-4 text-lg font-black text-slate-950">{item.label}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-5 rounded-lg bg-surface p-5 text-sm leading-7 text-slate-600">
          {medicalNotice}
        </p>
      </div>
    </section>
  );
}

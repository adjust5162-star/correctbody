import { ContactForm } from "./ContactForm";

export function CTASection() {
  return (
    <section id="contact" className="bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_52%,#0f172a_100%)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-300">Final CTA</p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal sm:text-5xl">
            지금 내 몸에 필요한 운동 방향을 상담해 보세요
          </h2>
          <p className="mt-5 text-lg leading-8 text-blue-100">
            통증 부위, 생활 동작, 운동 경험을 남겨주시면 상담 가능한 방식으로 안내드립니다.
          </p>
          <div className="mt-8 grid gap-3 text-sm font-bold text-white sm:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-4">전문 평가 기반</div>
            <div className="rounded-lg bg-white/10 p-4">단계별 운동 계획</div>
            <div className="rounded-lg bg-white/10 p-4">모바일 안내 가능</div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

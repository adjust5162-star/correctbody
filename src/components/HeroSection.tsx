import Image from "next/image";
import { Activity, BadgeCheck, ClipboardCheck, Dumbbell, Smartphone } from "lucide-react";
import { landingStats } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

const trustBadges = [
  { label: "전문 평가 기반", icon: ClipboardCheck },
  { label: "단계별 운동 처방", icon: Dumbbell },
  { label: "모바일 운동 가이드", icon: Smartphone },
  { label: "시니어 맞춤 가능", icon: BadgeCheck },
];

export function HeroSection() {
  return (
    <section className="premium-grid relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_52%,#f8fafc_100%)]">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/82 px-4 py-2 text-sm font-bold text-primary shadow-sm">
            <Activity aria-hidden="true" size={17} />
            Premium Rehab Exercise Landing
          </p>
          <h1 className="max-w-4xl text-[2.65rem] font-black leading-[1.04] tracking-normal text-slate-950 sm:text-6xl">
            통증 회복을 위한 프리미엄 재활운동
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            목, 어깨, 허리, 무릎 통증부터 수술 후 회복까지. 내 몸의 움직임을 평가하고
            단계별 재활운동으로 회복을 돕습니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">상담 문의하기</ButtonLink>
            <ButtonLink href="#programs" variant="ghost">
              프로그램 보기
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustBadges.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-3 rounded-lg border border-white/80 bg-white/75 px-4 py-3 text-sm font-bold text-slate-800 shadow-sm backdrop-blur"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-secondary">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="fade-up-delay">
          <div className="relative overflow-hidden rounded-lg border border-white/80 bg-white p-3 shadow-[0_32px_100px_rgba(37,99,235,0.22)]">
            <div className="relative min-h-[520px] overflow-hidden rounded-lg bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1300&q=80"
                alt="재활운동 전문가가 자세를 확인하는 장면"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-lg bg-white/88 p-4 shadow-2xl backdrop-blur">
                <p className="text-sm font-bold text-slate-950">Movement Snapshot</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {landingStats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-slate-50 p-3 text-center">
                      <p className="text-xl font-black text-primary">{stat.value}</p>
                      <p className="mt-1 text-xs font-semibold text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

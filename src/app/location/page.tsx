import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "리커버핏 재활운동 센터 위치와 운영 정보를 안내합니다.",
};

export default function LocationPage() {
  return (
    <>
      <Section
        eyebrow="Location"
        title="오시는 길"
        description="방문 상담은 예약 후 진행됩니다. 아래 정보를 참고해 주세요."
        tone="surface"
      >
        <div className="grid gap-5 md:grid-cols-[1fr_1fr]">
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">센터 정보</h2>
            <dl className="mt-4 grid gap-3 text-sm leading-7 text-slate-700">
              <div>
                <dt className="font-bold text-slate-950">주소</dt>
                <dd>서울특별시 강남구 테헤란로 100, 5층</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-950">운영 시간</dt>
                <dd>평일 09:00-19:00, 토요일 09:00-14:00</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-950">상담</dt>
                <dd>전화, 온라인, 방문 예약 가능</dd>
              </div>
            </dl>
          </div>
          <div className="flex min-h-72 items-center justify-center rounded-md border border-slate-200 bg-white p-5 text-center shadow-sm">
            <div>
              <p className="text-sm font-bold text-primary">Map</p>
              <p className="mt-3 text-lg font-bold text-slate-950">지하철역 도보권 안내 영역</p>
              <p className="mt-2 text-sm text-slate-600">실서비스에서는 지도 API를 연결할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}

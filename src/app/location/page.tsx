import type { Metadata } from "next";
import { ExternalLink, MapPin } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";

const centerName = "바른몸체형관리센터";
const centerAddress = "서울특별시 강남구 테헤란로 100, 5층";
const encodedQuery = encodeURIComponent(`${centerName} ${centerAddress}`);

export const metadata: Metadata = {
  title: "오시는 길",
  description: "바른몸체형관리센터 위치와 운영 정보를 안내합니다.",
};

export default function LocationPage() {
  return (
    <>
      <Section
        eyebrow="Location"
        title="오시는 길"
        description="방문 상담은 예약 후 진행됩니다. 네이버지도 또는 구글지도로 위치를 확인해 주세요."
        tone="surface"
      >
        <div className="grid gap-5 md:grid-cols-[1fr_1fr]">
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">센터 정보</h2>
            <dl className="mt-4 grid gap-3 text-sm leading-7 text-slate-700">
              <div>
                <dt className="font-bold text-slate-950">주소</dt>
                <dd>{centerAddress}</dd>
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
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://map.naver.com/p/search/${encodedQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#03c75a] px-5 text-sm font-black text-white transition hover:bg-[#02b351]"
              >
                네이버지도
                <ExternalLink aria-hidden="true" size={16} />
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-slate-800"
              >
                구글지도
                <ExternalLink aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
          <div className="flex min-h-72 items-center justify-center rounded-md border border-slate-200 bg-white p-5 text-center shadow-sm">
            <div>
              <MapPin aria-hidden="true" className="mx-auto text-primary" size={34} />
              <p className="mt-3 text-lg font-bold text-slate-950">지도 앱에서 위치 확인</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                실제 방문 전 예약 시간을 확인하고, 지도 앱의 길찾기를 이용해 주세요.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}

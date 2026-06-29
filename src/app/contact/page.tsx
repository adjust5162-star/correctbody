import type { Metadata } from "next";
import { ExternalLink, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { medicalNotice } from "@/data/site";

const centerName = "바른몸체형관리센터";
const centerAddress = "부산광역시 기장군 기장읍 교리 342-12, 교리 가마치통닭 2층";
const encodedQuery = encodeURIComponent(`${centerName} ${centerAddress}`);

export const metadata: Metadata = {
  title: {
    absolute: "상담 문의 | 바른몸체형관리센터",
  },
  description:
    "바른몸체형관리센터 상담 문의 페이지입니다. 체형관리, 재활운동, 통증 관리 상담을 남겨 주세요.",
};

export default function ContactPage() {
  return (
    <section className="bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_45%,#f8fafc_100%)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-primary">Contact</p>
          <h1 className="mt-4 text-4xl font-black tracking-normal text-slate-950 sm:text-6xl">
            상담 문의
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            내 몸에 맞는 체형관리·재활운동이 궁금하다면 상담해 보세요.
          </p>
          <div className="mt-8 grid gap-4">
            <a
              href="tel:+821020482052"
              className="focus-ring inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-black text-white shadow-[0_18px_45px_rgba(37,99,235,0.26)] transition hover:bg-blue-700"
            >
              <Phone aria-hidden="true" size={17} />
              전화 상담 010-2048-2052
            </a>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 text-primary" size={22} />
                <div>
                  <h2 className="text-lg font-black text-slate-950">찾아오시는 길</h2>
                  <p className="mt-2 leading-7 text-slate-600">{centerAddress}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://map.naver.com/p/search/${encodedQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#03c75a] px-5 text-sm font-black text-white transition hover:bg-[#02b351]"
                >
                  네이버지도 길찾기
                  <ExternalLink aria-hidden="true" size={16} />
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodedQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-slate-800"
                >
                  구글지도 길찾기
                  <ExternalLink aria-hidden="true" size={16} />
                </a>
              </div>
            </div>
            <p className="rounded-lg bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
              {medicalNotice}
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "관리자 | 바른몸체형관리센터",
  description: "바른몸체형관리센터 관리자 페이지입니다.",
};

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-300">
          Admin
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
          관리자 페이지
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          상담 접수 문서는 관리자 인증 후에만 열람할 수 있습니다.
        </p>
        <Link
          href="/admin/contact-requests"
          className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-black text-slate-950 transition hover:bg-emerald-100"
        >
          상담 문서 열기
        </Link>
      </div>
    </main>
  );
}

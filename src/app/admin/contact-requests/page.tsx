import type { Metadata } from "next";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "상담 문서 | 바른몸체형관리센터 관리자",
  description: "바른몸체형관리센터 상담 접수 문서 관리자 페이지입니다.",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Seoul",
  }).format(new Date(value));
}

export default async function ContactRequestsAdminPage() {
  if (!supabaseAdmin) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">Admin</p>
          <h1 className="mt-3 text-3xl font-black tracking-normal">
            Supabase 관리자 읽기 설정이 필요합니다
          </h1>
          <p className="mt-4 leading-7">
            Vercel 환경변수에 `NEXT_PUBLIC_SUPABASE_URL`과 서버 전용
            `SUPABASE_SERVICE_ROLE_KEY`를 등록한 뒤 Redeploy 해 주세요.
            service role 키는 브라우저 코드에 노출하지 않습니다.
          </p>
        </div>
      </main>
    );
  }

  const { data: requests, error } = await supabaseAdmin
    .from("contact_requests")
    .select("id,name,phone,pain_area,message,contact_type,created_at")
    .order("created_at", { ascending: false })
    .limit(100);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-primary">
              Admin
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-normal text-slate-950">
              상담 문서
            </h1>
            <p className="mt-3 text-slate-600">
              최근 상담 접수 내역 100건을 관리자 권한으로 확인합니다.
            </p>
          </div>
          <p className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm">
            총 {requests?.length ?? 0}건
          </p>
        </div>

        {error ? (
          <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-6 text-red-950">
            <h2 className="text-xl font-black">상담 문서를 불러오지 못했습니다</h2>
            <p className="mt-3 leading-7">
              Supabase 환경변수와 `contact_requests` 테이블 권한을 확인해 주세요.
            </p>
            <pre className="mt-4 overflow-auto rounded-lg bg-white p-4 text-sm">
              {error.message}
            </pre>
          </div>
        ) : null}

        {!error && requests?.length === 0 ? (
          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
            아직 접수된 상담 문서가 없습니다.
          </div>
        ) : null}

        {!error && requests && requests.length > 0 ? (
          <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-100 text-xs font-black uppercase tracking-[0.08em] text-slate-600">
                  <tr>
                    <th className="px-4 py-3">접수일</th>
                    <th className="px-4 py-3">이름</th>
                    <th className="px-4 py-3">연락처</th>
                    <th className="px-4 py-3">통증 부위</th>
                    <th className="px-4 py-3">상담 방식</th>
                    <th className="px-4 py-3">메시지</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {requests.map((request) => (
                    <tr key={request.id} className="align-top">
                      <td className="whitespace-nowrap px-4 py-4 font-bold text-slate-700">
                        {formatDate(request.created_at)}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 font-bold text-slate-950">
                        {request.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <a
                          href={`tel:${request.phone.replaceAll("-", "")}`}
                          className="font-bold text-primary underline"
                        >
                          {request.phone}
                        </a>
                      </td>
                      <td className="px-4 py-4 text-slate-700">
                        {request.pain_area || "-"}
                      </td>
                      <td className="px-4 py-4 text-slate-700">
                        {request.contact_type || "-"}
                      </td>
                      <td className="min-w-64 px-4 py-4 leading-6 text-slate-700">
                        {request.message || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}

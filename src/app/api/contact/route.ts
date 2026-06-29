import { NextResponse } from "next/server";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type ContactPayload = {
  name?: string;
  phone?: string;
  area?: string;
  message?: string;
  method?: string;
  privacy?: boolean;
};

const phoneFallbackMessage =
  "온라인 저장 설정이 완료되지 않았습니다. 빠른 상담은 010-2048-2052로 전화해 주세요.";

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload.name?.trim()) {
    return NextResponse.json({ message: "이름을 입력해 주세요." }, { status: 400 });
  }

  if (!payload.phone?.trim()) {
    return NextResponse.json({ message: "연락처를 입력해 주세요." }, { status: 400 });
  }

  if (payload.phone.replace(/\D/g, "").length < 8) {
    return NextResponse.json({ message: "연락처 형식이 너무 짧습니다." }, { status: 400 });
  }

  if (!payload.privacy) {
    return NextResponse.json({ message: "개인정보 수집 동의가 필요합니다." }, { status: 400 });
  }

  if (!isSupabaseConfigured || !supabase) {
    return NextResponse.json({ message: phoneFallbackMessage }, { status: 503 });
  }

  const { error } = await supabase.from("contact_requests").insert({
    name: payload.name,
    phone: payload.phone,
    pain_area: payload.area || null,
    message: payload.message || null,
    contact_type: payload.method || null,
  });

  if (error) {
    console.error("Failed to save contact request", error);
    return NextResponse.json({ message: phoneFallbackMessage }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    message: "상담 문의가 접수되었습니다.",
  });
}

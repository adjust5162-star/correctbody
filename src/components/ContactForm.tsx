"use client";

import { useState } from "react";
import { contactMethods } from "@/data/site";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type FormState = {
  name: string;
  phone: string;
  area: string;
  message: string;
  method: string;
  privacy: boolean;
};

const initialState: FormState = {
  name: "",
  phone: "",
  area: "",
  message: "",
  method: contactMethods[0],
  privacy: false,
};

const phoneFallbackMessage =
  "온라인 저장 설정이 완료되지 않았습니다. 빠른 상담은 010-2048-2052로 전화해 주세요.";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const validate = () => {
    if (!form.name.trim()) return "이름을 입력해 주세요.";
    if (!form.phone.trim()) return "연락처를 입력해 주세요.";
    if (form.phone.replace(/\D/g, "").length < 8) return "연락처 형식이 너무 짧습니다.";
    if (!form.privacy) return "개인정보 수집 동의가 필요합니다.";
    return "";
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    if (!isSupabaseConfigured || !supabase) {
      setStatus("error");
      setError(phoneFallbackMessage);
      return;
    }

    setStatus("loading");
    const { error: insertError } = await supabase.from("contact_requests").insert({
      name: form.name,
      phone: form.phone,
      pain_area: form.area || null,
      message: form.message || null,
      contact_type: form.method || null,
    });

    if (insertError) {
      console.error("Failed to save contact request", insertError);
      setStatus("error");
      setError(phoneFallbackMessage);
      return;
    }

    setForm(initialState);
    setStatus("success");
    setError("");
  };

  return (
    <form
      onSubmit={submit}
      className="grid gap-4 rounded-lg border border-white/70 bg-white/92 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.14)] backdrop-blur"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          이름
          <input
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="focus-ring min-h-12 rounded-lg border border-slate-200 bg-white px-4"
            placeholder="홍길동"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          연락처
          <input
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="focus-ring min-h-12 rounded-lg border border-slate-200 bg-white px-4"
            placeholder="010-0000-0000"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-slate-800">
        통증 부위
        <input
          value={form.area}
          onChange={(event) => update("area", event.target.value)}
          className="focus-ring min-h-12 rounded-lg border border-slate-200 bg-white px-4"
          placeholder="예: 목, 어깨, 허리, 무릎"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-slate-800">
        증상 설명
        <textarea
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="focus-ring min-h-32 rounded-lg border border-slate-200 bg-white px-4 py-3"
          placeholder="불편한 동작, 지속 기간, 운동 경험을 적어 주세요."
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-slate-800">
        희망 상담 방식
        <select
          value={form.method}
          onChange={(event) => update("method", event.target.value)}
          className="focus-ring min-h-12 rounded-lg border border-slate-200 bg-white px-4"
        >
          {contactMethods.map((method) => (
            <option key={method}>{method}</option>
          ))}
        </select>
      </label>
      <label className="flex gap-3 rounded-lg bg-blue-surface p-4 text-sm leading-6 text-slate-700">
        <input
          type="checkbox"
          checked={form.privacy}
          onChange={(event) => update("privacy", event.target.checked)}
          className="mt-1 h-4 w-4"
        />
        개인정보 수집 및 상담 목적 연락에 동의합니다.
      </label>
      {error ? (
        <p className="rounded-lg bg-orange-50 p-3 text-sm font-bold text-orange-700">
          {error}{" "}
          <a className="underline" href="tel:+821020482052">
            전화 상담
          </a>
        </p>
      ) : null}
      {status === "success" ? (
        <p className="rounded-lg bg-emerald-50 p-3 text-sm font-bold text-emerald-700">
          상담 문의가 접수되었습니다. 확인 후 연락드리겠습니다.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring min-h-12 rounded-full bg-primary px-5 font-black text-white shadow-[0_18px_45px_rgba(37,99,235,0.26)] transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {status === "loading" ? "접수 중" : "상담 문의 제출"}
      </button>
    </form>
  );
}

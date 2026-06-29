"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/82 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring rounded-md text-2xl font-black tracking-normal text-slate-950 sm:text-3xl">
          RecoverFit
        </Link>
        <nav aria-label="주요 메뉴" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md text-sm font-semibold text-slate-600 transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="#contact">상담 문의하기</ButtonLink>
        </div>
        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 lg:hidden"
        >
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 lg:hidden">
          <nav aria-label="모바일 메뉴" className="mx-auto grid max-w-7xl gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-2 py-3 text-base font-bold text-slate-800 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink href="#contact">상담 문의하기</ButtonLink>
        </div>
      ) : null}
    </header>
  );
}

import Link from "next/link";
import { medicalNotice, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <p className="text-2xl font-black">RecoverFit</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{medicalNotice}</p>
        </div>
        <nav aria-label="하단 메뉴" className="grid grid-cols-2 gap-2 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-300 hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="#contact" className="font-bold text-white">
            상담 문의
          </Link>
        </nav>
      </div>
    </footer>
  );
}

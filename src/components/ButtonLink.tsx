import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-primary text-white shadow-[0_18px_45px_rgba(37,99,235,0.28)] hover:bg-blue-700",
    secondary:
      "bg-slate-950 text-white shadow-[0_18px_45px_rgba(15,23,42,0.20)] hover:bg-slate-800",
    ghost:
      "border border-slate-200 bg-white/80 text-slate-950 backdrop-blur hover:bg-white",
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition ${styles[variant]}`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={16} strokeWidth={2.4} />
    </Link>
  );
}

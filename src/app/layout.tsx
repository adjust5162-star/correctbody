import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rehab-exercise.example"),
  title: {
    default: "리커버핏 | 프리미엄 재활운동",
    template: "%s | 리커버핏",
  },
  description:
    "목, 어깨, 허리, 무릎 통증부터 수술 후 회복까지. 움직임 평가 기반의 재활운동 프로그램과 상담 문의를 제공하는 전문 랜딩페이지입니다.",
  keywords: [
    "재활운동",
    "통증 회복 운동",
    "허리 통증 운동",
    "무릎 통증 재활",
    "어깨 통증 스트레칭",
    "거북목 교정운동",
    "라운드 숄더 운동",
    "수술 후 재활운동",
    "시니어 낙상 예방 운동",
    "물리치료 운동",
  ],
  openGraph: {
    title: "재활운동 전문 랜딩페이지 | 통증 회복과 맞춤 운동",
    description:
      "움직임 평가 기반의 프리미엄 재활운동 프로그램과 상담 문의를 제공합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

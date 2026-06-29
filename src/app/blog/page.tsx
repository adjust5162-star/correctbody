import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { blogPosts } from "@/data/exercises";

export const metadata: Metadata = {
  title: "운동 콘텐츠 블로그",
  description: "재활운동 상담 준비, 시니어 운동, 허리 운동 관련 블로그 콘텐츠입니다.",
};

export default function BlogPage() {
  return (
    <>
      <Section
        eyebrow="Blog"
        title="상담 전 읽기 좋은 재활운동 블로그"
        description="검색 유입을 고려한 콘텐츠로 사용자의 궁금증을 상담 문의까지 자연스럽게 연결합니다."
        tone="surface"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}

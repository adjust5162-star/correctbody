import type { Metadata } from "next";
import { ExerciseCard } from "@/components/ExerciseCard";
import { Section } from "@/components/Section";
import { exercises } from "@/data/exercises";
import { medicalNotice } from "@/data/site";

export const metadata: Metadata = {
  title: "운동 콘텐츠",
  description: "목, 어깨, 허리, 무릎 부위별 재활운동 콘텐츠를 제공합니다.",
};

export default function ExercisesPage() {
  return (
    <Section
      eyebrow="Exercises"
      title="부위별 운동 콘텐츠"
      description={medicalNotice}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.title} {...exercise} />
        ))}
      </div>
    </Section>
  );
}

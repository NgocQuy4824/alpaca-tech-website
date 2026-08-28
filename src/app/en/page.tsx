import type { Metadata } from "next";
import { Hero } from "@/components/sites/alpaca-tech/sections/Hero";
import { SolutionsSection } from "@/components/sites/alpaca-tech/sections/SolutionsSection";
import { CompanyTeaser } from "@/components/sites/alpaca-tech/sections/CompanyTeaser";
import { RecruitTeaser } from "@/components/sites/alpaca-tech/sections/RecruitTeaser";
import { InfiniteMarquee } from "@/components/sites/alpaca-tech/sections/InfiniteMarquee";
import { NewsTeaser } from "@/components/sites/alpaca-tech/sections/NewsTeaser";

export const metadata: Metadata = {
  title: "AlpacaTech — Beyond Limits in Finance with Data Science",
  description:
    "AlpacaTech is a technology company that develops solutions for investment management, research, analysis and system integration for the financial industry.",
};

export default function EnPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <SolutionsSection />
      <CompanyTeaser />
      <RecruitTeaser />
      <InfiniteMarquee />
      <NewsTeaser />
    </main>
  );
}

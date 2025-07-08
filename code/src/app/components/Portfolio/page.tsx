import { portfolioData } from "./data";
import PortfolioGrid from "./PortfolioGrid";

export default function PortfolioPage() {
  return (
    <main className="bg-[#1A3C36] min-h-screen py-8">
      <h1 className="text-4xl font-bold text-center text-[#7ED6C1] mb-10">Portfolio</h1>
      {portfolioData.map((section, idx) => (
        <PortfolioGrid key={idx} category={section.category} projects={section.projects} />
      ))}
    </main>
  );
}

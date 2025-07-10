'use client';

import PortfolioCard from "./PortfolioCard";

type Props = {
  category: string;
  projects: {
    title: string;
    tag: string;
    image: string;
  }[];
};

export default function PortfolioGrid({ category, projects }: Props) {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center text-[#7ED6C1] mb-8">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
        {projects.map((project, idx) => (
          <PortfolioCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}

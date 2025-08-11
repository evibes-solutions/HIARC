'use client';

import { useState, useEffect } from 'react';

const sections = ['home', 'services', 'portfolio', 'about', 'contactus'];

export default function DotNavigation() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let current = 'home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop < scrollPosition) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col gap-4 z-50">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="w-4 h-4 flex items-center justify-center"
        >
          <div
            className={`rounded-full transition-all duration-300 ${
              activeSection === section
                ? 'w-2 h-2 bg-black'
                : 'w-1 h-1 bg-black/50'
            }`}
          />
        </a>
      ))}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT US', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">
        <button onClick={() => setIsOpen(true)} className="z-50 text-gray-300">
          <Menu size={28} />
        </button>

        <div className="flex items-center space-x-2 cursor-pointer">
          <a href="#home">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#1A3C36] z-40 flex flex-col items-center pt-16 px-6">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="mb-12 cursor-pointer"
          />

          <ul className="text-center text-lg font-medium space-y-6 tracking-wide">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-[#7ED6C1] hover:text-white transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute bottom-10 text-[#7ED6C1] hover:text-white transition"
          >
            <X size={28} />
          </button>
        </div>
      )}
    </nav>
  );
}

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A3C36] shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">
  
        <button onClick={() => setIsOpen(true)} className="z-50 text-white">
          <Menu size={28} />
        </button>

        
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      
      {isOpen && (
        <div className="fixed inset-0 bg-[#1A3C36] z-40 flex flex-col items-center pt-16 px-6">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="mb-12"
          />

          <ul className="text-center text-lg font-medium space-y-6 tracking-wide">
            <li className="cursor-pointer text-[#7ED6C1] hover:text-white">HOME</li>
            <li className="cursor-pointer text-[#7ED6C1] hover:text-white">ABOUT</li>
            <li className="cursor-pointer text-[#7ED6C1] hover:text-white">SERVICES</li>
            <li className="cursor-pointer text-[#7ED6C1] hover:text-white">PORTFOLIO</li>
            <li className="cursor-pointer text-[#7ED6C1] hover:text-white">CONTACT US</li>
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

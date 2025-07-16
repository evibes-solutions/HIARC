'use client';

import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const teamMembers = [
    {
      name: 'Member 1',
      designation: 'Role',
      image: '/team1.jpg',
    },
    {
      name: 'Member 2',
      designation: 'Role',
      image: '/team2.jpg',
    },
  ];

  return (
    <>
      <section
        id="about"
        className="bg-[#1A3C36] min-h-screen flex flex-col items-center justify-center pb-8 px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-3xl font-bold text-[#7ED6C1] tracking-widest mb-2 text-center"
        >
          ABOUT US
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-[2px] bg-[#7ED6C1] mb-12 origin-left"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="object-contain mt-10 mb-10"
          />
        </motion.div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce mt-4 text-[#7ED6C1]"
          aria-label="Scroll to team section"
        >
          <ChevronDown size={36} />
        </button>
      </section>

      <section
        ref={aboutRef}
        className="bg-[#629e90] text-[#1A3C36] pt-5 pb-20 px-4 md:px-20"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold mb-6">WHO WE ARE</h2>
            <p className="text-lg leading-7">info</p>
          </motion.div>

          <div className="flex justify-center gap-4 flex-wrap">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group w-48 h-64 overflow-hidden rounded-md shadow-md"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition bg-[#1A3C36]/80 text-white text-center px-2">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-[#7ED6C1]">{member.designation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

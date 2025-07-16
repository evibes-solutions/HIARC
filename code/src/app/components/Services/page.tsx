'use client';

import { Home, Ruler, Hammer, Map } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const services = [
    { name: 'ARCHITECTS', icon: <Ruler size={40} /> },
    { name: 'INTERIOR DESIGN', icon: <Home size={40} /> },
    { name: 'PLANNERS', icon: <Map size={40} /> },
    { name: 'CONSTRUCTION', icon: <Hammer size={40} /> },
  ];

  return (
    <section
      id="services"
      className="min-h-[110vh] bg-[#1A3C36] text-[#7ED6C1] flex flex-col items-center justify-center px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-3xl font-bold tracking-widest mb-2 text-center mt-10"
      >
        OUR SERVICES
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-24 h-[2px] bg-[#7ED6C1] mb-12 origin-left"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#F5F5F5] text-[#1A3C36] w-full h-[220px] flex flex-col items-center justify-center rounded-sm shadow-sm cursor-pointer transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <p className="text-base tracking-wide text-center font-light">
              {service.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-8 pt-20 relative">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Teksti - Majtas */}
        <div className="md:col-span-7 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl md:text-8xl font-light tracking-tight leading-none mb-6"
          >
            Simplicity <br />
            <span className="italic font-normal">redefined.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-[#1A1A1A]/70 max-w-md font-light leading-relaxed mb-8"
          >
            Crafting minimalist Nordic furniture that harmonizes space, light, and premium natural materials.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#1A1A1A] text-white px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#2C2C2C] transition-colors duration-300"
          >
            Explore Collection
          </motion.button>
        </div>

        {/* Imazhi i madh - Djathtas */}
        <div className="md:col-span-5 relative w-full h-[50vh] md:h-[70vh] bg-[#ECEBE9]">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative overflow-hidden"
          >
            {/* Ky është një placeholder imazhi premium nga Unsplash (Karrige Minimaliste) */}
            <img 
              src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop" 
              alt="Minimalist Chair" 
              className="w-full h-full object-cover grayscale contrast-110 hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          {/* Dekorim absolut për ndjesi agjencie (Design Detail) */}
          <span className="absolute bottom-4 right-4 text-[10px] tracking-widest uppercase text-[#1A1A1A]/40 font-mono hidden md:block">
            [ Model 01 // 2026 ]
          </span>
        </div>

      </div>
    </section>
  );
}
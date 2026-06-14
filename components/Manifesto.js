'use client';
import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section className="py-40 bg-[#FBFBFA] text-[#1A1A1A] relative overflow-hidden border-b border-[#1A1A1A]/5">
      <div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center mb-24">
        
        {/* Numëruesi Minimalist */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-mono tracking-widest uppercase text-[#1A1A1A]/40 block mb-8"
        >
          01 // Our Philosophy
        </motion.span>
        
        {/* Titulli i Madh i Qendërsuar me Skalë Luksoze */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-6xl font-light tracking-tight leading-tight mb-8 max-w-3xl"
        >
          We believe in spaces that breathe, objects that endure, and materials that tell a story.
        </motion.h2>
        
        {/* Paragrafi Mbështetës */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-[#1A1A1A]/60 font-light leading-relaxed max-w-xl"
        >
          Norse Form is born out of a desire to strip away the noise of modern consumerism. Every piece we craft is a silent rebellion against the temporary—designed with architectural precision, sourced sustainably, and refined by hand to elevate your everyday rituals.
        </motion.p>
      </div>

      {/* Grid-i i Ri Asimetrik i Imazheve (Thyerja e modelit të image_1ecad5.jpg) */}
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-12 gap-8 relative h-[450px] md:h-[600px] items-center">
        
        {/* Imazhi i parë: Majtas - Më i madh, i tërhequr pak poshtë */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-7 md:col-span-6 aspect-[4/3] bg-[#ECEBE9] rounded-lg overflow-hidden shadow-sm relative z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop" 
            alt="Craftsmanship and natural textures" 
            className="w-full h-full object-cover grayscale contrast-110 hover:scale-102 transition-transform duration-700"
          />
          <span className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest uppercase text-white/60">[ 01 / Texture Studio ]</span>
        </motion.div>

        {/* Imazhi i dytë: Djathtas - Më i vogël, i ngritur lart (Asymmetric Balance) */}
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: -60 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="col-span-5 md:col-span-4 md:col-start-9 aspect-[3/4] bg-[#ECEBE9] rounded-lg overflow-hidden shadow-md relative z-20"
        >
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" 
            alt="Minimalist architectural space" 
            className="w-full h-full object-cover grayscale contrast-105 hover:scale-102 transition-transform duration-700"
          />
          <span className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest uppercase text-white/60">[ 02 / Spatial Light ]</span>
        </motion.div>

      </div>
    </section>
  );
}
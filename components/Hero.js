'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen pt-40 pb-20 px-8 flex items-center justify-center bg-[#FBFBFA] relative overflow-hidden">
      
      {/* Grid-i Arkitekturor me 12 Kolona */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
        
        {/* KOLONA 1: Teksti dhe CTA (5 Kolona) */}
        <div className="lg:col-span-5 flex flex-col justify-between py-4 z-10">
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10px] font-mono tracking-widest uppercase text-[#1A1A1A]/40 block"
            >
              [ Studio Edition // 2026 ]
            </motion.span>
            
            <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight leading-[1.05] text-[#1A1A1A]">
              Simplicity <br />
              <span className="italic font-normal text-[#1A1A1A]/70">redefined</span> 
              <span className="text-blue-600">.</span>
            </h1>
            
            <p className="text-xs md:text-sm text-[#1A1A1A]/60 font-light leading-relaxed max-w-sm">
              Crafting minimalist Nordic furniture that harmonizes structural space, natural light, and premium architectural materials.
            </p>
          </div>

          {/* Butoni Premium me Hover Efekt Mbushjeje */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0"
          >
            <button className="relative group overflow-hidden border border-[#1A1A1A] px-8 py-4 rounded-full text-xs font-mono uppercase tracking-widest text-[#1A1A1A] bg-transparent transition-colors duration-500 hover:text-white cursor-pointer">
              <span className="absolute inset-0 bg-[#1A1A1A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Collection <span>→</span>
              </span>
            </button>
          </motion.div>
        </div>

        {/* KOLONA 2: Imazhi Monolit (5 Kolona) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-5 relative aspect-[3/4] lg:aspect-auto lg:h-[650px] bg-[#ECEBE9] rounded-2xl overflow-hidden shadow-[0_32px_64px_-20px_rgba(0,0,0,0.06)]"
        >
          <img 
            src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop" 
            alt="Norse Minimalist Chair" 
            className="w-full h-full object-cover grayscale contrast-105 scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          <span className="absolute bottom-6 left-6 text-[9px] font-mono tracking-widest uppercase text-white/70">
            Model 01 // Matte Black Ash
          </span>
        </motion.div>

        {/* KOLONA 3: Metadata Teknike (2 Kolona - Zhduk monotoninë) */}
        <div className="lg:col-span-2 hidden lg:flex flex-col justify-between py-4 border-l border-[#1A1A1A]/5 pl-6 text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/40">
          <div className="space-y-6">
            <div>
              <span className="text-[#1A1A1A]/80 block mb-1">Materials</span>
              <p className="font-light normal-case">Solid European Oak, Premium Bouclé, Brushed Steel.</p>
            </div>
            <div>
              <span className="text-[#1A1A1A]/80 block mb-1">Origin</span>
              <p className="font-light normal-case">Copenhagen, Denmark.</p>
            </div>
          </div>
          
          <div className="space-y-1">
            <span className="text-[#1A1A1A]/80 block">Dimensions</span>
            <p className="font-light">H 78cm x W 56cm</p>
          </div>
        </div>

      </div>

      {/* Element dekorativ sfondi - Rrethi i dritës luksoze */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
'use client';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const SPACES = [
  { id: 1, title: 'The Desert Retreat', location: 'Joshua Tree, CA', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Minimalist Penthouse', location: 'Copenhagen, DK', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'The Brutalist Studio', location: 'Berlin, DE', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, title: 'Oak & Clay Residence', location: 'Kyoto, JP', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop' },
];

export default function Inspiration() {
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-32 px-8 bg-[#ECEBE9]/30 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16 flex justify-between items-end">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#1A1A1A]/40 block mb-3">02 // Spaces</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight">Inspiration Gallery</h2>
        </div>
        <span className="text-xs font-mono text-[#1A1A1A]/40 hidden sm:block">[ Drag to explore ]</span>
      </div>

      {/* Slider Container me Framer Motion Drag */}
      <motion.div ref={sliderRef} className="cursor-grab active:cursor-grabbing max-w-6xl mx-auto">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8 w-max"
        >
          {SPACES.map((space) => (
            <motion.div 
              key={space.id} 
              className="w-[300px] sm:w-[450px] pointer-events-none"
            >
              <div className="w-full aspect-[16/10] bg-[#ECEBE9] overflow-hidden rounded-lg mb-4">
                <img 
                  src={space.img} 
                  alt={space.title} 
                  className="w-full h-full object-cover grayscale contrast-105"
                />
              </div>
              <div className="flex justify-between items-baseline px-1">
                <h3 className="text-sm font-medium tracking-wide text-[#1A1A1A]">{space.title}</h3>
                <span className="text-[11px] font-mono text-[#1A1A1A]/40">{space.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
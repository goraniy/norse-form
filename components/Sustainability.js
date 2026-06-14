'use client';
import { motion } from 'framer-motion';

const VALUES = [
  { id: '01', title: 'Sustainably Sourced', desc: 'Every log of oak and ash is harvested from certified, strictly regulated state forests in Denmark and Germany, ensuring biodiversity is preserved.' },
  { id: '02', title: '100% Circular Wool', desc: 'Our textiles are woven from pure, recycled wool components, eliminating chemical dyes and reducing water wastage by eighty-five percent.' },
  { id: '03', title: 'Generational Craft', desc: 'We do not design for the decade. Built with traditional joinery, each structural connection is crafted to be restored and passed down for generations.' }
];

export default function Sustainability() {
  return (
    <section className="py-32 px-8 max-w-6xl mx-auto">
      <div className="mb-20">
        <span className="text-[10px] font-mono tracking-widest uppercase text-[#1A1A1A]/40 block mb-3">03 // Stewardship</span>
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight max-w-xl leading-tight">
          Honoring nature through circular craftsmanship.
        </h2>
      </div>

      {/* Grid-i i Kartave me Hover Efekte */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {VALUES.map((val) => (
          <motion.div 
            key={val.id}
            whileHover={{ y: -8, backgroundColor: '#1A1A1A', color: '#FBFBFA' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border border-[#1A1A1A]/10 rounded-xl p-8 bg-transparent text-[#1A1A1A] transition-colors duration-300 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <span className="text-xs font-mono opacity-40 block mb-8">{val.id} //</span>
              <h3 className="text-lg font-serif font-light tracking-wide mb-4">{val.title}</h3>
            </div>
            <p className="text-xs font-light leading-relaxed opacity-70">
              {val.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
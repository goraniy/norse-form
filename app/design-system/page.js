'use client';
import Link from 'next/link';

export default function DesignSystem() {
  return (
    <main className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] p-16 max-w-4xl mx-auto">
      {/* Koka e Faqes */}
      <div className="border-b border-[#1A1A1A]/10 pb-8 mb-12">
        <Link href="/" className="text-xs tracking-widest uppercase font-medium text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors">
          ← Back to Live Site
        </Link>
        <h1 className="font-serif text-4xl font-light mt-4">Norse Form — Design System</h1>
        <p className="text-sm text-[#1A1A1A]/60 font-mono mt-2">Prepared for the Frontend Engineering Team</p>
      </div>

      {/* Seksioni 1: Ngjyrat */}
      <section className="mb-16">
        <h2 className="text-xs font-mono tracking-widest uppercase text-[#1A1A1A]/40 mb-6">01 // Color Palette</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <div className="w-full h-24 bg-[#FBFBFA] border border-[#1A1A1A]/10 rounded-lg shadow-sm"></div>
            <span className="text-xs font-medium font-mono">Background: #FBFBFA</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-24 bg-[#1A1A1A] rounded-lg"></div>
            <span className="text-xs font-medium font-mono">Primary Text: #1A1A1A</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-24 bg-[#ECEBE9] rounded-lg"></div>
            <span className="text-xs font-medium font-mono">Image Cards: #ECEBE9</span>
          </div>
        </div>
      </section>

      {/* Seksioni 2: Tipografia */}
      <section className="mb-16 border-t border-[#1A1A1A]/5 pt-12">
        <h2 className="text-xs font-mono tracking-widest uppercase text-[#1A1A1A]/40 mb-6">02 // Typography</h2>
        <div className="space-y-6">
          <div>
            <span className="text-[10px] font-mono text-[#1A1A1A]/40 block mb-1">Display H1 (Playfair Display Light)</span>
            <h1 className="font-serif text-5xl font-light tracking-tight">Simplicity redefined.</h1>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#1A1A1A]/40 block mb-1">Body Text (Inter Light)</span>
            <p className="text-base font-light text-[#1A1A1A]/70 max-w-md leading-relaxed">
              Crafting minimalist Nordic furniture that harmonizes space, light, and premium natural materials.
            </p>
          </div>
        </div>
      </section>

      {/* Seksioni 3: Butonat dhe Gjendjet (Button States) */}
      <section className="mb-16 border-t border-[#1A1A1A]/5 pt-12">
        <h2 className="text-xs font-mono tracking-widest uppercase text-[#1A1A1A]/40 mb-6">03 // Interactive Components (Buttons)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-end">
          <div>
            <span className="text-[10px] font-mono text-[#1A1A1A]/40 block mb-2">Default State</span>
            <button className="bg-[#1A1A1A] text-white px-8 py-4 text-xs tracking-widest uppercase font-medium w-full">
              Explore Collection
            </button>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#1A1A1A]/40 block mb-2">Hover State (Opacity 85%)</span>
            <button className="bg-[#2C2C2C] text-white px-8 py-4 text-xs tracking-widest uppercase font-medium w-full opacity-85">
              Explore Collection
            </button>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#1A1A1A]/40 block mb-2">Secondary/Outline State</span>
            <button className="border border-[#1A1A1A]/20 px-8 py-4 text-xs tracking-widest uppercase font-medium text-[#1A1A1A]/60 w-full">
              Natural Oak
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
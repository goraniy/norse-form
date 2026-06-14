'use client';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FBFBFA] pt-32 pb-16 px-8 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Rreshti i Sipërm: Grid-i Kryesor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-16 pb-20 border-b border-white/10">
          
          {/* Kolona e Newsletter (Zgjatur në 5 kolona për më shumë hapësirë) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-3xl font-light tracking-tight mb-4">Stay in our orbit.</h3>
              <p className="text-xs text-white/50 font-light max-w-sm mb-8 leading-relaxed">
                Subscribe to receive exclusive collection previews, design essays, and studio updates.
              </p>
            </div>
            
            {/* Formuari i rregulluar - Fix për thyerjen e tekstit te image_1ece37.png */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center justify-between border-b border-white/20 pb-3 max-w-md focus-within:border-white transition-colors duration-300 group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border-none text-xs w-full focus:outline-none placeholder-white/30 tracking-wide font-light pr-4 text-[#FBFBFA]"
              />
              <button 
                type="submit" 
                className="text-[11px] font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 whitespace-nowrap flex items-center gap-1"
              >
                Submit <span className="transform group-focus-within:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </form>
          </div>

          {/* Hapësirë bosht për balancë vizuale (1 kolonë) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Linket e Sitemap (6 kolona - rreshtuar në mënyrë perfekte) */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-8 pt-2">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-white/30 block mb-6">Collection</span>
              <ul className="space-y-3 text-xs font-light text-white/60">
                <li><a href="#products" className="hover:text-white transition-colors duration-300">Seating</a></li>
                <li><a href="#products" className="hover:text-white transition-colors duration-300">Tables</a></li>
                <li><a href="#products" className="hover:text-white transition-colors duration-300">Shelving</a></li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-white/30 block mb-6">Studio</span>
              <ul className="space-y-3 text-xs font-light text-white/60">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-white/30 block mb-6">Support</span>
              <ul className="space-y-3 text-xs font-light text-white/60">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Rreshti i Poshtëm: Copyright & Socials */}
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-mono tracking-widest text-white/40 uppercase">
          <div className="text-center sm:text-left">
            © 2026 NORSE FORM. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors duration-300">[ Instagram ]</a>
            <a href="#" className="hover:text-white transition-colors duration-300">[ Pinterest ]</a>
            <a href="#" className="hover:text-white transition-colors duration-300">[ Figma ]</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
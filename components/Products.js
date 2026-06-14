'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Koleksioni i zgjeruar me 6 produkte premium me imazhe të koordinuara
export const PRODUCTS = [
  { 
    id: 'svalbard-lounge', 
    name: 'Svalbard Lounge Chair', 
    price: '$1,250', 
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop', 
    desc: 'An icon of Nordic minimalism, combining a sculpted solid oak frame with premium tailored wool upholstery. Designed for ultimate comfort without compromising on clean architectural lines.' 
  },
  { 
    id: 'fjord-dining', 
    name: 'Fjord Oak Dining Table', 
    price: '$2,400', 
    img: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000&auto=format&fit=crop', 
    desc: 'Crafted from sustainably sourced European white oak. The Fjord dining table features softly tapered edges and hidden joinery, celebrating the natural warmth and grain of the wood.' 
  },
  { 
    id: 'oslo-stool', 
    name: 'Oslo Minimalist Stool', 
    price: '$450', 
    img: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000&auto=format&fit=crop', 
    desc: 'Versatile, compact, and perfectly balanced. The Oslo stool serves as additional seating or a sculptural side piece, featuring a hand-finished matte lacquer surface.' 
  },
  { 
    id: 'stockholm-sofa', 
    name: 'Stockholm 3-Seater Sofa', 
    price: '$3,800', 
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop', 
    desc: 'A deep, welcoming sofa that anchors any living space. Built with a heavy timber frame, pocket springs, and wrapped in a premium, textured linen blend fabric.' 
  },
  { 
    id: 'bergen-shelf', 
    name: 'Bergen Modular Shelving', 
    price: '$1,650', 
    img: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000&auto=format&fit=crop', 
    desc: 'An elegant modular storage solution. The Bergen system features adjustable oak shelves and powder-coated steel brackets, balancing industrial strength with warm wood tones.' 
  },
  { 
    id: 'narvik-pendant', 
    name: 'Narvik Aluminum Pendant', 
    price: '$320', 
    img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000&auto=format&fit=crop', 
    desc: 'A sculptural light fixture cast from brushed aluminum. The Narvik pendant directs soft, glare-free light downward, perfect for illuminating dining spaces or minimalist workspaces.' 
  }
];

export default function Products() {
  return (
    <section id="products" className="py-32 px-8 max-w-6xl mx-auto">
      {/* Koka e Koleksionit */}
      <div className="flex justify-between items-end mb-16 border-b border-[#1A1A1A]/10 pb-6">
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight">The Core Collection</h2>
        <span className="text-xs tracking-widest uppercase text-[#1A1A1A]/60 font-medium">
          {PRODUCTS.length < 10 ? `0${PRODUCTS.length}` : PRODUCTS.length} Items
        </span>
      </div>

      {/* Grid-i i Produkteve (Responsive: 1 kolonë në mobile, 2 në tablet, 3 në desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-20">
        {PRODUCTS.map((product) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group"
          >
            <Link href={`/product/${product.id}`}>
              {/* Korniza e Imazhit */}
              <div className="w-full aspect-[3/4] bg-[#ECEBE9] overflow-hidden relative mb-4 rounded-lg">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-md text-[#1A1A1A] px-6 py-3 text-xs tracking-wider uppercase font-medium shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 rounded-full">
                    View Details
                  </span>
                </div>
              </div>

              {/* Detajet */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium tracking-wide text-[#1A1A1A] group-hover:opacity-60 transition-opacity">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/50 mt-1 font-mono">Nordic Design / Premium Quality</p>
                </div>
                <span className="text-sm font-light font-serif">{product.price}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
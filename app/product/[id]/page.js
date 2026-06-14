'use client';
import { use, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../../../components/Products';
import { useCart } from '../../../context/CartContext';

export default function ProductDetail({ params }) {
  // Përdorim `use()` për të zbërthyer params në mënyrë asinkrone sipas standardeve të Next.js
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  
  const product = PRODUCTS.find((p) => p.id === id);
  
  // Thërrasim funksionin për të shtuar produktin në shportën globale
  const { addToCart } = useCart();

  // Logjika për të ruajtur materialin e përzgjedhur (Default: Natural Oak)
  const [selectedWood, setSelectedWood] = useState('Natural Oak');
  
  // Logjika për të treguar njoftimin kur shtohet në shportë
  const [addedToBag, setAddedToBag] = useState(false);

  if (!product) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-[#FBFBFA]">
        <h1 className="text-xl font-light mb-4">Product not found.</h1>
        <Link href="/" className="text-sm underline font-medium">Back to collection</Link>
      </div>
    );
  }

  const handleAddToBag = () => {
    addToCart(product, selectedWood); // Shton produktin në shportën globale dhe LocalStorage
    setAddedToBag(true);
    
    // Njoftimi zhduket automatikisht pas 3 sekondave
    setTimeout(() => setAddedToBag(false), 3000);
  };

  return (
    <main className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] px-8 pt-32 pb-20 relative">
      
      {/* Njoftimi Premium (Toast Notification) */}
      <AnimatePresence>
        {addedToBag && (
          <motion.div 
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-10 left-1/2 z-50 bg-[#1A1A1A] text-white px-8 py-4 text-xs tracking-widest uppercase font-medium rounded-full shadow-lg border border-white/10 backdrop-blur-md"
          >
            Added to Bag: {product.name} ({selectedWood})
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigimi i Kthimit */}
      <div className="max-w-6xl mx-auto mb-12">
        <Link href="/" className="group inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors">
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back to Collection
        </Link>
      </div>

      {/* Grid-i Kryesor i Produktit */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        
        {/* Kolona e Majtë: Imazhi i Madh me Animacion */}
        <div className="md:col-span-7 bg-[#ECEBE9] rounded-xl overflow-hidden aspect-[4/5]">
          <motion.img 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={product.img} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Kolona e Djathtë: Informacioni e Opsionet Premium */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-mono tracking-widest uppercase text-[#1A1A1A]/40 mb-2 block">[ Core Edition ]</span>
            <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4 leading-tight">{product.name}</h1>
            <p className="font-serif text-2xl font-light mb-8">{product.price}</p>
            
            <p className="text-base text-[#1A1A1A]/70 font-light leading-relaxed mb-8 border-t border-[#1A1A1A]/10 pt-6">
              {product.desc}
            </p>

            {/* Opsionet Luksoze (Zgjedhja e Materialit - UI Detaj) */}
            <div className="mb-8">
              <span className="text-xs tracking-widest uppercase font-medium text-[#1A1A1A]/60 mb-3 block">
                Finishing Wood: <span className="text-[#1A1A1A] font-semibold">{selectedWood}</span>
              </span>
              <div className="flex gap-3">
                {['Natural Oak', 'Smoked Oak', 'Black Lacquer'].map((wood) => (
                  <button
                    key={wood}
                    onClick={() => setSelectedWood(wood)}
                    className={`border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                      selectedWood === wood
                        ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-sm'
                        : 'border-[#1A1A1A]/20 text-[#1A1A1A]/60 hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {wood}
                  </button>
                ))}
              </div>
            </div>

            {/* Butoni i Shtimit në Shportë */}
            <motion.button 
              onClick={handleAddToBag}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-[#1A1A1A] text-white py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#2C2C2C] transition-colors duration-300 shadow-md"
            >
              Add to Bag
            </motion.button>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
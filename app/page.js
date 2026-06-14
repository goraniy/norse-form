'use client';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import Inspiration from '../components/Inspiration'; // Seksioni i ri
import Products from '../components/Products';
import Sustainability from '../components/Sustainability'; // Seksioni i ri
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const { cart, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white overflow-hidden">
      {/* Navigimi Premium */}
      <nav className="w-[92%] max-w-6xl mx-auto py-4 px-6 flex justify-between items-center fixed top-6 left-0 right-0 z-50 rounded-full backdrop-blur-xl bg-white/40 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.03)]">
        <span className="font-serif text-xl font-bold tracking-tight">NORSE FORM</span>
        <div className="flex gap-8 text-xs font-medium tracking-wide uppercase items-center">
          <a href="#products" className="hover:opacity-50 transition-opacity">Collection</a>
          <button 
            onClick={() => setIsCartOpen(true)} 
            className="hover:opacity-50 transition-opacity font-medium uppercase tracking-wide text-xs"
          >
            Cart ({cart.length})
          </button>
        </div>
      </nav>

      {/* Rrjedha Finale e Seksioneve */}
      <Hero />
      <Manifesto />
      <Inspiration />
      <Products />
      <Sustainability />
      <Footer />

      {/* Slide-out Cart Panel */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[450px] bg-white z-50 shadow-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center border-b border-[#1A1A1A]/10 pb-6 mb-6">
                  <h2 className="font-serif text-2xl font-light">Your Bag</h2>
                  <button onClick={() => setIsCartOpen(false)} className="text-xs uppercase tracking-widest opacity-50 hover:opacity-100 font-mono">[ Close ]</button>
                </div>

                {cart.length === 0 ? (
                  <p className="text-sm font-light text-[#1A1A1A]/50 py-12 text-center">Your cart is empty.</p>
                ) : (
                  <div className="space-y-6 overflow-y-auto max-h-[60vh] pr-2">
                    {cart.map((item) => (
                      <div key={item.cartId} className="flex gap-4 border-b border-[#1A1A1A]/5 pb-4 items-center justify-between">
                        <div className="flex gap-4 items-center">
                          <img src={item.img} alt={item.name} className="w-16 h-20 object-cover rounded bg-[#ECEBE9]" />
                          <div>
                            <h4 className="text-xs font-medium tracking-wide">{item.name}</h4>
                            <p className="text-[10px] font-mono text-[#1A1A1A]/40 mt-0.5">{item.selectedWood}</p>
                            <p className="text-xs font-serif font-light mt-1">{item.price}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-[10px] uppercase tracking-widest text-red-500/70 hover:text-red-600 font-mono"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-[#1A1A1A]/10 pt-6">
                  <button className="w-full bg-[#1A1A1A] text-white py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#2C2C2C] transition-colors duration-300 shadow-md">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
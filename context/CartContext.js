'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Ngarko shportën nga LocalStorage nëse ekziston kur hapet faqja
  useEffect(() => {
    const savedCart = localStorage.getItem('norse_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Ruaj shportën në LocalStorage sa herë që ndryshon
  const addToCart = (product, wood) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, { ...product, selectedWood: wood, cartId: Date.now() }];
      localStorage.setItem('norse_cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (cartId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.cartId !== cartId);
      localStorage.setItem('norse_cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('norse_cart');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      ={children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
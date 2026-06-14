import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "../context/CartContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "Norse Form | Premium Nordic Furniture",
  description: "Minimalist Nordic furniture that harmonizes space and light.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
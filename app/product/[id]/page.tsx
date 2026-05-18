"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineArrowLongLeft,
  HiOutlineShoppingBag,
  HiCheck,
} from "react-icons/hi2";
import Link from "next/link";
import { products } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  const [selectedVariations, setSelectedVariations] = useState<
    Record<string, string>
  >({});
  const [isAdded, setIsAdded] = useState(false);

  // Initialize variations
  useEffect(() => {
    if (product?.variations) {
      const initial: Record<string, string> = {};
      Object.entries(product.variations).forEach(([key, values]) => {
        if (values.length > 0) initial[key] = values[0];
      });
      setSelectedVariations(initial);
    }
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedVariations);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Grid: Visual Showcase */}
        <section className="relative bg-[#F6F6F6] flex items-center justify-center p-12 lg:p-24 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-md aspect-square bg-white rounded-2xl overflow-hidden shadow-sm flex items-center justify-center p-12"
          >
            {/* Aspect ratio applied to image, not container */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto aspect-[4/3] object-cover rounded-lg"
            />
          </motion.div>
          {/* Subtle backgroun  d text for depth */}
          <span className="absolute bottom-[-10%] left-[-5%] text-[20vw] font-black text-slate-200/40 select-none whitespace-nowrap pointer-events-none">
            {product.category}
          </span>
        </section>

        {/* Right Grid: Content & Configuration */}
        <section className="flex flex-col justify-center p-8 md:p-16 lg:p-24 xl:p-32 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md w-full"
          >
            {/* Minimal Back Link */}
            <nav className="mb-10">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors"
              >
                <HiOutlineArrowLongLeft
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Back to Collection
              </Link>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4 block">
                {product.category}
              </span>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-6">
                {product.name}
              </h1>
              <p className="text-2xl font-medium tracking-tight text-slate-400">
                ${product.price.toLocaleString()}
              </p>
            </header>

            {/* Description */}
            <p className="text-slate-500 leading-relaxed font-medium mb-16 text-sm">
              {product.description ||
                "The pinnacle of performance architecture. Designed for those who demand uncompromising power and precision."}
            </p>

            {/* Variations */}
            {product.variations && (
              <div className="space-y-12 mb-20">
                {Object.entries(product.variations).map(([label, options]) => (
                  <div key={label} className="group">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-slate-900 transition-colors mb-6">
                      {label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() =>
                            setSelectedVariations((prev) => ({
                              ...prev,
                              [label]: opt,
                            }))
                          }
                          className={`px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all border ${
                            selectedVariations[label] === opt
                              ? "bg-slate-900 text-white border-slate-900"
                              : "bg-white text-slate-400 border-slate-100 hover:border-slate-300"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add to Cart CTA */}
            <div className="relative">
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`group mt-5 w-full h-20 rounded-full flex items-center justify-center gap-4 transition-all duration-500 overflow-hidden ${
                  isAdded
                    ? "bg-green-500 text-white"
                    : "bg-slate-900 text-white hover:bg-blue-600 active:scale-[0.98]"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isAdded ? (
                    <motion.div
                      key="added"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <HiCheck size={20} />
                      <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                        Confirmed
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="add"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-3"
                    >
                      <HiOutlineShoppingBag size={18} />
                      <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                        Add to Selection
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Minimalist Trust Footer */}
              <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-black uppercase tracking-tighter text-slate-900">
                    Architecture
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    3Y Warranty
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <span className="text-[9px] font-black uppercase tracking-tighter text-slate-900">
                    Availability
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    In Stock
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

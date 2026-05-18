"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineShoppingBag,
  HiOutlineMenuAlt3,
  HiX,
  HiMinus,
  HiPlus,
  HiOutlineTrash,
} from "react-icons/hi";
import { useCart } from "@/contexts/CartContext"; // Ensure this path is correct

const Navbar = () => {
  const {
    cart,
    itemAmount,
    total,
    isOpen: isCartOpen,
    setIsOpen: setIsCartOpen,
    increaseAmount,
    decreaseAmount,
    removeFromCart,
  } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Builds", href: "/builds" },
    { name: "Components", href: "/components" },
    { name: "Laptops", href: "/laptops" },
    { name: "Accessories", href: "/accessories" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/#hero" className="flex items-center gap-2">
            <img
              src="https://i.postimg.cc/GpnytyhM/pc-store.png"
              alt="Logo"
              width={45}
              height={45}
              className="object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-all"
            >
              <HiOutlineShoppingBag size={24} />
              {itemAmount > 0 && (
                <span className="absolute top-1 right-1 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                  {itemAmount}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 text-slate-700 z-[100]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <HiX size={26} className="text-white" />
              ) : (
                <HiOutlineMenuAlt3 size={26} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[40] bg-slate-950 pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="text-4xl font-bold text-white hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  Your Cart ({itemAmount})
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <HiX size={24} />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                      <HiOutlineShoppingBag
                        size={32}
                        className="text-slate-300"
                      />
                    </div>
                    <p className="text-slate-500 font-medium">
                      Your cart is empty
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 text-sm font-semibold text-blue-600 hover:underline"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div
                        key={`${item.id}-${JSON.stringify(item.selectedVariations)}`}
                        className="flex gap-4 group"
                      >
                        <div className="w-20 h-20 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-sm font-bold text-slate-900 line-clamp-1">
                              {item.name}
                            </h3>
                            <button
                              onClick={() =>
                                removeFromCart(item.id, item.selectedVariations)
                              }
                              className="text-slate-400 hover:text-red-500 transition-colors"
                            >
                              <HiOutlineTrash size={18} />
                            </button>
                          </div>

                          {/* Display Selected Variations */}
                          <div className="mt-1 flex flex-wrap gap-x-2">
                            {Object.entries(item.selectedVariations).map(
                              ([key, value]) => (
                                <span
                                  key={key}
                                  className="text-[10px] uppercase tracking-wider text-slate-400 font-bold"
                                >
                                  {key}: {value}
                                </span>
                              ),
                            )}
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center gap-3 border border-slate-200 rounded-lg px-2 py-1">
                              <button
                                onClick={() =>
                                  decreaseAmount(
                                    item.id,
                                    item.selectedVariations,
                                  )
                                }
                                className="p-1 hover:text-blue-600 transition-colors"
                              >
                                <HiMinus size={14} />
                              </button>
                              <span className="text-sm font-bold w-4 text-center">
                                {item.amount}
                              </span>
                              <button
                                onClick={() =>
                                  increaseAmount(
                                    item.id,
                                    item.selectedVariations,
                                  )
                                }
                                className="p-1 hover:text-blue-600 transition-colors"
                              >
                                <HiPlus size={14} />
                              </button>
                            </div>
                            <span className="text-sm font-bold text-slate-900">
                              ${(item.price * item.amount).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-slate-100 pt-6 mt-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-slate-500 font-medium">Subtotal</span>
                  <span className="text-2xl font-bold text-slate-900">
                    ${total.toLocaleString()}
                  </span>
                </div>

                {/* Checkout Button: Only visible if cart is not empty */}
                {cart.length > 0 && (
                  <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
                    <Link href={"/checkout"}>Checkout Now</Link>
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

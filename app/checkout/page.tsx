"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineArrowLongLeft,
  HiCheckCircle,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const shipping = cart.length > 0 ? 20 : 0;
  const grandTotal = total + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (cart.length === 0 && !isOrdered) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <HiOutlineShoppingBag size={40} className="text-zinc-300" />
        <p className="text-sm font-medium text-zinc-500">Your bag is empty</p>
        <Link
          href="/products"
          className="text-xs font-bold uppercase tracking-widest underline"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <AnimatePresence mode="wait">
        {!isOrdered ? (
          <motion.div
            key="checkout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 min-h-screen"
          >
            {/* LEFT: FORM */}
            <section className="p-8 md:p-16 lg:p-24 border-r border-zinc-100">
              <div className="max-w-md mx-auto">
                <Link
                  href="/products"
                  className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-zinc-900 mb-12 transition-colors"
                >
                  <HiOutlineArrowLongLeft size={18} /> BACK
                </Link>

                <h1 className="text-3xl font-bold tracking-tight mb-8">
                  Checkout
                </h1>

                <form onSubmit={handlePlaceOrder} className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Contact
                    </p>
                    <Input placeholder="Email Address" type="email" required />
                  </div>

                  <div className="space-y-4 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Shipping
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" required />
                      <Input placeholder="Last Name" required />
                    </div>
                    <Input placeholder="Address" required />
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="City" required />
                      <Input placeholder="Postal Code" required />
                    </div>
                  </div>

                  <button className="w-full h-14 bg-zinc-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all mt-8">
                    Place Order • ${grandTotal.toLocaleString()}
                  </button>
                </form>
              </div>
            </section>

            {/* RIGHT: CART SUMMARY */}
            <section className="bg-zinc-50 p-8 md:p-16 lg:p-24">
              <div className="max-w-md mx-auto sticky top-24">
                <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">
                  Your Order
                </h2>

                <div className="space-y-6 mb-8">
                  {cart.map((item, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-16 h-16 bg-white border border-zinc-200 rounded-lg p-2 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold truncate">
                          {item.name}
                        </h3>
                        <p className="text-[10px] text-zinc-400 uppercase font-bold">
                          QTY {item.amount}
                        </p>
                      </div>
                      <p className="text-sm font-medium">
                        ${(item.price * item.amount).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-zinc-200 pt-6 space-y-2">
                  <div className="flex justify-between text-sm text-zinc-500">
                    <span>Subtotal</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-zinc-500">
                    <span>Shipping</span>
                    <span>${shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-4">
                    <span>Total</span>
                    <span>${grandTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          /* ORDER PLACED SCREEN */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-screen flex flex-col items-center justify-center text-center p-6"
          >
            <HiCheckCircle size={60} className="text-green-500 mb-6" />
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Order Confirmed
            </h1>
            <p className="text-zinc-500 max-w-sm mb-10">
              We've received your order and we're getting it ready for shipment.
            </p>
            <Link
              href="/products"
              className="h-14 px-10 bg-zinc-900 text-white rounded-lg flex items-center text-xs font-bold uppercase tracking-widest"
            >
              Continue Shopping
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full h-12 px-4 bg-white border border-zinc-200 rounded-lg text-sm focus:border-zinc-900 outline-none transition-all placeholder:text-zinc-300"
    />
  );
}

"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaRegEye,
  FaBoxOpen,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { IoOptionsOutline, IoCloseOutline } from "react-icons/io5";
import { products } from "@/lib/products";

const ITEMS_PER_PAGE = 9;

const priceRanges = [
  { label: "All Prices", min: 0, max: 10000 },
  { label: "Under $500", min: 0, max: 500 },
  { label: "$500 - $1500", min: 500, max: 1500 },
  { label: "$1500 - $3000", min: 1500, max: 3000 },
  { label: "$3000+", min: 3000, max: 10000 },
];

export default function LaptopsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState(priceRanges[0]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, priceRange]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Force filter to only show products in the "Laptops" category
      const isLaptop = p.category === "Laptops";
      const matchesSearch = p.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesPrice =
        p.price >= priceRange.min && p.price <= priceRange.max;
      return isLaptop && matchesSearch && matchesPrice;
    });
  }, [searchQuery, priceRange]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <main className="min-h-screen bg-[#fafafa] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
            Browse <span className="text-blue-600 italic">Laptops</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-xl">
            High-performance portable workstations for the modern professional.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-64 space-y-10">
            <div className="relative">
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={14}
              />
              <input
                type="text"
                placeholder="Search laptops..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 outline-none transition-all text-sm font-medium"
              />
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-6">
                Budget
              </h3>
              <div className="flex flex-col gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(range)}
                    className={`text-left px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      priceRange.label === range.label
                        ? "bg-slate-900 text-white"
                        : "text-slate-500 hover:bg-white hover:text-slate-900"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Grid */}
          <section className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm font-bold text-slate-400">
                Found{" "}
                <span className="text-slate-900">
                  {filteredProducts.length}
                </span>{" "}
                laptops
              </p>
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold"
              >
                <IoOptionsOutline size={18} /> Filters
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
              <AnimatePresence mode="popLayout">
                {currentProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group bg-white rounded-[2rem] border border-slate-100 p-4 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500"
                  >
                    <div className="relative aspect-square rounded-[1.5rem] overflow-hidden bg-slate-50 mb-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="px-2">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-xl font-black text-slate-900 mb-6">
                        ${product.price.toLocaleString()}
                      </p>
                      <Link href={`/product/${product.id}`}>
                        <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all">
                          <FaRegEye size={16} /> Details
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-20 flex flex-col items-center text-center">
                <FaBoxOpen size={48} className="text-slate-200 mb-4" />
                <h3 className="text-lg font-bold text-slate-900">
                  No results found
                </h3>
              </div>
            )}

            {/* Modern Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-8 border-t border-slate-100">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 disabled:opacity-30 disabled:hover:text-slate-600 transition-all"
                >
                  <FaChevronLeft size={14} />
                </button>

                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, idx) => (
                    <button
                      key={idx + 1}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`w-10 h-10 rounded-xl text-xs font-black transition-all ${
                        currentPage === idx + 1
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                          : "bg-white text-slate-400 hover:text-slate-900 border border-slate-100"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 disabled:opacity-30 disabled:hover:text-slate-600 transition-all"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

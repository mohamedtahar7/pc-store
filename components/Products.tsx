"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Box, Cpu, Laptop, MousePointer } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Custom Builds",
    slug: "/builds",
    icon: Box,
    image: "https://wallpaperaccess.com/full/5459443.jpg",
    span: "md:col-span-2 md:row-span-2", // Large square on the left
  },
  {
    id: 2,
    name: "Components",
    slug: "/components",
    icon: Cpu,
    image:
      "https://www.newegg.com/insider/wp-content/uploads/2020/08/newegg-tech-pc-component-wallpaper-4.jpg",
    span: "md:col-span-1 md:row-span-1", // Small square top-middle
  },
  {
    id: 3,
    name: "Laptops",
    slug: "/laptops",
    icon: Laptop,
    image:
      "https://media.wired.com/photos/5d5ec4d7a9558100099f379e/master/pass/Gear-Razer-blade-pro-17-source-razer-FATA.jpg",
    span: "md:col-span-1 md:row-span-1", // Small square top-right
  },
  {
    id: 4,
    name: "Accessories",
    slug: "/accessories",
    icon: MousePointer,
    image: "https://wallpapercave.com/wp/wp6580157.jpg",
    span: "md:col-span-2 md:row-span-1", // Wide rectangle bottom-right
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const ProductsBento = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
              Premium Collections
            </span>
            <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Shop by <span className="text-blue-600">Category</span>
            </h2>
          </motion.div>

          <Link href="/products">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-slate-600 font-bold hover:text-blue-600 transition-colors cursor-pointer"
            >
              View All Inventory <ArrowRight size={20} />
            </motion.div>
          </Link>
        </div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className={`${product.span} group relative overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500`}
              >
                {/* Image Logic */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                      <Icon size={24} strokeWidth={2} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <Link
                      href={product.slug}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors"
                    >
                      Browse Collection
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsBento;

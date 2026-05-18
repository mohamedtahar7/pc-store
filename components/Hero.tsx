"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Zap, Monitor, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="mt-5 relative min-h-screen pt-20 flex items-center overflow-hidden bg-[#fafafa]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest"
            >
              <Zap size={14} />
              Next-Gen Performance
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Build Your <br />
              <span className="text-blue-600 italic">Ultimate</span> Machine.
            </h1>
            <p className="max-w-md text-lg text-slate-500 leading-relaxed font-medium">
              Precision-engineered gaming rigs and workstations designed to push
              the boundaries of what's possible.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/components">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200"
              >
                Shop Components
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/builds">
              <button className="px-8 py-4 rounded-2xl font-bold text-lg text-slate-600 hover:bg-slate-100 transition-all border border-slate-200">
                Custom Builds
              </button>
            </Link>
          </div>

          {/* Trusted Badges */}
          <div className="pt-8 flex items-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-blue-500" />
              <span className="text-xs font-bold uppercase tracking-tighter">
                2-Year Warranty
              </span>
            </div>
            <div className="h-4 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-2">
              <Monitor size={20} className="text-blue-500" />
              <span className="text-xs font-bold uppercase tracking-tighter">
                4K Optimized
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Subtle Glow Background behind the laptop */}
          <div className="absolute w-[120%] h-[120%] bg-blue-400/10 rounded-full blur-[100px] -z-10 animate-pulse" />

          {/* Laptop Image Wrapper with Float Animation */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full flex items-center justify-center"
          >
            <img
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/aa16250/media-gallery/laptop-alienware-aa16250nt-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3388&hei=2780&qlt=100,1&resMode=sharp2&size=3388,2780&chrss=full&imwidth=5000"
              alt="Alienware Premium Laptop"
              className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] object-contain"
            />
          </motion.div>

          {/* Floating Feature Badges */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 -right-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3"
          >
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Cpu size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">
                Processor
              </p>
              <p className="text-sm font-extrabold text-slate-900">
                Ultra 9 275HX
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-0 -left-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3"
          >
            <div className="p-2 bg-slate-900 text-white rounded-lg">
              <Zap size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">
                Graphics
              </p>
              <p className="text-sm font-extrabold text-slate-900">RTX 5080</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

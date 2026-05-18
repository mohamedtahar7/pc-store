"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// Using Fa6 for the modern X icon and Io5 for clean, thick-stroke lines
import { FaInstagram, FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Shop", href: "/products" },
    { name: "Builds", href: "/builds" },
    { name: "Support", href: "/support" },
    { name: "Privacy", href: "/privacy" },
  ];

  const socialLinks = [
    { Icon: FaInstagram, href: "#", label: "Instagram" },
    { Icon: FaXTwitter, href: "#", label: "Twitter" },
    { Icon: FaGithub, href: "#", label: "Github" },
    { Icon: IoMailOutline, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-[#fafafa] border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo / Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center md:items-start gap-1"
          >
            <Link
              href="/"
              className="text-xl font-black tracking-tighter text-slate-900"
            >
              PC<span className="text-blue-600 italic">STORE</span>
            </Link>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
              High Performance Computing
            </p>
          </motion.div>

          {/* Minimal Navigation */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons - react-icons implementation */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4">
          <p className="text-[11px] font-medium text-slate-400">
            © {currentYear} PC STORE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">
              Algeria Based
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

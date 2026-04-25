"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "bg-obsidian/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-syne font-bold text-2xl tracking-tighter flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          LEAD STUDIO
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest text-slate-muted">
          <Link href="/services" className="hover:text-brand transition-colors">Services</Link>
          <Link href="/use-cases" className="hover:text-brand transition-colors">Use Cases</Link>
          <Link href="/case-studies" className="hover:text-brand transition-colors">Results</Link>
          <Link href="/pricing" className="hover:text-brand transition-colors">Pricing</Link>
        </div>

        <Link 
          href="/contact" 
          className="bg-brand text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
        >
          GET STARTED
        </Link>
      </div>
    </nav>
  );
}

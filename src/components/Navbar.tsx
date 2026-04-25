"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-beige-light/90 backdrop-blur-md border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono font-bold text-lg flex items-center group">
          <div className="w-8 h-8 bg-brand border-2 border-obsidian mr-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
            <div className="w-3 h-3 bg-white border-2 border-obsidian rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
          </div>
          LEAD.STUDIO
        </Link>
        
        <div className="hidden md:flex space-x-8 font-mono text-xs uppercase tracking-tighter font-bold">
          <Link href="/services" className="hover:text-brand transition-colors">Services</Link>
          <Link href="/use-cases" className="hover:text-brand transition-colors">Use Cases</Link>
          <Link href="/case-studies" className="hover:text-brand transition-colors">Results</Link>
          <Link href="/pricing" className="hover:text-brand transition-colors text-brand underline underline-offset-4">Pricing</Link>
        </div>

        <Link 
          href="/contact" 
          className="font-mono text-xs font-bold bg-brand text-white px-5 py-2 hover:bg-emerald-600 transition-all rounded-none shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)]"
        >
          GET STARTED
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

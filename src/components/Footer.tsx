import React from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer class="py-16 px-6 bg-white border-t border-stone-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="font-mono font-bold text-xl mb-6 flex items-center group cursor-pointer">
            <div className="w-8 h-8 bg-brand border-2 border-obsidian mr-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
              <div className="w-3 h-3 bg-white border-2 border-obsidian rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
            </div>
            LEAD.STUDIO
          </div>
          
          <p className="text-stone-500 max-w-sm mb-8 font-medium">
            The B2B lead generation agency built for clarity. We help small businesses transform traffic into qualified revenue.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 font-mono text-xs font-bold uppercase tracking-widest text-stone-400">
            <Link href="/services" className="hover:text-brand transition-colors">Services</Link>
            <Link href="/case-studies" className="hover:text-brand transition-colors">Results</Link>
            <Link href="/pricing" className="hover:text-brand transition-colors">Pricing</Link>
            <Link href="/contact" className="hover:text-brand transition-colors">Contact</Link>
          </div>

          <div className="mb-8 flex flex-col items-center gap-4">
            <a href="https://wa.me/918248658302" target="_blank" className="text-brand hover:scale-110 transition-transform">
              <MessageSquare className="w-8 h-8" />
            </a>
            <div className="text-stone-600 font-sans text-sm font-medium">Bangalore, India</div>
          </div>

          <div className="text-stone-400 font-mono text-[10px] font-bold uppercase tracking-[0.2em] pt-8 border-t border-stone-100 w-full">
            © 2026 LEAD STUDIO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

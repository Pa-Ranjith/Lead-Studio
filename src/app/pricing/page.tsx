import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Zap, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Transparent Pricing | Lead Generation Packages | Lead Studio",
  description: "B2B Lead Generation starts from ₹3k. See our packages for landing pages, outbound systems, and dedicated lead engines.",
};

export default function PricingPage() {
  return (
    <main className="bg-obsidian text-white">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-syne mb-8 tracking-tighter">
            Clear <span className="text-brand">Pricing</span>
          </h1>
          <p className="text-xl text-slate-muted max-w-2xl mx-auto">
            No hidden fees. No complicated retainers. Just simple packages built for growth.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="premium-card rounded-[3rem] p-12 border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8">
                <div className="bg-brand text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  5 Slots Available
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-4xl font-bold font-syne mb-8">Lead Page Starter</h2>
                  <div className="text-7xl font-bold mb-4">₹3k <span className="text-3xl text-white/20 align-middle">to</span> ₹5k</div>
                  <p className="text-slate-muted text-lg mb-8">Perfect for small businesses starting their lead gen journey.</p>
                  
                  <div className="flex items-center gap-4 text-brand font-bold mb-10">
                    <Zap className="w-6 h-6" />
                    <span>2–3 Day Delivery</span>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full py-5 bg-brand text-white rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-brand/20">
                      Get Started
                    </button>
                    <button className="w-full py-4 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-3">
                      <MessageSquare className="w-5 h-5" />
                      Chat on WhatsApp
                    </button>
                  </div>
                </div>

                <div className="bg-white/5 p-10 rounded-3xl">
                  <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-white/50">What's Included:</h3>
                  <ul className="space-y-6">
                    {[
                      "High-conversion copy structure",
                      "Ultra-fast mobile layout",
                      "Form + WhatsApp integration",
                      "Custom branding & colors",
                      "Domain connection help",
                      "1 Round of revisions"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="text-brand w-6 h-6 shrink-0 mt-0.5" />
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-slate-muted italic text-lg">Need a custom outbound system or a multi-page site? <br/> <span className="text-white font-bold not-italic">Contact us for a custom quote.</span></p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

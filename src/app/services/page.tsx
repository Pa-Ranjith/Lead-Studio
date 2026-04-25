import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Target, Search, BarChart3 } from "lucide-react";

export const metadata = {
  title: "B2B Lead Generation Services | Our Lead Engine Process | Lead Studio",
  description: "Explore our data-driven lead generation services. We combine ICP targeting, cold outreach, and conversion-focused landing pages.",
};

export default function ServicesPage() {
  return (
    <main className="bg-obsidian text-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-syne mb-8 tracking-tighter">
            Our Lead <span className="text-brand">Engine</span>
          </h1>
          <p className="text-xl text-slate-muted max-w-2xl mx-auto leading-relaxed">
            We don't just build pages; we build systems that find your ideal customers and compel them to act.
          </p>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold font-syne mb-6">ICP & Data Targeting</h2>
            <p className="text-lg text-slate-muted mb-8 leading-relaxed">
              We start by identifying exactly who your high-value customers are. We use advanced scraping and enrichment tools to build lists of decision-makers who actually need your solution.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Target className="text-brand w-6 h-6" />
                <span className="font-bold">Granular Industry Filtering</span>
              </li>
              <li className="flex items-center gap-3">
                <Search className="text-brand w-6 h-6" />
                <span className="font-bold">Decision Maker Verification</span>
              </li>
            </ul>
          </div>
          <div className="premium-card rounded-3xl p-12 aspect-square flex items-center justify-center">
            <BarChart3 className="w-32 h-32 text-brand opacity-20" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 premium-card rounded-3xl p-12 aspect-square flex items-center justify-center">
             <Zap className="w-32 h-32 text-brand opacity-20" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold font-syne mb-6">Multi-Channel Outreach</h2>
            <p className="text-lg text-slate-muted mb-8 leading-relaxed">
              Once we have the data, we initiate cold email and LinkedIn campaigns that don't look like spam. We focus on personalizing the value proposition to solve their specific pain points.
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
               <p className="italic text-brand font-bold">"Our outbound sequences maintain a 40%+ open rate and 10%+ reply rate."</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

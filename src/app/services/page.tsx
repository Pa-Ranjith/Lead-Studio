import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Search, Zap, BarChart3, MessageSquare, Monitor, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "B2B Lead Generation Services | Our Lead Engine Process | Lead Studio",
  description: "Explore our data-driven lead generation services. We combine ICP targeting, cold outreach, and conversion-focused landing pages.",
};

export default function ServicesPage() {
  return (
    <main className="bg-beige-light text-obsidian selection:bg-brand selection:text-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 border-b border-stone-300 bg-beige-dark/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block border border-brand text-brand px-4 py-1 font-mono text-[10px] font-bold mb-6 uppercase tracking-[0.2em]">
            Our Process
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-mono mb-8 tracking-tighter uppercase leading-[0.9]">
            Our Lead <span className="text-brand">Engine</span>
          </h1>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-sans">
            We don&apos;t just build pages; we build systems that find your ideal customers and compel them to act.
          </p>
        </div>
      </section>

      {/* Service 1: ICP & Data Targeting */}
      <section className="py-24 px-6 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block bg-obsidian text-white px-4 py-2 font-mono text-[10px] font-bold mb-8 uppercase tracking-[0.2em]">
              Step 01
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-8 uppercase tracking-tighter">ICP & Data Targeting</h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed font-sans">
              We start by identifying exactly who your high-value customers are. We use advanced scraping and enrichment tools to build lists of decision-makers who actually need your solution.
            </p>
            <ul className="space-y-6">
              {[
                { icon: <Target className="text-brand w-6 h-6" />, text: "Granular Industry Filtering" },
                { icon: <Search className="text-brand w-6 h-6" />, text: "Decision Maker Verification" },
                { icon: <BarChart3 className="text-brand w-6 h-6" />, text: "Tech Stack & Revenue Signals" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 p-4 border-2 border-stone-200 hover:border-brand transition-colors group">
                  <div className="group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="font-bold font-mono uppercase tracking-wider text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="border-4 border-obsidian brutalist-shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Data Analytics Dashboard" 
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand/10 border border-brand/20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Service 2: Multi-Channel Outreach */}
      <section className="py-24 px-6 bg-beige-light border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="border-4 border-obsidian brutalist-shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=800" 
                alt="Email Outreach Campaign" 
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-obsidian/5 border border-obsidian/10 -z-10"></div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-obsidian text-white px-4 py-2 font-mono text-[10px] font-bold mb-8 uppercase tracking-[0.2em]">
              Step 02
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-8 uppercase tracking-tighter">Multi-Channel Outreach</h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed font-sans">
              Once we have the data, we initiate cold email and LinkedIn campaigns that don&apos;t look like spam. We focus on personalizing the value proposition to solve their specific pain points.
            </p>
            <div className="p-8 bg-obsidian text-white brutalist-shadow mb-8">
              <p className="italic text-brand font-bold text-lg font-sans leading-relaxed">
                &ldquo;Our outbound sequences maintain a 40%+ open rate and 10%+ reply rate.&rdquo;
              </p>
            </div>
            <ul className="space-y-4">
              {["Personalized cold email sequences", "LinkedIn connection campaigns", "Follow-up automation"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="text-brand w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service 3: Conversion-Focused Landing Pages */}
      <section className="py-24 px-6 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block bg-obsidian text-white px-4 py-2 font-mono text-[10px] font-bold mb-8 uppercase tracking-[0.2em]">
              Step 03
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-8 uppercase tracking-tighter">Conversion-Ready Pages</h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed font-sans">
              Traffic means nothing without a page that converts. We build focused, single-objective landing pages that guide visitors to one action — enquiring about your solution.
            </p>
            <ul className="space-y-6">
              {[
                { icon: <Monitor className="text-brand w-6 h-6" />, text: "Single-Objective Design" },
                { icon: <MessageSquare className="text-brand w-6 h-6" />, text: "WhatsApp + Form Integration" },
                { icon: <Zap className="text-brand w-6 h-6" />, text: "Mobile-First & Fast Loading" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 p-4 border-2 border-stone-200 hover:border-brand transition-colors group">
                  <div className="group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="font-bold font-mono uppercase tracking-wider text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="border-4 border-obsidian brutalist-shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Landing Page Design" 
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand/10 border border-brand/20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Service 4: Analytics & Optimization */}
      <section className="py-24 px-6 bg-beige-light border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="border-4 border-obsidian brutalist-shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Analytics & CRO" 
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-obsidian/5 border border-obsidian/10 -z-10"></div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-brand text-white px-4 py-2 font-mono text-[10px] font-bold mb-8 uppercase tracking-[0.2em]">
              Step 04
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-8 uppercase tracking-tighter">Analytics & CRO</h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed font-sans">
              We set up GA4, Google Search Console, and conversion tracking so you can see exactly where every lead comes from. Then we optimize based on real data, not guesswork.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "GA4", label: "Analytics Setup" },
                { val: "GSC", label: "Search Console" },
                { val: "CRO", label: "Conversion Rate Optimization" },
                { val: "A/B", label: "Split Testing" },
              ].map((item, i) => (
                <div key={i} className="p-6 border-2 border-obsidian bg-white text-center hover:bg-brand hover:text-white hover:border-brand transition-all group">
                  <div className="text-3xl font-bold font-mono mb-2">{item.val}</div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-stone-400 group-hover:text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-obsidian text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold font-mono uppercase tracking-tighter mb-8">
            Ready to build <br/><span className="text-brand">your engine?</span>
          </h2>
          <p className="text-xl text-stone-400 mb-16 font-sans">
            Stop guessing. Start generating qualified leads with a proven system.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-brand text-white px-12 py-6 font-mono font-bold text-xl uppercase tracking-wide hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] inline-flex items-center justify-center gap-3">
              Get Started <ArrowRight className="w-6 h-6" />
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white px-10 py-6 font-mono font-bold text-xl uppercase tracking-wide hover:bg-white hover:text-obsidian transition-colors inline-flex items-center justify-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

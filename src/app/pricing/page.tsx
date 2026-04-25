import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, MessageSquare, XCircle, Star, TrendingUp, Clock } from "lucide-react";

export const metadata = {
  title: "Pricing & Packages | Lead Studio",
  description: "Get a high-converting landing page starting at $39. Productized pricing for founders, consultants, and small businesses.",
};

export default function PricingPage() {
  const tiers = [
    {
      name: "STARTER",
      price: "39",
      tagline: "Quick validation page",
      microcopy: "Best for testing ideas",
      features: [
        "1 High-converting section",
        "Basic copy structuring",
        "WhatsApp integration",
        "Mobile responsive",
        "2-Day delivery"
      ],
      notIncluded: ["Full page", "FAQ / Form integration"],
      cta: "Launch My Page",
      highlight: false
    },
    {
      name: "CORE",
      price: "149",
      tagline: "Complete lead-ready page",
      microcopy: "Everything to capture leads",
      badge: "Most Popular",
      features: [
        "Full landing page (5–6 Sections)",
        "Problem/Solution/FAQ",
        "WhatsApp + Form integration",
        "Basic SEO Optimization",
        "2 Revisions",
        "3–4 Day delivery"
      ],
      cta: "Get Started",
      highlight: true
    },
    {
      name: "PRO",
      price: "399",
      tagline: "Growth optimized page",
      microcopy: "Better conversion, not just a page",
      features: [
        "Everything in CORE",
        "Refined messaging & hooks",
        "Analytics Setup (GA4)",
        "Priority 2–3 Day delivery",
        "Conversion optimization",
        "3 Revisions"
      ],
      cta: "Upgrade Now",
      highlight: false
    }
  ];

  return (
    <main className="bg-beige-light text-obsidian selection:bg-brand selection:text-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6 border-b border-stone-300 bg-beige-dark/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block border border-brand text-brand px-4 py-1 font-mono text-[10px] font-bold mb-6 uppercase tracking-[0.2em]">
            Fixed Pricing. Zero Friction.
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-mono mb-8 tracking-tighter uppercase leading-[0.9]">
            Stop losing visitors. <br/> <span className="text-brand">Start closing leads.</span>
          </h1>
          <p className="text-2xl text-stone-500 max-w-3xl mx-auto font-sans font-medium">
            Landing pages typically cost $500–$3000. <br className="hidden md:block" /> We made it simple, accessible, and built for action.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-10 border-2 transition-all duration-500 ${
                tier.highlight 
                ? "bg-white border-brand brutalist-shadow-lg scale-105 z-10" 
                : "bg-white border-obsidian brutalist-shadow hover:border-brand"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-6 py-2 font-mono text-[10px] font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                  {tier.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xs font-bold text-stone-400 font-mono uppercase tracking-widest mb-8">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold font-sans">$</span>
                  <span className="text-8xl font-bold tracking-tighter font-mono">{tier.price}</span>
                </div>
                <p className="text-2xl font-bold mb-2 font-sans tracking-tight">{tier.tagline}</p>
                <p className="text-sm text-stone-400 font-mono italic uppercase tracking-wider">{tier.microcopy}</p>
              </div>

              <ul className="space-y-6 mb-12 flex-grow border-t border-stone-100 pt-10">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                    {feat}
                  </li>
                ))}
                {tier.notIncluded?.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm font-medium text-stone-300">
                    <XCircle className="w-5 h-5 shrink-0 opacity-30" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-6 font-mono font-bold text-xl transition-all ${
                tier.highlight 
                ? "bg-brand text-white shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)]" 
                : "bg-obsidian text-white brutalist-shadow"
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Trust Boosters */}
        <div className="max-w-3xl mx-auto mt-20 flex flex-wrap justify-center gap-12 md:gap-20 opacity-30 font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center gap-3">
            <Star className="w-4 h-4" /> No contracts
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4" /> Fast delivery
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="w-4 h-4" /> Built for conversion
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 px-6 bg-beige-light border-y border-stone-300">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-mono mb-20 text-center uppercase tracking-tighter">Compare Packages</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white brutalist-shadow">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-8 px-8 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">Feature</th>
                  <th className="py-8 px-4 font-mono text-sm uppercase tracking-widest text-center font-bold">Starter</th>
                  <th className="py-8 px-4 font-mono text-sm uppercase tracking-widest text-center text-brand font-bold">Core</th>
                  <th className="py-8 px-4 font-mono text-sm uppercase tracking-widest text-center font-bold">Pro</th>
                </tr>
              </thead>
              <tbody className="text-base font-sans">
                {[
                  { name: "Full Landing Page", s: false, c: true, p: true },
                  { name: "Conversion Structure", s: false, c: true, p: true },
                  { name: "Analytics Setup", s: false, c: false, p: true },
                  { name: "Revisions", sText: "1", cText: "2", pText: "3" },
                  { name: "Delivery Time", sText: "2d", cText: "3-4d", pText: "2-3d" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-stone-100 hover:bg-beige-light transition-colors">
                    <td className="py-8 px-8 font-bold text-stone-600">{row.name}</td>
                    <td className="py-8 px-4 text-center">
                      {row.sText ? <span className="font-mono font-bold">{row.sText}</span> : (row.s ? <CheckCircle2 className="mx-auto text-brand w-5 h-5" /> : <XCircle className="mx-auto text-stone-200 w-5 h-5" />)}
                    </td>
                    <td className="py-8 px-4 text-center">
                      {row.cText ? <span className="font-mono font-bold text-brand">{row.cText}</span> : (row.c ? <CheckCircle2 className="mx-auto text-brand w-5 h-5" /> : <XCircle className="mx-auto text-stone-200 w-5 h-5" />)}
                    </td>
                    <td className="py-8 px-4 text-center">
                      {row.pText ? <span className="font-mono font-bold">{row.pText}</span> : (row.p ? <CheckCircle2 className="mx-auto text-brand w-5 h-5" /> : <XCircle className="mx-auto text-stone-200 w-5 h-5" />)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scope Clarity */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-obsidian text-white p-12 md:p-20 brutalist-shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <MessageSquare className="w-40 h-40" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold font-mono mb-8 uppercase tracking-tighter flex items-center gap-4">
              <span className="text-brand text-5xl">//</span> Strict Scope Clarity
            </h3>
            <p className="text-stone-400 text-xl leading-relaxed mb-10 font-sans">
              Each package has a defined scope to maintain speed and high quality. Additional requirements beyond the tier will be quoted separately.
            </p>
            <div className="border-l-4 border-brand pl-8">
              <p className="text-2xl font-bold italic font-sans leading-tight">
                “We build fast, conversion-ready landing pages designed to generate leads — not just look good.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

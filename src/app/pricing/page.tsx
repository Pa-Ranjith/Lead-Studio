import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Zap, MessageSquare, XCircle, Star, TrendingUp, Clock } from "lucide-react";

export const metadata = {
  title: "Pricing & Packages | Conversion-Ready Landing Pages | Lead Studio",
  description: "Get a high-converting landing page starting at $39. Productized pricing for founders, consultants, and small businesses. Fast 2-4 day delivery.",
};

export default function PricingPage() {
  const tiers = [
    {
      name: "STARTER",
      price: "39",
      tagline: "Quick validation page",
      microcopy: "Best for testing ideas, not full-scale lead generation",
      features: [
        "1 High-converting section (Hero + CTA)",
        "Basic copy structuring",
        "WhatsApp CTA integration",
        "Mobile responsive design",
        "Template-based layout",
        "1 Revision",
        "2-Day delivery"
      ],
      notIncluded: ["Full landing page", "Social proof section", "FAQ / Form integration"],
      cta: "Launch My Page",
      highlight: false
    },
    {
      name: "CORE",
      price: "149",
      tagline: "Complete lead-ready landing page",
      microcopy: "Everything you need to start capturing leads",
      badge: "Most Popular",
      features: [
        "Full landing page (5–6 Sections)",
        "Conversion-focused layout",
        "Problem/Solution/FAQ sections",
        "WhatsApp + Form integration",
        "Basic SEO (Meta tags, Headings)",
        "Mobile optimization",
        "2 Revisions",
        "3–4 Day delivery"
      ],
      cta: "Get Started",
      highlight: true
    },
    {
      name: "PRO",
      price: "399",
      tagline: "Conversion-optimized growth page",
      microcopy: "For businesses that want better conversion, not just a page",
      features: [
        "Everything in CORE",
        "Refined messaging & hooks",
        "Custom Case Study/Comparison sections",
        "Analytics Setup (GA4/GSC)",
        "Priority 2–3 Day delivery",
        "Conversion rate optimization (CRO)",
        "3 Revisions"
      ],
      cta: "Upgrade for Better Conversion",
      highlight: false
    }
  ];

  return (
    <main className="bg-obsidian text-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-brand/10 text-brand px-4 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
            Fixed Pricing. Zero Friction.
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-syne mb-8 tracking-tighter">
            Stop losing visitors. <br/> <span className="text-brand">Start closing leads.</span>
          </h1>
          <p className="text-2xl text-slate-muted max-w-3xl mx-auto font-medium">
            Landing pages typically cost $500–$3000. <br className="hidden md:block" /> We made it simple, accessible, and built for action.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 ${
                tier.highlight 
                ? "bg-brand/5 border-brand shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)] scale-105 z-10" 
                : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                  {tier.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-sm font-bold text-brand uppercase tracking-widest mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">$</span>
                  <span className="text-7xl font-bold tracking-tight">{tier.price}</span>
                </div>
                <p className="text-xl font-bold mb-2">{tier.tagline}</p>
                <p className="text-sm text-slate-muted italic">{tier.microcopy}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                    {feat}
                  </li>
                ))}
                {tier.notIncluded?.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-white/20">
                    <XCircle className="w-5 h-5 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all ${
                tier.highlight 
                ? "bg-brand text-white hover:scale-105 shadow-xl shadow-brand/20" 
                : "bg-white text-obsidian hover:bg-brand hover:text-white"
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Trust Boosters */}
        <div className="max-w-3xl mx-auto mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
            <Star className="w-4 h-4" /> No contracts
          </div>
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
            <Clock className="w-4 h-4" /> Fast delivery
          </div>
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
            <TrendingUp className="w-4 h-4" /> Built for conversion
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 bg-white/5 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-syne mb-16 text-center">Compare Packages</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 font-syne text-sm uppercase tracking-widest text-slate-muted">Feature</th>
                  <th className="py-6 px-4 font-syne text-sm uppercase tracking-widest text-center">Starter</th>
                  <th className="py-6 px-4 font-syne text-sm uppercase tracking-widest text-center text-brand">Core</th>
                  <th className="py-6 px-4 font-syne text-sm uppercase tracking-widest text-center">Pro</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                {[
                  { name: "Full Landing Page", s: false, c: true, p: true },
                  { name: "Conversion Structure", s: false, c: true, p: true },
                  { name: "Custom Sections", s: false, sText: "-", c: false, cText: "-", p: true },
                  { name: "Analytics Setup", s: false, sText: "-", c: false, cText: "-", p: true },
                  { name: "Revisions", s: true, sText: "1", c: true, cText: "2", p: true, pText: "3" },
                  { name: "Delivery Time", s: true, sText: "2d", c: true, cText: "3-4d", p: true, pText: "2-3d (Priority)" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-6 font-medium text-slate-muted">{row.name}</td>
                    <td className="py-6 px-4 text-center">
                      {row.sText ? <span className="font-bold">{row.sText}</span> : (row.s ? <CheckCircle2 className="mx-auto text-brand" /> : <XCircle className="mx-auto text-white/10" />)}
                    </td>
                    <td className="py-6 px-4 text-center">
                      {row.cText ? <span className="font-bold text-brand">{row.cText}</span> : (row.c ? <CheckCircle2 className="mx-auto text-brand" /> : <XCircle className="mx-auto text-white/10" />)}
                    </td>
                    <td className="py-6 px-4 text-center">
                      {row.pText ? <span className="font-bold">{row.pText}</span> : (row.p ? <CheckCircle2 className="mx-auto text-brand" /> : <XCircle className="mx-auto text-white/10" />)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Upsells & Scope */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold font-syne mb-8 uppercase tracking-tighter">Add-ons</h3>
              <div className="space-y-4">
                {[
                  { name: "Extra Section", price: "$29" },
                  { name: "Priority Delivery (24h)", price: "$49" },
                  { name: "Extra Revision", price: "$19" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-all cursor-pointer group">
                    <span className="font-bold text-lg">{item.name}</span>
                    <span className="text-brand font-bold group-hover:scale-110 transition-transform">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center bg-brand/5 p-10 rounded-[2.5rem] border border-brand/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand" />
                Strict Scope Clarity
              </h3>
              <p className="text-slate-muted leading-relaxed mb-6">
                Each package has a defined scope. This allows us to maintain speed and high quality for every founder. Additional requirements beyond the tier will be quoted separately.
              </p>
              <p className="font-bold text-white italic">
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

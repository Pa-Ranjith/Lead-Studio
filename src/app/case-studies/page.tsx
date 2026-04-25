import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, ArrowRight, TrendingUp, Clock, Target } from "lucide-react";

export const metadata = {
  title: "Case Studies & Results | Verified Lead Gen Success | Lead Studio",
  description: "Read how we generated 40+ leads in a week for Real Estate and tripled direct bookings for Fitness clients.",
};

export default function CaseStudiesPage() {
  const studies = [
    {
      title: "Real Estate Engine",
      stat: "40+ Leads",
      time: "1 Week",
      desc: "We built a high-converting landing page and ran targeted outbound for a boutique real estate firm. The page was designed to capture high-intent property investors through a qualification form.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      metrics: [
        { label: "Leads Generated", value: "40+" },
        { label: "Time Frame", value: "7 Days" },
        { label: "Conversion Rate", value: "12.3%" },
      ]
    },
    {
      title: "Fitness Accelerator",
      stat: "3x Bookings",
      time: "Monthly",
      desc: "Optimized the conversion funnel for a high-performance coaching brand. We restructured their landing page around a single booking CTA and integrated WhatsApp for immediate follow-up.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      metrics: [
        { label: "Booking Growth", value: "3x" },
        { label: "Bounce Reduction", value: "45%" },
        { label: "Avg. Response", value: "<2 min" },
      ]
    },
    {
      title: "SaaS Outreach System",
      stat: "12% Opt-in",
      time: "Continuous",
      desc: "Implemented a cold email sequence combined with a 'Problem-First' landing page for a B2B SaaS platform. The outbound system now runs on autopilot, consistently generating demo requests.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      metrics: [
        { label: "Opt-in Rate", value: "12%" },
        { label: "Open Rate", value: "42%" },
        { label: "Reply Rate", value: "11%" },
      ]
    }
  ];

  return (
    <main className="bg-beige-light text-obsidian selection:bg-brand selection:text-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 border-b border-stone-300 bg-beige-dark/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block border border-brand text-brand px-4 py-1 font-mono text-[10px] font-bold mb-6 uppercase tracking-[0.2em]">
            Proven Track Record
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-mono mb-8 tracking-tighter uppercase leading-[0.9]">
            Verified <span className="text-brand">Results</span>
          </h1>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-sans">
            We don&apos;t sell promises. We sell systems that have been proven in the real world.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {studies.map((s, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="border-4 border-obsidian brutalist-shadow-lg overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full aspect-[16/12] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                {/* Stat badge */}
                <div className="absolute -bottom-4 left-8 bg-brand text-white px-6 py-3 font-mono font-bold text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                  {s.stat} in {s.time}
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6 uppercase tracking-tighter flex items-center gap-4">
                  {s.title} <ArrowUpRight className="text-brand w-8 h-8" />
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed font-sans mb-10">{s.desc}</p>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {s.metrics.map((m, idx) => (
                    <div key={idx} className="p-6 border-2 border-obsidian text-center hover:bg-brand hover:text-white hover:border-brand transition-all group">
                      <div className="text-2xl md:text-3xl font-bold font-mono mb-2">{m.value}</div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-stone-400 group-hover:text-white/70">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-24 px-6 bg-obsidian text-white border-y border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <TrendingUp className="w-8 h-8 text-brand" />, val: "100+", label: "Leads Generated" },
            { icon: <Clock className="w-8 h-8 text-brand" />, val: "<72h", label: "Avg. Delivery Time" },
            { icon: <Target className="w-8 h-8 text-brand" />, val: "40-70%", label: "Conversion Range" },
          ].map((stat, i) => (
            <div key={i} className="p-12 border-2 border-stone-700 text-center hover:border-brand transition-colors group">
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-6xl font-bold font-mono tracking-tighter mb-4">{stat.val}</div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-500 group-hover:text-brand">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-mono uppercase tracking-tighter mb-8">
            Want results <span className="text-brand">like these?</span>
          </h2>
          <p className="text-xl text-stone-500 mb-16 font-sans">
            Let&apos;s build a lead engine customized for your business.
          </p>
          <Link href="/contact" className="bg-obsidian text-white px-12 py-6 font-mono font-bold text-xl uppercase tracking-wide hover:bg-brand transition-colors brutalist-shadow inline-flex items-center gap-3">
            Start Your Engine <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

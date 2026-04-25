import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

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
      desc: "We built a high-converting landing page and ran targeted outbound for a boutique real estate firm.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fitness Accelerator",
      stat: "3x Bookings",
      time: "Monthly",
      desc: "Optimized the conversion funnel for a high-performance coaching brand, leading to immediate ROI.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "SaaS Outreach",
      stat: "12% Opt-in",
      time: "Continuous",
      desc: "Implemented a cold email sequence combined with a 'Problem-First' landing page.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <main className="bg-obsidian text-white">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-syne mb-8 tracking-tighter">
            Verified <span className="text-brand">Results</span>
          </h1>
          <p className="text-xl text-slate-muted max-w-2xl mx-auto">
            We don't sell promises. We sell systems that have been proven in the real world.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {studies.map((s, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 premium-card">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="inline-block bg-brand/10 text-brand px-4 py-1 rounded-full text-sm font-bold mb-4">
                  {s.stat} in {s.time}
                </div>
                <h2 className="text-4xl font-bold font-syne mb-6 flex items-center gap-4">
                  {s.title} <ArrowUpRight className="text-brand" />
                </h2>
                <p className="text-xl text-slate-muted leading-relaxed mb-8">
                  {s.desc}
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
                  <div>
                    <div className="text-sm text-white/30 uppercase tracking-widest font-bold mb-1">Impact</div>
                    <div className="text-2xl font-bold text-brand">Significant ROI</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/30 uppercase tracking-widest font-bold mb-1">Status</div>
                    <div className="text-2xl font-bold">Active Engine</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

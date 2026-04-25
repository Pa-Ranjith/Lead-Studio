import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cloud, Rocket, GraduationCap, Users, Building2, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Industry Use Cases | SaaS, Agencies & Coaches | Lead Studio",
  description: "See how Lead Studio helps SaaS founders, marketing agencies, and high-ticket coaches scale their lead flow.",
};

export default function UseCasesPage() {
  const cases = [
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "SaaS Founders",
      tagline: "More demos. Less ad spend.",
      desc: "Get more demo bookings without the high cost of LinkedIn ads. We target decision-makers based on tech-stack and company growth.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      results: ["4x Demo Bookings", "60% Lower CAC", "ICP-First Targeting"],
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Marketing Agencies",
      tagline: "Predictable pipeline. No referrals needed.",
      desc: "Stop relying on referrals. We build a predictable outbound engine that keeps your sales pipeline full of high-ticket clients.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
      results: ["3x Pipeline Growth", "Automated Outreach", "High-Ticket Clients"],
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "High-Ticket Coaches",
      tagline: "Authority-driven student acquisition.",
      desc: "Scale your coaching business by reaching your ideal students where they are. We focus on authority-building outreach that converts browsers into enrolled students.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
      results: ["2x Enrollments", "Targeted Outreach", "Authority Positioning"],
    },
  ];

  return (
    <main className="bg-beige-light text-obsidian selection:bg-brand selection:text-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 border-b border-stone-300 bg-beige-dark/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block border border-brand text-brand px-4 py-1 font-mono text-[10px] font-bold mb-6 uppercase tracking-[0.2em]">
            Industries We Serve
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-mono mb-8 tracking-tighter uppercase leading-[0.9]">
            Who We <span className="text-brand">Help</span>
          </h1>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-sans">
            We specialize in B2B lead generation for high-impact service businesses and tech founders.
          </p>
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {cases.map((c, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="border-4 border-obsidian brutalist-shadow-lg overflow-hidden">
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className={`absolute -z-10 w-32 h-32 bg-brand/10 border border-brand/20 ${i % 2 === 0 ? "-bottom-6 -right-6" : "-top-6 -left-6"}`}></div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="text-brand mb-6">{c.icon}</div>
                <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 uppercase tracking-tighter">{c.title}</h2>
                <p className="text-xl font-bold text-stone-400 font-mono uppercase tracking-wider mb-6 text-sm">{c.tagline}</p>
                <p className="text-lg text-stone-600 leading-relaxed font-sans mb-10">{c.desc}</p>
                
                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {c.results.map((result, idx) => (
                    <div key={idx} className="p-4 border-2 border-obsidian text-center hover:bg-brand hover:text-white hover:border-brand transition-all group">
                      <CheckCircle2 className="w-5 h-5 text-brand mx-auto mb-2 group-hover:text-white" />
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider">{result}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Industries */}
      <section className="py-24 px-6 bg-beige-light border-y border-stone-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-mono mb-16 text-center uppercase tracking-tighter">
            Also <span className="text-brand">Built For</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Building2 className="w-8 h-8" />, title: "Real Estate", desc: "Property listings, open-house leads, investor outreach." },
              { icon: <Briefcase className="w-8 h-8" />, title: "Consultants", desc: "Strategy call bookings, authority pages, LinkedIn funnels." },
              { icon: <Users className="w-8 h-8" />, title: "Local Services", desc: "WhatsApp-first pages, Google-optimized, review collection." },
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white border-2 border-obsidian brutalist-shadow hover:border-brand transition-all group">
                <div className="text-brand mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold font-mono uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-stone-600 font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="py-32 px-6 bg-obsidian text-white text-center">
        <div className="max-w-4xl mx-auto">
          <Users className="w-16 h-16 text-brand mx-auto mb-8" />
          <h2 className="text-4xl md:text-7xl font-bold font-mono mb-8 uppercase tracking-tighter">
            Need a custom <br/><span className="text-brand">solution?</span>
          </h2>
          <p className="text-xl text-stone-400 mb-16 font-sans max-w-2xl mx-auto">
            If your business sells to other businesses (B2B), we can build an engine for you. Let&apos;s discuss your specific ICP and growth targets.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-brand text-white px-12 py-6 font-mono font-bold text-xl uppercase tracking-wide hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] inline-flex items-center justify-center gap-3">
              Book a Strategy Call <ArrowRight className="w-6 h-6" />
            </Link>
            <a href="https://wa.me/918248658302" target="_blank" className="border-2 border-white text-white px-10 py-6 font-mono font-bold text-xl uppercase tracking-wide hover:bg-white hover:text-obsidian transition-colors inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

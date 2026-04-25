import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cloud, Rocket, GraduationCap, Users } from "lucide-react";

export const metadata = {
  title: "Industry Use Cases | SaaS, Agencies & Coaches | Lead Studio",
  description: "See how Lead Studio helps SaaS founders, marketing agencies, and high-ticket coaches scale their lead flow.",
};

export default function UseCasesPage() {
  const cases = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "SaaS Founders",
      desc: "Get more demo bookings without the high cost of LinkedIn ads. We target decision-makers based on tech-stack and company growth."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Marketing Agencies",
      desc: "Stop relying on referrals. We build a predictable outbound engine that keeps your sales pipeline full of high-ticket clients."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "High-Ticket Coaches",
      desc: "Scale your coaching business by reaching your ideal students where they are. We focus on authority-building outreach."
    }
  ];

  return (
    <main className="bg-obsidian text-white">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-syne mb-8 tracking-tighter">
            Who We <span className="text-brand">Help</span>
          </h1>
          <p className="text-xl text-slate-muted max-w-2xl mx-auto">
            We specialize in B2B lead generation for high-impact service businesses and tech founders.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="premium-card p-10 rounded-3xl border border-white/5 hover:border-brand/50 transition-colors">
              <div className="text-brand mb-6">{c.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
              <p className="text-slate-muted text-lg leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-brand/5">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-16 h-16 text-brand mx-auto mb-8" />
          <h2 className="text-4xl font-bold font-syne mb-6">Need a custom solution?</h2>
          <p className="text-xl text-slate-muted mb-10">
            If your business sells to other businesses (B2B), we can build an engine for you. Let's discuss your specific ICP.
          </p>
          <button className="bg-white text-obsidian px-10 py-4 rounded-full font-bold text-lg hover:bg-brand hover:text-white transition-all">
            Book a Strategy Call
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

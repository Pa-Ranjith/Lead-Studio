"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, Monitor, Zap, MousePointer2, Smartphone } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Components ---

const RevealText = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-24 relative overflow-hidden border-b border-stone-300 ${className}`}>
    {children}
  </section>
);

// --- Main Page ---

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fullText = "initiate lead_capture";
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 500);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="bg-beige-light min-h-screen" />;

  const faqData = [
    {
      question: "How fast can I get my landing page?",
      answer: "Usually within 2–3 days once business details are provided."
    },
    {
      question: "What if I don't have content ready?",
      answer: "That's perfectly fine. I'll guide you through a simple set of questions and structure all the copy for you."
    }
  ];

  return (
    <main className="bg-beige-light text-obsidian selection:bg-brand selection:text-white">
      <Navbar />
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }),
        }}
      />

      {/* 1. HERO SECTION */}
      <Section className="bg-beige-dark/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] font-mono uppercase mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Most websites don't <br/> <span className="text-brand">Bring Enquiries.</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-obsidian font-mono uppercase tracking-tighter">
                This one will.
              </h2>
            </motion.div>

            <RevealText delay={0.8} className="mt-8">
              <p className="text-xl md:text-2xl text-stone-600 max-w-lg leading-relaxed font-sans mb-10">
                Lead Studio builds focused landing pages engineered to drive action and generate enquiries within days.
              </p>
            </RevealText>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Link href="/contact" className="bg-obsidian text-white px-10 py-5 font-mono font-bold text-xl flex items-center justify-center group hover:bg-stone-800 transition-colors brutalist-shadow">
                GET LANDING PAGE
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Terminal Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="bg-[#111] rounded-sm overflow-hidden font-mono text-sm text-stone-300 shadow-2xl border border-stone-800">
              <div className="h-8 bg-stone-800 flex items-center justify-center relative border-b border-stone-700">
                <div className="absolute left-3 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">bash — lead-engine</span>
              </div>
              <div className="p-8 h-[360px] overflow-hidden">
                <div className="flex">
                  <span className="text-brand mr-3">$</span>
                  <span className="text-white border-r-2 border-brand pr-1">{terminalText}</span>
                </div>
                <AnimatePresence>
                  {showOutput && (
                    <motion.div 
                      className="mt-6 space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="text-stone-500">• Analyzing traffic flow...</div>
                      <div className="text-white flex justify-between"><span>visitor_01:arrived</span><span className="text-brand font-bold">CAPTURED (120ms)</span></div>
                      <div className="text-white flex justify-between"><span>visitor_02:bounced</span><span className="text-red-400 font-bold">PREVENTED (45ms)</span></div>
                      <div className="text-white flex justify-between"><span>visitor_03:engaged</span><span className="text-brand font-bold">CONVERTED (82ms)</span></div>
                      <motion.div 
                        className="mt-8 text-brand font-bold text-lg"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {">>> Enquiries Generated: +3"}
                      </motion.div>
                      <div className="mt-4 text-stone-500 italic">// System optimized for high-intent action</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {/* Accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand/10 border border-brand/20 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-obsidian/5 border border-obsidian/10 -z-10"></div>
          </motion.div>
        </div>
      </Section>


      {/* 2. REALIZATION SECTION */}
      <Section className="flex flex-col items-center justify-center bg-white">
        <div className="max-w-4xl text-center">
          <RevealText className="text-4xl md:text-6xl font-bold mb-16 leading-tight font-mono uppercase tracking-tighter mx-auto">
            Visitors don't convert <br/> <span className="text-stone-500 text-3xl md:text-5xl">because they're confused.</span>
          </RevealText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-20">

            {[
              { title: "No Direction", desc: "If you don't lead the visitor, they will leave in seconds.", id: "01" },
              { title: "Zero Intent", desc: "Traffic without intent is a vanity metric. We filter for qualified leads.", id: "02" },
              { title: "Broken Funnels", desc: "If your page doesn't sync with your outreach, you lose trust.", id: "03" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * i, duration: 0.8 }}
                className="premium-card p-10 group"
              >
                <div className="w-12 h-12 bg-obsidian text-white flex items-center justify-center font-mono font-bold mb-8 group-hover:bg-brand transition-colors text-lg">
                  {item.id}
                </div>
                <h3 className="text-xl font-bold font-mono uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-stone-600 text-lg leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. ROI SECTION */}
      <Section className="bg-obsidian text-white text-center py-32">
        <div className="max-w-7xl mx-auto">
          <RevealText className="text-4xl md:text-7xl font-bold font-mono uppercase tracking-tighter mb-20">
            Same Traffic. <br/> <span className="text-brand">Better Results.</span>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-stone-800 pt-20">
            {[
              { val: "4x", label: "Enquiries", accent: "↑" },
              { val: "40-70%", label: "Conversion Rate" },
              { val: "3x", label: "WhatsApp Leads", accent: "↑" }
            ].map((stat, i) => (
              <motion.div key={i} className="space-y-4">
                <div className="text-6xl md:text-8xl font-bold font-mono tracking-tighter flex justify-center items-center gap-2">
                  {stat.accent && <span className="text-brand text-4xl">{stat.accent}</span>}
                  {stat.val}
                </div>
                <div className="text-stone-500 font-mono text-sm font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. SHIFT SECTION */}
      <Section className="flex flex-col items-center justify-center text-center bg-beige-dark/20">
        <div className="max-w-4xl space-y-12 mx-auto">
          <RevealText className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-stone-800 leading-tight">
            A good landing page doesn’t explain everything.
          </RevealText>
          <div className="inline-block bg-obsidian px-10 py-6 brutalist-shadow">
            <RevealText delay={0.4} className="text-2xl md:text-4xl font-mono font-bold text-brand uppercase tracking-widest">
              It guides ONE decision.
            </RevealText>
          </div>
        </div>
      </Section>

      {/* 5. OFFER / PRICING SECTION */}
      <Section id="pricing" className="items-center bg-white">
        <div className="text-center mb-20">
          <RevealText className="text-4xl md:text-6xl font-bold mb-6 font-mono uppercase tracking-tighter">Built for Action</RevealText>
          <RevealText className="text-xl text-stone-600 max-w-2xl mx-auto">Productized landing pages designed to generate revenue, not just look good.</RevealText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {[
            { 
              name: "Starter", price: "39", tagline: "Quick validation", 
              features: ["1 High-converting section", "Basic copy structuring", "WhatsApp integration", "2-Day delivery"],
              cta: "Launch My Page"
            },
            { 
              name: "Core", price: "149", tagline: "Lead-ready page", highlight: true, badge: "Most Popular",
              features: ["Full page (5-6 sections)", "Problem/Solution/FAQ", "WhatsApp + Form", "3-4 Day delivery"],
              cta: "Get Started"
            },
            { 
              name: "Pro", price: "399", tagline: "Growth optimized", 
              features: ["Everything in Core", "Analytics setup (GA4)", "Refined messaging", "2-3 Day priority"],
              cta: "Upgrade Now"
            }
          ].map((tier, i) => (
            <motion.div 
              key={i}
              className={`relative flex flex-col p-10 rounded-none border-2 transition-all duration-500 ${
                tier.highlight 
                ? "bg-white border-brand brutalist-shadow-lg scale-105 z-10" 
                : "bg-white border-obsidian brutalist-shadow"
              }`}
              whileHover={{ y: -5 }}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-6 py-1 rounded-none text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                  {tier.badge}
                </div>
              )}
              <h3 className="text-stone-500 font-mono font-bold uppercase tracking-widest text-xs mb-8">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold">$</span>
                <span className="text-7xl font-bold font-mono tracking-tight">{tier.price}</span>
              </div>
              <p className="text-xl font-bold mb-8 font-sans">{tier.tagline}</p>
              <ul className="space-y-6 mb-12 flex-grow border-t border-stone-100 pt-8">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm font-medium">
                    <CheckCircle2 className="text-brand w-5 h-5 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className={`block w-full py-5 rounded-none text-center font-mono font-bold text-lg transition-all ${
                tier.highlight ? "bg-brand text-white shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]" : "bg-obsidian text-white"
              }`}>
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 6. SAMPLE WORK SECTION */}
      <Section className="items-center bg-beige-light">
        <RevealText className="text-4xl md:text-6xl font-bold mb-20 text-center font-mono uppercase tracking-tighter">Built for <span className="text-brand">Action</span></RevealText>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {[
            { label: "Real Estate Engine", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600", stats: "40+ Leads in 1 Week" },
            { label: "Fitness Accelerator", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600", stats: "3x Direct Bookings" },
            { label: "Coaching Opt-in", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600", stats: "12.5% Conversion Rate" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="bg-white p-4 border border-stone-300 brutalist-shadow group cursor-pointer"
              whileHover={{ y: -10 }}
            >
              <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.label}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-obsidian/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-brand text-white font-mono text-sm font-bold px-6 py-3 tracking-widest">VIEW RETURNS</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-stone-900 group-hover:text-brand transition-colors mb-1 font-sans">{item.label}</h4>
              <p className="text-stone-500 font-mono text-[10px] font-bold uppercase tracking-widest">{item.stats}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 9. FINAL CTA */}
      <Section className="items-center text-center bg-obsidian text-white py-40">
        <div className="max-w-4xl relative z-10">
          <RevealText className="text-3xl md:text-5xl font-bold mb-8 text-stone-400 font-sans tracking-tight">
            Clarity works. <br/> <span className="text-white text-5xl md:text-8xl font-mono uppercase tracking-tighter block mt-6">Stop losing visitors.</span>
          </RevealText>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-16">
            <Link href="/contact" className="px-12 py-8 bg-brand text-white font-mono font-bold text-2xl uppercase tracking-wide hover:scale-105 transition-transform shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] w-full md:w-auto">
              Fix My Landing Page
            </Link>
            <a href="https://wa.me/918248658302" target="_blank" className="px-10 py-6 border-2 border-white text-white font-mono font-bold text-xl uppercase tracking-wide hover:bg-white hover:text-obsidian transition-colors w-full md:w-auto">
              WhatsApp Us
            </a>
          </div>
          
          <p className="mt-16 text-stone-500 font-mono text-sm font-bold uppercase tracking-widest">
            Ready to start? <span className="text-brand border-b border-brand pb-1 ml-2">Lead Studio is ready.</span>
          </p>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

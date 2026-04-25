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
  <section id={id} className={`min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 relative overflow-hidden ${className}`}>
    {children}
  </section>
);

// --- Main Page ---

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-obsidian min-h-screen" />;

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
    <main className="bg-obsidian text-white selection:bg-brand selection:text-white">
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

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* 1. HERO SECTION */}
      <Section className="items-center text-center">
        <div className="glow-mesh absolute inset-0 opacity-30" />
        
        <div className="relative z-10 max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-8xl font-bold tracking-tighter mask-text leading-[1.1] font-syne"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            B2B Lead Generation <br/> Done for You.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-4"
          >
            <h2 className="text-3xl md:text-6xl font-bold text-brand font-syne">
              Qualified Leads in 30 Days.
            </h2>
          </motion.div>

          <RevealText delay={2} className="mt-8">
            <p className="text-xl md:text-2xl text-slate-muted max-w-2xl mx-auto">
              Most websites are static billboards. Lead Studio builds focused landing pages and outbound systems engineered to drive action and generate revenue.
            </p>
          </RevealText>

          <motion.div 
            className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <Link href="/contact" className="px-8 py-4 bg-brand text-white rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="px-8 py-4 border border-white/10 rounded-full font-bold text-lg hover:bg-white/5 transition-colors">
              Our Process
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* 2. REALIZATION SECTION - Content Expansion */}
      <Section className="items-center">
        <div className="max-w-4xl text-center">
          <RevealText className="text-4xl md:text-7xl font-bold mb-10 leading-tight font-syne">
            B2B Lead Generation Services <br/> <span className="text-slate-muted italic text-3xl block mt-4">Built for Revenue, Not Just Traffic.</span>
          </RevealText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-20">
            {[
              { title: "No Direction", desc: "Most sites confuse visitors with too many options. We guide them toward a single high-value enquiry." },
              { title: "Zero Intent", desc: "Traffic without intent is a vanity metric. We filter for qualified leads that actually have a budget." },
              { title: "Broken Funnels", desc: "If your landing page doesn't sync with your outreach, you lose trust. We build unified sales funnels." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * i, duration: 0.8 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-brand rounded-full" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-muted text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-left bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-brand">Why Outbound Lead Gen?</h3>
            <p className="text-slate-muted text-lg leading-relaxed">
              Inbound marketing takes months. Our **Outbound Lead Generation System** bypasses the wait by putting your offer directly in front of decision-makers. We combine laser-focused ICP (Ideal Customer Profile) data with conversion-optimized pages to deliver results in weeks, not years.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. SHIFT SECTION */}
      <Section className="items-center text-center bg-brand/5">
        <div className="max-w-3xl space-y-12">
          <RevealText className="text-3xl md:text-5xl font-medium text-slate-muted font-syne">
            A good landing page doesn’t explain everything.
          </RevealText>
          <RevealText delay={0.4} className="text-5xl md:text-8xl font-bold font-syne uppercase tracking-tighter">
            It guides ONE decision.
          </RevealText>
        </div>
      </Section>

      {/* 4. SOLUTION SECTION - Expansion */}
      <Section className="items-start">
        <div className="max-w-4xl space-y-20">
          <RevealText className="text-4xl md:text-6xl font-bold font-syne">
            How Our Lead Generation <br/> System Works:
          </RevealText>
          
          <div className="space-y-12 w-full">
            {[
              { icon: <MousePointer2 />, title: "Precision ICP Targeting", desc: "We identify your ideal customer profile using real-time market data, ensuring every visitor is a potential high-value client." },
              { icon: <Zap />, title: "High-Conversion Messaging", desc: "We strip away the fluff. Our landing pages focus on one pain point and one primary solution — yours." },
              { icon: <CheckCircle2 />, title: "Frictionless Conversion", desc: "From WhatsApp integration to optimized forms, we make it effortless for prospects to say 'Yes'." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-start gap-8 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="mt-1 p-4 bg-brand/10 text-brand rounded-2xl group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                  <p className="text-xl text-slate-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. OFFER SECTION */}
      <Section id="pricing" className="items-center">
        <div className="text-center mb-16">
          <RevealText className="text-4xl md:text-6xl font-bold mb-4 font-syne">The Lead Page Starter</RevealText>
          <RevealText className="text-xl text-slate-muted">A search-optimized landing page built for rapid enquiry generation.</RevealText>
        </div>

        <motion.div 
          className="w-full max-w-4xl premium-card rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 p-8">
            <div className="bg-brand text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              Limited slots available
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="text-brand font-bold mb-2 uppercase tracking-widest text-xs">Investment</div>
                <div className="text-6xl font-bold">₹3k – ₹5k</div>
              </div>
              
              <div>
                <div className="text-brand font-bold mb-2 uppercase tracking-widest text-xs">Timeline</div>
                <div className="text-3xl font-bold">2–3 Days Delivery</div>
              </div>

              <Link href="/contact" className="block w-full py-6 bg-white text-obsidian rounded-2xl text-center font-bold text-xl hover:bg-brand hover:text-white transition-all duration-300">
                Secure My Slot
              </Link>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white/50 border-b border-white/10 pb-4">Package Includes:</h4>
              <ul className="space-y-4">
                {[
                  "Conversion-focused copy structure",
                  "SEO Metadata & Schema Markup",
                  "Ultra-fast mobile optimization",
                  "WhatsApp + Form integration",
                  "12 Months hosting support"
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand w-5 h-5 flex-shrink-0" />
                    <span className="text-lg">{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* 6. SAMPLE WORK SECTION */}
      <Section className="items-center">
        <RevealText className="text-4xl md:text-6xl font-bold mb-20 text-center font-syne">Built for <span className="text-brand">Action</span></RevealText>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { label: "Real Estate Engine", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600", alt: "B2B lead generation for Real Estate using focused landing pages" },
            { label: "Fitness Accelerator", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600", alt: "Lead acquisition dashboard for fitness coaching business" },
            { label: "Coaching Opt-in", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600", alt: "Conversion-optimized landing page for high-ticket coaching" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
              whileHover={{ y: -10 }}
            >
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-3xl font-bold mb-2">{item.label}</h4>
                <p className="text-slate-muted opacity-0 group-hover:opacity-100 transition-opacity delay-100">Proven ROI and conversion metrics</p>
              </div>
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity scale-50 group-hover:scale-100 duration-500">
                <div className="bg-brand p-3 rounded-full text-white">
                  <ArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 9. FINAL CTA */}
      <Section className="items-center text-center pb-40">
        <div className="glow-mesh absolute inset-0 opacity-20" />
        <div className="max-w-4xl relative z-10">
          <RevealText className="text-4xl md:text-7xl font-bold mb-12 font-syne">
            Clarity works. <br/> <span className="text-brand">Now it’s your turn.</span>
          </RevealText>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/contact" className="px-12 py-6 bg-brand text-white rounded-2xl font-bold text-2xl hover:scale-105 transition-all shadow-2xl shadow-brand/40">
              Fix My Landing Page
            </Link>
            <a href="https://wa.me/918248658302" target="_blank" className="px-12 py-6 bg-green-600 text-white rounded-2xl font-bold text-2xl hover:bg-green-500 transition-all flex items-center gap-4">
              <MessageSquare />
              WhatsApp Us
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

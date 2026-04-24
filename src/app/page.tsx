"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, Monitor, Zap, MousePointer2, Smartphone } from "lucide-react";

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

  return (
    <main className="bg-obsidian text-white selection:bg-brand selection:text-white">
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
            Most websites don’t <br/> bring enquiries.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-4"
          >
            <h2 className="text-3xl md:text-6xl font-bold text-brand font-syne">
              This one will.
            </h2>
          </motion.div>

          <RevealText delay={2} className="mt-8">
            <p className="text-xl md:text-2xl text-slate-muted max-w-2xl mx-auto">
              Lead Studio builds focused landing pages that guide visitors toward one clear action — getting in touch.
            </p>
          </RevealText>

          <motion.div 
            className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <button className="px-8 py-4 bg-brand text-white rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 group">
              Get a Page That Converts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/10 rounded-full font-bold text-lg hover:bg-white/5 transition-colors">
              See How It Works
            </button>
          </motion.div>
        </div>

        {/* Visual Mockup Element */}
        <motion.div 
          className="mt-20 relative w-full max-w-5xl aspect-video premium-card rounded-2xl overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent opacity-50" />
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="h-full w-full flex items-center justify-center text-white/20">
            <div className="grid grid-cols-3 gap-8 w-full p-20">
              <div className="h-40 bg-white/5 rounded-xl animate-pulse" />
              <div className="h-40 bg-white/5 rounded-xl animate-pulse delay-75" />
              <div className="h-40 bg-white/5 rounded-xl animate-pulse delay-150" />
            </div>
          </div>
          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 bg-brand p-4 rounded-xl shadow-2xl shadow-brand/50 flex items-center gap-3"
          >
            <CheckCircle2 className="text-white" />
            <span className="font-bold">Conversion Secured</span>
          </motion.div>
        </motion.div>
      </Section>

      {/* 2. REALIZATION SECTION */}
      <Section className="items-center">
        <div className="max-w-4xl text-center">
          <RevealText className="text-4xl md:text-7xl font-bold mb-20 leading-tight font-syne">
            Visitors don’t convert <br/> because: <span className="text-slate-muted">they’re confused.</span>
          </RevealText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { title: "Too many choices", desc: "Paralysis by analysis kills your sales before they start." },
              { title: "No clear direction", desc: "If you don't lead, your visitors will leave." },
              { title: "No action path", desc: "A website without a journey is just a billboard." }
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
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-slate-muted text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-24 inline-block"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold border-b-4 border-brand pb-2">
              Clarity fixes conversion.
            </h2>
          </motion.div>
        </div>
      </Section>

      {/* 3. SHIFT SECTION */}
      <Section className="items-center text-center bg-brand/5">
        <div className="max-w-3xl space-y-12">
          <RevealText className="text-3xl md:text-5xl font-medium text-slate-muted font-syne">
            A good landing page doesn’t explain everything.
          </RevealText>
          <RevealText delay={0.4} className="text-5xl md:text-8xl font-bold font-syne">
            It guides one decision.
          </RevealText>
        </div>
      </Section>

      {/* 4. SOLUTION SECTION */}
      <Section className="items-start">
        <div className="max-w-4xl space-y-20">
          <RevealText className="text-4xl md:text-6xl font-bold font-syne">
            Lead Studio builds landing pages that:
          </RevealText>
          
          <div className="space-y-12 w-full">
            {[
              { icon: <MousePointer2 />, title: "Focus attention", desc: "We guide the eye where it needs to go." },
              { icon: <Zap />, title: "Remove distractions", desc: "No useless links, no fluff, no clutter." },
              { icon: <CheckCircle2 />, title: "Drive one clear action", desc: "Everything points to your primary goal." }
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
                  <p className="text-xl text-slate-muted">{item.desc}</p>
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
          <RevealText className="text-xl text-slate-muted">A focused landing page built to turn visitors into enquiries.</RevealText>
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
                <div className="text-brand font-bold mb-2">Pricing</div>
                <div className="text-6xl font-bold">₹3k – ₹5k</div>
              </div>
              
              <div>
                <div className="text-brand font-bold mb-2">Delivery</div>
                <div className="text-3xl font-bold">2–3 Days</div>
              </div>

              <button className="w-full py-6 bg-white text-obsidian rounded-2xl font-bold text-xl hover:bg-brand hover:text-white transition-all duration-300">
                Secure My Slot
              </button>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white/50 border-b border-white/10 pb-4">Includes:</h4>
              <ul className="space-y-4">
                {[
                  "One conversion-focused landing page",
                  "Clear structure and messaging",
                  "Mobile optimization",
                  "WhatsApp + form integration",
                  "1–2 revisions"
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand w-5 h-5 flex-shrink-0" />
                    <span className="text-lg">{li}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <p className="text-sm text-white/30 italic">Not included: Full websites, SEO or ads, complex integrations.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* 6. SAMPLE WORK SECTION */}
      <Section className="items-center">
        <RevealText className="text-4xl md:text-6xl font-bold mb-20 text-center font-syne">Sample Work</RevealText>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { label: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600" },
            { label: "Fitness", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600" },
            { label: "Coaching", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
              whileHover={{ y: -10 }}
            >
              <img 
                src={item.image} 
                alt={item.label}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-3xl font-bold mb-2">{item.label} Page</h4>
                <p className="text-slate-muted opacity-0 group-hover:opacity-100 transition-opacity delay-100">Focused on outcome, not design</p>
              </div>
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity scale-50 group-hover:scale-100 duration-500">
                <div className="bg-brand p-3 rounded-full">
                  <ArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 7. PROCESS SECTION */}
      <Section className="items-center bg-white/5">
        <div className="max-w-4xl w-full">
          <RevealText className="text-4xl md:text-8xl font-bold mb-20 text-center font-syne">Simple.</RevealText>
          
          <div className="space-y-12">
            {[
              { step: "1", title: "Share your business", desc: "Brief us on your goals and audience." },
              { step: "2", title: "Page gets built", desc: "We focus on the narrative and structure." },
              { step: "3", title: "Enquiries start coming in", desc: "Launch and watch the visitors act." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-12 pb-12 border-b border-white/10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3 }}
              >
                <div className="text-8xl font-black text-white/5">{item.step}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                  <p className="text-xl text-slate-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 8. TRUST BUILDER */}
      <Section className="items-center text-center">
        <div className="max-w-4xl">
          <RevealText className="text-5xl md:text-8xl font-bold mb-8 font-syne">
            Built for clarity.<br/> 
            <span className="text-slate-muted">Not complexity.</span>
          </RevealText>
          <RevealText delay={0.4} className="text-2xl text-slate-muted">
            Designed for small businesses that need results, not redesigns.
          </RevealText>
        </div>
      </Section>

      {/* 9. FINAL CTA */}
      <Section className="items-center text-center pb-40">
        <div className="glow-mesh absolute inset-0 opacity-20" />
        <div className="max-w-4xl relative z-10">
          <RevealText className="text-4xl md:text-7xl font-bold mb-12 font-syne">
            If your website isn’t bringing enquiries, <span className="text-brand">it’s not working.</span>
          </RevealText>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="px-12 py-6 bg-brand text-white rounded-2xl font-bold text-2xl hover:scale-105 transition-all shadow-2xl shadow-brand/40">
              Fix My Landing Page
            </button>
            <button className="px-12 py-6 bg-green-600 text-white rounded-2xl font-bold text-2xl hover:bg-green-500 transition-all flex items-center gap-4">
              <MessageSquare />
              WhatsApp
            </button>
          </div>
          
          <p className="mt-12 text-slate-muted font-medium uppercase tracking-widest text-sm">
            Ready to lead?
          </p>
        </div>
      </Section>

      {/* Footer / Contact Overlay */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-muted text-sm px-6">
        <div className="flex justify-center gap-8 mb-4">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
        <p>&copy; 2026 Lead Studio. All rights reserved.</p>
      </footer>

      {/* Device Indicator (Subtle Premium Touch) */}
      <div className="fixed bottom-8 left-8 hidden md:flex items-center gap-4 text-white/20 text-xs font-bold uppercase tracking-widest pointer-events-none">
        <div className="flex gap-2">
          <Monitor className="w-4 h-4" />
          <Smartphone className="w-4 h-4" />
        </div>
        <span>Optimized for High Conversion</span>
      </div>
    </main>
  );
}

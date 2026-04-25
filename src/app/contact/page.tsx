import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquare, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact Lead Studio | Start Your Lead Gen Journey | Bangalore",
  description: "Ready to fix your landing page? Contact Lead Studio today via WhatsApp or our enquiry form. Based in Bangalore, India.",
};

export default function ContactPage() {
  return (
    <main className="bg-beige-light text-obsidian selection:bg-brand selection:text-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 border-b border-stone-300 bg-beige-dark/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block border border-brand text-brand px-4 py-1 font-mono text-[10px] font-bold mb-6 uppercase tracking-[0.2em]">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-mono mb-8 tracking-tighter uppercase leading-[0.9]">
            Let&apos;s <span className="text-brand">Talk</span>
          </h1>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-sans">
            Whether you&apos;re ready to start or just have a question, we&apos;re here to help you grow.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            {/* WhatsApp */}
            <div className="p-10 border-4 border-brand bg-white brutalist-shadow-lg hover:bg-brand hover:text-white transition-all group">
              <div className="flex items-start gap-6">
                <div className="p-4 border-2 border-brand group-hover:border-white transition-colors">
                  <svg className="w-8 h-8 text-brand group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-mono uppercase tracking-tight mb-2">WhatsApp Us</h3>
                  <p className="text-stone-500 mb-6 font-sans group-hover:text-white/70">Get a response within minutes.</p>
                  <a 
                    href="https://wa.me/918248658302?text=Hi%2C%20I'm%20interested%20in%20a%20landing%20page" 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-brand font-mono font-bold border-b-2 border-brand pb-1 hover:text-white hover:border-white transition-colors group-hover:text-white group-hover:border-white"
                  >
                    Start Chat <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-10 border-2 border-obsidian bg-white brutalist-shadow hover:border-brand transition-colors group">
              <div className="flex items-start gap-6">
                <div className="p-4 border-2 border-stone-200 group-hover:border-brand transition-colors">
                  <Mail className="w-8 h-8 text-stone-400 group-hover:text-brand transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-mono uppercase tracking-tight mb-2">Email</h3>
                  <p className="text-stone-500 mb-2 font-sans">For detailed project inquiries.</p>
                  <p className="text-brand font-mono font-bold text-lg">hello@leadstudio.com</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="p-10 border-2 border-obsidian bg-white brutalist-shadow hover:border-brand transition-colors group">
              <div className="flex items-start gap-6">
                <div className="p-4 border-2 border-stone-200 group-hover:border-brand transition-colors">
                  <MapPin className="w-8 h-8 text-stone-400 group-hover:text-brand transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-mono uppercase tracking-tight mb-2">Location</h3>
                  <p className="text-stone-500 font-sans">Based in Bangalore, India.<br/>Serving clients worldwide.</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 bg-beige-dark/30 border border-stone-200 flex items-center gap-4">
              <Clock className="w-5 h-5 text-brand shrink-0" />
              <p className="text-sm font-mono font-bold uppercase tracking-wider text-stone-500">
                Avg. Response: <span className="text-brand">Under 2 Minutes</span> on WhatsApp
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-10 border-4 border-obsidian bg-white brutalist-shadow-lg">
            <h3 className="text-3xl font-bold mb-8 font-mono uppercase tracking-tighter">Send a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-400">Name</label>
                <input type="text" className="w-full h-14 px-4 bg-beige-light border-2 border-stone-300 font-sans focus:border-brand focus:outline-none transition-colors" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-400">Email</label>
                <input type="email" className="w-full h-14 px-4 bg-beige-light border-2 border-stone-300 font-sans focus:border-brand focus:outline-none transition-colors" placeholder="you@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-400">Budget Range</label>
                <select className="w-full h-14 px-4 bg-beige-light border-2 border-stone-300 font-sans focus:border-brand focus:outline-none transition-colors">
                  <option>Starter ($39)</option>
                  <option>Core ($149)</option>
                  <option>Pro ($399)</option>
                  <option>Custom</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-400">Message</label>
                <textarea className="w-full h-32 px-4 py-3 bg-beige-light border-2 border-stone-300 font-sans focus:border-brand focus:outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-obsidian text-white font-mono font-bold text-lg uppercase tracking-wide hover:bg-brand transition-colors brutalist-shadow">
                Send Message
              </button>
              <p className="text-center text-stone-400 text-xs font-mono italic">
                Prefer instant responses? Use WhatsApp instead.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquare, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Lead Studio | Start Your Lead Gen Journey | Bangalore",
  description: "Ready to fix your landing page? Contact Lead Studio today via WhatsApp or our enquiry form. Based in Bangalore, India.",
};

export default function ContactPage() {
  return (
    <main className="bg-obsidian text-white">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-syne mb-8 tracking-tighter">
            Let's <span className="text-brand">Talk</span>
          </h1>
          <p className="text-xl text-slate-muted max-w-2xl mx-auto">
            Whether you're ready to start or just have a question, we're here to help you lead.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="premium-card p-10 rounded-3xl border border-white/5 flex items-start gap-6">
              <div className="p-4 bg-brand/10 text-brand rounded-2xl">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">WhatsApp Us</h3>
                <p className="text-slate-muted mb-6">Get a response within minutes.</p>
                <a 
                  href="https://wa.me/918248658302?text=Hi%2C%20I'm%20interested%20in%20a%20landing%20page" 
                  className="inline-block text-brand font-bold border-b-2 border-brand pb-1 hover:text-white hover:border-white transition-colors"
                >
                  Start Chat
                </a>
              </div>
            </div>

            <div className="premium-card p-10 rounded-3xl border border-white/5 flex items-start gap-6">
              <div className="p-4 bg-white/5 text-white/50 rounded-2xl">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Email</h3>
                <p className="text-slate-muted mb-2">For detailed project inquiries.</p>
                <p className="text-brand font-bold text-lg">hello@leadstudio.com</p>
              </div>
            </div>

            <div className="premium-card p-10 rounded-3xl border border-white/5 flex items-start gap-6">
              <div className="p-4 bg-white/5 text-white/50 rounded-2xl">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Location</h3>
                <p className="text-slate-muted">Based in Bangalore, India.<br/>Serving clients worldwide.</p>
              </div>
            </div>
          </div>

          {/* Form Placeholder */}
          <div className="premium-card p-10 rounded-3xl border border-white/5 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-8 font-syne">Send a Message</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-white/30">Name</label>
                <div className="w-full h-12 bg-white/5 rounded-xl border border-white/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-white/30">Email</label>
                <div className="w-full h-12 bg-white/5 rounded-xl border border-white/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-white/30">Message</label>
                <div className="w-full h-32 bg-white/5 rounded-xl border border-white/10" />
              </div>
              <button className="w-full py-5 bg-brand text-white rounded-xl font-bold text-lg opacity-50 cursor-not-allowed">
                Submit Form (Coming Soon)
              </button>
              <p className="text-center text-slate-muted text-sm italic">Please use WhatsApp for immediate inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

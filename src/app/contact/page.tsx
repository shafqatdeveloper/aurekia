"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Contact Us"
        description="Our concierge team is here to assist with your architectural vision."
        breadcrumb={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif tracking-tight uppercase">
                Get in Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are a private client or an interior designer, our
                specialists are ready to help you select the perfect materials
                for your project.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-secondary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="uppercase tracking-widest text-[10px] font-bold opacity-40 mb-1">
                    Call Us
                  </p>
                  <p className="text-lg font-serif">1-800-AURELIA</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-secondary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="uppercase tracking-widest text-[10px] font-bold opacity-40 mb-1">
                    Email Us
                  </p>
                  <p className="text-lg font-serif">support@aurelia.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-secondary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="uppercase tracking-widest text-[10px] font-bold opacity-40 mb-1">
                    Visit Studio
                  </p>
                  <p className="text-lg font-serif">
                    123 Luxury Lane, Beverly Hills, CA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-secondary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="uppercase tracking-widest text-[10px] font-bold opacity-40 mb-1">
                    Opening Hours
                  </p>
                  <p className="text-lg font-serif">Mon - Fri: 9am - 6pm</p>
                  <p className="text-lg font-serif">Sat: 10am - 4pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 p-12 space-y-10">
            <h3 className="text-sm font-bold uppercase tracking-[0.4em] pb-6 border-b border-foreground/10">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-foreground/20 py-3 outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-foreground/20 py-3 outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-foreground/20 py-3 outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-foreground/20 py-3 outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-foreground text-background py-5 uppercase tracking-widest text-[10px] font-bold hover:bg-accent hover:text-foreground transition-all">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

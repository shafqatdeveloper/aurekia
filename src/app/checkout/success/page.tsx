"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check } from "lucide-react";
import Link from "next/link";

export default function CheckoutSuccessPage() {
  const orderNumber = "AURE-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 flex flex-col items-center justify-center pt-52 pb-24 px-6 text-center">
        <div className="w-20 h-20 bg-green-50 flex items-center justify-center rounded-full mb-8 text-green-600">
          <Check className="w-10 h-10 stroke-[1.5]" />
        </div>

        <div className="max-w-xl space-y-6">
          <p className="uppercase tracking-[0.5em] text-[10px] font-bold opacity-40">
            Order Confirmed
          </p>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight uppercase">
            Thank You for Your Acquisition
          </h1>
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            Your collection has been finalized. Artisans are now preparing your
            materials for delivery. An email confirmation has been sent to your
            registered address.
          </p>

          <div className="py-10 border-y border-foreground/5 space-y-2">
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">
              Order Reference
            </p>
            <p className="text-xl font-serif">{orderNumber}</p>
          </div>

          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/profile"
              className="px-12 py-5 border border-foreground/10 uppercase tracking-widest text-[11px] font-bold hover:bg-secondary/50 transition-all w-full sm:w-auto"
            >
              Track Order
            </Link>
            <Link
              href="/"
              className="px-12 py-5 bg-[#333] text-white uppercase tracking-widest text-[11px] font-bold hover:bg-[#1a1a1a] transition-all w-full sm:w-auto"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";

interface CheckoutLayoutProps {
  children: React.ReactNode;
  step: 1 | 2 | 3;
}

export function CheckoutLayout({ children, step }: CheckoutLayoutProps) {
  const { items, getTotalPrice } = useCartStore();
  const subtotal = getTotalPrice();

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Main Content */}
      <div className="flex-1 px-6 lg:px-20 py-12 lg:py-20 lg:max-w-4xl">
        <header className="mb-16">
          <Link
            href="/"
            className="text-3xl font-serif tracking-[0.2em] uppercase text-[#333]"
          >
            Aurelia
          </Link>

          <nav className="flex items-center gap-6 mt-12 text-[10px] uppercase tracking-[0.15em] font-bold border-b border-foreground/5 pb-4">
            <span className={step >= 1 ? "text-[#333]" : "opacity-30"}>
              01 Information
            </span>
            <span className="w-4 h-px bg-foreground/10" />
            <span className={step >= 2 ? "text-[#333]" : "opacity-30"}>
              02 Shipping
            </span>
            <span className="w-4 h-px bg-foreground/10" />
            <span className={step >= 3 ? "text-[#333]" : "opacity-30"}>
              03 Payment
            </span>
          </nav>
        </header>

        {children}
      </div>

      {/* Summary Sidebar - Desktop Only Sticky */}
      <aside className="lg:w-[500px] bg-secondary/20 px-6 lg:px-16 py-12 lg:py-20 border-l border-foreground/5 lg:sticky lg:top-0 h-screen overflow-y-auto">
        <div className="space-y-12">
          <div className="pb-6 border-b border-foreground/10">
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#333]">
              Acquisition Summary
            </h3>
          </div>

          <div className="divide-y divide-foreground/5 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-6 py-6 first:pt-0">
                <div className="relative w-20 h-24 bg-white border border-foreground/5 shrink-0 overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <span className="absolute -top-2 -right-2 bg-[#333] text-white text-[9px] w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-lg">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-2">
                  <div className="space-y-0.5">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#333] leading-tight">
                      {item.name}
                    </p>
                    <p className="text-[9px] opacity-40 uppercase tracking-widest italic">
                      {item.category}
                    </p>
                  </div>
                  <p className="text-[11px] font-bold tracking-tight">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 pt-10 border-t border-[#333]/10">
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] uppercase tracking-[0.15em] font-bold opacity-40">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-[0.15em] font-bold opacity-40">
                <span>Shipping</span>
                <span className="italic">
                  {step === 1 ? "Calculated at next step" : "Gratis"}
                </span>
              </div>
            </div>

            <div className="pt-8 border-t border-[#333]/20">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#333]">
                  Total acquisition
                </span>
                <div className="text-right">
                  <span className="text-[10px] opacity-40 mr-2 uppercase font-bold tracking-widest">
                    GBP
                  </span>
                  <span className="text-3xl tracking-tighter font-serif uppercase text-[#333]">
                    £{subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
              <p className="text-[9px] opacity-30 text-right uppercase tracking-widest">
                Including VAT
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

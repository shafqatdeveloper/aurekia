"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder - In real app, use a high-res image */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white space-y-8 px-4 max-w-4xl">
        <p className="uppercase tracking-[0.4em] text-sm font-medium animate-fade-in">
          Exquisite Craftsmanship
        </p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-none animate-slide-up">
          Luxury Living <br />
          <span className="italic lowercase">without</span> Compromise
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-up">
          <Link
            href="/collections"
            className="px-10 py-4 bg-white text-black uppercase tracking-widest text-xs font-bold hover:bg-black hover:text-white transition-colors duration-500 w-full sm:w-auto"
          >
            Shop Collections
          </Link>
          <Link
            href="/custom"
            className="px-10 py-4 border border-white text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-colors duration-500 w-full sm:w-auto"
          >
            Custom Design
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-white/50" />
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";

export function Wishlist() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h3 className="text-xl font-serif tracking-widest uppercase">
          My Wishlist
        </h3>
        <p className="text-sm text-muted-foreground font-sans">
          Items you've saved for later inspiration.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-t border-foreground/5">
        <div className="flex gap-4 p-4 border border-foreground/5 group hover:bg-secondary/20 transition-colors">
          <div className="relative w-24 h-24 bg-secondary overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
              alt="Wishlist Item"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between py-1">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest font-bold">
                Calacatta Gold
              </p>
              <p className="text-sm font-serif">£89.00 / m²</p>
            </div>
            <div className="flex justify-between items-center border-t border-foreground/5 pt-2">
              <Link
                href="/products/1"
                className="text-[9px] uppercase tracking-widest font-bold hover:underline"
              >
                View Product
              </Link>
              <button className="text-destructive hover:opacity-50 transition-opacity">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

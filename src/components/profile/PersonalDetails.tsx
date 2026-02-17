"use client";
import React from "react";

export function PersonalDetails() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500 max-w-2xl">
      <div className="space-y-2">
        <h3 className="text-xl font-serif tracking-widest uppercase">
          Personal Details
        </h3>
      </div>

      <div className="space-y-6 pt-6">
        <div className="space-y-2">
          <p className="text-[11px] font-bold text-foreground">Full Name:</p>
          <input
            type="text"
            defaultValue="M Shafqat"
            className="w-full bg-white border border-foreground/10 px-4 py-3 text-sm font-sans focus:outline-none focus:border-foreground/30 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <p className="text-[11px] font-bold text-foreground">
            Email Address:
          </p>
          <input
            type="email"
            defaultValue="shafqatrasool4215609@gmail.com"
            className="w-full bg-white border border-foreground/10 px-4 py-3 text-sm font-sans focus:outline-none focus:border-foreground/30 transition-colors"
          />
        </div>
      </div>

      <button className="w-full md:w-auto px-12 py-4 bg-[#333] text-white uppercase tracking-widest text-[11px] font-bold hover:bg-[#1a1a1a] transition-colors">
        Update Details
      </button>
    </div>
  );
}

"use client";
import React from "react";

export function ChangePassword() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500 max-w-2xl">
      <div className="space-y-2">
        <h3 className="text-xl font-serif tracking-widest uppercase">
          Change Password
        </h3>
      </div>

      <div className="space-y-6 pt-6">
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-foreground">
            Current Password:
          </label>
          <input
            type="password"
            placeholder="Current Password"
            className="w-full bg-white border border-foreground/10 px-4 py-3 text-sm focus:border-foreground/30 outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-foreground">
            New Password:
          </label>
          <input
            type="password"
            placeholder="New Password"
            className="w-full bg-white border border-foreground/10 px-4 py-3 text-sm focus:border-foreground/30 outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-foreground">
            Confirm New Password:
          </label>
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full bg-white border border-foreground/10 px-4 py-3 text-sm focus:border-foreground/30 outline-none transition-colors"
          />
        </div>
      </div>

      <button className="w-full md:w-auto px-12 py-4 bg-[#333] text-white uppercase tracking-widest text-[11px] font-bold hover:bg-[#1a1a1a] transition-colors">
        Update Password
      </button>
    </div>
  );
}

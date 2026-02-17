"use client";
import React, { useState } from "react";

export function AddressBook() {
  const [view, setView] = useState<"list" | "add">("list");
  const [hasAddress, setHasAddress] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    setHasAddress(true);
    setShowSuccess(true);
    setView("list");
    setTimeout(() => setShowSuccess(false), 5000);
  };

  if (view === "add") {
    return (
      <div className="space-y-8 animate-in slide-in-from-right duration-500 max-w-2xl">
        <h3 className="text-xl font-serif tracking-widest uppercase">
          Add New Address
        </h3>
        <form onSubmit={handleAddAddress} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold">First Name:</label>
              <input
                type="text"
                placeholder="Your First Name"
                className="w-full border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-foreground/30"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold">Last Name:</label>
              <input
                type="text"
                placeholder="Your Last Name"
                className="w-full border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-foreground/30"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-bold">Company:</label>
            <input
              type="text"
              placeholder="Company (Optional)"
              className="w-full border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-foreground/30"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-bold">Address Line 1:</label>
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-foreground/30"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-bold">Address Line 2:</label>
            <input
              type="text"
              placeholder="Address Line 2 (optional)"
              className="w-full border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-foreground/30"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold">City:</label>
              <input
                type="text"
                placeholder="City"
                className="w-full border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-foreground/30"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold">County:</label>
              <input
                type="text"
                placeholder="County (optional)"
                className="w-full border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-foreground/30"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold">Postcode:</label>
              <input
                type="text"
                placeholder="Postcode"
                className="w-full border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-foreground/30"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-bold">Country:</label>
            <select className="w-full border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-foreground/30 appearance-none bg-white">
              <option>United Kingdom</option>
              <option>Ireland</option>
              <option>France</option>
            </select>
          </div>
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="px-12 py-4 bg-[#333] text-white uppercase tracking-widest text-[11px] font-bold hover:bg-[#1a1a1a] transition-all"
            >
              Add New Address
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              className="px-12 py-4 border border-foreground/10 uppercase tracking-widest text-[11px] font-bold hover:bg-secondary/50 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <h3 className="text-xl font-serif tracking-widest uppercase">
        Address Book
      </h3>

      {showSuccess && (
        <div className="p-4 border border-green-500/30 bg-green-50/50 text-green-700 text-sm font-bold text-center animate-in slide-in-from-top duration-500">
          Your address has been saved.
        </div>
      )}

      {hasAddress ? (
        <div className="space-y-8">
          <div className="border border-foreground/10 p-6 max-w-sm space-y-4">
            <p className="text-[11px] font-bold opacity-40 uppercase tracking-widest">
              Address 1
            </p>
            <div className="text-sm font-sans leading-relaxed">
              <p className="font-bold">Muhammad Shafqat Rasool</p>
              <p>Akbar Hostel room no. 203 Opposite Comsats</p>
              <p>University Sahiwal</p>
              <p>SAHIWAL</p>
              <p>57000</p>
            </div>
            <button className="text-[11px] font-bold underline uppercase tracking-widest hover:opacity-50">
              Edit
            </button>
          </div>
        </div>
      ) : (
        <div className="py-2">
          <p className="text-sm font-sans">You have no addresses</p>
        </div>
      )}

      <div className="pt-6">
        <button
          onClick={() => setView("add")}
          className="px-12 py-4 bg-[#333] text-white uppercase tracking-widest text-[11px] font-bold hover:bg-[#1a1a1a] transition-colors"
        >
          Add New Address
        </button>
      </div>
    </div>
  );
}

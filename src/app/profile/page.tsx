"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { PersonalDetails } from "@/components/profile/PersonalDetails";
import { ChangePassword } from "@/components/profile/ChangePassword";
import { AddressBook } from "@/components/profile/AddressBook";
import { OrdersReturns } from "@/components/profile/OrdersReturns";
import { Wishlist } from "@/components/profile/Wishlist";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "personal", label: "Personal Details", component: PersonalDetails },
  { id: "password", label: "Change Password", component: ChangePassword },
  { id: "addresses", label: "Address Book", component: AddressBook },
  { id: "orders", label: "Orders & Returns", component: OrdersReturns },
  { id: "wishlist", label: "Wishlist", component: Wishlist },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabId>("personal");

  const ActiveComponent =
    TABS.find((tab) => tab.id === activeTab)?.component || PersonalDetails;

  const activeLabel =
    TABS.find((tab) => tab.id === activeTab)?.label || "Personal Details";

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 pt-52 pb-24 px-6 lg:px-20 max-w-8xl mx-auto w-full">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold mb-8 opacity-50">
          <Link href="/" className="hover:opacity-100">
            Home
          </Link>
          <span>/</span>
          <span className="opacity-100">My Account</span>
          <span>/</span>
          <span className="opacity-100 italic">My {activeLabel}</span>
        </div>

        <div className="space-y-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Account
            </h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-foreground/5">
            <div className="flex flex-wrap gap-x-8 gap-y-4 pb-4 md:pb-0">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabId)}
                  className={cn(
                    "text-[10px] md:text-[11px] uppercase tracking-widest font-bold transition-all duration-300 relative py-4",
                    activeTab === tab.id
                      ? "text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-foreground"
                      : "text-muted-foreground hover:text-foreground opacity-60 hover:opacity-100",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button className="text-[11px] uppercase tracking-widest font-bold hover:opacity-60 transition-opacity py-4 text-left md:text-right">
              Logout
            </button>
          </div>

          <div className="mt-12 bg-transparent">
            <ActiveComponent />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

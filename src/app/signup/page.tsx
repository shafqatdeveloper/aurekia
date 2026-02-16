import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const SIGNATURE_IMAGE =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <section className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block relative h-full min-h-[600px]">
          <Image
            src={SIGNATURE_IMAGE}
            alt="Luxury Interior"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="flex flex-col items-center justify-center px-6 pt-72 pb-40">
          <div className="w-full max-w-lg space-y-16">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-serif tracking-tight uppercase leading-none">
                Join AURELIA
              </h1>
              <p className="text-muted-foreground uppercase tracking-[0.3em] text-[10px] font-bold">
                Curate your architectural vision
              </p>
            </div>

            <form className="space-y-10 group">
              <div className="space-y-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="FULL NAME"
                    className="w-full bg-transparent border-b border-foreground/10 py-5 text-[10px] tracking-[0.3em] focus:border-foreground outline-none transition-all uppercase placeholder:opacity-40"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-foreground/10 py-5 text-[10px] tracking-[0.3em] focus:border-foreground outline-none transition-all uppercase placeholder:opacity-40"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="PASSWORD"
                    className="w-full bg-transparent border-b border-foreground/10 py-5 text-[10px] tracking-[0.3em] focus:border-foreground outline-none transition-all uppercase placeholder:opacity-40"
                    required
                  />
                </div>
              </div>

              <button className="w-full bg-foreground text-background py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-accent hover:text-foreground transition-all flex items-center justify-center gap-3">
                Request Membership
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="flex justify-center items-center gap-6 pt-12 border-t border-foreground/10">
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold opacity-40 italic">
                Already a member?
              </span>
              <Link
                href="/login"
                className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-foreground pb-1"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

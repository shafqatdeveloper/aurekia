"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";

const SIGNATURE_IMAGE =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop";

export default function ProductDetailsPage() {
  const addItem = useCartStore((state) => state.addItem);

  // Static placeholder data for demo
  const product = {
    id: "1",
    name: "Calacatta Gold Slab",
    price: 450,
    category: "Marble",
    image: SIGNATURE_IMAGE,
    description:
      "Exceptional Italian marble with striking gold and grey veining. Each slab is a unique masterpiece of nature, perfect for luxury kitchen islands, bathroom feature walls, and custom floor applications.",
    details: [
      { label: "Origin", value: "Carrara, Italy" },
      { label: "Finish", value: "Polished" },
      { label: "Size", value: "Variable Slabs (up to 320x160cm)" },
      { label: "Thickness", value: "20mm / 30mm" },
    ],
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toast.success(`${product.name} added to your collection`);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title={product.name}
        description={product.category}
        breadcrumb={[
          { label: "Tiles", href: "/tiles" },
          { label: product.name, href: `/products/${product.id}` },
        ]}
      />

      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Gallery */}
          <div className="space-y-8">
            <div className="relative aspect-square bg-secondary overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square bg-secondary overflow-hidden opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-12 py-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight uppercase leading-none">
                {product.name}
              </h2>
              <p className="text-2xl font-light">
                ${product.price.toFixed(2)}{" "}
                <span className="text-sm text-muted-foreground italic">
                  per sq ft
                </span>
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              {product.description}
            </p>

            <div className="space-y-8 pt-8 border-t">
              <div className="grid grid-cols-1 gap-6">
                {product.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex justify-between items-center py-2 border-b border-foreground/5"
                  >
                    <span className="uppercase tracking-widest text-[10px] font-bold opacity-40">
                      {detail.label}
                    </span>
                    <span className="uppercase tracking-widest text-[10px] font-bold">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-10">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-foreground text-background py-5 text-center uppercase tracking-widest text-[10px] font-bold hover:bg-accent hover:text-foreground transition-colors"
                >
                  Add to Collection
                </button>
                <button className="flex-1 border border-foreground py-5 uppercase tracking-widest text-[10px] font-bold hover:bg-foreground hover:text-background transition-colors">
                  Request Sample
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

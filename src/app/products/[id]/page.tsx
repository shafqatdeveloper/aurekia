"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductSpecs } from "@/components/products/ProductSpecs";
import { ProductHighlight } from "@/components/products/ProductHighlight";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";
import { Heart, Share2, Info } from "lucide-react";

const SIGNATURE_IMAGE =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop";

export default function ProductDetailsPage() {
  const addItem = useCartStore((state) => state.addItem);

  const product = {
    id: "1",
    name: "Calacatta Gold Porcelain Tile 600x1200mm",
    price: 89.0, // per m2
    category: "Floor & Wall Tiles",
    images: [
      SIGNATURE_IMAGE,
      SIGNATURE_IMAGE,
      SIGNATURE_IMAGE,
      SIGNATURE_IMAGE,
    ],
    description:
      "A masterpiece of contemporary surfaces, our Calacatta Gold Porcelain tile captures the authentic essence of Italian marble. Featuring soft grey veining with subtle gold highlights, this high-performance porcelain offers the timeless beauty of natural stone with the durability required for modern living.",
    specs: [
      { label: "Material", value: "Polished Porcelain" },
      { label: "Finish", value: "High Gloss / Polished" },
      { label: "Size", value: "600 x 1200 mm" },
      { label: "Slip Rating", value: "R9" },
      { label: "Variation", value: "V2 - Slight Variation" },
      { label: "Suitability", value: "Internal Floor & Wall" },
      { label: "Rectified Edge", value: "Yes" },
      { label: "Thickness", value: "9.5 mm" },
    ],
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
    });
    toast.success(`${product.name} added to your collection`);
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-16 px-6 lg:px-20 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center space-x-4 text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
          <Link href="/" className="hover:opacity-100 transition-opacity">
            Home
          </Link>
          <span>/</span>
          <Link href="/tiles" className="hover:opacity-100 transition-opacity">
            Tiles
          </Link>
          <span>/</span>
          <span className="opacity-100 font-extrabold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Right: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-serif tracking-tight uppercase leading-[1.1]">
                {product.name}
              </h1>
              <div className="flex items-center justify-between border-y border-foreground/5 py-6">
                <div className="space-y-1">
                  <p className="text-2xl font-serif">
                    £
                    {product.price.toLocaleString("en-GB", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">
                    Price per m² (Inc Vat)
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-3 border border-foreground/10 hover:bg-secondary transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-3 border border-foreground/10 hover:bg-secondary transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed font-sans">
                {product.description}
              </p>
              <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity">
                <Info className="w-4 h-4" />
                <span>Ordering and delivery info</span>
              </button>
            </div>

            <div className="flex space-x-2 pt-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-foreground text-background py-5 text-center uppercase tracking-widest text-[11px] font-bold hover:bg-accent hover:text-foreground transition-colors"
              >
                Add to Collection
              </button>
              <button className="w-full border border-foreground/20 py-5 uppercase tracking-widest text-[10px] font-bold hover:bg-foreground hover:text-background transition-all">
                Request Sample
              </button>
            </div>

            <div className="bg-secondary/30 p-8 space-y-4 border border-foreground/5">
              <p className="text-[10px] uppercase tracking-widest font-bold">
                Availability
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-xs uppercase tracking-widest">
                  In Stock - Ready for immediate dispatch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <ProductHighlight
          title="The Essence of Italian Sophistication"
          description="Each tile is meticulously crafted to showcase the dramatic veining and variations found in natural Calacatta marble. Our advanced HD printing technology ensures no two tiles are identical within a 15m² area, providing an incredibly authentic architectural finish."
          image={SIGNATURE_IMAGE}
        />

        <ProductSpecs specs={product.specs} schematicImage={SIGNATURE_IMAGE} />

        <ProductHighlight
          reverse
          title="Precision Engineered Edges"
          description="These tiles are rectified, meaning they are cut to exact specifications after firing. This allows for minimal grout lines (as low as 1.5mm), creating a seamless, high-end look that is both easier to clean and visually stunning across large open spaces."
          image={SIGNATURE_IMAGE}
        />
      </div>

      {/* Trust Quote / Reassurance */}
      <section className="py-32 bg-secondary/20 text-center border-y border-foreground/5">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h3 className="text-sm font-bold uppercase tracking-[0.4em]">
            Handpicked Perfection
          </h3>
          <p className="text-xl md:text-2xl font-serif italic text-muted-foreground leading-relaxed">
            "We believe that the foundation of any luxury space starts with the
            materials. Our tiles are curated for those who seek the
            extraordinary in every detail."
          </p>
          <div className="w-px h-12 bg-foreground/10 mx-auto" />
        </div>
      </section>

      <Footer />
    </main>
  );
}

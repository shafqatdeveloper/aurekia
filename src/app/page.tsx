import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Footer } from "@/components/layout/Footer";
import { CollectionCard } from "@/components/home/CollectionCard";
import { ProductCard } from "@/components/products/ProductCard";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const SIGNATURE_IMAGE =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop";

const COLLECTIONS = [
  {
    title: "Carrara Marble",
    subtitle: "Timeless Italian Elegance",
    image: SIGNATURE_IMAGE,
    href: "/collections/carrara",
  },
  {
    title: "Ceramic Textures",
    subtitle: "Modern Artisanal Finish",
    image: SIGNATURE_IMAGE,
    href: "/collections/ceramic",
  },
  {
    title: "Stone Basins",
    subtitle: "Minimalist Sculptures",
    image: SIGNATURE_IMAGE,
    href: "/collections/stone-basins",
  },
];

const TRENDING_PRODUCTS = [
  {
    id: "1",
    name: "Calacatta Gold Slab",
    price: 450,
    category: "Marble",
    image: SIGNATURE_IMAGE,
  },
  {
    id: "2",
    name: "Emerald Green Mosaic",
    price: 120,
    category: "Tiles",
    image: SIGNATURE_IMAGE,
  },
  {
    id: "3",
    name: "Matte Black Hexagon",
    price: 85,
    category: "Ceramic",
    image: SIGNATURE_IMAGE,
  },
  {
    id: "4",
    name: "Travertine Vessel Sink",
    price: 890,
    category: "Custom",
    image: SIGNATURE_IMAGE,
  },
];

const REVIEWS = [
  {
    id: 1,
    name: "Alexander Vance",
    role: "Interior Architect",
    text: "The quality of the materials from Aurelia is unparalleled. It completely transformed our Mayfair project.",
    stars: 5,
  },
  {
    id: 2,
    name: "Eleanor Rigby",
    role: "Homeowner",
    text: "Minimalist design at its finest. The customer service and attention to detail reflect the luxury price point.",
    stars: 5,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Intro Section */}
      <section className="py-32 px-6 lg:px-20 text-center max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif tracking-widest leading-tight">
          Crafting Spaces that <span className="italic">Inspire</span> & Endure
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
          Aurelia represents more than just surface materials. We curate
          architectural statements that define the very essence of luxury
          living, bringing artisanal craftsmanship to the modern home.
        </p>
        <div className="w-px h-24 bg-foreground/10 mx-auto" />
      </section>

      {/* Featured Collections */}
      <section className="pb-32 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((collection) => (
            <CollectionCard key={collection.title} {...collection} />
          ))}
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-32 px-6 lg:px-20 bg-secondary/30 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <p className="uppercase tracking-[0.4em] text-[10px] font-bold">
              Unrivaled Quality
            </p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
              The Art of <br /> Artisanal Ceramics
            </h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Every AURELIA tile is a testament to centuries-old techniques
              refined for the contemporary eye. Our master craftsmen select only
              the finest raw materials, ensuring each piece carries its own
              unique narrative and impeccable finish.
            </p>
            <div className="pt-8">
              <button className="luxury-underline uppercase tracking-widest text-[10px] font-bold">
                Read our story
              </button>
            </div>
          </div>
          <div className="relative aspect-[1/1] lg:aspect-[16/9]">
            <Image
              src={SIGNATURE_IMAGE}
              alt="Craftsmanship"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-background p-8 hidden md:block border">
              <p className="font-serif italic text-4xl">100%</p>
              <p className="uppercase tracking-widest text-[8px] mt-2 font-bold">
                Handmade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-32 px-6 lg:px-20">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <p className="uppercase tracking-[0.4em] text-[10px] font-bold">
              Selection
            </p>
            <h2 className="text-3xl font-serif tracking-widest uppercase">
              What&apos;s Trending
            </h2>
          </div>
          <button className="hidden sm:block text-[10px] uppercase tracking-widest border-b border-foreground pb-1 font-bold">
            View All Products
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {TRENDING_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section className="py-32 px-6 lg:px-20 bg-foreground text-background">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-16">
          <Quote className="w-12 h-12 text-background/10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            {REVIEWS.map((review) => (
              <div key={review.id} className="space-y-6">
                <div className="flex justify-center gap-1">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-serif italic tracking-wide leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                <div className="pt-4">
                  <p className="uppercase tracking-widest text-[10px] font-bold">
                    {review.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 lg:px-20 text-center border-b">
        <div className="max-w-2xl mx-auto space-y-8">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em]">
            Join the Inner Circle
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Exclusive access to our private viewing events and seasonal
            catalogues.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 mt-8">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="flex-1 bg-transparent border-b border-foreground/20 py-4 text-xs tracking-widest focus:border-foreground outline-none transition-colors uppercase"
            />
            <button className="px-10 py-4 bg-foreground text-background uppercase tracking-widest text-[10px] font-bold hover:bg-accent hover:text-foreground transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

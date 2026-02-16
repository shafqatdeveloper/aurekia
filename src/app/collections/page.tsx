import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { CollectionCard } from "@/components/home/CollectionCard";

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
  {
    title: "Veneer Slabs",
    subtitle: "Thin & Versatile",
    image: SIGNATURE_IMAGE,
    href: "/collections/veneer",
  },
  {
    title: "Mosaic Art",
    subtitle: "Intricate Details",
    image: SIGNATURE_IMAGE,
    href: "/collections/mosaic",
  },
  {
    title: "Outdoor Stone",
    subtitle: "Raw & Rugged",
    image: SIGNATURE_IMAGE,
    href: "/collections/outdoor",
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Collections"
        description="Explore our curated selection of fine surface materials, from the classic elegance of Carrara marble to the modern textures of handcrafted ceramic."
        breadcrumb={[{ label: "Collections", href: "/collections" }]}
      />

      <section className="py-24 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {COLLECTIONS.map((collection) => (
            <CollectionCard key={collection.title} {...collection} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

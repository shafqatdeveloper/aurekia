"use client";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  category,
}: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id, name, price, image, category });
    toast.success(`${name} added to your collection`);
  };

  return (
    <div className="group space-y-4">
      <Link
        href={`/products/${id}`}
        className="block relative aspect-[4/5] overflow-hidden bg-secondary"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-background p-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 z-10 hover:bg-foreground hover:text-background"
        >
          <Plus className="w-5 h-5" />
        </button>
      </Link>

      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {category}
        </p>
        <div className="flex justify-between items-start">
          <Link
            href={`/products/${id}`}
            className="text-sm font-bold uppercase tracking-wider hover:opacity-60 transition-opacity"
          >
            {name}
          </Link>
          <p className="text-sm font-light">${price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

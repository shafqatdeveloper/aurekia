"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductHighlightProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export function ProductHighlight({
  title,
  description,
  image,
  reverse,
}: ProductHighlightProps) {
  return (
    <section className="py-24">
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center",
          reverse ? "lg:flex-row-reverse" : "",
        )}
      >
        <div className={cn("space-y-8", reverse ? "lg:order-2" : "")}>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight leading-tight uppercase">
            {title}
          </h2>
          <div className="w-12 h-px bg-foreground/20" />
          <p className="text-muted-foreground leading-relaxed font-sans text-sm md:text-base">
            {description}
          </p>
        </div>
        <div
          className={cn(
            "relative aspect-4/3 overflow-hidden",
            reverse ? "lg:order-1" : "",
          )}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </div>
    </section>
  );
}

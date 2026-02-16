import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}

export function PageHeader({
  title,
  description,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="pt-72 pb-20 px-6 lg:px-20 border-b">
      <div className="max-w-7xl mx-auto space-y-6">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            {breadcrumb.map((item, index) => (
              <div key={item.href} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" />
                <Link
                  href={item.href}
                  className={
                    index === breadcrumb.length - 1
                      ? "text-foreground"
                      : "hover:text-foreground transition-colors"
                  }
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        )}

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight uppercase leading-none">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed font-medium">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

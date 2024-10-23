"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Palette, ShoppingBag, Mail } from "lucide-react";

const routes = [
  {
    path: "/",
    label: "Gallery",
    icon: Palette,
    description: "View our art collection",
  },
  {
    path: "/shop",
    label: "Shop",
    icon: ShoppingBag,
    description: "Purchase artwork",
  },
  {
    path: "/contact",
    label: "Contact",
    icon: Mail,
    description: "Get in touch",
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-black/20 backdrop-blur-md" role="navigation" aria-label="Main navigation">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="text-3xl font-display tracking-wide text-zinc-100 p-4"
          aria-label="The Rare Haus - Home"
        >
          the-rare-haus
        </Link>
        <div className="flex gap-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md text-xs uppercase tracking-wider transition-all duration-300",
                pathname === route.path
                  ? "bg-zinc-100 text-zinc-900 font-bold"
                  : "text-zinc-300 hover:text-zinc-100 hover:bg-white/10"
              )}
              aria-current={pathname === route.path ? "page" : undefined}
              aria-label={route.description}
            >
              <route.icon className="w-3.5 h-3.5" aria-hidden="true" />
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
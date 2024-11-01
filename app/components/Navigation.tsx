"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Palette, ShoppingBag, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-black/20 backdrop-blur-md" role="navigation" aria-label="Main navigation">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="text-xl md:text-3xl font-display tracking-wide text-zinc-100"
          aria-label="The Rare Haus - Home"
        >
          the-rare-haus
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
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

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-zinc-100">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-zinc-900/95 backdrop-blur-md border-zinc-800">
            <SheetHeader>
              <SheetTitle className="text-zinc-100">Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-2">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md text-sm transition-all duration-300",
                    pathname === route.path
                      ? "bg-zinc-100 text-zinc-900 font-bold"
                      : "text-zinc-300 hover:text-zinc-100 hover:bg-white/10"
                  )}
                >
                  <route.icon className="w-4 h-4" />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
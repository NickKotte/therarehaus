import { Palette, ShoppingBag, Calendar } from "lucide-react";
import { Section } from "@/app/types/section";

export const sections: Section[] = [
  {
    id: "gallery",
    title: "Gallery",
    color: "bg-gradient-to-br from-zinc-900/95 via-zinc-800/98 to-neutral-800/95",
    textColor: "text-zinc-100",
    icon: Palette,
  },
  {
    id: "shop",
    title: "Shop",
    color: "bg-gradient-to-br from-slate-900/95 via-slate-800/98 to-slate-700/95",
    textColor: "text-slate-100",
    icon: ShoppingBag,
  },
  {
    id: "consultation",
    title: "Contact",
    color: "bg-gradient-to-br from-stone-900/95 via-stone-800/98 to-stone-700/95",
    textColor: "text-stone-100",
    icon: Calendar,
  },
];
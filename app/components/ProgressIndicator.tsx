"use client";

import { cn } from "@/lib/utils";
import { sections } from "../config/sections";

interface ProgressIndicatorProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export function ProgressIndicator({ activeSection, onSectionChange }: ProgressIndicatorProps) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-50">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={cn(
            "h-1.5 rounded-sm transition-all duration-300",
            activeSection === section.id
              ? "bg-zinc-200 w-8"
              : "bg-zinc-500/30 hover:bg-zinc-400/50 w-1.5"
          )}
        />
      ))}
    </div>
  );
}
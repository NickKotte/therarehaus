import { LucideIcon } from "lucide-react";

export interface Section {
  id: string;
  title: string;
  color: string;
  textColor: string;
  icon: LucideIcon;
}

export interface SectionProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
  onVerticalScroll?: (direction: 'up' | 'down') => void;
}
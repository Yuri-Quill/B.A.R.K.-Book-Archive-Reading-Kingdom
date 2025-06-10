import type { LucideIcon } from "lucide-react"; 

export interface NavItem {
   id: number;
   name: string;
   icon: LucideIcon;
   link: string;
   description: string;
}

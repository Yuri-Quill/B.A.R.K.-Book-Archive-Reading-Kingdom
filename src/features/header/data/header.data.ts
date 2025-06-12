import {
   BookHeart,
   BookOpenText,
   Castle,
   Handshake,
   LibraryBig,
   LogIn,
   ShoppingBag,
} from "lucide-react";

import type { NavItem } from "@/features/header/header.types";

export const headerNavData: NavItem[] = [
   {
      id: 1,
      name: "Home",
      icon: Castle,
      link: "/",
      description: "Main page of the B.A.R.K — Book Archive Reading Kingdom",
   },
   {
      id: 2,
      name: "Books",
      icon: LibraryBig,
      link: "/books",
      description: "Catalog of books",
   },
   {
      id: 3,
      name: "About Us",
      icon: BookOpenText,
      link: "/about",
      description: "Information about us",
   },
   {
      id: 4,
      name: "Contacts",
      icon: Handshake,
      link: "/contacts",
      description: "Contact us",
   },
];

export const actionsNavData: NavItem[] = [
   {
      id: 1,
      name: "Favorites",
      icon: BookHeart,
      link: "/favorites",
      description: "List of favorite books",
   },
   {
      id: 2,
      name: "Cart",
      icon: ShoppingBag,
      link: "/cart",
      description: "Shopping cart",
   },
   {
      id: 3,
      name: "auth",
      icon: LogIn,
      link: "/auth",
      description: "Authorization page",
   },
];

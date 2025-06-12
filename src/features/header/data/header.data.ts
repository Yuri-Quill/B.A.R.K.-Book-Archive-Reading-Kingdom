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
import { Routes } from "@/shared/constants/routes";

export const headerNavData: NavItem[] = [
   {
      id: 1,
      name: "Home",
      icon: Castle,
      link: Routes.Home,
      description: "Main page of the B.A.R.K — Book Archive Reading Kingdom",
   },
   {
      id: 2,
      name: "Books",
      icon: LibraryBig,
      link: Routes.Books,
      description: "Catalog of books",
   },
   {
      id: 3,
      name: "About Us",
      icon: BookOpenText,
      link: Routes.AboutUs,
      description: "Information about us",
   },
   {
      id: 4,
      name: "Contacts",
      icon: Handshake,
      link: Routes.Contacts,
      description: "Contact us",
   },
];

export const actionsNavData: NavItem[] = [
   {
      id: 1,
      name: "Favorites",
      icon: BookHeart,
      link: Routes.Favorites,
      description: "List of favorite books",
   },
   {
      id: 2,
      name: "Cart",
      icon: ShoppingBag,
      link: Routes.Cart,
      description: "Shopping cart",
   },
   {
      id: 3,
      name: "auth",
      icon: LogIn,
      link: Routes.Auth,
      description: "Authorization page",
   },
];

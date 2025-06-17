import {
   Crown,
   BookOpenText,
   Castle,
   Handshake,
   LibraryBig,
   ShoppingBag,
} from "lucide-react";

import type { NavItem } from "@/features/header/header.types";
import { Routes } from "@/shared/constants/routes";

export const headerNavData: NavItem[] = [
   {
      id: 1,
      name: "Home",
      icon: Castle,
      link: Routes.home,
      description: "Main page of the B.A.R.K — Book Archive Reading Kingdom",
   },
   {
      id: 2,
      name: "Books",
      icon: LibraryBig,
      link: Routes.books,
      description: "Catalog of books",
   },
   {
      id: 3,
      name: "About Us",
      icon: BookOpenText,
      link: Routes.aboutUs,
      description: "Information about us",
   },
   {
      id: 4,
      name: "Contacts",
      icon: Handshake,
      link: Routes.contacts,
      description: "Contact us",
   },
];

export const actionsNavData: NavItem[] = [
   {
      id: 1,
      name: "Favorites",
      icon: Crown,
      link: Routes.favorites,
      description: "List of favorite books",
   },
   {
      id: 2,
      name: "Cart",
      icon: ShoppingBag,
      link: Routes.cart,
      description: "Shopping cart"
   }

];

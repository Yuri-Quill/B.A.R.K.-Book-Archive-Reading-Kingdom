import { Routes } from "@/shared/constants/routes.enum";
import { BookHeart, LogIn, ShoppingBag } from "lucide-react";

import type { Nav } from "@/shared/types/nav.types";

export const actionsNavData: Nav[] = [
   {
      id: "favorites",
      label: "Favorites",
      path: Routes.Favorites,
      icon: BookHeart,
      description: "View your favorite books",
   },
   {
      id: "cart",
      label: "Cart",
      path: Routes.Cart,
      icon: ShoppingBag,
      description: "View your cart",
   },
   {
      id: "login",
      label: "Login",
      path: Routes.Login,
      icon: LogIn,
      description: "Log in to your account",
   },
];

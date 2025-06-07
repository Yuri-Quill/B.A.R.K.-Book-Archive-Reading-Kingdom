import { Routes } from "@/shared/constants/routes.enum";
import { LibraryBig, SwatchBook, Handshake, NotebookTabs } from "lucide-react";

import type { Nav } from "@/shared/types/nav.types";

const headerNavData: Nav[] = [
   {
      id: "books",
      label: "Books",
      path: Routes.Books,
      icon: LibraryBig,
      description: "Go to all books catalog",
   },

   {
      id: "genres",
      label: "Genres",
      path: Routes.Genres,
      icon: SwatchBook,
      description: "Browse books by genres",
   },

   {
      id: "about",
      label: "About Us",
      path: Routes.About,
      icon: Handshake,
      description: "Learn more about us",
   },

   {
      id: "contact",
      label: "Contact",
      path: Routes.Contacts,
      icon: NotebookTabs,
      description: "Contact information",
   },
];

export default headerNavData;

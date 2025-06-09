import MainLayout from "@/layouts/main-layot";
import Home from "@/pages/home-page/home-page";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      errorElement: null,
      children: [
         {
            index: true,
            element: <Home />,
         },
      ],
   },
]);

export default router;

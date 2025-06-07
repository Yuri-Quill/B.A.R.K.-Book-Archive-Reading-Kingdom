import MainLayout from "@/Layouts/MainLayout";
import Home from "@/pages/Home/HomePage";

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

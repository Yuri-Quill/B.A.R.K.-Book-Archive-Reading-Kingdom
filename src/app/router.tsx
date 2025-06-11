import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "@/features/home/pages/HomePage";
import { AppLayout } from "@/features/layouts/components/AppLayout";

const ErrorPage = lazy(
   () => import("@/features/common-pages/error-page/ErrorPage")
);

export const router = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
      ],
   },
]);

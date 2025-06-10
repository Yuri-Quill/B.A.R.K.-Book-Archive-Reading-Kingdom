import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { HomePage } from "@/features/home/pages/HomePage";

const ErrorPage = lazy(() => import("@/features/common-pages/error-page/ErrorPage"));

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
      ],
   },
]);

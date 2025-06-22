import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { HomePage } from "@features/home/pages/HomePage";
import { AppLayout } from "@features/layouts/AppLayout/AppLayout";
import { Routes } from "@shared/constants/routes";

const ErrorPage = lazy(
   () => import("@features/common-pages/error-page/ErrorPage")
);

const SignInPage = lazy(
   () => import("@/features/auth/pages/SignInPage/SignInPage")
);

const SignUpPage = lazy(
   () => import("@/features/auth/pages/SignUpPage/SignUpPage")
);

const ForgotPAsswordPage = lazy(
   () => import("@features/auth/pages/ForgotPasswordPage/ForgotPasswordPage")
);

const UserAccountPage = lazy(
   () => import("@/features/user/pages/UserAccountPage/UserAccountPage")
);

const ResetPasswordPage = lazy(
   () => import("@features/auth/pages/ResetPasswordPage/ResetPasswordPage")
);

export const router = createBrowserRouter([
   {
      path: Routes.home,
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         {
            path: "/auth",
            element: <Navigate to={Routes.authSignIn} replace />,
         },
         {
            path: Routes.authSignIn,
            element: <SignInPage />,
         },
         {
            path: Routes.authSignUp,
            element: <SignUpPage />,
         },
         { path: Routes.authForgotPassword, element: <ForgotPAsswordPage /> },
         {
            path: Routes.authResetPassword,
            element: <ResetPasswordPage />,
         },
         {
            path: Routes.userProfile,
            element: <UserAccountPage />,
         },
      ],
   },
]);

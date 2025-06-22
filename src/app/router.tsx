import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { HomePage } from "@features/home/pages/HomePage";
import { AppLayout } from "@/features/layouts/app-layout/AppLayout";
import { Routes } from "@shared/constants/routes";

const ErrorPage = lazy(
   () => import("@features/common-pages/error-page/ErrorPage")
);

const SignInPage = lazy(
   () => import("@/features/auth/pages/sign-in-page/SignInPage")
);

const SignUpPage = lazy(
   () => import("@/features/auth/pages/sign-up-page/SignUpPage")
);

const ForgotPAsswordPage = lazy(
   () => import("@/features/auth/pages/forgot-password-page/ForgotPasswordPage")
);

const UserAccountPage = lazy(
   () => import("@/features/user/pages/user-account-page/UserAccountPage")
);

const ResetPasswordPage = lazy(
   () => import("@/features/auth/pages/reset-password-page/ResetPasswordPage")
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

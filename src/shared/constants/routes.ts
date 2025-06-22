export const Routes = {
   home: "/",
   books: "/catalog",
   aboutUs: "/about-us",
   contacts: "/contacts",
   favorites: "/favorites",
   cart: "/cart",
   orders: "/orders",
   userProfile: "/user/profile",
   auth: "/auth",
   authSignIn: "/auth/sign-in",
   authSignUp: "/auth/sign-up",
   authLogout: "/auth/logout",
   authForgotPassword: "/auth/forgot-password",
   authResetPassword: "/user/reset-password",
} as const;

export type RoutePath = (typeof Routes)[keyof typeof Routes];

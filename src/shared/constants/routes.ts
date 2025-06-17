export const Routes = {
   home: "/",
   books: "/catalog",
   aboutUs: "/about-us",
   contacts: "/contacts",
   favorites: "/favorites",
   cart: "/cart",
   orders: "/orders",
   profile: "/profile",
   auth: "/auth",
   authSignIn: "/auth/sign-in",
   authSignUp: "/auth/sign-up",
   authLogout: "/auth/logout",
} as const;

export type RoutePath = (typeof Routes)[keyof typeof Routes];

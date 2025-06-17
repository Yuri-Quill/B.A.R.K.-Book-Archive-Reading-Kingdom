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
   authSignin: "/auth/signin",
   authSignup: "/auth/signup",
} as const;

export type RoutePath = (typeof Routes)[keyof typeof Routes];

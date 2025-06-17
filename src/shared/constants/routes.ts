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
   authLogin: "/auth/login",
   authRegister: "/auth/register",
} as const;

export type RoutePath = (typeof Routes)[keyof typeof Routes];

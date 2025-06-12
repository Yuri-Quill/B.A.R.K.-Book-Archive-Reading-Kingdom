export const Routes = {
   Home: "/",
   Books: "/catalog",
   AboutUs: "/about-us",
   Contacts: "/contacts",

   Favorites: "/favorites",
   Cart: "/cart",
   Orders: "/orders",
   Profile: "/profile",

   Auth: "/auth",
   AuthLogin: "/auth/login",
   AuthRegister: "/auth/register",
} as const;

export type RoutePath = (typeof Routes)[keyof typeof Routes];

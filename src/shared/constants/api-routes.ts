
export const API = {
   AUTH: {
      LOGIN: "/auth/login",
      REGISTER: "/auth/register",
      LOGOUT: "/auth/logout",
      REFRESH: "/auth/refresh-token",
      FORGOT_PASSWORD: "/auth/forgot-password",
      RESET_PASSWORD: "/auth/reset-password",
   } as const,

   USER: {
      ME: "/users/me",
      PROFILE: "/users/:id",
   } as const,

   CART: {
      GET: "/cart",
      ADD: "/cart",
      REMOVE: "/cart/:productId",
      CLEAR: "/cart",
      UPDATE_QUANTITY: "/cart/:productId/quantity",
   } as const,

   FAVORITES: {
      GET: "/favorites",
      TOGGLE: "/favorites/toggle",
   } as const,

   ORDERS: {
      CREATE: "/orders",
      GET_ALL: "/orders",
      GET_BY_ID: "/orders/:id",
      UPDATE_STATUS: "/orders/:id/status",
   } as const,

   BOOKS: {
      GET_ALL: "/books",
      GET_BY_ID: "/books/:id",
      CREATE: "/books",
      UPDATE: "/books/:id",
      DELETE: "/books/:id",
      RATE: "/books/:id/rate",
   } as const,

   CONTACT: {
      SEND: "/contact",
      GET_ALL: "/contact",
      RESOLVE: "/contact/:id/resolve",
   } as const,

   COMMENTS: {
      GET_BY_PRODUCT: "/comments",
      ADD: "/comments",
      REPLY: "/comments/reply",
      DELETE: "/comments/:id",
   } as const,
} as const;

export type ApiTypes = (typeof API)[keyof typeof API];


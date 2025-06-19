export const endpoints = {
   auth: {
      signin: "/auth/signin",
      signup: "/auth/signup",
      logout: "/auth/logout",
      refreshToken: "/auth/refresh-token",
      forgotPassword: "/auth/forgot-password",
   } as const,

   user: {
      resetPassword: (token: string) => `/auth/reset-password/${token}`,
      updatePassword: "/auth/update-password",
      updateUser: "/auth/update-user",
      updateProfile: "/auth/update-profile",
   },

   products: {
      getAll: "/products",
      getOne: (id: string) => `/products/${id}`,
      create: "/products",
      update: (id: string) => `/products/${id}`,
      delete: (id: string) => `/products/${id}`,
   },

   cart: {
      get: "/cart",
      add: "/cart",
      updateItem: (itemId: string) => `/cart/${itemId}`,
      removeItem: (itemId: string) => `/cart/${itemId}`,
      clear: "/cart",
   },

   comments: {
      getAll: "/comments",
      getOne: (id: string) => `/comments/${id}`,
      create: "/comments",
      update: (id: string) => `/comments/${id}`,
      delete: (id: string) => `/comments/${id}`,
   },

   contacts: {
      create: "/contacts",
      getMy: "/contacts",
      getAll: "/contacts/all",
      getOne: (id: string) => `/contacts/${id}`,
      updateStatus: (id: string) => `/contacts/${id}`,
      delete: (id: string) => `/contacts/${id}`,
   },

   favorites: {
      get: "/favorites",
      add: "/favorites",
      remove: (productId: string) => `/favorites/${productId}`,
   },

   orders: {
      create: "/orders",
      getMy: "/orders",
      getAll: "/orders/all",
      getOne: (id: string) => `/orders/${id}`,
      markPaid: (id: string) => `/orders/${id}/pay`,
      markDelivered: (id: string) => `/orders/${id}/deliver`,
   },
} as const;


type Paths<T> = T extends string
   ? T
   : T extends object
   ? { [K in keyof T]: Paths<T[K]> }[keyof T]
   : never;

export type EndpointsType = Paths<typeof endpoints>;

export const endpoints = {
   auth: {
      login: "/auth/login",
   },
} as const;


type Paths<T> = T extends string
   ? T
   : T extends object
   ? { [K in keyof T]: Paths<T[K]> }[keyof T]
   : never;

export type EndpointsType = Paths<typeof endpoints>;

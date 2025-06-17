import type { User } from "@/features/auth/types/auth.types";

export interface InitialStateType {
   user: null | User;
   loading: boolean;
   error: null | string;
   isAuthenticated: boolean;
}




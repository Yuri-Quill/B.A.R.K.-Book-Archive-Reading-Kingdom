import { http } from "@/app/http";

import { endpoints } from "@/shared/constants/endpoints";

import type {
   AuthResponse,
   LogoutPayload,
   SigninPayload,
   SignupPayload,
} from "@/features/auth/types/auth.types";

export const signin = async (payload: SigninPayload): Promise<AuthResponse> => {
   const { data } = await http.post<AuthResponse>(
      endpoints.auth.signin,
      payload
   );
   return data;
};

export const signup = async (payload: SignupPayload): Promise<AuthResponse> => {
   const { data } = await http.post<AuthResponse>(
      endpoints.auth.signup,
      payload
   );

   return data;
};

export const logout = async (): Promise<LogoutPayload> => {
   const { data } = await http.post<LogoutPayload>(endpoints.auth.logout);
   return data;
};


export const forgotPassword = () => {};

export const refreshToken = () => {};

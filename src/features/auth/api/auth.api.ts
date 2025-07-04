import { http } from "@/app/http";

import { endpoints } from "@/shared/constants/endpoints";

import type {
   AuthResponse,
   ForgotPasswordPayload,
   ApiStatusResponse,
   SigninPayload,
   SignupPayload,
   ResetPasswordArgs,
   ValidateResetTokenResponse,
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

export const logout = async (): Promise<ApiStatusResponse> => {
   const { data } = await http.post<ApiStatusResponse>(endpoints.auth.logout);
   return data;
};

export const forgotPassword = async (
   payload: ForgotPasswordPayload
): Promise<ApiStatusResponse> => {
   const { data } = await http.post<ApiStatusResponse>(
      endpoints.auth.forgotPassword,
      payload
   );
   return data;
};

export const refreshToken = async (): Promise<AuthResponse> => {
   const { data } = await http.get<AuthResponse>(endpoints.auth.refreshToken);
   return data;
};

export const resetPassword = async ({
   payload,
   token,
}: ResetPasswordArgs): Promise<AuthResponse> => {
   const { data } = await http.patch<AuthResponse>(
      endpoints.user.resetPassword(token),
      payload
   );
   return data;
};

export const validateResetToken = async (
   token: string
): Promise<ValidateResetTokenResponse> => {
   const { data } = await http.get<ValidateResetTokenResponse>(
      endpoints.user.validateResetToken(token)
   );
   return data;
};

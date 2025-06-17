import { createAsyncThunk } from "@reduxjs/toolkit";

import {
   forgotPassword,
   logout,
   refreshToken,
   signin,
   signup,
} from "@/features/auth/api/auth.api";

import type {
   ApiStatusResponse,
   AuthResponse,
   ForgotPasswordPayload,
   SigninPayload,
   SignupPayload,
} from "@/features/auth/types/auth.types";

export const signinAuthThunk = createAsyncThunk<
   AuthResponse,
   SigninPayload,
   { rejectValue: { message: string } }
>("auth/signin", async (payload: SigninPayload, { rejectWithValue }) => {
   try {
      const data = await signin(payload);
      return data;
   } catch (error: unknown) {
      if (error instanceof Error) {
         return rejectWithValue({ message: error.message });
      }
      return rejectWithValue({ message: "Sign In failed, unknown error 🫠" });
   }
});

export const signupAuthThunk = createAsyncThunk<
   AuthResponse,
   SignupPayload,
   { rejectValue: { message: string } }
>("auth/signup", async (payload: SignupPayload, { rejectWithValue }) => {
   try {
      const data = await signup(payload);
      return data;
   } catch (error: unknown) {
      if (error instanceof Error) {
         return rejectWithValue({ message: error.message });
      }
      return rejectWithValue({ message: "Sign Up failed, unknown error 🫠" });
   }
});

export const logoutAuthThunk = createAsyncThunk<
   ApiStatusResponse,
   void,
   { rejectValue: { message: string } }
>("auth/logout", async (_, { rejectWithValue }) => {
   try {
      const data = await logout();
      return data;
   } catch (error: unknown) {
      if (error instanceof Error) {
         return rejectWithValue({ message: error.message });
      }
      return rejectWithValue({ message: "Logout failed, unknown error 🫠" });
   }
});

export const forgotPasswordThunk = createAsyncThunk<
   ApiStatusResponse,
   ForgotPasswordPayload,
   { rejectValue: { message: string } }
>(
   "auth/forgotPassword",
   async (payload: ForgotPasswordPayload, { rejectWithValue }) => {
      try {
         const data = await forgotPassword(payload);
         return data;
      } catch (error: unknown) {
         if (error instanceof Error) {
            return rejectWithValue({ message: error.message });
         }
         return rejectWithValue({
            message: "Forgot password failed, unknown error 🫠",
         });
      }
   }
);

export const refreshTokenThunk = createAsyncThunk<
   AuthResponse | ApiStatusResponse,
   void,
   { rejectValue: { message: string } }
>("auth/refreshToken", async (_, { rejectWithValue }) => {
   try {
      const response = await refreshToken();
      return response;
   } catch (error: unknown) {
      if (error instanceof Error) {
         return rejectWithValue({ message: error.message });
      }
      return rejectWithValue({
         message: "Refresh token failed, unknown error 🫠",
      });
   }
});

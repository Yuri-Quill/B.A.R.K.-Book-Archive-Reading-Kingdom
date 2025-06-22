import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiErrorHandler } from "@/shared/utils/api/errorHandler";

import {
   forgotPassword,
   logout,
   refreshToken,
   resetPassword,
   signin,
   signup,
   validateResetToken,
} from "@/features/auth/api/auth.api";

import type {
   ApiStatusResponse,
   AuthResponse,
   ForgotPasswordPayload,
   ResetPasswordArgs,
   SigninPayload,
   SignupPayload,
   ValidateResetTokenResponse,
} from "@/features/auth/types/auth.types";

export const signinAuthThunk = createAsyncThunk<
   AuthResponse,
   SigninPayload,
   { rejectValue: { message: string } }
>("auth/signin", async (payload, { rejectWithValue }) => {
   try {
      const data = await signin(payload);
      return data;
   } catch (error: unknown) {
      return rejectWithValue({ message: apiErrorHandler(error) });
   }
});

export const signupAuthThunk = createAsyncThunk<
   AuthResponse,
   SignupPayload,
   { rejectValue: { message: string } }
>("auth/signup", async (payload, { rejectWithValue }) => {
   try {
      const data = await signup(payload);
      return data;
   } catch (error) {
      return rejectWithValue({ message: apiErrorHandler(error) });
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
   } catch (error) {
      return rejectWithValue({ message: apiErrorHandler(error) });
   }
});

export const forgotPasswordThunk = createAsyncThunk<
   ApiStatusResponse,
   ForgotPasswordPayload,
   { rejectValue: { message: string } }
>("auth/forgotPassword", async (payload, { rejectWithValue }) => {
   try {
      const data = await forgotPassword(payload);
      return data;
   } catch (error) {
      return rejectWithValue({ message: apiErrorHandler(error) });
   }
});

export const refreshTokenThunk = createAsyncThunk<
   AuthResponse,
   void,
   { rejectValue: { message: string } }
>("auth/refreshToken", async (_, { rejectWithValue }) => {
   try {
      const response = await refreshToken();
      return response;
   } catch (error) {
      return rejectWithValue({ message: apiErrorHandler(error) });
   }
});

export const resetPasswordAuthThunk = createAsyncThunk<
   AuthResponse,
   ResetPasswordArgs,
   { rejectValue: { message: string } }
>("auth/resetPassword", async (args, { rejectWithValue }) => {
   try {
      const data = await resetPassword(args);
      return data;
   } catch (error) {
      return rejectWithValue({ message: apiErrorHandler(error) });
   }
});

export const validateResetTokenThunk = createAsyncThunk<
   ValidateResetTokenResponse,
   string,
   {
      rejectValue: { message: string };
   }
>("auth/validateResetToken", async (token, { rejectWithValue }) => {
   try {
      const data = await validateResetToken(token);
      return data;
   } catch (error) {
      return rejectWithValue({ message: apiErrorHandler(error) });
   }
});

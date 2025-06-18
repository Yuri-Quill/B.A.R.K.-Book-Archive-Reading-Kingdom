import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { InitialStateType } from "@/features/auth/model/auth.slice.types";
import {
   forgotPasswordThunk,
   logoutAuthThunk,
   refreshTokenThunk,
   signinAuthThunk,
   signupAuthThunk,
} from "@/features/auth/model/auth.thunks";

import type { AuthResponse } from "@/features/auth/types/auth.types";

const initialState: InitialStateType = {
   user: null,
   loading: false,
   error: null,
   isAuthenticated: false,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      resetAuthError(state) {
         state.error = null;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(signinAuthThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(
            signinAuthThunk.fulfilled,
            (state, action: PayloadAction<AuthResponse>) => {
               state.loading = false;
               state.user = action.payload.data.user;
               state.isAuthenticated = true;
               state.error = null;
            }
         )
         .addCase(signinAuthThunk.rejected, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error =
               action.payload?.message || "Unknown error with sign in!";
         })
         .addCase(signupAuthThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(
            signupAuthThunk.fulfilled,
            (state, action: PayloadAction<AuthResponse>) => {
               state.loading = false;
               state.user = action.payload.data.user;
               state.isAuthenticated = true;
               state.error = null;
            }
         )
         .addCase(signupAuthThunk.rejected, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error =
               action.payload?.message || "Unknown error with sign up!";
         })
         .addCase(logoutAuthThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(logoutAuthThunk.fulfilled, (state) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
         })
         .addCase(logoutAuthThunk.rejected, (state, action) => {
            state.loading = false;
            state.error =
               action.payload?.message || "Unknown error with log out!";
         })
         .addCase(forgotPasswordThunk.pending, (state) => {
            state.loading = true;
         })

         .addCase(forgotPasswordThunk.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
         })
         .addCase(forgotPasswordThunk.rejected, (state, action) => {
            state.loading = false;
            state.error =
               action.payload?.message || "Unknown error with forgot password!";
         })
         .addCase(refreshTokenThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(
            refreshTokenThunk.fulfilled,
            (state, action: PayloadAction<AuthResponse>) => {
               state.loading = false;
               state.user = action.payload.data.user;
               state.isAuthenticated = true;
               state.error = null;
            }
         )
         .addCase(refreshTokenThunk.rejected, (state) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            // state.error =
            //    action.payload?.message || "Unknown error with token refresh!";
         });
   },
});

export const { resetAuthError } = authSlice.actions;

export default authSlice.reducer;

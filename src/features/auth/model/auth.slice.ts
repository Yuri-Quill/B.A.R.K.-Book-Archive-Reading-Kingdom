import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { InitialStateType } from "@/features/auth/model/auth.slice.types";


const initialState: InitialStateType = {
   user: null,
   loading: false,
   error: null,
   isAuthenticated: false,
};


const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
      .addCase()

   }
});


export default authSlice.reducer

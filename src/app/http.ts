import axios, { type AxiosRequestConfig } from "axios";

import { store, type AppDispatch } from "@app/store/store";
import {
   logoutAuthThunk,
   refreshTokenThunk,
} from "@/features/auth/model/auth.thunks";

const dispatch: AppDispatch = store.dispatch;

export const http = axios.create({
   baseURL: "http://localhost:10000/api/v1",
   withCredentials: true,
});

http.interceptors.response.use(
   (response) => response,
   async (error) => {
      const originalRequest = error.config as AxiosRequestConfig & {
         _retry?: boolean;
      };

      if (error.response?.status === 401 && !originalRequest._retry) {
         originalRequest._retry = true;

         try {
            await dispatch(refreshTokenThunk()).unwrap();

            return http(originalRequest);
         } catch (refreshErr) {
            console.error("Refresh token failed", refreshErr);

            dispatch(logoutAuthThunk());

            return Promise.reject(refreshErr);
         }
      }

      return Promise.reject(error);
   }
);

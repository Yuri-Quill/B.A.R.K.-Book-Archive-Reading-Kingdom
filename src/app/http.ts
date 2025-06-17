import axios, { type AxiosRequestConfig } from "axios";

import {
   logoutAuthThunk,
   refreshTokenThunk,
} from "@/features/auth/model/auth.thunks";

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

      const isRefreshingRequest =
         originalRequest.url?.includes("/auth/refresh");

      if (
         error.response?.status === 401 &&
         !originalRequest._retry &&
         !isRefreshingRequest
      ) {
         originalRequest._retry = true;

         const { store } = await import("@/app/store/store");
         const dispatch = store.dispatch;

         try {
            await dispatch(refreshTokenThunk()).unwrap();
            return http(originalRequest);
         } catch (refreshErr) {
            dispatch(logoutAuthThunk());
            return Promise.reject(refreshErr);
         }
      }

      return Promise.reject(error);
   }
);

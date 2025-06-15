import axios from "axios";

export const http = axios.create({
   baseURL: "http://localhost:10000/http/v1", // https://server-l7aa.onrender.com/http/v1
   withCredentials: true,
});

http.interceptors.response.use(
   (response) => response,
   async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
         originalRequest._retry = true;

         try {
            await http.get("/auth/refreshToken");

            return http(originalRequest);
         } catch (refreshErr) {
            console.error("Refresh token failed", refreshErr);
         }
      }

      return Promise.reject(error);
   }
);

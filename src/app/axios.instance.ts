import axios from "axios";

export const axiosInstance = axios.create({
   baseURL: "https://new-server-s2wx.onrender.com/app/",
   withCredentials: true,
});

import axios from "axios";

export const axiosInstance = axios.create({
   baseURL: "http://localhost:10000/api/", // https://server-l7aa.onrender.com/api/
   withCredentials: true,
});

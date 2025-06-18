import axios from "axios";


export const http = axios.create({
   baseURL: "http://localhost:10000/api/v1",
   withCredentials: true,
});


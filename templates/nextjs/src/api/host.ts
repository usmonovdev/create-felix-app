import axios from "axios";
import { base_url } from "./URLs";

export let baseHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};

export let axiosInstance = axios.create({
  baseURL: base_url,
  headers: baseHeaders,
  timeout: 60000 /*---------- 1 min ----------*/,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios error:", error);
    return Promise.reject(error); // Xatoni qayta uzatish
  }
);

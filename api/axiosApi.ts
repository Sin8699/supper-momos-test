import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.supermomos-dev.com",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

import axios from "axios";

export const resasClient = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp/api/v1/",
  timeout: 5000,
  headers: {
    "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY,
  },
});

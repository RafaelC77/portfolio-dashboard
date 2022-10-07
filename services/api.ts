import axios, { AxiosError } from "axios";
import { parseCookies, destroyCookie } from "nookies";
import Router from "next/router";

export function setupAPI() {
  const cookies = parseCookies();

  const api = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
      Authorization: `Bearer ${cookies["dashboard.token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response.status === 401) {
        destroyCookie(null, "dashboard.token");
        destroyCookie(null, "dashboard.user");

        Router.push("/");
      }
    }
  );

  return api;
}

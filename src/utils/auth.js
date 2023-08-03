import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("access_token");
  return token;
}

export function firstPageLoader() {
  return redirect("/signin");
}

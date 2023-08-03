import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("access_token");
  return token;
}

export function firstPageLoader() {
  return redirect("/signin");
}

export function privateLoader() {
  const token = getAuthToken();
  if (!!token) {
    return redirect("/todo");
  }
  return null;
}
export function publicLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/signin");
  }
  return null;
}

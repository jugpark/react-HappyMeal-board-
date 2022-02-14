import axios from "axios";
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER, AUTH_USER } from "./types";

export const login = (dataToSubmit) => {
  const request = axios
    .post("/api/users/login", dataToSubmit) //
    .then((response) => response.data);
  localStorage.setItem("userInfo", JSON.stringify(dataToSubmit));
  console.log(dataToSubmit);

  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const register = (dataToSubmit) => {
  const request = axios
    .post("/api/users/register", dataToSubmit) //
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const logout = (dataToSubmit) => {
  const request = axios
    .get("/api/users/logout", dataToSubmit) //
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
};

export const auth = () => {
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

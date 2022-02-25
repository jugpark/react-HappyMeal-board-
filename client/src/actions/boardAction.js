import axios from "axios";
import { BOARD_SAVE, BOARD_REMOVE, BOARD_READ, BOARD_LIST } from "./types";

export const save = (dataToSubmit) => {
  const request = axios
    .post("/api/users/login", dataToSubmit) //
    .then((response) => response.data);
  console.log(dataToSubmit);

  return {
    type: BOARD_SAVE,
    payload: request,
  };
};

export const remove = (dataToSubmit) => {
  const request = axios
    .post("/api/users/register", dataToSubmit) //
    .then((response) => response.data);

  return {
    type: BOARD_REMOVE,
    payload: request,
  };
};

 export const read = (dataToSubmit) => {
  const request = axios
    .get("/api/users/logout", dataToSubmit) //
    .then((response) => response.data);

  return {
    type: BOARD_READ,
    payload: request,
  };
};

export const list = () => {
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return {
    type: BOARD_LIST,
    payload: request,
  };
}

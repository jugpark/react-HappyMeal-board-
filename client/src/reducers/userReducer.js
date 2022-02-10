import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };

    default:
      return state;
  }
}

import { LOGIN_USER, REGISTER_USER, LOGOUT_USER, AUTH_USER } from "../actions/types";

export const users = (state = {}, action) =>{
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case LOGOUT_USER:
      return { ...state };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    default:
      return state;
  }
}
export default users;
